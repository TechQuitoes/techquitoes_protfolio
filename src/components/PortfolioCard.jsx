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
        style={{
          width: "100%",
          height: expanded ? "auto" : "100%",
          minHeight: "560px",

          borderRadius: "16px",

          background: "#FFFFFF",

          border: "1px solid #E2E8F0",

          overflow: "hidden",

          display: "flex",
          flexDirection: "column",

          boxShadow: hovered
            ? "0 20px 50px -15px rgba(99,102,241,0.18), 0 5px 20px rgba(0,0,0,0.06)"
            : "0 2px 8px rgba(0,0,0,0.05)",

          transform: hovered
            ? "translateY(-4px)"
            : "translateY(0)",

          transition:
            "transform 0.3s ease, box-shadow 0.3s ease",

          position: "relative",
        }}
      >

        {/* =================================================
            CATEGORY BAR
        ================================================= */}

        <div
          style={{
            height: "3px",

            width: "100%",

            background: `linear-gradient(
              90deg,
              ${colors.bar},
              ${colors.bar}cc
            )`,

            flexShrink: 0,
          }}
        />


        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          style={{
            position: "relative",

            width: "100%",

            height: "220px",

            overflow: "hidden",

            flexShrink: 0,

            cursor: images.length ? "zoom-in" : "default",

            background: "#F8FAFC",
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
              alt={project.title || "Project preview"}
              style={{
                width: "100%",
                height: "100%",

                objectFit: "cover",

                display: "block",

                transform: hovered
                  ? "scale(1.04)"
                  : "scale(1)",

                transition:
                  "transform 0.5s ease",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                color: "#94A3B8",

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
              style={{
                position: "absolute",

                left: "12px",
                top: "50%",

                transform: "translateY(-50%)",

                width: "40px",
                height: "40px",

                borderRadius: "50%",

                border: "none",

                background:
                  "rgba(255,255,255,0.95)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                boxShadow:
                  "0 4px 14px rgba(0,0,0,0.15)",

                zIndex: 2,

                cursor: "pointer",

                transition:
                  "transform 0.2s ease",
              }}
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
              style={{
                position: "absolute",

                right: "12px",
                top: "50%",

                transform: "translateY(-50%)",

                width: "40px",
                height: "40px",

                borderRadius: "50%",

                border: "none",

                background:
                  "rgba(255,255,255,0.95)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                boxShadow:
                  "0 4px 14px rgba(0,0,0,0.15)",

                zIndex: 2,

                cursor: "pointer",
              }}
            >
              <ChevronRight size={18} />
            </button>
          )}


          {/* ===============================================
              IMAGE COUNTER
          =============================================== */}

          {images.length > 1 && (
            <div
              style={{
                position: "absolute",

                bottom: "12px",
                right: "12px",

                padding: "5px 10px",

                borderRadius: "999px",

                background:
                  "rgba(15,23,42,0.75)",

                color: "#FFFFFF",

                fontSize: "12px",

                fontWeight: 600,

                zIndex: 3,
              }}
            >
              {currentImage + 1} / {images.length}
            </div>
          )}


          {/* ===============================================
              HOVER OVERLAY
          =============================================== */}

          {images.length > 0 && (
            <div
              style={{
                position: "absolute",

                inset: 0,

                background:
                  "linear-gradient(to top, rgba(15,23,42,0.55), transparent 60%)",

                opacity: hovered ? 1 : 0,

                transition:
                  "opacity 0.3s ease",

                display: "flex",

                alignItems: "flex-end",

                padding: "14px",

                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  color: "#FFFFFF",

                  fontSize: "11px",

                  fontWeight: 500,

                  letterSpacing: "0.06em",

                  display: "flex",

                  alignItems: "center",

                  gap: "6px",

                  textTransform: "uppercase",
                }}
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
          style={{
            padding: "22px 24px 24px",

            display: "flex",

            flexDirection: "column",

            flex: 1,

            minWidth: 0,
          }}
        >

          {/* ===============================================
              CATEGORY
          =============================================== */}

          {project.category && (
            <span
              style={{
                display: "inline-flex",

                alignItems: "center",

                width: "fit-content",

                fontSize: "11px",

                fontWeight: 600,

                letterSpacing: "0.05em",

                textTransform: "uppercase",

                padding: "5px 10px",

                borderRadius: "999px",

                background: colors.bg,

                color: colors.text,

                marginBottom: "12px",
              }}
            >
              {project.category}
            </span>
          )}


          {/* ===============================================
              TITLE
          =============================================== */}

          <h3
            style={{
              fontSize: "18px",

              fontWeight: 700,

              color: "#0F172A",

              margin: "0 0 10px",

              lineHeight: 1.3,

              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>


          {/* ===============================================
              DESCRIPTION
          =============================================== */}

          <div
            style={{
              fontSize: "14px",

              color: "#64748B",

              lineHeight: 1.65,

              marginBottom: "14px",
            }}
          >
            <p
              style={{
                margin: 0,

                fontSize: "14px",

                color: "#64748B",

                lineHeight: 1.65,
              }}
              className={
                expanded
                  ? ""
                  : "line-clamp-3"
              }
            >
              {project.description}
            </p>

            {project.description?.length > 120 && (
              <button
                type="button"
                onClick={onToggle}
                style={{
                  display: "inline-flex",

                  alignItems: "center",

                  gap: "2px",

                  marginTop: "5px",

                  padding: 0,

                  border: "none",

                  background: "transparent",

                  color: colors.text,

                  fontSize: "13px",

                  fontWeight: 600,

                  cursor: "pointer",
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
              style={{
                display: "flex",

                flexWrap: "wrap",

                gap: "6px",

                marginTop: "4px",
              }}
            >
              {project.techstack.map(
                (tech, index) => (
                  <span
                    key={`${tech}-${index}`}
                    style={{
                      fontSize: "11px",

                      fontWeight: 500,

                      padding: "5px 10px",

                      borderRadius: "6px",

                      background: "#F8FAFC",

                      color: "#475569",

                      border:
                        "1px solid #E2E8EF",

                      letterSpacing: "0.01em",

                      whiteSpace: "nowrap",
                    }}
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
              style={{
                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                gap: "8px",

                width: "100%",

                marginTop: "20px",

                padding: "11px 16px",

                borderRadius: "10px",

                border:
                  `1.5px solid ${colors.bar}`,

                background: hovered
                  ? colors.bar
                  : "transparent",

                color: hovered
                  ? "#FFFFFF"
                  : colors.text,

                fontSize: "14px",

                fontWeight: 600,

                textDecoration: "none",

                transition:
                  "background 0.25s ease, color 0.25s ease, transform 0.25s ease",

                boxSizing: "border-box",
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
          style={{
            position: "fixed",

            inset: 0,

            background:
              "rgba(15,23,42,0.85)",

            backdropFilter: "blur(8px)",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            zIndex: 9999,

            padding: "24px",
          }}
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={() => setZoomImage(false)}
            aria-label="Close image preview"
            style={{
              position: "absolute",

              top: "20px",
              right: "20px",

              width: "40px",
              height: "40px",

              borderRadius: "50%",

              border:
                "1px solid rgba(255,255,255,0.2)",

              background:
                "rgba(255,255,255,0.12)",

              color: "#FFFFFF",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              cursor: "pointer",

              zIndex: 10000,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "#EF4444";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "rgba(255,255,255,0.12)";
            }}
          >
            <X size={18} />
          </button>


          {/* MODAL IMAGE */}

          <img
            src={images[currentImage]}
            alt={project.title || "Project preview"}
            onClick={(e) =>
              e.stopPropagation()
            }
            style={{
              maxHeight: "90vh",

              maxWidth: "90vw",

              width: "auto",

              height: "auto",

              objectFit: "contain",

              borderRadius: "12px",

              boxShadow:
                "0 40px 100px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
    </>
  );
};

export default PortfolioCard;