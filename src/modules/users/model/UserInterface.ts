export interface UserInterface {
    id? : number,
    password : string,
    username : string,
    fullName? : string,
    locality? : string,
    cnib? : string,
    email? : string,
    telephone?:string
}

export interface AuthenticationResponse {
    message : string,
    accessToken : string,
    refreshToken : string,
}
