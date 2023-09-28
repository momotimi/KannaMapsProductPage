// + Imports +

// Base
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Custom
import * as utils from './helper/controller/utils';
import * as model from './model';
import view from './view';

// + Declare +
declare global {
  var $: any;
  var ls: any;
  var gsap: any;
  interface Window {
    KannaMaps: any;
  }
}

// + Functions +

// Main
const main = async function () {
  console.log("Hello, I'm KannaMaps!");
  // Add KannaMaps to Dom
  window.KannaMaps = model.state;

  // // Initialize model
  await model.init();

  console.log('model.state', model.state);

  // // Initialize view
  view(model.state);
};

// + Initialize +
utils.load(main, {
  type: typeof gsap,
  src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js',
});
