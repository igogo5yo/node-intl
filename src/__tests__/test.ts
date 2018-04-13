import NodeIntl from '../index';
import { expect } from 'chai';
import { join } from 'path';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

const mockMessages = {
    'test': 'Test'
};
const mockLocale = 'te-ST';
const messagesFilePath = join(__dirname, 'te-ST.json');

const intl = NodeIntl.instance;

describe('NodeIntl test', () => {
    it('should set locale', () => {
        expect(intl.locale).not.to.equal(mockLocale);
        intl.locale = mockLocale;
        intl.messages = mockMessages;
        expect(intl.locale).to.equal(mockLocale);
        expect(intl.messages).to.equal(intl.messages);
    });

    it('should change locale', () => {
        intl.locale = mockLocale;
        intl.messages = mockMessages;
        expect(intl.locale).to.equal(mockLocale);
        expect(intl.messages).to.equal(intl.messages);
        intl.locale = 'new-Locale';
        expect(intl.messages).to.deep.equal({});
    });

    it('should load messages', () => {
        intl.messages = mockMessages;
        expect(intl.messages).to.equal(mockMessages);
    });

    it('should add messages', () => {
        const messages = {
            'test1': 'Test 1'
        };
        intl.messages = mockMessages;
        intl.addMessages(messages);

        expect(intl.messages).to.deep.equal({
            ...mockMessages,
            ...messages
        });
    });

    it('should add messages from file', () => {
        intl.messages = mockMessages;
        intl.addMessagesFromFile(messagesFilePath);

        expect(intl.messages).to.deep.equal({
            ...mockMessages,
            'test.string': 'Hi test'
        });
    });

    it('should format message', () => {
        expect(intl.formatMessage('test')).to.equal(mockMessages.test);
    });

    it('should return message id if no message', () => {
        expect(intl.formatMessage('no_text')).to.equal('no_text');
    });

    it('should add middleware', () => {
        intl.addMiddleware(() => ({}));
        intl.messages = mockMessages;
        expect(intl.messages).to.deep.equal({});
    });
});