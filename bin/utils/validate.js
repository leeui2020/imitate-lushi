exports.isRequired = (name) => {
  return (value) => {
    if (['', undefined, null].includes(value)) {
      throw new Error(`${name}是必填项`)
    }
    return true
  }
}
