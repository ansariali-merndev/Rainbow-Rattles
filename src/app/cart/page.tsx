import { CartTotal } from "@/components/blocks/CartTotal";
import { CartListing } from "@/components/ui/CartListing";

export default function Cart() {
  return (
    <section className="my-6">
      <h2 className="text-xl md:text-3xl font-extrabold">Your Cart</h2>
      <div className="hidden bg-[#EAEAEA] md:grid grid-cols-5 p-2 mt-2 text-center">
        <p className="col-span-2 text-start">Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <CartListing />
      <CartTotal />
    </section>
  );
}
