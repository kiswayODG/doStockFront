
import CloseIcon from "@mui/icons-material/Close";
import { DialogProps } from './FullScreenDialog';
import { Dialog, AppBar, Toolbar, Typography, IconButton, Box, Button } from "@mui/material";

export const FormDialog = (props :DialogProps)=> {

  return (
      <Dialog
        open={props.isOpen}
        onClose={props.onClose}
      >
         <Box className="relative flex flex-row justify-between bg-blue-600 h-12">
          <Toolbar>
            <Typography className="textWrapper" variant="h6" component="div">
              {props.title}
            </Typography>
          </Toolbar>

          <Button onClick={props.onClose} className="cancel-btn-screen" endIcon={<CloseIcon sx={{color:"white",  backgroundColor:"red"}}/>}/>
           
        
        </Box>
        
        {props.children}
      </Dialog>
  );
}
export default FormDialog;