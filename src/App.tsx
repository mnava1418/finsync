import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/AuthRoutes/PrivateRoute'
import PublicRoute from './components/AuthRoutes/PublicRoute'
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import SignUp from './components/pages/SignUp';

import { PATHS } from './config/constants';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path={PATHS.login} element={<PublicRoute><Login /></PublicRoute>} />
            <Route path={PATHS.signup} element={<PublicRoute><SignUp /></PublicRoute>} />
            <Route path={PATHS.home} element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
