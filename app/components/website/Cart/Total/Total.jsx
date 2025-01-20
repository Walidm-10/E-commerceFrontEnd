import Link from "next/link";

export default function Total({ total }) {
  return (
    <div>
      <div className="flex flex-col items-end">
        <div className="w-3/6 flex justify-between py-2">
          <span className="text-sm text-gray-500">Subtotal:</span>
          <span>${total}</span>
        </div>
        <div className="w-3/6 flex justify-between border-b-2 py-2">
          <span className="text-sm text-gray-500">Shipping:</span>
          <span>Free</span>
        </div>
      </div>
      <div className="flex justify-between py-2">
        <Link
          href="/"
          className="font-bold flex items-center gap-1.5 hover:text-gray-800 duration-300 ease-in-out"
        >
          <span>{"<"}</span>
          <span>Continue Shopping</span>
        </Link>
        <span className="w-3/6 flex justify-between font-bold">
          Total:
          <span>${total}</span>
        </span>
      </div>
    </div>
  );
}
