import { resolve } from "path";

export const fileMapping: Record<string, string> = {
  index: resolve(__dirname, "lib/index.ts"),
  "components/badge": resolve(__dirname, "lib/components/badge.tsx"),
  "components/box-grid": resolve(__dirname, "lib/components/box-grid.tsx"),
  "components/button": resolve(__dirname, "lib/components/button.tsx"),
  "components/dialog": resolve(__dirname, "lib/components/dialog.tsx"),
  "components/entry": resolve(__dirname, "lib/components/entry.tsx"),
  "components/loader-inline": resolve(__dirname, "lib/components/loader-inline.tsx"),
  "components/loader-page": resolve(__dirname, "lib/components/loader-page.tsx"),
  "components/otp-entry": resolve(__dirname, "lib/components/otp-entry.tsx"),
  "components/panel": resolve(__dirname, "lib/components/panel.tsx"),
  "components/stack": resolve(__dirname, "lib/components/stack.tsx"),
  "components/table": resolve(__dirname, "lib/components/table.tsx"),
};
