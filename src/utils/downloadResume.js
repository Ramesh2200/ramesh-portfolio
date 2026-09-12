/**
 * Reliable resume handler:
 * 1. Opens the interactive in-page Resume Modal immediately so the user sees the PDF on-screen.
 * 2. Fetches the PDF blob and triggers a clean, unblocked file download to disk.
 */
export function downloadResume(e, filename = "Ramesh_K_Resume.pdf", path = "/Ramesh_K_Resume.pdf") {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  // 1. Immediately open the on-screen Resume Modal viewer
  try {
    window.dispatchEvent(
      new CustomEvent("open-resume-modal", {
        detail: { filename, path }
      })
    );
  } catch (err) {
    console.warn("Event dispatch error:", err);
  }

  // 2. Fetch blob and trigger direct download
  try {
    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
          document.body.removeChild(a);
        }, 1000);
      })
      .catch((err) => {
        console.warn("Blob fetch download error, using anchor fallback:", err);
        const a = document.createElement("a");
        a.href = path;
        a.download = filename;
        a.target = "_blank";
        a.click();
      });
  } catch (err) {
    console.error("Download error:", err);
  }
}
