import { MagasinInterface } from "../model/MagasinInterface";
interface propInterface {
    model? : MagasinInterface,
    onClose : ()=>void
}

 const AddUpdateMagasin:React.FC<propInterface> = ({model, onClose})=>{

    return(
        <>
        </>
    )

 };

 export default AddUpdateMagasin;