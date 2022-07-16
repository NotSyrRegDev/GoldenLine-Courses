import React , { useEffect , useState , useContext } from 'react';
import './SingleCoursePage.css';
import {useParams} from 'react-router-dom';

import {StarOutlined } from '@material-ui/icons';
import { doc, getDoc } from "firebase/firestore";
import {db} from '../firebase';
import { AppContext } from '../contexts/AppContext';


const SingleCoursePage = () => {
  
    const {carts} = useContext(AppContext);
  const {price} = useContext(AppContext);
  const {tax} = useContext(AppContext);

  const [cartItems , setCartItems ] = carts;
  const [priceValue , setPriceValue ] = price;
  const [taxValue , setTaxValue ] = tax;

  const [courseFound , setCourseFound] = useState(null);
  const [courseId , setCourseId] = useState('');
  const [ratingsShow , setRatingsShow] = useState(false);
  const [descShow , setDescShow] = useState(true);


    const handleShow = () => {

      if (ratingsShow === true) {
        setRatingsShow(false);
        setDescShow(true)
      }

      if (descShow === true) {
        setRatingsShow(true);
        setDescShow(false)
      }

    }

  let {id} = useParams();
  
  useEffect(() => {
  

    const getCourseItem = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCourseId(docSnap.id);
        setCourseFound(docSnap.data())
      } else {
        // doc.data() will be undefined in this case
       alert("No such document!");
      }
     
  
    }
    if (id) {
      getCourseItem();
    }

  } , []);

  
  const addToCart = () => {
   
    var addedNumber = document.getElementById('select_add').value;
 
    if (addedNumber > 0 && addedNumber < 6) {
     
      const existObject =  cartItems.find( cart => cart.course_id === courseId   );
        
      if (existObject ) {
          let index = cartItems.map(object => object.course_id).indexOf(existObject.course_id);
              const myNewArray = Object.assign([...cartItems], {
      [index]: {
          ...cartItems[index],
          itemsNumber: cartItems[index].itemsNumber + (1 * addedNumber ),
      }
  });
    setPriceValue(priceValue + (cartItems[index].course_price * addedNumber) );
    setTaxValue(taxValue + (cartItems[index].tax_value * addedNumber) );
    setCartItems(myNewArray);
      }
      if (!existObject) {
        setCartItems(prevState => [...prevState , { course_id: courseId , course_name: courseFound.course_name ,  cover_image: courseFound.cover_image , course_price: courseFound.course_price , tax_value: courseFound.tax_value, itemsNumber: 1  }]  );
        setPriceValue( priceValue + (courseFound.course_price * addedNumber) );
         setTaxValue(taxValue + ( courseFound.tax_value * addedNumber ) );
      }
     

    }


   

   
  }


  return (
    <div className='single_coursepage' >
      <div className="app_container">

    {courseFound ? (

<div className="grid_product" >
<div className="g-col-2">

  <div>
<img src={courseFound.cover_image} className="course_cover" alt="" />
  </div>

  <div>
    <div className="flex-col product_info">
    <h1> {courseFound.course_name} </h1>

    <div className="d-flex-c mt-1">
        <p className="current_price">ر.س {courseFound.course_price}  </p>
        <p className="old_price"> {courseFound.old_price} </p>
    </div>
    
    <div className="mt-1 d-flex-c rating_coursediv">
    <button className="buyied_btn">تم شراءه اكثر من 2143 مرة</button>
      <p className='' > (  {courseFound.rating_counts} تقييم  ) </p>
     
      <div className="d-flex-c stars_div">
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
      </div>
    </div>
      <div className="mt-1"></div>
    <p className='my-1' > رمز المنتج:   </p>
    <p>{courseId}</p>
    <div className="mt-1"></div>
    <p>  الوزن: - KG  </p>
    <div className="mt-1">
      <p> {courseFound.course_desc.split("" , 52)} </p>
    </div>

    <div className="mt-1">
     <h4>الكمية</h4>
     <select name="" id="select_add" className="select_count">
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
     </select>
     <div className="mt-1"></div>
     <button className="filter_btn green" onClick={() => addToCart() } >اضافة للسلة</button>
    </div>

    </div>
  </div>
</div>


      <div className="text-center ratings_div">
        <div className="d-felx-c">
        <button onClick={() => handleShow()  } className={`my-1 tap_btn ${ratingsShow === true ? 'active' : ''}`}>التقييمات</button>
        <button onClick={() => handleShow()  } className={`my-1 tap_btn ${descShow === true ? 'active' : ''}`}>وصف الممتج</button>
        </div>

        {descShow && (
          <div className='mt-5 desc_area' >
            <p className="para_desc"> {courseFound.course_desc} </p>
          </div>
        )}

        {ratingsShow && (
          <div className="rating_area mt-5">
            <p> (43) أراء العملاء  </p>
            <div className="mt-5"></div>
            <div className="client_opionions flex-col">

              <div className="single_opinion" >
                  
              <div className=" stars_div">
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
       </div>
       <p  >ممتاز</p>
       <h5>العنود عيسى</h5>

       <div className="date_opinion">
         <h5>2022-04-15</h5>
       </div>

              </div>

              <div className="single_opinion" >
                  
              <div className=" stars_div">
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
       </div>
       <p  >سجلت والامور سهالات ولله الحمد والحلو فيها جداً جداً مريحه وعن بعد وشهادة معتمدة 💕💕 خدمة العملاء عسل وغلبتهم بالاسئله والازعاج وتحملوني 🙃❤️</p>
       <h5>العنود عيسى</h5>

       <div className="date_opinion">
         <h5 >2022-04-15</h5>
       </div>

              </div>

              
            </div>
          </div>
        )}
      
      </div>
</div>

    ) : ''}

      </div>
    </div>
  )
}

export default SingleCoursePage