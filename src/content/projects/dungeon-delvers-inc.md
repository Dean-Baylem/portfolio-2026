---

title: "Dungeon Delvers Inc."

lead: "A worldbuilding and tabletop roleplaying game campaign management tool"

date: 2026-06-23

tags: ["Next.js", "TypeScript", "Payload CMS", "Leaflet.js"]

heroImage: "/images/projects/ddinc/hero.png"

---

## Project Overview

A full-stack TTRPG campaign management tool, built as a personalised alternative to established tools, with a custom Payload CMS backend, role-based access control, and a fantasy-styled front-end design for an immersive user experience.

Next.js was a natural choice given existing professional experience, while Payload CMS was selected as a modern alternative to WordPress, running within the same deployment as the Next.js app. TypeScript was used throughout to gain a deeper understanding of type-safety challenges that only surface in a fully deployed project, especially around CMS schema design and API response handling.

## Why not existing tools?

World Anvil and Obsidian are both frequently recommended for TTRPG world-building, but both have limitations that motivated a custom solution. Below are the two core issues I wanted to solve with Dungeon Delvers Inc.

1. World Anvil: Cluttered admin interface with excessive feature selection.
	- Solution: Used Payload CMS with carefully crafted schema files to cover only the necessary contents over a lightweight, easy-to-use admin page.
2. Obsidian: local-first note tool with no shareable web front-end.
	- Solution: Built a custom fantasy-themed front-end, giving players an immersive read-only view of the campaign world.

## Challenges & Design Decisions

### Payload CMS Flexibility

This project presented a significant upfront challenge: how content would be created, edited, and related across the site. The target was to have a quick to configure and easy to extend CMS. Initially, I considered using Filament PHP, however, a lack of experience, time constraints and having to create a separate deployment for the backend nudged me towards Payload CMS. Only I would be using the CMS; therefore a developer-focused admin page pre-built and designed on installation was a significant time save. If I was to create this project as a customer focused product, then I believe the separate backend deployment and much more easily customisable admin screen of Filament PHP become assets as opposed to hurdles.

### Design Presentation

The design evokes the feeling of a fantasy textbook; warm cream backgrounds, red highlights, and a muted green accent form a palette that feels immersive without sacrificing readability. Fundamentally, the site is a stylised wiki-type project; therefore the layout and components were created while prioritising accessibility, readability and practicality. Font choices reinforce the aesthetic; Cormorant Garamond for headings and Crimson Pro for body text ground the design in a classical, readable style. AI-generated imagery was used throughout to maintain visual consistency without requiring a dedicated asset pipeline.

### Overlapping related content

Designing the schema to support a network of interconnected relationships across multiple collections, without over-fetching data in each query, was an unexpected challenge for a front-end focused developer. The approach was iterative; early schemas broke content into excessive granularity, later schemas consolidated the data to reflect realistic usage patterns. Payload's depth control was used to prevent excessive relational fetching.

## Features

### Interactive Location Map

![Dungeon Delvers Interactive Map](/projects/ddinc/interactive-map.gif)

Built with React Leaflet using a custom CRS.Simple coordinate system to overlay a map image, related to a location collection entry. Authenticated users can create, categorise, and annotate map pins directly from the map interface. Each pin supports a location type, rich text descriptions, and links to related location collection entries.

Map state is managed via a dedicated Zustand store. Pin management is role-controlled; any authenticated user can create a new pin, but only the creator of the pin can edit or delete the pin.

