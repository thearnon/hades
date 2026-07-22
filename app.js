/* =========================================================================
   HADES guide — app
   Plain vanilla JS. No build step, no framework.
   Renders sections into #content, nav into #nav, and wires clicks.
   ========================================================================= */

/* ---- App state -------------------------------------------------------- */
const state = {
  section: 'overview',   // active sidebar section id
  weapon: 'stygius',     // selected weapon id (weapons screen)
  god: 'zeus',           // selected god id (boons screen)
  showLatin: true,       // show Latin epithets under names
};

/* ---- Small helpers ---------------------------------------------------- */
const FLAME = 'M12 3c1.7 2.3 3 3.7 3 6.4a3 3 0 0 1-6 0c0-1 .3-1.7.8-2.4C10 8.6 11 9.4 11.6 10c.6-2-.7-4-.6-7z';
const CURRENCY_ICON = 'M6 3h12l3 6-9 12L3 9z M3 9h18';

// Build an inline SVG icon from a path string.
function icon(path, size = 20, opts = {}) {
  const stroke = opts.stroke || 'currentColor';
  const width = opts.width || 1.7;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}"
    stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"></path></svg>`;
}
const flame = (size, stroke = '#ff8f4d') => icon(FLAME, size, { stroke, width: 1.8 });
const MARK = '<span class="tip-list__mark">&#9670;</span>';
const FEATURE_ICONS = [
  'assets/icons/skull-laurel.svg',
  'assets/icons/greek-helm.svg',
  'assets/icons/cycle-flame.svg',
];

function mediaFigure(src, alt, caption, className = '') {
  return `<figure class="media-frame ${className}">
    <img src="${src}" alt="${alt}" loading="lazy" decoding="async">
    <figcaption>${caption}</figcaption>
  </figure>`;
}

/* ---- Sidebar nav ------------------------------------------------------ */
function renderNav() {
  document.getElementById('nav').innerHTML = SECTIONS.map((s) => {
    const active = s.id === state.section;
    return `<button class="nav-item${active ? ' is-active' : ''}" data-section="${s.id}">
      ${active ? '<span class="nav-item__bar"></span>' : ''}
      ${icon(s.iconPath, 19)}
      <span>${s.label}</span>
    </button>`;
  }).join('');
}

/* =========================================================================
   Section renderers — each returns an HTML string
   ========================================================================= */

function renderOverview() {
  const features = OVERVIEW_FEATURES.map((f, index) => `
    <div class="card feature-card">
      <div class="feature-card__icon"><img src="${FEATURE_ICONS[index]}" alt="" aria-hidden="true"></div>
      <div><div class="feature-card__label" style="color:${f.color}">${f.label}</div>
      <div class="feature-card__desc">${f.desc}</div></div>
    </div>`).join('');

  const cards = SECTIONS.slice(1).map((s) => `
    <button class="link-card" data-section="${s.id}">
      <span class="link-card__icon">${icon(s.iconPath, 20)}</span>
      <span class="link-card__label">${s.label}</span>
    </button>`).join('');

  return `<div class="screen" data-screen-label="เริ่มต้นที่นี่">
    <section class="overview-hero">
      <div class="overview-hero__copy">
    <div class="eyebrow" style="margin-bottom:14px">ยินดีต้อนรับสู่ยมโลก</div>
    <h1 class="hero-title">HADES</h1>
    <p class="hero-tagline">โร้กไลก์หนีออกจากนรก ที่ยิ่งตายยิ่งแข็งแกร่ง</p>
    <p class="lead lead--66">คุณคือ <b>Zagreus</b> เจ้าชายแห่งยมโลก ที่พยายามหนีจากบ้านของพ่อ (Hades) ขึ้นไปสู่พื้นโลก แต่ละครั้งที่ตายคือการเริ่มใหม่ — พร้อมของอัพเกรด เนื้อเรื่อง และความเก่งที่มากขึ้น ไกด์นี้พาคุณรู้จักทุกระบบตั้งแต่ศูนย์</p>
      </div>
      <figure class="overview-hero__media">
        <img src="assets/official/hero-zagreus.jpg" alt="Zagreus เจ้าชายแห่งยมโลกพร้อมดาบ" fetchpriority="high" decoding="async">
      </figure>
    </section>
    <div class="grid auto-200 overview-features">${features}</div>
    <div class="subhead subhead--sm">ไกด์นี้พาไปรู้จักอะไรบ้าง</div>
    <div class="overview-discovery">
      <div class="grid auto-230 overview-links">${cards}</div>
      ${mediaFigure('assets/official/tartarus.jpg', 'ภาพบรรยากาศเมืองใต้พิภพ Tartarus', 'Tartarus · จุดเริ่มต้นของทุกการหลบหนี', 'media-frame--overview')}
    </div>
  </div>`;
}

