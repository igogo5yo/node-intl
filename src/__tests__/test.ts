import NodeIntl from '../index';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

const mockMessages = {
    'test': 'Test'
};
const mockLocale = 'te-ST';

const intl = NodeIntl.instance;

describe('NodeIntl test', () => {
    it('should set locale', () => {
        expect(intl.locale).not.to.equal(mockLocale);
        intl.locale = mockLocale;
        expect(intl.locale).to.equal(mockLocale);
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

    it('should format message', () => {
        expect(intl.formatMessage('test')).to.equal(mockMessages.test);
    });
});