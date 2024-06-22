import { TiersApInterface } from "./TiersApiInterface";
import { TiersApiModel } from "./TiersApiModel";

const tiersApiClient: TiersApInterface = new TiersApiModel();

export {
    tiersApiClient
}