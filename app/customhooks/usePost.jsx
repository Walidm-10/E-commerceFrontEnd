import Axios from "../components/Api/Api";

export default function usePost() {
  async function UsePost(url, id, count) {
    try {
      let res = await Axios({
        url: url,
        method: "post",
        data: { productId: id, quantity: count },
      });
      return res.data.product;
    } catch (error) {
      console.log(error);
    }
  }
  return { UsePost };
}
