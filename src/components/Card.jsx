

// eslint-disable-next-line react/prop-types
const Card = ({data, loading, error, addToCart}) => {
    
    if (loading) {
        return <h1 style={{fontSize:'xx-large',height:'100vh',color:'red',display:'flex',
            justifyContent:'center',alignItems:'center'
        }}> Loading...</h1>
    }
    if (error!==null) {
        return <h1 style={{fontSize:'xx-large', color:'red',height:'100vh',display:'flex',
            justifyContent:'center',alignItems:'center'}}>Something went wrong!</h1>
    }
  return (
    <div className="flex justify-center mt-10 mb-10 flex-wrap gap-11">
       {
        // eslint-disable-next-line react/prop-types
        data.map((value)=>(
            

<div key={value.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg h-56 w-56" src={value.image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.description}</p>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Price: ${value.price}</p>
        <button 
    onClick={() => {
        addToCart(value);
        alert('Item added to cart');
    }} 
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Add to Cart
    <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19m-7-2h2m-1-4h.01"/>
    </svg>
</button>


    </div>
</div>

        ))}
    </div>
  )
}

export default Card