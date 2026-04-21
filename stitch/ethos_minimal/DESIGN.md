# Design System Document: The Editorial Minimalist

This design system is a bespoke framework crafted for high-end personal portfolios. It moves beyond the "template" aesthetic by embracing a **High-End Editorial** approach—prioritizing sophisticated tonal layering, intentional asymmetry, and a rigorous "No-Line" philosophy.

---

## 1. Overview & Creative North Star: "The Digital Curator"

The Creative North Star for this design system is **The Digital Curator**. 

In an era of cluttered digital noise, this system acts as a quiet, authoritative gallery. It treats portfolio content not as entries in a database, but as curated exhibits. We break the rigid, "boxy" feel of standard portfolios by using extreme whitespace (negative space) as a structural element. 

**Core Principles:**
*   **Intentional Asymmetry:** Avoid perfectly centered grids. Use the spacing scale to offset imagery and text, creating a sense of movement.
*   **Tonal Depth:** Depth is created through stacking paper-like surfaces rather than using harsh outlines.
*   **Typography as Architecture:** High-contrast font scales (Manrope vs. Inter) provide the structural "bones" of the site.

---

## 2. Colors & Surface Philosophy

The palette is rooted in a "Warm Charcoal & Cool Mist" spectrum. The primary goal is to provide a neutral stage where the user’s work (imagery) can shine.

### The Palette (Material Scale)
*   **Surface:** `#f9f9f9` (The canvas)
*   **On-Surface:** `#2d3435` (High-contrast text)
*   **Primary (Accent):** `#48626e` (A muted, sophisticated slate blue for CTAs)
*   **Primary Container:** `#cbe7f5` (For soft highlights and glass effects)
*   **Surface Container Tiers:** From `lowest` (`#ffffff`) to `highest` (`#dde4e5`).

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or card definition. Boundaries must be defined solely through:
1.  **Background Shifts:** A `surface-container-low` section sitting against a `surface` background.
2.  **Shadows:** Using the Ambient Shadow rule (see Section 4).
3.  **Whitespace:** Large gaps (Spacing `16` or `20`) to separate content blocks.

### The "Glass & Signature Texture" Rule
To add "soul," use **Glassmorphism** for floating elements (like the Navigation Bar). Use a semi-transparent `surface-container-lowest` (80% opacity) with a `20px` backdrop-blur. 
*   **CTA Gradient:** For primary buttons, use a subtle linear gradient from `primary` (`#48626e`) to `primary_dim` (`#3c5662`) at 135 degrees. This prevents the button from looking "flat" or "web-default."

---

## 3. Typography: The Editorial Voice

We pair **Manrope** (Display/Headlines) for its geometric authority with **Inter** (Body/Labels) for its clinical legibility.

*   **Display-LG (3.5rem / Manrope):** Reserved for Hero statements. Use `-0.02em` letter spacing to feel "tight" and professional.
*   **Headline-MD (1.75rem / Manrope):** For project titles. Use generous top-margin (Spacing `8`) to let the title breathe.
*   **Body-LG (1rem / Inter):** For project descriptions. Increase line-height to `1.6` for an editorial feel.
*   **Label-MD (0.75rem / Inter):** All-caps with `0.1rem` letter-spacing. Use for categories (e.g., "UI/UX DESIGN • 2024").

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are often too heavy. In this system, we use **Tonal Layering** to create hierarchy.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The slight jump from pure white to a mist-gray creates a soft, natural lift without the "dirty" look of a shadow.
*   **Ambient Shadows:** For floating "Call to Action" cards, use:
    *   `box-shadow: 0 10px 40px rgba(45, 52, 53, 0.06);`
    *   The shadow is tinted by the `on-surface` color, making it feel like natural ambient light.
*   **The "Ghost Border" Fallback:** If a container must be defined against an identical background, use `outline-variant` at **15% opacity**.

---

## 5. Components

### Navigation Bar
*   **Style:** A floating pill shape (Roundedness `full`) or a top-pinned bar.
*   **Visuals:** `surface-container-lowest` with 80% opacity and backdrop-blur. 
*   **Constraint:** No bottom border. Use a very soft ambient shadow to lift it from the content.

### Project Cards
*   **Layout:** Forbid the use of divider lines.
*   **Structure:** Imagery sits flush at the top. Use `surface-container-low` for the card background.
*   **Spacing:** Use Spacing `4` (1.4rem) for internal padding.
*   **Interaction:** On hover, the card should transition from `surface-container-low` to `surface-container-lowest` and increase the Ambient Shadow depth.

### Buttons
*   **Primary:** `primary` background, `on-primary` text. Roundedness `md` (0.375rem). Sizing: Spacing `2.5` (top/bottom) and Spacing `5` (left/right).
*   **Tertiary (Text Button):** `on-surface` text with a subtle underline that expands on hover. No container.
*   **Chips:** Use `surface-container-high` for "Skill" tags. No border.

### Input Fields
*   **Style:** Minimalist underline style or a light `surface-container-highest` background.
*   **States:** On focus, the bottom border transitions from `outline-variant` to `primary`.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. If a text block is 6 columns wide, offset it by 1 column to create visual interest.
*   **Do** use high-quality imagery with a consistent color grading that matches the neutral palette.
*   **Do** use the `24` (8.5rem) spacing token between major sections to create a "Gallery" feel.

### Don't:
*   **Don't** use 100% black (`#000000`). Always use `on-background` (`#2d3435`) for text to maintain a premium, softer look.
*   **Don't** use standard "drop shadows" with high opacity.
*   **Don't** use dividers or lines to separate list items. Use vertical space (Spacing `3`) and tonal shifts.
*   **Don't** use fully rounded (pill) buttons for everything; reserve them for the navigation or specific "high-action" CTAs to maintain a professional edge. Use `md` (0.375rem) for a modern, architectural feel.