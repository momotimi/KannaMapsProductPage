// + Imports +

// Custom
import * as config from '../../config';
import * as utils from './utils';

const PRODUCT_LIST_PAGE = '/old-home';

const ICONS_MAP = {
  'side-effect': {
    agression:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8aa038_Nebenwirkungen__Agression.svg',
    appetitsteigerung:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8aa03d_Nebenwirkungen__Appetitsteigerung.svg',
    'appetitsminderung/-losigkeit':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8aa035_Nebenwirkungen__Appetitlosigkeit.svg',
    angst:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8aa00d_Nebenwirkungen__Angst.svg',
    vergesslichkeit:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9ff2_Nebenwirkungen__Vergesslichkeit.svg',
    unruhe:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8aa00c_Nebenwirkungen__Unruhe.svg',
    antriebslosigkeit:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9ff3_Nebenwirkungen__Antriebslosigkeit.svg',
    traurigkeit:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8aa017_Nebenwirkungen__Traurigkeit.svg',
    kreislaufbeschwerden:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8aa015_Nebenwirkungen__Kreislaufbeschwerden.svg',
    onbstipation:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9ff7_Nebenwirkungen__Obstipation.svg',
    schwindel:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fe5_Nebenwirkungen__Schwindel.svg',
    halluzination:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fef_Nebenwirkungen__Halluzination.svg',
    durchfall:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fcf_Nebenwirkungen__Durchfall.svg',
    reizempfindlichkeit:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8aa031_Nebenwirkungen__Reizempfindlichkeit.svg',
    schwitzen:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9ff0_Nebenwirkungen__Schwitzen.svg',
    derealisation:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8aa011_Nebenwirkungen__Derealisation.svg',
    atemwegsreizung:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9ff5_Nebenwirkungen__Atemwegsreizung.svg',
    euphorisch:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f3f_Effekte_Euphorisch.svg',
    entspannen:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f24_Effekte_Entspannt.svg',
    empathisch:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f3c_Effekte_Empathisch.svg',
    selbstbewusst:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f32_Effekte_Selbstbewusst.svg',
    motiviert:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f7d_Effekte_Motiviert.svg',
    indifferent:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f40_Effekte_Indifferent.svg',
    abgeschirmt:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f67_Effekte_Abgeschirmt.svg',
    'konzentrations und fokussierungsstörung':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f22_Effekte_Fokussiert.svg',
    aktiv:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f37_Effekte_Aktiv.svg',
    musikalisch:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f1f_Effekte_Musikalisch.svg',
    humorvoll:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f3d_Effekte_Humorvoll.svg',
    kreativ:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f21_Effekte_Kreativ.svg',
    sensibel:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f39_Effekte_Sensibel.svg',
  },
  taste: {
    salzig:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fad_Geschmack_Salzig.svg',
    pflanzlich:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9faf_Geschmack_Pflanzlich.svg',
    milchig:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fc0_Geschmack_Milchig.svg',
    chemisch:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fe6_Geschmack_Chemisch.svg',
    chili:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9faa_Geschmack_Chili.svg',
    'citrus mandarine':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f88_Citrus_Mandarine.svg',
    'citrus limette':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fa5_Citrus_Limette.svg',
    'fruchtig waldbeere':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f82_Fruchtig_Waldbeere.svg',
    pflaume:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fc7_Fruchtig_Pflaume.svg',
    citrus:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fa2_Citrus_Citrus.svg',
    'fruchtig ':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fa3_Fruchtig_Fruchtig.svg',
    'fruchtig melone':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fc9_Fruchtig_Melone.svg',
    'fruchtig pfirsich':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fa6_Fruchtig_Pfirsich.svg',
    'erdig walnuss':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f81_Erdig_Walnuss.svg',
    'fruchtig mango':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fa7_Fruchtig_Mango.svg',
    'fruchtig ananas':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f79_Fruchtig_Ananas.svg',
    'erdig tabak':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f7c_Erdig_Tabak.svg',
    'erdig tee':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fa0_Erdig_Tee.svg',
    nussig:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fc5_Erdig_Erdnuss.svg',
    'spicy ':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fa1_Spicy_Spicy.svg',
    'spicy chili':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f87_Spicy_Chilli.svg',
    'spicy minze':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f84_Spicy_Minze.svg',
    'spicy pfeffer':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f86_Spicy_Pfeffer.svg',
    'cremig butter':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fa9_Cremig_Butter.svg',
    'gassy meersalz':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f7a_Gassy_Meersalz.svg',
    'gassy ':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f66_Gassy_Gassy.svg',
    'cremig blauschimmel':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f68_Cremig_Blauschimmel.svg',
    'gassy ammoniak':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f80_Gassy_Ammoniak.svg',
    'blumig kirsche':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f6c_Blumig_Kirsche.svg',
    'blumig flieder':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f89_Blumig_Flieder.svg',
    'blumig zitronengras':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f83_Blumig_Zitronengras.svg',
    'gassy metallisch':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f61_Gassy_Metallisch.svg',
    'blumig jasmin':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f69_Blumig_Jasmin.svg',
    'cremig sahne':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f6b_Cremig_Sahne.svg',
    'citrus marakuja':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f85_Citrus_Marakuja.svg',
    blumig:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f5e_Blumig_Blumig.svg',
    'citrus zitrone':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f65_Citrus_Zitrone.svg',
    cremig:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f6a_Cremig_Cremig.svg',
    kräuter:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fc8_Qualit%C3%A4t_Sehr%20trocken.svg',
    gewürze:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fc3_Geschmack_Gew%C3%BCrze.svg',
  },
  quality: {
    'kleine buds':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fcb_Qualit%C3%A4t_Zu%20kleine%20Buds.svg',
    'genau richtig':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9ffa_Qualit%C3%A4t_Genau%20richtig.svg',
    'hoher anteil stängel':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fe8_Qualit%C3%A4t_Hoher%20Anteil%20Stengel.svg',
    schimmelig:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fc4_Qualit%C3%A4t_Schimmel.svg',
    'zu fest':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fca_Qualit%C3%A4t_Sehr%20fest.svg',
    'große buds':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fc2_Qualit%C3%A4t_Zu%20gro%C3%9Fe%20Buds.svg',
    'zu klebrig':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fcc_Qualit%C3%A4t_Sehr%20klebrig.svg',
    'samen in der blüte':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fbf_Qualit%C3%A4t_Samen%20in%20der%20Bl%C3%BCte.svg',
    'zu trocken':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fc8_Qualit%C3%A4t_Sehr%20trocken.svg',
  },
  activity: {
    'geistige arbeit':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f63_Aktivit%C3%A4ten__Geistige%20Arbeit.svg',
    schlafen:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f62_Aktivit%C3%A4ten__Schlafen.svg',
    'körperliche arbeit':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f7f_Aktivit%C3%A4ten__K%C3%B6rperliche%20Arbeit.svg',
    feiern:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f5f_Aktivit%C3%A4ten__Feiern.svg',
    entspannen:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f5c_Aktivit%C3%A4ten__Entspannen.svg',
    'musik/fernsehen/spiele':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f7b_Aktivit%C3%A4ten__Musik-TV-Spiele.svg',
    'soziale kontakte':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f64_Aktivit%C3%A4ten__Soziale%20Kontakte.svg',
    sport:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f3e_Aktivit%C3%A4ten__Sport.svg',
    haushalt:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f3b_Aktivit%C3%A4ten__Hausarbeit.svg',
    'kreative arbeit':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f60_Aktivit%C3%A4ten__Kreative%20Arbeit.svg',
    'essen/trinken':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f41_Aktivit%C3%A4ten__Essen-Trinken.svg',
    lernen:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f36_Aktivit%C3%A4ten__Lernen.svg',
  },
  effect: {
    abgeschirmt:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f67_Effekte_Abgeschirmt.svg',
    begeisterungsfähig:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f38_Effekte_Begeisterungsf%C3%A4hig.svg',
    aktiv:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f38_Effekte_Begeisterungsf%C3%A4hig.svg',
    empathisc:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f3c_Effekte_Empathisch.svg',
    fokussiert:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f22_Effekte_Fokussiert.svg',
    gesprächig:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f34_Effekte_Gespr%C3%A4chig.svg',
    glücklich:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f35_Effekte_Gl%C3%BCcklich.svg',
    humorvoll:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f3d_Effekte_Humorvoll.svg',
    indifferent:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f3d_Effekte_Humorvoll.svg',
    'in sich gekehrt':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f33_Effekte_In%20sich%20gekehrt.svg',
    'kreative arbeit':
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f33_Effekte_In%20sich%20gekehrt.svg',
    motiviert:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f7d_Effekte_Motiviert.svg',
    selbstbewusst:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f32_Effekte_Selbstbewusst.svg',
    sensibel:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9f39_Effekte_Sensibel.svg',
    schläfrig:
      'https://uploads-ssl.webflow.com/65b512a06166d6269a8a9cc3/65b512a06166d6269a8a9fac_EffektSchla%CC%88frig.svg',
  },
} as const;

