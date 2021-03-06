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
var fs = require("fs");
var NodeIntl = /** @class */ (function () {
    function NodeIntl() {
        this._messagesMiddlewares = [];
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
            this._messages = this.processMessages(messages);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeIntl.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        set: function (locale) {
            if (this._locale !== locale) {
                this._messages = {};
            }
            this._locale = locale;
        },
        enumerable: true,
        configurable: true
    });
    NodeIntl.prototype.processMessages = function (messages) {
        this._messagesMiddlewares.forEach(function (middleware) {
            messages = middleware(messages);
        });
        return messages;
    };
    NodeIntl.prototype.addMiddleware = function (midleware) {
        this._messagesMiddlewares.push(midleware);
    };
    NodeIntl.prototype.addMessages = function (newMessages) {
        this.messages = __assign({}, this.messages, newMessages);
    };
    NodeIntl.prototype.addMessagesFromFile = function (filePath) {
        try {
            var localeFile = fs.readFileSync(filePath);
            try {
                this.addMessages(JSON.parse(localeFile.toString()));
            }
            catch (parseError) {
                console.log("unable to parse locales from file \n                (maybe " + filePath + " is empty or invalid json?): " + parseError);
            }
        }
        catch (readError) {
            console.log("Error reading " + filePath + ":" + readError);
        }
    };
    NodeIntl.prototype.formatMessage = function (messageId, formats) {
        if (formats === void 0) { formats = {}; }
        try {
            var message = new intl_messageformat_1.default(this.messages[messageId], this.locale);
            return message.format(formats);
        }
        catch (err) {
            return messageId;
        }
    };
    return NodeIntl;
}());
exports.default = NodeIntl;
//# sourceMappingURL=index.js.map