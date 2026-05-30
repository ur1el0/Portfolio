export const SocialButton = ({ href, children, icon, label }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="anchor-click flex items-center gap-2 text-blue-500 hover:underline">
            {icon}
            <span className="sr-only">{label}</span>
            {children}
        </a>
    )
}

export default SocialButton
