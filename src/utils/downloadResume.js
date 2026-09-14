/**
 * Reliable resume download handler:
 * Fetches the PDF blob and triggers a clean, direct file download to disk.
 * Does NOT open any unnecessary preview or modal.
 */
export function downloadResume(e, filename = "Ramesh_K_Resume.pdf", path = "/Ramesh_K_Resume.pdf") {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  // Pure direct download only - no modal or preview
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
