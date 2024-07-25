const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key)
  if (!item) {
    return undefined
  } else {
    return JSON.parse(item)
  }
}

export default getFromLocalStorage
