import { P as PropTypes, R as React } from "./react-obF0mMh8.js";
import { c as classNames } from "./other-vendors-CgPDcvif.js";
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var globalCssModule;
function mapToCssModules() {
  var className = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var cssModule = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : globalCssModule;
  if (!cssModule) return className;
  return className.split(" ").map(function(c) {
    return cssModule[c] || c;
  }).join(" ");
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    if (typeof console !== "undefined") {
      console.error(message);
    }
    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== "undefined") {
      warnOnce('"'.concat(propName, '" property of "').concat(componentName, '" has been deprecated.\n').concat(explanation));
    }
    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }
    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
}
var Element = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.Element || function() {
};
function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + componentName + "`. Expected prop to be an instance of Element. Validation failed.");
  }
}
PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement, PropTypes.shape({
  current: PropTypes.any
})]);
var tagPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
}), PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
})]))]);
function isObject(value) {
  var type = _typeof(value);
  return value != null && (type === "object" || type === "function");
}
var _excluded$4 = ["className", "cssModule", "fluid", "tag"];
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
function _objectWithoutProperties$4(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes$4 = {
  tag: tagPropType,
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
function Container(props) {
  var className = props.className, cssModule = props.cssModule, fluid = props.fluid, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties$4(props, _excluded$4);
  var containerClass = "container";
  if (fluid === true) {
    containerClass = "container-fluid";
  } else if (fluid) {
    containerClass = "container-".concat(fluid);
  }
  var classes = mapToCssModules(classNames(className, containerClass), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$4({}, attributes, {
    className: classes
  }));
}
Container.propTypes = propTypes$4;
var _excluded$3 = ["className", "cssModule", "noGutters", "tag", "widths"];
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function _objectWithoutProperties$3(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var rowColWidths = ["xs", "sm", "md", "lg", "xl", "xxl"];
var rowColsPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var propTypes$3 = {
  tag: tagPropType,
  noGutters: deprecated(PropTypes.bool, "Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/"),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType,
  xxl: rowColsPropType,
  widths: PropTypes.array
};
function Row(props) {
  var className = props.className, cssModule = props.cssModule, noGutters = props.noGutters, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, _props$widths = props.widths, widths = _props$widths === void 0 ? rowColWidths : _props$widths, attributes = _objectWithoutProperties$3(props, _excluded$3);
  var colClasses = [];
  widths.forEach(function(colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];
    if (!colSize) {
      return;
    }
    var isXs = !i;
    colClasses.push(isXs ? "row-cols-".concat(colSize) : "row-cols-".concat(colWidth, "-").concat(colSize));
  });
  var classes = mapToCssModules(classNames(className, noGutters ? "gx-0" : null, "row", colClasses), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$3({}, attributes, {
    className: classes
  }));
}
Row.propTypes = propTypes$3;
var _excluded$2 = ["className", "cssModule", "widths", "tag"];
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _objectWithoutProperties$2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var colWidths = ["xs", "sm", "md", "lg", "xl", "xxl"];
var stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var columnProps = PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.shape({
  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes$2 = {
  tag: tagPropType,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  widths: PropTypes.array
};
var getColumnSizeClass = function getColumnSizeClass2(isXs, colWidth, colSize) {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : "col-".concat(colWidth);
  }
  if (colSize === "auto") {
    return isXs ? "col-auto" : "col-".concat(colWidth, "-auto");
  }
  return isXs ? "col-".concat(colSize) : "col-".concat(colWidth, "-").concat(colSize);
};
var getColumnClasses = function getColumnClasses2(attributes, cssModule) {
  var widths = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : colWidths;
  var modifiedAttributes = attributes;
  var colClasses = [];
  widths.forEach(function(colWidth, i) {
    var columnProp = modifiedAttributes[colWidth];
    delete modifiedAttributes[colWidth];
    if (!columnProp && columnProp !== "") {
      return;
    }
    var isXs = !i;
    if (isObject(columnProp)) {
      var _classNames;
      var colSizeInterfix = isXs ? "-" : "-".concat(colWidth, "-");
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classNames((_classNames = {}, _defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ""), _defineProperty(_classNames, "order".concat(colSizeInterfix).concat(columnProp.order), columnProp.order || columnProp.order === 0), _defineProperty(_classNames, "offset".concat(colSizeInterfix).concat(columnProp.offset), columnProp.offset || columnProp.offset === 0), _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(_colClass);
    }
  });
  return {
    colClasses,
    modifiedAttributes
  };
};
function Col(props) {
  var className = props.className, cssModule = props.cssModule, _props$widths = props.widths, widths = _props$widths === void 0 ? colWidths : _props$widths, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties$2(props, _excluded$2);
  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths), modifiedAttributes = _getColumnClasses.modifiedAttributes, colClasses = _getColumnClasses.colClasses;
  if (!colClasses.length) {
    colClasses.push("col");
  }
  var classes = mapToCssModules(classNames(className, colClasses), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$2({}, modifiedAttributes, {
    className: classes
  }));
}
Col.propTypes = propTypes$2;
var _excluded$1 = ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"];
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes$1 = {
  /** Adding card prop adds `.card-header-tabs` or `.card-header-pills` class */
  card: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** fills the nav to extend to full available width */
  fill: PropTypes.bool,
  /** Change the horizontal alignment of your nav */
  horizontal: PropTypes.oneOf(["center", "end"]),
  /**  All horizontal space will be occupied by nav links, but unlike the `fill` above, every nav item will be the same width. */
  justified: PropTypes.bool,
  /** Add navbar for a full-height and lightweight navigation */
  navbar: PropTypes.bool,
  /** Make NavItems look like pills */
  pills: PropTypes.bool,
  /** Make NavItems look like tabs */
  tabs: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Stack your navigation by changing the flex item direction */
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
var getVerticalClass = function getVerticalClass2(vertical) {
  if (vertical === false) {
    return false;
  }
  if (vertical === true || vertical === "xs") {
    return "flex-column";
  }
  return "flex-".concat(vertical, "-column");
};
function Nav(props) {
  var className = props.className, cssModule = props.cssModule, tabs = props.tabs, pills = props.pills, _props$vertical = props.vertical, vertical = _props$vertical === void 0 ? false : _props$vertical, horizontal = props.horizontal, justified = props.justified, fill = props.fill, navbar = props.navbar, card = props.card, _props$tag = props.tag, Tag = _props$tag === void 0 ? "ul" : _props$tag, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classNames(className, navbar ? "navbar-nav" : "nav", horizontal ? "justify-content-".concat(horizontal) : false, getVerticalClass(vertical), {
    "nav-tabs": tabs,
    "card-header-tabs": card && tabs,
    "nav-pills": pills,
    "card-header-pills": card && pills,
    "nav-justified": justified,
    "nav-fill": fill
  }), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attributes, {
    className: classes
  }));
}
Nav.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "active", "tag"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes = {
  /** Add active class to element */
  active: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
};
function NavItem(props) {
  var className = props.className, cssModule = props.cssModule, active = props.active, _props$tag = props.tag, Tag = _props$tag === void 0 ? "li" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "nav-item", active ? "active" : false), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
NavItem.propTypes = propTypes;
export {
  Container as C,
  Nav as N,
  Row as R,
  NavItem as a,
  Col as b
};
