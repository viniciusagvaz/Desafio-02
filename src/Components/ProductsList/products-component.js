import Products from "../../Classes/products-class.js";
import { createElementWithClass } from "../../Utils/create-elements.js";
import { renderStars } from "../../Utils/generate-stars.js";
import { productList } from "../../Utils/all-products-list.js";

function createFinalPriceElement(product) {
  const finalPrice = createElementWithClass("p", "final-price");

  if (product.inSale) {
    const fullPriceSpan = createFullPriceSpan(product.price);
    finalPrice.appendChild(
      document.createTextNode(` $${product.finalPrice()}`)
    );
    finalPrice.appendChild(fullPriceSpan);
    finalPrice.appendChild(createDiscountSpan(product.discount));
  } else {
    finalPrice.textContent = `$${product.price}`;
  }

  return finalPrice;
}

function createFullPriceSpan(price) {
  const fullPriceSpan = createElementWithClass("span", "full-price");
  fullPriceSpan.textContent = `$${price}`;
  return fullPriceSpan;
}

function createDiscountSpan(discount) {
  const discountSpan = createElementWithClass("span", "discount-amount");
  discountSpan.textContent = `-${discount}%`;
  return discountSpan;
}

function createProductImage(src, alt) {
  const productImg = createElementWithClass("img", "product-img");
  productImg.src = `./src/assets/img/${src}.webp`;
  productImg.alt = alt;

  return productImg;
}

function createProductTitle(title) {
  const productTitle = createElementWithClass("figcaption", "product-title");
  productTitle.textContent = title;
  return productTitle;
}

function createProductCard(product) {
  const productCard = createElementWithClass("figure", "product-figure");
  const productImg = createProductImage(product.picture, product.title);
  const productTitle = createProductTitle(product.title);

  productCard.appendChild(productImg);
  productCard.appendChild(productTitle);

  return productCard;
}

export function renderProducts(productCategory, container) {
  productList(productCategory, Products).forEach((product) => {
    const productCardContainer = createElementWithClass(
      "div",
      "product-card--container"
    );

    const productCard = createProductCard(product);
    const productRating = renderStars(product.stars, true);
    const finalPrice = createFinalPriceElement(product);

    productCardContainer.appendChild(productCard);
    productCardContainer.appendChild(productRating);
    productCardContainer.appendChild(finalPrice);

    container.appendChild(productCardContainer);
  });
}