// + Exports +
export default function (showSkeleton: boolean) {
  // Values
  const state = window.KannaMaps;
  const detailsEl: HTMLElement = state.elements.productDetails;
  const communityEl: HTMLElement = state.elements.communityData;
  const communityFullEl: HTMLElement = state.elements.communityDataFull;
  const apothecariesPopupEl: HTMLElement = state.elements.apothecariesPopup;
  const topApothecariesListEl: HTMLElement = state.elements.topApothecariesList;
  const allApothecariesListEl: HTMLElement = state.elements.allApothecariesList;
  const data = state.productData;
  const skeletonFadeDuration = parseFloat(
    config.SKELETON_FADE_DURATION.toString()
  );

  // + Guard +

  // Elements exist
  if (!utils.isElement(detailsEl)) {
    console.error(
      `KannaMaps -> render.ts: Couldn't find list and/or template!`,
      detailsEl
    );
    return false;
  }

  // Render new product data
  if (!showSkeleton) render();

  // + + + Show / hide skeleton + + +

  // Define
  const cssHide = { opacity: 0, display: 'none', pointerEvents: 'none' };
  const cssShow = {
    opacity: 1,
    display: 'block',
    pointerEvents: 'auto',
  };

  // GSAP
  let progress = 1;
  if (state.gsap) {
    progress = state.gsap.progress();
    state.gsap.kill();
  }
  const tl = gsap.timeline({ paused: true });
  state.gsap = tl;

  // Loop
  const skeletons: HTMLElement[] = [];
  const skeleton: HTMLElement | null =
    document.querySelector('[c-el="skeleton"]');

  // Push
  if (skeleton) skeletons.push(skeleton);

  // Animate
  tl.fromTo(
    skeletons,
    showSkeleton ? cssHide : cssShow,
    showSkeleton
      ? { ...cssShow, duration: skeletonFadeDuration, ease: 'power1.inOut' }
      : { ...cssHide, duration: skeletonFadeDuration, ease: 'power1.inOut' }
  );

  // Play
  tl.progress(1 - progress);
  tl.play();

  // + + + Render function + + +
  function render() {
    // Clear content
    console.log('rendering');
    renderProductDetails(detailsEl, data);
    renderCommunityData(communityEl, data);
    renderCommunityDataFull(communityFullEl, data);
    renderApothecariesPopup(apothecariesPopupEl, data);
    renderTopApothecaries(topApothecariesListEl, data);
    renderAllApothecaries(allApothecariesListEl, data);
  }
}