function renderCore() {
  const steps = RUN_LOOP.map((s) => `
    <div class="card step">
      <div class="step__no" style="color:${s.color}">${s.no}</div>
      <div class="step__title">${s.title}</div>
      <div class="step__desc">${s.desc}</div>
    </div>`).join('');

  const currencies = CURRENCIES.map((c) => `
    <div class="card currency">
      <span class="currency__icon" style="background:${c.bg};color:${c.color}">${icon(CURRENCY_ICON, 18, { width: 1.8 })}</span>
      <div>
        <div class="currency__name">${c.name}</div>
        <div class="currency__use">${c.use}</div>
      </div>
    </div>`).join('');

  return `<div class="screen" data-screen-label="ระบบหลัก">
    <div class="eyebrow">CORE SYSTEMS</div>
    <h1 class="section-title">ระบบหลักของเกม</h1>
    <p class="lead">หัวใจของ Hades คือ "วงจรของการตายและกลับมาใหม่" เข้าใจ 3 อย่างนี้แล้วเล่นสนุกขึ้นทันที: วงจรรัน, ความหมายของการตาย, และค่าเงินต่าง ๆ</p>

    <div class="subhead">วงจรหนึ่งรัน (Run Loop)</div>
    <div class="steps" style="margin-bottom:22px">${steps}</div>
    ${mediaFigure('assets/official/house-of-hades.jpg', 'ห้องโถงภายใน House of Hades', 'House of Hades · บ้านที่กลับมาทุกครั้งหลังจบรัน', 'media-frame--wide')}

    <div class="card card--warm callout" style="margin-bottom:34px">
      <div class="callout__head">${flame(20)}<span class="callout__title">ตาย = ความคืบหน้า</span></div>
      <p class="callout__body">เกมออกแบบมาให้คุณตายบ่อยครั้ง การตายจะพากลับบ้าน ได้บทสนทนาใหม่ ๆ เนื้อเรื่องเดินหน้า และค่าเงินถาวรยังอยู่ครบ ยิ่งตายยิ่งได้ของอัพเกรด — ผู้เล่นส่วนใหญ่หนีสำเร็จครั้งแรกหลังตายไปหลายสิบรอบ นั่นคือเรื่องปกติ</p>
    </div>

    <div class="subhead">ค่าเงินและทรัพยากร (Currencies)</div>
    <div class="grid auto-240" style="margin-bottom:30px">${currencies}</div>
    <p class="tip-text"><b>เคล็ดลับ:</b> ก่อนเข้าประตูจะเห็นสัญลักษณ์รางวัลของห้องถัดไปเสมอ (boon เทพองค์ไหน, เลือด, Pom, เงิน, ค้อน ฯลฯ) — วางแผนได้ว่าจะเดินไปทางไหนตามสิ่งที่ต้องการ</p>
  </div>`;
}

function renderMindset() {
  const tips = MINDSET_TIPS.map((m) => `
    <div class="card tip-card">
      <div class="tip-card__no">${m.no}</div>
      <div class="tip-card__title">${m.title}</div>
      <div class="tip-card__body">${m.body}</div>
    </div>`).join('');

  return `<div class="screen" data-screen-label="Mindset">
    <div class="eyebrow">MINDSET</div>
    <h1 class="section-title">เล่นยังไงให้สนุก ไม่หัวร้อน</h1>
    <p class="lead">Hades เป็นเกมที่ "อยากให้คุณตาย" ถ้าเข้าใจแนวคิดพวกนี้ คุณจะสนุกกับทุกรัน ไม่ว่าจะรอดหรือร่วง</p>

    <div class="quote">
      <span class="quote__mark">&#8220;</span>
      <p class="quote__text">ทุกความตายคือก้าวหน้า อย่ามองว่าแพ้ — มองว่ากำลังปั้นตัวละครให้แข็งขึ้น</p>
    </div>

    <div class="grid auto-280 gap-14">${tips}</div>
  </div>`;
}

