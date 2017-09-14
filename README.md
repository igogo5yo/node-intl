# NodeIntl

## Usage

Get the package via NPM: `npm i node-intl`.

```js
 const intl = NodeIntl.instance; // Create instance

 intl.locale = 'ru-RU'; // set locale

 intl.messages = {...}; // set messages

 intl.addMessages({...}); // add new messages

 intl.formatMessage('device.name', {prop: 'Name'}); // format messages
```
