export default function Separator({label = 'OR'}) {
    return (
        <div className="flex items-center mt-2 mb-4">
            <div className="h-px bg-gray-300 flex-1"/>
            <span className="px-4 text-[13px] font-semibold text-gray-500">{label}</span>
            <div className="h-px bg-gray-300 flex-1"/>
        </div>
    )
}