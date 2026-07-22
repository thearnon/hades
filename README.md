# HADES — ไกด์ระบบเกม & เคล็ดลับการเล่น

เว็บไกด์เกม Hades แบบ single-page แยกไฟล์ HTML / CSS / JS พร้อมเปิดแก้ใน IDE ทันที
(ไม่มี build step, ไม่มี framework — เป็น vanilla ล้วน)

## โครงสร้างไฟล์

```
export/
├── index.html    โครงหน้า (sidebar + main) โหลด CSS/JS
├── styles.css    สไตล์ทั้งหมด (แยกเป็น class จาก inline style เดิม)
├── data.js       ข้อมูลเกมทั้งหมด (อาวุธ, เทพ, บอส, keepsake ฯลฯ) — แก้เนื้อหาที่นี่
├── app.js        ตรรกะ render + การกดสลับหน้า/อาวุธ/เทพ
├── scripts/      สคริปต์ดึง game assets สำหรับใช้งาน local
└── assets/       ภาพทางการ, source manifest, attribution และไอคอนโปรเจกต์
```

## วิธีรัน

ดาวน์โหลดชุดภาพตัวละคร อาวุธ Boon Keepsake และไอเทมที่คัดไว้ก่อน (ไฟล์ภาพจริงถูก `.gitignore` เพื่อไม่แจกจ่าย game assets ปะปนกับโค้ด):

```powershell
./scripts/fetch-game-assets.ps1
```

เป็นไฟล์ static ล้วน — เปิด `index.html` ในเบราว์เซอร์ได้เลย
หรือรันผ่าน local server เพื่อความชัวร์ (แนะนำเวลาแก้ใน IDE):

```bash
# ตัวเลือกใดก็ได้
npx serve export
python3 -m http.server 8000   # แล้วเปิด http://localhost:8000/export/
```

> ฟอนต์ (Cinzel, Kanit, IBM Plex Sans Thai) โหลดจาก Google Fonts จึงต้องต่อเน็ตขณะเปิด

## ภาพประกอบ

ภาพ editorial คัดจากชุดสื่อทางการของ Supergiant Games ส่วน portrait และไอคอนในเกม resolve จาก Hades Wiki ผ่าน MediaWiki API โดยไม่ hotlink รายการต่อไฟล์อยู่ใน `assets/source-manifest.json` และรายละเอียดสิทธิ์/แหล่งที่มาอยู่ใน `assets/ASSET_SOURCES.md` กับ `assets/ATTRIBUTIONS.md` ส่วนไอคอน SVG ใน `assets/icons/` เป็นงานต้นฉบับที่สร้างสำหรับเว็บนี้โดยเฉพาะ

โปรเจกต์นี้เป็นไกด์แฟนเมดอย่างไม่เป็นทางการและไม่ได้รับการรับรองโดย Supergiant Games ตัว game assets ไม่อยู่ภายใต้ MIT license ของ repo ดู `DISCLAIMER.md` ก่อนนำไปเผยแพร่

## แก้อะไรตรงไหน

- **เพิ่ม/แก้เนื้อหา** (อาวุธ, บิลด์, เทพ, บอส, currency, keepsake) → `data.js`
- **ปรับหน้าตา/สี/สเปซ** → `styles.css` (ชุดสีอยู่ที่ `:root` ด้านบนสุด)
- **แก้โครงสร้างหน้า/การทำงาน** → ฟังก์ชัน `render*()` ใน `app.js`

## หน้าจอในเว็บ

เริ่มต้นที่นี่ · ระบบหลัก · Mindset · ตัวละคร · อาวุธทั้ง 6 · Boon เทพ · แผนที่ & บอส · การอัพเกรด · Keepsakes

---
อ้างอิงเนื้อหาเกม Hades โดย Supergiant Games (2020)
