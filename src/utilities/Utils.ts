import { UserInterface } from "modules/users/model/UserInterface";
import { Constante } from "./Constantes";
import { Typography } from "@mui/material";



export const removeDataFromLocalStorage=() =>{
    localStorage.clear();
}

export const redirectRootUrl =()=> {
    window.location.href = "/login"
}

export const setToken = (token : string) => {
    localStorage.setItem(Constante.TOKEN, token)
}

export const setUserConnected = (user : UserInterface) => {
    localStorage.setItem(Constante.USERLOGGED, JSON.stringify(user));
}



