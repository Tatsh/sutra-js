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
 * Create a unique form element ID.
 * @param {string} str Name of the field.
 * @returns {string} String for the 'id' attribute.
 */
sHTML.makeFormElementID = function (str) {
  var id = 'edit-' + fURL.makeFriendly(str, '-');
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
