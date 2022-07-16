import React , {useState , useEffect , useContext}  from 'react';
import {ArrowRightAltOutlined } from '@material-ui/icons';
import    {auth ,signInWithPhoneNumber , RecaptchaVerifier , collection , where , query , db , getDocs } from '../firebase';
import {Link , useHistory , Redirect} from 'react-router-dom';
import './SignInPage.css';
import {AppContext} from '../contexts/AppContext'



const SignInPage = () => {

  const userLoggedIn = JSON.parse(localStorage.getItem("user"));

  const [phoneCodeVerify , setPhoneCodeVerify] = useState('');
  const [phoneNumber , setPhoneNumber] = useState('');
  const [verifyNumber , setVerifyNumber] = useState('');
  const [verifyCode , setVerifyCode] = useState(false);
  const [codeFirst , setCodeFirst] = useState('+966');
  const [userExist , setUserExist] = useState(false);
  const [userAuthArray , setUserAuthArray] = useState([]);

  const {user} = useContext(AppContext);
  const {userPhone} = useContext(AppContext);
  const [userValue , setUserValue ] = user;
  const [userPhoneValue , setUserPhoneValue ] = userPhone;

  const history = useHistory();

  useEffect(() => {
    if (!userLoggedIn) {
      
      setuprecaptcha();
    }
  } , [])

  function setuprecaptcha (){
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': (response) => {
        
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    }, auth);
    window.recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });

}

 
const sendVerivationCode = async () => {
   setVerifyCode(true);
   const phoneNumberSend = codeFirst.concat(phoneNumber);


  const q = query(collection(db, "users"), where("phone_number", "==", phoneNumberSend));
  
  const querySnapshot = await getDocs(q);

  const foundedDataArray = querySnapshot.docs ? querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) : '';

  if (foundedDataArray.length === 0) {
    setUserExist(false);
  } else {
    setUserAuthArray(foundedDataArray[0]);
    setUserExist(true);
  }

 
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth , phoneNumberSend , appVerifier )
  .then( (confirmationResult) => {
    window.confirmationResult = confirmationResult;
    const sentCodeId = confirmationResult.verificationId;
    
    setPhoneCodeVerify(sentCodeId);
   
   
  }).catch((error) => {

    alert("رمز التحقق المدخل خطأ")
  })

};





 const signInWithPhone =  (sentCodeId ) => {



window.confirmationResult.confirm(verifyNumber).then((result) => {
 

  const user = result.user;
  if (user) {
   

    if (userExist === false) {
      setUserPhoneValue(user.phoneNumber);
      setUserValue(user.stsTokenManager);
      localStorage.setItem("userAuth",JSON.stringify(user.stsTokenManager));
      history.push('/user/create');
    } else {

        setUserValue(false);
        localStorage.setItem("userAuth",JSON.stringify(user.stsTokenManager));
          localStorage.setItem("user",JSON.stringify(userAuthArray))
          history.push('/');
        
      

     
    }


  }

 
  // ...
}).catch((error) => {
  console.log(error);
  
});

  
 }


  return (
    <div className='signIn_page' >
      {userLoggedIn ? <Redirect to="/" /> : '' }
      {!userLoggedIn ? (
          <>
           <div className="back_div">
          <Link to="/">
      <ArrowRightAltOutlined />
      </Link>
        </div>
      
            <img src="/images/logoWebsite.jpg"   alt="" />
            <h3>تسجيل الدخول</h3>
            <p>لتسجيل الدخول اضف رقم جوالك ادناه وسيتم ارسال رسالة نصية للتحقق من الرقم المضاف</p>
            <div className="d-flex-c inputs_singin mt-2">
               {!verifyCode && (
                 <>
                  <input type="text" value={codeFirst} onChange={(e) =>  setCodeFirst(e.target.value) } className="sign_input" />
                <input type="text" value={phoneNumber} onChange={(e) =>  setPhoneNumber(e.target.value) } className="sign_input" placeholder="5xxxxxxxx" />
                 </>
               )}

               {verifyCode && (
                  <input type="text" value={verifyNumber} onChange={(e) =>  setVerifyNumber(e.target.value) } style={{ padding: '0.8rem 2.2rem' }} className="sign_input" placeholder="ادخل الرمز المرسل اليك" />
               )}
               
            </div>
            <div className="mt-2"></div>
            <div id="recaptcha-container"></div>
            <div className="mt-2"></div>
            {verifyCode ? (
              <>
              <button id='signInWithPhone' className="buy_btn" onClick={() => signInWithPhone(phoneCodeVerify) }  >دخول</button>
              </>
            ) : (
              <>
<button className="buy_btn" onClick={() => sendVerivationCode() } >دخول</button>
</>
            )}
          </>
      ) : ''}
       
            
    </div>
  )
}

export default SignInPage