// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// src/setupTests.js

import '@testing-library/jest-dom';

// Here, add portions of the warning messages you want to intentionally prevent from appearing
const MESSAGES_TO_IGNORE = [
  "When testing, code that causes React state updates should be wrapped into act(...):",
  "Error:",
  "The above error occurred"
];

const originalError = console.error.bind(console.error);

console.error = (...args) => {
  const ignoreMessage = MESSAGES_TO_IGNORE.find(message => args.toString().includes(message));
  if (!ignoreMessage) originalError(...args);
}


const MESSAGES_TO_IGNORETwo = [
  "When testing, code that causes React state updates should be wrapped into >act(...):",
  "Error:",
  "The above error occurred"
  ];
  
  const originalErrorTwo = console.error.bind(console.error);
  
  console.error = (...args) => {
  const ignoreMessage = MESSAGES_TO_IGNORETwo.find(message => args.toString().includes(message));
  if (!ignoreMessage) originalErrorTwo(...args);
  }
  
  jest.setTimeout(30000);