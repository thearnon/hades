import { state } from '../app/state';
import {
  BOON_STARTERS,
  GOD_IMAGES,
  GOD_PORTRAIT_LAYOUT,
  LEGENDARY_IMAGES,
  MARK,
  WEAPON_IMAGES,
  flame,
  gameAsset,
  icon,
  mediaFigure,
} from '../app/assets';
import {
  BOON_KINDS,
  BUILDS,
  DUOS,
  GODS,
  LEGENDARY,
  STATUSES,
  WEAPONS,
} from '../data/arsenal';

export function renderWeapons() {
  const chips = WEAPONS.map((w) => `
    <button class="wchip${w.id === state.weapon ? ' is-active' : ''}" data-weapon="${w.id}">
      <span class="wchip__art">
        <span class="asset-fallback" aria-hidden="true">${icon(w.iconPath, 26, { width: 1.6 })}</span>
        ${gameAsset(WEAPON_IMAGES[w.id], `ภาพอาวุธ ${w.short}`, 'wchip__img')}
      </span>
      <span class="wchip__short">${w.short}</span>
      <span class="wchip__type">${w.type}</span>
    </button>`).join('');

  const w = WEAPONS.find((x) => x.id === state.weapon) || WEAPONS[0];

  const tips = w.tips.map((t) => `<li>${MARK}<span>${t}</span></li>`).join('');

  const aspects = w.aspects.map((a) => `
    <div class="card card--edge aspect">
      <div class="aspect__head">
        <span class="aspect__name">${a.name}</span>
        ${a.hidden ? '<span class="badge-hidden">ซ่อน</span>' : ''}
      </div>
      <div class="aspect__desc">${a.desc}</div>
      <div class="aspect__for"><span>เหมาะกับ:</span> ${a.forWho}</div>
    </div>`).join('');

  const builds = (BUILDS[w.id] || []).map((b) => `
    <div class="card card--edge build">
      <div class="build__head">
        <span class="build__name">${b.name}</span>
        <span class="build__tag">${b.tag}</span>
      </div>
      <div class="card--panel build__core"><b>แกนบิลด์:&nbsp;</b>${b.core}</div>
      <div class="build__why">${MARK}<span><b>ทำไมสนุก:&nbsp;</b>${b.why}</span></div>
    </div>`).join('');

  return `<div class="screen" data-screen-label="อาวุธ">
    <div class="eyebrow">INFERNAL ARMS</div>
    <h1 class="section-title">อาวุธทั้ง 6 แบบเจาะลึก</h1>
    <p class="lead" style="margin-bottom:26px">แต่ละอาวุธเปลี่ยนสไตล์การเล่นไปคนละแบบ ลองให้ครบทั้ง 6 (ชนะด้วยแต่ละอันจะได้ Darkness/Titan Blood โบนัส) แล้วค่อยหาอันที่ถูกใจ — กดเลือกด้านล่างเพื่อดูรายละเอียด</p>

    ${mediaFigure('assets/official/weapon-combat.jpg', 'Zagreus ต่อสู้ด้วยอาวุธ Infernal Arms', 'Infernal Arms · อาวุธแต่ละชิ้นเปลี่ยนจังหวะการเล่น', 'media-frame--wide')}
    <div class="grid auto-150 gap-10" style="margin-bottom:28px">${chips}</div>

    <div class="card card--edge wpanel" style="margin-bottom:22px">
      <div class="wpanel__head">
        <div class="wpanel__badge">
          <span class="asset-fallback" aria-hidden="true">${icon(w.iconPath, 34, { stroke: '#160b05', width: 1.7 })}</span>
          ${gameAsset(WEAPON_IMAGES[w.id], `ภาพอาวุธ ${w.short}`, 'wpanel__img')}
        </div>
        <div style="flex:1;min-width:220px">
          <h2 class="wpanel__title">${w.short}</h2>
          ${state.showLatin ? `<div class="wpanel__latin">${w.latin}</div>` : ''}
          <div class="tag-row">
            <span class="tag tag--type">${w.type}</span>
            <span class="tag tag--gold">${w.diff}</span>
          </div>
        </div>
      </div>
      <p class="wpanel__tagline">${w.tagline}</p>

      <div class="grid cols-2" style="margin-bottom:20px">
        <div class="card--panel stat-box"><div class="stat-box__label stat-box__label--attack">โจมตีปกติ · ATTACK</div><div class="stat-box__val">${w.attack}</div></div>
        <div class="card--panel stat-box"><div class="stat-box__label stat-box__label--special">พิเศษ · SPECIAL</div><div class="stat-box__val">${w.special}</div></div>
      </div>

      <div class="field-label">สไตล์การเล่น</div>
      <p class="field-text">${w.playstyle}</p>

      <div class="card--warm tips-box">
        <div class="tips-box__head">${flame(18)}<span class="tips-box__title">เคล็ดลับการใช้</span></div>
        <ul class="tip-list">${tips}</ul>
      </div>
    </div>

    <div class="subhead subhead--tight">Aspects (แบบอัพเกรดด้วย Titan Blood)</div>
    <p class="subnote">แต่ละอาวุธมี 4 Aspect เปลี่ยนกลไก อัพด้วย <b class="c-titan">Titan Blood</b> ได้สูงสุด 5 ระดับต่ออัน · อันที่มีป้าย "ซ่อน" ต้องปลดล็อกผ่านเนื้อเรื่อง/คำพยากรณ์ก่อน</p>
    <div class="grid cols-2">${aspects}</div>

    <div class="subhead subhead--tight subhead--spaced">3 บิลด์สนุก ๆ ที่ชุมชนแนะนำ</div>
    <p class="subnote">ไกด์คร่าว ๆ ว่าเล็ง Aspect ไหน + เก็บ boon เทพองค์ไหน — ไม่ต้องได้เป๊ะ ปรับตาม boon ที่เจอจริงในรันได้เสมอ</p>
    <div class="stack">${builds}</div>
  </div>`;
}

