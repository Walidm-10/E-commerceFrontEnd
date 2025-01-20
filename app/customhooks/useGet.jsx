import axios from "axios";

export default function useGet() {
  async function UseGet(url) {
    try {
      let res = await axios
        .get(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`)
        .then((data) => {
          return data.data.data;
        });
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  return { UseGet };
}
