'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // フェイク送信
  };

  return (
    <section className="min-h-screen  text-white px-4 py-16 flex flex-col items-center justify-center">
      <motion.h2
        className="text-7xl md:text-8xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 pt-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        CONTACT
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name */}
        <motion.div whileFocus={{ scale: 1.02 }} className="flex flex-col">
          <label className="mb-2 text-yellow-300">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          />
        </motion.div>

        {/* Email */}
        <motion.div whileFocus={{ scale: 1.02 }} className="flex flex-col">
          <label className="mb-2 text-yellow-300">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          />
        </motion.div>

        {/* Message */}
        <motion.div whileFocus={{ scale: 1.02 }} className="flex flex-col">
          <label className="mb-2 text-yellow-300">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition duration-300 w-60"
        >
          {submitted ? 'Thanks! 🚀' : 'Send Message'}
        </motion.button>
      </motion.form>
        <Footer />
    </section>

  );

}
