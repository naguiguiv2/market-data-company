const { sendMail } = require("../services/emailService");

module.exports.sendEmail = async (req, res) => {
  const { email } = req.body;
  try {
    await sendMail({ from: email });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
};
