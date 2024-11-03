import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    try {
      const callback = (entries) => {
        entries.forEach((entry) => {
          const animationType = entry.target.dataset.animateType;
          if (entry.isIntersecting) {
            entry.target.classList.add(animationType);
          } else {
            entry.target.classList.remove(animationType);
          }
        });
      };

      const observer = new IntersectionObserver(callback);

      const targets = document.querySelectorAll(".show-on-scroll");
      targets.forEach((target) => {
        observer.observe(target);
      });

      return () => {
        observer.disconnect();
      };
    } catch (e) {
      console.error(e.message);
    }
  }, []);
};

export default useScrollAnimation;
