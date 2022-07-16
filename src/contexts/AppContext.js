import React , {  useState, createContext , useEffect} from 'react';
import {collection   , db , getDocs} from '../firebase';

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [cartItems , setCartItems] = useState([]);
    const [priceItems , setPriceItems] = useState(0);
    const [taxItems , setTaxItems] = useState(0);
    const [products , setProducts] = useState([]);
    const [categories , setCategories] = useState([]);
    const [ratings , setRatings] = useState([]);
    const [user , setUser] = useState([]);
    const [userPhone , setUserPhone] = useState('');


    const getProduct = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsDataArray = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));
          
        setProducts(productsDataArray);
        
    
      }

    const getCategories = async () => {
        const querySnapshot = await getDocs(collection(db, "categories"));
        const categoiresDataArray = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));
        
        setCategories(categoiresDataArray);
       
    
      }

    const getRatings = async () => {
        const querySnapshot = await getDocs(collection(db, "ratings"));
        const ratinsDataArray = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));
        
        setRatings(ratinsDataArray);
       
    
      }



    useEffect(() => {
       getProduct();
       getCategories();
       getRatings();

    } , [])
   


    return (
            <AppContext.Provider value={ { products: [products , setProducts] , categories: [categories] , ratings: [ratings] , carts: [cartItems , setCartItems] , price: [priceItems , setPriceItems] , user: [user , setUser]  , userPhone: [userPhone , setUserPhone] , tax: [taxItems , setTaxItems] } } >
                {props.children}
            </AppContext.Provider>
    )
}