import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigation } from "appConfigs/Navigation";
import { useState } from "react";
import { apiClient } from "api/api";
import { Navigate, useNavigate } from "react-router";
import { UserInterface, AuthenticationResponse } from "modules/users/model/UserInterface";
import { setToken, setUserConnected } from "../../../utilities/Utils";


export function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://#/">
        DoStock
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

interface viewStateI {
  username: string;
  password: string;
  error: string;
}

export default function Login() {
  const [state, setState] = useState<viewStateI>({
    username: "",
    error : "",
    password: "",
  });

  const navigate = useNavigate()
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let user:UserInterface = {
      username : state.username,
      password : state.password,
    }
    navigate(Navigation.DASHBOARD);
    await apiClient.users.userLogin(user)
    .then((res)=>{
      let result = res.data as AuthenticationResponse;
     
      
      if(result.accessToken.length>0){
        setToken(result.accessToken);
        navigate(Navigation.DASHBOARD);
      }else{
        setState((prevState)=>({
          ...prevState,
          error : "Nom d'utilisateur ou mot de passe incorrect !"

        }))
        return
      }
    }).catch((error)=>
    console.log(error))

    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("username"),
    //   password: data.get("password"),
    // });

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={4}
          sm={8}
          md={7}
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Connexion
            </Typography>
            <label className="errorLabel text-red-600">{state.error}</label>
            <Box
              component="form"
              className="w-3/4"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                size="small"
                id="username"
                label="username Address"
                name="username"
                autoComplete="username"
                autoFocus
                fullWidth
                value={state.username}
                onChange={(newValue)=>{
                  setState((prevState)=>({
                    ...prevState,
                    username : newValue.target.value
                  }))
                }}
              />
              
              <br />
              <TextField
                margin="normal"
                required
                size="small"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={state.password}
                onChange={(newValue) => {

                  setState((prevState) => ({
                    ...prevState,
                    password: newValue.target.value,
                  }));

                }}
                fullWidth
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               // href={Navigation.DASHBOARD}
              >
                Se connecter
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Mot de passe oublié?
                  </Link>
                </Grid>

                <Grid item>
                  <Link href="/new-user" variant="body2">
                    {"Demander un compte"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
