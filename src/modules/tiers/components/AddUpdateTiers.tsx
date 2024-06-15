import {
  DialogContent,
  Grid,
  Box,
  Button,
  Typography,
  DialogActions,
} from "@mui/material";
import Controls from "components/control/controls";
import { TiersInterface } from "modules/tiers/model/TiersInterface";
import { Field, useFormik } from "formik";
import * as Yup from "yup";

interface viewPropsI {
  onClose: () => void;
  tiersModel?: TiersInterface;
}
const AddUpdateTiers: React.FC<viewPropsI> = ({ onClose, tiersModel }) => {
  const validateSchema = Yup.object().shape({
    nom: Yup.string().required("veuillez renseigner le libelle !"),
    tel: Yup.string().required("veuillez renseigner le code !"),
    localite: Yup.string().required("Veuillez entrée la localité"),
  });

  const formik = useFormik({
    initialValues: {
      id: tiersModel?.id || 0,
      nom: tiersModel?.nom || "",
      tel: tiersModel?.tel || "",
      adress: tiersModel?.adresse || "",
      email: tiersModel?.email || "",
      localite: tiersModel?.localite || "",
    },
    validationSchema: validateSchema,
    onSubmit(values, formikHelpers) {},
  });
  return (
    <>
      <DialogContent>
        <Grid>
          <form
            className="flex flex-col justify-center "
            onSubmit={formik.handleSubmit}
          >
            <Controls.TextFieldComponent
              className=""
              label="id"
              size="small"
              value={formik.values.id}
              hidden={true}
            />

            <Controls.TextFieldComponent
              label="Nom"
              size="small"
              name="nom"
              value={formik.values.nom}
              onChange={formik.handleChange}
              helperText={formik.touched.nom && formik.errors.nom}
              error={formik.touched.nom && Boolean(formik.errors.nom)}
            />

            <Controls.TextFieldComponent
              label="Numero telephone"
              size="small"
              name="tel"
              value={formik.values.tel}
              onChange={formik.handleChange}
              error={formik.touched.tel && Boolean(formik.errors.tel)}
              helperText={formik.touched.tel && formik.errors.tel}
            />

            <Controls.TextFieldComponent
              label="Localité"
              size="small"
              name="localite"
              value={formik.values.localite}
              onChange={formik.handleChange}
              error={formik.touched.localite && Boolean(formik.errors.localite)}
              helperText={formik.touched.localite && formik.errors.localite}
            />

            <Controls.TextFieldComponent
              label="Email"
              size="small"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <Controls.TextFieldComponent
              label="Adresse"
              size="small"
              name="adresse"
              value={formik.values.adress}
              onChange={formik.handleChange}
              error={formik.touched.adress && Boolean(formik.errors.adress)}
              helperText={formik.touched.adress && formik.errors.adress}
            />
          </form>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Controls.CancelButton onCancel={onClose} title="Annuler" />
        <Controls.OnActionButton type="submit" titre="Valider" />
      </DialogActions>
    </>
  );
};
export default AddUpdateTiers;
