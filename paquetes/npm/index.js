const isEmail = require('is-email');
const passwordValidator = require('password-validator');

const schema = new passwordValidator();
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

const email = 'hola1551230.@gmail.com';
const password = 'validPASS';

console.error(schema.validate(password, { details: true }))

console.log(isEmail(email));
console.log(schema.validate(password));