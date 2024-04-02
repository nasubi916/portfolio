import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { PageLayout } from "./PageLayout";

export async function onRenderHtml(
  pageContext: any,
): Promise<ReturnType<typeof escapeInject>> {
  const { Page } = pageContext;
  const viewHtml = dangerouslySkipEscape(
    renderToString(
      <PageLayout>
        <Page />
      </PageLayout>,
    ),
  );

  return escapeInject`<!DOCTYPE html>
    <html lang="ja">
      <body>
        <div id="page-view">${viewHtml}</div>
      </body>
    </html>`;
}
