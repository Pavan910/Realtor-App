import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ForgorPassword from './pages/ForgorPassword'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Offers from './pages/Offers'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Forgot-Password' element={<ForgorPassword />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/offers' element={<Offers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
