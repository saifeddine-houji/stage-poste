const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.userName = !isEmpty(data.userName) ? data.userName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.confirmPwd = !isEmpty(data.confirmPwd) ? data.confirmPwd : "";

    // Name checks
    if (Validator.isEmpty(data.userName)) {
        errors.userName = "Name field is required";
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.confirmPwd)) {
        errors.confirmPwd = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        console.log(data.password.length);
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.confirmPwd)) {
        errors.confirmPwd = "Passwords must match";
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };
};