
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import CheckOut from './pages/CheckOut/CheckOut/CheckOut';
import Home from './pages/Home/Home/Home';
import Forgot from './pages/Login/Forgot/Forgot';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import SignUp from './pages/SignUp/SignUp';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails />}></Route>    {/* path e : er por je ongsho ta ache seta holo dynamic.etake bole route param ba url param.ekhane amra /service er pore amare jai lekhbo jemon /service/3 eta amader route kora element e niye jabe. */}

        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/forgot' element={<Forgot></Forgot>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
