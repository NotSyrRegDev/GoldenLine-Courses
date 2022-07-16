import React , { useState , useContext} from 'react';
import {doc, setDoc , db , query , where , collection , getDocs } from '../firebase';
import {ArrowRightAltOutlined } from '@material-ui/icons';
import './CreateUserPage.css';
import {Link , useHistory , Redirect} from 'react-router-dom';

import {AppContext} from '../contexts/AppContext'


const CreateUserPage = () => {
    const {user} = useContext(AppContext);
    const [userValue  ] = user;
   
    const {userPhone} = useContext(AppContext);
    const [userPhoneValue  ] = userPhone;
  

    const history = useHistory();
    //const userAuth = localStorage.getItem("userAuth");

    const [loading , setLoading] = useState(false)
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [error , setError] = useState('');

    const makeid = (length) =>  {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }


    const addNewUser =  async () => {

      
   
    
        setLoading(true);
        

        if (username === ''  ) {
                setError('يرجى ادخال اسم المستخدم')
        }
        if (email === ''  ) {
                setError('يرجى ادخال الايميل')
        }
        
        if (username !== '' && email !== '') {
            setError('');
           const user = await setDoc(doc(db, "users", makeid(20)), {
                username: username,
                phone_number: userPhoneValue,
                email: email
              });

              const q = query(collection(db, "users"), where("phone_number", "==", userPhoneValue));
   
              const querySnapshot = await getDocs(q);
            
              const foundedDataArray = querySnapshot.docs ? querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) : '';
             
              localStorage.setItem("user",JSON.stringify(foundedDataArray[0]));
              history.push('/');

             

     
    

             
             // history.push('/');
        }
        setLoading(false);
    }

  return (
    <div className='signIn_page' >
     {userValue.length === 0 ? <Redirect to="/" /> : ''  }
        {userValue.length === 0 ? '' : (
          <>
           <div className="back_div">
          <Link to="/">
      <ArrowRightAltOutlined />
      </Link>
        </div>
      
            <img src="/images/logoWebsite.jpg"   alt="" />
            <h3>تسجيل حساب جديد</h3>
            <p>ادخل معلوماتك بشكل صحيح هنا , ليتم استكمال تسجيلك في الموقع</p>
            <p className="error_log"> {error} </p>
            <div className="inputs_singin mt-2">
                
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)  } style={{ textAlign: 'right' }}  className="sign_input"   placeholder='الاسم الكامل' />       
            </div>
            <div className="inputs_singin ">
            <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)  }  style={{ textAlign: 'right' }}  className="sign_input" placeholder="البريد الالكتروني" />      
            </div>

            <div className="d-flex-c">
            <input type="text" readOnly value={userPhoneValue}  className="sign_input read_input" />
                
            </div>
           
            <div className="mt-1"></div>
            {loading ? (
                <iframe title="loading" style={{ maxHeight: '5rem' , maxWidth: '5rem' }}  src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            ) : (
    <button className="buy_btn" onClick={() => addNewUser()  }  >  سجل  </button>
            )}
          </>
        ) }
       
            
    </div>
  )
}

export default CreateUserPage