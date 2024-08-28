const windowHeight = window.innerHeight;

export const setItemToLocalStorage = (
  key: string,
  value: string | number | object
) => {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
};

export const getItemFromLocalStorage = (key: string) => {
  const json = localStorage.getItem(key);

  if (!json) return false;

  return JSON.parse(json);
};

export const highlightActiveLink = (
  navLinks: HTMLAnchorElement[],
  activeLink: string | null | undefined
) => {
  if (!activeLink) return;

  const sections = document.querySelectorAll<HTMLElement>("section");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
      const sectionID = section.id;
      const activeLinkElement = document.querySelector<HTMLAnchorElement>(
        `nav a[href="#${sectionID}"]`
      );
      navLinks.forEach((link) => link.classList.remove("active"));
      activeLinkElement?.parentElement?.classList.add("active");
    }
  });
};

export const setAnimation = () => {
  const reveals = document.querySelectorAll<HTMLElement>("*[data-ani]");
  reveals.forEach((revealElement) => {
    const elementTop = revealElement.getBoundingClientRect().top;
    if (elementTop < windowHeight) {
      const animation = revealElement.getAttribute("data-ani");
      revealElement.removeAttribute("data-ani");
      revealElement.style.animation = `${animation} 1s .3s linear forwards`;

      // setTimeout(() => {}, 300);
    }
  });
};
