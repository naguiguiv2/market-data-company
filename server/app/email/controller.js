const { sendMail } = require("../services/emailService");

module.exports.sendEmail = async (req, res) => {
  try {
    const { email, firstName, company, message } = req.body;
    await sendMail({ from: email, name: firstName, company, message });
    res.status(200).send({
      success: true
    });
  } catch (e) {
    res.sendStatus(404);
  }
};
