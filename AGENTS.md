# AGENTS.md

This file provides guidance to AI Agents when working with code in this repository.

@CONTEXT.md

## Commands

```bash
npm run dev          # start dev preview app (src/)
npm run build        # type-check lib/ then build dist/
npm run lint         # ESLint
npm run prettier:check  # check formatting
npm run prettier:format # auto-format
./pack.sh            # build + npm pack (local tarball)
./publish.sh         # build + npm publish
```

There are no tests.

## Architecture

**Multi-entry build** — each component compiles to its own output file. `fileMapping.ts` defines the entry map passed to Vite's `build.lib.entry`. Adding a new component requires a new entry in `fileMapping.ts`.

**Two tsconfig targets:**

- `tsconfig.lib.json` — covers `lib/` only, used by `npm run build`
- `tsconfig.app.json` — covers `src/` and `lib/`, used by the dev server

**`lib/index.ts`** only imports `root.css`. It is the global styles entry, not a component barrel — components are imported directly by consumers (e.g. `@vaardev/ui/components/button`).

**CSS co-location** — each component has a `.css` file next to its `.tsx`. All CSS classes use the `vaar-` prefix.

**Component-specific notes:**

- `Dialog` applies the `vaar-panel` CSS class from `panel.css` — if you change `Panel` styles, `Dialog` is affected
- `Table` is generic over the row data type (`Table<TData>`); columns define their own cell renderers via `cellBuilder`
- `lucide-react` is the only runtime dependency (used for icons in `Dialog`)
