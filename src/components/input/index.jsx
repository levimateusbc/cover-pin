function Input ({kind,holder, value, setValue}){
    return(
        <input
          type={kind === 'email' 
            ? "email" 
            : kind === 'text' 
            ? "text" 
            : "number"}
          placeholder={holder}
          className="p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
    )

}
export default Input;