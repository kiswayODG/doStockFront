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
import { Box, CircularProgress } from "@mui/material";
import { apiClient } from "api/api";

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
    const fetchData = async () => {
      await apiClient.parametrage.fetchCategories().then(
        (res)=> {
          setState((prevState)=>({
            ...prevState,
            data: res.data as CategoryInterface[],
            filteredData: res.data as CategoryInterface[],
            loading: false,
          }))
        }
      )
    };

    useEffect(() => {
      fetchData();
    });
  
    const addupdModal = useModal();
    const addDetailModal = useModal();
    
    const handleAddUpdateTiers = (cat : CategoryInterface) => {
      setState((prevState)=>({
        ...prevState,
        currentRow: cat
      }))
      addupdModal.toggle();
    };

    const handleDetail = (cat : CategoryInterface) => {
      setState((prevState)=>({
        ...prevState,
        currentRow: cat
      }))
      addDetailModal.toggle();
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
           onAction={handleAddUpdateTiers}
           />,
           <TableActions.deleteAction
           onAction={()=>{}}
           />
        ],
      },
      
    ];

    return (
        <Layout viewTitle="Catégorie">
            { (state.loading)? <Box  className="flex justify-center items-center h-screen"> <CircularProgress /> </Box>:
          <TableComponent
            columns={column}
            rows={state.filteredData}
            toolBarChildren={filterComponent()}
          />}
    
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