export function renderBoons() {
  const g = GODS.find((x) => x.id === state.god) || GODS[0];
  const selectedGodImages = GOD_IMAGES[g.id];
  const portraitLayout = GOD_PORTRAIT_LAYOUT[g.id] || GOD_PORTRAIT_LAYOUT.zeus;
  const portraitStyle = [
    `--accent:${g.color}`,
    `--god-backdrop:${g.statusBg}`,
    `--portrait-scale:${portraitLayout.scale}`,
    `--portrait-x:${portraitLayout.x}`,
    `--portrait-y:${portraitLayout.y}`,
    `--portrait-mobile-scale:${portraitLayout.mobileScale}`,
    `--portrait-mobile-x:${portraitLayout.mobileX}`,
    `--portrait-mobile-y:${portraitLayout.mobileY}`,
  ].join(';');
  const gChips = GODS.map((g) => `
    <button type="button" class="gchip${g.id === state.god ? ' is-active' : ''}" data-god="${g.id}" aria-pressed="${g.id === state.god}" style="--accent:${g.color}">
      <span class="gchip__symbol">
        <span class="gchip__dot asset-fallback"></span>
        ${gameAsset(GOD_IMAGES[g.id].symbol, `สัญลักษณ์ ${g.name}`, 'gchip__img')}
      </span>
      <span>${g.name}</span>
    </button>`).join('');

  const signature = g.signature.map((s) => `<li><span class="sig-dot"></span><span>${s}</span></li>`).join('');
  const boonExamples = (BOON_STARTERS[g.id] || []).map(([name, slot, file]) => `
    <div class="boon-token">
      <span class="boon-token__icon">
        <span class="asset-fallback" aria-hidden="true">${name[0]}</span>
        ${gameAsset(`boons/${file}.png`, `ไอคอน Boon ${name}`, 'boon-token__img')}
      </span>
      <span class="boon-token__copy"><small>${slot}</small><b>${name}</b></span>
    </div>`).join('');

  const statuses = STATUSES.map((st) => `
    <div class="card card--edge status-card" style="--accent:${st.color}">
      <div class="status-card__head">
        <span class="status-card__dot"></span>
        <span class="status-card__name">${st.name}</span>
        <span class="status-card__god">${st.god}</span>
      </div>
      <div class="status-card__how"><b>กลไก:&nbsp;</b>${st.how}</div>
      <div class="status-card__detail">${st.detail}</div>
    </div>`).join('');

  const duos = DUOS.map((d) => `
    <div class="card card--edge duo">
      <div class="duo__pair">${d.pair}</div>
      <div class="duo__effect">${d.effect}</div>
    </div>`).join('');

  const legendary = LEGENDARY.map((lg) => `
    <div class="legendary">
      <div class="legendary__icon">
        <span class="asset-fallback" aria-hidden="true">${lg.name[0]}</span>
        ${gameAsset(LEGENDARY_IMAGES[lg.name], `ไอคอน ${lg.name}`, 'legendary__img')}
      </div>
      <div class="legendary__copy">
        <div class="legendary__head">
          <span class="legendary__name">${lg.name}</span>
          <span class="legendary__god">${lg.god}</span>
        </div>
        <div class="legendary__effect">${lg.effect}</div>
        <div class="legendary__req"><b>เงื่อนไข:&nbsp;</b>${lg.req}</div>
      </div>
    </div>`).join('');

  const kinds = BOON_KINDS.map((k) => `
    <div class="info-mini">
      <div class="info-mini__title" style="color:${k.color}">${k.title}</div>
      <div class="info-mini__desc">${k.desc}</div>
    </div>`).join('');

  return `<div class="screen" data-screen-label="Boon เทพ">
    <div class="eyebrow">BOONS OF OLYMPUS</div>
    <h1 class="section-title">Boon เทพโอลิมปัส</h1>
    <p class="lead" style="margin-bottom:24px">ระหว่างหนี เทพจะเสนอ Boon (พร) ให้เลือก แต่ละองค์มีสถานะ/แนวทางเฉพาะตัว หัวใจของการสร้างบิลด์คือ "เลือกทางแล้วโฟกัส" อย่าเก็บกระจายทุกองค์ กดเลือกเทพเพื่อดูจุดเด่น</p>

    <div class="legend-row">
      <div class="legend-chip">ระดับ: <span class="c-ink" style="color:#ddd3c7">Common</span> &#8594; Rare &#8594; Epic &#8594; <span class="c-gold">Heroic</span></div>
      <div class="legend-chip"><span class="c-ember">Duo Boon</span> = รวมพลัง 2 เทพ</div>
      <div class="legend-chip"><span class="c-titan" style="color:#c98fe0">Legendary</span> = พรสุดยอดของเทพองค์เดียว</div>
      <div class="legend-chip"><span class="c-teal">Pom of Power</span> = อัพเลเวล boon ที่มี</div>
    </div>

    <div class="god-workspace">
      <div class="god-selector" aria-label="เลือกเทพเพื่อดูรายละเอียด">${gChips}</div>

      <section class="god-encounter god-encounter--${g.id}" data-selected-god="${g.id}" style="${portraitStyle}" aria-labelledby="god-name-${g.id}">
        <div class="god-encounter__art">
          <span class="asset-fallback" aria-hidden="true">${g.name[0]}</span>
          ${gameAsset(selectedGodImages.portrait, `ภาพ ${g.name}`, 'god-encounter__portrait')}
        </div>
        <div class="god-encounter__content">
          <header class="god-encounter__head">
            <span class="god-encounter__symbol">
              ${gameAsset(selectedGodImages.symbol, `สัญลักษณ์ ${g.name}`, 'god-encounter__symbol-img')}
            </span>
            <h2 class="god-encounter__name" id="god-name-${g.id}">${g.name}</h2>
            ${state.showLatin ? `<span class="god-encounter__latin">${g.latin}</span>` : ''}
          </header>
          <div class="tag-row">
            <span class="tag tag--type">สาย: ${g.domain}</span>
            <span class="tag tag--status" style="background:${g.statusBg};color:${g.color}">${g.status}</span>
          </div>
          <div class="field-label">จุดเด่น</div>
          <ul class="sig-list">${signature}</ul>
          <div class="god-encounter__synergy"><b>การจับคู่ &amp; ทิป: </b><span>${g.synergy}</span></div>
        </div>
      </section>

      <section class="god-boon-shelf" style="--accent:${g.color}" aria-labelledby="god-boons-title-${g.id}">
        <h3 class="god-boon-shelf__title" id="god-boons-title-${g.id}">ตัวอย่างพรหลักของ ${g.name}</h3>
        <div class="boon-token-grid">${boonExamples}</div>
      </section>
    </div>

    <div class="subhead subhead--tight">สถานะ (Status) ของแต่ละเทพ ทำงานยังไง</div>
    <p class="subnote">แต่ละเทพมี "สถานะติดตัวศัตรู" เป็นเอกลักษณ์ เข้าใจกลไกพวกนี้แล้วจะเลือก boon และจับคู่บิลด์ได้ขาดขึ้นเยอะ</p>
    <div class="grid cols-2" style="margin-bottom:30px">${statuses}</div>

    <div class="subhead subhead--tight">ตัวอย่าง Duo Boon เด่น ๆ</div>
    <p class="subnote">Duo ต้องมี boon เกี่ยวข้องจากทั้งสองเทพก่อน จึงจะมีให้เลือก — คุ้มค่ามากเมื่อได้</p>
    <div class="grid auto-250" style="margin-bottom:24px">${duos}</div>

    <div class="subhead subhead--tight" style="margin-top:26px">พรพิเศษอื่น ๆ: Legendary Boon</div>
    <p class="subnote">พรระดับสูงสุดของเทพองค์เดียว ต้องมี boon ของเทพองค์นั้นครบเงื่อนไขก่อนถึงจะมีให้เลือก — ได้แล้วพลิกเกมได้เลย</p>
    <div class="grid cols-2" style="margin-bottom:22px">${legendary}</div>

    <div class="grid cols-3" style="margin-bottom:26px">${kinds}</div>

    <div class="card--teal pair-box pair-box--teal">
      <div class="info-title info-title--teal">อยากปั้นบิลด์ให้ได้ดั่งใจ?</div>
      <p style="margin:0">ใส่ <b class="c-ink" style="color:#e7ddd0">Keepsake ของเทพองค์นั้น</b> ตอนเริ่มรัน จะการันตีให้เทพองค์นั้นโผล่มาให้เลือกก่อน + เรริตี้สูงขึ้น เป็นวิธีบังคับทิศทางบิลด์ที่ดีที่สุด</p>
    </div>
  </div>`;
}
