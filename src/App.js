import './App.css';
import Login from './component/login/Login';
import Product from './component/product/Product';
import { Route, Routes ,Navigate} from 'react-router-dom';

const App=()=> {
  return (
    <>
    <Routes>
    <Route  path='*' element={<Navigate to="/login"></Navigate>}/>
    <Route path='/login' element={<Login />}/>
   <Route path='/product' element={<Product />}/>
    </Routes>
     </>
  );
}

export default App;
