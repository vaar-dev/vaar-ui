import { resolve } from "path";

const dirname = import.meta.dirname;

export const fileMapping: Record<string, string> = {
  index: resolve(dirname, "lib/index.ts"),
  "components/badge": resolve(dirname, "lib/components/badge.tsx"),
  "components/box-grid": resolve(dirname, "lib/components/box-grid.tsx"),
  "components/button": resolve(dirname, "lib/components/button.tsx"),
  "components/dialog": resolve(dirname, "lib/components/dialog.tsx"),
  "components/entry": resolve(dirname, "lib/components/entry.tsx"),
  "components/loader": resolve(dirname, "lib/components/loader.tsx"),
  "components/otp-entry": resolve(dirname, "lib/components/otp-entry.tsx"),
  "components/panel": resolve(dirname, "lib/components/panel.tsx"),
  "components/stack": resolve(dirname, "lib/components/stack.tsx"),
  "components/table": resolve(dirname, "lib/components/table.tsx"),
};
