import { env } from "../../schemas/env.schema.js";
import { emailLayout } from "./email.layout.js";

const welcomeEmailBody = (username: string) => {
    return emailLayout(`
    <p>Hello ${username},</p>
    <p>Welcome to OneChat! We're excited to have you on board. Our application offers a range of features designed to enhance your communication experience:</p>
    <ul>
        <li>End-to-End Encryption</li>
        <li>Private Key Recovery</li>
        <li>Push Notifications</li>
        <li>Real-time Messaging</li>
        <li>Friends Feature</li>
        <li>Group Chats</li>
        <li>User Presence</li>
        <li>Typing Indicators</li>
        <li>Message Seen Status</li>
        <li>Edit Messages</li>
        <li>Delete Message</li>
        <li>File Sharing</li>
        <li>GIF Sending</li>
        <li>Polling</li>
        <li>OAuth Integration</li>
        <li>Verification Badge</li>
        <li>Many More upcoming features which are in developement stage</li>
    </ul>
    <p>I constantly working to improve OneChat and add new features. If you have any questions or feedback, feel free to reach out to us at <a href="mailto:onechat.llp@gmail.com">onechat.llp@gmail.com</a>.</p>
    <p>Thank you for joining us. We look forward to helping you stay connected!</p>
    <p>Best regards,<br>The OneChat Team</p>`,'welcome'
    )
};

const resetPasswordBody = (username: string, resetUrl: string) => {
    return emailLayout(`
        <p>Hi ${username},</p>
        <p>We received a request to reset your password for your OneChat account.</p>
        <p>To create a new password, please click on the following link:</p>
        <a href=${resetUrl}>
            <button>Reset Password</button>
        </a>
        <p>This link will expire in 24 hours. If you did not request a password reset, you can safely ignore this email.</p>
        <p>If you continue to have trouble accessing your account, please contact our support team at <a href="mailto:onechat.llp@gmail.com">OneChat.llp@gmail.com</a>.</p>
        <p>Thanks,</p>
        <p>The OneChat Team</p>
    `,'resetPassword')
};

const otpVerificationBody = (username: string, otp: string) => {
    return emailLayout(`
        <p>Hi ${username},</p>
        <p>A verification code is required to access your OneChat account.</p>
        <p>Your one-time verification code (OTP) is:</p>
        <p class='otp'>${otp}</p>
        <p>This code is valid for ${env.OTP_EXPIRATION_MINUTES} minutes. Please enter it on the verification page to proceed.</p>
        <p>If you did not request OTP verification, you can safely ignore this email.</p>
        <p>For your security, please do not share this code with anyone.</p>
        <p>Thanks,</p>
        <p>The OneChat Team</p>
    `,'OTP')
};

const privateKeyRecoveryBody = (username:string,verificationUrl:string) => {
    return emailLayout(`
        <p>Hello ${username},</p>
        <p>We received a request to recover the private key associated with your OneChat account. Your private key is essential for decrypting messages and ensuring the confidentiality of your communication.</p>
        <p>To ensure the security of your account, we require you to verify this request. If you did not initiate a private key recovery, simply disregard this email. Your account and private key remain safe.</p>
        <a href="${verificationUrl}">
            <button>Verify Private Key Recovery</button>
        </a>
        <p>For security reasons, this link will expire in ${env.OTP_EXPIRATION_MINUTES} minutes.</p>
        <p>Thank you for your prompt attention to this matter.</p>
        <p>Best regards,</p>
        <p>OneChat Support Team</p>
    `,'privateKeyRecovery')
};


export {
  resetPasswordBody,
  otpVerificationBody,
  welcomeEmailBody,
  privateKeyRecoveryBody,
};
