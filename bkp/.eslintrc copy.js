module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:vue/vue3-essential", "airbnb-base", "prettier"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["vue", "prettier"],
    rules: {
        "vue/multi-word-component-names": "off",
        "prettier/prettier": "error",
    },
}
