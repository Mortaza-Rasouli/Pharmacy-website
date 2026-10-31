import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

export default function Modal({ title, onClose, children }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-md overflow-y-auto rounded-[14px] bg-white p-5 shadow-2xl animate-pop-in sm:p-7"
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 cursor-pointer rounded-full p-1 text-2xl text-muted transition-colors hover:text-ink"
        >
          <HiXMark />
        </button>
        <h2 id="modal-title" className="pr-8 text-xl font-extrabold text-ink sm:text-2xl">
          {title}
        </h2>
        <div className="mt-3 text-[14px] leading-relaxed text-copy sm:text-[16px]">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
