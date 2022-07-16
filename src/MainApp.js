import React from 'react';
import {Switch , Route , useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import TopArea from './components/TopArea';
import ListNav from './components/ListNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Categoris from './pages/Categoris';
import CategoryPage from './pages/CategoryPage';
import ShipmentPage from './pages/ShipmentPage';
import LicensePage from './pages/LicensePage';
import TestPage from './pages/TestPage';
import TermsPage from './pages/TermsPage';
import SignInPage from './pages/SignInPage';
import SingleCoursePage from './pages/SingleCoursePage';
import CartView from './pages/CartView';
import PaymentPage from './pages/PaymentPage';
import SearchPage from './pages/SearchPage';
import CreateUserPage from './pages/CreateUserPage';
import ProfilePage from './pages/ProfilePage';

const MainApp = () => {
    let location = useLocation();
    const isSignInRendering = location.pathname === '/signIn' || location.pathname === '/checkout/payment' || location.pathname === '/user/create' ;

  return (
    <div>
        <>
        {!isSignInRendering && (
      <TopArea />
    )} 
    
     <div className="app_container">
       {!isSignInRendering && (
 <Navbar />
       )}
    
      
     
     </div>

        {!isSignInRendering && (
 <ListNav />
        )}
    
    

       <Switch>
      
      <Route exact path="/">
      <Home />
      </Route>

      <Route exact path="/products">
      <Products />
      </Route>
      
      <Route exact path="/signIn">
      <SignInPage />
      </Route>

      <Route exact path="/checkout/payment">
      <PaymentPage />
      </Route>
     

      <Route exact path="/categories">
      <CategoryPage />
      </Route>

      <Route exact path="/pages/shipping">
      <ShipmentPage />
      </Route>

      <Route exact path="/cart/view">
      <CartView />
      </Route>

      <Route exact path="/pages/license">
      <LicensePage />
      </Route>

      <Route exact path="/pages/exam-test">
      <TestPage />
      </Route>

      <Route exact path="/pages/terms-and-conditions">
      <TermsPage />
      </Route>

      <Route exact path="/user/create">
      <CreateUserPage />
      </Route>

      <Route exact path="/profile">
      <ProfilePage />
      </Route>

      <Route exact path="/categories/:categoty">
      <Categoris  />
      </Route>

      <Route exact path="/course/:id/:course">
      <SingleCoursePage   />
      </Route>

      <Route exact path="/search">
      <SearchPage   />
      </Route>

      

       </Switch>
       {!isSignInRendering && (
   <Footer />
     )}
        </>
    </div>
  )
}

export default MainApp