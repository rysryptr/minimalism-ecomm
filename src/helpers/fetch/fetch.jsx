export default function fetchData({
  url,
  method = "GET",
  host = import.meta.env.VITE_API_HOST,
  body,
}) {
  return fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body,
  }).then(async (response) => {
    const jsonResponse = await response.json();

    if (!response.ok) {
      // throw new Error(JSON.stringify(jsonResponse));
      if (response.status >= 500) {
        console.error("Server error:", response.status);
      }

      const error = new Error("HTTP Error");
      error.status = response.status;
      error.body = jsonResponse;
      throw error;
    }
    return jsonResponse;
  });
}
