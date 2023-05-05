const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function Input( { placeholder, name, onChange } ){
    return(
        <div className="my-5">
            <input
                type='text' 
                className={fixedInputClass} 
                placeholder = {placeholder} 
                name={name}
                onChange={onChange}
            />
          </div>
    )
}