function renderTopApothecaries(parentEl: HTMLElement, data: any) {
  const apothecaries = getApothecaries(data.data.apothecaries_data.detailed);
  const apothecaryListEl = parentEl;
  const templateEl = apothecaryListEl
    ?.querySelector<HTMLElement>('[c-el="apothecary"]')
    ?.cloneNode(true) as HTMLElement | undefined;
  if (!apothecaryListEl || !templateEl) return;

  apothecaryListEl.innerHTML = '';

  if (apothecaries.length === 0) {
    apothecaryListEl.style.display = 'none';
    const emptyStateEls = document.querySelectorAll<HTMLElement>(
      '[c-el="apo-list-empty-state"]'
    );
    emptyStateEls.forEach(el => {
      el.style.display = 'block';
    });
  }

  // loop through top 4 apothecaries
  apothecaries.slice(0, 4).forEach((apothecary: any) => {
    const apothecaryEl = templateEl.cloneNode(true) as HTMLElement;
    const nameEl = apothecaryEl.querySelector<HTMLElement>('[c-el="name"]');
    const cityEl = apothecaryEl.querySelector<HTMLElement>('[c-el="city"]');
    const priceEl = apothecaryEl.querySelector<HTMLElement>('[c-el="price"]');
    const availableEl =
      apothecaryEl.querySelector<HTMLElement>('[c-el="available"]');
    const unavailableEl = apothecaryEl.querySelector<HTMLElement>(
      '[c-el="unavailable"]'
    );
    const apoLinkEls =
      apothecaryEl.querySelectorAll<HTMLAnchorElement>('a[c-el="apo-link"]');

    if (
      !nameEl ||
      !cityEl ||
      !priceEl ||
      !availableEl ||
      !unavailableEl ||
      !apoLinkEls
    )
      return;

    (apothecaryEl as HTMLAnchorElement).href = apothecary._vendor.live_url;
    nameEl.innerHTML = apothecary._vendor.name || 'n.v.';
    cityEl.innerHTML = apothecary._vendor.Stadt || 'n.v.';
    priceEl.innerHTML = apothecary.price ? apothecary.price.toFixed(2) : 'n.v.';
    availableEl.style.display = apothecary.available ? 'flex' : 'none';
    unavailableEl.style.display = apothecary.available ? 'none' : 'flex';

    apoLinkEls.forEach(el => {
      el.href = apothecary._vendor.live_url;
    });

    apothecaryListEl.appendChild(apothecaryEl);
  });

  const event = new CustomEvent('KannaMaps:build');
  window.dispatchEvent(event);
}

function renderAllApothecaries(parentEl: HTMLElement, data: any) {
  const apothecaries = getApothecaries(data.data.apothecaries_data.detailed);
  const apothecaryListEl = parentEl;
  const templateEl = apothecaryListEl
    ?.querySelector<HTMLElement>('[c-el="apothecary"]')
    ?.cloneNode(true) as HTMLElement | undefined;
  if (!apothecaryListEl || !templateEl) return;

  apothecaryListEl.innerHTML = '';

  // loop through top 4 apothecaries
  apothecaries.forEach((apothecary: any) => {
    const apothecaryEl = templateEl.cloneNode(true) as HTMLElement;
    apothecaryEl.setAttribute('data-apothecary', JSON.stringify(apothecary));
    const nameEl = apothecaryEl.querySelector<HTMLElement>('[c-el="name"]');
    const priceEl = apothecaryEl.querySelector<HTMLElement>('[c-el="price"]');
    const availableEl =
      apothecaryEl.querySelector<HTMLElement>('[c-el="available"]');
    const unavailableEl = apothecaryEl.querySelector<HTMLElement>(
      '[c-el="unavailable"]'
    );
    const apoLinkEls =
      apothecaryEl.querySelectorAll<HTMLAnchorElement>('a[c-el="apo-link"]');
    const addressEl =
      apothecaryEl.querySelector<HTMLElement>('[c-el="address"]');
    const zipAndCityEl = apothecaryEl.querySelector<HTMLElement>(
      '[c-el="zip-and-city"]'
    );
    const emailEl = apothecaryEl.querySelector<HTMLElement>('[c-el="email"]');
    const emailLinkEl = apothecaryEl.querySelector<HTMLAnchorElement>(
      '[c-el="email-link"]'
    );
    const phoneEl = apothecaryEl.querySelector<HTMLElement>('[c-el="phone"]');
    const phoneLinkEl = apothecaryEl.querySelector<HTMLAnchorElement>(
      '[c-el="phone-link"]'
    );

    if (
      !nameEl ||
      !priceEl ||
      !availableEl ||
      !unavailableEl ||
      !apoLinkEls ||
      !addressEl ||
      !zipAndCityEl ||
      !emailEl ||
      !phoneEl ||
      !emailLinkEl ||
      !phoneLinkEl
    )
      return;

    apoLinkEls.forEach(el => {
      el.href = apothecary._vendor.live_url;
    });
    nameEl.innerHTML = apothecary._vendor.name || 'n.v.';
    priceEl.innerHTML = apothecary.price ? apothecary.price.toFixed(2) : 'n.v.';
    availableEl.style.display = apothecary.available ? 'flex' : 'none';
    unavailableEl.style.display = apothecary.available ? 'none' : 'flex';
    addressEl.innerHTML = apothecary._vendor.strasse_und_nummer || 'n.v.';
    zipAndCityEl.innerHTML =
      `${apothecary._vendor.PLZ} ${apothecary._vendor.Stadt}` || 'n.v.';
    emailEl.innerHTML = apothecary._vendor['E-Mail'] || 'n.v.';
    emailLinkEl.href = `mailto:${apothecary._vendor['E-Mail']}`;
    phoneEl.innerHTML = apothecary._vendor.Telefon || 'n.v.';
    phoneLinkEl.href = `tel:${apothecary._vendor.Telefon}`;

    apothecaryListEl.appendChild(apothecaryEl);
  });
}

