import { useEffect } from "react";

export const useStickyNav = (navbarRef, heroRef) => {
  useEffect(() => {
    const nav = navbarRef.current;
    const hero = heroRef.current;

    const navbarHeight = nav.getBoundingClientRect().height;

    const stickyNavbar = (e) => {
      const [entry] = e;

      if (!entry.isIntersecting) {
        nav.classList.add("sticky");
        hero.style.marginTop = `${navbarHeight}px`;
      } else {
        nav.classList.remove("sticky");
        hero.style.marginTop = 0;
      }
    };

    const heroObserver = new IntersectionObserver(stickyNavbar, {
      root: null,
      threshold: 0,
      rootMargin: `-${navbarHeight}px`,
    });

    heroObserver.observe(hero);
  }, []);
};
