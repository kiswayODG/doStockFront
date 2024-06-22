import Layout from "@components/Layout";
import { MagasinInterface } from "../model/MagasinInterface";
import TableComponent from "@components/TableComponent";
import { useEffect, useState } from "react";
import Controls from "@components/control/controls";
import useModal from "@components/hooks/useModal";
import FormDialog from "@components/modals/FormDialogComponent";
import { AddCircleOutlined } from "@mui/icons-material";
import { GridColDef } from "@mui/x-data-grid";
import { TableActions } from "@components/TableAction/TableActions";
import AddUpdateMagasin from "../components/AddUpdateMagasin";
import { apiClient } from "api/api";
import { Box, CircularProgress } from "@mui/material";

interface viewInterface {}

interface stateInterface {
  data: MagasinInterface[];
  filteredData: MagasinInterface[];
  currentRow: MagasinInterface;
  loading: boolean;
}

const MagasinView: React.FC = () => {
  const [state, setState] = useState<stateInterface>({
    data: [],
    filteredData: [],
    currentRow: {} as MagasinInterface,
    loading: true,
  });

  const fetchData = async () => {
    apiClient.parametrage.fetchMagasins().then((res) => {
      setState((prevState) => ({
        ...prevState,
        data: res.data as MagasinInterface[],
        filteredData: res.data as MagasinInterface[],
        loading: false,
      }));
    });
  };

  useEffect(() => {
    fetchData();
  });

  const addupdModal = useModal();
  const handleAddUpdateMagasin = () => {
    addupdModal.toggle();
  };

  const filterComponent = () => {
    return (
      <>
        <Controls.OnActionButton
          type="button"
          onAction={handleAddUpdateMagasin}
          titre="Magasin"
          icon={<AddCircleOutlined />}
        />
      </>
    );
  };

  const column: GridColDef<MagasinInterface>[] = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "nom",
      headerName: "Nom",
    },
    {
      field: "adresse",
      headerName: "Adresse",
    },
    {
      field: "tel",
      headerName: "Téléphone",
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
    <>
      <Layout viewTitle="Magasins">
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
          <AddUpdateMagasin
            onClose={addupdModal.toggle}
            model={state.currentRow}
          />
        </FormDialog>
      </Layout>
    </>
  );
};

export default MagasinView;