function renderChars() {
  const people = HOUSE_CHARS.map((h) => `
    <div class="card person">
      <div class="person__name">${h.name}</div>
      <div class="person__latin">${h.latin}</div>
      <div class="person__role">${h.role}</div>
    </div>`).join('');

  return `<div class="screen" data-screen-label="ตัวละคร">
    <div class="eyebrow">CHARACTERS</div>
    <h1 class="section-title">ตัวละครที่ควรรู้จัก</h1>
    <p class="lead">คนในบ้านของ Hades คือหัวใจของเนื้อเรื่อง กลับบ้านทุกครั้งลองคุยกับทุกคน — เนื้อเรื่องเดิน และมักได้ของขวัญ</p>

    <div class="hero-card">
      <div class="hero-card__avatar"><img src="assets/official/hero-zagreus.jpg" alt="Zagreus" loading="lazy" decoding="async"></div>
      <div>
        <div class="hero-card__kicker">THE PROTAGONIST</div>
        <div class="hero-card__name">Zagreus</div>
        <p>เจ้าชายแห่งยมโลก ลูกชายของ Hades ตาสองสี (แดง/เขียว) ทุกครั้งที่ตายจะฟื้นขึ้นจากแม่น้ำ Styx ในบ้าน เป้าหมายของเขาคือหนีจากยมโลกขึ้นไปพื้นโลกเพื่อตามหาความจริงเกี่ยวกับ Persephone ผู้เป็นแม่</p>
      </div>
    </div>

    <div class="subhead">คนในบ้าน (House of Hades)</div>
    <div class="grid auto-230" style="margin-bottom:22px">${people}</div>
    ${mediaFigure('assets/official/hades.jpg', 'Hades เจ้าแห่งยมโลกบนบัลลังก์', 'Hades · เจ้าแห่งยมโลกและพ่อของ Zagreus', 'media-frame--character')}

    <div class="grid cols-2 gap-14">
      <div class="card--teal pair-box pair-box--teal">
        <div class="info-title info-title--teal">เทพโอลิมปัส</div>
        <p>ญาติของ Zagreus บนเขาโอลิมปัส คอยส่ง Boon มาช่วยระหว่างหนี</p>
        <button class="btn-teal" data-section="boons">ไปหน้า Boon เทพ &#8594;</button>
      </div>
      <div class="card--ember pair-box pair-box--ember">
        <div class="info-title info-title--ember">สายสัมพันธ์ &amp; เพื่อนร่วมรบ</div>
        <p>มอบ <b class="c-gold">Nectar</b> และ <b class="c-pink">Ambrosia</b> ให้ NPC เพื่อสานสัมพันธ์ บางตัว (Thanatos, Megaera, Dusa ฯลฯ) จะกลายเป็นเพื่อนที่เรียกมาช่วยรบได้ในรัน</p>
      </div>
    </div>
  </div>`;
}

