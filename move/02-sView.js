/**
 * Generic view class, from which all views inherit from.
 * @constructor
 * @returns {sView} View object.
 */
var sView = function () {
  /**
   * @type Element|null
   * @private
   */
  this._DOMElement = null;
  /**
   * @type sElement|null
   * @private
   */
  this._element = null;
  /**
   * @type sElement
   * @private
   */
  this._parentElement = null;

  return this;
};
/**
 * Set the main DOM element.
 * @param {Element} element DOM element.
 * @returns {sView} The view to allow method chaining.
 */
sView.prototype.setDOMElement = function (element) {
  this._DOMElement = element;
  this._element = q(element);
  return this;
};
/**
 * Get the main DOM element.
 * @returns {Element|null} element DOM element.
 */
sView.prototype.getDOMElement = function () {
  return this._DOMElement;
};
/**
 * Get the element wrapped in the sElement class.
 * @returns {sElement|null} The element object.
 */
sView.prototype.getElement = function () {
  return this._element;
};
/**
 * Set the parent element for rendering.
 * @param {sElement|Element} element DOM element or element wrapped in
 *   sElement object.
 * @returns {sView} The view to allow method chaining.
 */
sView.prototype.setParentElement = function (element) {
  if (!element.get) {
    element = q(element);
  }
  this._parentElement = element;
  return this;
};
