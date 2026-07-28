import { FaGithub } from 'react-icons/fa'
import ActionButton from './ActionButton'

export const ProjectCard = ({ title, description, onViewImage, githubHref, techStack = [], year }) => {
    return (
        <article className="min-h-[280px] rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-[var(--text)] shadow-xl flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-3 gap-2">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    {year && (
                        <span className="text-xs font-semibold text-[var(--muted)] px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--bg)]">
                            {year}
                        </span>
                    )}
                </div>
                <p className="mb-5 text-lg text-[var(--muted)]">{description}</p>
                {techStack && techStack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2 mb-2">
                        {techStack.map((tech) => (
                            <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--border)] text-[var(--text)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="mt-6 flex flex-col gap-3 border-t border-[var(--border)] pt-4 sm:flex-row sm:items-center sm:gap-3">
                {onViewImage && (
                    <ActionButton onClick={onViewImage}>
                        View Image
                    </ActionButton>
                )}
                <ActionButton href={githubHref}>
                    <FaGithub className="w-5 h-5" aria-hidden="true" />
                    View on GitHub
                </ActionButton>
            </div>
        </article>
    )
}

export default ProjectCard
