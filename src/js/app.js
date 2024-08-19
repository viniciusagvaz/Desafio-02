import { renderFooter } from "../Components/Footer/footer.js";
import { renderHeader } from "../Components/Header/header.js";
import { initHomepage } from "../pages/homepage.js";

function initApp() {
  const root = document.getElementById("root");
  initHomepage(root);
  renderHeader(root);
  renderFooter(root);
}

initApp();
