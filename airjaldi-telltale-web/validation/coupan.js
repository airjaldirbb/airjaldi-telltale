const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCoupanInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.coupan  = !isEmpty(data.coupan ) ? data.coupan  : "";
  data.percent   = !isEmpty(data.percent  ) ? data.percent   : "";
  data.date   = !isEmpty(data.date  ) ? data.date   : "";


  if (Validator.isEmpty(data.coupan )) {
    errors.coupan = "coupan  field is required";
  }

  if (Validator.isEmpty(data.percent )) {
    errors.percent = "Percent  field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
