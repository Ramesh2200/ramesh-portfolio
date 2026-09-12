/**
 * Handles resume interaction by:
 * 1. Opening the resume PDF in a new browser tab for immediate viewing and reading.
 * 2. Simultaneously triggering a file download so the PDF is saved to the user's device.
 */
export function downloadResume(e, filename = "Ramesh_K_Resume.pdf", path = "/Ramesh_K_Resume.pdf") {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  // 1. Immediately open the PDF in a new browser tab for instant reading / viewing
  try {
    const newTab = window.open(path, "_blank", "noopener,noreferrer");
    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      // If popup was blocked, fallback by redirecting or standard anchor
      console.warn("Popup blocked, fallback to direct navigation");
    }
  } catch (err) {
    console.error("Window open error:", err);
  }

  // 2. Also trigger a direct download so the file is saved locally
  try {
    const link = document.createElement("a");
    link.href = path;
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 1200);
  } catch (err) {
    console.error("Direct download error:", err);
  }
}
