interface ApiDataProp {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  headers: Record<string, string>;
  body?: string;
}

const secureFetch = async ({ url, method, headers, body }: ApiDataProp) => {
  const request = await fetch(url, {
    method: method,
    headers: headers,
    body: body ? body : undefined,
  });
  return request;
};
export default secureFetch;
