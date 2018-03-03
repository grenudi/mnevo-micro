module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
      "node",
      "plugin:require-path-exists/recommended"
    ],
    // "parserOptions": {
    //     "ecmaFeatures": {
    //         "experimentalObjectRestSpread": true,
    //         "jsx": true
    //     },
    //     "sourceType": "module"
    // },
    "plugins": [
        "require-path-exists"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": 1,
        "import/no-commonjs": 0,
        "import/no-nodejs-modules": 0,
        "no-console": 0
        // "import/namespace": 2
    }
};