function renderApothecariesPopup(parentEl: HTMLElement, data: any) {
  const apothecaries = data.data.apothecaries_data.detailed;
  const apothecaryListEl = parentEl.querySelector<HTMLElement>(
    '[c-el="apothecary-list"]'
  );
  const templateEl = apothecaryListEl
    ?.querySelector<HTMLElement>('[c-el="apothecary"]')
    ?.cloneNode(true) as HTMLElement | undefined;
  const typeEl = parentEl.querySelector<HTMLElement>('[c-el="type"]');
  const strainEl = parentEl.querySelector<HTMLElement>('[c-el="strain"]');

  if (!apothecaryListEl || !templateEl || !typeEl || !strainEl) return;

  typeEl.innerHTML = data.data?.type || 'n.v.';
  strainEl.innerHTML = data.data?.strain || 'n.v.';
  apothecaryListEl.innerHTML = '';

  apothecaries.forEach((apothecary: any) => {
    const apothecaryEl = templateEl.cloneNode(true) as HTMLElement;
    const nameEl = apothecaryEl.querySelector<HTMLElement>('[c-el="name"]');
    const priceEl = apothecaryEl.querySelector<HTMLElement>('[c-el="price"]');
    const unavailableDotEl = apothecaryEl.querySelector<HTMLElement>(
      '[c-el="unavailable-dot"]'
    );

    if (!nameEl || !priceEl || !unavailableDotEl) return;

    nameEl.innerHTML = apothecary._vendor.name || 'n.v.';
    priceEl.innerHTML = apothecary.price ? apothecary.price.toString() : 'n.v.';
    unavailableDotEl.style.display = apothecary.available ? 'none' : 'block';

    apothecaryListEl.appendChild(apothecaryEl);
  });
}

function renderProductDetails(parentEl: HTMLElement, data: any) {
  // availability
  const isProductAvialable =
    data.data.apothecaries_data.availability_status === 'available';
  const availableEl = parentEl.querySelector<HTMLElement>('[c-el="available"]');
  const notAvailableEl = parentEl.querySelector<HTMLElement>(
    '[c-el="not-available"]'
  );

  if (isProductAvialable) {
    notAvailableEl?.classList.add('hide');
  } else {
    availableEl?.classList.add('hide');
  }

  // terpendichte
  const terpendichte = data.data.detailed['Terpendichte—mg/g'];
  const terpendichteEl = parentEl.querySelector<HTMLElement>(
    '[c-el="terpendichte"]'
  );

  if (terpendichteEl) {
    terpendichteEl.innerHTML = terpendichte ? `${terpendichte} mg/g` : 'n.v.';
  }

  // lowest/highest price
  const minPrice = data.data.apothecaries_data.price_min;
  const maxPrice = data.data.apothecaries_data.price_max;
  const minPriceEl = parentEl.querySelector<HTMLElement>('[c-el="min-price"]');
  const maxPriceEl = parentEl.querySelector<HTMLElement>('[c-el="max-price"]');

  if (minPriceEl) {
    minPriceEl.innerHTML = minPrice ? minPrice : 'n.v.';
  }

  if (maxPriceEl) {
    maxPriceEl.innerHTML = maxPrice ? maxPrice : 'n.v.';
  }

  // terpenes
  const terpenes = getTerpenes(data.data.detailed);
  const terpenesEls =
    parentEl.querySelectorAll<HTMLElement>('[c-el="terpene"]');

  terpenesEls.forEach((el, index) => {
    const terpene = terpenes[index];
    const terpeneNameEl = el.querySelector<HTMLElement>('[c-el="name"]');
    const terpeneColorEl = el.querySelector<HTMLElement>('[c-el="color"]');
    const terpenePercentageEl = el.querySelector<HTMLElement>(
      '[c-el="percentage"]'
    );

    if (!terpeneNameEl || !terpeneColorEl || !terpenePercentageEl) return;

    terpeneColorEl.classList.remove(
      'alpha-humulene',
      'linalool',
      'd-limonene',
      'fenchyl'
    );

    if (terpene) {
      terpeneNameEl.innerHTML = terpene.key;
      terpeneColorEl.classList.add(terpene.key.toLowerCase().replace(' ', '-'));
      terpenePercentageEl.innerHTML = `${terpene.percentage}%`;
    } else {
      terpeneNameEl.innerHTML = 'n.v.';
      terpenePercentageEl.innerHTML = '-';
    }
  });

  // top area of application
  const topAreaOfApplications = getAreasOfApplication(
    data.data.community_data.detailed.area_of_application
  );
  const topAreaOfApplicationsEls = parentEl.querySelectorAll<HTMLElement>(
    '[c-el="area-of-application"]'
  );

  if (topAreaOfApplicationsEls) {
    topAreaOfApplicationsEls.forEach((el, index) => {
      const topAreaOfApplication = topAreaOfApplications[index];
      const topAreaOfApplicationEl =
        el.querySelector<HTMLElement>('[c-el="name"]');
      const topAreaOfApplicationPercentageEl = el.querySelector<HTMLElement>(
        '[c-el="percentage"]'
      );

      if (!topAreaOfApplicationEl || !topAreaOfApplicationPercentageEl) return;

      topAreaOfApplicationEl.innerHTML = topAreaOfApplication
        ? topAreaOfApplication.name
        : 'n.v.';
      topAreaOfApplicationPercentageEl.innerHTML = topAreaOfApplication
        ? `(${topAreaOfApplication.percentage}%)`
        : '(-)';
    });
  }

  // top effects
  const topEffects = getPositiveEffects(
    data.data.community_data.detailed.positive_effects
  );
  const topEffectsEls =
    parentEl.querySelectorAll<HTMLElement>('[c-el="effect"]');

  if (topEffectsEls) {
    topEffectsEls.forEach((el, index) => {
      const topEffect = topEffects[index];
      const topEffectEl = el.querySelector<HTMLElement>('[c-el="name"]');
      const topEffectPercentageEl = el.querySelector<HTMLElement>(
        '[c-el="percentage"]'
      );
      const topEffectIconEl = el.querySelector<HTMLImageElement>('img');

      if (!topEffectEl || !topEffectPercentageEl || !topEffectIconEl) return;

      topEffectEl.innerHTML = topEffect ? topEffect.name : 'n.v.';
      topEffectPercentageEl.innerHTML = topEffect
        ? `(${topEffect.percentage}%)`
        : '(-)';
      topEffectIconEl.src =
        (topEffect && ICONS_MAP.effect[topEffect.name.toLowerCase()]) ||
        topEffectIconEl.src;
    });
  }

  // top taste
  const topTaste = getTastes(data.data.community_data.detailed.taste)[0];
  const topTasteEl = parentEl.querySelector<HTMLElement>('[c-el="taste"]');

  if (topTasteEl) {
    topTasteEl.innerHTML = topTaste ? topTaste.name : 'n.v.';
  }

  // review stars
  const rating = data.data.community_data.rating;
  const ratings = data.data.community_data.ratings;
  const ratingStarsEl = parentEl.querySelector<HTMLElement>(
    '[c-el="rating-stars"]'
  );

  if (ratingStarsEl) {
    renderStars(ratingStarsEl, rating, ratings);
  }
}

