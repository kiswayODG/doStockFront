import { Button } from "@mui/material"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React from "react";
import { Delete, Info } from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";



interface buttonInterface {
    toolTip? : string;
    disable? : boolean;
    onAction: (T?:any)=>void
}

const updateAction:React.FC<buttonInterface> = ({toolTip,disable,onAction})=> {
    return(
        <Button
        endIcon={<EditOutlinedIcon/>}
        title={toolTip||"Editer"}
        disabled={disable}
        sx={{color:"green"}}
        onClick={onAction}
        />
    )
}

const deleteAction:React.FC<buttonInterface> = ({toolTip,disable,onAction})=> {
    return(
        <Button
        endIcon={<Delete/>}
        title={toolTip||"Supprimer"}
        disabled={disable}
        sx={{color:"red"}}
        onClick={onAction}
        />
    )
}

const detailAction:React.FC<buttonInterface> = ({toolTip,disable,onAction})=> {
    return(
        <Button
        endIcon={<Info/>}
        title={toolTip||"Détail"}
        disabled={disable}
        sx={{color:"red"}}
        onClick={onAction}
        />
    )
}

const addAction:React.FC<buttonInterface> = ({toolTip,disable,onAction})=> {
    return(
        <Button
        endIcon={  <AddCircleOutlineIcon />}
        title={toolTip||"Ajouter"}
        disabled={disable}
        sx={{color:"green"}}
        onClick={onAction}
        />
    )
}


export const TableActions = {
    updateAction,
    deleteAction,
    detailAction,
}