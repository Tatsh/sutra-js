/**
 * Represents one item in a sDataList.
 * @constructor
 * @param {Object} data Object of data.
 * @returns {sDataListItem} The list item.
 */
var sDataListItem = function (data) {
  /**
   * @private
   * @type Object
   */
  this._data = data;
  /**
   * @private
   * @type Element
   */
  this._DOMElement = sDoc.newElement('li');
  /**
   * @private
   * @type boolean
   */
  this._rendered = false;

  return this;
};
/**
 * Renders the item.
 * @returns {sDataListItem} The data list item to allow method chaining.
 */
sDataListItem.prototype.render = function () {
  //   if (!this._rendered) {
    //   }
    return this;
};
/**
 * If the element is rendered already.
 * @returns {boolean} If the element is rendered already.
 */
sDataListItem.prototype.isRendered = function () {
  return this._rendered;
};
/**
 * Gets the &lt;li&gt; DOM element.
 * @returns {Element} The &lt;li&gt; element.
 */
sDataListItem.prototype.getDOMElement = function () {
  return this._DOMElement;
};
