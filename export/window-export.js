/*jshint sub:true */
/**
 * Exports for Closure Compiler.
 *
 * Compile from root directory with flourish-js behind:
 * JSARG=""; for i in $(find -iname '*.js' | grep -v ./jquery | sort); do JSARG="$JSARG --js $i"; done && closure-compiler --js ../flourish-js/00-deps.js --js ../flourish-js/00-fCryptography.js --js ../flourish-js/00-fDatabase.js --js ../flourish-js/00-fGrammar.js --js ../flourish-js/00-fHTML.js --js ../flourish-js/00-fJSON.js --js ../flourish-js/00-fRequest.js --js ../flourish-js/00-fSession.js --js ../flourish-js/00-fTime.js --js ../flourish-js/00-fURL.js --js ../flourish-js/00-fUTF8.js --js ../flourish-js/01-fCore.js --js ../flourish-js/01-fDate.js --js ../flourish-js/01-fNumber.js --js ../flourish-js/01-fTimestamp.js --js ../flourish-js/99-window-export.js $JSARG --compilation_level ADVANCED_OPTIMIZATIONS --output_wrapper "(function(){%output%}())" --warning_level VERBOSE
 */

// sAJAXRequest
// window['sAJAXRequest'] = {
//   'getJSON': sAJAXRequest.getJSON,
//   'post': sAJAXRequest.post
// };
//
// // sBrowser
// window['sBrowser'] = {
//   'isIE': sBrowser.isIE,
//   'isIEVersion': sBrowser.isIEVersion
// };
//
// // sCSS
// window['sCSS'] = {
//   'hasTransforms': sCSS.hasTransforms,
//   'translate': sCSS.translate,
//   'currentTranslationOnAxis': sCSS.currentTranslationOnAxis,
//   'translateX': sCSS.translateX,
//   'translateY': sCSS.translateY,
//   'translateZ': sCSS.translateZ
// };
//
// // sDocument
// window['sDocument'] = sDocument;
// window['sDocument'].prototype = sDocument.prototype;
// window['sDocument'].prototype['addEventListener'] = sDocument.prototype.addEventListener;
// window['sDocument'].prototype['addEvent'] = sDocument.prototype.addEvent;
// window['sDocument'].prototype['bind'] = sDocument.prototype.bind;
// window['sDocument'].prototype['byId'] = sDocument.prototype.byId;
// window['sDocument'].prototype['byClassName'] = sDocument.prototype.byClassName;
// window['sDocument'].prototype['newElement'] = sDocument.prototype.newElement;
// window['sDocument'].prototype['querySelectorAll'] = sDocument.prototype.querySelectorAll;
// window['sDocument'].prototype['querySelector'] = sDocument.prototype.querySelector;
// window['sDoc'] = sDoc;
//
// // sEvent
// window['sEvent'] = sEvent;
// window['sEvent'].prototype = sEvent.prototype;
// window['sEvent'].prototype['preventDefault'] = sEvent.prototype.preventDefault;
// window['sEvent'].prototype['stopImmediatePropagation'] = sEvent.prototype.stopImmediatePropagation;
// window['sEvent'].prototype['stopPropagation'] = sEvent.prototype.stopPropagation;
// window['sEvent'].prototype['initEvent'] = sEvent.prototype.initEvent;

// sGrammar
window['sGrammar'] = {
  'dashize': sGrammar.dashize,
  'camelize': sGrammar.camelize,
  'underscorize': sGrammar.underscorize,
  'humanize': sGrammar.humanize,
  'inflectOnQuanity': sGrammar.inflectOnQuanity
};

// sHTML
window['sHTML'] = {
  'stripNonASCIIFromString': sHTML.stripNonASCIIFromString,
  'makeFormElementID': sHTML.makeFormElementID,
  'containsBlockLevelHTML': sHTML.containsBlockLevelHTML,
  'convertNewLines': sHTML.convertNewLines,
  'decode': sHTML.decode,
  'encode': sHTML.encode,
  'makeLinks': sHTML.makeLinks,
  'prepare': sHTML.prepare
};

