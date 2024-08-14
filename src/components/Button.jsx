const Button = ({ title, type, className, clickFunc }) => {
  return (
    <button
      type={type}
      title={title}
      className={className}
      onClick={clickFunc}
    >{title}</button>
  )
}

export default Button