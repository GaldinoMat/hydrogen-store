export default function ProductCardBottomAddToCart({product}) {
  return (
    <>
      <h6 className="text-black font-semibold text-base mt-1 group-hover:opacity-0 transition-all duration-300">
        {product.title}
      </h6>
      <button className="absolute text-red-500 font-bold text-base -translate-y-16 opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 transition-all duration-300">
        + Add to cart
      </button>
    </>
  );
}
