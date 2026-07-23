export const WEAPONS = [
  { id: 'stygius', short: 'Stygius', latin: 'The Stygian Blade', type: 'Sword', diff: 'ง่าย · เหมาะมือใหม่',
    iconPath: 'M14.5 17.5 3 6V3h3l11.5 11.5 M13 19l6-6 M16 16l4 4 M19 21l2-2',
    tagline: 'อาวุธสมดุลรอบด้าน — เกมเริ่มต้นให้ใช้อันนี้ก่อน',
    attack: 'ฟันคอมโบ 3 จังหวะ ระยะประชิด ความเร็วปานกลาง',
    special: 'ฟันหมุนรอบตัว กวาดศัตรูที่รุมประชิดออก',
    playstyle: 'จับง่ายที่สุดในเกม สมดุลทั้งดาเมจ ความเร็ว และระยะ เหมาะใช้เรียนรู้ระบบ boon และหน้าตาของแต่ละด่านก่อนไปลองอาวุธอื่น เป็นอาวุธที่ "ไม่มีจุดอ่อน" แต่ก็ไม่โดดเด่นด้านใดด้านหนึ่ง',
    tips: ['ใช้ dash-strike (dash แล้วกดโจมตี) พุ่งเข้า-ออกไว ๆ ระหว่างคอมโบ', 'special เอาไว้สะบัดเคลียร์ตอนโดนรุมประชิดหลายตัว', 'ตีถี่ = เก็บ boon ที่เสริม "โจมตีปกติ (Attack)" ได้คุ้ม', 'คู่กับ Athena Dash (สะท้อน) แล้วอึดขึ้นมาก'],
    aspects: [
      { name: 'Aspect of Zagreus',  hidden: false, desc: 'เพิ่มความเร็ว Attack และความเร็วเคลื่อนที่ เวอร์ชันตรงไปตรงมาที่สุด', forWho: 'ทุกคน / มือใหม่' },
      { name: 'Aspect of Nemesis',  hidden: false, desc: 'หลังใช้ Special การโจมตี Attack มีโอกาสติดคริติคอลช่วงสั้น ๆ', forWho: 'สายสลับ Special → Attack' },
      { name: 'Aspect of Poseidon', hidden: false, desc: 'เพิ่ม Cast Damage และ Special กระแทก Bloodstone ออกจากศัตรู', forWho: 'สาย Cast / ยิงซ้ำเป็นจังหวะ' },
      { name: 'Aspect of Arthur',   hidden: true,  desc: 'กลายเป็นดาบเอกซ์คาลิเบอร์! ช้าแต่แรงมาก เพิ่ม HP สูงสุด และกางออร่าลดดาเมจที่ได้รับ', forWho: 'สายถึก เปลี่ยนสไตล์ทั้งหมด' },
    ] },
  { id: 'varatha', short: 'Varatha', latin: 'The Eternal Spear', type: 'Spear', diff: 'ง่าย-กลาง',
    iconPath: 'M4 20 20 4 M14 4h6v6 M9 15l-4 4',
    tagline: 'ระยะเอื้อมไกล + หมุนกวาดเป็นวงกว้าง',
    attack: 'แทงระยะไกลกว่าดาบ ตีโดนก่อนโดนตี ปลอดภัยกว่า',
    special: 'ขว้างหอกเป็นเส้นตรง แล้วกดซ้ำเพื่อเรียกกลับและทำดาเมจขากลับ',
    playstyle: 'ได้เปรียบเรื่องระยะเป็นหลัก เก็บศัตรูจากไกลได้ปลอดภัย จุดเด่นคือ Spin Attack (กดค้าง) ที่กวาดเป็นวงรอบตัว เคลียร์ฝูงและกันตัวได้ดีมาก เป็นอาวุธอเนกประสงค์ที่หลายคนชอบ',
    tips: ['กด Attack ค้างเพื่อชาร์จ Spin กวาดวงกว้าง แล้วปล่อยเมื่อมีช่อง', 'ใช้ระยะแทงเช็กและกดดันบอสได้ปลอดภัย', 'ขว้างหอกใส่ศัตรูไกล แล้วกด Special ซ้ำให้ดาเมจขากลับโดนอีกครั้ง', 'เลือกว่าจะเน้น Attack, Special หรือ Spin ให้ชัดก่อนหยิบ boon'],
    aspects: [
      { name: 'Aspect of Zagreus',  hidden: false, desc: 'เพิ่มดาเมจ ระยะ และความเร็วของ Special เหมาะกับการขว้างจากระยะปลอดภัย', forWho: 'ทุกคน / มือใหม่' },
      { name: 'Aspect of Achilles', hidden: false, desc: 'หลัง Special ใช้ Raging Rush พุ่งตามหอก และบัฟ Attack/Cast ชั่วคราว', forWho: 'สายคอมโบขว้าง-พุ่ง / Cast' },
      { name: 'Aspect of Hades',    hidden: false, desc: 'Spin กลายเป็น Punishing Sweep ทำให้ศัตรูรับดาเมจจาก Attack/Special เพิ่มช่วงหนึ่ง', forWho: 'สาย Spin เปิดเป้าแล้วตามโจมตี' },
      { name: 'Aspect of Guan Yu',  hidden: true,  desc: 'ลด HP สูงสุดลงมาก แลกดาเมจกวาดมหาศาล + ดูดเลือดคืน', forWho: 'โปรสายเสี่ยง เก่งแล้ว' },
    ] },
  { id: 'aegis', short: 'Aegis', latin: 'The Shield of Chaos', type: 'Shield', diff: 'ง่าย · อึดสุด',
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    tagline: 'บล็อกได้ ขว้างเด้ง — เหมาะมือใหม่ที่สุด',
    attack: 'ตีระยะประชิด ช้าแต่หนัก และกดค้างเพื่อบล็อก',
    special: 'ขว้างโล่พุ่งไปเด้งกลับ โดนหลายตัว / กดค้าง = Bull Rush พุ่งชน',
    playstyle: 'อาวุธที่ทนที่สุด กดค้างเพื่อบล็อกกันดาเมจได้เกือบทุกอย่างจากด้านหน้า แล้วปล่อยจังหวะพอดีเพื่อ Bull Rush สวนกลับ เหมาะกับคนที่กลัวตายหรือยังหลบไม่คล่อง',
    tips: ['กดค้างบล็อกจังหวะบอสยิงรัว ๆ กันได้เกือบหมด', 'ปล่อยบล็อกจังหวะพอดี = Bull Rush พุ่งสวน', 'ขว้างโล่เด้งไปมาเก็บศัตรูหลายตัว', 'boon ใส่ special (โล่ขว้าง) คุ้มมาก'],
    aspects: [
      { name: 'Aspect of Zagreus', hidden: false, desc: 'Bull Rush โดนแรงขึ้น / ปล่อยได้หลายลูก', forWho: 'ทุกคน / มือใหม่' },
      { name: 'Aspect of Chaos',   hidden: false, desc: 'โล่ที่ขว้างเด้งได้หลายครั้งขึ้น เก็บทั้งห้อง', forWho: 'สายขว้างเด้งเก็บฝูง' },
      { name: 'Aspect of Zeus',    hidden: false, desc: 'โล่ขว้างกลายเป็นโล่สายฟ้าช็อตต่อเนื่อง แข็งและ AoE โหด', forWho: 'สายไฟฟ้า (แนะนำมาก)' },
      { name: 'Aspect of Beowulf', hidden: true,  desc: 'โล่หนักพิเศษ กลไก Bull Rush ผูกกับ cast เล่นสาย cast จัดเต็ม', forWho: 'สาย cast เฉพาะทาง' },
    ] },
  { id: 'coronacht', short: 'Coronacht', latin: 'The Heart-Seeking Bow', type: 'Bow', diff: 'กลาง',
    iconPath: 'M17 3a12 12 0 0 1 0 18 M17 3 4 12l13 9 M4 12h9',
    tagline: 'ราชาระยะไกล เบิร์สต์ดาเมจสูง',
    attack: 'ชาร์จยิง (Power Shot) ยิ่งชาร์จเต็มยิ่งแรง',
    special: 'ยิงลูกธนูกระจาย (Volley) ผลักศัตรูถอยห่าง',
    playstyle: 'จัดการศัตรูจากไกลก่อนเข้าถึงตัว ต้องขยับหนีเก่งและเล็งแม่น จุดแข็งคือเบิร์สต์บอสได้ไวมากด้วย Power Shot เต็มแรง เหมาะคนชอบเล่นปลอดภัยแบบยืนไกล',
    tips: ['ชาร์จเต็มก่อนปล่อยเสมอเพื่อ Power Shot ดาเมจสูง', 'special ผลักศัตรูที่เข้าประชิดให้ห่างแล้วค่อยยิงต่อ', 'ขยับตลอด อย่ายืนนิ่ง เพราะเลือดน้อยกว่าสายประชิด', 'boon เสริมคริ (Artemis) หรือ Power Shot คุ้มสุด'],
    aspects: [
      { name: 'Aspect of Zagreus', hidden: false, desc: 'Power Shot แรงขึ้น สมดุล', forWho: 'ทุกคน / มือใหม่' },
      { name: 'Aspect of Chiron',  hidden: false, desc: 'special ตามล็อกศัตรูตัวที่โจมตีล่าสุด (โฮมมิ่ง)', forWho: 'สายยิงตามเป้า (แนะนำ)' },
      { name: 'Aspect of Hera',    hidden: false, desc: 'โจมตีปกติ "บรรจุ" cast ลงธนู ยิง cast ออกไปได้', forWho: 'สาย cast / bloodstone โหด' },
      { name: 'Aspect of Rama',    hidden: true,  desc: 'special ปักหมายศัตรู แล้วโจมตีชาร์จใส่เป้าที่ปักแรงพิเศษ', forWho: 'สายบอส / เป้าเดี่ยว' },
    ] },
  { id: 'malphon', short: 'Malphon', latin: 'The Twin Fists', type: 'Fists', diff: 'กลาง-ยาก',
    iconPath: 'M6 12V8a2 2 0 0 1 4 0 M10 8V6a2 2 0 0 1 4 0v2 M14 8a2 2 0 0 1 4 0v5a6 6 0 0 1-6 6H9a5 5 0 0 1-5-5v-1a2 2 0 0 1 2-2z',
    tagline: 'เร็ว ดุ DPS ประชิดสูงสุดในเกม',
    attack: 'ต่อยรัวเร็วมาก ระยะสั้น',
    special: 'พุ่งอัปเปอร์คัต (dash-uppercut) เข้าหาศัตรู',
    playstyle: 'สายบุกดุดันที่สุด เข้าประชิดหน้าตลอด ต้องหลบเก่งเพราะระยะสั้นทำให้เสี่ยงโดนตี แต่ถ้าเล่นเป็น DPS ถล่มทลาย เหมาะคนชอบเล่นเชิงรุกและมั่นใจการหลบ',
    tips: ['ต่อยรัวสลับ dash หลบ เข้า-ออกตลอดเวลา', 'special พุ่งเข้าหา = ทั้งเข้าถึงตัวและหลบไปในตัว', 'ระยะสั้น = เสี่ยง เล่นคู่ Athena/Aphrodite เพื่ออยู่รอด', 'boon เสริม attack (ต่อย) คุ้มสุดเพราะตีถี่ที่สุด'],
    aspects: [
      { name: 'Aspect of Zagreus',   hidden: false, desc: 'เพิ่มจำนวน dash-uppercut', forWho: 'ทุกคน / มือใหม่' },
      { name: 'Aspect of Talos',     hidden: false, desc: 'โจมตี/special ดูดศัตรูเข้าหา (แม่เหล็ก) + ดาเมจโบนัสกับตัวที่ถูกดูด', forWho: 'สายรวมศัตรูเป็นกอง' },
      { name: 'Aspect of Demeter',   hidden: false, desc: 'special กลายเป็นคลื่นระยะไกลผลักแรง (Rush)', forWho: 'สายเพิ่มระยะ + knockback' },
      { name: 'Aspect of Gilgamesh', hidden: true,  desc: 'เปลี่ยน dash-strike เป็นท่าเชือด + special ติดสถานะ นักสู้สายเทคนิค', forWho: 'โปรสายบุก' },
    ] },
  { id: 'exagryph', short: 'Exagryph', latin: 'The Adamant Rail', type: 'Rail', diff: 'กลาง',
    iconPath: 'M12 2v4 M12 18v4 M2 12h4 M18 12h4 M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    tagline: 'ยิงรัวระยะไกล + ระเบิด AoE',
    attack: 'ยิงกระสุนรัวอัตโนมัติ มีระบบรีโหลด',
    special: 'ยิงระเบิด (Bombard) ลง AoE',
    playstyle: 'สเปรย์กระสุนใส่ + ระเบิดเคลียร์ฝูง จัดการศัตรูหลายตัวพร้อมกันได้ดี จุดต้องระวังคือจังหวะรีโหลด อย่ายิงจนหมดกลางดงศัตรู เหมาะคนชอบเล่นยิงกระจายแบบ kite',
    tips: ['อย่ายิงจนกระสุนหมดกลางดง — รีโหลดตอนปลอดภัย', 'special ระเบิดเคลียร์ศัตรูที่รวมกลุ่มกัน', 'ขยับยิง (kite) ไม่ให้ศัตรูประชิด', 'boon ที่ติดทุกนัด (Zeus/Aphrodite) คุ้มเพราะยิงรัว'],
    aspects: [
      { name: 'Aspect of Zagreus', hidden: false, desc: 'แม็กกาซีนใหญ่ขึ้น ยิงได้นานขึ้นก่อนรีโหลด', forWho: 'ทุกคน / มือใหม่' },
      { name: 'Aspect of Eris',    hidden: false, desc: 'หลังยิง Bombard ได้บัฟดาเมจ (แลกกับเสี่ยงโดนระเบิดตัวเอง)', forWho: 'สายดาเมจดุดัน' },
      { name: 'Aspect of Hestia',  hidden: false, desc: 'รีโหลดแบบ active (จังหวะพอดี) ทำให้นัดถัดไปแรง + bombard ติดเป้า', forWho: 'สายรีโหลดจับจังหวะ' },
      { name: 'Aspect of Lucifer', hidden: true,  desc: 'special กลายเป็นลำแสงเผาต่อเนื่อง มีระบบความร้อน (overheat)', forWho: 'สายลำแสงต่อเนื่อง' },
    ] },
];

