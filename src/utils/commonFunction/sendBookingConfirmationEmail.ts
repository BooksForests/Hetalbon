/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";

export const sendBookingConfirmationEmail = async (
  to: string,
  bookingDetails: any
) => {
  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or your SMTP provider
    auth: {
      user: process.env.SMTP_EMAIL, // Your email
      pass: process.env.SMTP_PASSWORD, // Your app password
    },
  });

  // Customize your email content
  const mailOptions = {
    from: `"Resort Booking" <${process.env.SMTP_EMAIL}>`,
    to: to,
    subject: "🏖️ Booking Confirmed - Your Resort Stay",
    html: `
			<h2>Hi there,</h2>
			<p>Your booking has been confirmed! 🎉</p>
			<p><strong>Check-in:</strong> ${bookingDetails.checkInDate}</p>
			<p><strong>Check-out:</strong> ${bookingDetails.checkOutDate}</p>
			<p><strong>Total Guests:</strong> ${bookingDetails.guestCount}</p>
			<p><strong>Room Type:</strong> ${bookingDetails.roomType}</p>
			<p><strong>Total Price:</strong> ₹${bookingDetails.totalPrice}</p>
			<p>We’re excited to host you. You’ll receive further updates closer to your check-in date.</p>
			<br/>
			<p>Best regards,<br/>The Resort Team</p>
		`,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};
