"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var intl_messageformat_1 = require("intl-messageformat");
var NodeIntl = /** @class */ (function () {
    function NodeIntl() {
        this._messages = {};
        this._locale = 'en-US';
    }
    Object.defineProperty(NodeIntl, "instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeIntl.prototype, "messages", {
        get: function () {
            return this._messages;
        },
        set: function (messages) {
            this._messages = messages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeIntl.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        set: function (locale) {
            this._locale = locale;
        },
        enumerable: true,
        configurable: true
    });
    NodeIntl.prototype.addMessages = function (newMessages) {
        this.messages = __assign({}, this.messages, newMessages);
    };
    NodeIntl.prototype.formatMessage = function (messageId, formats) {
        if (formats === void 0) { formats = {}; }
        var message = new intl_messageformat_1.default(this.messages[messageId], this.locale);
        return message.format(formats);
    };
    return NodeIntl;
}());
exports.default = NodeIntl;
