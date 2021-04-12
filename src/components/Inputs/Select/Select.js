import React from "react"
import Select from "react-select"
import "./styles.scss"

const DropdownSelect = ({ defaultValue, options, onChange, placeholder, styles }) => {
  return (
    <Select
      isMulti
      isClearable
      closeMenuOnSelect={false}
      placeholder={placeholder || ""}
      defaultValue={defaultValue}
      options={options}
      onChange={(value) => onChange(value.map(({ value }) => value))}
      styles={{
        control: (styles) => ({
          ...styles,
          border: "1px solid rgba(0, 52, 112, 0.3)",
          borderRadius: "6px",
          margin: "10px 0",
          minWidth: "150px"
        }),
        option: (styles, { data }) => ({
          ...styles,
          paddingLeft: data?.isSubcategory && `30px`,
        }),
      }}
    />
  )
}

export default DropdownSelect
