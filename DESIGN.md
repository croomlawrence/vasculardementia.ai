---
version: alpha
name: VascuMind
description: High-contrast, caregiver-first design system for vascular cognitive screening and wellness. Black/white foundation with deep emerald accent. Strict WCAG AA+ compliance for adults 65+ and caregivers.
colors:
  primary: "#0B0B0B"
  background: "#F6F4EF"
  surface: "#FFFFFF"
  accent: "#0B4D3C"
  accentHover: "#08382C"
  line: "#3F564C"
  forest: "#102824"
  neutral: "#E7F2EC"
typography:
  heading:
    fontFamily: "Newsreader"
    fontSize: "3.25rem"
    fontWeight: "600"
    lineHeight: "1.08"
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist"
    fontSize: "1.125rem"
    fontWeight: "450"
    lineHeight: "1.7"
    letterSpacing: "-0.01em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
spacing:
  base: "24px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "16px 32px"
    fontWeight: "600"
  button-primary-hover:
    backgroundColor: "{colors.accentHover}"
  card:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "32px"
---

## Overview

VascuMind is built for caregivers and older adults. Every decision prioritizes **maximum readability**, **zero low-contrast text**, and **clear hierarchy**. The brand is clinical yet approachable — deep black text on white, with a single deep emerald accent (#0B4D3C) for trust and action. No gray body text is permitted.

## Colors

- **Primary (#0B0B0B)** — All headings and body text. Near-black for maximum contrast.
- **Background (#F6F4EF)** — Warm page background.
- **Surface (#FFFFFF)** — Cards and the header.
- **Accent (#0B4D3C)** — Primary CTA color. Deep emerald. Hover shifts to #08382C. White text on this green clears WCAG AAA.
- **Line (#3F564C)** — 1px borders and form outlines. Dark enough for a 3:1 UI boundary on white.
- **Forest (#102824)** — Dark bands. White text only.
- **Neutral (#E7F2EC)** — Soft section fills. Never used for readable text.

All color combinations have been chosen to exceed WCAG AAA contrast ratios where possible.

## Typography

- **Heading** — Newsreader, 600 weight, tight leading. Used for H1/H2.
- **Body** — Geist Sans, 1.125rem (18px minimum), generous line height. No text smaller than 18px on public pages.

## Layout & Spacing

Generous white space (80px section padding) and clear left-aligned hierarchy. Cards use 32px internal padding, a 1px deep-sage border, and a soft shadow.

## Components

- **Primary Button** — Deep emerald background, white text, 14px radius, 700 weight. Hover uses a darker emerald. Minimum height 48px.
- **Card** — White with a 1px #3F564C border, generous padding, used for protocol steps, product tiles, and disclaimers.

## Do's and Don'ts

**Do**
- Use pure black text on white.
- Place the full MCI Screen + FDA disclaimer (via `<Disclaimer />` component) on every page.
- Use emerald for CTAs, links, and section labels.
- Keep the buy button for the memory screen hidden until checkout works. The primary actions are “Start the memory screen” and “Get the free guide.”
- Keep body text ≥18px.

**Don't**
- Use gray text (`text-gray`, `text-slate`, `text-teal` for body).
- Use disease-treatment language on supplements ("treats dementia", "prevents Alzheimer's", "cures cognitive decline").
- Make the MCI Screen sound like a diagnostic device.
- Use low-contrast accents on text.

**Legal Guardrails Embedded in Design**
All pages must render the global `Disclaimer` component (updated 2026-07-01) containing the exact MCI Screen disclaimer and FDA supplement language provided by Croom. This is non-negotiable for FTC/DSHEA compliance.

This DESIGN.md is the single source of truth for VascuMind visual and compliance design rules. It is enforced via the QA script and manual audits.
