import React from 'react';
import {Redirect , useHistory} from 'react-router-dom'
import './ProfilePage.css';

const ProfilePage = () => {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("user"));

    const logOutUser = () => {
        let confirmValue = window.confirm("هل انت متاكد من تسجيل الخروج ؟") === true
        if (confirmValue) {
            localStorage.removeItem('user');
            localStorage.removeItem('userAuth');
            
            history.push('/');
            history.go(0);
        }
    }

  return (
    <div className='profile_page' >
        {!user ? <Redirect to="/"  /> : '' }
    <div className="app_container">

    <h1 className="category_headline"> الملف الشخصي </h1>

        <div className="profile_infodiv mt-4">

            <div>
                <h3>الاسم الكامل</h3>
                <input type="text" readOnly value={user.username}  className="profile_input" />
            </div>

            <div>
                <h3>البريد الالكتروني </h3>
                <input type="text" readOnly value={user.email} className="profile_input" />
            </div>

            <div>
                <h3>رقم الهاتف </h3>
                <input type="text" readOnly value={user.phone_number} className="profile_input" />
            </div>

            <div className="btns_flexdiv">
                <button className="buy_btn">حفظ</button>
                <button onClick={() => logOutUser() } className="logout_btn">تسجيل الخروج</button>
            </div>

        </div>

    </div>


    </div>
  )
}

export default ProfilePage