function renderWeapons() {
  const chips = WEAPONS.map((w) => `
    <button class="wchip${w.id === state.weapon ? ' is-active' : ''}" data-weapon="${w.id}">
      ${icon(w.iconPath, 26, { width: 1.6 })}
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
        <div class="wpanel__badge">${icon(w.iconPath, 34, { stroke: '#160b05', width: 1.7 })}</div>
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

function renderBoons() {
  const gChips = GODS.map((g) => `
    <button class="gchip${g.id === state.god ? ' is-active' : ''}" data-god="${g.id}" style="--accent:${g.color}">
      <span class="gchip__dot"></span>${g.name}
    </button>`).join('');

  const g = GODS.find((x) => x.id === state.god) || GODS[0];
  const signature = g.signature.map((s) => `<li><span class="sig-dot"></span><span>${s}</span></li>`).join('');

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
      <div class="legendary__head">
        <span class="legendary__name">${lg.name}</span>
        <span class="legendary__god">${lg.god}</span>
      </div>
      <div class="legendary__effect">${lg.effect}</div>
      <div class="legendary__req"><b>เงื่อนไข:&nbsp;</b>${lg.req}</div>
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

    <div class="boon-showcase">
      ${mediaFigure('assets/official/zeus.jpg', 'Zeus เทพแห่งสายฟ้า', 'Zeus · สายฟ้าและความเสียหายแบบลูกโซ่', 'media-frame--god')}
      ${mediaFigure('assets/official/athena.jpg', 'Athena เทพีแห่งปัญญา', 'Athena · การป้องกันและ Deflect', 'media-frame--god')}
    </div>

    <div class="legend-row">
      <div class="legend-chip">ระดับ: <span class="c-ink" style="color:#ddd3c7">Common</span> &#8594; Rare &#8594; Epic &#8594; <span class="c-gold">Heroic</span></div>
      <div class="legend-chip"><span class="c-ember">Duo Boon</span> = รวมพลัง 2 เทพ</div>
      <div class="legend-chip"><span class="c-titan" style="color:#c98fe0">Legendary</span> = พรสุดยอดของเทพองค์เดียว</div>
      <div class="legend-chip"><span class="c-teal">Pom of Power</span> = อัพเลเวล boon ที่มี</div>
    </div>

    <div class="grid auto-120 gap-9" style="margin-bottom:26px">${gChips}</div>

    <div class="card card--edge gpanel" style="--accent:${g.color};margin-bottom:26px">
      <div class="gpanel__head">
        <h2 class="gpanel__name">${g.name}</h2>
        ${state.showLatin ? `<span class="gpanel__latin">${g.latin}</span>` : ''}
      </div>
      <div class="tag-row">
        <span class="tag tag--type">สาย: ${g.domain}</span>
        <span class="tag tag--status" style="background:${g.statusBg};color:${g.color}">${g.status}</span>
      </div>
      <div class="field-label">จุดเด่น</div>
      <ul class="sig-list">${signature}</ul>
      <div class="card--panel synergy-box"><b>การจับคู่ &amp; ทิป: </b><span>${g.synergy}</span></div>
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

function renderBiomes() {
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

function renderUpgrades() {
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

function renderKeepsakes() {
  const items = KEEPSAKES.map((k) => `
    <div class="card keepsake">
      <div class="keepsake__name">${k.name}</div>
      <div class="keepsake__from">จาก ${k.from}</div>
      <div class="keepsake__effect">${k.effect}</div>
    </div>`).join('');

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

/* ---- Render dispatch -------------------------------------------------- */
const RENDERERS = {
  overview: renderOverview,
  core: renderCore,
  mindset: renderMindset,
  chars: renderChars,
  weapons: renderWeapons,
  boons: renderBoons,
  biomes: renderBiomes,
  upgrades: renderUpgrades,
  keepsakes: renderKeepsakes,
};

// Full paint: nav + active section body.
function render() {
  renderNav();
  const fn = RENDERERS[state.section] || renderOverview;
  document.getElementById('content').innerHTML = fn();
}

// Change section and scroll the content pane back to top.
function goToSection(id) {
  if (!RENDERERS[id]) return;
  state.section = id;
  render();
  const main = document.getElementById('main');
  if (main) main.scrollTop = 0;
}

/* ---- Events ----------------------------------------------------------- */
document.addEventListener('click', (e) => {
  const nav = e.target.closest('[data-section]');
  if (nav) { goToSection(nav.dataset.section); return; }

  const weapon = e.target.closest('[data-weapon]');
  if (weapon) { state.weapon = weapon.dataset.weapon; render(); return; }

  const god = e.target.closest('[data-god]');
  if (god) { state.god = god.dataset.god; render(); return; }
});

/* ---- Boot ------------------------------------------------------------- */
render();
