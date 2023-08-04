export const getProducts = async () => {
  return fetch(import.meta.env.API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': import.meta.env.ACCES_TOKEN_SHOPIFY,
      'Access-Control-Allow-Methods': 'GET'
    }
  })
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    console.log(error)
  }
  )
}