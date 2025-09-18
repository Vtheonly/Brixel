// src/components/sections/shared/ContactForm.tsx
'use client'

import { Button } from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import TextArea from "@/components/ui/TextArea"
import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
        <Input id="name" type="text" required value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
        <Input id="email" type="email" required value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone number *</label>
        <Input id="phone" type="tel" required value={formData.phone} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
        <TextArea id="message" rows={5} value={formData.message} onChange={handleChange} />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'SENDING...' : 'SEND'}
      </Button>
      {success && <p className="text-green-500">Your message has been sent successfully!</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}

export default ContactForm