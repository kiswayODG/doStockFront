import { ApiResponseInterface } from "api/ApiResponseInterface";
import { TiersInterface } from "../model/TiersInterface";

export interface TiersApInterface {
    fetchTiers: ()=> Promise<ApiResponseInterface<TiersInterface[]>>
}