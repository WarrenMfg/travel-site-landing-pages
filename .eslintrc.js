// module.exports = {
//     "env": {
//         "browser": true,
//         "es6": true,
//         "node": true
//     },
//     "extends": [
//         "plugin:react/recommended",
//         "airbnb"
//     ],
//     "globals": {
//         "Atomics": "readonly",
//         "SharedArrayBuffer": "readonly"
//     },
//     "parserOptions": {
//         "ecmaFeatures": {
//             "jsx": true
//         },
//         "ecmaVersion": 2018
//     },
//     "plugins": [
//         "react"
//     ],
//     "rules": {
//     }
// };

module.exports = {
  extends: './node_modules/eslint-config-hackreactor/index.js'
};

// module.exports = {
//     extend: 'hackreactor',
//     rules: {
//       // Rules here will override the 'hackreactor' configuration
//       // http://eslint.org/docs/rules/
//     }
//   };
