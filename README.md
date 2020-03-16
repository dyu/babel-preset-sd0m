# babel-preset-sd0m
Babel preset to transform JSX into Solid runtime calls.

### Install

Via NPM

```javascript
npm install babel-preset-sd0m --save-dev
```

or Yarn

```javascript
yarn add babel-preset-sd0m --dev
```

### Usage

Make or update your .babelrc config file with the preset:

```javascript
{
  "presets": [
    "sd0m"
  ]
}
```

Via package.json

```javascript
   ...
   "babel": {
     "presets": [
       "es2015",
       "sd0m"
     ],
     "plugins": [
     ]
   },
   ...
```
