var jsxTransform = require('babel-plugin-jsx-sd0m');

module.exports = function() {
  return {
    plugins: [[
      jsxTransform, {
        moduleName: 'solid-js/dom',
        attrsModuleName: 'sd0m',
        builtIns: ['For', 'Show', 'Switch', 'Match', 'Suspense', 'Portal'],
        delegateEvents: true,
        contextToCustomElements: true
      }
    ]]
  };
};
