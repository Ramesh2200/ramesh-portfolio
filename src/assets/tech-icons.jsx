import React from "react";

export function TechIcon({ name, size = 28, className = "" }) {
  const key = (name || "").toLowerCase().trim();

  // Color & SVG definitions matching authentic official brand representations
  switch (key) {
    case "java":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path
            d="M13.2 24.8c3.2.4 6.8-.2 9.5-1.2-1.3.8-3.4 1.4-5.6 1.6-4.5.3-8.8-.4-3.9-.4zm-1.8 2.6c3.8.3 8.3-.1 11.7-1.4-1.6 1-4.2 1.7-6.9 1.9-5.6.4-10.9-.5-4.8-.5z"
            fill="#EA2D2E"
          />
          <path
            d="M20.9 21.6c4.1-2.1 2.2-4.1 2.2-4.1-3.6 1.3-7.1 2.4-10.7 3.3 0 0-2.4.6-3.8 1.4-1.7 1-.7 1.8 1.5 1.7 4.1-.2 7.7-1.1 10.8-2.3z"
            fill="#5382A1"
          />
          <path
            d="M19.4 14.7c1.7 2 0 3.8 0 3.8-3.5 1.4-6.9 2.5-10.4 3.4 0 0-2 .6-3.2 1.4-1.4 1-.6 1.7 1.2 1.6 3.4-.2 6.5-1 9.1-2.1 3.5-1.5 5.5-3.8 3.3-8.1z"
            fill="#007396"
          />
          <path
            d="M23.1 18.2c.8-.9 1.3-2 1.4-3.1.2-2.1-1.2-3.4-3.1-3.9.7-.7 1.3-1.6 1.5-2.7.4-2.1-.9-4-3.6-4.5 0 0 .5.3.7.8.6 1.3-.2 2.6-1.5 3-2.1.6-3.8 2.2-4.1 4.5 0 0 1.2-.6 2.5-.5 2.1.2 3.6 1.7 3.3 3.8-.2 1-.8 1.9-1.6 2.5 1.7.1 3.3-.2 4.4-.4z"
            fill="#EA2D2E"
          />
          <path
            d="M9.9 29.8c3.9.2 8.4-.1 12.1-1.5-1.9 1.1-5.1 1.8-8.2 2-5.4.3-10.1-.5-3.9-.5z"
            fill="#5382A1"
          />
        </svg>
      );

    case "python":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path
            d="M15.9 3c-6.8 0-6.4 2.9-6.4 2.9l.01 3.1h6.5v.9H6.8S3 9.4 3 16.3c0 6.8 3.3 6.6 3.3 6.6h2v-2.8c0-3.2 2.7-3.2 2.7-3.2h6.4c2.6 0 2.6-2.5 2.6-2.5V8.1s.4-5.1-4.1-5.1zm-3.5 1.8c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1z"
            fill="#387EB8"
          />
          <path
            d="M16.1 29c6.8 0 6.4-2.9 6.4-2.9l-.01-3.1h-6.5v-.9h9.2s3.8.5 3.8-6.4c0-6.8-3.3-6.6-3.3-6.6h-2v2.8c0 3.2-2.7 3.2-2.7 3.2h-6.4c-2.6 0-2.6 2.5-2.6 2.5v6.3s-.4 5.1 4.1 5.1zm3.5-1.8c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
            fill="#FFE052"
          />
        </svg>
      );

    case "javascript":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#F7DF1E" />
          <path
            d="M18.8 24.3c.7.4 1.7.7 2.7.7 1.5 0 2.4-.7 2.4-1.8 0-1-.6-1.5-2.1-2.1l-.7-.3c-2.1-.8-3.5-2-3.5-4.1 0-2.3 1.8-4 4.6-4 1.4 0 2.4.3 3 .7l-.8 2.2c-.5-.3-1.3-.6-2.2-.6-1.3 0-2 .6-2 1.5 0 .9.6 1.4 2.1 2l.7.3c2.4.9 3.6 2.1 3.6 4.3 0 2.5-1.9 4.3-5.2 4.3-1.6 0-2.9-.4-3.7-.8l.7-2.4zm-9 0c.5.3 1.2.5 2 .5 1.2 0 1.9-.5 1.9-1.8v-10h2.8v10.1c0 2.8-1.7 4.1-4.4 4.1-1.2 0-2.2-.3-2.8-.7l.5-2.2z"
            fill="#000000"
          />
        </svg>
      );

    case "react":
    case "react.js":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.6" />
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 16 16)" />
          <circle cx="16" cy="16" r="2.4" fill="#61DAFB" />
        </svg>
      );

    case "html5":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M5.5 3.5l2.2 24.8 8.3 2.3 8.3-2.3 2.2-24.8H5.5z" fill="#E44D26" />
          <path d="M16 5.5v22.8l6.3-1.7 1.8-21.1H16z" fill="#F16529" />
          <path
            d="M16 10.7h-5.4l.4 4.2h5V12h-.01zm0 7.8l-3.3-.9-.2-2.4H9.6l.4 4.5 6 1.7v-2.9zm0-7.8v2.1h4.8l-.5 4.9-4.3 1.2v2.2l6-1.7.9-8.7H16z"
            fill="#EBEBEB"
          />
        </svg>
      );

    case "css3":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M5.5 3.5l2.2 24.8 8.3 2.3 8.3-2.3 2.2-24.8H5.5z" fill="#1572B6" />
          <path d="M16 5.5v22.8l6.3-1.7 1.8-21.1H16z" fill="#33A9DC" />
          <path
            d="M16 10.7h-5.4l.4 4.2h5V12h-.01zm0 7.8l-3.3-.9-.2-2.4H9.6l.4 4.5 6 1.7v-2.9zm0-7.8v2.1h4.8l-.5 4.9-4.3 1.2v2.2l6-1.7.9-8.7H16z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "springboot":
    case "spring boot":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path
            d="M16 2.5L4 9.4v13.2l12 6.9 12-6.9V9.4L16 2.5z"
            fill="#6DB33F"
            stroke="#529B28"
            strokeWidth="1.2"
          />
          <path
            d="M16 6.8a9.2 9.2 0 00-9.2 9.2c0 4.1 2.7 7.5 6.5 8.7l2.7-8.7-2.2-.6.7-2.3 2.2.6 1.4-4.5 2.3.7-1.4 4.5 2.5.8-.7 2.3-2.5-.8-2.6 8.5c.2 0 .4.1.6.1a9.2 9.2 0 000-18.4z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "hibernate":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#59666C" />
          <path
            d="M9 7.5h3.8v6.2h6.4V7.5H23v17h-3.8v-6.6h-6.4v6.6H9V7.5z"
            fill="#BCAE79"
          />
          <circle cx="21" cy="9.5" r="1.8" fill="#C98B3E" />
        </svg>
      );

    case "mysql":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#005C84" />
          <path
            d="M7 21c3.5-6.5 8-8 12.5-6.5 2 .7 4.5 2 5.5.5-1.5 5.5-7 7.5-11 6-2-.8-4.5-1.2-7 0z"
            fill="#F29111"
          />
          <circle cx="21" cy="14" r="1.2" fill="#FFFFFF" />
          <path
            d="M12 18c3-4 7.5-4.5 10-2-1 2-4 3-6.5 2.5-.8-.2-1.8-.4-3.5-.5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "postgresql":
    case "postgres":
    case "postreg sql":
    case "postgre sql":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#336791" />
          <path
            d="M16 6.5c-3.2 0-5.8 2.2-6.5 5.2-.4.1-.9.3-1.3.5-1.5.8-2.2 2.3-2.2 4 0 2.2 1.4 3.9 3.5 4.3v1c0 1.1.9 2 2 2h2v-3.5h-1c-.8 0-1.5-.7-1.5-1.5v-.5c.3.1.6.1 1 .1 1.2 0 2.3-.5 3-1.4.7.9 1.8 1.4 3 1.4.4 0 .7 0 1-.1v.5c0 .8-.7 1.5-1.5 1.5h-1V23.5h2c1.1 0 2-.9 2-2v-1c2.1-.4 3.5-2.1 3.5-4.3 0-1.7-.7-3.2-2.2-4-.4-.2-.9-.4-1.3-.5-.7-3-3.3-5.2-6.5-5.2zm-2.8 6.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm5.6 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "sqlite":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#003B57" />
          <path
            d="M8 10.5c0-2 3.6-3.5 8-3.5s8 1.5 8 3.5-3.6 3.5-8 3.5-8-1.5-8-3.5z"
            fill="#00ADEF"
          />
          <path
            d="M24 13.5c0 1.9-3.6 3.5-8 3.5s-8-1.6-8-3.5v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-4z"
            fill="#5FD2F9"
          />
          <path
            d="M24 19.5c0 1.9-3.6 3.5-8 3.5s-8-1.6-8-3.5v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-4z"
            fill="#007ACC"
          />
        </svg>
      );

    case "git":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path
            d="M29.5 13.9L18.1 2.5c-.7-.7-1.8-.7-2.5 0L12.5 5.6l3.2 3.2c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3.1 3.1c.8-.3 1.7-.1 2.3.5.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.6-.6-.8-1.6-.5-2.4l-2.9-2.9v6.5c.2.2.4.4.5.7.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.8-.8-.8-2.2 0-3 .2-.3.5-.5.8-.6v-6.7c-.3-.1-.6-.3-.8-.6-.6-.6-.8-1.6-.5-2.4L11.2 7.7 2.5 16.4c-.7.7-.7 1.8 0 2.5l11.4 11.4c.7.7 1.8.7 2.5 0l13.1-13.9c.7-.7.7-1.8 0-2.5z"
            fill="#F05032"
          />
        </svg>
      );

    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 2C8.3 2 2 8.3 2 16c0 6.2 4 11.4 9.5 13.3.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.5-2.1-1.5-2.1-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.5 2.2 1.5 1.3 2.1 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.9 1.5 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.7-1.9 3.9-1.5 3.9-1.5.7 1.9.2 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4.9 1.3.9 2.6v3.8c0 .4.3.8 1 .7C26 27.4 30 22.2 30 16c0-7.7-6.3-14-14-14z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#0A66C2" />
          <path
            d="M8.5 12h3.5v11.5H8.5V12zm1.8-5.8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM14.5 12h3.3v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.2h-3.5v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-3.5V12z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "vscode":
    case "vs code":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path
            d="M23.5 2.5l-12.7 9.8-6.1-4.7L2 9.4l5.3 6.6L2 22.6l2.7 1.8 6.1-4.7L23.5 29.5 30 26.4V5.6L23.5 2.5zM24 22.4l-7.8-6.4 7.8-6.4v12.8z"
            fill="#007ACC"
          />
          <path d="M23.5 2.5L10.8 12.3l2.8 3.7 9.9-6.6V2.5z" fill="#1F9CF0" />
        </svg>
      );

    case "eclipse":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <circle cx="16" cy="16" r="14" fill="#2C2255" />
          <path
            d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12c2.4 0 4.6-.7 6.5-1.9-4.8-1.2-8.5-5.6-8.5-10.9 0-5.3 3.7-9.7 8.5-10.9C20.6 4.7 18.4 4 16 4z"
            fill="#F38B00"
          />
          <path d="M12 15h14v2H12zM12 19h12v2H12zM14 11h10v2H14z" fill="#FFFFFF" opacity="0.6" />
        </svg>
      );

    case "postman":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <circle cx="16" cy="16" r="14" fill="#FF6C37" />
          <path
            d="M22.5 15.5c-.3-.8-1-1.3-1.8-1.5l-4-1.2v-2.3l2.2-.6c.4-.1.7-.5.7-.9 0-.5-.4-1-.9-1-.2 0-.4.1-.6.2l-3.3 1.2c-.3.1-.5.4-.5.7v3.9l-3.8-1.1c-.5-.1-1 .1-1.2.6-.3.5-.1 1 .4 1.2l4.6 1.4v2.7l-2.4 1.8c-.4.3-.5.8-.3 1.2.2.4.7.6 1.1.4l2.6-1.5c.3-.2.5-.5.5-.8v-3.8l4 1.2c.2.1.4.1.6.1.6 0 1.2-.4 1.4-1 .2-.5.1-1-.2-1.4z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "sql":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#00758F" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            SQL
          </text>
        </svg>
      );

    case "servlets":
    case "jsp":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#1E293B" stroke="#00ff87" strokeWidth="1.2" />
          <path d="M9 11h14v3H9zm0 5h14v3H9zm0 5h8v3H9z" fill="#00ff87" />
        </svg>
      );

    case "jdbc":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.2" />
          <ellipse cx="16" cy="10" rx="7" ry="3" fill="#38BDF8" />
          <path d="M9 10v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="#38BDF8" strokeWidth="1.4" fill="none" />
          <path d="M9 16v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="#38BDF8" strokeWidth="1.4" fill="none" />
        </svg>
      );

    case "oop":
    case "object-oriented programming (oop)":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <circle cx="11" cy="11" r="5" stroke="#A855F7" strokeWidth="1.8" />
          <circle cx="21" cy="11" r="5" stroke="#A855F7" strokeWidth="1.8" />
          <circle cx="16" cy="21" r="5" stroke="#00FF87" strokeWidth="1.8" />
          <path d="M11 11l5 10 5-10" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      );

    case "mvc":
    case "mvc architecture":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect x="5" y="7" width="9" height="7" rx="2" stroke="#38BDF8" strokeWidth="1.5" />
          <rect x="18" y="7" width="9" height="7" rx="2" stroke="#A855F7" strokeWidth="1.5" />
          <rect x="11.5" y="18" width="9" height="7" rx="2" stroke="#00FF87" strokeWidth="1.5" />
          <path d="M9.5 14v4h3.5M22.5 14v4h-3.5" stroke="#64748B" strokeWidth="1.2" />
        </svg>
      );

    case "rest":
    case "rest apis":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <circle cx="8" cy="16" r="3.5" fill="#10B981" />
          <circle cx="24" cy="16" r="3.5" fill="#3B82F6" />
          <path d="M12 14h8M12 18h8" stroke="#F1F5F9" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17 12l3 2-3 2M15 16l-3 2 3 2" stroke="#F1F5F9" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case "flask":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#1E293B" />
          <path
            d="M19 7h-2V5h1a1 1 0 000-2h-4a1 1 0 000 2h1v2h-2a2 2 0 00-2 2v2.1a9 9 0 00-3.9 7.4c0 5 4 9 9 9s9-4 9-9a9 9 0 00-3.9-7.4V9a2 2 0 00-2-2zm-3 18c-3.9 0-7-3.1-7-7 0-1.8.7-3.5 1.9-4.8l1.1 1.1c.4.4 1 .4 1.4 0s.4-1 0-1.4l-1.1-1.1c1-.5 2.2-.8 3.7-.8 1.5 0 2.7.3 3.7.8l-1.1 1.1c-.4.4-.4 1 0 1.4s1 .4 1.4 0l1.1-1.1c1.2 1.3 1.9 3 1.9 4.8 0 3.9-3.1 7-7 7z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "django":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#092E20" />
          <text x="16" y="20" fill="#44B78B" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
            dj
          </text>
        </svg>
      );

    case "mongodb":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#023430" />
          <path
            d="M16 4.5s-4.5 4.5-4.5 10.5c0 4.2 2.7 7.7 4.5 9 1.8-1.3 4.5-4.8 4.5-9 0-6-4.5-10.5-4.5-10.5zm.5 18.5v-7.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V23c-1.3-1-3-3.8-3-7 0-4.5 3-7.8 3.5-8.5.5.7 3.5 4 3.5 8.5 0 3.2-1.7 6-3 7z"
            fill="#13AA52"
          />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect x="4" y="4" width="24" height="24" rx="6" stroke="#00FF87" strokeWidth="1.5" />
          <path d="M11 16h10M16 11v10" stroke="#00FF87" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}
