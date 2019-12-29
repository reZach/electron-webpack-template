const crypto = require("crypto");

let nonce = (function(){
    return crypto.randomBytes(16).toString("base64");
})();

module.exports = nonce;