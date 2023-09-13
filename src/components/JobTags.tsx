export default function JobTags({
    children,
    onClick
}: {
    children: string,
    onClick: any
}) {
    return (
        <button onClick={onClick} className="font-semibold text-desaturate-dark-cyan hover:text-light-gray-cyan-2 bg-light-gray-cyan-2 hover:bg-desaturate-dark-cyan pt-1 px-2 rounded-md transition-all duration-75">
            {children}
        </button>
    )
}