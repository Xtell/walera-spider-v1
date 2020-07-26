export async function makeRequest(method, url, headers = {}, data = {}) {

  const response = await fetch("https://waleraspider.ml/api/" + url, {
      method: method,
      headers: headers,
      body: JSON.stringify(data)
  });
  return response;
}
