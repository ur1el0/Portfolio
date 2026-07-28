import ProjectCard from '../components/ui/ProjectCard'
import paldo from '../assets/projects/paldo.png'
import lockad3 from '../assets/projects/lockad3.png'
import nsync from '../assets/projects/nsync.png'
import comImg from '../assets/projects/com.png'

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
            title: 'Lock-Ad-v3',
            description: 'A pedestrian routing platform that overlays walking paths with real-time weather risks, safety signals, and crowd-sourced incident reports. (Work in Progress)',
            githubHref: 'https://github.com/ur1el0/Lock-Ad-v3.git',
            onViewImage: () => window.open(lockad3, '_blank'),
        },
        {
            title: 'NSync',
            description: 'A gamified personal knowledge and memory app built with a Django backend and Kotlin Android app. It helps users capture notes, create review cards, complete quiz-style sessions, and track mastery with XP, levels, streaks, and accuracy.',
            githubHref: 'https://github.com/ur1el0/NSync.git',
            onViewImage: () => window.open(nsync, '_blank'),
        },
        {
            title: 'Com',
            description: 'A student productivity web application and dashboard tracker built with React and Supabase, featuring assignment tracking, notes, calendar, and AI-enabled study tools. (Work in Progress)',
            githubHref: 'https://github.com/ur1el0/Com.git',
            onViewImage: () => window.open(comImg, '_blank'),
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
