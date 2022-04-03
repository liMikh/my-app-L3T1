import React from 'react'

const Counter = (props) => {
  // const [value, setValue] = useState(props.value)
  const { value } = props
  const formatValue = () => {
    return value === 0 ? 'empty' : value
  }

  const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? 'bg-warning' : 'bg-primary'
    return classes
  }
  const handleIncrement = () => {
    props.onIncrement(props.id)
    // console.log(props)
  }

  const handleDecrement = () => {
    props.onDecrement(props.id)
    // console.log(props)
  }

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}> {formatValue()} </span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-3"
        onClick={() => props.onDelete(props.id)}
      >
        delete
      </button>
    </div>
  )
}

export default Counter
