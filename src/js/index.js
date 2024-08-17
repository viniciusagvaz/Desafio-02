import { topSelling } from "../data/top-selling.js";
import { newArrivals } from "../data/new-arrivals.js";
import { renderBrands } from "../Components/Brands/brands-component.js";
import { renderStyles } from "../Components/DressStyles/dress-styles-component.js";
import { renderProducts } from "../Components/ProductsList/products-component.js";
import { mobileMenu } from "../Components/AccordionMenu/accordion-menu.js";
import { validator } from "../Validators/email-validator.js";
import { renderReviews } from "../Components/Reviews/reviews-component.js";
import {
  renderCurrentReview,
  renderReviewsPerWidth,
} from "../Components/Slider/slider.js";

export {
  topSelling,
  newArrivals,
  renderProducts,
  renderBrands,
  renderStyles,
  renderReviews,
  mobileMenu,
  validator,
  renderCurrentReview,
  renderReviewsPerWidth,
};
