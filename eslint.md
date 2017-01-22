eslint
===

format code
---

http://jlongster.com/A-Prettier-Formatter


ide
---

### vim

https://github.com/ruanyl/vim-fixmyjs

```
npm install -g fixmyjs
or
npm install -g eslint
npm install -g eslint-plugin-babel
## create default eslintrc
eslint --init
```

### sb3

install the ESLint-Formatter 

Preferences -> Package Settings -> ESLint-Formatter -> Settings  —  User file:
```
{
  "format_on_save": true
}
```

eslint xx.vue --fix

vue
---

### eslint for vue

`npm install eslint-config-vue --save-dev`

ignore
---

是只想在某些文件中禁止检测
```
/*eslint-disable no-unused-vars*/
```

Disable Everything
```
/* eslint-disable */

var obj = { key: 'value', }; // I don't care about IE8

/* eslint-enable */
```

Disable a rule
```
/*eslint-disable no-alert */

alert('doing awful things');

/* eslint-enable no-alert */

Or just tweak a rule
```
/* eslint no-comma-dangle:1 */
// Make this just a warning, not an error
var obj = { key: 'value', }  
```