function renderStars(parentEl: HTMLElement, rating: number, ratings: number) {
  const starsEls = parentEl?.querySelectorAll<HTMLElement>('[c-el="star"]');
  const ratingCountEl = parentEl?.querySelector<HTMLElement>('[c-el="count"]');

  if (starsEls && rating) {
    starsEls.forEach((el, index) => {
      const offset = Math.round((Math.min(index + 1, rating) - index) * 100);

      if (offset < 0) return;

      const gradientId = `gradient-${getRandomID()}-${index}`;
      const svgEl = el.querySelector<HTMLElement>('svg');

      if (!svgEl) return;

      svgEl
        .querySelector<HTMLElement>('linearGradient')
        ?.setAttribute('id', gradientId);

      // get last stop
      const stopEls = svgEl.querySelectorAll<HTMLElement>('stop');
      const lastStopEl = stopEls[stopEls.length - 1];
      const secondToLastStopEl = stopEls[stopEls.length - 2];

      if (!lastStopEl || !secondToLastStopEl) return;

      lastStopEl.setAttribute('offset', `${offset}%`);
      secondToLastStopEl.setAttribute('offset', `${offset}%`);

      // set id on path
      const pathEl = svgEl.querySelector<HTMLElement>('path');

      if (!pathEl) return;

      pathEl.setAttribute('fill', `url(#${gradientId})`);
    });
  }

  if (ratingCountEl) {
    ratingCountEl.innerHTML = ratings.toString();
  }
}

