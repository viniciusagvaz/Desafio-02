export function createFullStarElement() {
  const fullStar = document.createElement("img", "full-star");
  fullStar.src = "/src/assets/icons/star.svg";
  fullStar.style.width = "19px";
  fullStar.style.height = "19px";
  return fullStar;
}

export function createHalfStarElement() {
  const halfStar = document.createElement("img", "half-star");
  halfStar.src = "/src/assets/icons/half-star.svg";
  halfStar.style.width = "19px";
  halfStar.style.height = "19px";
  return halfStar;
}

export function renderStars(rating, showRating = false) {
  const starsContainer = document.createElement("span");
  starsContainer.classList.add("stars-container");

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    starsContainer.appendChild(createFullStarElement());
  }

  if (hasHalfStar) {
    starsContainer.appendChild(createHalfStarElement());
  }

  const ratingSpan = document.createElement("span");
  ratingSpan.textContent = `${rating}/5`;

  if (showRating) {
    starsContainer.appendChild(ratingSpan);
  }

  return starsContainer;
}
