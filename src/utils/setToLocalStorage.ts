const setToLocalStorage = (key: string, value: string) => {
  console.log('works')
  localStorage.setItem(key, value)

  return undefined
}

export default setToLocalStorage
