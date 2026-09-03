import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// =========================================================
// CATEGORY COLORS
// =========================================================

const CATEGORY_COLORS = {
  "Web Development": {
    bar: "#6366F1",
    bg: "#EEF2FF",
    text: "#4338CA",
  },

  "Mobile Apps": {
    bar: "#0EA5E9",
    bg: "#E0F2FE",
    text: "#0369A1",
  },

  "Brand Identity": {
    bar: "#F59E0B",
    bg: "#FEF3C7",
    text: "#B45309",
  },

  "Business Automation": {
    bar: "#10B981",
    bg: "#D1FAE5",
    text: "#065F46",
  },

  "E-Commerce Applications": {
    bar: "#EC4899",
    bg: "#FCE7F3",
    text: "#9D174D",
  },

  "Intelligent Dashboards": {
    bar: "#8B5CF6",
    bg: "#EDE9FE",
    text: "#5B21B6",
  },

  Other: {
    bar: "#64748B",
    bg: "#F1F5F9",
    text: "#334155",
  },
};

const DEFAULT_COLOR = {
  bar: "#6366F1",
  bg: "#EEF2FF",
  text: "#4338CA",
};

// =========================================================
// COMPONENT
// =========================================================

const PortfolioCard = ({ project, expanded, onToggle }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = Array.isArray(project.image_urls)
    ? project.image_urls
    : [];

  const colors =
    CATEGORY_COLORS[project.category] || DEFAULT_COLOR;

  // =======================================================
  // NEXT IMAGE
  // =======================================================

  const nextImage = (e) => {
    e.stopPropagation();

    if (images.length <= 1) return;

    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // =======================================================
  // PREVIOUS IMAGE
  // =======================================================

  const prevImage = (e) => {
    e.stopPropagation();

    if (images.length <= 1) return;

    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // =======================================================
  // CLOSE ZOOM ON SCROLL
  // =======================================================

  useEffect(() => {
    const handleScroll = () => {
      if (zoomImage) {
        setZoomImage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [zoomImage]);

  // =======================================================
  // ESCAPE KEY
  // =======================================================

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setZoomImage(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  // =======================================================
  // RETURN
  // =======================================================

  return (
    <>
      {/* =====================================================
          CARD
      ===================================================== */}

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="
          relative
          flex
          flex-col
          w-full
          overflow-hidden
          rounded-2xl
          theme-card
          theme-border
          border
          transition-all
          duration-300
        "
        style={{
          height: expanded ? "auto" : "100%",
          minHeight: "560px",

          boxShadow: hovered
            ? "0 20px 50px -15px rgba(99,102,241,0.18), 0 5px 20px rgba(0,0,0,0.06)"
            : "0 2px 8px rgba(0,0,0,0.05)",

          transform: hovered
            ? "translateY(-4px)"
            : "translateY(0)",
        }}
      >
        {/* =================================================
            CATEGORY BAR
        ================================================= */}

        <div
          className="w-full h-[3px] shrink-0"
          style={{
            background: `linear-gradient(
              90deg,
              ${colors.bar},
              ${colors.bar}cc
            )`,
          }}
        />

        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            relative
            w-full
            h-[220px]
            overflow-hidden
            shrink-0
          "
          style={{
            cursor: images.length ? "zoom-in" : "default",
            background: "var(--bg-secondary)",
          }}
          onClick={() => {
            if (images.length) {
              setZoomImage(true);
            }
          }}
        >
          {images.length > 0 ? (
            <img
              src={images[currentImage]}
              alt={
                project.title ||
                "Project preview"
              }
              className="
                block
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
              "
              style={{
                transform: hovered
                  ? "scale(1.04)"
                  : "scale(1)",
              }}
            />
          ) : (
            <div
              className="
                flex
                items-center
                justify-center
                w-full
                h-full
                theme-text-secondary
              "
              style={{
                fontSize: "14px",
              }}
            >
              No Image Available
            </div>
          )}

          {/* ===============================================
              PREVIOUS
          =============================================== */}

          {images.length > 1 && (
            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous image"
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                border
                border-white/20
                bg-white/90
                text-slate-700
                shadow-lg
                z-[2]
                cursor-pointer
                transition-transform
                duration-200
                hover:scale-105
              "
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {/* ===============================================
              NEXT
          =============================================== */}

          {images.length > 1 && (
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                border
                border-white/20
                bg-white/90
                text-slate-700
                shadow-lg
                z-[2]
                cursor-pointer
                transition-transform
                duration-200
                hover:scale-105
              "
            >
              <ChevronRight size={18} />
            </button>
          )}

          {/* ===============================================
              IMAGE COUNTER
          =============================================== */}

          {images.length > 1 && (
            <div
              className="
                absolute
                bottom-3
                right-3
                px-2.5
                py-1
                rounded-full
                bg-black/70
                text-white
                text-xs
                font-semibold
                z-[3]
              "
            >
              {currentImage + 1} / {images.length}
            </div>
          )}

          {/* ===============================================
              HOVER OVERLAY
          =============================================== */}

          {images.length > 0 && (
            <div
              className="
                absolute
                inset-0
                flex
                items-end
                p-3.5
                pointer-events-none
                transition-opacity
                duration-300
              "
              style={{
                background:
                  "linear-gradient(to top, rgba(15,23,42,0.55), transparent 60%)",

                opacity: hovered ? 1 : 0,
              }}
            >
              <span
                className="
                  flex
                  items-center
                  gap-1.5
                  text-white
                  text-[11px]
                  font-medium
                  tracking-wider
                  uppercase
                "
              >
                <Maximize2 size={12} />
                Preview image
              </span>
            </div>
          )}
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            flex
            flex-col
            flex-1
            min-w-0
            px-6
            pt-[22px]
            pb-6
          "
        >
          {/* ===============================================
              CATEGORY
          =============================================== */}

          {project.category && (
            <span
              className="
                inline-flex
                items-center
                w-fit
                text-[11px]
                font-semibold
                tracking-wider
                uppercase
                px-2.5
                py-1.5
                rounded-full
                mb-3
              "
              style={{
                background: colors.bg,
                color: colors.text,
              }}
            >
              {project.category}
            </span>
          )}

          {/* ===============================================
              TITLE
          =============================================== */}

          <h3
            className="
              text-lg
              font-bold
              theme-text
              mb-2.5
              leading-tight
              tracking-tight
            "
          >
            {project.title}
          </h3>

          {/* ===============================================
              DESCRIPTION
          =============================================== */}

          <div className="mb-3.5">
            <p
              className={`
                m-0
                text-sm
                theme-text-secondary
                leading-relaxed

                ${
                  expanded
                    ? ""
                    : "line-clamp-3"
                }
              `}
            >
              {project.description}
            </p>

            {project.description?.length > 120 && (
              <button
                type="button"
                onClick={onToggle}
                className="
                  inline-flex
                  items-center
                  gap-0.5
                  mt-1.5
                  p-0
                  border-0
                  bg-transparent
                  text-sm
                  font-semibold
                  cursor-pointer
                "
                style={{
                  color: colors.text,
                }}
              >
                {expanded
                  ? "↑ Read less"
                  : "Read more →"}
              </button>
            )}
          </div>

          {/* ===============================================
              TECH STACK
          =============================================== */}

          {project.techstack?.length > 0 && (
            <div
              className="
                flex
                flex-wrap
                gap-1.5
                mt-1
              "
            >
              {project.techstack.map(
                (tech, index) => (
                  <span
                    key={`${tech}-${index}`}
                    className="
                      text-[11px]
                      font-medium
                      px-2.5
                      py-1.5
                      rounded-md
                      theme-icon-bg
                      theme-text-secondary
                      theme-border
                      border
                      whitespace-nowrap
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          )}

          {/* ===============================================
              CTA
          =============================================== */}

          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-2
                w-full
                mt-5
                px-4
                py-2.5
                rounded-[10px]
                text-sm
                font-semibold
                no-underline
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
              style={{
                border: `1.5px solid ${colors.bar}`,

                background: hovered
                  ? colors.bar
                  : "transparent",

                color: hovered
                  ? "#FFFFFF"
                  : colors.text,
              }}
            >
              Visit Site
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* =====================================================
          IMAGE MODAL
      ===================================================== */}

      {zoomImage && images.length > 0 && (
        <div
          onClick={() => setZoomImage(false)}
          className="
            fixed
            inset-0
            flex
            items-center
            justify-center
            p-6
            z-[9999]
          "
          style={{
            background:
              "rgba(15,23,42,0.85)",

            backdropFilter: "blur(8px)",
          }}
        >
          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={() => setZoomImage(false)}
            aria-label="Close image preview"
            className="
              absolute
              top-5
              right-5
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              border
              border-white/20
              bg-white/10
              text-white
              cursor-pointer
              z-[10000]
              transition-colors
              duration-200
              hover:bg-red-500
            "
          >
            <X size={18} />
          </button>

          {/* MODAL IMAGE */}

          <img
            src={images[currentImage]}
            alt={
              project.title ||
              "Project preview"
            }
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              max-h-[90vh]
              max-w-[90vw]
              w-auto
              h-auto
              object-contain
              rounded-xl
              shadow-2xl
            "
          />
        </div>
      )}
    </>
  );
};

export default PortfolioCard;