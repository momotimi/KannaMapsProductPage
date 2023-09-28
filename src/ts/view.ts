// + Imports +

// Custom
import * as config from './config';
import render from './helper/view/render';
import elements from './helper/view/elements';

// + Exports +
export default function init(state: any) {
  // Elements
  state.elements = elements();

  // Add render to state
  state.renderProductData = (showSkeleton = false) => {
    render(showSkeleton);
  };

  // Initial render
  state.renderProductData();
}
