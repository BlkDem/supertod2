import axios from "axios"

export async function getData(modelName: string) {

  try {
    return await axios.get(process.env.PRICE_API_SERVER_ENDPOINT as string + modelName) ?? [];
  } catch(e) {
    console.error(e);
  }
}