interface Build {
  name: string;
  tag: string;
  core: string;
  why: string;
}

export const BUILDS: Record<string, Build[]> = {
  stygius: [
    { name: 'Chain Lightning Blade', tag: 'ชุมชนแนะนำ · มือใหม่', core: 'Aspect of Zagreus/Nemesis + Zeus (Attack) + Athena (Dash)', why: 'ตีปกติแถมฟ้าผ่าเด้งทั้งจอ ส่วน Athena Dash กันตายให้ยืนตีสบาย เข้าใจง่ายและแรงตั้งแต่รันแรก ๆ' },
    { name: 'Nemesis Crit', tag: 'เบิร์สต์สูง', core: 'Aspect of Nemesis + Artemis (Attack) + Aphrodite (Special)', why: 'จบคอมโบแล้วครั้งถัดไปคริการันตี รวมกับคริของ Artemis = ฟันเดียวหายครึ่งหลอด' },
    { name: 'Tanky Arthur', tag: 'เปลี่ยนสไตล์ · สายอึด', core: 'Aspect of Arthur + Athena/Aphrodite + Chthonic Vitality', why: 'ดาบเอกซ์คาลิเบอร์ช้าแต่แรง กางออร่าลดดาเมจ + เลือดเยอะ เดินฝ่าแทบทุกอย่างได้' },
  ],
  varatha: [
    { name: 'Hades Spin', tag: 'ชุมชนแนะนำ', core: 'Aspect of Hades + Demeter/Ares (Special) + Athena (Dash)', why: 'ชาร์จ Punishing Sweep หมุนกวาดดาเมจมหาศาลรอบตัว ติดสถานะทั้งวง เคลียร์ห้องแทบวินาทีเดียว' },
    { name: 'Achilles Rush', tag: 'สายคอมโบมันส์', core: 'Aspect of Achilles + Ares/Artemis (Special) + Hermes', why: 'ขว้างหอกแล้ว dash-strike ครั้งถัดไปแรงพิเศษ วนพุ่งเข้า-ออกไม่หยุด สนุกมือ' },
    { name: 'Guan Yu Lifesteal', tag: 'โปร · เสี่ยงสูง', core: 'Aspect of Guan Yu + Aphrodite + Life boon', why: 'เลือดน้อยแต่กวาดแรงและดูดเลือดคืน เล่นเป็นแล้วโหดสุด สายชอบความท้าทาย' },
  ],
  aegis: [
    { name: 'Lightning Shield', tag: 'ชุมชนแนะนำ · แนะนำมาก', core: 'Aspect of Zeus + Zeus (Special) + Athena (Dash)', why: 'ขว้างโล่กลายเป็นสายฟ้าช็อตต่อเนื่อง AoE โหด บล็อกกันตายได้ด้วย อึดและแรงพร้อมกัน' },
    { name: 'Chaos Bounce', tag: 'เก็บฝูงเพลิน', core: 'Aspect of Chaos + Ares/Aphrodite (Special) + Poseidon', why: 'โล่ขว้างเด้งไปมาหลายครั้งเก็บทั้งห้อง ยิ่งเด้งยิ่งติดสถานะกระจาย' },
    { name: 'Beowulf Caster', tag: 'สาย Cast เฉพาะทาง', core: 'Aspect of Beowulf + Ares (Blade Rift) / Demeter (Cast) + Bloodstones', why: 'ผูกกลไกกับ cast ปักใบมีด/หินเลือดใส่ศัตรูรัว ๆ บิลด์คิดเยอะแต่ทรงพลัง' },
  ],
  coronacht: [
    { name: 'Chiron Homing', tag: 'ชุมชนแนะนำ · แนะนำมาก', core: 'Aspect of Chiron + Artemis (Special) + Zeus/Aphrodite (Attack)', why: 'special ล็อกตามศัตรูอัตโนมัติ ยิงรัวคริไม่ต้องเล็ง เบิร์สต์บอสร่วงไวมาก' },
    { name: 'Hera Cannon', tag: 'สาย Cast ระเบิด', core: 'Aspect of Hera + Ares/Aphrodite (Cast) + Bloodstones', why: 'โจมตีปกติบรรจุ cast ลงธนูแล้วยิงออก = ยิง bloodstone ทะลุจอ ดาเมจก้อนโต' },
    { name: 'Power Shot Sniper', tag: 'สายยิงไกลปลอดภัย', core: 'Aspect of Rama/Zagreus + Artemis (Attack) + Hermes', why: 'ชาร์จเต็มยิงทีละนัดหนัก ๆ ยืนไกลเก็บทีละตัว ปลอดภัยสายเล่นใจเย็น' },
  ],
  malphon: [
    { name: 'Talos Magnet', tag: 'ชุมชนแนะนำ', core: 'Aspect of Talos + Zeus/Poseidon (Attack) + Athena (Dash)', why: 'ดูดศัตรูมากองรวมกันแล้วต่อยรัว AoE ติดทุกตัว สะใจและเคลียร์ฝูงไว' },
    { name: 'Demeter Frost', tag: 'คุมเกม + ระยะ', core: 'Aspect of Demeter + Aphrodite/Athena + Chill boon', why: 'special กลายเป็นคลื่นระยะไกลผลัก + Chill ชะลอศัตรู แก้จุดอ่อนระยะสั้นของหมัด' },
    { name: 'Lightning Fists', tag: 'สายบุกดุ', core: 'Aspect of Zagreus + Hermes + Ares/Zeus (Attack)', why: 'ต่อยเร็วอยู่แล้ว + Hermes เร่งความไว = DPS ประชิดสูงสุดในเกม เข้า-ออกไวจนศัตรูตามไม่ทัน' },
  ],
  exagryph: [
    { name: 'Hestia Sniper', tag: 'ชุมชนแนะนำ', core: 'Aspect of Hestia + Artemis (Attack) + Zeus', why: 'รีโหลดจับจังหวะพอดี = นัดถัดไปแรงพิเศษ + คริ ยิงทีละนัดเจ็บ ๆ เหมือนสไนเปอร์' },
    { name: 'Bombard Spam', tag: 'เคลียร์ฝูงเพลิน', core: 'Aspect of Eris/Zagreus + Ares/Zeus (Bombard) + Poseidon', why: 'อัด boon ลงระเบิด (Bombard) แล้วสาดใส่กองศัตรู ระเบิดต่อเนื่องทั้งจอ' },
    { name: 'Lucifer Beam', tag: 'เปลี่ยนสไตล์', core: 'Aspect of Lucifer + Aphrodite/Demeter (Special) + Life', why: 'special เป็นลำแสงเผาต่อเนื่อง กวาดค้างใส่บอส คุมความร้อน (overheat) ให้ดีคือแรงมาก' },
  ],
};

