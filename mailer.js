const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: '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'
  }
}))


const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'johannes.walenta@googlemail.com',
    subject: `New message from ${from}`,
    text,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = {
    send
}