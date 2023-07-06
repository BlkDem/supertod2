import axios from "axios"

export async function getData() {

  try {
    return await axios.get(process.env.PRICE_API_SERVER_ENDPOINT as string) ?? [];
  } catch(e) {
    console.error(e);
  }
}
