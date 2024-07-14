
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../index.css';

Modal.setAppElement('#root'); // Set the app element for accessibility

const AddToCart = () => {
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    const confirmOrder = () => {
        setIsModalOpen(true);
    };

    const handleSubmit = (values) => {
        // Handle order submission logic
        alert(`Order confirmed for ${values.name} at ${values.address}!`);
        setCart([]);
        sessionStorage.removeItem('cart');
        setIsModalOpen(false);
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        contact: Yup.string().required('Contact number is required'),
        address: Yup.string().required('Address is required'),
    });

    return (
        <div className="addCart">
            <table className="cartTable">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id} className="cartItem">
                            <td><img src={item.image} alt={item.title} className="cartItemImage" /></td>
                            <td>{item.title}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>
                                <button onClick={() => removeFromCart(item.id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="cartTotal">
                <h2>Total: ${total.toFixed(2)}</h2>
            </div>
            <div className="cartActions">
                <button onClick={() => navigate('/products')}>Continue Shopping</button>
                <button onClick={confirmOrder} disabled={cart.length === 0}>Confirm Order</button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Order Confirmation"
                className="modal"
                overlayClassName="overlay"
            >
                <h2 style={{fontSize:'25px',textAlign:'center'}}>Confirm Order</h2>
                <Formik
                    initialValues={{ name: '', contact: '', address: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="orderForm">
                        <div className="formField">
                            <label htmlFor="name">Name:</label> <br />
                            <Field name="name" type="text" style={{padding:'10px', border:'1px solid black',borderRadius:'4px'}} required/>
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>
                        <div className="formField">
                            <label htmlFor="contact">Contact Number:</label> <br />
                            <Field name="contact" type="text" style={{padding:'10px', border:'1px solid black',borderRadius:'4px'}} required/>
                            <ErrorMessage name="contact" component="div" className="error" />
                        </div>
                        <div className="formField">
                            <label htmlFor="address">Address:</label> <br />
                            <Field name="address" type="text" style={{padding:'10px', border:'1px solid black',borderRadius:'4px'}} required/>
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>
                        <div className="formActions">
                            <button type="submit" style={{border:'2px solid blue',borderRadius:'4px', backgroundColor:'black',padding:'7px',margin:'5px'}} onClick={()=>{
                            }}>Confirm Order</button>
                            <button type="button" style={{border:'2px solid blue',borderRadius:'4px', backgroundColor:'black',padding:'7px',margin:'5px'}} onClick={() => setIsModalOpen(false)}>Cancel</button>
                        </div>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
};

export default AddToCart;


