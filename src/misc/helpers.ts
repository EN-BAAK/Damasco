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

export const highlightActiveLink = (navLinks: HTMLAnchorElement[]) => {
  const halfViewport = window.innerHeight / 2;
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("section")
  );

  sections.forEach((section) => {
    const { top, bottom } = section.getBoundingClientRect();
    const isHalfVisible = top <= halfViewport && bottom >= halfViewport;

    if (isHalfVisible) {
      const id = section.id;
      const activeLinkElement = document.querySelector<HTMLAnchorElement>(
        `nav a[href="#${id}"]`
      );

      if (activeLinkElement) {
        navLinks.forEach((link) => link.classList.remove("active"));
        activeLinkElement.classList.add("active");
        return;
      }
    }
  });
};

export const setAnimation = () => {
  const reveals = document.querySelectorAll<HTMLElement>("*[data-ani]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const revealElement = entry.target as HTMLElement;
        const animation = revealElement.getAttribute("data-ani");

        revealElement.style.animation = `${animation} 1s .3s linear forwards`;

        observer.unobserve(revealElement);
      }
    });
  });

  reveals.forEach((revealElement) => {
    observer.observe(revealElement);
  });
};
