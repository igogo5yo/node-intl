"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const intl_messageformat_1 = require("intl-messageformat");
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
        this._locale = locale;
    }
    addMessages(newMessages) {
        this.messages = Object.assign({}, this.messages, newMessages);
    }
    formatMessage(messageId, formats = {}) {
        const message = new intl_messageformat_1.default(this.messages[messageId], this.locale);
        return message.format(formats);
    }
}
exports.default = NodeIntl;
//# sourceMappingURL=index.js.map