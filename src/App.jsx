import hero from "./assets/animated-1.jpeg";

function App() {
  return (
    <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 gradient p-8">
      <div className="flex flex-col md:items-center justify-center space-y-4">
        <h1 className="text-8xl capitilize font-bold text-amber-400">
          Video Magic
        </h1>
        <p className="text-xl font-thin text-white">
          Transform URLS into captivating videos with voiceover in seconds!
        </p>
        <form action="">
          <input
            type="url"
            placeholder="https://.."
            className="border-none outline-none rounded-md w-full p-2"
          />
        </form>
        <button
          onClick={() => {}}
          className="border-2 border-white rounded-3xl px-3 py-3 text-white peer-focus:text-gray-700 peer-focus:border-gray-700"
        >
          Generate
        </button>
      </div>
      <div className="">
        <div className="bg-gray-200 w-[380px] h-[480px] rounded-lg"></div>
      </div>
    </main>
  );
}

export default App;
