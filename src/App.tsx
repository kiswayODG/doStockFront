import { routes } from '@appConfigs/routes';
import { Routes, Route } from 'react-router';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Routes>
    {routes.map((item) => {
      return <Route path={item.path} element={<item.component/>}/>;
    })}
  </Routes>
  );
}

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="#">
        DoStock
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default App;
