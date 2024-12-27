import { useEffect } from "react";

const useScrollEffect = (containerRef, members) => {
  useEffect(() => {
    const loopedMembers = [members[members.length - 1], ...members, members[0]];

    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollTop = container.scrollTop;
        const cardHeight = 100; // Adjust based on your card height
        const blurAmount = 5; // Adjust based on your desired blur amount

        // Manually style for first card
        const firstCard = container.firstElementChild;
        if (firstCard) {
          firstCard.style.transform = `scale(0.8)`;
          firstCard.style.filter = `blur(2px)`;
        }

        loopedMembers.forEach((_, index) => {
          const card = container.children[index + 1];
          if (card) {
            const distanceFromCenter = Math.abs(scrollTop - index * cardHeight);
            const scale = Math.max(
              1 - distanceFromCenter / (cardHeight * 2),
              0.8
            );
            const blur = Math.min(distanceFromCenter / cardHeight, blurAmount);

            card.style.transform = `scale(${scale})`;
            card.style.filter = `blur(${blur}px)`;
          }
        });
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef, members]);
};

export default useScrollEffect;