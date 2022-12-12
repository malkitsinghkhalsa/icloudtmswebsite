export interface IAdminSendOTP {
    userName?: string | null,
    password?: string | null,
    loginOTP?: string | null,
    capchaValue?: string | null,
    Source?: string | null,
    identityModel?: {
        client_id?: string | null,
        client_secret?: string | null,
        grant_type?: string | null
    }
}


export class AdminSendOTP implements IAdminSendOTP {
    constructor(
        public userName?: string | null,
        public password?: string | null,
        public loginOTP?: string | null,
        public capchaValue?: string | null,
        public Source?: string | null,
        public identityModel?: {
            client_id?: string | null,
            client_secret?: string | null,
            grant_type?: string | null
        }
    ) { }
}

export interface IAdminForgotPassword {
    id?: string | null,
    password?: string | null,
    mobile?: string | null,
    emailAddress?: string | null,
    otp?: string | null
}