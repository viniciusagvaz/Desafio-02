import DressStyles from "../../Classes/dress-styles-class.js";
import { dressStyles } from "../../data/dress-styles.js";
import { createElementWithClass } from "../../Utils/create-elements.js";

const allStyles = (styles) =>
  styles.map((style) => new DressStyles(style.id, style.name, style.picture));

function createDressStyleList(style) {
  const dressStylesContainer = document.querySelector("#style-list");

  if (!dressStylesContainer) {
    console.error("Element with ID 'style-list' not found.");
    return;
  }

  const styleCard = createStyleCard(style);
  const styleTitle = createStyleTitle(style);

  styleCard.appendChild(styleTitle);
  dressStylesContainer.appendChild(styleCard);
}

function createStyleCard(style) {
  const styleCard = createElementWithClass("figure", "style-card");
  styleCard.classList.add(style.name);
  return styleCard;
}

function createStyleTitle(style) {
  const styleTitle = createElementWithClass("figcaption", "style-title");
  styleTitle.textContent = style.name;
  return styleTitle;
}

export function renderStyles() {
  allStyles(dressStyles).forEach((style) => {
    createDressStyleList(style);
  });
}
