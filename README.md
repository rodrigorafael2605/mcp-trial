# MCP Trial - Design System Components

Proof of concept project for UI component development using **Figma MCP (Model Context Protocol)** integrated with **Claude Code**.

## About the Project

This project demonstrates a development workflow where designers and developers work in sync: designers create components in Figma and developers can implement them directly from the design using artificial intelligence.

### Tech Stack

- **Next.js 15** - React Framework
- **TypeScript** - Static typing
- **Tailwind CSS** - Styling
- **Storybook** - Component documentation and visualization

---

## Figma MCP Workflow

### What is Figma MCP?

Figma MCP (Model Context Protocol) is an integration that allows Claude Code to directly access designs in Figma. Through this integration, the AI assistant can:

- View screenshots of components
- Extract design information (colors, typography, spacing)
- Generate React/TypeScript code based on the design
- Maintain consistency with the design system

### How to Use

#### 1. Get the Component URL from Figma

In Figma, navigate to the component you want to implement:

1. Select the desired frame or component
2. Right-click and select **"Copy link"** or use `Cmd+L` (Mac) / `Ctrl+L` (Windows)
3. The URL will have the format:
   ```
   https://www.figma.com/design/{fileKey}/{fileName}?node-id={nodeId}
   ```

#### 2. Request Implementation from Claude Code

Simply provide the Figma URL to Claude Code with a clear instruction:

```
Implement this component: https://www.figma.com/design/rY5TS7R6P0JaLVi3MqAolK/Components--MT-?node-id=3302-2147
```

Or with more context:

```
Create a Button component based on this Figma design: [URL]
It should support the following states: default, hover, disabled
```

#### 3. What Happens Behind the Scenes

When you provide the URL, Claude Code:

1. **Extracts design context** - Retrieves information about structure, colors, typography, and assets
2. **Generates a screenshot** - Visualizes the component to ensure fidelity
3. **Analyzes existing code** - Checks the patterns already used in the project
4. **Implements the component** - Creates TypeScript/React files following project conventions
5. **Creates stories** - Adds examples in Storybook for documentation

### Practical Example

**Developer input:**
```
Implement these 3 types of cells for a table row:
https://www.figma.com/design/rY5TS7R6P0JaLVi3MqAolK/Components--MT-?node-id=3302-2147
```

**Generated output:**
- `src/components/TableCell/TableCell.tsx` - Main component
- `src/components/TableCell/icons.tsx` - SVG icons
- `src/components/TableCell/index.ts` - Exports
- `src/components/TableCell/TableCell.stories.tsx` - Storybook stories

---

## Best Practices for Optimal Results

To get the most accurate and consistent component implementations from the Figma MCP workflow, follow these recommendations:

### 1. Set Up Design Tokens in Your Codebase

Before starting component development, establish a centralized design tokens file that mirrors your Figma design system. This ensures the AI uses consistent values across all components.

**Create a tokens file** (`src/lib/tokens.ts`):

```typescript
// Colors
export const colors = {
  // Primary
  primary: {
    P06: '#3C4A5B',  // Primary text, buttons
    P05: '#68778D',  // Secondary text
  },
  // Neutrals
  neutral: {
    N01: '#FFFFFF',  // Backgrounds
    N03: '#E4EAF2',  // Disabled states
    N04: '#BCCAD8',  // Borders, inactive
  },
  // Accent
  accent: {
    H06: '#1E93FA',  // Links, active states
  },
  // Feedback
  success: {
    LR05: '#6EE39F', // Success indicators
  },
  error: {
    R05: '#FF673D',  // Error states
  },
};

// Typography
export const typography = {
  fontFamily: "'Proxima Nova', sans-serif",
  weights: {
    light: 300,
    regular: 400,
    semibold: 600,
  },
  sizes: {
    caption: { size: '10px', lineHeight: '12px', letterSpacing: '0.6px' },
    small: { size: '12px', lineHeight: '16px', letterSpacing: '0.4px' },
    body: { size: '14px', lineHeight: '20px', letterSpacing: '0.2px' },
  },
};

// Spacing
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

// Border Radius
export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
  full: '9999px',
};

// Shadows
export const shadows = {
  level1: '4px 4px 8px 0px rgba(0, 0, 0, 0.04)',
  level2: '0px 4px 16px 0px rgba(0, 0, 0, 0.08)',
};
```

### 2. Organize Your Figma File Properly

The AI extracts better information when designs are well-organized:

| Practice | Why It Helps |
|----------|--------------|
| **Use Auto Layout** | Provides clear spacing and alignment information |
| **Name layers descriptively** | AI uses layer names to understand component structure |
| **Use Figma Variables** | Tokens are automatically extracted and mapped |
| **Group component variants** | All states are captured in one request |
| **Keep components atomic** | Smaller, focused components are easier to implement accurately |

### 3. Provide Clear Context in Your Requests

The more context you provide, the better the result:

**Basic request:**
```
Implement this button: [URL]
```

**Better request:**
```
Implement this button component: [URL]

Requirements:
- Should support: primary, secondary, tertiary variants
- States: default, hover, disabled
- Sizes: small (32px height), medium (40px height)
- Can have leading icon, trailing icon, or both
- Use existing design tokens from src/lib/tokens.ts
```

### 4. Reference Existing Components

