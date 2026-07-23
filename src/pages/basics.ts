import { state } from '../app/state';
import {
  FEATURE_ICONS,
  ITEM_IMAGES,
  RUN_REWARD_ASSETS,
  flame,
  gameAsset,
  icon,
  mediaFigure,
} from '../app/assets';
import {
  BEGINNER_CHECKLIST,
  BEGINNER_COMBAT_RULES,
  BEGINNER_DOOR_SCENARIOS,
  BEGINNER_MISTAKES,
  BEGINNER_RUN_GOALS,
} from '../data/beginner';
import {
  CURRENCIES,
  MINDSET_TIPS,
  OVERVIEW_FEATURES,
  RUN_LOOP,
  SECTIONS,
} from '../data/navigation';

export function renderOverview() {
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

export function renderCore() {
  const steps = RUN_LOOP.map((s) => `
    <div class="card step">
      <div class="step__no" style="color:${s.color}">${s.no}</div>
      <div class="step__title">${s.title}</div>
      <div class="step__desc">${s.desc}</div>
    </div>`).join('');

  const currencies = CURRENCIES.map((c) => `
    <div class="card currency">
      <span class="currency__icon" style="background:${c.bg};color:${c.color}">
        <span class="asset-fallback" aria-hidden="true">${c.name[0]}</span>
        ${gameAsset(ITEM_IMAGES[c.name], `ไอคอน ${c.name}`, 'currency__img')}
      </span>
      <div>
        <div class="currency__name">${c.name}</div>
        <div class="currency__use">${c.use}</div>
      </div>
    </div>`).join('');

  const runRewards = RUN_REWARD_ASSETS.map((item) => `
    <div class="reward-item">
      <span class="reward-item__icon">
        <span class="asset-fallback" aria-hidden="true">${item.name[0]}</span>
        ${gameAsset(item.image, `ไอคอน ${item.name}`, 'reward-item__img')}
      </span>
      <span><b>${item.name}</b><small>${item.desc}</small></span>
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
    <div class="field-label">สัญลักษณ์สำคัญอื่น ๆ ที่จะเจอระหว่างเล่น</div>
    <div class="reward-strip">${runRewards}</div>
    <p class="tip-text"><b>เคล็ดลับ:</b> ก่อนเข้าประตูจะเห็นสัญลักษณ์รางวัลของห้องถัดไปเสมอ (boon เทพองค์ไหน, เลือด, Pom, เงิน, ค้อน ฯลฯ) — วางแผนได้ว่าจะเดินไปทางไหนตามสิ่งที่ต้องการ</p>
  </div>`;
}

export function renderMindset() {
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

export function renderBeginner() {
  const selectedScenario = BEGINNER_DOOR_SCENARIOS.find((scenario) => scenario.id === state.beginnerScenario)
    || BEGINNER_DOOR_SCENARIOS[0];
  const completedItems = BEGINNER_CHECKLIST.filter((item) => state.beginnerChecklist.includes(item.id)).length;
  const completion = Math.round((completedItems / BEGINNER_CHECKLIST.length) * 100);

  const goals = BEGINNER_RUN_GOALS.map((goal) => `
    <article class="run-goal" style="--accent:${goal.color}">
      <div class="run-goal__no">${goal.no}</div>
      <div class="run-goal__copy">
        <h2 class="run-goal__title">${goal.title}</h2>
        <div class="run-goal__label">${goal.label}</div>
        <p>${goal.desc}</p>
      </div>
    </article>`).join('');

  const checklist = BEGINNER_CHECKLIST.map((item) => {
    const checked = state.beginnerChecklist.includes(item.id);
    return `<button type="button" class="preflight-item${checked ? ' is-checked' : ''}" data-beginner-check="${item.id}" aria-pressed="${checked}">
      <span class="preflight-item__check" aria-hidden="true">${checked ? icon('M5 12l4 4L19 6', 17, { width: 2.2 }) : ''}</span>
      <span class="preflight-item__copy"><b>${item.title}</b><small>${item.desc}</small></span>
    </button>`;
  }).join('');

  const scenarioTabs = BEGINNER_DOOR_SCENARIOS.map((scenario) => `
    <button type="button" class="scenario-tab${scenario.id === selectedScenario.id ? ' is-active' : ''}"
      data-beginner-scenario="${scenario.id}" aria-pressed="${scenario.id === selectedScenario.id}">
      ${scenario.label}
    </button>`).join('');

  const priorities = selectedScenario.priorities.map((item, index) => `
    <li class="door-priority">
      <span class="door-priority__no">${String(index + 1).padStart(2, '0')}</span>
      <span class="door-priority__copy"><b>${item.reward}</b><small>${item.why}</small></span>
    </li>`).join('');

  const combatRules = BEGINNER_COMBAT_RULES.map((rule) => `
    <article class="combat-rule">
      <span class="combat-rule__no">${rule.no}</span>
      <div><h3>${rule.title}</h3><p>${rule.body}</p></div>
    </article>`).join('');

  const mistakes = BEGINNER_MISTAKES.map((item) => `
    <li class="mistake-row">
      <span class="mistake-row__problem">${item.problem}</span>
      <span class="mistake-row__arrow" aria-hidden="true">${icon('M5 12h14 M13 6l6 6-6 6', 17, { width: 1.8 })}</span>
      <span class="mistake-row__fix">${item.fix}</span>
    </li>`).join('');

  return `<div class="screen" data-screen-label="แผนรันมือใหม่">
    <div class="eyebrow">FIRST RUN PLAYBOOK</div>
    <h1 class="section-title">แผนรันมือใหม่</h1>
    <p class="lead">หน้านี้ไม่บอกให้จำบิลด์สำเร็จรูป แต่ช่วยให้แต่ละรันมีทิศทาง: ตั้งเป้าหนึ่งอย่าง วางแกนดาเมจหนึ่งปุ่ม แล้วเลือกของที่แก้ปัญหาปัจจุบัน</p>

    <section class="beginner-section" aria-labelledby="run-goal-title">
      <div class="beginner-heading">
        <div>
          <span class="beginner-heading__step">STEP 01</span>
          <h2 id="run-goal-title">เลือกเป้าหมายหลักของรัน</h2>
        </div>
        <p>หนึ่งรันทำได้หลายอย่าง แต่มี Primary Goal เดียวจะตัดสินใจง่ายกว่า</p>
      </div>
      <div class="run-goal-grid">${goals}</div>
    </section>

    <section class="beginner-section" aria-labelledby="preflight-title">
      <div class="preflight">
        <div class="preflight__summary">
          <span class="beginner-heading__step">STEP 02</span>
          <h2 id="preflight-title">เช็ก 4 ข้อก่อนออกจากบ้าน</h2>
          <p>ถ้าตอบได้ครบ คุณจะรู้ทันทีว่าควรเลือก Boon, Keepsake และประตูแบบไหน</p>
          <div class="preflight__count"><b>${completedItems}</b><span>/ ${BEGINNER_CHECKLIST.length} พร้อมแล้ว</span></div>
          <div class="preflight__meter" role="progressbar" aria-label="ความพร้อมก่อนออกรัน" aria-valuemin="0" aria-valuemax="4" aria-valuenow="${completedItems}">
            <span style="width:${completion}%"></span>
          </div>
          ${completedItems ? '<button type="button" class="preflight__reset" data-beginner-reset>เริ่มเช็กใหม่</button>' : ''}
        </div>
        <div class="preflight__list">${checklist}</div>
      </div>
    </section>

    <section class="beginner-section" aria-labelledby="door-title">
      <div class="beginner-heading beginner-heading--compact">
        <div>
          <span class="beginner-heading__step">STEP 03</span>
          <h2 id="door-title">เลือกประตูไหนดี?</h2>
        </div>
        <p>เลือกสถานการณ์ที่ใกล้กับรันตอนนี้ แล้วใช้ลำดับนี้เป็นเข็มทิศ ไม่ใช่กฎตายตัว</p>
      </div>
      <div class="scenario-tabs" aria-label="สถานการณ์ของรัน">${scenarioTabs}</div>
      <div class="door-decision" aria-live="polite">
        <div class="door-decision__intro">
          <span>สถานการณ์ตอนนี้</span>
          <h3>${selectedScenario.title}</h3>
          <p>${selectedScenario.summary}</p>
        </div>
        <ol class="door-priorities">${priorities}</ol>
      </div>
    </section>

    <section class="beginner-section" aria-labelledby="combat-title">
      <div class="beginner-heading">
        <div>
          <span class="beginner-heading__step">STEP 04</span>
          <h2 id="combat-title">ต่อสู้ด้วยวงจร 3 จังหวะ</h2>
        </div>
        <p>สิ่งที่ทำให้ไปได้ไกลขึ้นไม่ใช่กดเร็วกว่าเสมอ แต่คือเปิดช่องให้ตัวเองโดนน้อยลง</p>
      </div>
      <div class="combat-flow">${combatRules}</div>
    </section>

    <section class="beginner-section" aria-labelledby="review-title">
      <div class="beginner-heading beginner-heading--compact">
        <div>
          <span class="beginner-heading__step">AFTER THE RUN</span>
          <h2 id="review-title">เปลี่ยนสาเหตุที่ตายเป็นแผนรันถัดไป</h2>
        </div>
        <p>เลือกแก้ทีละหนึ่งพฤติกรรม จะเห็นพัฒนาการชัดกว่าการเปลี่ยนทุกอย่างพร้อมกัน</p>
      </div>
      <ul class="mistake-list">${mistakes}</ul>
      <div class="after-run">
        <div><span>01</span><p>ดาเมจหลักมาจากปุ่มไหน?</p></div>
        <div><span>02</span><p>เสีย HP มากที่สุดจากศัตรูหรือพฤติกรรมอะไร?</p></div>
        <div><span>03</span><p>รันถัดไปจะทดลองแก้เพียงข้อใด?</p></div>
      </div>
    </section>

    <aside class="god-mode-note">
      <div class="god-mode-note__icon">${icon('M12 3l7 3v5c0 4.6-2.8 8.3-7 10-4.2-1.7-7-5.4-7-10V6z M9 12l2 2 4-5', 28, { width: 1.6 })}</div>
      <div>
        <h2>ติดจุดเดิมจนไม่สนุก? เปิด God Mode ได้</h2>
        <p>God Mode เริ่มด้วยการลดดาเมจที่ได้รับ 20% และเพิ่มอีก 2% ทุกครั้งที่ Escape Attempt จบด้วยความตาย สูงสุด 80% เปิด–ปิดได้ใน Settings และไม่ปิดกั้นเนื้อหาหรือ Achievement</p>
      </div>
    </aside>
  </div>`;
}