export const GODS = [
  { id: 'zeus', name: 'Zeus', latin: 'God of the Sky', color: '#f5d33f', statusBg: '#443b1b', domain: 'สายฟ้า', status: 'Jolted — ฟ้าผ่าซ้ำ',
    signature: ['ฟ้าผ่าลูกโซ่เด้งไปหลายตัว', 'โจมตี/special แถมสายฟ้า AoE กระจาย'],
    synergy: 'ราชาแห่งการเคลียร์ฝูงด้วย AoE คู่กับ Poseidon หรือ Demeter ได้ duo แรงมาก มือใหม่หยิบง่ายเพราะดาเมจมาเอง' },
  { id: 'poseidon', name: 'Poseidon', latin: 'God of the Sea', color: '#67bdff', statusBg: '#1b3a52', domain: 'คลื่นทะเล', status: 'Knockback — กระแทก',
    signature: ['ผลักศัตรูกระแทกกำแพง/กับดัก = ดาเมจเพิ่ม', 'ทำให้ดรอปเงินและรางวัลมากขึ้น'],
    synergy: 'ผลักศัตรูลงลาวา/หนามได้เปรียบสุด ๆ ใน Asphodel แถมช่วยเก็บเงินเยอะ' },
  { id: 'athena', name: 'Athena', latin: 'Goddess of Wisdom', color: '#9ce2d2', statusBg: '#20483f', domain: 'ป้องกัน', status: 'Deflect — สะท้อน',
    signature: ['Divine Dash — dash สะท้อนกระสุนและดาเมจ', 'ทำ Exposed ลดเกราะศัตรู'],
    synergy: 'แกนหลักสายเอาตัวรอด ถ้าเจอ Athena Dash ให้รีบหยิบ เป็น boon ท็อปที่เข้าได้กับทุกบิลด์' },
  { id: 'aphrodite', name: 'Aphrodite', latin: 'Goddess of Love', color: '#ff99bf', statusBg: '#492739', domain: 'เสน่หา', status: 'Weak — ศัตรูอ่อนแรง',
    signature: ['ทำ Weak ให้ศัตรูตีเบาลง', 'Charm ทำให้ศัตรูหันไปตีกันเอง'],
    synergy: 'เพิ่มทั้งดาเมจและความอยู่รอดในตัวเดียว มือใหม่หยิบไปไม่มีทางพลาด' },
  { id: 'ares', name: 'Ares', latin: 'God of War', color: '#ff7c70', statusBg: '#49231e', domain: 'สงคราม', status: 'Doom — ระเบิดหน่วงเวลา',
    signature: ['Doom สะสมดาเมจแล้วระเบิดออกทีเดียว', 'Blade Rift — cast ใบมีดหมุนติดพื้น'],
    synergy: 'ดาเมจดิบสูง คู่กับ Artemis (คริ) หรือ Aphrodite (Weak) ได้ duo โหด ๆ' },
  { id: 'artemis', name: 'Artemis', latin: 'Goddess of the Hunt', color: '#8adb8b', statusBg: '#254728', domain: 'ล่าสัตว์', status: 'Critical — คริติคอล',
    signature: ['เพิ่มโอกาสคริทุกการโจมตี', 'ลูกธนู/กระสุนตามล็อกเป้า'],
    synergy: 'จับคู่กับดาเมจเป้าเดียวหรือธนู เบิร์สต์บอสร่วงไว มาเป็น boon เดี่ยว ๆ ก็แรง' },
  { id: 'dionysus', name: 'Dionysus', latin: 'God of Wine', color: '#c49aee', statusBg: '#38254c', domain: 'สุราเมรัย', status: 'Hangover — พิษสะสม',
    signature: ['ติดพิษ Hangover ค่อย ๆ กัดเลือดต่อเนื่อง', 'Festive Fog — หมอกพิษ AoE ยืนกดดาเมจ'],
    synergy: 'ดาเมจต่อเนื่องแบบ "ติดแล้วหนี" ยืนระยะสบาย เหมาะมือใหม่ที่ยังหลบไม่คล่อง' },
  { id: 'demeter', name: 'Demeter', latin: 'Goddess of Seasons', color: '#d0edf2', statusBg: '#26434a', domain: 'น้ำแข็ง/เก็บเกี่ยว', status: 'Chill — ชะลอ→แช่แข็ง',
    signature: ['Chill ทำศัตรูช้าลง สะสมเต็มเป็น Deep Freeze', 'ดาเมจสูงพร้อมคุมฝูงในตัว'],
    synergy: 'คุมเกม + ดาเมจครบเครื่อง คู่ Zeus/Poseidon ได้ duo เด่นมาก' },
  { id: 'hermes', name: 'Hermes', latin: 'The Messenger', color: '#ffc36c', statusBg: '#49351c', domain: 'ความเร็ว', status: 'Speed — ว่องไว',
    signature: ['เพิ่มความเร็ววิ่ง/โจมตี/dash', 'เพิ่มจำนวน dash และโอกาสหลบ'],
    synergy: 'มักโผล่กลางรัน (ไม่ผ่านประตูปกติ) เจอเมื่อไหร่เก็บเสริมความไว = เอาตัวรอดดีขึ้นทันตา' },
  { id: 'chaos', name: 'Chaos', latin: 'The Primordial', color: '#c0a4f2', statusBg: '#38284f', domain: 'ความอลหม่าน', status: 'คำสาป → บัฟถาวร',
    signature: ['ผ่านประตู Chaos รับคำสาปสั้น ๆ แลกพลังถาวรทั้งรัน', 'บัฟมักแรงกว่า boon เทพปกติ'],
    synergy: 'ทนคำสาปช่วงสั้น ๆ เพื่อของดีระยะยาว คุ้มถ้าเลือดยังเยอะและด่านยังอีกไกล' },
];

