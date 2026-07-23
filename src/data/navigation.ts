import type { SectionId } from '../types/content';

export const SECTIONS: ReadonlyArray<{ id: SectionId; label: string; iconPath: string }> = [
  { id: 'overview', label: 'เริ่มต้นที่นี่', iconPath: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M15.5 8.5 13 13.5 8.5 15.5 11 10.5z' },
  { id: 'core', label: 'ระบบหลัก', iconPath: 'M21 12a9 9 0 1 1-2.64-6.36 M21 4v4h-4' },
  { id: 'mindset', label: 'Mindset การเล่น', iconPath: 'M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0 0 12 2z' },
  { id: 'beginner', label: 'แผนรันมือใหม่', iconPath: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M16 8l-2.5 5.5L8 16l2.5-5.5z' },
  { id: 'chars', label: 'ตัวละคร', iconPath: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75' },
  { id: 'relations', label: 'ผังความสัมพันธ์', iconPath: 'M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M4 23v-2a4 4 0 0 1 4-4 M16 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M20 23v-2a4 4 0 0 0-4-4 M12 12v4 M8 12h8' },
  { id: 'weapons', label: 'อาวุธทั้ง 6', iconPath: 'M14.5 17.5 3 6V3h3l11.5 11.5 M13 19l6-6 M16 16l4 4 M19 21l2-2' },
  { id: 'boons', label: 'Boon เทพโอลิมปัส', iconPath: 'M13 2 3 14h9l-1 8 10-12h-9z' },
  { id: 'biomes', label: 'แผนที่ & บอส', iconPath: 'M9 3 3 6v15l6-3 6 3 6-3V3l-6 3z M9 3v15 M15 6v15' },
  { id: 'upgrades', label: 'การอัพเกรด', iconPath: 'M17 11l-5-5-5 5 M17 18l-5-5-5 5' },
  { id: 'keepsakes', label: 'Keepsakes', iconPath: 'M6 3h12l3 6-9 12L3 9z M3 9h18 M8 9l4-6 4 6 M12 21 8 9 M12 21l4-12' },
];

export const OVERVIEW_FEATURES = [
  { label: 'ROGUELIKE', color: '#ff7a3d', desc: 'ห้อง บอส และรางวัลสุ่มใหม่ทุกครั้ง ไม่มีรันไหนเหมือนกัน' },
  { label: 'ESCAPE', color: '#e7c26a', desc: 'เป้าหมาย: ทะลุ 4 ด่านจากยมโลกขึ้นสู่พื้นโลก' },
  { label: 'DEATH = PROGRESS', color: '#35cdbd', desc: 'ตายไม่ใช่เกมโอเวอร์ แต่เป็นวงจรของเกมเอง' },
];

export const RUN_LOOP = [
  { no: '01', color: '#ff7a3d', title: 'เริ่มรัน', desc: 'เลือกอาวุธ + keepsake แล้วออกจากบ้าน' },
  { no: '02', color: '#e7c26a', title: 'ผ่านห้อง', desc: 'เคลียร์ศัตรู เลือกประตู = เลือกรางวัล/boon' },
  { no: '03', color: '#69c46a', title: 'สู้บอส', desc: 'จบด่านด้วยบอสประจำโซน' },
  { no: '04', color: '#e0453a', title: 'ตาย / สำเร็จ', desc: 'กลับบ้านผ่านแม่น้ำ Styx เก็บค่าเงินติดตัว' },
  { no: '05', color: '#35cdbd', title: 'อัพเกรด', desc: 'ใช้ Darkness/Titan Blood อัพถาวร แล้วเริ่มใหม่' },
];

export const CURRENCIES = [
  { name: 'Darkness', use: 'อัพเกรด Mirror of Night (ถาวร)', color: '#c3b8ff', bg: '#302b52' },
  { name: 'Chthonic Keys', use: 'ปลดล็อกอาวุธใหม่ & ช่องใน Mirror', color: '#e0cfa0', bg: '#40351f' },
  { name: 'Gemstones', use: 'จ้าง Contractor ปรับปรุงบ้าน/ปลดฟีเจอร์', color: '#ff918a', bg: '#48251f' },
  { name: 'Nectar', use: 'มอบให้ NPC/เทพ → ได้ Keepsake', color: '#f0cf7a', bg: '#44391d' },
  { name: 'Ambrosia', use: 'ของขวัญขั้นสูง กระชับสัมพันธ์/เพื่อนร่วมรบ', color: '#f8a5cd', bg: '#482838' },
  { name: 'Titan Blood', use: 'อัพเกรด Aspect ของอาวุธ', color: '#d9a0ed', bg: '#3a234f' },
  { name: 'Diamonds', use: 'งานปรับปรุงบ้านชิ้นใหญ่', color: '#9ce8f4', bg: '#20434b' },
  { name: 'Obols', use: 'ใช้ในรัน ซื้อของร้าน Charon (หายเมื่อจบรัน)', color: '#f0cf7a', bg: '#44391d' },
];

export const MINDSET_TIPS = [
  { no: '01', title: 'ตายคือส่วนหนึ่งของเกม', body: 'อย่ามองว่าแพ้ ทุกครั้งที่ตายคุณได้ค่าเงินถาวร บทสนทนาใหม่ และเนื้อเรื่องที่เดินหน้า มันคือ "การเล่น" ไม่ใช่ "การจบเกม"' },
  { no: '02', title: 'อย่ารีบเก่ง ค่อย ๆ ปลดล็อก', body: 'ช่วงแรกโฟกัสอัพ Mirror และปลดอาวุธ ยิ่งอัพเยอะ รันหลัง ๆ ยิ่งไปได้ไกลเอง ไม่ต้องกดดันว่าต้องผ่านไว' },
  { no: '03', title: 'ลองอาวุธให้ครบทุกอัน', body: 'อย่าติดแค่อันเดียว อาวุธที่มีออร่า Dark Thirst ให้ Darkness เพิ่ม 20% และการลองหลายแบบช่วยให้เจอสไตล์ที่ใช่ของตัวเอง' },
  { no: '04', title: 'วางบิลด์ตาม boon ที่ได้ อย่าฝืน', body: 'ไม่ต้องยึดแผนตายตัว ได้ boon สายไหนแรงก็เดินตามนั้น อ่าน boon ก่อนหยิบเสมอ แล้วโฟกัสไม่กี่เทพ' },
  { no: '05', title: 'กลับบ้านคุยกับทุกคน', body: 'NPC ในบ้านมีบทใหม่แทบทุกครั้ง เนื้อเรื่องเดิน ได้ของขวัญ และปลดล็อกฟีเจอร์ผ่านบทสนทนา' },
  { no: '06', title: 'อย่าหัวร้อน สนุกกับกระบวนการ', body: 'เกมนี้ยิ่งเล่นยิ่งเก่งเองตามธรรมชาติ Heat/Pact ค่อยเพิ่มความยากทีหลังเมื่อพร้อม ไม่มีใครกดดันคุณ' },
];
