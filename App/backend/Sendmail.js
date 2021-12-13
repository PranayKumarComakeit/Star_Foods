const sendgrid = require('@sendgrid/mail');
const apikey = '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';
sendgrid.setApiKey(apikey);
const emailTemplates = require("./emailtemplate");
const shortid = require('shortid');
 const message = {
    to: 'sahithisiripuram1001@gmail.com ',
    from: "Vorugantipranay@gmail.com",
    subject: "Authentication Key",
    text: "Authenticate Yourselves",
    html: emailTemplates.Verify({username:"pranay", passkey:shortid.generate()}),
}
sendgrid
    .send(message).
    then((res) => console.log("Email is sent" + res))
    .catch((error) => console.log("Erorr message from sendgrid is" + error));