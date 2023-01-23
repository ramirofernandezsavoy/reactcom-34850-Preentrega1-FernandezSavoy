import { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, getDoc, doc } from '../firebase'


const useFirebase = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    try {
      const data = collection(db, 'productos');
      const col = await getDocs(data);
      const response = col.docs.map((doc) => (doc = {id: doc.id, ...doc.data()}));
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id) => {
    try {
      const document = doc(db, 'products', id);
      const response = await getDoc(document);
      let result = response.data();
      setProduct({ id: response.id, ...result });
    } catch (error) {
      console.log(error);
    }
  };

  const filterProducts = async (category) => {
    const q = query(collection(db, 'products'), where('category', '==', category));
    const querySnapshot = await getDocs(q);
    const filtered = [];
    querySnapshot.forEach(async (doc) => {
      const object = { id: doc.id, ...doc.data() };
      filtered.push(object);
    });
    setFilteredProducts([...filtered]);
  };

  const updateProduct = async (id, quantity) => {
    console.log(`id: ${id}, quantity: ${quantity}`);
    const orderDoc = doc(db, 'products', id);
    try {
      await updateDoc(orderDoc, { quantity: quantity });
      console.log('Updated!');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    product,    
    products,
    filteredProducts,
    getProduct,
    getProducts,
    filterProducts,    
    updateProduct
    }
    
}

export default useFirebase;