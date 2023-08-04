import { getProducts } from "../../libs/getProducts"

export async function get() {

  const { products } = await getProducts()

  const body = products.map(product => {
    return {
      id: product.id,
      title: product.title,
      body: product.body_html,
      category: product.product_type,
      createdAt: product.created_at,
      tags: product.tags,
      images: product.images.map(image => {
        return {
          src: image.src
        }
      }),
    }
  })

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': 'https://isabelrengifo.art',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}