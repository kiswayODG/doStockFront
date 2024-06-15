export interface UserInterface {
    id? : number,
    password : string,
    username : string
}

export interface AuthenticationResponse {
    message : string,
    accessToken : string,
    refreshToken : string,
}
