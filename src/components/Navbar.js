import React , {useState , useContext} from 'react';
import {Search , ShoppingCart , Menu , PermIdentityOutlined  } from '@material-ui/icons';

import './Navbar.css';
import {AppContext} from '../contexts/AppContext'
import MobileMenu from './MobileMenu';
import { Link , useHistory    } from 'react-router-dom';


const Navbar = () => {

  const [cartShowing , setCartShowing] = useState(false);
  const [shippingShowing , setShippingShowing] = useState(false);
  const [searchVal , setSearchVal ] = useState('');

  const {carts} = useContext(AppContext);
  const {price} = useContext(AppContext);
  const [cartItems  ] = carts;
  const [priceValue  ] = price;
  const history = useHistory();
   const user = JSON.parse(localStorage.getItem("user"));

  

  const handleSearch = (e , query) => {
    e.preventDefault();
   
    history.push({
      pathname: '/search',
      search: `?query=${query}`,
  });

  }

  const showNavMenu = () => {
    let mobileMenu = document.querySelector('.mobile_menu');
    mobileMenu.classList.toggle('active')
  }


  return (
    <div className='' >
        <div className="navbar--flex-sp ">
          <div className="container-mid">
          <div className="navbar_right">
        <ShoppingCart onClick={() => setCartShowing(!cartShowing) } style={{ cursor: 'pointer' }} />
        <div className="mobile_sidebar " onClick={() => showNavMenu()  } >
      <Menu  />
        </div>
        <div className='d-flex-c' >
        <span className='mx-1' >|</span>
        {user ? (
          <Link to="/profile"  >
            <div className='d-flex-c profile_logged' >
               
            <p> {user.username} </p>
            <PermIdentityOutlined />
           
            </div>
            </Link>
        ) : (
          <Link to="/signIn"  >
          <button className="main_btn">تسجيل الدخول</button>
          </Link>
        )}
       
          
            <span className='mx-1' >|</span>

    <img onClick={() => setShippingShowing(!shippingShowing) } src="/images/saudi-arabia.png" style={{cursor: 'pointer'}}  alt="" />
        </div>

         

        </div>
        <div className="navbar_center">
              <div className="input_container">
                
                <form onSubmit={(e) => handleSearch(e , searchVal)  } >
                <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value) } placeholder="ابحث في المتجر"  />
                  <Search onClick={(e) => handleSearch(e , searchVal) } />
                </form>
                 

              </div>
            </div>
            <div className="navbar_left">
            

             
            <h4>معاهد قولدن كورس</h4>
            <Link to="/">
                <img src="/images/logoWebsite.jpg" alt="" />
                </Link>
            </div>
           
           
        </div>
          </div>
       

    <MobileMenu />

    {shippingShowing && (
            <div className="shipping_area" >
                <h1>الشحن الى</h1>
                <div className="shipping_address d-flex-c mt-1">
                
                <p>السعودية</p>
                 <img  src="/images/saudi-arabia.png"   alt="" />
                  <input type="checkbox" name="" id="" />
                 
                
                </div>
            </div>
          )}

          {cartShowing && (
            <div className="shopping_area">
              <div className="d-flex-c f-sp">
             
              <ShoppingCart onClick={() => setCartShowing(!cartShowing) } style={{ cursor: 'pointer' }} />
              <h1> المجموع: {priceValue} ر.س</h1>
             
              </div>
              <div className="mt-3"></div>
              {cartItems ? cartItems.map(({ course_id ,course_name , cover_image , course_price , itemsNumber }) => (
                  <div className="d-flex-c cart_items" key={course_id} > 
                     
                      <div>
                        <p className='course_shopping_name' > {course_name} </p>
                       
                       <div className="d-flex-c">
                       <p className="current_price"> <span>ر.س {course_price} </span> </p>
                        <p style={{ margin: '0 5px'}} > x {itemsNumber} </p>
                       </div>
                      
              
                      </div>
                      <img src={cover_image} alt={course_name} />
                  </div>
              )) : ''}

          <Link to="/cart/view">
              <button className="text-center filter_btn green">اتمام عملية الشراء</button>
              </Link>
            </div>
          )}

    </div>
  )
}

export default Navbar