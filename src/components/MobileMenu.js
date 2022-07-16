import { Search , Close } from '@material-ui/icons';
import {Link , useHistory} from 'react-router-dom';
import React , {useState} from 'react';
import { PermIdentityOutlined  } from '@material-ui/icons';
import './MobileMenu.css';

const MobileMenu = () => {

  const user = JSON.parse(localStorage.getItem("user"));

    let mobileMenu = document.querySelector('.mobile_menu');
  const [searchVal , setSearchVal ] = useState('');
  const showNavMenu = () => {
  
    mobileMenu.classList.toggle('active')
  }

  const history = useHistory();

  const handleSearch = (e , query) => {
    e.preventDefault();
    mobileMenu.classList.remove('active')

    history.push({
      pathname: '/search',
      search: `?query=${query}`,
  });
}

  return (
    <div className='mobile_menu' >
   
        <div className="flex-col">
                 <Close onClick={() => showNavMenu() }  />
        <ul className="mobile_ul">
            <li> <Link to="/" > <img src="/images/logoWebsite.jpg" alt="" /> </Link> </li>
            <li>  
            <div className="input_container">
                  <form onSubmit={(e) => handleSearch(e , searchVal)  } >
                <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value) } placeholder="ابحث في المتجر"  />
                  <Search onClick={(e) => handleSearch(e , searchVal) } />
                </form>

              </div>
           </li>
            <li>  <Link to="/" >  <h4>معاهد قولدن كورس</h4> </Link>  </li>
            <ul className="mobile_menu_links">
          <li><Link to="/">      الصفحة الرئيسية  </Link></li>
          <li><Link to="/products">     جميع المنتجات</Link></li>
          <li><Link to="/categories/diploma">    برامج الدبلوم</Link></li>
          <li><Link to="/categories/computer"> دورات  الحاسب الألي</Link></li>
          <li><Link to="/categories/english"> دورات اللغة الانجليزية</Link></li>
          <li><Link to="/categories/educational"> دورات  تربوية</Link></li>
          <li><Link to="/categories">جميع التصفيات</Link> </li>
        </ul>
        {user ? (
          <Link to="/profile"  >
            <div className='profile_logged_mobile' >
               
            <p> {user.username} </p>
            <PermIdentityOutlined />
           
            </div>
            </Link>
        ) : (
          <div  >
          <li> <Link to="/signIn"  >    <button className="main_btn">تسجيل الدخول</button> </Link> </li>
          </div>
        )}
           
        </ul>
        </div>
       
    </div>
  )
}

export default MobileMenu