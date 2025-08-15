'use client';
//This directive tells Next.js that this component should run on the client side (in the browser) rather than being server-side rendered. This is necessary because the component uses interactive features like event handlers and browser APIs.

import { useState } from 'react';
//useState: React hook for managing component state
import { supabase } from '@/lib/supabaseClient';
//backend client
import { useRouter } from 'next/navigation';
//navigation hook
import image1 from "@/images/image5.png";
import image2 from '@/images/graph5.png';
import image3 from '@/images/graph5.png';
import image4 from '@/images/image9.png';


export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  //Stores and updates the email input value
  const [password, setPassword] = useState('');
  //Stores and updates the password input value
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);
  //Tracks whether the signup process is in progress
  const [error, setError] = useState('');
  //Stores any error messages to display to the user

  const handleSignup = async (e: React.FormEvent) => {
    //Defines the signup handler function:async: Makes it asynchronous to handle the API call
    // e: React.FormEvent: TypeScript type for form submission events

    e.preventDefault();
    //Prevents the default form submission behavior (which would reload the page).
    setLoading(true);
    //Sets loading state to true (shows "Signing up..." text)
    setError('');
    //Clears any previous error messages

    const {error} = await supabase.auth.signUp({
      //Only destructures error (ignores data since we don't need it here)
      email,
      password,
      //Passes the email and password from state
      //await waits for the API response
    })

    if (error) {
      setError(error.message);
    }else{
      alert ('Signup successful! check your email to confirm')
      router.push('/auth/login')
    }
    setLoading(false)
  }
  //Handles the signup result:If there's an error, displays it to the userIf successful, shows an alert and redirects to the login page. Always sets loading back to false regardless of outcome

  return (
    <div className="relative h-screen overflow-hidden">

      <img
        src={image2.src}
        alt="Decorative blob"
        className=" w-[600px] h-[600px] -ml-70 -mt-80 opacity-20"
        />
        <img
          src={image3.src}
          className="absolute -right-50 -bottom-60 w-[600px] h-[600px] opacity-20 z-0"
        />
  
        <img src={image4.src} className="-ml-50 w-[100px] h-[100px]" />
      

      <div className='flex gap-20 -mt-98 ml-60'>
        <div>
          <img src={image1.src} alt="characterimage" className='mt-28' />
        </div>
        
      <div className=" mt-20 bg-white p-8 rounded-lg shadow-l">
        <h1 className="text-3xl font-bold text-center">Create an Account</h1>

      <form onSubmit={handleSignup} className="flex flex-col mb-5 ">
          <input
            type="text"
            placeholder="LastName"
            className="w-[320px] border-b-2 border-gray-400 bg-transparent py-2 p-2 rounded mt-4 "
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="LastName"
            className="w-[320px] border-b-2 border-gray-400 bg-transparent py-2 rounded mt-4"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-[320px]  border-b-2 border-gray-400 bg-transparent py-2 rounded mt-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            className="w-[320px] border-b-2 border-gray-400 bg-transparent py-2  mt-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="date"
            placeholder="Date of birth"
            className="w-[320px] border-b-2 border-gray-400 bg-transparent py-2 rounded mt-4"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#5f9ea0] text-white px-2 py-2 mt-4 ml-30 rounded w-[100px]"
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
   </div>
 </div> 
  )
}