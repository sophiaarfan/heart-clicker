# Heart Clicker

A browser-based idle clicker game with an upgrade shop, autoclicker, milestone rewards, and a Super Heart mechanic. Built with vanilla HTML, CSS, and JavaScript.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-F26A8D?style=for-the-badge&logo=google-chrome&logoColor=white)](https://sophiaarfan.github.io/heart-clicker/)]

## Overview

Click the main heart to earn hearts as in-game currency, then spend them on upgrades that scale your click value, enable an autoclicker, or increase your odds of hitting a rare Super Heart worth +10,000 hearts. Reach cumulative milestones to unlock badge rewards.

## Stack

| Layer | Tech |
|---|---|
| Frontend | HTML, CSS, vanilla JS |
| Timers | `setInterval` |

## Features

- Click to collect hearts with a live scoreboard showing current hearts, click value, and active upgrades
- Upgrade shop with 5 purchasable upgrades (all repeatable, costs double each purchase):
  - 💙 Double click value
  - 🌹 Triple click value
  - 🍫 ×100 click value
  - 🩷 Autoclicker — fires on a timer, speeds up by 1.5× per purchase
  - 🤍 Super Heart — adds a 2% chance per click for a +10,000 heart bonus
- Milestone badge rewards at 100 / 500 / 1,000 / 10,000 / 50,000 hearts
- Temporary pop-up notifications for Super Hearts and badge unlocks
- Toggleable help section with full game rules

## Project Structure

```
increments/
├── index.html
├── css/
│   └── style.css
└── js/
    └── increments.js
```

## How to Run

Open `index.html` in any modern browser. No build step or dependencies required.

---

> **Academic Integrity Notice**
> This project was submitted as coursework for McMaster University (CS 1XD3), completed with a partner. It is shared here for portfolio purposes only and is **not open source** — this repository does not grant permission to copy, use, redistribute, or submit any part of this code.
