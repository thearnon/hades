# HADES — ไกด์ระบบเกม & เคล็ดลับการเล่น

เว็บไกด์เกม Hades แบบ single-page สร้างด้วย Vite + Vanilla TypeScript
ไม่มี UI framework และแยก state, content, renderer และ asset helpers ออกจากกันเพื่อรองรับเนื้อหาที่จะเพิ่มในอนาคต

## โครงสร้างไฟล์

```
hades/
├── index.html               App shell และ Vite entry
├── src/
│   ├── main.ts              Render dispatch, routing และ events
│   ├── app/                 State, navigation และ asset helpers
│   ├── data/                เนื้อหาแยกตามโดเมน
│   ├── pages/               Renderer แยกตามกลุ่มหน้าจอ
│   ├── styles/              Tokens, primitives, page styles และ responsive
│   └── types/               Shared TypeScript types
├── public/assets/           Static assets และเอกสาร attribution
├── scripts/                 สคริปต์ดึง game assets สำหรับใช้งาน local
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## วิธีรัน

ติดตั้ง dependencies:

```bash
npm install
```

ดาวน์โหลดชุดภาพตัวละคร อาวุธ Boon Keepsake และไอเทมที่คัดไว้ (ไฟล์ภาพจริงถูก `.gitignore` เพื่อไม่แจกจ่าย game assets ปะปนกับโค้ด):

```powershell
./scripts/fetch-game-assets.ps1
```

เริ่ม development server:

```bash
npm run dev
```

ตรวจ type และสร้าง production bundle:

```bash
npm run typecheck
npm run build
npm run preview
```

> ฟอนต์ (Cinzel, Kanit, IBM Plex Sans Thai) โหลดจาก Google Fonts จึงต้องต่อเน็ตขณะเปิด

## ภาพประกอบ

ภาพ editorial คัดจากชุดสื่อทางการของ Supergiant Games ส่วน portrait และไอคอนในเกม resolve จาก Hades Wiki ผ่าน MediaWiki API โดยไม่ hotlink รายการต่อไฟล์อยู่ใน `public/assets/source-manifest.json` และรายละเอียดสิทธิ์/แหล่งที่มาอยู่ใน `public/assets/ASSET_SOURCES.md` กับ `public/assets/ATTRIBUTIONS.md` ส่วนไอคอน SVG ใน `public/assets/icons/` เป็นงานต้นฉบับที่สร้างสำหรับเว็บนี้โดยเฉพาะ

โปรเจกต์นี้เป็นไกด์แฟนเมดอย่างไม่เป็นทางการและไม่ได้รับการรับรองโดย Supergiant Games ตัว game assets ไม่อยู่ภายใต้ MIT license ของ repo ดู `DISCLAIMER.md` ก่อนนำไปเผยแพร่

## แก้อะไรตรงไหน

- **ภาพรวม ระบบหลัก Mindset** → `src/data/navigation.ts`
- **แผนรันมือใหม่** → `src/data/beginner.ts`
- **ตัวละครและความสัมพันธ์** → `src/data/characters.ts`
- **อาวุธ บิลด์ และ Boon** → `src/data/arsenal.ts`
- **แผนที่ การอัพเกรด และ Keepsake** → `src/data/world.ts`
- **HTML ของแต่ละหน้าจอ** → `src/pages/`
- **State, navigation และ asset helpers** → `src/app/`
- **Design tokens และโครงหน้าหลัก** → `src/styles/tokens.css`, `base.css`, `primitives.css`
- **สไตล์เฉพาะหน้า** → `src/styles/pages/`
- **Responsive layout** → `src/styles/responsive.css`
- **Event และ render dispatch** → `src/main.ts`

## หน้าจอในเว็บ

เริ่มต้นที่นี่ · ระบบหลัก · Mindset · แผนรันมือใหม่แบบโต้ตอบ · ตัวละคร (ข้อมูล 33 ตัว) · ผังความสัมพันธ์ · อาวุธทั้ง 6 · Boon เทพ · แผนที่ & บอส · การอัพเกรด · Keepsakes

หน้าตัวละครกรองตามครอบครัว ชาวยมโลก เทพ พันธมิตร และคู่ปรับได้ พร้อมเปิดรายละเอียดทั้งหมดหรือรายตัว ส่วนผังความสัมพันธ์เลือกตัวละครและกรองเส้นสายเลือด แม่บุญธรรม คู่รัก มิตร ผู้บังคับบัญชา และคู่ปรับได้ โดยมือถือจะเปลี่ยนเป็นรายการกลุ่มที่อ่านง่ายแทนผืนผังขนาดใหญ่

---
อ้างอิงเนื้อหาเกม Hades โดย Supergiant Games (2020)
