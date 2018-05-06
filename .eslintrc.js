module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": ["warn", 2],
    "quotes": ["warn", "single"],
    "semi": ["warn", "always"],
    "no-console": ["warn", { allow: ["warn", "error"] }]
  }
};