When requesting new components, mention existing ones as reference:

```
Implement this card component: [URL]

Follow the same patterns as the Button component:
- Same file structure (component, icons, index, stories)
- Use the cn() utility for class merging
- Export types alongside the component
```

### 5. Request Component Variants Together

Instead of requesting each variant separately, include all variants in one request:

```
Implement all button variants from this frame: [URL]

The frame includes:
- Primary, Secondary, Tertiary buttons
- Icon-only variants
- Small and Medium sizes
```

### 6. Use Figma's Dev Mode

Enable **Dev Mode** in Figma before copying the link. This provides:
- More accurate CSS values
- Better spacing information
- Cleaner asset exports

### 7. Validate with Storybook

After implementation, always verify components in Storybook:

```bash
npm run storybook
```

Check that:
- All variants render correctly
- Interactive states work (hover, focus, disabled)
- Responsive behavior matches design
- Props are well-documented

### 8. Iterative Refinement

If the first implementation isn't perfect:

```
The button looks good, but:
- The border radius should be 8px, not 4px
- The hover state should have a darker background
- Add a focus ring for accessibility

Please update the component.
```

### 9. Keep Components in Sync

When designs change in Figma, update components by providing the new URL:

```
The Button design has been updated: [new URL]

Changes to implement:
- New color for primary variant
- Added "ghost" variant
- Updated padding values
```

---

## Implemented Components

| Component | Description | Figma |
|-----------|-------------|-------|
| **Button** | Buttons with primary, secondary, tertiary, and icon-only variants | - |
| **Input** | Text field with states and validation | - |
| **TableCell** | Table cells (left, middle, right) with checkbox, tags, and indicators | [Link](https://www.figma.com/design/rY5TS7R6P0JaLVi3MqAolK/Components--MT-?node-id=3302-2147) |

---

## Available Scripts

```bash
# Development
npm run dev          # Start Next.js server
npm run storybook    # Start Storybook on port 6006

# Build
npm run build        # Production build
npm run build-storybook  # Storybook build

# Quality
npm run lint         # Run ESLint
npm run test         # Run tests
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/             # UI Components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   ├── icons.tsx
│   │   └── index.ts
│   ├── Input/
│   └── TableCell/
├── lib/
│   └── utils.ts           # Utilities (cn helper)
└── stories/               # Storybook stories (examples)
```

---

## Design System Setup

### Tailwind CSS Configuration

For optimal results, extend your `tailwind.config.ts` with your design tokens:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3C4A5B',
          light: '#68778D',
        },
        neutral: {
          '01': '#FFFFFF',
          '03': '#E4EAF2',
          '04': '#BCCAD8',
        },
        accent: '#1E93FA',
        success: '#6EE39F',
        error: '#FF673D',
      },
      fontFamily: {
        sans: ['Proxima Nova', 'sans-serif'],
      },
      fontSize: {
        caption: ['10px', { lineHeight: '12px', letterSpacing: '0.6px' }],
        small: ['12px', { lineHeight: '16px', letterSpacing: '0.4px' }],
        body: ['14px', { lineHeight: '20px', letterSpacing: '0.2px' }],
      },
      boxShadow: {
        'level-1': '4px 4px 8px 0px rgba(0, 0, 0, 0.04)',
        'level-2': '0px 4px 16px 0px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '16px',
      },
    },
  },
  plugins: [],
};

export default config;
```

This allows you to use semantic class names:
```tsx
// Instead of
<div className="bg-[#3C4A5B] text-[#FFFFFF]">

// Use
<div className="bg-primary text-neutral-01">
```

---

## Design Tokens

Main colors used in the design system:

| Token | Hex | Usage |
|-------|-----|-------|
| P06 | `#3C4A5B` | Primary text, primary buttons |
| P05 | `#68778D` | Secondary text |
| N04 | `#BCCAD8` | Borders, inactive icons |
| N03 | `#E4EAF2` | Disabled backgrounds |
| N01 | `#FFFFFF` | Backgrounds |
| H06 | `#1E93FA` | Accent, links, active checkbox |
| LR05 | `#6EE39F` | Success, positive indicators |

Typography: **Proxima Nova** (Semibold 600, Light 300)

---

## Requirements

- Node.js 18+
- npm or yarn
- Figma access (to get component URLs)
- Claude Code with Figma MCP configured

---

## Advanced: Figma Code Connect

For even better results, you can use **Figma Code Connect** to map Figma components directly to your codebase. This tells the AI exactly which code component corresponds to which Figma component.

### How It Works

1. **Link components** - Map Figma components to their code implementations
2. **Auto-detection** - When requesting a component that uses linked sub-components, the AI knows to reuse existing code
3. **Consistency** - Ensures the same component is never implemented twice

### Example

When a Figma component is linked, requesting a Card that contains a Button will automatically:
- Use the existing `Button` component instead of recreating it
- Apply the correct import paths
- Maintain prop consistency

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Colors don't match | Verify hex values in Figma Dev Mode; check for opacity differences |
| Fonts look different | Ensure Proxima Nova is installed locally or loaded via CSS |
| Spacing is off | Use Figma's Dev Mode for accurate pixel values |
| Icons are missing | Check if SVG assets were exported; provide icon URLs if needed |
| Component too complex | Break down into smaller requests; implement piece by piece |

