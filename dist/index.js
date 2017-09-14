"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const intl_messageformat_1 = require("intl-messageformat");
const fs = require("fs");
class NodeIntl {
    constructor() {
        this._messages = {};
        this._locale = 'en-US';
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    get messages() {
        return this._messages;
    }
    set messages(messages) {
        this._messages = messages;
    }
    get locale() {
        return this._locale;
    }
    set locale(locale) {
        if (this._locale !== locale) {
            this._messages = {};
        }
        this._locale = locale;
    }
    addMessages(newMessages) {
        this.messages = Object.assign({}, this.messages, newMessages);
    }
    addMessagesFromFile(filePath) {
        try {
            const localeFile = fs.readFileSync(filePath);
            try {
                this.addMessages(JSON.parse(localeFile.toString()));
            }
            catch (parseError) {
                console.log(`unable to parse locales from file 
                (maybe ${filePath} is empty or invalid json?): ${parseError}`);
            }
        }
        catch (readError) {
            console.log(`Error reading ${filePath}:${readError}`);
        }
    }
    formatMessage(messageId, formats = {}) {
        const message = new intl_messageformat_1.default(this.messages[messageId], this.locale);
        return message.format(formats);
    }
}
exports.default = NodeIntl;
//# sourceMappingURL=index.js.map