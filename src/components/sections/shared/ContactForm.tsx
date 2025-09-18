// src/components/sections/shared/ContactForm.tsx
'use client'

import { Button } from "@/components/ui/Button"
import Input from "@/components/ui/Input"
// import TextArea from "@/components/ui/TextArea" // Assume this is created
import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
        <Input id="name" type="text" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
        <Input id="email" type="email" required />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone number *</label>
        <Input id="phone" type="tel" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
        {/* <TextArea id="message" rows={5} /> */}
        <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary" />
      </div>
      <Button type="submit" className="w-full">
        SEND
      </Button>
    </form>
  )
}

export default ContactForm