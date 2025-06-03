'use client'

import { useState } from 'react'
import UserForm from '@/components/UserForm'

export default function Contact() {
  const [submittedData, setSubmittedData] = useState(null)

  const handleSubmit = (data) => {
    console.log('Form submitted:', data)
    setSubmittedData(data)
  }

  return (
    <div>
      <h1>Contact Us</h1>
      {submittedData ? (
        <div className="success-message">
          <h3>Thank you for your submission, {submittedData.name}!</h3>
          <p>We&apos;ll contact you at {submittedData.email} soon.</p>
        </div>
      ) : (
        <UserForm onSubmit={handleSubmit} />
      )}
    </div>
  )
}