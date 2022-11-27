import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const navigate = useNavigate();

    const handleAddProducts = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const product = form.product.value;
        const condition = form.condition.value;
        const location = form.location.value;
        const price = form.price.value;
        const purchaseDate = form.purchaseDate.value;
        const phone = form.phone.value;
        const description = form.description.value;

        const addProducts = {
            category,
            product,
            condition,
            location,
            price,
            purchaseDate,
            phone,
            description,
        }

        fetch('http://localhost:5000/users/seller', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(addProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (isSeller && data.acknowledged) {
                    form.reset()
                    toast.success('Product Added Successfully!')
                    navigate('/dashboard/my-products')
                }
                else {
                    toast.error("Product did not added, don't try again or you will be blocked!")
                }
            })

    }

    return (
        <div className='mt-4 mb-12'>
            <h2 className='text-2xl font-bold mb-12'>Add Your Product</h2>
            <form onSubmit={handleAddProducts} className='grid grid-cols-1 gap-6'>

                <label className="label">
                    <span className="label-text text-xl font-bold text-primary">SELECT YOUR CATEGORY:</span>
                </label>
                <select name='category' type="text" className="select select-bordered w-72">
                    <option value="iphone">Iphone</option>
                    <option value="oneplus">Oneplus</option>
                    <option value="xiaomi">Xiaomi</option>
                </select>

                <input name='product' type="text" placeholder="Product Name" className="input input-bordered input-secondary w-5/6" />

                <input name='condition' type="text" placeholder="Product Condition" className="input input-bordered input-secondary w-5/6" />

                <input name='location' type="text" placeholder="Location" className="input input-bordered input-secondary w-5/6" />

                <input name='price' type="text" placeholder="Price" className="input input-bordered input-secondary w-5/6" />

                <input name='purchaseDate' type="text" placeholder=" Year of purchase" className="input input-bordered input-secondary w-5/6" />

                <input name='phone' type="text" placeholder="Mobile Number" className="input input-bordered input-secondary w-5/6" />

                <textarea name='description' className="textarea input-bordered w-5/6" placeholder="Product Description"></textarea>

                <input type="submit" placeholder="Type here" className="btn btn-accent w-5/6" />
            </form>
        </div>
    );
};

export default AddProducts;