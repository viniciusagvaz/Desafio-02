import * as All from "./index.js";

const DOM_ELEMENTS = {
  newArrivalsContainer: document.querySelector(
    "#new-arrivals .products-container"
  ),

  topSellingContainer: document.querySelector(
    "#top-selling .products-container"
  ),
  submitEmail: document.querySelector("#subscribe-button"),
  slider: document.querySelector(".slider-container"),
  sliderItems: document.querySelector(".review-slides"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
};

function initApp() {
  All.renderBrands();
  All.renderStyles();
  All.renderProducts(All.newArrivals, DOM_ELEMENTS.newArrivalsContainer);
  All.renderProducts(All.topSelling, DOM_ELEMENTS.topSellingContainer);
  All.mobileMenu();
  All.renderReviews();
  All.renderCurrentReview();
  All.renderReviewsPerWidth();

  DOM_ELEMENTS.submitEmail.addEventListener("click", All.validator);
}

initApp();
