export function Button({ text, varient }: { text: string; varient: string }) {
  if (varient == "danger") {
    return (
      <div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold ml-2 py-2 px-4 ">
          {text}
        </button>
      </div>
    );
  }
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {text}
      </button>
    </div>
  );
}
