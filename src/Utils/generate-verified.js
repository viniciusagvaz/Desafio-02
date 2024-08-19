export function createIsVerified() {
  const verified = document.createElement("img");
  verified.alt = "verified";
  verified.src = "/src/assets/icons/verified.svg";
  verified.style.width = "19px";
  verified.style.height = "19px";
  return verified;
}

export function renderVerified() {
  const verifiedContainer = document.createElement("span");
  verifiedContainer.classList.add("verified-container");
  const verified = createIsVerified();
  verifiedContainer.appendChild(verified);

  return verifiedContainer;
}
