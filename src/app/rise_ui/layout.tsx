import type { ReactNode } from "react";

import { RiseUiDocsAppShell } from "@rise-ui/docs/rise-ui-docs-app-shell";

import "@rise-ui/docs/globals.css";

/**
 * RiseUI documentation shell (Fumadocs + theme providers).
 * Content lives in the open-source `riseUI` repo (`apps/docs`).
 */
export default function RiseUiSectionLayout({ children }: { children: ReactNode }) {
  return <RiseUiDocsAppShell>{children}</RiseUiDocsAppShell>;
}