// sWindow/sWin/window
// window['sWindow'] = sWindow;
// window['sWindow']['getHeight'] = sWindow.getHeight;
// window['sWindow']['getWidth'] = sWindow.getWidth;
// window['sWin'] = sWin;
// if (!window['addEventListener']) {
//   window['addEventListener'] = sWindow.addEventListener;
// }
// window['sWin']['bind'] = sWin.addEventListener;
// window['sWin']['addEvent'] = sWin.addEventListener;
//
// // sElement/q
// window['sElement'] = sElement;
// window['sElement'].prototype['addClass'] = sElement.prototype.addClass;
// window['sElement'].prototype['removeClass'] = sElement.prototype.removeClass;
// window['sElement'].prototype['setData'] = sElement.prototype.setData;
// window['sElement'].prototype['getData'] = sElement.prototype.getData;
// window['sElement'].prototype['removeData'] = sElement.prototype.removeData;
// window['sElement'].prototype['get'] = sElement.prototype.get;
// window['sElement'].prototype['addEventListener'] = sElement.prototype.addEventListener;
// window['sElement'].prototype['removeEventListener'] = sElement.prototype.removeEventListener;
// window['sElement'].prototype['addEvent'] = sElement.prototype.addEvent;
// window['sElement'].prototype['bind'] = sElement.prototype.bind;
// window['sElement'].prototype['unbind'] = sElement.prototype.unbind;
// window['sElement'].prototype['performCSSTranslation'] = sElement.prototype.performCSSTranslation;
// window['sElement'].prototype['setText'] = sElement.prototype.setText;
// window['sElement'].prototype['append'] = sElement.prototype.append;
// window['sElement'].prototype['remove'] = sElement.prototype.remove;
// window['sElement'].prototype['getElementsByClassName'] = sElement.prototype.getElementsByClassName;
// window['sElement'].prototype['setAttributes'] = sElement.prototype.setAttributes;
// window['q'] = q;
//
// // sHistory
// window['sHistory'] = sHistory;
// window['sHistory']['hasNativeSupport'] = sHistory.hasNativeSupport;
// window['sHistory'].prototype.constructor = sHistory.prototype.constructor;
// window['sHistory']['pushState'] = sHistory.pushState;
// window['sHistory']['pushStates'] = sHistory.pushStates;
// window['sHistory']['removeState'] = sHistory.removeState;
// window['sHistory']['getState'] = sHistory.getState;
// window['sHistory']['start'] = sHistory.start;
// window['sHistory']['addEventListener'] = sHistory.addEventListener;
//
// // sDataListItem
// window['sDataListItem'] = sDataListItem;
// window['sDataListItem'].prototype['render'] = sDataListItem.prototype.render;
// window['sDataListItem'].prototype['isRendered'] = sDataListItem.prototype.isRendered;
// window['sDataListItem'].prototype['getDOMElement'] = sDataListItem.prototype.getDOMElement;
//
// // sView
// window['sView'] = sView;
// window['sView'].prototype['setDOMElement'] = sView.prototype.setDOMElement;
// window['sView'].prototype['getDOMElement'] = sView.prototype.getDOMElement;
// window['sView'].prototype['getElement'] = sView.prototype.getElement;
// window['sView'].prototype['setParentElement'] = sView.prototype.setParentElement;
//
// // sButton
// window['sButton'] = sButton;
// window['sButton'].prototype = new sView();
// window['sButton'].prototype['addToForm'] = sButton.prototype.addToForm;
// window['sButton'].prototype['getLabelText'] = sButton.prototype.getLabelText;
// window['sButton'].prototype['getDOMElement'] = sButton.prototype.getDOMElement;
// window['sButton'].prototype['getName'] = sButton.prototype.getName;
//
// // sDataList
// window['sDataList'] = sDataList;
// window['sDataList'].prototype['setDataSourceURI'] = sDataList.prototype.setDataSourceURI;
// window['sDataList'].prototype['setDataSourceURIPageParameter'] = sDataList.prototype.setDataSourceURIPageParameter;
// window['sDataList'].prototype['setDataSourceURILimitParameter'] = sDataList.prototype.setDataSourceURILimitParameter;
// window['sDataList'].prototype['reloadData'] = sDataList.prototype.reloadData;
// window['sDataList'].prototype['decodeDataToItems'] = sDataList.prototype.decodeDataToItems;
// window['sDataList'].prototype['itemAtIndex'] = sDataList.prototype.itemAtIndex;
// window['sDataList'].prototype['setLimitPerRequest'] = sDataList.prototype.setLimitPerRequest;
// window['sDataList'].prototype['getLimitPerRequest'] = sDataList.prototype.getLimitPerRequest;
// window['sDataList'].prototype['setPageNumber'] = sDataList.prototype.setPageNumber;
// window['sDataList'].prototype['setParentDOMElement'] = sDataList.prototype.setParentDOMElement;
// window['sDataList'].prototype['render'] = sDataList.prototype.render;
//
// // sRadioGroup
// window['sRadioGroup'] = sRadioGroup;
// window['sRadioGroup'].prototype['addOption'] = sRadioGroup.prototype.addOption;
// window['sRadioGroup'].prototype['addToForm'] = sRadioGroup.prototype.addToForm;
// window['sRadioGroup'].prototype['getDOMElement'] = sRadioGroup.prototype.getDOMElement;
//
// // sTextField
// window['sTextField'] = sTextField;
// window['sTextField'].prototype['setAssociatedForm'] = sTextField.prototype.setAssociatedForm;
// window['sTextField'].prototype['addValidationCallback'] = sTextField.prototype.addValidationCallback;
// window['sTextField'].prototype['getParentDOMElement'] = sTextField.prototype.getParentDOMElement;
// window['sTextField'].prototype['setRequired'] = sTextField.prototype.setRequired;
//
// // sForm
// window['sForm'] = sForm;
// window['sForm'].prototype['getAction'] = sForm.prototype.getAction;
// window['sForm'].prototype['setAction'] = sForm.prototype.setAction;
// window['sForm'].prototype['getMethod'] = sForm.prototype.getMethod;
// window['sForm'].prototype['setMethod'] = sForm.prototype.setMethod;
// window['sForm'].prototype['createDOMElement'] = sForm.prototype.createDOMElement;
// window['sForm'].prototype['setDOMElement'] = sForm.prototype.setDOMElement;
// window['sForm'].prototype['getDOMElement'] = sForm.prototype.getDOMElement;
// window['sForm'].prototype['remove'] = sForm.prototype.remove;
// window['sForm'].prototype['setCSRF'] = sForm.prototype.setCSRF;
// window['sForm'].prototype['getCSRF'] = sForm.prototype.getCSRF;
// window['sForm'].prototype['getButtonSetDOMElement'] = sForm.prototype.getButtonSetDOMElement;
// window['sForm'].prototype['addButton'] = sForm.prototype.addButton;
// window['sForm'].prototype['isAjax'] = sForm.prototype.isAjax;
// window['sForm'].prototype['render'] = sForm.prototype.render;
