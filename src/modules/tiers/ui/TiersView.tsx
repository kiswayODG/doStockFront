import { GridColDef } from "@mui/x-data-grid";
import TableComponent from "@components/TableComponent";
import Layout from "@components/Layout";
import { TiersInterface } from "@modules/tiers/model/TiersInterface";
import { useEffect, useState } from "react";
import Controls from "@components/control/controls";
import { AddCircleOutlined } from "@mui/icons-material";
import useModal from "@components/hooks/useModal";
import FormDialog from "@components/modals/FormDialogComponent";
import AddUpdateTiers from "@modules/tiers/components/AddUpdateTiers";
import { TableActions } from "@components/TableAction/TableActions";
import { apiClient } from "api/api";
import { Box, CircularProgress } from "@mui/material";

interface viewStateI {
  data: TiersInterface[];
  filteredData: TiersInterface[];
  currentModel: TiersInterface | undefined;
  loading: boolean;
}
const TiersView: React.FC = () => {
  const [state, setState] = useState<viewStateI>({
    data: [],
    filteredData: [],
    currentModel: undefined,
    loading: true,
  });
  const addupdModal = useModal();

  const fetchData = async () => {
    apiClient.tiers.fetchTiers().then((res) => {
      setState((prevState) => ({
        ...prevState,
        data: res.data as TiersInterface[],
        filteredData: res.data as TiersInterface[],
        loading: false,
      }));
    });
  };

  useEffect(() => {
    fetchData();
  });

  const handleAddUpdateTiers = (tiers:TiersInterface) => {
    setState((prevState)=>({
      ...prevState,
      currentModel:tiers
    }))
    addupdModal.toggle();
  };

  const filterComponent = () => {
    return (
      <>
        <Controls.OnActionButton
          type="button"
          onAction={handleAddUpdateTiers}
          titre="Tiers"
          icon={<AddCircleOutlined />}
        />
      </>
    );
  };

  const column: GridColDef<TiersInterface>[] = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "nom",
      headerName: "Nom",
    },
    {
      field: "localite",
      headerName: "Localité",
    },
    {
      field: "tel",
      headerName: "Téléphone",
    },
    {
      field: "adresse",
      headerName: "Adresse",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "actions",
      headerName: "Action(s)",
      type: "actions",
      width: 200,
      getActions: (params) => [
        <TableActions.detailAction onAction={() => {}} />,
        <TableActions.updateAction onAction={() => {}} />,
        <TableActions.deleteAction onAction={() => {}} />,
      ],
    },
  ];

  return (
    <Layout viewTitle="Tiers (Client/Fournisseurs)">
      {state.loading ? (
        <Box className="flex justify-center items-center h-screen">
          {" "}
          <CircularProgress />{" "}
        </Box>
      ) : (
        <TableComponent
          columns={column}
          rows={state.filteredData}
          toolBarChildren={filterComponent()}
        />
      )}

      <FormDialog onClose={addupdModal.toggle} isOpen={addupdModal.isOpen}>
        <AddUpdateTiers
          onClose={addupdModal.toggle}
          tiersModel={state.currentModel}
        />
      </FormDialog>
    </Layout>
  );
};

export default TiersView;
