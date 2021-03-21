import React from "react"
import "./styles.scss"

const Text = ({ value, placeholder, className, onChange, ...rest }) => {
  return (
    <div className={`input-text-container ${className || ""}`}>
      <textarea
        className={`input-text`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </div>
  )
}

export default Text
