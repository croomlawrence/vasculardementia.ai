---
version: alpha
name: VascuMind
description: High-contrast, caregiver-first design system for vascular cognitive screening and wellness. Black/white foundation with deep emerald accent. Strict WCAG AA+ compliance for adults 65+ and caregivers.
colors:
  primary: "#0B0B0B"
  background: "#FFFFFF"
  accent: "#0B4D3C"
  accentHover: "#10B981"
  neutral: "#F5F5F5"
typography:
  heading:
    fontFamily: "Geist"
    fontSize: "3.25rem"
    fontWeight: "700"
    lineHeight: "1.05"
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist"
    fontSize: "1.125rem"
    fontWeight: "450"
    lineHeight: "1.75"
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

- **Primary (#0B0B0B)** — All headings and body text. Pure black for maximum contrast.
- **Background (#FFFFFF)** — All page backgrounds.
- **Accent (#0B4D3C)** — Primary CTA color. Deep, trustworthy emerald. Hover shifts to vibrant #10B981 only for interactive states.
- **Neutral (#F5F5F5)** — Subtle card backgrounds or dividers only. Never used for readable text.

All color combinations have been chosen to exceed WCAG AAA contrast ratios where possible.

## Typography

- **Heading** — Geist Sans, 3.25rem, 700 weight, tight leading. Used for all H1/H2.
- **Body** — Geist Sans, 1.125rem (18px minimum), 450 weight, generous 1.75 line height. No text smaller than 18px on public pages.

## Layout & Spacing

Generous white space (80px section padding) and clear left-aligned hierarchy. Cards use 32px internal padding and full black borders for definition.

## Components

- **Primary Button** — Deep emerald background, white text, rounded-md, 600 weight. Hover uses brighter emerald.
- **Card** — White with black border, generous padding, used for protocol steps, product tiles, and disclaimers.

## Do's and Don'ts

**Do**
- Use pure black text on white.
- Place the full Acurist.AI + FDA disclaimer (via `<Disclaimer />` component) on every page.
- Use emerald only for CTAs and section labels.
- Keep body text ≥18px.

**Don't**
- Use gray text (`text-gray`, `text-slate`, `text-teal` for body).
- Use disease-treatment language on supplements ("treats dementia", "prevents Alzheimer's", "cures cognitive decline").
- Make the MCI Screen sound like a diagnostic device.
- Use low-contrast accents on text.

**Legal Guardrails Embedded in Design**
All pages must render the global `Disclaimer` component (updated 2026-07-01) containing the exact Acurist.AI MCI Screen disclaimer and FDA supplement language provided by Croom. This is non-negotiable for FTC/DSHEA compliance.

This DESIGN.md is the single source of truth for VascuMind visual and compliance design rules. It is enforced via the QA script and manual audits.
