// + Imports +

// Custom

// + Exports +
export default function () {
  // Values
  const state = window.KannaMaps;
  const obj: any = {};

  // * Define *

  // Rendering
  const productDetails = document.querySelector('[c-el="product-details"]');
  const communityData = document.querySelector('[c-el="community-data"]');
  const communityDataFull = document.querySelector(
    '[c-el="community-data-full"]'
  );
  const apothecariesPopup = document.querySelector(
    '[c-el="apothecaries-popup"]'
  );
  const topApothecariesList = document.querySelector(
    '[c-el="top-apothecaries-list"]'
  );
  const allApothecariesList = document.querySelector(
    '[c-el="all-apothecaries-list"]'
  );

  // Manipulate

  // * Append *

  // Rendering
  obj.productDetails = productDetails;
  obj.communityData = communityData;
  obj.communityDataFull = communityDataFull;
  obj.apothecariesPopup = apothecariesPopup;
  obj.topApothecariesList = topApothecariesList;
  obj.allApothecariesList = allApothecariesList;

  // Return
  return obj;
}
