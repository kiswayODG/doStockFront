
import { usersApiClient } from "modules/users/api/UserApi";
import { UsersApInterface } from "modules/users/api/UserApiInterface";

interface ApiClientInterface {
    users: UsersApInterface,

}

const apiClient: ApiClientInterface = {
    users: usersApiClient,
}

export {
    apiClient
}