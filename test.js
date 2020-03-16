const babel = require('@babel/core');
const preset = require('.');
const assert = require('assert');

const { code } = babel.transformSync('const v = <div a="" b="2" />;', {
	presets: [
		preset
	],
	babelrc: false,
	compact: true
});

assert.equal(code, 'import{template as _$template}from"solid-js/dom";const _tmpl$=_$template(`<div a="" b="2"></div>`);const v=_tmpl$.content.firstChild.cloneNode(true);');
console.log('passed');
