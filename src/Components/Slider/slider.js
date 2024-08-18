const reviewsContainer = document.getElementById("reviews");
const navContainer = reviewsContainer.querySelector("#reviews-nav");
const prevButton = navContainer.querySelector("#prev-bttn");
const nextButton = navContainer.querySelector("#next-bttn");
const reviewsList = reviewsContainer.querySelector("#reviews-list");

let reviewsPerWidth;
let currentReviewIndex = 0;

export function renderCurrentReview() {
  const startIndex = currentReviewIndex * reviewsPerWidth;
  const endIndex = startIndex + reviewsPerWidth;

  Array.from(reviewsList.children).forEach((review) => {
    review.style.display = "none";
  });

  Array.from(reviewsList.children)
    .slice(startIndex, endIndex)
    .forEach((review) => {
      review.style.display = "block";
    });
}

export function renderReviewsPerWidth() {
  currentReviewIndex = 0;
  reviewsPerWidth = window.innerWidth <= 668 ? 1 : 3;
  renderCurrentReview();
}

function goToPreviousReview() {
  if (currentReviewIndex > 0) {
    currentReviewIndex--;
    renderCurrentReview();
  }
}

function goToNextReview() {
  const totalReviews = reviewsList.children.length / reviewsPerWidth;
  if (currentReviewIndex < totalReviews - 1) {
    currentReviewIndex++;
    renderCurrentReview();
  } 
}

prevButton.addEventListener("click", goToPreviousReview);
nextButton.addEventListener("click", goToNextReview);

window.addEventListener("resize", renderReviewsPerWidth);
