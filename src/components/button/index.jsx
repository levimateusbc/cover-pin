function Button({ onClick }) {
  return (
    <button
      onClick={onClick} // Aqui está o fix
      className="bg-emerald-800 text-white w-[152px] h-[36.74px] rounded-[20px] px-[15px] py-[7px] opacity-100 text-base"
    >
      + ADD LEAD
    </button>
  );
}

export default Button;

