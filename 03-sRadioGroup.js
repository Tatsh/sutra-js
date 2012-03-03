/**
 * Represents a set of radio buttons.
 * @constructor
 * @param {string} name Name of the field.
 * @returns {sRadioGroup} The group object.
 */
var sRadioGroup = function (name) {
  /**
   * @private
   * @type Element
   */
  this._DOMElement = sDoc.newElement('div');
  this._DOMElement.className = 'form-radio-group';
  this._DOMElement.setAttribute('id', sHTML.makeFormElementID(name + '-group'));
  /**
   * @private
   * @type string
   */
  this._name = name;

  return this;
};
/**
 * Add an option.
 * @param {string} labelText Label text.
 * @param {string} value Value.
 * @returns {sRadioGroup} The radio group object to allow method chaining.
 */
sRadioGroup.prototype.addOption = function (labelText, value) {
  var id = sHTML.makeFormElementID(labelText);
  var radio = sDoc.newElement('input');

  radio.type = 'radio';
  radio.setAttribute('name', this._name);
  radio.className = 'form-radio';
  radio.setAttribute('id', id);
  radio.value = value;

  var label = sDoc.newElement('label');
  label.setAttribute('for', id);
  label.className = 'form-radio-label';
  label.appendChild(radio);
  label.appendChild(document.createTextNode(labelText));

  this._DOMElement.appendChild(label);

  return this;
};
/**
 * Add to a form.
 * @param {sForm} form The form to add to.
 * @returns {sRadioGroup} The radio group object to allow method chaining.
 */
sRadioGroup.prototype.addToForm = function (form) {
  var el = form.getDOMElement();
  if (el) {
    el.appendChild(this._DOMElement);
  }
  return this;
};
/**
 * Get the main container DOM element.
 * @returns {Element} The DOM element.
 */
sRadioGroup.prototype.getDOMElement = function () {
  return this._DOMElement;
};
