/* MER-201 v0.3 enhancement; original v0.2 logic and local state are retained. */
(()=>{"use strict";
const $=id=>document.getElementById(id);
const date=new Date(),dayKey=[date.getFullYear(),String(date.getMonth()+1).padStart(2,"0"),String(date.getDate()).padStart(2,"0")].join("-");
const smallKey="meridian-small-tasks-"+dayKey;
function read(){try{const v=JSON.parse(localStorage.getItem(smallKey)||"[]");return Array.isArray(v)?v:[]}catch{return []}}
let tasks=read();
function persist(){try{localStorage.setItem(smallKey,JSON.stringify(tasks));return true}catch{alert("Meridian could not save these tasks. Please check browser storage.");return false}}
const greeting=$("greeting");if(greeting){const p=date.getHours()<12?"morning":date.getHours()<17?"afternoon":"evening";greeting.textContent="Good "+p+", Luke."}
const top=document.querySelector(".top");
if(top){
const toggle=document.createElement("button");toggle.type="button";toggle.className="mer-header-toggle";toggle.textContent="More about today ⌄";toggle.setAttribute("aria-expanded","false");
const extra=document.createElement("div");extra.className="mer-header-extra";extra.id="merHeaderExtra";extra.hidden=true;
const opening=document.querySelector(".opening");if(opening)extra.append(opening);
const context=document.createElement("p");context.className="small";context.textContent="Ashlar's live personal briefing will appear when connected. For now, today's priorities and appointments remain on this device.";extra.append(context);
const sub=$("date");if(sub){sub.after(toggle,extra)}
toggle.setAttribute("aria-controls","merHeaderExtra");
toggle.onclick=()=>{extra.hidden=!extra.hidden;const expanded=!extra.hidden;document.body.classList.toggle("mer-header-open",expanded);toggle.textContent=expanded?"Less about today ⌃":"More about today ⌄";toggle.setAttribute("aria-expanded",String(expanded))};
}
function wrapCard(card,title,countText,openByDefault=false){
if(!card)return null;const details=document.createElement("details");details.className=card.className+" mer-accordion";details.id=card.id||"";details.open=openByDefault;
const summary=document.createElement("summary");const label=document.createElement("span");label.textContent=title;summary.append(label);
if(countText){const count=document.createElement("span");count.className="muted";count.textContent=countText;summary.append(count)}
card.removeAttribute("id");card.className="";card.style.display="contents";
card.replaceWith(details);details.append(summary,card);return details;
}
const habitsCard=$("habitsCard");if(habitsCard){const d=wrapCard(habitsCard,"Small rhythms","Tap to expand");const c=$("habitCount");if(c){c.style.display="none";const count=d.querySelector("summary .muted");const observer=new MutationObserver(()=>{count.textContent=c.textContent||"Tap to expand"});observer.observe(c,{childList:true,characterData:true,subtree:true});count.textContent=c.textContent||"Tap to expand"}}
const scheduleCard=Array.from(document.querySelectorAll(".card")).find(e=>e.querySelector("#appointments"));
if(scheduleCard){const d=wrapCard(scheduleCard,"Today's appointments","Tap to expand");d.id="merTodaySchedule";
const next=document.querySelector(".next");if(next){next.classList.add("mer-tap-next");next.setAttribute("role","button");next.tabIndex=0;next.setAttribute("aria-controls",d.id);next.setAttribute("aria-expanded","false");next.setAttribute("aria-label","Toggle today's appointments");
next.addEventListener("click",()=>{d.open=!d.open;next.setAttribute("aria-expanded",String(d.open))});next.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();next.click()}});d.addEventListener("toggle",()=>next.setAttribute("aria-expanded",String(d.open)))}}
const small=document.createElement("details");small.className="card mer-accordion";small.id="merSmallerTasks";
const summary=document.createElement("summary");summary.innerHTML='<span>Smaller tasks</span><span class="muted" id="merSmallCount">0 to do</span>';small.append(summary);
const list=document.createElement("div");list.id="merSmallList";small.append(list);
const form=document.createElement("form");form.className="mer-small-form";
const input=document.createElement("input");input.required=true;input.maxLength=100;input.placeholder="Add a small useful action";input.setAttribute("aria-label","Small task title");
const add=document.createElement("button");add.className="primary";add.type="submit";add.textContent="Add";form.append(input,add);small.append(form);
const note=document.createElement("p");note.className="mer-status";note.textContent="Saved on this device. Ashlar's contextual two-minute suggestions require a future verified integration.";small.append(note);
const next=document.querySelector(".next");if(next)next.before(small);else $("priorities").closest(".card").after(small);
function render(){list.replaceChildren();tasks.forEach(t=>{const row=document.createElement("div");row.className="mer-small-row"+(t.done?" done":"");const cb=document.createElement("input");cb.type="checkbox";cb.className="check";cb.checked=!!t.done;cb.setAttribute("aria-label","Complete "+t.title);cb.onchange=()=>{t.done=cb.checked;persist();render()};
const label=document.createElement("span");label.textContent=t.title;
const rm=document.createElement("button");rm.className="text-btn";rm.textContent="Remove";rm.setAttribute("aria-label","Remove "+t.title);rm.onclick=()=>{tasks=tasks.filter(x=>x.id!==t.id);persist();render()};row.append(cb,label,rm);list.append(row)});
$("merSmallCount").textContent=tasks.filter(t=>!t.done).length+" to do";if(!tasks.length){const p=document.createElement("p");p.className="hint";p.textContent="Nothing added yet.";list.append(p)}}
form.onsubmit=e=>{e.preventDefault();const title=input.value.trim();if(!title)return;tasks.push({id:String(Date.now())+"-"+String(tasks.length),title,done:false});persist();render();input.value=""};render();
})();