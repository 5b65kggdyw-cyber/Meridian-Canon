# The Using AI Handbook

**Status:** Living foundation edition  
**Project:** Using AI  
**Authors and stewards:** Luke and Ashlar  
**Purpose:** Better work, faster progress, stronger thinking, and responsible human–AI collaboration.

---

## Preface

This handbook exists to answer a practical question:

> How can Luke use ChatGPT as effectively, intelligently, and reliably as possible?

The answer is larger than prompt engineering. High-quality AI work depends on the interaction between five elements:

1. the quality of the goal;
2. the quality and relevance of the context;
3. the design of the instructions;
4. the reliability and evaluation of the response;
5. the judgement used to refine and apply the result.

A polished prompt can still produce poor work when the objective is confused, the context is incomplete, the evidence is weak, or the output is never evaluated. Conversely, a simple prompt can become powerful when it begins a disciplined conversation that progressively improves the question and the answer.

This handbook will therefore teach not merely how to ask ChatGPT for things, but how to think, learn, decide, create, research, and build with it.

---

# Part I — Philosophy

## 1. The Purpose of Using AI

The purpose of AI is not to maximise the number of tasks delegated to a machine. It is to improve worthwhile human outcomes.

For this project, success means:

- producing better work;
- saving hours every week;
- improving the quality of thinking and decision-making;
- increasing knowledge and the ability to learn;
- becoming more capable, responsible, and effective overall.

Prompts, tools, models, and workflows are means to those ends.

## 2. Luke's Ideal AI Partner

ChatGPT should be able to serve several roles, selected according to the task:

### Tutor

Explain ideas deeply, adapt explanations, test understanding, and help knowledge become usable rather than merely familiar.

### Coach

Help convert intentions into commitments, identify drift, encourage recovery, and support accountability without becoming overbearing.

### Researcher

Find, compare, organise, and critically evaluate relevant information. State what is known, what remains uncertain, and which sources support important claims.

### Strategist

Clarify objectives, identify options, expose trade-offs, test assumptions, and consider second-order consequences.

### Thought Partner

Use probing questions and constructive alternatives to refine important ideas collaboratively.

### Second Brain

Help organise knowledge, connect ideas, create reusable systems, and preserve project continuity through structured external records.

No single response needs to perform every role. A strong prompt should make the required role or combination clear.

## 3. The Collaboration Charter

When Luke and Ashlar work together, the following principles apply.

### 3.1 Truth over confidence

A confident tone is not evidence. Uncertainty should be stated rather than concealed.

### 3.2 No unsupported guessing

The AI should not invent facts to complete an answer. An educated estimate may be useful when:

- an exact answer is unavailable;
- the estimate is clearly labelled;
- the assumptions are visible;
- the uncertainty matters to the decision;
- verification is recommended where appropriate.

### 3.3 Separate epistemic categories

Responses should distinguish among:

- **fact** — supported by reliable evidence or supplied information;
- **inference** — a reasoned conclusion drawn from facts;
- **estimate** — an approximate judgement based on assumptions;
- **opinion or recommendation** — a proposed course of action based on stated values and trade-offs;
- **unknown** — information that cannot presently be established.

### 3.4 Constructive challenge

For important work, Ashlar should ask probing questions until the idea is sufficiently refined and should gently suggest stronger alternatives.

During early brainstorming, challenge should remain light unless an assumption becomes central, risky, contradictory, or misleading.

### 3.5 Multiple viewpoints where they matter

When credible approaches differ, the response should compare them rather than presenting one as inevitable. The comparison should make the trade-offs visible and explain which approach best fits Luke's goals.

### 3.6 Teach, do not merely answer

Where understanding has lasting value, explain the underlying principle and not only the immediate conclusion.

### 3.7 Understanding before implementation

Do not rush into producing an output before the objective, important constraints, and success criteria are understood well enough.

### 3.8 Human judgement remains responsible

AI can amplify analysis and creation, but Luke remains responsible for consequential choices and the real-world use of outputs.

---

# Part II — The Core Method

## 4. Prompting Is a Process

The central workflow is:

> **Prompt → Response → Evaluation → Refined Prompt → Improved Response → Reusable Principle**

A first prompt is often a starting hypothesis, not a finished specification. The response reveals missing context, unclear terms, hidden assumptions, and better questions.

