import IntlMessageFormat from 'intl-messageformat';

export default class NodeIntl {
    private _messages: object = {};
    private _locale: string = 'en-US';
    private static _instance: NodeIntl;

    private constructor() {}

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    get messages():object {
        return this._messages;
    }

    set messages(messages:object) {
        this._messages = messages;
    }

    get locale():string {
        return this._locale;
    }

    set locale(locale:string) {
        this._locale = locale;
    }

    addMessages(newMessages:object) {
        this.messages = {
            ...this.messages,
            ...newMessages
        };
    }

    formatMessage(messageId:string, formats:object = {}) {
        const message = new IntlMessageFormat(this.messages[messageId], this.locale);
        return message.format(formats);
    }
}
