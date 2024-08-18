export function createElementWithClass(tagName, className, text = "") {
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.textContent = text;
  return element;
}
