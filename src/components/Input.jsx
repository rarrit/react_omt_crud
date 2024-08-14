const Input = ({ title, type, placeholder, value, onChangeFunc }) => {
  return (
    <>
      <label>{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeFunc}
      />
    </>
  )
}

export default Input
