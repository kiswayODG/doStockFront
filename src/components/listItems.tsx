import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { modules,parametrages } from 'appConfigs/routes';


export const mainListItems = (
  <React.Fragment>
    {modules.map((item)=>(
      <ListItemButton href={item.path}>
      <ListItemIcon>
        <item.icon/>
      </ListItemIcon>
      <ListItemText primary={item.titre} />
    </ListItemButton>
    ))}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Paramétrages
    </ListSubheader>
{parametrages.map((item)=>(
   <ListItemButton href={item.path}>
   <ListItemIcon>
     <item.icon/>
   </ListItemIcon>
   <ListItemText primary={item.titre} />
 </ListItemButton>
))}
   

  </React.Fragment>
);