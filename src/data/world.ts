export const BIOMES = [
  { no: '01', name: 'Tartarus', latin: 'The Dungeon of the Dead', color: '#d16a4a', vibe: 'คุกใต้สุดของยมโลก โทนแดง-ส้ม ด่านแรกที่ปูพื้นฐาน ศัตรูไม่ซับซ้อน', enemies: 'วิญญาณทรมาน, นักธนู, ระเบิด', boss: 'Megaera', bossTip: 'หนึ่งในสามพี่น้อง Fury ระวังท่าแส้กวาดและโซนบนพื้น หลบให้ดีแล้วเข้าตี' },
  { no: '02', name: 'Asphodel', latin: 'The Fields of Fire', color: '#e0902e', vibe: 'ทุ่งลาวาเดือด มีสะพานคั่นบ่อลาวา การวางตำแหน่งสำคัญมาก', enemies: 'กะโหลกไฟ, ตัวระเบิด, ศัตรูโล่', boss: 'Bone Hydra', bossTip: 'ไฮดร้าหลายหัวที่งอกใหม่ได้ โฟกัสหัวหลักและหลบลำแสง/พ่นไฟให้ดี' },
  { no: '03', name: 'Elysium', latin: 'The Vale of Heroes', color: '#9bbf5a', vibe: 'สรวงสวรรค์ของวีรบุรุษ สวยแต่ศัตรูอึดและถือโล่ ต้องเล่นเป็น', enemies: 'วิญญาณวีรบุรุษ, ศัตรูโล่/หอก', boss: 'Theseus & Asterius', bossTip: 'สู้สองต่อหนึ่ง! Asterius (มิโนทอร์) พุ่งชนแรง ส่วน Theseus เรียก boon เทพ จัดการมิโนทอร์ก่อนมักง่ายกว่า' },
  { no: '04', name: 'Temple of Styx', latin: 'The Final Passage', color: '#4bb3a6', vibe: 'ด่านสุดท้าย เขาวงกตให้เลือกประตูหาทางออก เก็บของก่อนเจอบอสใหญ่', enemies: 'ซาเทียร์หนวด, ผู้พิทักษ์มินิบอส', boss: 'Hades', bossTip: 'พ่อของคุณเอง! มี 2 เฟส เก็บเลือด/ของให้พร้อมก่อนเข้า ชนะ = หนีสำเร็จ แล้วเนื้อเรื่องจะไปต่อ' },
];

export const MAP_EXTRAS = [
  { name: "Charon's Shop", desc: 'โผล่ทุกโซน ใช้ทอง (Obols) ซื้อ boon/ของ/เลือด' },
  { name: 'Chaos Gate', desc: 'รับคำสาปสั้น ๆ แลกบัฟถาวรทั้งรัน' },
  { name: 'Infernal Gate', desc: 'ห้องท้าทายมีดาเมจกดดัน แลกรางวัลก้อนใหญ่' },
  { name: 'Well of Charon', desc: 'ซื้อตอนนี้ รับผลในโซนถัดไป' },
  { name: 'Fishing', desc: 'จุดตกปลา (ปลดผ่าน Contractor) แลกวัตถุดิบพิเศษ' },
];

export const MIRROR = [
  { pair: 'Shadow ↔ Fiery Presence', desc: 'Attack/Special แรงขึ้นเมื่อโจมตีด้านหลัง ↔ แรงขึ้นเมื่อโจมตีศัตรูที่ยังไม่เสียพลัง' },
  { pair: 'Death ↔ Stubborn Defiance', desc: 'ฟื้นได้สูงสุด 3 ครั้งต่อรัน ↔ ฟื้น 1 ครั้งต่อห้องและชาร์จใหม่เมื่อเข้าห้องถัดไป' },
  { pair: 'Greater ↔ Ruthless Reflex', desc: 'เพิ่ม Dash อีก 1 ครั้ง ↔ หลบเกือบโดนแล้วได้ดาเมจและโอกาส Dodge ชั่วคราว' },
  { pair: 'Boiling ↔ Abyssal Blood', desc: 'Attack/Special แรงขึ้นกับศัตรูที่มี Cast ปัก ↔ ศัตรูที่มี Cast ปักเคลื่อนที่ช้าลงและทำดาเมจน้อยลง' },
  { pair: 'Chthonic Vitality', desc: 'ฟื้นเลือดเล็กน้อยทุกครั้งที่เข้าห้องใหม่ (อึดขึ้นเยอะสำหรับมือใหม่)' },
];

