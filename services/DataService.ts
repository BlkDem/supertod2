import axios from "axios"

export async function getData() {
  const config = {
    headers: { Authorization: `Bearer ${process.env.SERVER_TOKEN}` }
  };
  const response = await axios.get(process.env.PRICE_API_SERVER_ENDPOINT as string, config);
  return response?.data ?? [];
}
