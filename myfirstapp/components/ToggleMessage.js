'use client'

import { useState } from 'react'

export default function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false)
  const [buttonText, setButtonText] = useState('Show Message')

  const toggle = () => {
    setShowMessage(!showMessage)
    setButtonText(showMessage ? 'Show Message' : 'Hide Message')
  }

  return (
    <div className="toggle-message">
      <button onClick={toggle}>{buttonText}</button>
      {showMessage && (
        <p>This message is  rendered based on the button click! Thank you for clicking!</p>
      )}
    </div>
  )
}