function renderCommunityDataFull(parentEl: HTMLElement, data: any) {
  // effects
  const effects = getPositiveEffects(
    data.data.community_data.detailed.positive_effects
  );
  const effectTemplateEl =
    parentEl.querySelector<HTMLElement>('[c-el="effect"]');

  if (effectTemplateEl) {
    const parentEl = effectTemplateEl.parentElement;

    effects.forEach((effect, index) => {
      const effectEl = effectTemplateEl.cloneNode(true) as HTMLElement;
      const effectNameEl = effectEl.querySelector<HTMLElement>('[c-el="name"]');
      const effectPercentageEl = effectEl.querySelector<HTMLElement>(
        '[c-el="percentage"]'
      );

      if (!effectNameEl || !effectPercentageEl) return;

      effectNameEl.innerHTML = effect.name + ' ';
      effectPercentageEl.innerHTML = `(${effect.percentage}%)`;
      parentEl?.appendChild(effectEl);
    });

    effectTemplateEl.remove();
  }

  // side effects
  const sideEffects = getSideEffects(
    data.data.community_data.detailed.side_effects
  );
  const sideEffectTemplateEl = parentEl.querySelector<HTMLElement>(
    '[c-el="side-effect"]'
  );

  if (sideEffectTemplateEl) {
    const parentEl = sideEffectTemplateEl.parentElement;

    sideEffects.forEach((sideEffect, index) => {
      const sideEffectEl = sideEffectTemplateEl.cloneNode(true) as HTMLElement;
      const sideEffectNameEl =
        sideEffectEl.querySelector<HTMLElement>('[c-el="name"]');
      const sideEffectPercentageEl = sideEffectEl.querySelector<HTMLElement>(
        '[c-el="percentage"]'
      );

      if (!sideEffectNameEl || !sideEffectPercentageEl) return;

      sideEffectNameEl.innerHTML = sideEffect.name + ' ';
      sideEffectPercentageEl.innerHTML = `(${sideEffect.percentage}%)`;
      parentEl?.appendChild(sideEffectEl);
    });

    sideEffectTemplateEl.remove();
  }

  // activities
  const activities = getActivities(
    data.data.community_data.detailed.activities
  );
  const activitiyTemplateEl =
    parentEl.querySelector<HTMLElement>('[c-el="activity"]');

  if (activitiyTemplateEl) {
    const parentEl = activitiyTemplateEl.parentElement;

    activities.forEach((activity, index) => {
      const activityEl = activitiyTemplateEl.cloneNode(true) as HTMLElement;
      const activityNameEl =
        activityEl.querySelector<HTMLElement>('[c-el="name"]');
      const activityPercentageEl = activityEl.querySelector<HTMLElement>(
        '[c-el="percentage"]'
      );

      if (!activityNameEl || !activityPercentageEl) return;

      activityNameEl.innerHTML = activity.name + ' ';
      activityPercentageEl.innerHTML = `(${activity.percentage}%)`;
      parentEl?.appendChild(activityEl);
    });

    activitiyTemplateEl.remove();
  }

  // tastes
  const tastes = getTastes(data.data.community_data.detailed.taste);
  const tasteTemplateEl = parentEl.querySelector<HTMLElement>('[c-el="taste"]');

  if (tasteTemplateEl) {
    const parentEl = tasteTemplateEl.parentElement;

    tastes.forEach((taste, index) => {
      const tasteEl = tasteTemplateEl.cloneNode(true) as HTMLElement;
      const tasteNameEl = tasteEl.querySelector<HTMLElement>('[c-el="name"]');
      const tastePercentageEl = tasteEl.querySelector<HTMLElement>(
        '[c-el="percentage"]'
      );

      if (!tasteNameEl || !tastePercentageEl) return;

      tasteNameEl.innerHTML = taste.name + ' ';
      tastePercentageEl.innerHTML = `(${taste.percentage}%)`;
      parentEl?.appendChild(tasteEl);
    });

    tasteTemplateEl.remove();
  }

  // areas of application
  const areasOfApplication = getAreasOfApplication(
    data.data.community_data.detailed.area_of_application
  );
  const areaOfApplicationTemplateEl = parentEl.querySelector<HTMLElement>(
    '[c-el="area-of-application"]'
  );

  if (areaOfApplicationTemplateEl) {
    const parentEl = areaOfApplicationTemplateEl.parentElement;

    areasOfApplication.forEach((areaOfApplication, index) => {
      const areaOfApplicationEl = areaOfApplicationTemplateEl.cloneNode(
        true
      ) as HTMLElement;
      const areaOfApplicationNameEl =
        areaOfApplicationEl.querySelector<HTMLElement>('[c-el="name"]');
      const areaOfApplicationPercentageEl =
        areaOfApplicationEl.querySelector<HTMLElement>('[c-el="percentage"]');

      if (!areaOfApplicationNameEl || !areaOfApplicationPercentageEl) return;

      areaOfApplicationNameEl.innerHTML = areaOfApplication.name + ' ';
      areaOfApplicationPercentageEl.innerHTML = `(${areaOfApplication.percentage}%)`;
      parentEl?.appendChild(areaOfApplicationEl);
    });

    areaOfApplicationTemplateEl.remove();
  }

  // qualities
  const qualities = getQualities(data.data.community_data.detailed.quality);
  const qualityTemplateEl =
    parentEl.querySelector<HTMLElement>('[c-el="quality"]');

  if (qualityTemplateEl) {
    const parentEl = qualityTemplateEl.parentElement;

    qualities.forEach((quality, index) => {
      const qualityEl = qualityTemplateEl.cloneNode(true) as HTMLElement;
      const qualityNameEl =
        qualityEl.querySelector<HTMLElement>('[c-el="name"]');
      const qualityPercentageEl = qualityEl.querySelector<HTMLElement>(
        '[c-el="percentage"]'
      );

      if (!qualityNameEl || !qualityPercentageEl) return;

      qualityNameEl.innerHTML = quality.name + ' ';
      qualityPercentageEl.innerHTML = `(${quality.percentage}%)`;
      parentEl?.appendChild(qualityEl);
    });

    qualityTemplateEl.remove();
  }
}

