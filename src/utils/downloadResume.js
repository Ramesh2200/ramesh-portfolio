/**
 * Utility to reliably trigger resume PDF downloads across all browsers,
 * preventing browsers from merely previewing inline.
 */
export async function downloadResume(e, filename = "Ramesh_K_Resume.pdf", path = "/Ramesh_K_Resume.pdf") {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  try {
    const response = await fetch(path, { method: "GET" });
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.status}`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);
  } catch (err) {
    console.error("Direct blob download error, falling back to window open:", err);
    // Fallback: open in new tab with download attribute
    const fallbackLink = document.createElement("a");
    fallbackLink.href = path;
    fallbackLink.target = "_blank";
    fallbackLink.rel = "noopener noreferrer";
    fallbackLink.download = filename;
    fallbackLink.click();
  }
}
