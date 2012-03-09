/**
 * This class is not intended for general usage. It is intended for
 *   extension.
 *
 * When extending, before sure to override the decodeDataToItems() method.
 * @see sDataList#decodeDataToItems
 * @constructor
 */
var sDataList = function () {
  /**
   * @private
   * @type string|null
   */
  this._dataSourceURI = null;
  /**
   * @private
   * @type Array
   */
  this._data = [];
  /**
   * @private
   * @type number
   */
  this._pageNumber = 1;
  /**
   * @private
   * @type number
   */
  this._limitPerRequest = 20;
  /**
   * @private
   * @type string
   */
  this._pageParameter = 'page';
  /**
   * @private
   * @type string
   */
  this._limitParameter = 'limit';
  /**
   * @private
   * @type Element
   */
  this._DOMElement = sDoc.newElement('ul');
  /**
   * @private
   * @type Element|null
   */
  this._parentDOMElement = null;
  /**
   * @private
   * @type boolean
   */
  this._rendered = false;

  return this;
};
/**
 * Set the data source.
 * @param {string} url URL to the data source, relative or full.
 * @returns {sDataList} The data list object to allow method chaining.
 */
sDataList.prototype.setDataSourceURI = function (url) {
  this._dataSourceURI = url;
  return this;
};
/**
 * Set the page parameter.
 * @param {string} param The parameter name to use to name the page number
 *   in each request.
 * @return {sDataList} The data list object to allow method chaining.
 */
sDataList.prototype.setDataSourceURIPageParameter = function (param) {
  this._pageParameter = param;
  return this;
};
/**
 * Set the limit parameter.
 * @param {string} param The parameter name to use to limit the count of items
 *   received in each request.
 * @return {sDataList} The data list object to allow method chaining.
 */
sDataList.prototype.setDataSourceURILimitParameter = function (param) {
  this._limitParameter = param;
  return this;
};
/**
 * Reloads the data from the source with typical AJAX.
 * @returns {sDataList} The data list object to allow method chaining.
 */
sDataList.prototype.reloadData = function () {
  return this;
};
/**
 * This is called when the XHR is complete and succeeds. Must return an array
 *   of sDataListItem objects.
 * @param {string} data String of data retrieved from the request.
 * @returns {Array} Array of sDataListItem objects.
 */
sDataList.prototype.decodeDataToItems = function (data) {
  return [];
};
/**
 * This is called after decodeDataToItems() is called from the callback in
 *   reloadData() for every item in the data array.
 *
 * @param {number} index Index in the array.
 * @param {sDataListItem} item The current sDataListItem at that index.
 * @returns {sDataListItem} A sDataListItem object (or subclass of) to place
 *   at this index.
 */
sDataList.prototype.itemAtIndex = function (index, item) {
  return new sDataListItem({});
};
/**
 * Set the limit of items per request.
 * @param {number} limit Limit.
 * @returns {sDataList} The data list object to allow method chaining.
 */
sDataList.prototype.setLimitPerRequest = function (limit) {
  this._limitPerRequest = parseInt(limit, 10);
  return this;
};
/**
 * Gets the number of items per request.
 * @returns {number} Number of items per request.
 */
sDataList.prototype.getLimitPerRequest = function () {
  return this._limitPerRequest;
};
/**
 * Set the page number.
 * @param {number} page Page number.
 * @returns {sDataList} The data list object to allow method chaining.
 */
sDataList.prototype.setPageNumber = function (page) {
  this._pageNumber = page;
  return this;
};
/**
 * Set the containing element.
 * @param {Element} element DOM element. Should be a block-level element like
 *   a &lt;div&gt;.
 * @returns {sDataList} The data list to allow method chaining.
 */
sDataList.prototype.setParentDOMElement = function (element) {
  this._parentDOMElement = element;
  return this;
};
/**
 * Render the list.
 * @param {boolean} force Force re-rendering.
 * @returns {sDataList} The data list to allow method chaining.
 */
sDataList.prototype.render = function (force) {
  force === undefined && (force = false);

  if ((!this._rendered || force) && this._parentDOMElement) {
    for (var i = 0; i < this._data.length; i++) {
      this._DOMElement.appendChild(this._data[i].render().getDOMElement());
    }

    this._parentDOMElement.appendChild(this._DOMElement);
    this._rendered = true;
  }

  return this;
};
