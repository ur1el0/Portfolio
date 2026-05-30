import {FaGithub} from 'react-icons/fa'
import SectionTitle from '../components/ui/SectionTitle'
import ActionButton from '../components/ui/ActionButton'

export const ProjectSection = () =>
{
    return (
        <section className="py-16 px-4 max-w-5xl mx-auto" id="projects">
            <SectionTitle>Featured Projects</SectionTitle>
            <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-gray-100 dark:bg-slate-800 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white-500">Project 1</h3>
                    <p className="text-gray-700 dark:text-gray-400 mb-4">asdada</p> 
                    <div className="flex items-center gap-2">
                        <ActionButton onClick={() => {}}>
                            View Image
                        </ActionButton>
                        <FaGithub className="w-5 h-5" aria-hidden="true" />
                        <ActionButton href="#">
                            View on GitHub
                        </ActionButton>
                    </div>
                </div>
                <div className="bg-gray-100 dark:bg-slate-800 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white-500">Project 2</h3>
                    <p className="text-gray-700 dark:text-gray-400 mb-4">asdada</p>
                    <div className="flex items-center gap-2">
                        <ActionButton onClick={() => {}}>
                            View Image
                        </ActionButton>
                        <FaGithub className="w-5 h-5" aria-hidden="true" />
                        <ActionButton href="#">
                            View on GitHub
                        </ActionButton>
                    </div>
                </div>
            </div>
        </section>
    );
}