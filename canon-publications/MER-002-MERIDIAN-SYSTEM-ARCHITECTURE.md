# MER-002 Meridian System Architecture

## Metadata

MER-ID: MER-002
Title: Meridian System Architecture
Domain: Foundational
Family: System Architecture
Architectural Level: Level 0 - Constitution
Status: Canon Publication
Version: 1.0.0
Depends On: MER-000, MER-001, MER-011, MER-012
Required By: All domain publications, implementation contracts, build packs, migration maps
Supersedes: None
Implementation Pack: Not applicable
Build Status: Architectural foundation
Canonical Principles: Understanding Before Implementation; Continuity Before Expansion; Recovery Is Architecture; Momentum Over Perfection; No Publication Exists In Isolation
Last Reviewed: 2026-07-08

## Purpose

MER-002 defines Meridian as an architectural knowledge system.

The repository is not merely a storage location for Markdown files. It is the Canon that supports Meridian and Ashlar, preserves architectural memory, and gives future implementation work a reliable source of truth.

MER-002 defines the organising structure of the Canon: layers, domains, publication families, dependencies, metadata, migration paths, and implementation relationships.

## Core Assertion

The Meridian repository is a knowledge system to support Meridian and Ashlar.

Every publication must declare where it belongs, what it depends on, and what future work it supports.

## Canon Layers

### Level 0 - Constitution

Level 0 documents define the purpose, authority, and organising rules of the Canon.

Examples:

- MER-000 Repository Constitution
- MER-001 Meridian Foundational Doctrine
- MER-002 Meridian System Architecture
- MER-011 Master Architectural Register
- MER-012 Editorial Process

### Level 1 - Domain Doctrine

Level 1 documents define why a domain exists and what philosophy governs it.

Examples:

- Experience Domain Philosophy
- Planning Domain Philosophy
- Task System Philosophy
- Habit System Philosophy

### Level 2 - Domain Architecture

Level 2 documents define how a domain is structured.

Examples:

- Home Screen Architecture
- Planning Architecture
- Task System Architecture
- Habit System Architecture

### Level 3 - Information Model

Level 3 documents define the data, entities, relationships, and structures required by a domain.

### Level 4 - Behaviour Model

Level 4 documents define how a domain behaves over time, including interactions, responses, and state changes.

### Level 5 - Lifecycle Model

Level 5 documents define how domain objects move from creation to completion, renewal, revision, or retirement.

### Level 6 - Ashlar Integration

Level 6 documents define how Ashlar supports, interprets, guides, or interacts with a domain.

### Level 7 - Implementation Contract

Level 7 documents define the build-ready contract that implementation tools must follow.

### Level 8 - Build Pack

Level 8 documents translate approved architecture into practical implementation instructions for Cursor or equivalent build tools.

## Canon Domains

### Foundational Domain

Defines the constitutional, editorial, and architectural rules of Meridian.

### Ashlar Domain

Defines Ashlar's cognitive, behavioural, editorial, and integration responsibilities.

### Experience Domain

Defines the user's lived interface with Meridian, including the Home Screen, design philosophy, and immediate daily experience.

### Planning Domain

Defines planning, daily preparation, tomorrow planning, scheduling, and future orientation.

### Productivity Domain

Defines tasks, priorities, habits, routines, momentum, and completion behaviours.

### Reflection Domain

Defines review, learning, personal insight, and the transformation of experience into wisdom.

### Identity Domain

Defines Life Compass, values, areas of focus, long-term identity, and direction.

### Supporting Domains

Defines integrations, storage, notifications, technical infrastructure, and external system relationships.

## Publication Families

A mature domain may contain the following publication families:

1. Philosophy
2. Architecture
3. Information Model
4. Behaviour
5. Lifecycle
6. Ashlar Integration
7. Implementation Contract
8. Build Pack

Not every domain needs every family immediately, but missing families should be visible in the roadmap.

## Dependency Rule

No publication may exist in isolation.

Every publication must declare:

- its domain
- its family
- its architectural level
- its dependencies
- its downstream relationships
- whether it affects implementation

## Metadata Standard

Every Canon publication should include a metadata block containing:

- MER-ID
- Title
- Domain
- Family
- Architectural Level
- Status
- Version
- Depends On
- Required By
- Supersedes
- Implementation Pack
- Build Status
- Canonical Principles
- Last Reviewed

## Register Relationship

MER-011 remains the controlling index.

A publication is not complete until it is registered in MER-011.

The Founder's Architectural Register Migration Map and MER-011 must be reconciled after each migration wave.

## Legacy Relationship

Legacy documents are not discarded.

They must be archived, mapped, and either:

- incorporated into Canon
- superseded by Canon
- retained as historical context
- or retired with explanation

## Implementation Relationship

Implementation must follow architecture.

Build packs must not invent product behaviour that has not been justified by Canon publications.

Cursor-ready implementation work should be generated only after the relevant philosophy, architecture, information model, behaviour model, lifecycle, and Ashlar integration documents are sufficiently defined.

## Ashlar Relationship

Ashlar is the steward of the knowledge system.

Ashlar must preserve continuity, detect gaps, propose refinement, support recovery, and keep future work aligned with the Canon.

## Completion Notes

MER-002 establishes the repository as a structured knowledge system rather than a file archive.

Future migration should proceed by domain and publication family, not by disconnected document creation.
