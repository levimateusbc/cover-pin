function Button({ onClick,label,kind='primary' }) {
  return (
    <button
      onClick={onClick} // Aqui está o fix
      className= {` ${kind === 'primary' ? "bg-green-700 text-white  rounded hover:bg-green-800 transition" : kind === 'secondary' ? "bg-green-600 text-white  rounded hover:bg-green-700 transition" : kind === 'tertiary' ? " bg-gray-200 rounded hover:bg-gray-300 transition" : " bg-blue-600 text-white rounded hover:bg-blue-700 transition"}   rounded transition px-4 py-2 cursor-pointer`}
    >
      {label}
    </button>
  );
}

export default Button;

