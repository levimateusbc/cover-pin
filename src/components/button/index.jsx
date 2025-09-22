export default function Button({ onClick, label, kind = "primary", icon }) {
  return (
    <button
      onClick={onClick}
      className={` ${
        kind === "icon"
          ? "rounded hover:bg-gray-300 transition md:hidden"
          : kind === "primary"
          ? "bg-[#065F46] text-white  rounded hover:bg-green-800 transition"
          : kind === "secondary"
          ? "bg-[#065F46] text-white  rounded hover:bg-[#065F46] transition"
          : kind === "tertiary"
          ? " bg-gray-200 rounded hover:bg-gray-300 transition"
          : " bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      }   rounded transition px-4 py-2 cursor-pointer`}
    >
      {label}
      {icon && <span>{icon}</span>}
    </button>
  );
}

