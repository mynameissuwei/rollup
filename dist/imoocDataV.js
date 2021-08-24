(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.imoocDataV = factory(global.vue));
}(this, (function (vue) { 'use strict';

  var script = {};

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", null, "this is Test"))
  }

  script.render = render;
  script.__file = "src/VTest.vue";

  return script;

})));
