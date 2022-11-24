import CheckOTPDto from "../dtos/smsOTP/check.dto"
import CreateOTPDto from "../dtos/smsOTP/create.dto"

require('dotenv').config()

const TWILIO_ACCOUNT_SID= process.env.TWILIO_ACCOUNT_SID
const TWILIO_AUTH_TOKEN= process.env.TWILIO_AUTH_TOKEN
const VERIFICATION_SID= process.env.VERIFICATION_SID

const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

export class SmsOTPService {

    public async createCodeForOTP(data: CreateOTPDto) {
        const channel = data.verificationMethod
        return await twilio.verify.services(VERIFICATION_SID)
            .verifications
            .create({ to: data.phoneNumber, channel: channel, locale: "fr" })
    }

    public async checkSmsCodeForOTP(data: CheckOTPDto) {
        return await twilio.verify.services(VERIFICATION_SID)
            .verificationChecks
            .create({ to: data.phoneNumber, code: data.code })
    }
}