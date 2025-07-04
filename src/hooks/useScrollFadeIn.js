import { useEffect } from "react";

export default function useScrollFadeIn(className = "animate-fadeInUp") {
    useEffect(() => {
        const elements = document.querySelectorAll(".scroll-fade");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [className]);
}
