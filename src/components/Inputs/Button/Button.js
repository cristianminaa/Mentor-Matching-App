import React from "react"
import "./styles.scss"

const Button = ({ text, className, disabled, onClick }) => {
  return (
    <div
      className={`input-button-container ripple ${className || ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={onClick}
    >
      {text || "text"}
    </div>
  )
}
export default Button
