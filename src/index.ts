import IntlMessageFormat from 'intl-messageformat';
import * as fs from 'fs';

export default class NodeIntl {
    private _messagesMiddlewares = [];
    private _messages: object = {};
    private _locale: string = 'en-US';
    private static _instance: NodeIntl;

    private constructor() {
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    get messages(): object {
        return this._messages;
    }

    set messages(messages: object) {
        this._messages = this.processMessages(messages);
    }

    get locale(): string {
        return this._locale;
    }

    set locale(locale: string) {
        if (this._locale !== locale) {
            this._messages = {};
        }
        this._locale = locale;
    }

    private processMessages(messages) {
        this._messagesMiddlewares.forEach(middleware => {
            messages = middleware(messages);
        });

        return messages;
    }

    addMiddleware(midleware) {
        this._messagesMiddlewares.push(midleware);
    }

    addMessages(newMessages: object) {
        this.messages = {
            ...this.messages,
            ...newMessages
        };
    }

    addMessagesFromFile(filePath: string) {
        try {
            const localeFile = fs.readFileSync(filePath);
            try {
                this.addMessages(JSON.parse(localeFile.toString()));
            } catch (parseError) {
                console.log(`unable to parse locales from file 
                (maybe ${filePath} is empty or invalid json?): ${parseError}`);
            }
        } catch (readError) {
            console.log(`Error reading ${filePath}:${readError}`);
        }
    }

    formatMessage(messageId: string, formats: object = {}) {
        try {
            const message = new IntlMessageFormat(this.messages[messageId], this.locale);
            return message.format(formats);
        } catch (err) {
            return messageId;
        }
    }
}
