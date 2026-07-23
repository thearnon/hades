import {
  GOD_KEEPSAKE_IMAGES,
  KEEPSAKE_IMAGES,
  flame,
  gameAsset,
  mediaFigure,
} from '../app/assets';
import {
  BIOMES,
  KEEPSAKES,
  MAP_EXTRAS,
  MIRROR,
  UPGRADES,
} from '../data/world';

export function renderBiomes() {
  const biomes = BIOMES.map((b) => `
    <div class="card card--edge biome" style="--accent:${b.color}">
      <div class="biome__no">${b.no}</div>
      <div>
        <div class="biome__head">
          <h2 class="biome__name">${b.name}</h2>
          <span class="biome__latin">${b.latin}</span>
        </div>
        <p class="biome__vibe">${b.vibe}</p>
        <div class="grid cols-2">
          <div class="card--panel biome__box biome__box--enemies"><div class="biome__box-label">ศัตรูเด่น</div><div class="biome__box-text">${b.enemies}</div></div>
          <div class="card--warm biome__box biome__box--boss"><div class="biome__box-label">บอส · ${b.boss}</div><div class="biome__box-text">${b.bossTip}</div></div>
        </div>
      </div>
    </div>`).join('');

  const extras = MAP_EXTRAS.map((e) => `
    <div class="card extra">
      <div class="extra__name">${e.name}</div>
      <div class="extra__desc">${e.desc}</div>
    </div>`).join('');

  return `<div class="screen" data-screen-label="แผนที่และบอส">
    <div class="eyebrow">REGIONS &amp; BOSSES</div>
    <h1 class="section-title">4 ด่าน &amp; บอสประจำโซน</h1>
    <p class="lead">เส้นทางหนีผ่าน 4 ภูมิภาค แต่ละที่มีบรรยากาศ ศัตรู และบอสของตัวเอง เอาชนะบอสสุดท้ายเพื่อ "หนีสำเร็จ" — แล้วเกมจะวนใหม่พร้อมเนื้อเรื่องต่อ</p>

    <div class="region-gallery">
      ${mediaFigure('assets/official/tartarus.jpg', 'ภาพรวม Tartarus', 'Tartarus', 'media-frame--region')}
      ${mediaFigure('assets/official/asphodel-combat.jpg', 'การต่อสู้ท่ามกลางลาวาใน Asphodel', 'Asphodel', 'media-frame--region')}
      ${mediaFigure('assets/official/elysium-combat.jpg', 'การต่อสู้กับ Theseus และ Asterius ใน Elysium', 'Elysium', 'media-frame--region')}
    </div>
    <div class="stack gap-16">${biomes}</div>

    <div class="subhead" style="margin:30px 0 14px">จุดพิเศษที่เจอระหว่างทาง</div>
    <div class="grid auto-220">${extras}</div>
  </div>`;
}

export function renderUpgrades() {
  const mirror = MIRROR.map((mt) => `
    <div class="card--panel mirror-item">
      <div class="mirror-item__pair">${mt.pair}</div>
      <div class="mirror-item__desc">${mt.desc}</div>
    </div>`).join('');

  const upgrades = UPGRADES.map((u) => `
    <div class="card card--edge upgrade">
      <div class="upgrade__title" style="color:${u.color}">${u.title}</div>
      <p>${u.html}</p>
    </div>`).join('');

  return `<div class="screen" data-screen-label="การอัพเกรด">
    <div class="eyebrow">PERMANENT UPGRADES</div>
    <h1 class="section-title">ระบบอัพเกรดถาวร</h1>
    <p class="lead">สิ่งที่ทำให้คุณ "แข็งขึ้นเรื่อย ๆ" แม้จะตาย — ทุกอย่างในหน้านี้ติดตัวถาวรข้ามรัน</p>

    <div class="mirror">
      <div class="mirror__title">Mirror of Night</div>
      <p class="mirror__intro">กระจกในห้อง Zagreus (Nyx มอบให้) อัพความสามารถถาวรด้วย <b style="color:#8a7bf0">Darkness</b> แต่ละแถวสลับได้ 2 ทางเลือก เลือกให้เข้ากับสไตล์</p>
      <div class="grid auto-250 gap-10">${mirror}</div>
      <div class="card--warm mirror__note"><b>มือใหม่อัพก่อน:</b> Death Defiance (ฟื้นได้), Thick Skin (+เลือด), Greater Reflex (dash 2 ครั้ง), Chthonic Vitality (ฮีลเมื่อเข้าห้องใหม่)</div>
    </div>

    <div class="grid cols-2 gap-14" style="margin-bottom:14px">${upgrades}</div>
  </div>`;
}

export function renderKeepsakes() {
  const items = KEEPSAKES.map((k) => {
    const isGodSet = k.name === 'God Keepsakes (all gods)';
    const art = isGodSet
      ? `<div class="keepsake__god-row">${GOD_KEEPSAKE_IMAGES.map((image, index) => gameAsset(image, `Keepsake เทพชิ้นที่ ${index + 1}`, 'keepsake__god-img')).join('')}</div>`
      : `<div class="keepsake__icon">
          <span class="asset-fallback" aria-hidden="true">${k.name[0]}</span>
          ${gameAsset(KEEPSAKE_IMAGES[k.name], `ไอคอน ${k.name}`, 'keepsake__img')}
        </div>`;
    return `
      <div class="card keepsake${isGodSet ? ' keepsake--gods' : ''}">
        ${art}
        <div class="keepsake__copy">
          <div class="keepsake__name">${k.name}</div>
          <div class="keepsake__from">จาก ${k.from}</div>
          <div class="keepsake__effect">${k.effect}</div>
        </div>
      </div>`;
  }).join('');

  return `<div class="screen" data-screen-label="Keepsakes">
    <div class="eyebrow">KEEPSAKES</div>
    <h1 class="section-title">Keepsakes ของที่ระลึก</h1>
    <p class="lead" style="margin-bottom:22px">ของที่ NPC/เทพมอบให้เมื่อรับ Nectar พอ ใส่ได้ 1 ชิ้นตอนเริ่มรัน และ <b>สลับได้ทุกครั้งที่เปลี่ยนโซน</b> ยิ่งใช้ยิ่งอัพเลเวล นี่คือชิ้นที่คุ้มค่าที่สุด</p>

    <div class="grid auto-270" style="margin-bottom:24px">${items}</div>

    <div class="card--warm tips-box" style="border-radius:13px;padding:18px 20px">
      <div class="tips-box__head">${flame(19)}<span class="tips-box__title" style="font-size:15px">ทิปสำหรับมือใหม่</span></div>
      <p class="callout__body">ช่วงต้นเกมใส่ <b class="c-ink" style="color:#e7ddd0">Old Spiked Collar</b> (+เลือด) หรือ <b class="c-ink" style="color:#e7ddd0">Lucky Tooth</b> (ฟื้น 1 ครั้ง) เพื่อความอยู่รอด · พอเริ่มปั้นบิลด์เป็นแล้ว ให้เปลี่ยนไปใช้ <b class="c-teal">Keepsake ของเทพ</b> ที่อยากได้ boon เพื่อบังคับทิศทางบิลด์ตั้งแต่ต้นรัน</p>
    </div>
  </div>`;
}
