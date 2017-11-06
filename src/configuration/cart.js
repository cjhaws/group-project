export let cartStore = [] // holds all selected products

// key will == 'cart'
// value will be cartStore ^

export const addProductToCart = (product) => {
  let newStore = (getCart()) ? getCart() :[]
  newStore.push(product)

  cartStore = []
  cartStore = newStore

  localStorage.setItem('cart', JSON.stringify(newStore))
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem('cart'))
}

export const removeProductFromCart = (product) => {
  // filter cart array by products that are not product to be removed
  // set these as new cart array (will not include product to be removed)
  const newCartArray = getCart().filter(p => p.id !== product.id)

  // persist to local storage
  localStorage.setItem('cart', JSON.stringify(newCartArray))
  console.log(getCart())
}

export const clear = key => localStorage.clear()