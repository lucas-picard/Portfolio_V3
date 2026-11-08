// Copie les styles de la page vers l'iframe de l'écran
// 
// ========================================================================

import { useEffect } from "react";
import { FrameContextConsumer } from "react-frame-component";

function SyncFrameStyles({ frameDocument }) {
  useEffect(() => {
    const syncStyles = () => {
      const sourceStyles = Array.from(
        document.head.querySelectorAll('style, link[rel="stylesheet"]')
      );
      const keys = new Set();

      sourceStyles.forEach((source, index) => {
        const key = source.tagName === "STYLE"
          ? source.dataset.viteDevId || source.id || `style-${index}`
          : source.href;
        const frameStyle = source.cloneNode(true);
        frameStyle.dataset.portfolioFrameStyle = key;
        const existingStyle = Array.from(
          frameDocument.head.querySelectorAll("[data-portfolio-frame-style]")
        ).find((style) => style.dataset.portfolioFrameStyle === key);

        if (existingStyle) {
          existingStyle.replaceWith(frameStyle);
        } else {
          frameDocument.head.appendChild(frameStyle);
        }

        keys.add(key);
      });

      frameDocument.head
        .querySelectorAll("[data-portfolio-frame-style]")
        .forEach((style) => {
          if (!keys.has(style.dataset.portfolioFrameStyle)) {
            style.remove();
          }
        });
    };

    syncStyles();
    const observer = new MutationObserver(syncStyles);
    observer.observe(document.head, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [frameDocument]);

  return null;
}

export default function CopieStyles() {
  return (
    <FrameContextConsumer>
      {({ document: frameDoc }) => {
        return <SyncFrameStyles frameDocument={frameDoc} />;
      }}
    </FrameContextConsumer>
  );
}