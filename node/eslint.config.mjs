// eslint.config.js

/*
import js from "@eslint/js";

export default [
    js.configs.all,

    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module"
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        },

    }
];
*/

import globals from "globals";
import js from "@eslint/js";

export default [
    js.configs.all,
    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                myCustomGlobal: "readonly"
            }
        }
        // ...other config
    }
];