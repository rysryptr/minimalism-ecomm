export default function fetchData({
  url,
  method = 'GET',
  host = import.meta.env.VITE_API_HOST
}) {
  return fetch(`${host}${url}`, {
    method,
    mode: 'cors',
    headers: { 'Content-Type': 'application/json'}
  }).then( async response => {
      const jsonResponse = await response.json()

      if(!response.ok) throw new Error(JSON.stringify(jsonResponse))
      
      return jsonResponse
    })
}