export const ActionButton = ({ onClick, href, children }) => {
    const base = 'anchor-click mt-3 mx-auto flex w-max items-center gap-2 rounded-xl bg-[var(--text)] px-5 py-3 text-base text-[var(--bg)] shadow-md transition-colors hover:opacity-90'

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
