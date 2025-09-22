export default function Input({ kind, holder, value, setValue }) {
  return (
    <input
      type={kind}
      placeholder={holder}
      className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 "
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
