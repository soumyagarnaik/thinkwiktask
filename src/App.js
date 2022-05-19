import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import DocumentDashboard from './pages/DocumentDashboard';

function App() {
  return (
    <BrowserRouter>
        <Routes>
             <Route  path='/' element={<Login/>} />
             <Route  path='/dashboard' element={<DocumentDashboard/>} />
             <Route  path='/register' element={<Register/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
