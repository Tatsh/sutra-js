/**
 * Extends fHTML to provide more HTML and string handling methods.
 * @constructor
 * @augments fHTML
 */
var sHTML = function () {};
/**
 * @private
 * @type fHTML
 */
sHTML.prototype = new fHTML();
/**
 * Override the original constructor.
 * @private
 * @type function()
 */
sHTML.prototype.constructor = sHTML;
/**
 * Cache of form element IDs.
 * @type Object
 * @private
 */
sHTML._formElementIDs = {};
/**
 * Characters allowed when stripping non-ASCII from strings. Used in the
 *   sHTML.stripNonASCIIFromString() method.
 * @type Array
 * @const
 * @private
 */
sHTML._stripNonASCIIFromStringSafe = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-'];
/**
 * Strips non-ASCII characters from strings.
 * @param {string} str String to strip.
 * @param {boolean} [lower=true] Convert to the string to lower case.
 * @returns {string} The stripped string.
 */
sHTML.stripNonASCIIFromString = function (str, lower) {
  var ret = '';

  lower === undefined && (lower = true);

  /**
   * @private
   */
  var inArray = function (needle, haystack) {
    for (var key in haystack) {
      if (haystack[key] == needle) {
        return true;
      }
    }
    return false;
  };

  /**
   * This is not really private, but @private here because JSDoc thinks this
   *   is a global.
   * @private
   */
  str = (function (a) {
    var ret = [];
    for (var i = 0; i < a.length; i++) {
      ret.push(a[i]);
    }
    return ret;
  })(str.replace(/(\-|\s|_)+/g, '-'));

  for (var i = 0; i < str.length; i++) {
    if (inArray(str[i], sHTML._stripNonASCIIFromStringSafe)) {
      ret += str[i];
    }
  }

  if (lower) {
    ret = ret.toLowerCase();
  }

  return ret;
};
/**
 * Create a unique form element ID.
 * @param {string} str Name of the field.
 * @returns {string} String for the 'id' attribute.
 */
sHTML.makeFormElementID = function (str) {
  var id = 'edit-' + sHTML.stripNonASCIIFromString(str);
  var exists = document.getElementById(id);

  if (exists || sHTML._formElementIDs[id]) {
    var inObject = true;
    var i = 1;
    var original = id;

    while (inObject) {
      id = original + '-' + i;

      if (!document.getElementById(id) && !sHTML._formElementIDs[id]) {
        inObject = false;
        break;
      }

      i++;
    }
  }

  sHTML._formElementIDs[id] = id;

  return id;
};
