import React, {useContext , useState} from 'react';
import {AppContext} from '../contexts/AppContext'
import {AddOutlined , RemoveOutlined  } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './CartView.css';


const CartView = () => {

      const {carts} = useContext(AppContext);
  const {price} = useContext(AppContext);
  const {tax} = useContext(AppContext);
  const [cartItems , setCartItems ] = carts;
  const [priceValue , setPriceValue ] = price;
  const [taxValue , setTaxValue  ] = tax;
  const [copyItems , setCopyItems] = useState(cartItems);



 
  const addMoreProuduct = (courseid  ) => {
   
    const existObject =  cartItems.find( cart => cart.course_id === courseid   );
  
    if (existObject) {
       
      let index = cartItems.map(object => object.course_id).indexOf(existObject.course_id);
      
        const myNewArray = Object.assign([...cartItems], {
            [index]: {
                ...cartItems[index],
                itemsNumber: cartItems[index].itemsNumber + 1,
            }
        });
        setTaxValue(taxValue + copyItems[index].tax_value );
        setPriceValue(priceValue + copyItems[index].course_price );
        setCartItems(myNewArray);
        

    }

  }

  const addLessProuduct = (courseid  ) => {
  
    const existObject =  cartItems.find( cart => cart.course_id === courseid   );
    
    
    if (existObject ) {
         
      
      let index = cartItems.map(object => object.course_id).indexOf(existObject.course_id);

      if (cartItems[index].course_price > 0) {

    
            const myNewArray = Object.assign([...cartItems], {
                [index]: {
                    ...cartItems[index],
                    itemsNumber: cartItems[index].itemsNumber == 0 ? 0 :cartItems[index].itemsNumber + - 1,
                }
        
            });
            setPriceValue(priceValue - copyItems[index].course_price );
            setTaxValue(taxValue - copyItems[index].tax_value );
            setCartItems(myNewArray);
        }

    }

  }

  


  return (
    <div className='cart_viewpage' >

    <div className="app_container">

    <h1 className="category_headline">  سلة المشتريات </h1>

    <div className="buyitems_div">
        <div className="grid_carts mt-5">
            <div className="g-col-2">

                <div>   
            <h3>المجموع</h3>
           <div className="panel_carts">

           <div className="d-flex-c f-sp">
            <p className='para_table' > SAR {priceValue - taxValue}.00 </p> 
            <p className='para_table' > المجموع غير شامل الضريبة </p>
            </div>

          

           <div className="d-flex-c f-sp">
           <p className="para_table">SAR {taxValue}.00</p>
           <p className="para_table"> ضريبة القيمة المضافة </p>
            </div>

           <div className="d-flex-c f-sp">
           <p className="para_table">SAR {priceValue  }.00</p> 
           <p className="para_table"> مجموع الشحنات شامل ضريبة القيمة المضافة </p>
            </div>

           <div className="d-flex-c f-sp">
         	<h4 className='color_blue' >SAR {priceValue }.00</h4>
           <h4>المجموع الكلي</h4>
            </div>


           </div>
                <div className='cart_btns' >
               <div>
               <Link to="/products" >     
               <button className="main_btn">مواصلة التسوق</button>
               </Link>
               </div>
                <div>
                    <Link to="/checkout/payment" >       
                <button className="buy_btn">اتمام عملية الشراء</button>
                 </Link>
                </div>
                </div>
          
              
                </div>

                <div>

            <div className="grid_tablecarts">
            {cartItems ? cartItems.map(({ course_id ,course_name , cover_image , course_price , itemsNumber  }) => (
                        <div className='single_product_grid'  key={course_id}  >
                             <div>
                    <p>المنتج </p>
                    <div className="cart_items"  >                                
      <p className='course_name_p' > {course_name.split("" , 32)}  </p>                                     
                      <img src={cover_image} alt={course_name} />
                  </div>
                </div>

                <div>
                    <p>الكمية </p>
                    <div className="counts_items" >
                           <span className="counts_btn" onClick={ () => addLessProuduct(course_id , course_price ) } > 
                           <RemoveOutlined   />
                           </span>
                            <p> {itemsNumber} </p>
                            <span className="counts_btn" onClick={ () => addMoreProuduct(course_id , course_price ) } >
                            <AddOutlined  />
                            </span>
                          
                        </div>
                </div>

                <div>
                    <p>السعر </p>
                   <div>
                   <h4 className="color_blue" style={{ marginTop: '8px' }} >SAR {course_price}.00</h4>
                   </div>
                </div>
  
                </div>

                   )) : ''}
            </div>

                </div>
            </div>
        </div>
    </div>

    </div>
    </div>
  )
}

export default CartView