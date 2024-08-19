let reviewsPerWidth;
let currentReviewIndex = 0;

function getReviewsElements() {
  const reviewsContainer = document.getElementById("reviews");
  const navContainer = reviewsContainer.querySelector("#reviews-nav");
  const reviewsList = reviewsContainer.querySelector("#reviews-list");
  const prevButton = reviewsContainer.querySelector("#prev-bttn");
  const nextButton = reviewsContainer.querySelector("#next-bttn");

  if (!navContainer || !reviewsList || !prevButton || !nextButton) {
    throw new Error("One or more review elements not found");
  }

  return {
    reviewsContainer,
    navContainer,
    reviewsList,
    prevButton,
    nextButton,
  };
}

export function showReviewsPerWidth() {
  reviewsPerWidth = window.innerWidth < 668 ? 1 : 3;
  currentReviewIndex = 0;
  showCurrentReview();
}

function showCurrentReview() {
  const { reviewsList } = getReviewsElements();

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

export function goToPreviousReview() {
  if (currentReviewIndex > 0) {
    currentReviewIndex--;
    showCurrentReview();
  }
}

export function goToNextReview() {
  const { reviewsList } = getReviewsElements();
  const totalReviews = reviewsList.children.length / reviewsPerWidth;
  if (currentReviewIndex < totalReviews - 1) {
    currentReviewIndex++;
    showCurrentReview();
  }
}

window.addEventListener("resize", showReviewsPerWidth);
