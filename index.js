import DevConfig from "./src/dev-config.js";
import ProdConfig from "./src/prod-config.js";

export default class Index {
    /**
     * @returns {Index}
     */
    constructor() {
    }

    /**
     * @param {string} entryJsFilePath The main javascript entry file
     * @param {string} entryHtmlFilePath The main html entry file
     */
    static devConfig(entryJsFilePath, entryHtmlFilePath) {
        return DevConfig.config(entryJsFilePath, entryHtmlFilePath);
    }

    /**
     *
     * @param {string} entryJsFilePath The main javascript entry file
     * @param {string} entryHtmlFilePath The main html entry file
     * @param {string} outputDirPath
     * @param {string} outputFileName
     * @returns {{output: {path: string, filename}, entry, plugins: HtmlWebpackPlugin[]}}
     */
    static prodConfig(entryJsFilePath, entryHtmlFilePath, outputDirPath, outputFileName) {
        return ProdConfig.config(entryJsFilePath, entryHtmlFilePath, outputDirPath, outputFileName);
    }
}