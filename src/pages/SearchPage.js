import React, {  useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductsFilter from '../components/ProductsFilter';
import { collection, query, where , db , getDocs } from "../firebase";

import './SearchPage.css';

const SearchPage = () => {

    const [searchData , setSearchData] = useState([]);

   // let {query} = useParams();
   function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

    let queryRes = useQuery();
    const productsRef = collection(db, "products");

    // Create a query against the collection.
    const q = query(productsRef, where('tags', 'array-contains', queryRes.get("query")));

    const queryExecute = async () => {
       
        const querySnapshot = await getDocs(q);

        const searchDataArray = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));
       
        setSearchData(searchDataArray);
       
      
    }
    useEffect(() => {
        queryExecute();
    } ,  [queryRes])

  return (
    <div className='search_page' >

        <div className="app_container">

            <h1> <span className='search_query' >( {queryRes.get("query")} ) </span> نتائج البحث عن  </h1> 

            <ProductsFilter searchDataLength={searchData.length} searchData={searchData} />
        </div>
    </div>
  )
}

export default SearchPage