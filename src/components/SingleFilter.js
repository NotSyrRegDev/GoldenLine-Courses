import React , {useState , useContext} from 'react';
import './SingleFliter.css';
import { ArrowDropDownOutlined , ArrowDropUpOutlined , Close } from '@material-ui/icons';
import {Slider , Box} from '@material-ui/core';
import {AppContext} from '../contexts/AppContext';
import { query , orderBy , db  , getDocs , collection} from '../firebase';
import {Link , useLocation} from 'react-router-dom';


const SingleFilter = ( {founded_nums }) => {

  function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

let querySearch = useQuery();

  const {products} = useContext(AppContext);

  const [productsValues , setProductValues ] = products;


    const [filterShow , setFilterShow] = useState(false);
    const [priceFilterShow , setPriceFilterShow] = useState(false);
   
  const [val , setVal] = useState([0 , 10000]);
  const updateRange = (e , data) => {
    setVal(data)
    
  }

  const productsFilter = async ( filter ,filterOpt) => {
    
    const productsRef = collection(db, "products");
    const q = query(productsRef, orderBy(filter, filterOpt));
    const querySnapshot = await getDocs(q);
    const foundedDataArray = querySnapshot.docs ? querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) : '';
    setProductValues(foundedDataArray);
  }

  const filterProducts =  async () => {
   
   let queryParam = querySearch.get('filter');
   
    if (queryParam === 'low-price') {
      productsFilter( 'course_price' ,'asc');
    }
   
    if (queryParam === 'high-price') {
      productsFilter('course_price' , 'desc');
    }
    
    if (queryParam === 'popular') {
      productsFilter('rating_counts' , 'asc');
    }
   
    if (queryParam === 'new') {
      productsFilter('createdAt' , 'desc');
    }
    if (queryParam === 'regular') {
      const querySnapshot = await getDocs(collection(db, "products"));
      const foundedDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
      setProductValues(foundedDataArray);

    }
   


  }


    

  return (
    <div>
        
            <div className="fliter_area">
            <div className="d-flex-c f-sp ">
                    <div className='d-flex-c filters_btn_div' >

        <button className="filter_btn border_green" onClick={() => setFilterShow(!filterShow)  }  >
        <ArrowDropDownOutlined  />   <p>الأفتراضي</p> 
      
        </button>
        <h4 className="filter_headline"> ترتيب حسب</h4>

        <button className="filter_btn" onClick={() => setPriceFilterShow(!priceFilterShow)  } >
      <ArrowDropUpOutlined   />  تصفية النتائج
        </button>

        </div>  

               
 
               
            </div>


        {filterShow && (


        <div className="dropdown_list">
        <ul>
            <li> <Link to="/products?filter=regular">الافتراضي </Link> </li>
            <li> <Link to="/products?filter=new">الاحدث  </Link></li>
            <li> <Link to="/products?filter=popular"> الاكثر شعبية </Link>  </li>
            <li   >  <Link to="/products?filter=low-price">الاقل سعر</Link>  </li>
            <li>  <Link to="/products?filter=high-price">الاعلى سعر</Link>  </li>
            <li> <button  onClick={() => filterProducts()  } className="buy_btn">فلترة النتائج</button> </li>
        
        </ul>
        </div>

        )}
         <div className='text-right' >
                    <h3 className='found_filter' >  تم أيجاد {founded_nums } منتج   </h3>
                </div>

        {priceFilterShow && (
            <div className="price_filter">
                  <h4 className="filter_headline">  السعر</h4>

                <div className="mt-1"></div>
                  <div className="d-flex-c"  >

                  <div className='d-flex-c' >
                  <input value={val[1]} type="number" id="priceTo" className="priceInput" placeholder='SAR' />
                          <label className='label_price' htmlFor="priceTo">الى</label>
                          
                      </div>
                      <div className='d-flex-c' >
                      <input value={val[0]} type="number" id="priceFrom" className="priceInput" placeholder='SAR' />
                          <label className='label_price' htmlFor="priceFrom">من</label>
                         
                      </div>

                     

                  </div>
                <div className="mt-2"></div>
                
                <Box sx={{ width: 200   }} >
                <Slider min={0} max={10000} value={val} onChange={updateRange}  />
                </Box>
               
                <div className="mt-2"></div>
                <div className='d-flex-c' >
                <div className="filter_btn green">حفظ</div>
                    <div className="filter_btn">مسح</div>
                  
                </div>
                <div className="closing_filter">
                <Close onClick={() => setPriceFilterShow(!priceFilterShow)  } />
                </div>
               

            </div>
        )}


            </div>

      
    </div>
  )
}

export default SingleFilter