import { ApiResponseInterface } from "api/ApiResponseInterface";
import { ParametrageEndpoints} from "./ParametrageEndPoint";
import { HttpRequestParamsInterface } from "../../../appConfigs/httpClient/models/HttpRequestParamsInterface";
import { HttpRequestType } from "appConfigs/httpClient/models/HttpRequestType";
import { getHttpClient } from "appConfigs/httpClient/HttpClientIndex";
import { MagasinInterface } from "../model/MagasinInterface";
import { ParametrageApInterface } from "./ParametrageApiInterface";
import { CategoryInterface } from "../model/CatgoryInterface";
import { Constante } from "@utilities/Constantes";

export class ParametrageApiModel implements ParametrageApInterface {
    
    
    public token = window.localStorage.getItem(Constante.TOKEN)

    fetchMagasins(): Promise<ApiResponseInterface<MagasinInterface[]>> {
        const requestParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            endpoint: ParametrageEndpoints.fetchMagasins,
            requiresToken: true,
            headers: {
                Authorization: this.token || ""
            }
           
        }
        return getHttpClient().request<ApiResponseInterface<MagasinInterface[]>>(requestParameters);
    }

    fetchCategories(): Promise<ApiResponseInterface<CategoryInterface[]>> {
        const requestParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            endpoint: ParametrageEndpoints.fetchCategories,
            requiresToken: true,
            headers: {
                Authorization: this.token || ""
            }
           
        }
        return getHttpClient().request<ApiResponseInterface<CategoryInterface[]>>(requestParameters);
    }

}