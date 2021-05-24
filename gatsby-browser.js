/* 	Import ThemeProvider, GlobalStyles logic from root-wrapper.js.
		Export to wrap all pages */
import 'prismjs/plugins/command-line/prism-command-line.css'
import 'prismjs/themes/prism.css'
import { wrapRootElement as wrap } from "./root-wrapper"

require("prismjs/themes/prism.css");

export const wrapRootElement = wrap;

//Add Scroll Update Position Check
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
  }) => {
   // transition duration from `layout.js` * 1000 to get time in ms
  const TRANSITION_DELAY = 0.3 * 1000 * 2
 
  // if it's a "normal" route
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  }
 
  // if we used the browser's forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
 
    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)
  }
 
  return false
};





