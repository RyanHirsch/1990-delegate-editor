export function safelyDefine(elementName: string, customElement: Function) {
  if (customElements.get(elementName)) {
    console.warn(`Trying to redefine ${elementName} skipping`);
    return;
  }
  customElements.define(elementName, customElement);
  return;
}

export function injectStyles(elementName: string, styles: string) {
  const existingStyles = document.getElementById(elementName);
  if (!existingStyles) {
    const styleNode = document.createElement("style");
    styleNode.setAttribute("id", elementName);
    styleNode.innerText = styles;
    document.body.appendChild(styleNode);
  }
}
