const setToLocalStorage = (key: string, value: string) => {
  console.log('hi local')
  localStorage.setItem(key, value)
}

export default setToLocalStorage
