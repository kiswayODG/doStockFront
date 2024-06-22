
import { parametrageApiClient } from "@modules/parametrage/api/ParametrageApi";
import { ParametrageApInterface } from "@modules/parametrage/api/ParametrageApiInterface";
import { tiersApiClient } from "@modules/tiers/api/TiersApi";
import { TiersApInterface } from "@modules/tiers/api/TiersApiInterface";
import { usersApiClient } from "modules/users/api/UserApi";
import { UsersApInterface } from "modules/users/api/UserApiInterface";

interface ApiClientInterface {
    users: UsersApInterface,
    parametrage: ParametrageApInterface,
    tiers: TiersApInterface,

}

const apiClient: ApiClientInterface = {
    users: usersApiClient,
    parametrage: parametrageApiClient,
    tiers: tiersApiClient
}

export {
    apiClient
}