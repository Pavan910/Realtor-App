import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ForgorPassword from './pages/ForgorPassword'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/PrivateRoute';
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Create_Listing from './pages/Create_Listing';
import EditListing from './pages/EditListing';
import Listing from './pages/Listing';
import Category from './pages/Category';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Forgot-Password' element={<ForgorPassword />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/profile' element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/offers' element={<Offers />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/category/:category/:listingId' element={<Listing />} />
          <Route path="create_listing" element={<PrivateRoute/>}>
          <Route path='/create_listing' element={<Create_Listing />} />
          </Route>
          <Route path="edit_listing" element={<PrivateRoute/>}>
            <Route path="/edit_listing/:listingId" element={<EditListing/>}/>
            </Route>
        </Routes>
      </Router>
      <ToastContainer
      position="bottom-center"
      autoCLose={5000}
      hideProgressBar={false}
      newstOnTop={false}
      closeOnCLick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
      />
    </>
  );
}

export default App;
