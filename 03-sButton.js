/**
 * Represents a single button using a &lt;button&gt; tag.
 * @constructor
 * @param {string} labelText Label text.
 * @param {string} [name="op"] Name for the button.
 * @param {string} [type="submit"] Type of the button.
 * @returns {sButton} Button object.
 */
var sButton = function (labelText, name, type) {
  name === undefined && (name = 'op');
  type === undefined && (type = 'submit');

  /**
   * @private
   * @type sForm|null
   */
  this._form = null;

  /**
   * @private
   * @type string
   */
  this._name = String(name);

  /**
   * @private
   * @type string
   */
  this._labelText = labelText;

  /**
   * @private
   * @type Element
   */
  this._DOMElement = sDoc.newElement('input');
  this._DOMElement.setAttribute('type', String(type));
  this._DOMElement.setAttribute('value', this._labelText);
  this._DOMElement.setAttribute('name', this._name);
  this._DOMElement.setAttribute('id', sHTML.makeFormElementID(this._name));

  return this;
};
/**
 * Prototype.
 * @private
 * @type sView
 */
sButton.prototype = new sView();
/**
 * Access to parent.
 * @type sView
 */
sButton.prototype.parent = sView.prototype;
/**
 * Add to an sForm instance.
 * @param {sForm} form Form instance.
 * @returns {sButton} Button object to allow method chaining.
 */
sButton.prototype.addToForm = function (form) {
  this._form = form;
  form.addButton(this);
  return this;
};
/**
 * Get the button label text (input value).
 * @returns {string} The label text.
 */
sButton.prototype.getLabelText = function () {
  return this._labelText;
};
/**
 * Get the DOM element.
 * @returns {Element} DOM element.
 */
sButton.prototype.getDOMElement = function () {
  return this._DOMElement;
};
/**
 * Get the name attribute.
 * @returns {string} Name attribute.
 */
sButton.prototype.getName = function () {
  return this._name;
};
