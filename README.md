# NodeIntl

[![Build Status](https://travis-ci.org/igogo5yo/node-intl.svg?branch=master)](https://travis-ci.org/igogo5yo/node-intl)
[![NPM](https://img.shields.io/npm/dt/node-intl.svg "NPM package downloads")](https://www.npmjs.com/package/node-intl)
[![NPM](https://img.shields.io/npm/v/node-intl.svg "NPM package version")](https://www.npmjs.com/package/node-intl)

This library give you simple interface to work with intl.js and intl-messageformat.

## Usage

Install the package via NPM: `npm i node-intl`.

```js
 const intl = NodeIntl.instance; // Create instance

 intl.locale = 'en-US'; // set locale

 intl.messages = {...}; // set messages

 intl.addMessages({...}); // add new messages

 intl.addMessagesFromFile('path/to/file'); // add new messages from file

 intl.formatMessage('device.name', {prop: 'Name'}); // format messages
```
