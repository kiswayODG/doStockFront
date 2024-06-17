import { CategoryInterface } from "../model/CatgoryInterface";
interface propInterface {
    model? : CategoryInterface,
    onClose : ()=>void
}

 const AddUpdateCategory:React.FC<propInterface> = ({model, onClose})=>{

    return(
        <>
        </>
    )

 };

 export default AddUpdateCategory;