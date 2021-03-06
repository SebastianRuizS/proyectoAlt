import './App.css';
import Home from './home/pages/Home';
import Footer from './shared/Footer';
import GeneralHeader from './shared/GeneralHeader';
import RegistroProductos from './productoAdmin/pages/RegistroProductos';
import Productos from './productoAdmin/pages/Productos'
import RegistroVentas from './ventaAdmin/pages/RegistroVentas';
import Ventas from './ventaAdmin/pages/Ventas';
import ActualizarVenta from './ventaAdmin/components/ActualizarVenta';
import GestionUsuario from './gestiónUsuario/pages/GestionUsuario';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
        Route,
        Switch,
        Redirect} from "react-router-dom";

const App = () => {

  return (
    <div>
    <Router>
    <GeneralHeader/>
      <Switch>
        <Route path = "/" exact>
          <Home/>
        </Route>
        <Route path = "/SignProducts" exact>
          <RegistroProductos/>
        </Route>
        <Route path = "/ManageProducts" exact>
          <Productos/>
        </Route>
        <Route path = "/SignSales" exact>
          <RegistroVentas/>
        </Route>
        <Route path ="/ManageSales" exact>
          <Ventas/>
        </Route>
        <Route path ="/ManageSales/Update" exact>
          <ActualizarVenta/>
        </Route>
        <Route path ="/AboutUsers" exact>
          <GestionUsuario/>
        </Route>
        <Redirect to = "/"/>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
