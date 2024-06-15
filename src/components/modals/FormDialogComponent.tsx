
import CloseIcon from "@mui/icons-material/Close";
import "./fullScreenDialog.scss";
import { DialogProps } from './FullScreenDialog';
import { Dialog, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import React from "react";


export default function FormDialog(props :DialogProps) {

  return (
      <Dialog
        open={props.isOpen}
        onClose={props.onClose}
      >
         <AppBar className="relative bg-black flex flex-row justify-between items-center h-12">
          <Toolbar>
            <Typography className="textWrapper" variant="h6" component="div">
              {props.title}
            </Typography>
          </Toolbar>

          <IconButton onClick={props.onClose} className="cancel-btn-screen">
            <CloseIcon sx={{color:"white",  backgroundColor:"red"}}/>
          </IconButton>
        </AppBar>
        
        {props.children}
      </Dialog>
  );
}