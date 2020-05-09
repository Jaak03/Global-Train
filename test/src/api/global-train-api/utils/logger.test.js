/* eslint-disable no-undef */
const { expect } = require('chai');

const {
  isRecent,
} = require('../../../../../src/api/global-train-api/utils/logger');

describe('logger', () => {
  describe('isRecent', () => {
    it('return true if date is recent', () => {
      expect(isRecent('2020-05-09T14:30:00')).to.be.true;
    });
  });
});