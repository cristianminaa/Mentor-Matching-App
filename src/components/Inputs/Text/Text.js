import React, { useState } from "react"
import "./styles.scss"

const Text = ({
  value,
  placeholder,
  className,
  inputClassName,
  onChange,
  type,
  ...rest
}) => {
  const [currentType, setCurrentType] = useState(type || "text")
  return (
    <div className={`input-text-container ${className || ""}`}>
      <input
        type={currentType}
        className={`input-text ${inputClassName || ""}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      {type === "password" && (
        <div
          className={`icon ${currentType}`}
          onClick={() => {
            if (currentType === "text") setCurrentType("password")
            else setCurrentType("text")
          }}
        />
      )}
    </div>
  )
}

export default Text
