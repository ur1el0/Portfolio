import ProjectCard from '../components/ui/ProjectCard'
import paldo from '../assets/projects/paldo.png'
import lockad from '../assets/projects/lockad.png'
import nsync from '../assets/projects/nsync.png'

export const ProjectSection = () =>
{
    const projects = [
        {
            title: 'Lock-Ad-v3',
            description: 'A pedestrian routing platform that overlays walking paths with real-time weather risks, safety signals, and crowd-sourced incident reports. (Work in Progress)',
            githubHref: 'https://github.com/ur1el0/Lock-Ad-v3.git',
            onViewImage: () => window.open(lockad, '_blank'),
            techStack: ['React', 'Vite', 'Python', 'Django', 'Leaflet', 'PostgreSQL'],
            year: '2025 - Present',
        },
        {
            title: 'Paldo',
            description: 'Paldo is a full-stack scholarship application system that connects students and local government scholarship providers.',
            githubHref: 'https://github.com/pak-pow/OpenIT_Capstone.git',
            onViewImage: () => window.open(paldo, '_blank'),
            techStack: ['React', 'Vite', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'Docker'],
            year: '2026',
        },
        {
            title: 'NSync',
            description: 'A gamified personal knowledge and memory app built with a Django backend and Kotlin Android app. It helps users capture notes, create review cards, complete quiz-style sessions, and track mastery with XP, levels, streaks, and accuracy.',
            githubHref: 'https://github.com/ur1el0/NSync.git',
            onViewImage: () => window.open(nsync, '_blank'),
            techStack: ['Kotlin', 'Android SDK', 'Python', 'Django', 'SQLite'],
            year: '2026',
        },
        {
            title: 'Com',
            description: 'A student productivity web application and dashboard tracker built with React and Supabase, featuring assignment tracking, notes, calendar, and AI-enabled study tools. (Work in Progress)',
            githubHref: 'https://github.com/ur1el0/Com.git',
            onViewImage: null,
            techStack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
            year: '2026',
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
                        techStack={project.techStack}
                        year={project.year}
                    />
                ))}
            </div>
        </section>
    );
}
