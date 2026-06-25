import ProjectCard from '../components/ui/ProjectCard'
import paldo from '../assets/projects/paldo.png'
import lockad from '../assets/projects/lockad.png'
import nsync from '../assets/projects/nsync.png'

export const ProjectSection = () =>
{
    const projects = [
        {
            title: 'Paldo',
            description: 'Paldo is a full-stack scholarship application system that connects students and local government scholarship providers.',
            githubHref: 'https://github.com/pak-pow/OpenIT_Capstone.git',
            onViewImage: () => window.open(paldo, '_blank'),
        },
        {
            title: 'Lock-Ad-v2',
            description: 'A basic navigation web application for finding routes for commuters. It is not a real-time navigation app and is only intended for demonstration purposes and will be further developed in the near future.',
            githubHref: 'https://github.com/ur1el0/Lock-Ad-v2.git',
            onViewImage: () => window.open(lockad, '_blank'),
        },
        {
            title: 'NSync',
            description: 'A gamified personal knowledge and memory app built with a Django backend and Kotlin Android app. It helps users capture notes, create review cards, complete quiz-style sessions, and track mastery with XP, levels, streaks, and accuracy.',
            githubHref: 'https://github.com/ur1el0/NSync.git',
            onViewImage: () => window.open(nsync, '_blank'),
        },
    ]

    return (
        <section className="mt-30 pb-20 px-4 max-w-6xl border-t mx-auto border-[var(--border)] pt-10" id="projects">
            <h2 className="mb-10 text-center text-4xl font-bold text-[var(--text)]">Featured Projects</h2>
            <div className="grid gap-10 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        githubHref={project.githubHref}
                        onViewImage={project.onViewImage}
                    />
                ))}
            </div>
        </section>
    );
}
