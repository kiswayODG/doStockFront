import { ParametrageApInterface } from "./ParametrageApiInterface";
import { ParametrageApiModel } from "./ParametrageApiModel";


const parametrageApiClient: ParametrageApInterface = new ParametrageApiModel();

export {
    parametrageApiClient
}