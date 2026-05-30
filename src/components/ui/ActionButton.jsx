export const ActionButton = ({ onClick, href, children }) => {
    const base = 'anchor-click mt-4 px-5 py-3 text-base bg-gray-800 text-white rounded-xl hover:bg-gray-700 mx-auto w-max flex items-center gap-3 shadow-md transition-colors'

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
