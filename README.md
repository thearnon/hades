# HADES — ไกด์ระบบเกม & เคล็ดลับการเล่น

เว็บไกด์เกม Hades แบบ single-page แยกไฟล์ HTML / CSS / JS พร้อมเปิดแก้ใน IDE ทันที
(ไม่มี build step, ไม่มี framework — เป็น vanilla ล้วน)

## โครงสร้างไฟล์

```
export/
├── index.html    โครงหน้า (sidebar + main) โหลด CSS/JS
├── styles.css    สไตล์ทั้งหมด (แยกเป็น class จาก inline style เดิม)
├── data.js       ข้อมูลเกมทั้งหมด (อาวุธ, เทพ, บอส, keepsake ฯลฯ) — แก้เนื้อหาที่นี่
└── app.js        ตรรกะ render + การกดสลับหน้า/อาวุธ/เทพ
```

## วิธีรัน

เป็นไฟล์ static ล้วน — เปิด `index.html` ในเบราว์เซอร์ได้เลย
หรือรันผ่าน local server เพื่อความชัวร์ (แนะนำเวลาแก้ใน IDE):

```bash
# ตัวเลือกใดก็ได้
npx serve export
python3 -m http.server 8000   # แล้วเปิด http://localhost:8000/export/
```

> ฟอนต์ (Cinzel, Kanit, IBM Plex Sans Thai) โหลดจาก Google Fonts จึงต้องต่อเน็ตขณะเปิด

## แก้อะไรตรงไหน

- **เพิ่ม/แก้เนื้อหา** (อาวุธ, บิลด์, เทพ, บอส, currency, keepsake) → `data.js`
- **ปรับหน้าตา/สี/สเปซ** → `styles.css` (ชุดสีอยู่ที่ `:root` ด้านบนสุด)
- **แก้โครงสร้างหน้า/การทำงาน** → ฟังก์ชัน `render*()` ใน `app.js`

## หน้าจอในเว็บ

เริ่มต้นที่นี่ · ระบบหลัก · Mindset · ตัวละคร · อาวุธทั้ง 6 · Boon เทพ · แผนที่ & บอส · การอัพเกรด · Keepsakes

---
อ้างอิงเนื้อหาเกม Hades โดย Supergiant Games (2020)