export const STATUSES = [
  { name: 'Jolted', god: 'Zeus', color: '#f5d33f', how: 'ติดแล้ว เมื่อศัตรู "โจมตี" จะโดนฟ้าผ่าใส่ตัวเอง', detail: 'ดีกับบอสหรือศัตรูที่ตีถี่ ยิ่งมันดุยิ่งเจ็บตัวเอง เป็นดาเมจฟรีที่ไม่ต้องทำอะไรเพิ่ม' },
  { name: 'Weak', god: 'Aphrodite', color: '#ff7fb0', how: 'ลดดาเมจที่ศัตรูสร้าง ~30% ชั่วคราว', detail: 'เป็นเกราะชั้นดี ใส่ก่อนบอสปล่อยท่าหนักทำให้ตีเราเบาลงมาก อยู่รอดง่ายขึ้นทันตา' },
  { name: 'Doom', god: 'Ares', color: '#e0453a', how: 'ปักไว้แล้วระเบิดดาเมจก้อนใหญ่หลังหน่วงเวลาสั้น ๆ', detail: 'ดาเมจดิบสูงสุดสายหนึ่ง แต่ยิงซ้ำก่อนระเบิดจะรีเซ็ตเวลา — ปล่อยให้ระเบิดก่อนค่อยตีซ้ำ' },
  { name: 'Hangover', god: 'Dionysus', color: '#9b6fce', how: 'พิษสะสมกัดเลือดต่อเนื่อง ซ้อนได้หลายชั้น', detail: 'ยิ่งตีโดนยิ่งซ้อนชั้น เหมาะสไตล์ "ติดแล้วหนี" ปล่อยพิษทำงานเอง มือใหม่ที่ยังหลบไม่คล่องชอบมาก' },
  { name: 'Chill → Deep Freeze', god: 'Demeter', color: '#bfe3ea', how: 'ชะลอความเร็วศัตรู สะสมเต็มเป็น Deep Freeze แช่แข็งชั่วขณะ', detail: 'คุมฝูงชั้นเยี่ยม ศัตรูช้าลง = หลบง่าย ตีง่าย พร้อมดาเมจในตัว คุ้มทั้งรุกและรับ' },
  { name: 'Marked / Critical', god: 'Artemis', color: '#69c46a', how: 'เพิ่มโอกาสคริ (ดาเมจเด้ง) บางพรทำเครื่องหมายเป้า', detail: 'สเกลกับดาเมจต่อครั้งได้ดี รวมกับอาวุธตีแรงหรือ Power Shot = เบิร์สต์บอสร่วงไว' },
  { name: 'Deflect / Exposed', god: 'Athena', color: '#87d3c2', how: 'Deflect สะท้อนกระสุน/ดาเมจกลับ · Exposed เพิ่มดาเมจตอนตีข้างหลัง', detail: 'Athena Dash คือ boon เอาตัวรอดอันดับต้น ๆ ของเกม เจอเมื่อไหร่รีบหยิบ เข้าได้กับทุกบิลด์' },
  { name: 'Knockback', god: 'Poseidon', color: '#3aa0e8', how: 'กระแทกศัตรูกระเด็น ชนกำแพง/กับดัก/ลาวา = ดาเมจเพิ่ม', detail: 'คุมพื้นที่ + เก็บเงินเยอะ ใน Asphodel ผลักลงลาวาได้เปรียบสุด ๆ (ระวังผลักศัตรูออกจากพร AoE)' },
];

