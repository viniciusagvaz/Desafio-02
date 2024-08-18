import { CustomerReview } from "../../Classes/customer-review-class.js";
import { customersReviews } from "../../data/customers-reviews.js";
import { createElementWithClass } from "../../Utils/create-elements.js";
import { renderStars } from "../../Utils/generate-stars.js";
import { renderVerified } from "../../Utils/generate-verified.js";

const reviewsList = () =>
  customersReviews.map(
    (review) =>
      new CustomerReview(
        review.id,
        review.stars,
        review.name,
        review.isVerified,
        review.description
      )
  );

function createReviewCard(review) {
  const reviewCard = createElementWithClass("li", "review-card");
  const reviewAuthorContainer = createElementWithClass(
    "span",
    "review-author--container"
  );

  const reviewStars = renderStars(review.stars);
  const reviewVerified = renderVerified(review.isVerified);
  const reviewAuthor = createReviewAuthor(review);
  const reviewText = createReviewText(review);

  reviewAuthorContainer.appendChild(reviewAuthor);
  reviewAuthorContainer.appendChild(reviewVerified);

  reviewCard.appendChild(reviewStars);
  reviewCard.appendChild(reviewAuthorContainer);
  reviewCard.appendChild(reviewText);
  reviewCard.classList.add("slide");

  return reviewCard;
}

function createReviewAuthor(review) {
  const reviewAuthor = createElementWithClass("p", "review-author");
  reviewAuthor.classList.add(review.isVerified ? "verified" : "unverified");
  reviewAuthor.textContent = review.name;

  return reviewAuthor;
}

function createReviewText(review) {
  const reviewText = createElementWithClass("p", "review-text");
  reviewText.textContent = review.description;
  return reviewText;
}

export function renderReviews() {
  const reviewsContainer = document.querySelector("#reviews-list");
  if (!reviewsContainer) {
    console.error("Element with ID 'reviews-list' not found.");
    return;
  }

  const reviews = reviewsList();
  reviews.forEach((review) => {
    const reviewCard = createReviewCard(review);
    reviewsContainer.appendChild(reviewCard);
  });
}