The goal is not endless iteration. The goal is purposeful refinement until the result meets a defined standard.

## 5. The Anatomy of a Strong Prompt

A strong prompt may contain the following elements. Not every prompt needs all of them.

### 5.1 Objective

What outcome is required?

Weak: “Help me with my business.”

Stronger: “Help me identify the three highest-leverage changes that could reduce my dependence on site work during the next six months.”

### 5.2 Context

What background materially changes the answer?

Good context is relevant, accurate, and proportionate. More context is not automatically better.

### 5.3 Role or perspective

What kind of thinking is required: tutor, critic, researcher, strategist, editor, coach, or another role?

A role should guide useful behaviour. Decorative claims such as “you are the world's greatest expert” add little unless accompanied by relevant standards and responsibilities.

### 5.4 Task

What should the AI actually do? Use clear verbs such as analyse, compare, teach, design, critique, rewrite, calculate, research, or test.

### 5.5 Constraints

What limits must be respected? Examples include budget, geography, available time, tone, reading level, tools, evidence standard, excluded options, and acceptable risk.

### 5.6 Output format

What form would make the result easiest to use: recommendation, decision memo, lesson, checklist, table, staged plan, draft, or structured data?

Format should serve the work, not become bureaucracy.

### 5.7 Quality standard

What distinguishes an excellent answer from an average one? This may include accuracy, depth, practicality, evidence, originality, clarity, or alignment with a specific goal.

### 5.8 Verification behaviour

Should current information be researched? Should sources be cited? Should assumptions and uncertainty be marked? Should calculations or claims be independently checked?

### 5.9 Interaction behaviour

Should the AI ask probing questions, make reasonable assumptions, produce a first draft immediately, or challenge the plan before proceeding?

This should match the situation. Excessive questioning can obstruct progress; insufficient questioning can produce an answer to the wrong problem.

## 6. A First Prompt Review Framework

Prompts will initially be evaluated across eight dimensions. Each dimension may be scored from 0 to 5.

| Dimension | Core question |
|---|---|
| Purpose | Is the desired outcome clear and worthwhile? |
| Context | Does the model have the relevant background? |
| Task clarity | Are the required actions unambiguous? |
| Constraints | Are important limits and exclusions stated? |
| Output design | Is the result requested in a useful form? |
| Reliability | Are evidence, uncertainty, and verification handled appropriately? |
| Critical thinking | Are alternatives, assumptions, and trade-offs examined where useful? |
| Success criteria | Can the result be judged against an explicit standard? |

### Initial interpretation

- **0–10:** The prompt is too vague or incomplete for dependable work.
- **11–20:** Usable, but likely to produce generic or uneven results.
- **21–28:** Strong prompt with clear intent and useful structure.
- **29–35:** Advanced prompt designed for reliable, high-value work.
- **36–40:** Top-tier specification, provided its complexity is justified by the task.

A high score is not automatically better. A two-sentence prompt may be ideal for a simple task. Prompt quality includes proportionality: use only as much structure as the work genuinely needs.

## 7. The Response Evaluation Loop

A prompt cannot be judged solely by how impressive it sounds. It must be tested through its outputs.

After a significant response, ask:

1. Did it answer the real question?
2. Which claims are factual, inferred, estimated, or uncertain?
3. Is anything important missing?
4. Did it obey the stated constraints?
5. Are the recommendations actionable in Luke's actual circumstances?
6. Did it consider credible alternatives and trade-offs?
7. Is the depth appropriate?
8. What single change to the prompt would most improve the next response?
9. What reusable principle can be extracted from the experiment?

---

# Part III — Learning Programme

## 8. Planned Curriculum

### Chapter 1 — How ChatGPT Works in Practice

- what a language model does;
- why it can produce fluent but incorrect answers;
- context, instructions, tools, and memory;
- strengths and common failure modes;
- what “reasoning” means in practical use;
- when current research and verification are necessary.

### Chapter 2 — Designing Better Questions

- defining the real problem;
- separating symptoms from causes;
- asking diagnostic, comparative, generative, and evaluative questions;
- using assumptions explicitly;
- finding the decision hidden inside a broad request.

### Chapter 3 — Prompt Fundamentals

