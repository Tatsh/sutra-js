/*jshint expr:true */

/**
 * Represents an HTML form.
 * @constructor
 * @param {string} action URL to send to.
 * @param {string} [method='post'] Form submit method. One of: 'put', 'post',
 *   'get', 'delete'.
 * @returns {sForm} The sForm object.
 */
var sForm = function (action, method) {
  method === undefined && (method = 'post');

  /**
   * @private
   * @type string
   */
  this._method = String(method);
  /**
   * @private
   * @type string
   */
  this._action = action;
  /**
   * @private
   * @type Element
   */
  this._DOMElement = null;
  /**
   * @private
   * @type string|null
   */
  this._enctype = null;
  /**
   * @private
   * @type Array
   */
  this._childNodes = [];
  /**
   * @private
   * @type string
   */
  this._csrf = '';
  /**
   * @private
   * @type Element
   */
  this._CSRFHiddenDOMElement = null;
  /**
   * @private
   * @type Array
   */
  this._fields = [];
  /**
   * @private
   * @type sButton[]
   */
  this._buttons = [];
  /**
   * @private
   * @type boolean
   */
  this._isAjax = false;
  /**
   * Detects child elements and clones them.
   * @private
   * @param {boolean} [force] Force re-detection.
   * @returns {sForm} The object to allow method chaining.
   */
  this._detectChildElements = function (force) {
    this._childNodes = [];

    if (!this._DOMElement) {
      return this;
    }

    // Find all form elements and clone them into the _childNodes array
    if (this._DOMElement.hasChildNodes()) {
      var self = this, label, tagType, sib;
      /**
       * @private
       */
      (function recurse(nodes) {
        for (var i = 0; i < nodes.length; i++) {
          label = null;
          tagType = nodes[i].nodeName.toLowerCase();

          if (nodes[i].hasChildNodes && nodes[i].hasChildNodes() && tagType !== 'select') {
            recurse(nodes[i].childNodes);
            continue;
          }

          // Find out if a label is exactly prior to this element
          sib = nodes[i].previousSibling;
          if (sib && sib.previousSibling) {
            if (sib.previousSibling.nodeName.toLowerCase() === 'label') {
              label = sib.previousSibling;
            }
          }

          if (tagType === 'input' || tagType === 'textarea' || tagType === 'button') {
            self._childNodes.push([label, nodes[i].cloneNode(false)]);
          }
          else if (tagType === 'select') {
            self._childNodes.push([label, nodes[i].cloneNode(true)]);
          }
        }
      })(this._DOMElement.childNodes);
    }

    return this;
  };
  /**
   * @const
   * @private
   * @type sForm
   */
  var instance = this;
  /**
   * Hooks to certain field types.
   * @const
   * @private
   */
  this._fieldHooks = {
    'text': function (arr) {
      var field = new sTextField(arr[1].name, arr[0].childNodes[0].nodeValue);
      field.setRequired(arr[1].required);
      field.setAssociatedForm(instance);
      if (instance._DOMElement) {
        instance._DOMElement.appendChild(field.getParentDOMElement());
      }
      return field;
    }
  };
  /**
   * Re-renders the form in the expected hierarchy.
   * @private
   * @returns {sForm} The object to allow method chaining.
   */
  this._reRender = function () {
    this._detectChildElements();
    this._DOMElement.innerHTML = '';

    var current, nodeName;

    for (var i = 0; i < this._childNodes.length; i++) {
      // Each should be an array with [null, input|textarea|select|button] or
      //   [label, input|textarea|select|button]
      current = this._childNodes[i][1];
      nodeName = current.nodeName.toLowerCase();
      if (nodeName === 'input' && this._fieldHooks[current.type]) {
        this._fields.push(this._fieldHooks[current.type](this._childNodes[i]));
      }
      else if (this._fieldHooks[nodeName]) {
        this._fields.push(this._fieldHooks[nodeName](this._childNodes[i]));
      }
    }

    return this;
  };
  /**
   * @private
   * @type Element
   * May become its own class (sButtonSet).
   */
  this._buttonSetDOMElement = sDoc.newElement('div');
  this._buttonSetDOMElement.className = 'form-button-set';

  return this;
};
/**
 * Get the action URL.
 * @returns {string} URL the form would send to.
 */
