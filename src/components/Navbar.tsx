function Navbar() {
  return (
    <div className=" mt-3 container pb-3 border-b-[1.75px] flex justify-start justify-between item-center mx-auto">
      <button className="focus-none invisible md:visible">Subscribe</button>
      <p className="text-3xl">Large</p>
      <button className="border-2 p-2 border-gray-400 rounded-md focus-none invisible md:visible">
        Sign Up
      </button>
    </div>
  );
}
export default Navbar;
