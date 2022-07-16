import React , {useState , useContext , useEffect}  from 'react';
import './ProductsFilter.css';
import SingleCourse from './SingleCourse';
import SingleFliter from './SingleFilter';
import {AppContext} from '../contexts/AppContext';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../firebase';



const ProductsFilter = ({   categoty , searchData , searchDataLength }) => {

  const [foundedItems , setFounedItems] = useState([]);
  const {products} = useContext(AppContext);

  const [productsValues ] = products;

  useEffect(() => {
  

    const getCategoryItems = async () => {
      const q = query(collection(db, "products"), where("category_rel", "==", categoty));

      const querySnapshot = await getDocs(q);
      const foundedDataArray = querySnapshot.docs ? querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) : '';
     
      setFounedItems(foundedDataArray);
     
     
  
    }
    if (categoty) {
      getCategoryItems();
    }

  } , [categoty]);

  const determineNums = () => {
 
    if (searchDataLength && searchDataLength > 0) {
      return searchDataLength;
    }
    if (searchDataLength === 0) {
      return 0;
    }
    if (categoty) {
      return foundedItems.length;
    }
    if (!searchDataLength &&  !categoty && searchDataLength !== 0 ) {
        return productsValues.length;
    }
  }
    

  return (
    <div className="products_filter container-sm" >
        <SingleFliter founded_nums={ determineNums() } />
        <div className="grid_productspage mt-2">
          <div className="g-col-4">

          {!searchData ? !categoty ? productsValues ? productsValues.map(({id , cover_image , course_name , tax_status , old_price , course_price , tax_value }) => (
      <div key={id} >
      <SingleCourse key={id} course_id={id} cover_image={cover_image} course_name={course_name} tax_status={tax_status} old_price={old_price} course_price={course_price} tax_value={tax_value}   />
      </div>
    )) : '' : '' : ''}

            {categoty ? foundedItems? foundedItems.map(({ id , cover_image , course_name , tax_status , old_price , course_price , tax_value}) => (
          <div key={id}>
               <SingleCourse  course_id={id} cover_image={cover_image} course_name={course_name} tax_status={tax_status} old_price={old_price} course_price={course_price} tax_value={tax_value}   />
           </div>
            ))   : '' : ''   }

            {searchData ? searchData.map(({ id , cover_image , course_name , tax_status , old_price , course_price , tax_value}) => (
          <div key={id}>
               <SingleCourse  course_id={id} cover_image={cover_image} course_name={course_name} tax_status={tax_status} old_price={old_price} course_price={course_price} tax_value={tax_value}   />
           </div>
            ))   : ''   }
    


          </div>
        </div>
    </div>
  )
}

export default ProductsFilter