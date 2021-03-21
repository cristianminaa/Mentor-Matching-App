import React from "react"
import "./styles.scss"

const Tabs = ({ options, onClick, value }) => {
  return (
    <div className="input-container-tabs">
      {options?.map((option, i) => (
        <div
          key={`oprtion-${i}`}
          className={`option ${value?.includes(option?.value) && "active"}`}
          onClick={() => onClick(option?.value)}
        >
          {option?.label}
        </div>
      ))}
    </div>
  )
}

export default Tabs
