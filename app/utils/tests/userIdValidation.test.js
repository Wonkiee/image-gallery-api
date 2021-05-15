const assert = require('assert');
const { response } = require('express');
const userIdValidation = require('../validations/userIdValidation');

describe('Validaiton Utils', () => {

  it ('userIdValidation', () => {
    const result = userIdValidation("10", null);
    assert.equal(result, null);

    const errorResult = userIdValidation(null, null);
    assert.notEqual(errorResult, null);
  });
});