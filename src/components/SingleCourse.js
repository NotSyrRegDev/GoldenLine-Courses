import React , {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AppContext} from '../contexts/AppContext';

import './SingleCourse.css';


const SingleCourse = ( { course_id,cover_image , course_name , course_price , old_price , tax_status , tax_value  } ) => {

  const {carts} = useContext(AppContext);
  const {price} = useContext(AppContext);
  const {tax} = useContext(AppContext);

  const [cartItems , setCartItems ] = carts;
  const [priceValue , setPriceValue ] = price;
  const [taxValue , setTaxValue ] = tax;

  const addToCart = ( courseid) => {
    const existObject =  cartItems.find( cart => cart.course_id === courseid   );
    if (existObject) {
      let index = cartItems.map(object => object.course_id).indexOf(existObject.course_id);

      const myNewArray = Object.assign([...cartItems], {
        [index]: {
            ...cartItems[index],
            itemsNumber: cartItems[index].itemsNumber + 1,
        }
    });
    setPriceValue(priceValue + cartItems[index].course_price );
    setTaxValue(taxValue + cartItems[index].tax_value );
    setCartItems(myNewArray);
    //localStorage.setItem("cartsItems",JSON.stringify(myNewArray));

    }
   
    if (!existObject) {
      setCartItems(prevState => [...prevState , { course_id: course_id , course_name: course_name ,  cover_image: cover_image , course_price: course_price , tax_value: tax_value, itemsNumber: 1  }]  );
      setPriceValue( priceValue + course_price );
       setTaxValue(taxValue + tax_value );
    //  const cartItemsArray = Object.assign([...cartItems]);
      //localStorage.setItem("cartsItems",JSON.stringify(cartItemsArray));
    }

   
  }

  return (
    <>
    

  
    <div className='single_course flex-col' >

    <Link to={`/course/${course_id}/${course_name.split(' ').join('_')}`}   as={`/course/${course_name.split(' ').join('_')}`}  >
            <img src={cover_image} alt={course_name} />
            <h4> {course_name.split("" , 35  )} </h4>
            <div className="mt-1">
                <p className="current_price">ر.س {course_price} </p>
                <p className="old_price"> {old_price} </p>
            </div>
            <div>
                {tax_status ? (
                 ''
                ): (
                  <p className='tax_false' >معفى من الضريبة</p>
                )}
            </div>
            </Link>
            <button className="add_btn mt-2" onClick={() => addToCart(course_id)} >اضافة للسلة </button>
    </div>

    </>
  )
}

export default SingleCourse