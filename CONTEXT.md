# Vaar UI

`@vaardev/ui` is a React 19 component library published to npm providing warm, clean, simple UI components. Primarily serves the author's own projects; open source but not community-driven. The `lib/` directory is the library source; `src/` is a dev preview app (not published).

## Language

**Component**:
A self-contained, reusable UI building block exported as a single entry point from the library.
_Avoid_: Widget, element, control (when referring to the library's exports)

**Token**:
A CSS custom property (`--vaar-*`) defining a design value (color, spacing, size). Internal implementation detail, not public API.
_Avoid_: Variable (ambiguous with JS), theme variable

**Palette**:
The set of literal color tokens named by visual appearance (e.g. orange, grey).
_Avoid_: Theme, color scheme

**Integrated component**:
A component that bundles its own label, chrome, and layout rather than delegating to a wrapper. The default pattern for form controls.
_Avoid_: Composite component, compound component

**Entry**:
A form control for text-like input (single-line, multiline, and other HTML input types). Not a generic term for all form controls.
_Avoid_: Input, text field, form field

**OTP Entry**:
A specialized form control for one-time password or verification code input. Renders individual character boxes with auto-advance. Supports numeric-only or alphanumeric modes.
_Avoid_: Code input, pin input, verification input

**Stack**:
A layout primitive that spaces children equally in a vertical or horizontal direction.
_Avoid_: Flex container, layout row/column

## Relationships

- A **Component** references **Tokens** for all visual values — never hardcoded colors or sizes
- **Tokens** are defined in a **Palette** in `root.css`
- Form **Components** are **Integrated components** by default
- **OTP Entry** is a specialization of **Entry** and shares its base CSS styles
- **Stack** is a layout **Component** used to compose other **Components**

## Example dialogue

> **Dev:** "Should the new Select component accept children for the label, or handle it internally?"
> **Domain expert:** "It's an **Integrated component** — the label is a prop, same as **Entry**. Keep the consumer API minimal."

> **Dev:** "Can a consumer override the primary color **Token**?"
> **Domain expert:** "**Tokens** are internal. Consumers use **Components** as-is. If we rename a **Token**, that's not a breaking change."

## Flagged ambiguities

- "theme" was avoided — this library has a **Palette** (internal color values) but no theming system. Consumers cannot swap themes.
- "input" is ambiguous — could mean the HTML `<input>` element or a form control broadly. Use **Entry** for the library's text input component.
