/**
 * Represents a managed text field that belongs to an sForm instance.
 * @constructor
 * @param {string} name Name of the field.
 * @param {string} label Label text for the field.
 * @returns {sTextField} The instance.
 */
var sTextField = function (name, label) {
  /**
   * @private
   * @type string
   */
  this._label = label;
  /**
   * @private
   * @type string
   */
  this._name = name;
  /**
   * @private
   * @type Element
   */
  this._parentDOMElement = sDoc.newElement('div');
  this._parentDOMElement.className = 'form-textfield-container';
  /**
   * @private
   * @type Element
   */
  this._labelDOMElement = sDoc.newElement('label');
  this._labelDOMElement.innerText = this._label;
  /**
   * @private
   * @type Element
   */
  this._inputElement = sDoc.newElement('input');
  this._inputElement.className = 'form-textfield';
  /**
   * @private
   * @type Element
   */
  this._helpTextElement = sDoc.newElement('span');
  this._helpTextElement.className = 'form-textfield-help';
  /**
   * @private
   * @type sForm
   */
  this._associatedForm = null;
  /**
   * @private
   * @type function()[]
   */
  this._validationCallbacks = [];
  /**
   * @private
   * @type boolean
   */
  this._required = false;

  this._parentDOMElement.appendChild(this._labelDOMElement);
  this._parentDOMElement.appendChild(this._inputElement);
  this._parentDOMElement.appendChild(this._helpTextElement);

  return this;
};
/**
 * Sets the form that this text field belongs to. Does not shift the element.
 *
 * @param {sForm} form Form to associate with.
 * @return {sTextField} Text field instance to allow method chaining.
 */
sTextField.prototype.setAssociatedForm = function (form) {
  this._associatedForm = form;
  return this;
};
/**
 * Add a validation callback to this element.
 * @param {function(string,sTextField)} cb Function to use as a callback. Must
 *   return true or false (validation failure). Optionally, the method can set
 *   the field's message along with valid set to false in calling setMessage().
 * @param {string} name Name of this method so that it can be removed easily.
 * @see sTextField#setMessage
 * @return {sTextField} The object to allow method chaining.
 */
sTextField.prototype.addValidationCallback = function (cb, name) {
  name === undefined && (name = 'val' + (Math.floor(Math.random() * 1000)));
  var obj = {};
  obj[name] = cb;
  this._validationCallbacks.push(obj);
  return this;
};
/**
 * Gets the main container element.
 * @returns {Element} The container element. A div.
 */
sTextField.prototype.getParentDOMElement = function () {
  return this._parentDOMElement;
};
/**
 * Set as a required field.
 * @param {boolean} bool True to be required, false to disable.
 * @returns {sTextField} The object to allow method chaining.
 */
sTextField.prototype.setRequired = function (bool) {
  this._required = false;
  if (bool) {
    this._required = true;
  }

  if (this._required) {
    this._labelDOMElement.innerHTML = this._label + ' <span class="form-required-marker">*</span>';
  }
  else {
    this._labelDOMElement.innerHTML = this._label;
  }

  return this;
};
