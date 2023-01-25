import { useState } from 'react';
import db from '../firebase';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { GlobalProvider } from "../context/GlobalContext";


const useFirebase = () => {

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});  
  const {setLoading} = GlobalProvider();

  const getProducts = async () => {
    setLoading(true)  
    try {
      const data = collection(db,'productos');
      const col = await getDocs(data);
      const response = col.docs.map(doc => doc ={id:doc.id,...doc.data()});
      setProducts(response);      
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async ({id}) => {
    setLoading(true)
    try {
      const document = doc(db,'products',id);
      const response = await getDoc(document);
      let result = response.data();
      setProduct({id:response.id,...result});
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };  

  return {
    product,    
    products,    
    getProduct,
    getProducts,    
    }
    
}

export default useFirebase;