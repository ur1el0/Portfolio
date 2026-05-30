import { FaGithub } from 'react-icons/fa'
import ActionButton from './ActionButton'

export const ProjectCard = ({ title, description, onViewImage, githubHref }) => {
    return (
        <article className="bg-gray-100 dark:bg-gray-300 rounded-2xl shadow-xl p-8 min-h-[240px] text-slate-900 border border-gray-300 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-lg text-gray-700 mb-5">{description}</p>
            <div className="flex items-center gap-2 border-t pt-4 mt-4">
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