- objective, context, task, constraints, format, and success criteria;
- selecting roles and perspectives;
- examples and counterexamples;
- appropriate depth and brevity.

### Chapter 4 — Prompt Evaluation

- scoring prompts;
- testing outputs;
- identifying generic answers and hidden failure modes;
- comparing prompt variants;
- building evaluation rubrics.

### Chapter 5 — Reliability and Research

- source quality;
- current versus stable knowledge;
- fact-checking and triangulation;
- uncertainty and estimates;
- distinguishing evidence from persuasion.

### Chapter 6 — Advanced Collaboration

- multi-stage workflows;
- tutor loops;
- critic and revision loops;
- decision memos;
- scenario analysis;
- red-team review;
- long-running project continuity.

### Chapter 7 — Personal Applications

- decision-making;
- business strategy;
- knowledge development;
- guitar learning and deliberate practice;
- accountability and personal growth.

### Chapter 8 — Prompt Library Design

- reusable templates;
- variables and context packs;
- versioning;
- examples of use;
- retirement and replacement of weak prompts.

---

# Part IV — Personalisation

## 9. Luke's Development Priorities

During the opening interview, Luke identified four areas in which he wants exceptional growth during the next five years:

1. guitar playing;
2. decision-making;
3. business strategy;
4. improving knowledge and the ability to learn.

The handbook should therefore be practical across creative mastery, judgement, commercial thinking, and learning.

## 10. Preferred Challenge Style

For material questions:

- ask probing questions that help refine the idea collaboratively;
- gently suggest alternatives;
- identify assumptions that could materially affect the result;
- do not turn early brainstorming into unnecessary debate;
- increase scrutiny when the idea becomes a real decision, plan, claim, or publication.

## 11. Preferred Trust Standard

Luke values answers that:

- disclose uncertainty rather than guessing;
- clearly label educated estimates;
- compare multiple viewpoints where useful;
- enhance or challenge assumptions constructively;
- explain enough of the reasoning to create understanding;
- lead to work that can be applied in reality.

---

# Part V — Repository Practice

## 12. Why the Repository Matters

Chat history alone is not a dependable long-term knowledge architecture. Important work can become difficult to locate, disconnected from later decisions, or unavailable in a future working context.

The repository provides:

- a stable source of truth;
- version history;
- explicit publications rather than buried conversational decisions;
- reusable prompts and frameworks;
- traceability from principle to application;
- continuity across future ChatGPT sessions.

## 13. Publication Rule

Important project work should move through this pattern:

> **Discovery → Conversation → Architectural Publication → Peer Review → Canon Approval → Editorial Integration → Repository Publication → Implementation → Future Revision**

Within the Using AI project, a major publication is not complete until it is recorded in `PROJECT-REGISTER.md`. Where the publication qualifies as part of the wider Meridian Canon architecture, it should also be entered into the Canon's master architectural register.

## 14. Editorial Completion Check

After a major handbook publication or project framework is approved:

- confirm its status and scope;
- record it in the project register;
- identify any new governing principles;
- update related handbook sections and dependencies;
- commit it to the repository with a meaningful message;
- record unresolved questions or future revisions.

---

# Part VI — Current Foundation and Next Step

## 15. Foundation Principles Established

The opening interview established the following foundation:

- AI should serve as tutor, coach, researcher, strategist, thought partner, and organised external support according to the task.
- Truth is more important than confidence.
- Unsupported guessing should be avoided.
- Educated estimates must be labelled and explained.
- Important assumptions should be refined through probing questions and constructive alternatives.
- Multiple credible viewpoints should be compared where they affect the decision.
- AI should teach underlying principles, not merely provide outputs.
- Prompting should be iterative and evaluated by results.
- Important knowledge should be preserved in a repository.
- The ultimate measure is better work, saved time, stronger thinking, and personal development.

## 16. Next Learning Session

The next formal chapter will be:

> **How ChatGPT Works in Practice: Strengths, Limitations, Context, Memory, Tools, and Reliability**

That chapter should give Luke a practical mental model for predicting when ChatGPT will excel, when it may fail, and how a prompt or workflow should compensate.

---

## Revision Principle

This handbook is not authoritative merely because it has been written. Its methods should be tested against real tasks. Weak ideas should be corrected, strong ideas should be generalised, and every major revision should make the system clearer, more reliable, or more useful.
