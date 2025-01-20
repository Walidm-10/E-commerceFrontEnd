import { cookies } from "next/headers";

export default function useFetch() {
  async function UseFetch(url) {
    try {
      const cookie = cookies();
      const token = (await cookie).get("Bearer");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`,
        {
          method: "get",
          headers: {
            "content-type": "application/json",
            Authorization: "Berear " + token.value,
          },
        }
      );
      const dataReponse = await response.json();
      const data = dataReponse.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  return { UseFetch };
}