export const DUOS = [
  { pair: 'Zeus × Poseidon', effect: 'สายฟ้า + คลื่นกระแทก: ตอนผลักศัตรูจะปล่อยสายฟ้าออกมาด้วย เคลียร์ฝูงโหด' },
  { pair: 'Zeus × Demeter', effect: 'Jolted เจอ Chill: สองสถานะส่งผลต่อกัน ทำดาเมจก้อนใหญ่' },
  { pair: 'Ares × Artemis', effect: 'Doom + คริ: คริใส่เป้าที่ติด Doom ดาเมจพุ่งกระฉูด' },
  { pair: 'Aphrodite × Ares', effect: 'Weak + Doom: ศัตรูตีเราเบาลง แถมค่อย ๆ ระเบิดตายเอง' },
  { pair: 'Artemis × Aphrodite', effect: 'คริการันตีใส่ศัตรูที่ติด Weak เบิร์สต์เป้าเดี่ยวโหด' },
  { pair: 'Athena × Zeus', effect: 'dash สะท้อนแล้วปล่อยสายฟ้ารอบตัว กันไปตีไปในจังหวะเดียว' },
  { pair: 'Demeter × Dionysus', effect: 'Chill + Hangover: ยืนกดดาเมจต่อเนื่องแบบคุมเกมเต็มจอ' },
  { pair: 'Poseidon × Ares', effect: 'ผลักศัตรูเข้าใบมีดหมุน (Blade Rift) แรงขึ้นเป็นเท่าตัว' },
];

