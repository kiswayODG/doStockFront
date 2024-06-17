import Controls from "@components/control/controls";
import Layout from "@components/Layout";
import FormDialog from "@components/modals/FormDialogComponent";
import TableComponent from "@components/TableComponent";
import { AddCircleOutlined } from "@mui/icons-material";
import { CategoryInterface } from "../model/CatgoryInterface";
import { GridColDef } from "@mui/x-data-grid";
import { TableActions } from "@components/TableAction/TableActions";
import { useEffect, useState } from "react";
import useModal from "@components/hooks/useModal";
import { boolean } from "yup";
import AddUpdateCategory from "../components/AddUpdateCategory";

interface viewInterface {

}

interface stateInterface {
    data : CategoryInterface[],
    filteredData : CategoryInterface[],
    currentRow : CategoryInterface,
    loading : boolean,
}

const CategoryView : React.FC = ()=>{

    const [state,setState] = useState<stateInterface>({
        data : [],
        filteredData : [],
        currentRow : {} as CategoryInterface,
        loading : true,
    })
    const fetchData = async () => {};

    useEffect(() => {
      fetchData();
    });
  
    const addupdModal = useModal();
    const handleAddUpdateTiers = () => {
      addupdModal.toggle();
    };
  
    const filterComponent = () => {
      return (
        <>
          <Controls.OnActionButton
            type="button"
            onAction={handleAddUpdateTiers}
            titre="Catégorie"
            icon={<AddCircleOutlined />}
          />
        </>
      );
    };
  
    const column: GridColDef<CategoryInterface>[] = [
      {
        field: "id",
        headerName: "ID",
      },
      {
        field: "code",
        headerName: "Code",
      },
      {
        field: "libelle",
        headerName: "Libelle",
      },
      {
        field: "actions",
        headerName: "Action(s)",
        type: "actions",
        width: 200,
        getActions: (params) => [
          <TableActions.detailAction
           onAction={()=>{}}
           />,
           <TableActions.updateAction
           onAction={()=>{}}
           />,
           <TableActions.deleteAction
           onAction={()=>{}}
           />
        ],
      },
      
    ];

    return (
        <Layout viewTitle="Catégorie">
          <TableComponent
            columns={column}
            rows={[]}
            toolBarChildren={filterComponent()}
          />
    
          <FormDialog onClose={addupdModal.toggle} isOpen={addupdModal.isOpen}>
            <AddUpdateCategory
              onClose={addupdModal.toggle}
              model={state.currentRow}
            />
          </FormDialog>
        </Layout>
      );
}

export default CategoryView;