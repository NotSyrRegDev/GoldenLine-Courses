import React from 'react';
import { WhatsApp , Instagram , Facebook , Twitter , Email , LocationOn , Language , ArrowUpward } from '@material-ui/icons';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
  
  return (
    <div className='footer' >
        <div className="footer_container">

        <div className="footer_grid">
            <div className="g-col-3">
                <div>
                    <h2 className="footer_headline">تابعنا على</h2>

                    <div className="footer_flex">

                        <img src="/images/maroof.png" alt="" />
                        <div className="d-flex-c f-wrap mt-1 footer_social">
                        <LocationOn />
                        <Email />
                        <Language />
            <Instagram />
            <Facebook />
            <WhatsApp />
            <Twitter />
           
                        </div>
                        <div className="mt-1"></div>
                        <p  >  صنع بـ ❤️ من قبل عمار حمدي</p>

                        <div className="d-flex-c f-wrap mt-1 supported_footer">
                            <img src="/images/mandob.png" alt="" />
                            <img src="/images/bankTransfer.png" alt="" />
                            <img src="/images/mastercard-circle.png" alt="" />
                            <img src="/images/visa-circle.png" alt="" />
                            <img src="/images/apple_pay.svg" alt="" />
                            <img src="/images/mada-circle.png" alt="" />
                        </div>
                        <div className="mt-3"></div>
                        <p>الرقم الضريبي: 20320230242</p>
                       
           
                    </div>
                </div>

                <div>
                <h2 className="footer_headline"> روابط مهمة </h2>
                <div className="ul_grid">
                    <div className="g-col-2">
                    <ul className="ul_footer">
                        
                    <li> <Link to="/pages/terms-and-conditions" >الشروط و الاحكام  </Link>  </li>
                  
                    <li> <Link to="/pages/" > الاتصال بنا </Link> </li>
                   
                </ul>
                    <ul className="ul_footer">
                    <li> <Link to="/pages/shipping"> خيارات الدفع و التوصيل </Link> </li>
                    <li>  <Link to="/pages/license" > التراخيص النظامية </Link> </li>
                    <li> <Link to="/pages/exam-test" >اختبار تحديد المستوى </Link>  </li>
                </ul>
                

                    </div>
                </div>
               
                </div>

                <div>
                <h2 className="footer_headline"> من نحن </h2>
                <p className="footer_para" >معاهد قولدن كورس لدورات اللغة الانجليزية
والدورات التربوية في مجال التعليم
ودورات الحاسب الالي</p>

                </div>

                <div>

                </div>
                
            </div>
        </div>

        </div>
        <div className="box_up" onClick={() => scrollToTop() } >
                        <ArrowUpward />
                        </div>
       
    </div>
  )
}

export default Footer