# LearnBridge

LearnBridge is a learning operating system built for OpenAI Build Week. It turns any question, book, source file, or study goal into a guided workspace to understand, verify, practice, save, hear, and teach.

Live demo: https://learnbridge-buildweek.es1611303532.chatgpt.site/learnbridge/

## What it does

LearnBridge helps a learner move from a raw question to a reusable learning project:

- adaptive explanation by learner profile
- bilingual English/Spanish interface
- inline visual learning resources
- source and evidence awareness
- misinformation/myth checks
- proof and comprehension review
- exam practice
- teachable lesson output
- project notes
- sketch pad
- basic, scientific, and financial calculators
- timer and planning tools
- section-by-section audio playback
- floating chat and tools

The demo includes three judge-ready scenarios:

1. Energy Transition: Solar, Batteries, Nuclear, and the Grid
2. How Misinformation Spreads During Elections
3. AI in Healthcare: Promise, Risk, Bias, and Regulation

## Why it is different

Many study tools produce summaries, flashcards, or quick answers. LearnBridge combines the full learning loop in one workspace:

- understand the topic
- check what the learner actually understood
- verify claims and sources
- contrast myths or misinformation when relevant
- practice with exam-style questions
- keep notes and sketches inside the project
- listen to learning blocks
- turn the result into a class, briefing, or teach-back package

## How GPT and Codex were used

GPT is the adaptive learning layer. It shaped how the same topic can be explained differently for a child, casual adult, student, professor, academic researcher, technical professional, business user, creative communicator, or home learner.

Codex was used throughout the build to design and implement the runnable prototype:

- product architecture and workflow
- front-end interface
- bilingual UI behavior
- demo scenarios and content structure
- audio controls using browser speech synthesis
- visual learning sections
- mind map and teach-back flow
- tools workspace
- Devpost-ready deployment
- build, validation, and production deployment

## Tech stack

- OpenAI GPT
- Codex
- HTML
- CSS
- JavaScript
- Web Speech API
- Cloudflare Workers / Sites
- Devpost

## Local testing

No installation is required for judges. Use the live demo:

https://learnbridge-buildweek.es1611303532.chatgpt.site/learnbridge/

Recommended browser: Chrome or Edge, because available voice options depend on browser and operating system speech voices.

## Prototype note

This is a Build Week prototype. The next production steps would be secure user accounts, persistent cloud storage, uploaded-file parsing, live citation retrieval, stronger source grounding, richer quizzes, and real share/export workflows.
