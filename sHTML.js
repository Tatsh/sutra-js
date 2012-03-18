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
    if (haystack.indexOf) {
      return haystack.indexOf(needle) !== -1;
    }

    for (var key in haystack) {
      if (haystack.hasOwnProperty(key) && key === needle) {
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
/**
 * Checks a string of HTML for block level elements.
 * @param {string} content The HTML content to check.
 * @param {boolean} [strict=false] Do not allow exceptions: &lt;nav&gt,
 *   &lt;optgroup&gt;, etc.
 * @returns {boolean} If the content has a block level tag.
 */
sHTML.containsBlockLevelHTML = function (content, strict) {
  return fHTML.containsBlockLevelHTML(content, strict);
};
/**
 * Converts new lines to &lt;br&gt; tags as long as there aren't any block-level
 *   HTML tags present.
 * @param {string} content The content to display.
 * @returns {string} The content.
 */
sHTML.convertNewLines = function (content) {
  return fHTML.convertNewLines(content);
};
/**
 * Converts all HTML entities to normal characters.
 * @param {string} content The content to decode.
 * @returns {string} The decoded content.
 */
sHTML.decode = function (content) {
  return fHTML.decode(content);
};
/**
 * Converts all special characters to entities.
 * @param {string|Array} content The content to encode.
 * @returns {string} The encoded content.
 */
sHTML.encode = function (content) {
  return fHTML.encode(content);
};
/**
 * Make links within a content string.
 * @param {string} content Content to process.
 * @param {number} [linkTextLength=0] Length of the text within the tag. If
 *   this argument is used, then a title attribute will be on each link with
 *   the full link text.
 * @returns {string}
 */
sHTML.makeLinks = function(content, linkTextLength) {
  return fHTML.makeLinks(content, linkTextLength);
};
/**
 * Prepares content for display. Allows HTML tags.
 * @param {string|Array} content The content to prepare.
 * @returns {string} The encoded HTML.
 */
sHTML.prepare = function (content) {
  return fHTML.prepare(content);
};
/**
 * Create paragraphs from 2 or more new lines.
 *
 * @param {string} html Unfiltered string to paragraphify.
 * @returns string The converted string.
 */
sHTML.paragraphify = function (html) {
  html += "\n\n";

  var matches = html.match(/(.*)\n/g);
  var str = '';
  var potential;

  for (var i = 0; i < matches.length; i++) {
    potential = fUTF8.trim(matches[i]);
    if (potential.length !== 0) {
      str += '<p>' + sHTML.encode(potential) + '</p>';
    }
  }

  return str;
};
