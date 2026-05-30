export const ActionButton = ({ onClick, href, children }) => {
    const base = 'anchor-click mt-4 px-3 py-1.5 bg-gray-800 text-white rounded-md hover:bg-gray-700 mx-auto w-max flex items-center gap-2'

    if (href) {
        return (
            <a href={href} className={base} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        )
    }

    return (
        <button className={base} onClick={onClick}>
            {children}
        </button>
    )
}

export default ActionButton
