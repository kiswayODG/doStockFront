import { GridColDef } from "@mui/x-data-grid";
import TableComponent from "components/TableComponent";
import Layout from "components/Layout";
import { TiersInterface } from "modules/tiers/model/TiersInterface";
import { useEffect, useState } from "react";
import Controls from "components/control/controls";
import { AddCircleOutlined } from "@mui/icons-material";
import useModal from "components/hooks/useModal";
import FormDialog from "components/modals/FormDialogComponent";
import AddUpdateTiers from "modules/tiers/components/AddUpdateTiers";

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
    loading: false,
  });
  const addupdModal = useModal();

  const fetchData = async () => {};

  useEffect(() => {
    fetchData();
  });

  const handleAddUpdateTiers = () => {
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
  ];

  return (
    <Layout viewTitle="Tiers (Client/Fournisseurs)">
      <TableComponent
        columns={column}
        rows={[]}
        toolBarChildren={filterComponent()}
      />

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
