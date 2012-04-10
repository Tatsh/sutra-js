/**
 * Provides notation conversion support.
 * @constructor
 * @augments fGrammar
 * @license sutra-js | http://www.opensource.org/licenses/mit-license.php
 */
var sGrammar = function () {};
/**
 * Prototype.
 * @private
 * @type fGrammar
 */
sGrammar.prototype = new fGrammar();
/**
 * Cache of strings that have been converted to dash notation.
 * @type Object
 * @private
 */
sGrammar._dashizeCache = {};
/**
 * Converts a <code>camelCase</code>, human-friendly or
 *   <code>underscore_notation</code> string to
 *   <code>dash-notation</code>.
 * @param {string} str String to convert.
 * @returns {string} String in dash notation.
 */
sGrammar.dashize = function (str) {
  if (sGrammar._dashizeCache[str]) {
    return sGrammar._dashizeCache[str];
  }

  var original = str;
  str = fURL.makeFriendly(str, '-');
  sGrammar._dashizeCache[original] = str;

  return str;
};
/**
 * Converts an <code>underscore_notation</code>, human-friendly or
 *   <code>camelCase</code> string to <code>camelCase</code>.
 * @param {string} str String to convert.
 * @param {boolean} [upper=false] If the camel case should
 *   <code>UpperCamelCase</code>.
 * @param {string} [delimiter] Force a delimiter to be used.
 * @returns {string} The converted string.
 */
sGrammar.camelize = function (str, upper, delimiter) {
  return fGrammar.camelize.apply(fGrammar, arguments);
};
/**
 * Converts a <code>camelCase</code>, human-friendly or
 *   <code>underscore_notation</code> string to
 *   <code>underscore_notation</code>.
 * Port of fGrammar::underscorize() from Flourish.
 *
 * @param {string} str String to underscorize.
 * @returns {string} String, underscorized.
 */
sGrammar.underscorize = function (str) {
  return fGrammar.underscorize.apply(fGrammar, arguments);
};
/**
 * Makes an <code>underscore_notation</code>, <code>camelCase</code>, or
 *   human-friendly string into a human-friendly string.
 * Port of fGrammar::humanize() from Flourish.
 *
 * @param {string} str String to 'humanise'.
 * @returns {string} String, 'humanised.'
 */
sGrammar.humanize = function (str) {
  return fGrammar.humanize.apply(fGrammar, arguments);
};
/**
 * Returns the singular or plural form of the word or based on the quantity
 *   specified.
 * @param {number} number The quantity (integer).
 * @param {string} singular The string to be returned for when <code>number =
 *   1</code>.
 * @param {string} plural The string to be returned for when number != 1; use
 *   %d to place the quantity in the string.
 * @return {string} The singular or plural form of the word or based on the
 *   quantity specified.
 */
sGrammar.inflectOnQuantity = function (number, singular, plural) {
  return fGrammar.inflectOnQuantity.apply(fGrammar, arguments);
};
