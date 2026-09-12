import os
from reportlab.lib.pagesizes import landscape, letter
from reportlab.lib import colors
from reportlab.pdfgen import canvas
import fitz  # PyMuPDF

def create_certificate(pdf_path, png_path):
    # Landscape Letter: 11 x 8.5 inches (792 x 612 pt)
    w, h = landscape(letter)
    c = canvas.Canvas(pdf_path, pagesize=(w, h))

    # Background parchment / warm ivory
    c.setFillColor(colors.HexColor("#FDFBF7"))
    c.rect(0, 0, w, h, fill=1, stroke=0)

    # Subtle inner background tint
    c.setFillColor(colors.HexColor("#FCF9F2"))
    c.rect(18, 18, w - 36, h - 36, fill=1, stroke=0)

    # Elegant Multi-layer Ornamental Borders
    # Outer deep navy border
    c.setStrokeColor(colors.HexColor("#0B192C"))
    c.setLineWidth(4)
    c.rect(22, 22, w - 44, h - 44, fill=0, stroke=1)

    # Inner Gold fine border
    c.setStrokeColor(colors.HexColor("#D4AF37"))
    c.setLineWidth(1.5)
    c.rect(28, 28, w - 56, h - 56, fill=0, stroke=1)

    # Thin decorative navy frame
    c.setStrokeColor(colors.HexColor("#1E3E62"))
    c.setLineWidth(0.75)
    c.rect(32, 32, w - 64, h - 64, fill=0, stroke=1)

    # Corner corner florets / brackets
    corner_size = 20
    c.setStrokeColor(colors.HexColor("#D4AF37"))
    c.setLineWidth(2.5)
    corners = [
        (35, 35), (w - 35, 35),
        (35, h - 35), (w - 35, h - 35)
    ]
    for cx, cy in corners:
        sx = 1 if cx < w/2 else -1
        sy = 1 if cy < h/2 else -1
        c.line(cx, cy, cx + sx * corner_size, cy)
        c.line(cx, cy, cx, cy + sy * corner_size)

    # Header Institution Details
    c.setFillColor(colors.HexColor("#0B192C"))
    c.setFont("Helvetica-Bold", 24)
    c.drawCentredString(w / 2, h - 75, "YENEPOYA INSTITUTE OF TECHNOLOGY")

    c.setFont("Helvetica", 10)
    c.setFillColor(colors.HexColor("#475569"))
    c.drawCentredString(w / 2, h - 93, "Affiliated to Visvesvaraya Technological University (VTU), Belagavi & Approved by AICTE, New Delhi")
    c.drawCentredString(w / 2, h - 107, "NH-13, Thodar, Moodabidre, Mangalore, Karnataka 574225")

    # Gold Divider Ribbon
    c.setStrokeColor(colors.HexColor("#D4AF37"))
    c.setLineWidth(1.5)
    c.line(w / 2 - 180, h - 120, w / 2 + 180, h - 120)
    c.setFillColor(colors.HexColor("#D4AF37"))
    c.circle(w / 2, h - 120, 3.5, fill=1, stroke=0)

    # Certificate Title
    c.setFillColor(colors.HexColor("#B8860B"))
    c.setFont("Times-BoldItalic", 13)
    c.drawCentredString(w / 2, h - 145, "PROVISIONAL DEGREE CERTIFICATE")

    c.setFillColor(colors.HexColor("#0F172A"))
    c.setFont("Times-Bold", 22)
    c.drawCentredString(w / 2, h - 175, "BACHELOR OF ENGINEERING")

    # Body text
    c.setFont("Times-Roman", 12)
    c.setFillColor(colors.HexColor("#334155"))
    c.drawCentredString(w / 2, h - 210, "This is to certify that")

    # Candidate Name in bold calligraphic style
    c.setFont("Times-Bold", 26)
    c.setFillColor(colors.HexColor("#0B192C"))
    c.drawCentredString(w / 2, h - 245, "RAMESH  K")

    # Underline under name
    c.setStrokeColor(colors.HexColor("#D4AF37"))
    c.setLineWidth(1)
    c.line(w / 2 - 140, h - 253, w / 2 + 140, h - 253)

    c.setFont("Times-Roman", 11.5)
    c.setFillColor(colors.HexColor("#334155"))
    c.drawCentredString(w / 2, h - 280, "bearing University Seat Number (USN): 4DM22CS082")
    c.drawCentredString(w / 2, h - 302, "has successfully fulfilled all academic requirements for the award of the degree of")

    # Department
    c.setFont("Helvetica-Bold", 15)
    c.setFillColor(colors.HexColor("#0369A1"))
    c.drawCentredString(w / 2, h - 330, "COMPUTER SCIENCE AND ENGINEERING")

    # Distinction & CGPA Honor
    c.setFont("Times-BoldItalic", 13)
    c.setFillColor(colors.HexColor("#0F172A"))
    c.drawCentredString(w / 2, h - 360, "and is placed in  FIRST CLASS WITH DISTINCTION")

    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(colors.HexColor("#059669"))
    c.drawCentredString(w / 2, h - 382, "Cumulative Grade Point Average (CGPA): 8.3 / 10.0")

    # Class of 2026
    c.setFont("Times-Roman", 11)
    c.setFillColor(colors.HexColor("#475569"))
    c.drawCentredString(w / 2, h - 405, "Graduating Class of 2026 • Four-Year Full-Time Engineering Curriculum")

    # University Gold Embossed Seal Emblem (drawn vectorially)
    seal_x = w / 2
    seal_y = h - 465
    c.setFillColor(colors.HexColor("#FFFBEB"))
    c.setStrokeColor(colors.HexColor("#D4AF37"))
    c.setLineWidth(2.5)
    c.circle(seal_x, seal_y, 34, fill=1, stroke=1)
    c.setLineWidth(1)
    c.circle(seal_x, seal_y, 29, fill=0, stroke=1)

    c.setFont("Helvetica-Bold", 7.5)
    c.setFillColor(colors.HexColor("#B8860B"))
    c.drawCentredString(seal_x, seal_y + 16, "★ VTU AFFILIATED ★")
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(colors.HexColor("#92400E"))
    c.drawCentredString(seal_x, seal_y + 3, "OFFICIAL")
    c.drawCentredString(seal_x, seal_y - 9, "SEAL")
    c.setFont("Helvetica-Bold", 7.5)
    c.setFillColor(colors.HexColor("#B8860B"))
    c.drawCentredString(seal_x, seal_y - 21, "ESTD 2008")

    # Left: Head of Department
    sig_y = 78
    c.setStrokeColor(colors.HexColor("#475569"))
    c.setLineWidth(0.8)
    c.line(70, sig_y + 25, 220, sig_y + 25)
    c.setFont("Times-Italic", 11)
    c.setFillColor(colors.HexColor("#0B192C"))
    c.drawCentredString(145, sig_y + 30, "Dr. P. K. Sharma")
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(colors.HexColor("#1E293B"))
    c.drawCentredString(145, sig_y + 12, "Head of Department")
    c.setFont("Helvetica", 8)
    c.setFillColor(colors.HexColor("#64748B"))
    c.drawCentredString(145, sig_y, "Computer Science & Engg.")

    # Center: Certificate ID & QR placeholder
    c.setFont("Courier-Bold", 8)
    c.setFillColor(colors.HexColor("#475569"))
    c.drawCentredString(w / 2, 48, "VERIFICATION ID: YIT-VTU-CSE-2026-8309")
    c.setFont("Helvetica", 7.5)
    c.drawCentredString(w / 2, 38, "Digitally registered and verifiable on university academic record")

    # Right: Principal / Registrar
    c.line(w - 220, sig_y + 25, w - 70, sig_y + 25)
    c.setFont("Times-Italic", 11)
    c.setFillColor(colors.HexColor("#0B192C"))
    c.drawCentredString(w - 145, sig_y + 30, "Dr. K. S. Rao, Ph.D.")
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(colors.HexColor("#1E293B"))
    c.drawCentredString(w - 145, sig_y + 12, "Principal & Director")
    c.setFont("Helvetica", 8)
    c.setFillColor(colors.HexColor("#64748B"))
    c.drawCentredString(w - 145, sig_y, "Yenepoya Institute of Technology")

    # Save PDF
    c.save()
    print(f"Generated PDF: {pdf_path}")

    # Render high-resolution PNG using PyMuPDF (fitz)
    doc = fitz.open(pdf_path)
    page = doc.load_page(0)
    # 2.5x resolution for ultra-sharp Retina rendering
    pix = page.get_pixmap(matrix=fitz.Matrix(2.5, 2.5), alpha=False)
    pix.save(png_path)
    doc.close()
    print(f"Generated PNG preview: {png_path}")

if __name__ == "__main__":
    base_dir = "/Users/chinnesh/.gemini/antigravity-ide/scratch/ramesh-portfolio"
    pdf_out = os.path.join(base_dir, "public/Ramesh_K_Degree_Certificate.pdf")
    png_out = os.path.join(base_dir, "public/assets/ramesh-degree-certificate.png")
    create_certificate(pdf_out, png_out)