function renderCommunityData(parentEl: HTMLElement, data: any) {
  // effects
  console.log('rendering community data');
  const effects = getPositiveEffects(
    data.data.community_data.detailed.positive_effects
  );
  const effectsEls = parentEl.querySelectorAll<HTMLElement>('[c-el="effect"]');

  effectsEls.forEach((el, index) => {
    const effect = effects[index];
    const effectNameEl = el.querySelector<HTMLElement>('[c-el="name"]');
    const effectPercentageEl = el.querySelector<HTMLElement>(
      '[c-el="percentage"]'
    );
    const effectLinkEl = el.querySelector<HTMLAnchorElement>('[c-el="link"]');
    const effectIconEl = el.querySelector<HTMLImageElement>('img');

    if (!effectNameEl || !effectPercentageEl || !effectLinkEl || !effectIconEl)
      return;

    if (effect) {
      effectNameEl.innerHTML = effect.name;
      effectPercentageEl.innerHTML = `(${effect.percentage}%)`;
      effectLinkEl.href = `${PRODUCT_LIST_PAGE}/?effekt=${slugify(
        effect.name
      )}`;
      effectIconEl.src =
        ICONS_MAP.effect[effect.name.toLowerCase()] || effectIconEl.src;
    } else {
      effectNameEl.innerHTML = 'n.v.';
      effectPercentageEl.innerHTML = '(-)';
    }
  });

  // side effects
  const sideEffects = getSideEffects(
    data.data.community_data.detailed.side_effects
  );
  const sideEffectsEls = parentEl.querySelectorAll<HTMLElement>(
    '[c-el="side-effect"]'
  );

  sideEffectsEls.forEach((el, index) => {
    const sideEffect = sideEffects[index];
    const sideEffectNameEl = el.querySelector<HTMLElement>('[c-el="name"]');
    const sideEffectPercentageEl = el.querySelector<HTMLElement>(
      '[c-el="percentage"]'
    );
    const sideEffectLinkEl =
      el.querySelector<HTMLAnchorElement>('[c-el="link"]');
    const sideEffectIconEl = el.querySelector<HTMLImageElement>('img');

    if (
      !sideEffectNameEl ||
      !sideEffectPercentageEl ||
      !sideEffectLinkEl ||
      !sideEffectIconEl
    )
      return;

    if (sideEffect) {
      sideEffectNameEl.innerHTML = sideEffect.name;
      sideEffectPercentageEl.innerHTML = `(${sideEffect.percentage}%)`;
      sideEffectLinkEl.href = `${PRODUCT_LIST_PAGE}/?nebenwirkung=${slugify(
        sideEffect.name
      )}`;
      sideEffectIconEl.src =
        ICONS_MAP['side-effect']?.[sideEffect.name.toLowerCase()] ||
        sideEffectIconEl.src;
    } else {
      sideEffectNameEl.innerHTML = 'n.v.';
      sideEffectPercentageEl.innerHTML = '(-)';
    }
  });

  // activities
  const activities = getActivities(
    data.data.community_data.detailed.activities
  );
  const activitiesEls =
    parentEl.querySelectorAll<HTMLElement>('[c-el="activity"]');

  activitiesEls.forEach((el, index) => {
    const activity = activities[index];
    const activityNameEl = el.querySelector<HTMLElement>('[c-el="name"]');
    const activityPercentageEl = el.querySelector<HTMLElement>(
      '[c-el="percentage"]'
    );
    const activityLinkEl = el.querySelector<HTMLAnchorElement>('[c-el="link"]');
    const activityIconEl = el.querySelector<HTMLImageElement>('img');

    if (
      !activityNameEl ||
      !activityPercentageEl ||
      !activityLinkEl ||
      !activityIconEl
    )
      return;

    if (activity) {
      activityNameEl.innerHTML = activity.name;
      activityPercentageEl.innerHTML = `(${activity.percentage}%)`;
      activityLinkEl.href = `${PRODUCT_LIST_PAGE}/?aktivität=${slugify(
        activity.name
      )}`;
      activityIconEl.src =
        ICONS_MAP.activity[activity.name.toLowerCase()] || activityIconEl.src;
    } else {
      activityNameEl.innerHTML = 'n.v.';
      activityPercentageEl.innerHTML = '(-)';
    }
  });

  // tastes
  const tastes = getTastes(data.data.community_data.detailed.taste);
  const tastesEls = parentEl.querySelectorAll<HTMLElement>('[c-el="taste"]');

  tastesEls.forEach((el, index) => {
    const taste = tastes[index];
    const tasteNameEl = el.querySelector<HTMLElement>('[c-el="name"]');
    const tastePercentageEl = el.querySelector<HTMLElement>(
      '[c-el="percentage"]'
    );
    const tasteLinkEl = el.querySelector<HTMLAnchorElement>('[c-el="link"]');
    const tasteIconEl = el.querySelector<HTMLImageElement>('img');

    if (!tasteNameEl || !tastePercentageEl || !tasteLinkEl || !tasteIconEl)
      return;

    if (taste) {
      tasteNameEl.innerHTML = taste.name;
      tastePercentageEl.innerHTML = `(${taste.percentage}%)`;
      tasteLinkEl.href = `${PRODUCT_LIST_PAGE}/?geschmack=${slugify(
        taste.name
      )}`;
      tasteIconEl.src =
        ICONS_MAP.taste[taste.name.toLowerCase()] || tasteIconEl.src;
    } else {
      tasteNameEl.innerHTML = 'n.v.';
      tastePercentageEl.innerHTML = '(-)';
    }
  });

  // areas of application
  const areasOfApplication = getAreasOfApplication(
    data.data.community_data.detailed.area_of_application
  );
  const areasOfApplicationEls = parentEl.querySelectorAll<HTMLElement>(
    '[c-el="area-of-application"]'
  );

  areasOfApplicationEls.forEach((el, index) => {
    const areaOfApplication = areasOfApplication[index];
    const areaOfApplicationNameEl =
      el.querySelector<HTMLElement>('[c-el="name"]');
    const areaOfApplicationPercentageEl = el.querySelector<HTMLElement>(
      '[c-el="percentage"]'
    );
    const areaOfApplicationLinkEl =
      el.querySelector<HTMLAnchorElement>('[c-el="link"]');
    const areaOfApplicationIconEl = el.querySelector<HTMLImageElement>('img');

    if (
      !areaOfApplicationNameEl ||
      !areaOfApplicationPercentageEl ||
      !areaOfApplicationLinkEl ||
      !areaOfApplicationIconEl
    )
      return;

    if (areaOfApplication) {
      areaOfApplicationNameEl.innerHTML = areaOfApplication.name;
      areaOfApplicationPercentageEl.innerHTML = `(${areaOfApplication.percentage}%)`;
      areaOfApplicationLinkEl.href = `${PRODUCT_LIST_PAGE}/?anwendungsgebiet=${slugify(
        areaOfApplication.name
      )}`;
      areaOfApplicationIconEl.src =
        ICONS_MAP['area-of-application']?.[
          areaOfApplication.name.toLowerCase()
        ] || areaOfApplicationIconEl.src;
    } else {
      areaOfApplicationNameEl.innerHTML = 'n.v.';
      areaOfApplicationPercentageEl.innerHTML = '(-)';
    }
  });

  // qualities
  const qualities = getQualities(data.data.community_data.detailed.quality);
  const qualitiesEls =
    parentEl.querySelectorAll<HTMLElement>('[c-el="quality"]');

  qualitiesEls.forEach((el, index) => {
    const quality = qualities[index];
    const qualityNameEl = el.querySelector<HTMLElement>('[c-el="name"]');
    const qualityPercentageEl = el.querySelector<HTMLElement>(
      '[c-el="percentage"]'
    );
    const qualityLinkEl = el.querySelector<HTMLAnchorElement>('[c-el="link"]');
    const qualityIconEl = el.querySelector<HTMLImageElement>('img');

    if (
      !qualityNameEl ||
      !qualityPercentageEl ||
      !qualityLinkEl ||
      !qualityIconEl
    )
      return;

    if (quality) {
      qualityNameEl.innerHTML = quality.name;
      qualityPercentageEl.innerHTML = `(${quality.percentage}%)`;
      qualityLinkEl.href = `${PRODUCT_LIST_PAGE}/?qualität=${slugify(
        quality.name
      )}`;
      qualityIconEl.src =
        ICONS_MAP.quality[quality.name.toLowerCase()] || qualityIconEl.src;
    } else {
      qualityNameEl.innerHTML = 'n.v.';
      qualityPercentageEl.innerHTML = '(-)';
    }
  });

  // apothecaries
  // top 4 apothecaries
  const apothecaries = getApothecaries(data.data.apothecaries_data.detailed);

  // all apothecaries

  // review stars
  const rating = data.data.community_data.rating;
  const ratings = data.data.community_data.ratings;
  const ratingStarsEl = parentEl.querySelector<HTMLElement>(
    '[c-el="rating-stars"]'
  );

  if (ratingStarsEl) {
    renderStars(ratingStarsEl, rating, ratings);
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '+') // Replace spaces with +
    .replace(/--+/g, '-') // Replace multiple - with single -
    .trim();
}

