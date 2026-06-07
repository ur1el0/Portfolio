import { FaGithub } from 'react-icons/fa'
import ActionButton from './ActionButton'

export const ProjectCard = ({ title, description, onViewImage, githubHref }) => {
    return (
        <article className="min-h-[240px] rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-[var(--text)] shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="mb-5 text-lg text-[var(--muted)]">{description}</p>
            <div className="mt-4 flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:gap-2">
                <ActionButton onClick={onViewImage}>
                    View Image
                </ActionButton>
                <ActionButton href={githubHref}>
                    <FaGithub className="w-5 h-5" aria-hidden="true" />
                    View on GitHub
                </ActionButton>
            </div>
        </article>
    )
}

export default ProjectCard
