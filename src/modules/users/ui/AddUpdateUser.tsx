import {
  Box,
  createTheme,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
} from "@mui/material";
import { UserInterface } from "../model/UserInterface";
import Controls from "@components/control/controls";
import { useFormik } from "formik";
import * as Yup from "yup";

interface viewPropsI {
  user?: UserInterface;
  onCancel?: () => void;
}

interface viewState {}

const AddUpdateUser: React.FC<viewPropsI> = ({ user, onCancel }) => {
  const validateSchema = Yup.object().shape({
    fullname: Yup.string().required("veuillez renseigner le nom et prénom !"),
    username: Yup.string().required(
      "veuillez renseigner le nom d'utilisateur !"
    ),
    password: Yup.string().required("veuillez renseigner le mot de passe !"),
    locality: Yup.string().required("veuillez renseigner la localité !"),
    telephone: Yup.string().required("veuillez renseigner le telephone !"),
  });

  const formik = useFormik({
    initialValues: {
      id: user?.id || 0,
      fullname: user?.fullName || "",
      username: user?.username || "",
      cnib: user?.cnib || "",
      password: "",
      email: user?.email || "",
      locality: user?.locality || "",
      telephone: user?.telephone || "",
    },
    validationSchema: validateSchema,

    onSubmit(values, formikHelpers) {
      let userToregister : UserInterface = {
        fullName: values.fullname,
        username: values.username,
        password: values.password,
        cnib: values.cnib,
        email: values.email,
        id: values.id,
        locality: values.locality,
        telephone: values.telephone,
      }
      
    },
  });

  const defaultTheme = createTheme();

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={7}
            component={Paper}
            elevation={6}
            square
          >
            <form onSubmit={formik.handleSubmit}>
              <Box
                sx={{
                  mt: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Controls.TextFieldComponent
                  label="Nom & prénom"
                  name="fullname"
                  onChange={formik.handleChange}
                  value={formik.values.fullname}
                  helperText={formik.touched.fullname && formik.errors.fullname}
                  error={
                    formik.touched.fullname && Boolean(formik.errors.fullname)
                  }
                  required
                  size="small"
                  className="w-3/5"
                />

                <Controls.TextFieldComponent
                  label="No. CNIB"
                  name="cnib"
                  onChange={formik.handleChange}
                  value={formik.values.cnib}
                  helperText={formik.touched.cnib && formik.errors.cnib}
                  error={formik.touched.cnib && Boolean(formik.errors.cnib)}
                  size="small"
                  className="w-3/5"
                />

                <Controls.TextFieldComponent
                  label="No. Telephone"
                  name="telephone"
                  onChange={formik.handleChange}
                  value={formik.values.telephone}
                  helperText={
                    formik.touched.telephone && formik.errors.telephone
                  }
                  error={
                    formik.touched.telephone && Boolean(formik.errors.telephone)
                  }
                  required
                  size="small"
                  className="w-3/5"
                />

                <Controls.TextFieldComponent
                  label="Nom d'utilisateur"
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  helperText={formik.touched.username && formik.errors.username}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  required
                  size="small"
                  className="w-3/5"
                />

                <Controls.TextFieldComponent
                  label="Mot de passe"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  helperText={formik.touched.password && formik.errors.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  required
                  size="small"
                  className="w-3/5"
                />

                <Controls.TextFieldComponent
                  label="Email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  helperText={formik.touched.email && formik.errors.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  size="small"
                  className="w-3/5"
                />

                <Controls.TextFieldComponent
                  label="Localité"
                  name="locality"
                  onChange={formik.handleChange}
                  value={formik.values.locality}
                  helperText={formik.touched.locality && formik.errors.locality}
                  error={
                    formik.touched.locality && Boolean(formik.errors.locality)
                  }
                  size="small"
                  className="w-3/5"
                />
              </Box>
              <Box className="flex flex-row justify-end space-x-3 mr-40">
                <Controls.CancelButton title="Annuler" path="/" />
                <Controls.OnActionButton
                  type="submit"
                  titre="Valider"
                  // onAction={formik.handleSubmit}
                />
              </Box>
            </form>
          </Grid>
          <Grid
            item
            xs={4}
            sm={8}
            md={5}
            className="bg-blue-200 w-16"
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
};
export default AddUpdateUser;
