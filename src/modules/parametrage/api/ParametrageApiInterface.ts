import { ApiResponseInterface } from "api/ApiResponseInterface";
import { MagasinInterface } from "../model/MagasinInterface";
import { CategoryInterface } from "../model/CatgoryInterface";

export interface ParametrageApInterface {
    fetchMagasins:() => Promise<ApiResponseInterface<MagasinInterface[]>>;
    fetchCategories:()=> Promise<ApiResponseInterface<CategoryInterface[]>>;
}