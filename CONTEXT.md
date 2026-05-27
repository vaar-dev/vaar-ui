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

**Badge**:
A small inline label used to surface a status or category. Supports a primary variant for emphasis.
_Avoid_: Tag, chip, pill, label

**Table**:
A data display component generic over its row type. Columns are defined with cell renderer functions, giving consumers full control over cell content.
_Avoid_: Grid, data grid, list

**Button**:
An action trigger component. Supports a primary variant, size variants, and an inline loading state via `showLoader` that replaces content with a **Loader**.
_Avoid_: Action, control, trigger

**Panel**:
A surface container component providing the visual base (background, border, elevation) for contained UI regions.
_Avoid_: Card, container, box

**Dialog**:
A modal overlay component that presents content in a **Panel** surface, centered over a backdrop. Controlled via an `isOpen` prop.
_Avoid_: Modal, popup, drawer

**Loader**:
A loading indicator built from an animated **Box Grid**. Configurable by size (`small`, `large`, `button`) and visual variant (`color`, `neutral`, `light`). The `button` size is used internally by **Button**; larger sizes are used standalone.
_Avoid_: Spinner, loading indicator

**Box Grid**:
A visualization component that renders a grid of colored boxes, each with an intensity level (1–5). Used as a data visualization primitive and as the animation engine inside **Loader**.
_Avoid_: Heat map, tile grid

## Relationships

- A **Component** references **Tokens** for all visual values — never hardcoded colors or sizes
- **Tokens** are defined in a **Palette** in `root.css`
- Form **Components** are **Integrated components** by default
- **OTP Entry** is a specialization of **Entry** and shares its base CSS styles
- **Stack** is a layout **Component** used to compose other **Components**
- **Loader** uses **Box Grid** as its animation engine
- **Dialog** uses **Panel** as its visual surface
- **Button** embeds a **Loader** when in loading state

## Example dialogue

> **Dev:** "Should the new Select component accept children for the label, or handle it internally?"
> **Domain expert:** "It's an **Integrated component** — the label is a prop, same as **Entry**. Keep the consumer API minimal."

> **Dev:** "Can a consumer override the primary color **Token**?"
> **Domain expert:** "**Tokens** are internal. Consumers use **Components** as-is. If we rename a **Token**, that's not a breaking change."

## Flagged ambiguities

- "theme" was avoided — this library has a **Palette** (internal color values) but no theming system. Consumers cannot swap themes.
- "input" is ambiguous — could mean the HTML `<input>` element or a form control broadly. Use **Entry** for the library's text input component.
