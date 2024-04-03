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

  return escapeInject`
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/public/TwemojiEggplant.svg" />
        <link rel="icon" type="16x16" href="/public/TwemojiEggplant.svg" />
        <link rel="apple-touch-icon" href="/public/TwemojiEggplant.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>nasubi no site</title>
      </head>
      <body>
        <div id="page-view">${viewHtml}</div>
      </body>
    </html>
  `;
}
