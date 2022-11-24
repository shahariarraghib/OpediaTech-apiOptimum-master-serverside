export default interface CreatePasscodeDto {
    emailUser: string,
    code: number,
    createdAt:Date,
    isValid: boolean
}