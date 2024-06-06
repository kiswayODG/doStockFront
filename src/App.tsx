
import { routes } from 'appConfigs/routes';
import { Routes, Route } from 'react-router';
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

export default App;