export const LEGENDARY = [
  { god: 'Zeus', name: 'Splitting Bolt', effect: 'เอฟเฟกต์สายฟ้าทุกครั้งจะปล่อยประกายเพิ่มอีกชุด ช่วยเสริมดาเมจและเคลียร์ฝูง', req: 'ต้องมี Storm Lightning, Double Strike หรือ High Voltage อย่างน้อย 1 ชิ้น' },
  { god: 'Ares', name: 'Vicious Cycle', effect: 'Blade Rift แรงขึ้นทุกครั้งที่โดนศัตรูต่อเนื่อง เหมาะกับบิลด์ใบมีดหมุน', req: 'ต้องมี Black Metal หรือ Engulfing Vortex' },
  { god: 'Athena', name: 'Divine Protection', effect: 'ได้เกราะกันดาเมจ 1 ครั้งที่ชาร์จคืนได้เรื่อย ๆ อึดขึ้นมหาศาล', req: 'ต้องมี boon Athena หลายชิ้น' },
  { god: 'Aphrodite', name: 'Unhealthy Fixation', effect: 'เอฟเฟกต์ Weak มีโอกาส 15% ทำให้ศัตรูติด Charm และหันไปโจมตีพวกเดียวกัน', req: 'ต้องมีพรแกนหลัก Aphrodite 1 ชิ้น และพรเสริม Weak อีก 1 ชิ้น' },
];

export const BOON_KINDS = [
  { title: 'Duo Boon', color: '#ff9a5a', desc: 'รวมพลัง 2 เทพ ต้องมี boon เกี่ยวข้องจากทั้งสององค์ก่อน จึงจะมีให้เลือก' },
  { title: 'Chaos Boon', color: '#a888e8', desc: 'ผ่านประตู Chaos รับคำสาปสั้น ๆ แลกบัฟถาวรทั้งรัน มักแรงกว่าพรปกติ' },
  { title: 'Pom of Power', color: '#5fe0d1', desc: 'อัพเลเวล boon ที่มีอยู่ให้แรงขึ้น — ทุ่มลง boon หลักของบิลด์คุ้มสุด' },
];
