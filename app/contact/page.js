'use client' // Enables React Server Components with client-side interactivity

import { useState } from 'react'
import UserForm from '@/components/UserForm'

// Contact page component
export default function Contact() {
  const [submittedData, setSubmittedData] = useState(null) // State to track submitted form data

  // Handler for form submission
  const handleSubmit = (data) => {
    console.log('Form submitted:', data)
    setSubmittedData(data)
  }

  return (
    <div>
      <h1>Contact Us</h1>
      {submittedData ? (
        // Show thank you message if form is submitted
        <div className="success-message">
          <h3>Thank you for your submission, {submittedData.name}!</h3>
          <p>We&apos;ll contact you at {submittedData.email} soon.</p>
        </div>
      ) : (
        // Show the user form if not submitted yet
        <UserForm onSubmit={handleSubmit} />
      )}
    </div>
  )
}