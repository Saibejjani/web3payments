function NotFound() {
  return (
    <div className="font-bold text-white }">
      <div className="p-80 ">
        <h1 className="text-4xl">Oops! You've stumbled upon a lost page</h1>
        <h2 className="text-2xl mt-2">Don't worry, we're here to help</h2>
        <p className="text-xl mt-1">
          While we try to find the page you were looking for, why not try one of
          these?
        </p>
        <h1 className="text-2xl mt-3">
          <a
            className="border p-1 rounded-sm hover:invert hover:bg-black "
            href="/"
          >
            Home
          </a>
        </h1>
      </div>
    </div>
  );
}
export default NotFound;
