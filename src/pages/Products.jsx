import '../index.css'
import { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userData } from '../features/userSlice'
import Card from '../components/Card'
// import AddToCart from './AddToCart';

const Products = () => {

  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);

    const addToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    };

  const {data, loading, error} = useSelector((state)=> state.userSlice)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(userData())
  },[dispatch])
  console.log(data);
  
  return (
    <div className='products'>
      <Card data={data} loading={loading} error={error} addToCart={addToCart}/>
      {/* <AddToCart /> */}
    </div>
  )
}

export default Products