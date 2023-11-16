// + Imports +

// Custom
import * as config from '../../config';
import * as utils from './utils';

// + Exports +
export default function (showSkeleton: boolean) {
  // Values
  const state = window.KannaMaps;
  const detailsEl: HTMLElement = state.elements.productDetails;
  const communityEl: HTMLElement = state.elements.communityData;
  const apothecariesPopupEl: HTMLElement = state.elements.apothecariesPopup;
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
    renderApothecariesPopup(apothecariesPopupEl, data);
  }
}

function renderApothecariesPopup(parentEl: HTMLElement, data: any) {
  console.log('renderApothecariesPopup', data);
  const apothecaries = data.data.apothecaries_data.detailed;
  const apothecaryListEl = parentEl.querySelector<HTMLElement>(
    '[c-el="apothecary-list"]'
  );
  const templateEl = apothecaryListEl
    ?.querySelector<HTMLElement>('[c-el="apothecary"]')
    ?.cloneNode(true) as HTMLElement | undefined;
  const typeEl = parentEl.querySelector<HTMLElement>('[c-el="type"]');
  const strainEl = parentEl.querySelector<HTMLElement>('[c-el="strain"]');

  console.log('apothecaries', apothecaries);
  console.log('apothecaryListEl', apothecaryListEl);
  console.log('templateEl', templateEl);

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

    console.log('apothecaryEl', apothecaryEl);
    console.log('nameEl', nameEl);
    console.log('priceEl', priceEl);

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
  console.log('isProductAvialable', isProductAvialable);
  console.log('availableEl', availableEl);
  console.log('notAvailableEl', notAvailableEl);

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
  const topAreaOfApplication = getAreasOfApplication(
    data.data.community_data.detailed.area_of_application
  )[0];
  const topAreaOfApplicationEl = parentEl.querySelector<HTMLElement>(
    '[c-el="area-of-application"]'
  );

  if (topAreaOfApplicationEl) {
    topAreaOfApplicationEl.innerHTML = topAreaOfApplication
      ? topAreaOfApplication.name
      : 'n.v.';
  }

  // top effect
  const topEffect = getPositiveEffects(
    data.data.community_data.detailed.positive_effects
  )[0];
  const topEffectEl = parentEl.querySelector<HTMLElement>('[c-el="effect"]');

  if (topEffectEl) {
    topEffectEl.innerHTML = topEffect ? topEffect.name : 'n.v.';
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

function renderCommunityData(parentEl: HTMLElement, data: any) {
  // effects
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

    if (!effectNameEl || !effectPercentageEl || !effectLinkEl) return;

    if (effect) {
      effectNameEl.innerHTML = effect.name;
      effectPercentageEl.innerHTML = `(${effect.percentage}%)`;
      effectLinkEl.href = `/?effekt=${slugify(effect.name)}`;
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

    if (!sideEffectNameEl || !sideEffectPercentageEl || !sideEffectLinkEl)
      return;

    if (sideEffect) {
      sideEffectNameEl.innerHTML = sideEffect.name;
      sideEffectPercentageEl.innerHTML = `(${sideEffect.percentage}%)`;
      sideEffectLinkEl.href = `/?nebenwirkung=${slugify(sideEffect.name)}`;
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

  console.log('activities', activities);
  console.log('activitiesEls', activitiesEls);

  activitiesEls.forEach((el, index) => {
    const activity = activities[index];
    const activityNameEl = el.querySelector<HTMLElement>('[c-el="name"]');
    const activityPercentageEl = el.querySelector<HTMLElement>(
      '[c-el="percentage"]'
    );
    const activityLinkEl = el.querySelector<HTMLAnchorElement>('[c-el="link"]');

    if (!activityNameEl || !activityPercentageEl || !activityLinkEl) return;

    if (activity) {
      activityNameEl.innerHTML = activity.name;
      activityPercentageEl.innerHTML = `(${activity.percentage}%)`;
      activityLinkEl.href = `/?aktivität=${slugify(activity.name)}`;
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

    if (!tasteNameEl || !tastePercentageEl || !tasteLinkEl) return;

    if (taste) {
      tasteNameEl.innerHTML = taste.name;
      tastePercentageEl.innerHTML = `(${taste.percentage}%)`;
      tasteLinkEl.href = `/?geschmack=${slugify(taste.name)}`;
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

    if (
      !areaOfApplicationNameEl ||
      !areaOfApplicationPercentageEl ||
      !areaOfApplicationLinkEl
    )
      return;

    if (areaOfApplication) {
      areaOfApplicationNameEl.innerHTML = areaOfApplication.name;
      areaOfApplicationPercentageEl.innerHTML = `(${areaOfApplication.percentage}%)`;
      areaOfApplicationLinkEl.href = `/?anwendungsgebiet=${slugify(
        areaOfApplication.name
      )}`;
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

    if (!qualityNameEl || !qualityPercentageEl || !qualityLinkEl) return;

    if (quality) {
      qualityNameEl.innerHTML = quality.name;
      qualityPercentageEl.innerHTML = `(${quality.percentage}%)`;
      qualityLinkEl.href = `/?qualität=${slugify(quality.name)}`;
    } else {
      qualityNameEl.innerHTML = 'n.v.';
      qualityPercentageEl.innerHTML = '(-)';
    }
  });

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
    'Terpendichte mg/g',
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

  console.log('terpenes', terpenes);

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

function getRandomID() {
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const uniqId = randLetter + Date.now();
  return uniqId;
}
