export function MainContent(content) {
  return `
      <main id="main" class="site-main">
         ${content}
      </main>
   `;
}

export function renderMain(element, mainContent) {
  element.insertAdjacentHTML("beforeend", `${mainContent}`);
}
