import { ApiResponseInterface } from "api/ApiResponseInterface";
import { TiersApInterface } from "./TiersApiInterface";
import { TiersEndpoints } from "./TiersEndPoint";
import { HttpRequestParamsInterface } from "../../../appConfigs/httpClient/models/HttpRequestParamsInterface";
import { HttpRequestType } from "appConfigs/httpClient/models/HttpRequestType";
import { getHttpClient } from "appConfigs/httpClient/HttpClientIndex";
import { Constante } from "@utilities/Constantes";
import { TiersInterface } from "../model/TiersInterface";

export class TiersApiModel implements TiersApInterface {
    
    
    public token = window.localStorage.getItem(Constante.TOKEN)

    fetchTiers (): Promise<ApiResponseInterface<TiersInterface[]>> {
        const requestParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            endpoint: TiersEndpoints.fetchTiers,
            requiresToken: true,
            headers: {
                Authorization: this.token || ""
            }
            
           
        }
        return getHttpClient().request<ApiResponseInterface<TiersInterface[]>>(requestParameters);
    }

   
}