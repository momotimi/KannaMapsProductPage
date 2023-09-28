// + Imports +

// Custom
import elements from './helper/view/elements';
import render from './helper/view/render';

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
