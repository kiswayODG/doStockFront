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
  const fetchData = async () => {};

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
        <TableComponent
          columns={column}
          rows={[]}
          toolBarChildren={filterComponent()}
        />

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
