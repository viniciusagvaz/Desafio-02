import * as All from "./index.js";

const DOM_ELEMENTS = {
  newArrivalsContainer: document.querySelector(
    "#new-arrivals .products-container"
  ),
  topSellingContainer: document.querySelector(
    "#top-selling .products-container"
  ),
  submitEmail: document.querySelector("#subscribe-button"),
  viewAll: document.querySelectorAll(".view-bttn"),
  closePromo: document.querySelector(".close-promo"),
  promoContainer: document.querySelector(".promo-container"),
};

function initApp() {
  All.mobileMenu();
  All.renderBrands();
  All.renderStyles();
  All.renderProducts(All.newArrivals, DOM_ELEMENTS.newArrivalsContainer);
  All.renderProducts(All.topSelling, DOM_ELEMENTS.topSellingContainer);
  All.renderReviews();
  All.renderCurrentReview();
  All.renderReviewsPerWidth();

  DOM_ELEMENTS.closePromo.addEventListener("click", () => {
    DOM_ELEMENTS.promoContainer.style.display = "none";
  });
  DOM_ELEMENTS.viewAll[0].addEventListener("click", () => {
    All.renderProducts(All.newArrivals, DOM_ELEMENTS.newArrivalsContainer);
  });
  DOM_ELEMENTS.viewAll[1].addEventListener("click", () => {
    All.renderProducts(All.topSelling, DOM_ELEMENTS.topSellingContainer);
  });
  DOM_ELEMENTS.submitEmail.addEventListener("click", All.validator);
}

initApp();