export const UPGRADES = [
  { color: '#e7c26a', title: 'Weapon Aspects', html: 'อัพ Aspect ของอาวุธด้วย <b class="c-titan">Titan Blood</b> ที่แท่นวางอาวุธ แต่ละอันมี 5 ระดับ · Aspect ซ่อนปลดผ่านคำพยากรณ์ (Fated List) หลังเนื้อเรื่องถึงจุดหนึ่ง' },
  { color: '#e0453a', title: 'Pact of Punishment (Heat)', html: 'ปลดหลังหนีสำเร็จครั้งแรก เปิดเงื่อนไขเพิ่ม "Heat" เพื่อรางวัลที่ดีขึ้น (bounty) — ปรับความยากได้เองตามที่ไหว ไม่ต้องรีบ' },
  { color: '#6fd0e0', title: 'House Contractor', html: 'ใช้ <b style="color:#ff5a4d">Gems</b> / <b style="color:#6fd0e0">Diamonds</b> ปลดฟีเจอร์และตกแต่งบ้าน เช่น ตกปลา เพิ่มโอกาสเจอ Chaos/Well ห้องรางวัลพิเศษ' },
  { color: '#5fe0d1', title: 'Fated List (คำพยากรณ์)', html: 'เช็กลิสต์ภารกิจที่ให้รางวัลใหญ่ เช่น ชนะด้วยอาวุธครบทุกอัน ปลด Aspect ซ่อน ใช้เป็นเป้าหมายระยะยาวได้ดี' },
];

export const KEEPSAKES = [
  { name: 'Old Spiked Collar', from: 'Cerberus', effect: '+HP สูงสุดตอนเริ่มรัน อึดขึ้นทันที เหมาะมือใหม่' },
  { name: 'Lucky Tooth', from: 'Skelly', effect: 'ฟื้นคืนชีพฟรี 1 ครั้งต่อรัน กันพลาด' },
  { name: 'Myrmidon Bracer', from: 'Achilles', effect: 'ลดดาเมจจากด้านหน้าอย่างมากช่วงต้น (เหมือนเกราะกันหน้า)' },
  { name: 'Pierced Butterfly', from: 'Thanatos', effect: 'สะสมดาเมจเพิ่มเมื่อเคลียร์ห้องโดยไม่โดนตี ยิ่งทำต่อเนื่องยิ่งแรง' },
  { name: 'Distant Memory', from: 'Orpheus', effect: 'ดาเมจเพิ่มกับศัตรูที่อยู่ไกล เหมาะสายธนู/ปืน' },
  { name: 'Bone Hourglass', from: 'Charon', effect: 'ไอเทมที่ซื้อจาก Well of Charon มีระยะเวลาเพิ่มขึ้นหลายห้อง' },
  { name: 'Chthonic Coin Purse', from: 'Hypnos', effect: 'เริ่มรันพร้อมทอง (Obols) ติดตัว ซื้อของได้เร็ว' },
  { name: 'Lambent Plume', from: 'Hermes', effect: 'สะสม dodge/ความเร็วเมื่อเคลียร์ห้องไว เหมาะสายว่องไว' },
  { name: 'God Keepsakes (all gods)', from: 'Olympian Gods', effect: 'การันตีให้เทพองค์นั้นเสนอ boon ก่อน + เรริตี้สูงขึ้น = บังคับบิลด์ได้' },
];
