// https://vike.dev/onRenderClient

import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";

export async function onRenderClient(pageContext: any): Promise<void> {
  const { Page } = pageContext;
  const root = document.getElementById("page-view");
  if (root == null) throw new Error("Root element not found");

  hydrateRoot(
    root,
    <PageLayout>
      <Page />
    </PageLayout>,
  );
}
