import Image from "next/image";
import styles from "./CartContain.module.css";
import useFetch from "@/app/customhooks/useFetch";
import Delete from "../Delete/Delete";
import Total from "../Total/Total";
import Update from "../Update/Update";
import Payment from "../Payment/Payment";

export default async function CartContain() {
  const url = `${process.env.NEXT_PUBLIC_VIEW_CART}`;
  const { UseFetch } = useFetch();
  const data = await UseFetch(url);
  let total = 0;
  total = data?.map(
    (data, index) => (total += data.quantity * data.productId.sellingPrice)
  );
  const showData = data?.map((data, index) => (
    <tr key={index} className="h-24">
      <td className="text-center flex items-center justify-start gap-2 h-24">
        <Image
          alt={data.productId.productName}
          src={data.productId.productImage[0]}
          width={50}
          height={50}
          priority
        />
        {data.productId.productName}
      </td>
      <td className="text-center">
        <Update quantity={data.quantity} id={data._id} />
      </td>
      <td className="text-center">${data.productId.sellingPrice}</td>
      <td className="text-center">
        ${data.quantity * data.productId.sellingPrice}
      </td>
      <td className="text-center">
        <Delete id={data._id} />
      </td>
    </tr>
  ));
  return (
    <>
      {showData?.length > 0 ? (
        <>
          <div className={styles.cartContain}>
            <h1>Shopping Cart.</h1>
            <table className="border-b-2">
              <thead>
                <tr className={styles.headerRow}>
                  <th className="text-start">Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>{showData}</tbody>
            </table>
            <Total total={total[data?.length - 1]} />
          </div>
          <Payment total={total[data?.length - 1]} />
        </>
      ) : (
        <>
          <div className={styles.cartContain}>
            <h1>Your Cart is Empty...</h1>
          </div>
        </>
      )}
    </>
  );
}
