import { ApiResponseInterface } from "api/ApiResponseInterface";
import { AuthenticationResponse, UserInterface } from "../model/UserInterface";

export interface UsersApInterface {
    userLogin:(userCredentials : UserInterface) => Promise<ApiResponseInterface<AuthenticationResponse>>;
    fetchUserList: () => Promise<ApiResponseInterface<UserInterface>>;
    fetchRoleList: () => Promise<ApiResponseInterface<[]>>;
}