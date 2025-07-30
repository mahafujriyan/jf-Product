import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import SocialLogIn from './SocialLogIn';
import axios from 'axios';

const SingUp = () => {

   const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const imageFile = data.photo[0];

    
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formData
      );
      const imageURL = imgRes.data.data.url;

      
      const userCredential = await createUser(data.email, data.password);

      
      await updateUser({
        displayName: data.name,
        photoURL: imageURL,
      });

 navigate('/');
      console.log('User created and profile updated');
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
    return (
 <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        
          <label className="label">Name</label>
          <input type="text" {...register('name', { required: true })} className="input input-bordered w-full" placeholder="Full Name" />
          {errors.name && <p className='text-red-500'>Name is required</p>}

          
          <label className="label">Phone</label>
          <input type="tel" {...register('phone', { required: true })} className="input input-bordered w-full" placeholder="Phone Number" />
          {errors.phone && <p className='text-red-500'>Phone is required</p>}

          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })} className="input input-bordered w-full" placeholder="Email" />
          {errors.email && <p className='text-red-500'>Email is required</p>}

  
          <label className="label">Password</label>
          <input type="password" {...register('password', { required: true, minLength: 6 })} className="input input-bordered w-full" placeholder="Password" />
          {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
          {errors.password?.type === 'minLength' && <p className='text-red-500'>Minimum 6 characters</p>}

        
          <label className="label">Profile Picture</label>
          <input type="file" accept="image/*" {...register('photo', { required: true })} className="file-input file-input-bordered w-full" />
          {errors.photo && <p className='text-red-500'>Photo is required</p>}

          <button className="btn btn-primary text-black mt-4 w-full">Register</button>
          <p className="mt-2"><small>Already have an account? <Link className="link" to="/login">Login</Link></small></p>
        </form>
        <div className="mt-4"><SocialLogIn /></div>
      </div>
    </div>
    );
};

export default SingUp;