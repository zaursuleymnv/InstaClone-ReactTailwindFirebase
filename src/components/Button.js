export default function Button({type = 'button', children, ...props}) {
    return (
        <button 
            type={type}
            {...props}
            className="h-[30px] mt-2 w-full flex justify-center items-center gap-x-2 bg-brand text-white px-2.5 font-medium text-sm rounded disabled:opacity-50">
        {children}
        </button>
    )
} 