sForm.prototype.getAction = function () {
  return this._action;
};
/**
 * Set the action URL.
 * @param {string} action URL to send to.
 * @returns {sForm} The object to allow method chaining.
 */
sForm.prototype.setAction = function (action) {
  this._action = action;
  var element = this.getDOMElement();
  if (element) {
    element.action = action;
  }
  return this;
};
/**
 * Gets the method to send with.
 * @returns {string} The method to send with.
 */
sForm.prototype.getMethod = function () {
  return this._method;
};
/**
 * Returns the method to send with.
 * @returns {sForm} The object to allow method chaining.
 */
sForm.prototype.setMethod = function (method) {
  this._method = method;
  var element = this.getDOMElement();
  if (element) {
    element.method = method;
  }
  return this;
};
/**
 * Creates a new DOM element for this form. Replaces any existing.
 *   If a form is on the page represented by this instance, then it should be
 *   removed with sForm.remove() before calling this method.
 * @returns {Element} The DOM element.
 * @see sForm#remove
 */
sForm.prototype.createDOMElement = function () {
  this._DOMElement = sDoc.newElement('form');
  this._DOMElement.method = this._method;
  this._DOMElement.action = this._action;
  if (this._enctype) {
    this._DOMElement.enctype = this._enctype;
  }
  return this._DOMElement;
};
/**
 * Sets the DOM element for this form. Replaces any existing.
 * @param {Element} element Form element.
 * @returns {Element} The DOM element.
 */
sForm.prototype.setDOMElement = function (element) {
  this._DOMElement = element;
  this._DOMElement.method = this._method;
  this._DOMElement.action = this._action;
  if (this._enctype) {
    this._DOMElement.enctype = this._enctype;
  }
  this._reRender();
  return this._DOMElement;
};
/**
 * Gets the DOM element for the form (the &lt;form&gt; tag).
 * @returns {Element|null} The form tag or null.
 */
sForm.prototype.getDOMElement = function () {
  return this._DOMElement;
};
/**
 * Removes the form element from the page.
 * @returns {boolean} If the form could be removed.
 */
sForm.prototype.remove = function () {
  if (this._DOMElement.parentElement) {
    this.getDOMElement().parentElement.removeChild(this._DOMElement);
    return true;
  }
  return false;
};
/**
 * Set the CSRF for the form.
 * @param {string} csrf CSRF token value.
 * @return {sForm} The object to allow method chaining.
 */
sForm.prototype.setCSRF = function (csrf) {
  this._csrf = csrf;
  var element = this.getDOMElement();
  if (element) {
    var input = sDoc.newElement('input');
    input.type = 'hidden';
    input.setAttribute('name', 'csrf');
    input.value = this._csrf;

    if (this._CSRFHiddenDOMElement) {
      this.getDOMElement().removeChild(this._CSRFHiddenDOMElement);
      this._CSRFHiddenDOMElement = null;
    }

    this._CSRFHiddenDOMElement = input;
    element.appendChild(this._CSRFHiddenDOMElement);
  }
  return this;
};
/**
 * Get the CSRF value.
 * @returns {string} The CSRF value.
 */
sForm.prototype.getCSRF = function () {
  return this._csrf;
};
/**
 * Get the button set container element.
 * @returns {Element} Button set container element.
 */
sForm.prototype.getButtonSetDOMElement = function () {
  return this._buttonSetDOMElement;
};
/**
 * Add a button to this form.
 * @param {sButton} button Button object.
 * @returns {sForm} The form object to allow method chaining.
 */
sForm.prototype.addButton = function (button) {
  this._buttons.push(button);
  this._buttonSetDOMElement.appendChild(button.getDOMElement());
  return this;
};
/**
 * Check if the form is submitted with AJAX.
 * @returns {boolean} If the form is submitted with AJAX.
 */
sForm.prototype.isAjax = function () {
  return this._isAjax;
};
/**
 * Render the form.
 * @returns {sForm} The form object to allow method chaining.
 */
sForm.prototype.render = function () {
  if (this._DOMElement) {
    this.getDOMElement().appendChild(this._buttonSetDOMElement);
  }
  return this;
};