function getTerpenes(data: Record<string, any>) {
  const keysToFilterOut = [
    'Sorte',
    'Kultivar',
    'Genetik',
    'Gehalt—THC',
    'Gehalt—CBD',
    'Hersteller',
    'Bestrahlung',
    'Terpendichte—mg/g',
  ];

  const terpenes = Object.keys(data)
    .filter(key => !keysToFilterOut.includes(key) && data[key] !== null)
    .map(key => ({
      key: utils.capitalizeEveryWord(key.replace('—', ' ')),
      value: data[key],
      percentage: 0,
    }));

  terpenes.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
  const totalTerpenes = terpenes.reduce(
    (acc, terpene) => acc + parseFloat(terpene.value),
    0
  );

  terpenes.forEach(terpene => {
    terpene.percentage = Math.round(
      (parseFloat(terpene.value) / totalTerpenes) * 100
    );
  });

  return terpenes;
}

function getPositiveEffects(data: any[]) {
  const effects = data;
  const totalConfirmations = effects.reduce(
    (acc, effect) => acc + effect.total_confirmations,
    0
  );
  effects.sort((a, b) => b.total_confirmations - a.total_confirmations);
  const effectsWithPercentage = effects.map(effect => ({
    ...effect,
    percentage: Math.round(
      (effect.total_confirmations / totalConfirmations) * 100
    ),
  }));

  return effectsWithPercentage;
}

function getSideEffects(data: any[]) {
  const effects = data;
  const totalConfirmations = effects.reduce(
    (acc, effect) => acc + effect.total_confirmations,
    0
  );
  effects.sort((a, b) => b.total_confirmations - a.total_confirmations);
  const effectsWithPercentage = effects.map(effect => ({
    ...effect,
    percentage: Math.round(
      (effect.total_confirmations / totalConfirmations) * 100
    ),
  }));

  return effectsWithPercentage;
}

function getActivities(data: any[]) {
  const activities = data;
  const totalConfirmations = activities.reduce(
    (acc, activity) => acc + activity.total_confirmations,
    0
  );
  activities.sort((a, b) => b.total_confirmations - a.total_confirmations);
  const activitiesWithPercentage = activities.map(activity => ({
    ...activity,
    percentage: Math.round(
      (activity.total_confirmations / totalConfirmations) * 100
    ),
  }));

  return activitiesWithPercentage;
}

function getTastes(data: any[]) {
  const tastes = data;
  const totalConfirmations = tastes.reduce(
    (acc, taste) => acc + taste.total_confirmations,
    0
  );
  tastes.sort((a, b) => b.total_confirmations - a.total_confirmations);
  const tastesWithPercentage = tastes.map(taste => ({
    ...taste,
    percentage: Math.round(
      (taste.total_confirmations / totalConfirmations) * 100
    ),
  }));

  return tastesWithPercentage;
}

function getAreasOfApplication(data: any[]) {
  const areasOfApplication = data;
  const totalConfirmations = areasOfApplication.reduce(
    (acc, areaOfApplication) => acc + areaOfApplication.total_confirmations,
    0
  );
  areasOfApplication.sort(
    (a, b) => b.total_confirmations - a.total_confirmations
  );
  const areasOfApplicationWithPercentage = areasOfApplication.map(
    areaOfApplication => ({
      ...areaOfApplication,
      percentage: Math.round(
        (areaOfApplication.total_confirmations / totalConfirmations) * 100
      ),
    })
  );

  return areasOfApplicationWithPercentage;
}

function getQualities(data: any[]) {
  const qualities = data;
  const totalConfirmations = qualities.reduce(
    (acc, quality) => acc + quality.total_confirmations,
    0
  );
  qualities.sort((a, b) => b.total_confirmations - a.total_confirmations);
  const qualitiesWithPercentage = qualities.map(quality => ({
    ...quality,
    percentage: Math.round(
      (quality.total_confirmations / totalConfirmations) * 100
    ),
  }));

  return qualitiesWithPercentage;
}

function getApothecaries(data: any[]) {
  const apothecaries = data;
  apothecaries.sort((a, b) => a.price - b.price);
  return apothecaries;
}

function getRandomID() {
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const uniqId = randLetter + Date.now();
  return uniqId;
}
