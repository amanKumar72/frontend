// eslint-disable-next-line react/prop-types
function Button({ value, selected, handleClick }) {
  return (
    <button
      className={`px-4 py-3 m-2 bg-${
        value == selected ? "black" : "white"
      } text-${
        value == selected ? "white" : "black"
      } border-2 font-bold  cursor-pointer`}
       onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}

export default Button;
