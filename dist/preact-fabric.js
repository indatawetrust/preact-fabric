(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('fabric'), require('preact-append-child')) :
	typeof define === 'function' && define.amd ? define(['fabric', 'preact-append-child'], factory) :
	(global.Fabric = factory(global.fabric,global.AppendChild));
}(this, (function (fabric,AppendChild) { 'use strict';

AppendChild = 'default' in AppendChild ? AppendChild['default'] : AppendChild;

var ref = require('preact');
var h = ref.h;
var Component = ref.Component;
var Fabric = (function (Component) {
  function Fabric() {
    Component.call(this);

    this.state = {
      id: 'x' + Math.random().toString(36).substring(2, 15),
    };
  }

  if ( Component ) Fabric.__proto__ = Component;
  Fabric.prototype = Object.create( Component && Component.prototype );
  Fabric.prototype.constructor = Fabric;

  Fabric.prototype.render = function render () {
    var this$1 = this;

    var canvas = document.createElement('canvas');

    canvas.setAttribute('id', this.state.id);

    var style = this.props.style;

    if (style && typeof style == 'object') {
      for (var key in style) {
        var value = style[key];
        canvas.style[key] = value;
      }
    }

    var attrs = this.props.attrs;

    if (attrs && typeof attrs == "object") {
      for (var key$1 in attrs) {
        var value$1 = attrs[key$1];
        canvas.setAttribute(key$1, value$1);
      }
    }

    var config = {};

    if (this.props.config && typeof this.props.config == 'object') {
      config = this.props.config;
    }

    return (
      h( AppendChild, {
        child: canvas, afterAppend: function () {
          var canvas = new fabric.fabric.Canvas(this$1.state.id, config);

          if (this$1.props.init && typeof this$1.props.init == 'function') {
            this$1.props.init(canvas);
          }
        } })
    );
  };

  return Fabric;
}(Component));

return Fabric;

})));
