function Featured() {
  return (
    <div className="mt-6 container pb-3 mb-3 mx-auto bg-gray-600 h-96 text-white flex flex-col justify-items-start py-20 px-12 ">
      <h1 className="text-5xl italic text-wrap w-[400px]">
        Title of a longer featured blog post
      </h1>
      <p className="text-wrap w-[450px]">
        Multiple lines of text that form the lede, informing new readers quickly
        and efficiently about what's most interesting in this post's contents.
      </p>
      <button className="mt-12 self-start">Continue Reading...</button>
    </div>
  );
}

export default Featured;
