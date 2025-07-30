import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { MdOutlineEmail, MdPhone } from 'react-icons/md';
const ContactUs = () => {
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_wz4tuji',
      'template_27e2i1e',
      form.current,
      '7elnCipkhAcKC1BBV'
    )
    .then(
      () => {
        toast.success('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        toast.error('Failed to send message, please try again.');
        console.error(error.text);
      }
    );
  }; 
    return(
   <div className=" p-6 rounded-xl shadow-xl bg-gradient-to-br from-[#0d1b3d] to-[#003973] text-white">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered bg-[#102344] placeholder-gray-300 text-white"
          required
        />

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered bg-[#102344] placeholder-gray-300 text-white w-full pr-10"
            required
          />
          <MdOutlineEmail className="absolute right-3 top-3 text-gray-400" size={20} />
        </div>

        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="Phone *"
            className="input input-bordered bg-[#102344] placeholder-gray-300 text-white w-full pr-10"
            required
          />
          <MdPhone className="absolute right-3 top-3 text-gray-400" size={20} />
        </div>

        <textarea
          name="message"
          rows="4"
          placeholder="Write message"
          className="textarea textarea-bordered bg-[#102344] placeholder-gray-300 text-white"
        />

        <button
          type="submit"
          className="btn bg-lime-400 hover:bg-lime-300 text-black font-bold rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
    
    );
};

export default ContactUs;