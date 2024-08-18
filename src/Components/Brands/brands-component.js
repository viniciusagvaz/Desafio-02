const fetchBrands = async () => {
  try {
    const response = await fetch("/src/data/brands.json");

    if (!response.ok) {
      throw new Error(`Could not fetch brands! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};

export const renderBrands = async () => {
  try {
    const brandsList = await fetchBrands();
    const brandsUl = document.querySelector("#brand-list");

    brandsList.brands.forEach((brand) => {
      const item = document.createElement("li");
      const logo = document.createElement("img");

      item.classList.add("brand-item");
      logo.classList.add("brand-logo");

      logo.src = brand.icon;
      item.appendChild(logo);
      brandsUl.appendChild(item);
    });
  } catch (error) {
    console.error("Error rendering brands:", error);
  }
};
