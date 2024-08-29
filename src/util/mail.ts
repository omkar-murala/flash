import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "Parikshitbhanushali@gmail.com", //change this
    pass: "sjlx jkue unce acfo", // change
  },
});

export const sendMail = async (obj:any) => {
  const { name, email, phone, companyName, markets, orders, message } = obj;
  try {
    const info = await transport.sendMail({
      from: `${email}`, // sender address  // sender address
      //to: "Parikshitbhanushali@gmail.com", // list of receivers    // user email
      to: "Parikshitbhanushali@gmail.com",
      subject: "Contact us", // Subject line
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html dir="ltr" lang="en">
      
      <head>
        <link rel="preload" as="image" href="https://d3l4smlx4vuygm.cloudfront.net/Flash%203-03%20(1).png" />
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
        <meta name="x-apple-disable-message-reformatting" /><!--$-->
      </head>
      
      <body style="background-color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif; color: #000033; margin: 0; padding: 0; line-height: 1.5;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center;"> 
            <img alt="Flash" src="https://d3l4smlx4vuygm.cloudfront.net/Flash%203-03%20(1).png" width="30" height="30" style="display: block; margin: 0 auto; height: 50px;" />
          </div>
          <div style="padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
            <h2 style="font-size: 24px; margin-bottom: 16px; text-align: center; color: #000033;">Contact Us</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company Name:</strong> ${companyName}</p>
            <p><strong>Which Markets you want to scale?</strong> ${markets}</p>
            <p><strong>How many orders do you do?</strong> ${orders}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <div style="font-size: 12px; color: #8898aa; text-align: center; margin-top: 20px; border-top: 1px solid #eaeaea; padding-top: 20px;">
            <p>Flashport Technologies Private Limited</p>
          </div>
        </div>
      </body>
      
      </html>`, 
    });
  } catch (error) {
    console.log(error)
  }
};
