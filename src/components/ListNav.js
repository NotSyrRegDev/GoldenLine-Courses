import React from 'react';
import { Link } from 'react-router-dom';
import './ListNav.css';

const ListNav = () => {
  return (
    <div className='list_nav mt-1' >
      <div className="d-flex-c f-sp container-mid">
      <div>
        <Link to="/pages/shipping">

          <button className="buy_btn">خيارات الدفع و التوصيل</button>
          </Link>
        </div>

        <ul className="ul_flex">
          <li><Link to="/categories">جميع التصفيات</Link> </li>
          <li><Link to="/categories/english"> دورات اللغة الانجليزية</Link></li>
          <li><Link to="/categories/educational"> دورات  تربوية</Link></li>
          <li><Link to="/categories/computer"> دورات  الحاسب الألي</Link></li>
          <li><Link to="/categories/diploma">    برامج الدبلوم</Link></li>
          <li><Link to="/products">     جميع المنتجات</Link></li>
          <li><Link to="/">      الصفحة الرئيسية  </Link></li>
        </ul>
       
      </div>
    </div>
  )
}

export default ListNav