import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import { addClass, removeClass } from "../../helpers/format/classNameModfier";

export default function Carousel({ children, refContainer }) {
  const refDragHandler = useRef(null);
  const containerClientRect = refContainer.current.getBoundingClientRect();

  const [index, setIndex] = useState(0);

  const threshold = 100;
  const itemToShow = window.innerWidth < 767 ? 1 : 4;

  const posInitial = useRef(0);
  const posX1 = useRef(0);
  const posX2 = useRef(0);
  const posFinal = useRef(0);
  const isAllowShift = useRef(true);
  const isDragging = useRef(false);
  const cards = useRef([]);
  const [cardSize, setCardSize] = useState(0);
  const [cardCount, setCardCount] = useState(0);

  useLayoutEffect(() => {
    if (refDragHandler.current) {
      const cardElements =
        refDragHandler.current.getElementsByClassName("card");
      cards.current = cardElements;
      if (cardElements.length > 0) {
        setCardSize(cardElements[0].offsetWidth);
        setCardCount(cardElements.length);
      }
    }
  }, [children]);

  const updatePosition = useCallback(
    (newIndex) => {
      const maxIndex = Math.max(0, cardCount - itemToShow);
      const clampedIndex = Math.min(Math.max(0, newIndex), maxIndex);

      const offset = clampedIndex * cardSize;

      addClass(refDragHandler.current, "transition-all duration-200");
      refDragHandler.current.style.left = `-${offset}px`;

      setIndex(clampedIndex);
    },
    [cardCount, cardSize, itemToShow]
  );

  const onDragMove = useCallback((e) => {
    e.preventDefault();
    isDragging.current = true;

    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    posX2.current = posX1.current - clientX;
    posX1.current = clientX;

    refDragHandler.current.style.left = `${
      refDragHandler.current.offsetLeft - posX2.current
    }px`;
  }, []);

  const onDragEnd = useCallback(
    (e) => {
      e.preventDefault();
      posFinal.current = refDragHandler.current.offsetLeft;

      const distance = posFinal.current - posInitial.current;
      const shiftCount = Math.floor(Math.abs(distance) / cardSize);

      if (Math.abs(distance) > threshold) {
        const newIndex = index + (distance < 0 ? shiftCount : -shiftCount);

        const maxIndex = Math.max(0, cardCount - itemToShow);
        const finalIndex = Math.min(Math.max(0, newIndex), maxIndex);

        updatePosition(finalIndex);
      } else {
        refDragHandler.current.style.left = `${posInitial.current}px`;
      }

      setTimeout(() => {
        isDragging.current = false;
      }, 0);

      document.onmouseup = null;
      document.onmousemove = null;
    },
    [cardSize, index, threshold, updatePosition, cardCount, itemToShow]
  );

  const onDragStart = useCallback(
    (e) => {
      e.preventDefault();
      posInitial.current = refDragHandler.current.offsetLeft;

      if (e.type === "touchstart") {
        posX1.current = e.touches[0].clientX;
      } else {
        posX1.current = e.clientX;
        document.onmouseup = onDragEnd;
        document.onmousemove = onDragMove;
      }
    },
    [onDragEnd, onDragMove]
  );

  const onClick = useCallback((e) => {
    if (isDragging.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  const funcCheckIndex = useCallback((e) => {
    if (e.propertyName === "left") {
      setTimeout(() => {
        removeClass(refDragHandler.current, "transition-all duration-200");
      }, 200);
      isAllowShift.current = true;
    }
  }, []);

  useLayoutEffect(() => {
    const refForwardDragHandler = refDragHandler.current;

    refForwardDragHandler.onmousedown = onDragStart;
    refForwardDragHandler.addEventListener("touchstart", onDragStart);
    refForwardDragHandler.addEventListener("touchend", onDragEnd);
    refForwardDragHandler.addEventListener("touchmove", onDragMove);
    refForwardDragHandler.addEventListener("click", onClick);
    refForwardDragHandler.addEventListener("transitionend", funcCheckIndex);

    return () => {
      refForwardDragHandler.removeEventListener("touchstart", onDragStart);
      refForwardDragHandler.removeEventListener("touchend", onDragEnd);
      refForwardDragHandler.removeEventListener("touchmove", onDragMove);
      refForwardDragHandler.removeEventListener("click", onClick);
      refForwardDragHandler.removeEventListener(
        "transitionend",
        funcCheckIndex
      );
    };
  }, [onDragStart, onDragEnd, onDragMove, onClick, funcCheckIndex]);

  return (
    <div
      ref={refDragHandler}
      className="flex -mx-4 flex-row relative"
      style={{ paddingLeft: containerClientRect.left - 16 }}
    >
      {children}
    </div>
  );
}
