import { ApiResponseInterface } from "api/ApiResponseInterface";
import { AuthenticationResponse, UserInterface } from "../model/UserInterface";

export interface UsersApInterface {
    userLogin:(userCredentials : UserInterface) => Promise<ApiResponseInterface<AuthenticationResponse>>;
    createUser:(newUser : UserInterface) => Promise<ApiResponseInterface<UserInterface>>;
    fetchUserList: () => Promise<ApiResponseInterface<UserInterface>>;
    fetchRoleList: () => Promise<ApiResponseInterface<[]>>;
}