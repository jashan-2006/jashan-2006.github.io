'use client'

// Import useState hook from React
import { useState } from 'react'

// Define the ToggleMessage component
export default function ToggleMessage() {
  // State to track if the message should be shown
  const [showMessage, setShowMessage] = useState(false)
  // State to track the button text
  const [buttonText, setButtonText] = useState('Show Message')

  // Function to toggle message visibility and button text
  const toggle = () => {
    setShowMessage(!showMessage)
    setButtonText(showMessage ? 'Show Message' : 'Hide Message')
  }

  // Render the button and conditionally render the message
  return (
    <div className="toggle-message">
      <button onClick={toggle}>{buttonText}</button>
      {showMessage && (
        <p>This message is  rendered based on the button click! Thank you for clicking!</p>
      )}
    </div>
  )
}