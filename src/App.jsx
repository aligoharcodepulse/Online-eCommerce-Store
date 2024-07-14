// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Products from "./pages/Products";
// import AddToCart from "./pages/AddToCart";
// import LandingPage from "./pages/LandingPage"
// import ProtectedRoute from "./components/ProtectedRoute";
// import { useState, useEffect } from "react";
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from "./firebase";

// const App = () => {
//   const [user, setUser] = useState(null)
//   const [isFetching, setisFetching] = useState(true)
//   const location = useLocation();

//   useEffect(()=>{
//     const unSubscribe = onAuthStateChanged(auth,(user)=>{
//       if (user) {
//         setUser(user);
//         setisFetching(false)
//         return
//       }
//       setUser(null)
//       setisFetching(false)
//     })
//     return () => unSubscribe()
//   },[])

//   if (isFetching) {
//     return <h2>Loading...</h2>
//   }
//   return (
//     <>
//       <BrowserRouter>
//       {location.pathname !== "/" && <Navbar />}
//         <Routes>
//         <Route index path='/' element={<Home/>}/>
//         <Route path='/landingPage' element={<ProtectedRoute user={user}>
//           <LandingPage/>
//          </ProtectedRoute>}/>
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/cart" element={<AddToCart />} />
//         </Routes>
//         {location.pathname !== "/" && <Footer />}
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;


import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import AddToCart from "./pages/AddToCart";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase";

const AppContent = ({user}) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/landingPage' element={
          <ProtectedRoute user={user}>
            <LandingPage />
          </ProtectedRoute>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [isFetching, setisFetching] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setisFetching(false);
        return;
      }
      setUser(null);
      setisFetching(false);
    });
    return () => unSubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <BrowserRouter>
      <AppContent user={user} />
    </BrowserRouter>
  );
};

export default App;
