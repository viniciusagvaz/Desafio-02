import { topSelling } from "../data/top-selling.js";
import { newArrivals } from "../data/new-arrivals.js";
import { renderBrands } from "../Components/Brands/brands-component.js";
import { renderStyles } from "../Components/DressStyles/dress-styles-component.js";
import { renderProducts } from "../Components/ProductsList/products-component.js";
import { validator } from "../Validators/email-validator.js";
import { renderReviews } from "../Components/CustomersReview/customer-review-component.js";
import {
  goToNextReview,
  goToPreviousReview,
  showReviewsPerWidth,
} from "../Components/Slider/slider.js";

function Homepage() {
  return `
 <main id="main" class="site-main">
    <section id="hero" class="hero-container">
      <article id="hero-text" class="hero-text--container">
        <h1 class="hero-title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p class="hero-paragraph">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button type="submit" class="site-button hero-button">
          Shop now
        </button>

        <div class="hero-stats">
          <dl class="stats-list">
            <dt class="stats-title">200+</dt>
            <dd class="stats-definition">International Brands</dd>
          </dl>

          <svg width="1" height="74" viewBox="0 0 1 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="-2.18557e-08" x2="0.500003" y2="74" stroke="black" stroke-opacity="0.1" />
          </svg>

          <dl class="stats-list">
            <dt class="stats-title">2,000+</dt>
            <dd class="stats-definition">High-Quality Products</dd>
          </dl>

          <svg width="1" height="74" viewBox="0 0 1 74" fill="none" class="tablet-hide"
            xmlns="http://www.w3.org/2000/svg" class="mobile-hide">
            <line x1="0.5" y1="-2.18557e-08" x2="0.500003" y2="74" stroke="black" stroke-opacity="0.1" />
          </svg>

          <dl class="stats-list last-stat">
            <dt class="stats-title">30,000+</dt>
            <dd class="stats-definition">Happy Customers</dd>
          </dl>
        </div>
      </article>

      <figure id="hero-figure" class="hero-figure--container">
        <img src="src/assets/img/hero.webp" class="hero-image" alt="Models using design clothes" />

        <svg viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg" class="star-icon">
          <path
            d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
            fill="black" class="rotate-scale" />
        </svg>

        <svg viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg" class="star-icon">
          <path
            d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
            fill="black" />
        </svg>
      </figure>
    </section>

    <section id="brands" class="brands-container">
      <ul id="brand-list" class="brand-list--container"></ul>
    </section>

    <section id="products" class="products-section--container">
      <article id="new-arrivals" class="product-category-container">
        <h2 class="md-title">New Arrivals</h2>
        <section class="products-container"></section>
        <button type="submit" class="view-bttn site-button">View All</button>
      </article>

      <article id="top-selling" class="product-category-container">
        <h2 class="md-title">Top Selling</h2>
        <section class="products-container"></section>
        <button type="submit" class="view-bttn site-button">View All</button>
      </article>
    </section>

    <section id="dress-styles" class="dress-styles--container">
      <h2 class="md-title">Browse By Dress Style</h2>
      <article id="style-list" class="style-list--container"></article>
    </section>

    <section id="reviews" class="reviews-container">
      <div id="reviews-title" class="reviews-title--container">
        <h2 class="md-title">Our Happy Customers</h2>

        <nav id="reviews-nav" class="reviews-nav--container">
          <button type="button" id="prev-bttn" class="next-prev next-bttn">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.70406 0.454104L0.954061 7.2041C0.849182 7.30862 0.765966 7.43281 0.709186 7.56956C0.652405 7.7063 0.623175 7.85291 0.623175 8.00098C0.623175 8.14904 0.652405 8.29565 0.709186 8.4324C0.765966 8.56915 0.849182 8.69334 0.954061 8.79785L7.70406 15.5479C7.91541 15.7592 8.20205 15.8779 8.50094 15.8779C8.79982 15.8779 9.08647 15.7592 9.29781 15.5479C9.50916 15.3365 9.62789 15.0499 9.62789 14.751C9.62789 14.4521 9.50916 14.1654 9.29781 13.9541L4.46875 9.12504L18.25 9.12504C18.5484 9.12504 18.8345 9.00651 19.0455 8.79554C19.2565 8.58456 19.375 8.29841 19.375 8.00004C19.375 7.70167 19.2565 7.41552 19.0455 7.20455C18.8345 6.99357 18.5484 6.87504 18.25 6.87504L4.46875 6.87504L9.29875 2.04598C9.51009 1.83463 9.62883 1.54799 9.62883 1.2491C9.62883 0.950218 9.51009 0.663574 9.29875 0.45223C9.08741 0.240885 8.80076 0.122151 8.50187 0.122151C8.20299 0.122151 7.91634 0.240885 7.705 0.45223L7.70406 0.454104Z"
                fill="black" />
            </svg>
          </button>
          <button type="button" id="next-bttn" class="next-prev prev-bttn">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.2959 0.454104L19.0459 7.2041C19.1508 7.30862 19.234 7.43281 19.2908 7.56956C19.3476 7.7063 19.3768 7.85291 19.3768 8.00098C19.3768 8.14904 19.3476 8.29565 19.2908 8.4324C19.234 8.56915 19.1508 8.69334 19.0459 8.79785L12.2959 15.5479C12.0846 15.7592 11.7979 15.8779 11.4991 15.8779C11.2002 15.8779 10.9135 15.7592 10.7022 15.5479C10.4908 15.3365 10.3721 15.0499 10.3721 14.751C10.3721 14.4521 10.4908 14.1654 10.7022 13.9541L15.5313 9.12504L1.75 9.12504C1.45163 9.12504 1.16548 9.00651 0.954505 8.79554C0.743527 8.58456 0.625 8.29841 0.625 8.00004C0.625 7.70167 0.743527 7.41552 0.954505 7.20455C1.16548 6.99357 1.45163 6.87504 1.75 6.87504L15.5313 6.87504L10.7013 2.04598C10.4899 1.83463 10.3712 1.54799 10.3712 1.2491C10.3712 0.950218 10.4899 0.663574 10.7013 0.45223C10.9126 0.240885 11.1992 0.122151 11.4981 0.122151C11.797 0.122151 12.0837 0.240885 12.295 0.45223L12.2959 0.454104Z"
                fill="black" />
            </svg>
          </button>
        </nav>
      </div>

      <ul id="reviews-list" class="reviews-list--container"></ul>
    </section>

    <section id="newsletter-card" class="newsletter-card--container">
      <p class="newsletter-card--title">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </p>

      <div id="newsletter-form" class="newsletter-form--container">
        <form id="newsletter-form" class="newsletter-form">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM11 7.97375L4.89219 2.375H17.1078L11 7.97375ZM7.69906 8L3.125 12.1925V3.8075L7.69906 8ZM9.36406 9.52625L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L12.6359 9.52625L17.1078 13.625H4.89219L9.36406 9.52625ZM14.3009 8L18.875 3.8075V12.1925L14.3009 8Z"
              fill="black" fill-opacity="0.4" />
          </svg>

          <input id="email-input" type="email" name="email" placeholder="Enter your email address" class="input-area"
            required />
        </form>
        <input type="submit" form="email" id="subscribe-button" class="site-button subscribe-bttn"
          value="Subscribe to Newsletter" />
      </div>
    </section>
  </main>
  `;
}

function homePageFunctions() {
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
    nextButton: document.querySelector("#next-bttn"),
    prevButton: document.querySelector("#prev-bttn"),
  };

  renderBrands();
  renderProducts(newArrivals, DOM_ELEMENTS.newArrivalsContainer);
  renderProducts(topSelling, DOM_ELEMENTS.topSellingContainer);
  renderStyles();
  renderReviews();
  showReviewsPerWidth();
  goToNextReview();
  goToPreviousReview();

  DOM_ELEMENTS.submitEmail.addEventListener("click", validator);
  DOM_ELEMENTS.nextButton.addEventListener("click", goToNextReview);
  DOM_ELEMENTS.prevButton.addEventListener("click", goToPreviousReview);
}

export function initHomepage(element) {
  element.insertAdjacentHTML("afterbegin", Homepage());
  homePageFunctions();
}
