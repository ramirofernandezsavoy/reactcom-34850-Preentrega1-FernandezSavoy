import { useEffect, useState } from "react"
import { db } from "../firebase"
import { collection, getDocs } from "firebase/firestore";

const useFirebase = () => {

    const [productos,setProductos] = useState([]);
    const [producto, setProducto] = useState({});

    const {setLoading} = GlobalProvider()
    

    const fetchGetDataCollection = async () => {
        setLoading(true)
        try {
          const data = collection(db,"productos")
          const col = await getDocs(data)
          const response = col.docs.map(doc => doc={id:doc.id,...doc.data()})
          setProductos(response)
          setLoading(false)
        } catch (error) {
          console.log("Hubo un error");
        }    
      };
    
      const fetchGetIndividualProduct =  async ({id}) => {
        setLoading(true)
        try {
            const document = doc(db,"productos",id)
            const response = await getDoc(document)
            let result =response.data()
            setProducto({id:response.id,...result})
            setLoading(false)
    
        } catch (error) {
            console.log(error)
        }
      };

  return {
    productos,
    getProducts,
    fetchGetDataCollection,
    fetchGetIndividualProduct
    }
}

export default useFirebase;