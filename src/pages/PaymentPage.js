import React , {useState , useContext} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './PaymentPage.css';
import {ArrowRightAltOutlined } from '@material-ui/icons';
import {AppContext} from '../contexts/AppContext'
import {Redirect} from 'react-router-dom';

const PaymentPage = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const {carts} = useContext(AppContext);
    const {price} = useContext(AppContext);
    const {tax} = useContext(AppContext);
    const [cartItems  ] = carts;
    const [priceValue  ] = price;
      const [taxValue  ] = tax;
    const [error , setError] = useState('');
    const [madaPaymentShow , setMadaPaymentShow] = useState(false);
    const [visaPaymentShow , setVisaPaymentShow] = useState(false);
    const [cardHolderName , setCardHolderName] = useState('');
    const [cardNumber , setCardNumber] = useState('');
    const [expireMonth , setExpireMonth] = useState('');
    const [expireYear , setExpireYear] = useState('');
    const [cvvNumber , setCvvNumber] = useState('');
    

    const handlePaymentShow = (show) => {
            if (show === 'mada') {
                setMadaPaymentShow(!madaPaymentShow);
                setVisaPaymentShow(false);
                setCardHolderName('');
                setCardNumber('');
                setExpireMonth('');
                setExpireYear('');
                setCvvNumber('');
            }
            if (show === 'visa') {
                setMadaPaymentShow(false);
                setVisaPaymentShow(!visaPaymentShow);
                setCardHolderName('');
                setCardNumber('');
                setExpireMonth('');
                setExpireYear('');
                setCvvNumber('');
            }
    }

    const payProudcts = async () => {
        const url = "https://6273c011508ca83a1b27f268--guileless-flan-69796b.netlify.app/.netlify/functions/api";
        if (cardHolderName === ''  ) { setError('يرجى ادخال اسم حامل البطاقة') }
        if (cardNumber === ''  ) { setError('يرجى ادخال رقم البطاقة') }
        if (expireMonth === ''  ) { setError('يرجى ادخال شهر انتهاء البطاقة') }
        if (expireYear === ''  ) { setError('يرجى ادخال سنة انتهاء البطاقة') }
        if (cvvNumber === ''  ) { setError('يرجى ادخال الرمز السري للبطاقة') }
           
   

        if (cardHolderName !== '' && cardNumber !== '' && expireMonth !== '' && expireYear !== '' &&  cvvNumber !== ''   ) {
            setError('');
            
        const sendedJson = JSON.stringify({
            name: cardHolderName,
            email : user.email,
            phone: user.phone_number,
            amount: priceValue,
            card_number: cardNumber,
            expire_month: expireMonth,
            expire_year: expireYear,
            cvv_card: cvvNumber,
        });
        const res = await axios.post(`${url}/payment`, sendedJson, {
  headers: {
    // Overwrite Axios's automatically set Content-Type
    'Content-Type': 'application/json'
  }
});
    if (res.data) {
      
        window.location.href = res.data.redirect_url;
    }

        }


         


    }


  return (
    <div className='payment_page' >
           {!user ? <Redirect to="/"  /> : '' }
         <div className="back_div">
          <Link to="/">
      <ArrowRightAltOutlined />
      </Link>
        </div>

            <div className="text-center mt-1">
            <img src="/images/logoWebsite.jpg" alt="" />
            </div>

        <div className="app_container">
            {error && (
   <p className="error_log text-center mt-5"> {error} </p>
            ) }
     
            <div className="grid_payment">

            <div className="invoice_div">
          
          <div className="panel_carts">

          <div className="d-flex-c f-sp">
          <p className='para_table' > SAR {priceValue}.00 </p> 
          <p className='para_table' > المجموع غير شامل الضريبة </p>
          </div>

         

          <div className="d-flex-c f-sp">
          <p className="para_table">SAR {taxValue}.00</p>
          <p className="para_table"> ضريبة القيمة المضافة </p>
          </div>

          <div className="d-flex-c f-sp">
          <p className="para_table">SAR {priceValue}.00</p> 
          <p className="para_table"> مجموع الشحنات شامل ضريبة القيمة المضافة </p>
          </div>

          <div className="d-flex-c f-sp">
          <h4 className='color_blue' >SAR {priceValue}.00</h4>
          <h4>المجموع الكلي</h4>
          </div>


</div>

          </div>

            <div className="payment_div">
                <h3>الدفع و التاكيد</h3>
                <p  >:طريقة الدفع</p>
            <div className="mt-3"></div>
                <div className="payment_option " onClick={() => handlePaymentShow('mada')  } >
                        <div className="f-sp d-flex-c">

                            <div className='input_thum' >
                            <img src="/images/mada-circle.png" alt="" />
                            </div>
                            <div className='d-flex-c payment_info_div' >
                            <p>بطاقة مدى البنكية</p>
                            <div className="box_radio"></div>
                               
                            </div>
                        </div>
                      
                </div>

                <div className="mada_payment_div">
                {madaPaymentShow && (
                        <div className="payment_dropdown">

                        <div  className='input_payment'>
                       
                            <label htmlFor="">الاسم على البطاقة</label>
                            <input type="text" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value) } />
                        </div>

                        <div  className='input_payment'>
                       
                            <label htmlFor="">  رقم البطاقة </label>
                            <input type="number"  value={cardNumber} onChange={(e) => setCardNumber(e.target.value) } />
                        </div>

                      
                        <div  className='input_payment'>
                        <label htmlFor=""> تاريخ انتهاء البطاقة </label>
                            <div className="d-flex-c">
                            
                            
                            <div>
                                <label htmlFor="">الشهر</label>
                                <input type="number" value={expireMonth} onChange={ (e) => setExpireMonth(e.target.value)  } />
                            </div>
 
                            <div>
                                <label htmlFor="">السنة</label>
                                <input value={expireYear} onChange={(e) => setExpireYear(e.target.value) } type="number" />
                            </div>
                            </div>
                           

                        </div>

                        <div  className='input_payment'>
                       
                            <label htmlFor="">(CVV) رمز الامان  </label>
                            <input type="number" value={cvvNumber} onChange={(e) => setCvvNumber(e.target.value)  } />
                        </div>

                    </div>
                )}
                </div>

                <div className="payment_option " onClick={() => handlePaymentShow('visa')  } >
                        <div className="f-sp d-flex-c">

                            <div className='input_thum' >
                            <img src="/images/visa-circle.png" alt="" />
                            <img src="/images/mastercard-circle.png" alt="" />
                            </div>
                            <div className='d-flex-c payment_info_div' >
                            <p>  بطاقة ائتمانية</p>
                                <div className="box_radio"></div>
                               
                            </div>
                        </div>
                      
                </div>
                

                    <div className="visa_payment_div">
                    {visaPaymentShow && (
                        <div className="payment_dropdown">

                        <div  className='input_payment'>
                       
                            <label htmlFor="">الاسم على البطاقة</label>
                            <input type="text" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value) } />
                        </div>

                        <div  className='input_payment'>
                       
                            <label htmlFor="">  رقم البطاقة </label>
                            <input type="number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value) } />
                        </div>

                      
                        <div  className='input_payment'>
                        <label htmlFor=""> تاريخ انتهاء البطاقة </label>
                            <div className="d-flex-c">
                            
                            
                            <div>
                                <label htmlFor="">الشهر</label>
                                <input type="number" value={expireMonth} onChange={ (e) => setExpireMonth(e.target.value)  } />
                            </div>
 
                            <div>
                                <label htmlFor="">السنة</label>
                                <input value={expireYear} onChange={(e) => setExpireYear(e.target.value) } type="number" />
                            </div>

                            </div>
                           

                        </div>

                        <div  className='input_payment'>
                       
                            <label htmlFor="">(CVV) رمز الامان  </label>
                            <input type="number" value={cvvNumber} onChange={(e) => setCvvNumber(e.target.value)  } />
                        </div>

                    </div>
                )}
                    </div>

               

        <div className="payment_option ">
                        <div className="f-sp d-flex-c">

                            <div className='input_thum' >
                            <img src="/images/bankTransfer.png" alt="" />
                            </div>
                            <div className='d-flex-c payment_info_div' >
                            <p>تحويل بنكي</p>
                            <div className="box_radio"></div>
                               
                            </div>
                        </div>
                      
                </div>

            </div>

           

            </div>

            <div className="carts_products">
                            <h4>المنتجات</h4>
                {cartItems ? cartItems.map(({ id , course_name , course_price , cover_image , itemsNumber }) => (
 <div className="payment_option" key={id} >
        <div className="f-sp d-flex-c">
        <h4 className="color_blue" style={{ marginTop: '8px' }} >SAR {course_price}.00</h4>
                <div className='d-flex-c product_payment' >
                    <p className='buyied_btn mx-2' > x{itemsNumber} </p> 
                <p> {course_name}  </p>
                <img src={cover_image} alt={course_name} />
                </div>

        </div>
</div>
                )) : ''}
               
            </div>
            
            {priceValue > 0 ? (
         <button onClick={() => payProudcts() } className="payment_btn">الدفع الان</button>
            ) : ''}
           
       
        </div>
            
   </div>
  )
}

export default PaymentPage