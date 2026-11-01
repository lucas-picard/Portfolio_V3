// Copie les styles de la page vers l'iframe de l'écran
// 
// ========================================================================

import { FrameContextConsumer } from "react-frame-component";

export default function CopieStyles() {
  return (
    <FrameContextConsumer>
      {({ document: frameDoc }) => {
        document.head
          .querySelectorAll('style, link[rel="stylesheet"]')
          .forEach((n) => frameDoc.head.appendChild(n.cloneNode(true)));
        return null;
      }}
    </FrameContextConsumer>
  );
}