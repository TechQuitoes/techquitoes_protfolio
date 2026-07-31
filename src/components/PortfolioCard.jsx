import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Category accent colors — maps category name → { bg, text, bar }
const CATEGORY_COLORS = {
  "Web Development":    { bar: "#6366F1", bg: "#EEF2FF", text: "#4338CA" },
  "Mobile Apps":        { bar: "#0EA5E9", bg: "#E0F2FE", text: "#0369A1" },
  "Brand Identity":     { bar: "#F59E0B", bg: "#FEF3C7", text: "#B45309" },
  "Business Automation":{ bar: "#10B981", bg: "#D1FAE5", text: "#065F46" },
  "E-Commerce Applications": { bar: "#EC4899", bg: "#FCE7F3", text: "#9D174D" },
  "Intelligent Dashboards":  { bar: "#8B5CF6", bg: "#EDE9FE", text: "#5B21B6" },
  "Other":              { bar: "#64748B", bg: "#F1F5F9", text: "#334155" },
};

const DEFAULT_COLOR = { bar: "#6366F1", bg: "#EEF2FF", text: "#4338CA" };

const PortfolioCard = ({ project, expanded, onToggle }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = project.image_urls || [];

  const colors = CATEGORY_COLORS[project.category] || DEFAULT_COLOR;


  const nextImage = (e) => {
  e.stopPropagation();
  if (images.length <= 1) return;

  setCurrentImage((prev) =>
    prev === images.length - 1 ? 0 : prev + 1
  );
};

const prevImage = (e) => {
  e.stopPropagation();
  if (images.length <= 1) return;

  setCurrentImage((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};

  useEffect(() => {
    const handleScroll = () => { if (zoomImage) setZoomImage(false); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [zoomImage]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setZoomImage(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* ── CARD ── */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: "16px",
          background: "#FFFFFF",
          border: "1px solid #E2E8EF",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: expanded ? "auto" : "560px",
          boxShadow: hovered
            ? "0 20px 60px -12px rgba(99,102,241,0.18), 0 4px 16px -4px rgba(0,0,0,0.08)"
            : "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          position: "relative",
        }}
      >
        {/* Category color bar */}
        <div
          style={{
            height: "3px",
            background: `linear-gradient(90deg, ${colors.bar}, ${colors.bar}cc)`,
            flexShrink: 0,
          }}
        />

        {/* ── IMAGE ── */}
        {/* ── IMAGE CAROUSEL ── */}
<div
  style={{
    position: "relative",
    overflow: "hidden",
    flexShrink: 0,
    cursor: "zoom-in",
  }}
  onClick={() => setZoomImage(true)}
>
  <img
    src={images[currentImage]}
    alt={project.title}
    style={{
      height: "220px",
      width: "100%",
      objectFit: "cover",
      display: "block",
      transform: hovered ? "scale(1.04)" : "scale(1)",
      transition: "transform 0.5s ease",
    }}
  />

  {/* Previous Button */}
  {images.length > 1 && (
    <button
      onClick={prevImage}
      style={{
        position: "absolute",
        left: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,0.95)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
        zIndex: 2,
      }}
    >
      <ChevronLeft size={18} />
    </button>
  )}

  {/* Next Button */}
  {images.length > 1 && (
    <button
      onClick={nextImage}
      style={{
        position: "absolute",
        right: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,0.95)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
        zIndex: 2,
      }}
    >
      <ChevronRight size={18} />
    </button>
  )}

  {/* Counter */}
  {images.length > 1 && (
    <div
      style={{
        position: "absolute",
        bottom: "12px",
        right: "12px",
        background: "rgba(15,23,42,0.75)",
        color: "#fff",
        fontSize: "12px",
        padding: "5px 10px",
        borderRadius: "999px",
        fontWeight: 600,
      }}
    >
      {currentImage + 1} / {images.length}
    </div>
  )}

  {/* Hover Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 60%)",
      opacity: hovered ? 1 : 0,
      transition: "opacity 0.3s ease",
      display: "flex",
      alignItems: "flex-end",
      padding: "14px",
    }}
  >
    <span
      style={{
        color: "white",
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
</div>

        {/* ── CONTENT ── */}
        <div
          style={{
            padding: "22px 24px 24px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            gap: 0,
          }}
        >
          {/* Category pill */}
          {project.category && (
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                padding: "4px 10px",
                borderRadius: "100px",
                background: colors.bg,
                color: colors.text,
                width: "fit-content",
                marginBottom: "12px",
              }}
            >
              {project.category}
            </span>
          )}

          {/* Title */}
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#0F172A",
              margin: "0 0 10px 0",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <div style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.65, marginBottom: "16px" }}>
            <p style={{ margin: 0 }} className={expanded ? "" : "line-clamp-3"}>
              {project.description}
            </p>
            {project.description?.length > 120 && (
              <button
                onClick={onToggle}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  marginTop: "4px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: colors.text,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                {expanded ? "↑ Read less" : "Read more →"}
              </button>
            )}
          </div>

          {/* Tech stack chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
            {project.techstack?.map((tech, index) => (
              <span
                key={index}
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "#F8FAFC",
                  color: "#475569",
                  border: "1px solid #E2E8EF",
                  letterSpacing: "0.01em",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", marginTop: "20px" }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "11px 0",
                  borderRadius: "10px",
                  border: `1.5px solid ${colors.bar}`,
                  background: hovered ? colors.bar : "transparent",
                  color: hovered ? "#FFFFFF" : colors.text,
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "background 0.25s ease, color 0.25s ease",
                  letterSpacing: "0.01em",
                }}
              >
                Visit Site
                <ExternalLink size={15} />
              </button>
            </a>
          )}
        </div>
      </div>

      {/* ── IMAGE MODAL ── */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "24px",
          }}
        >
          <button
            onClick={() => setZoomImage(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#EF4444")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
          >
            <X size={18} />
          </button>

          <img
            src={project.image_urls?.[currentImage]}
            alt={project.title}

            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              borderRadius: "12px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
    </>
  );
};

export default PortfolioCard;