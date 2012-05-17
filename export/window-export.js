/*jshint sub:true */
/**
 * Exports for Closure Compiler.
 *
 * Compile from root directory with flourish-js behind:
 * JSARG=""; for i in $(find -iname '*.js' | grep -v ./jquery | sort); do JSARG="$JSARG --js $i"; done && closure-compiler --js ../flourish-js/00-deps.js --js ../flourish-js/00-fCryptography.js --js ../flourish-js/00-fDatabase.js --js ../flourish-js/00-fGrammar.js --js ../flourish-js/00-fHTML.js --js ../flourish-js/00-fJSON.js --js ../flourish-js/00-fRequest.js --js ../flourish-js/00-fSession.js --js ../flourish-js/00-fTime.js --js ../flourish-js/00-fURL.js --js ../flourish-js/00-fUTF8.js --js ../flourish-js/01-fCore.js --js ../flourish-js/01-fDate.js --js ../flourish-js/01-fNumber.js --js ../flourish-js/01-fTimestamp.js --js ../flourish-js/99-window-export.js $JSARG --compilation_level ADVANCED_OPTIMIZATIONS --output_wrapper "(function(){%output%}())" --warning_level VERBOSE
 */

// sGrammar
window['sGrammar'] = {
  'addDashizeRule': sGrammar.addDashizeRule,
  'dashize': sGrammar.dashize,
  'camelize': sGrammar.camelize,
  'underscorize': sGrammar.underscorize,
  'humanize': sGrammar.humanize,
  'inflectOnQuanity': sGrammar.inflectOnQuanity
};

// sHTML
window['sHTML'] = {
  'makeFormElementID': sHTML.makeFormElementID,
  'containsBlockLevelHTML': sHTML.containsBlockLevelHTML,
  'convertNewLines': sHTML.convertNewLines,
  'decode': sHTML.decode,
  'encode': sHTML.encode,
  'makeLinks': sHTML.makeLinks,
  'prepare': sHTML.prepare
};
