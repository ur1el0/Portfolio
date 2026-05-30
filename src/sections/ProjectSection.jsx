import ProjectCard from '../components/ui/ProjectCard'

export const ProjectSection = () =>
{
    const projects = [
        {
            title: 'Lock-Ad-v2',
            description: 'A modern, user-friendly navigation web application designed to help users find the fastest or safest routes based on their preferences. Lock-Ad provides an intuitive interface for route planning with support for real-time route calculation and multiple routing algorithms.',
            githubHref: 'https://github.com/ur1el0/Lock-Ad-v2.git',
            onViewImage: () => window.open('https://raw.githubusercontent.com/ur1el0/Portfolio/refs/heads/main/src/assets/projects/lockad.png', '_blank'),
        },
        {
            title: 'Paldo',
            description: 'Paldo is a full-stack scholarship application system that connects students and local government scholarship providers. This README covers the repo layout, local and Docker startup, and links to the walkthrough docs.',
            githubHref: 'https://github.com/pak-pow/OpenIT_Capstone.git',
            onViewImage: () => window.open('https://raw.githubusercontent.com/ur1el0/Portfolio/refs/heads/main/src/assets/projects/paldo.png', '_blank'),
        },
        {
            title: 'Slot-v1',
            description: 'SlotV1 is a Django appointment-booking platform with public service browsing, user accounts, appointment scheduling, and staff tools for managing services, schedules, and bookings.',
            githubHref: 'https://github.com/ur1el0/Slot-v1.git',
        }
    ]

    return (
        <section className="mt-50 pb-20 px-4 max-w-6xl mx-auto" id="projects">
            <h2 className="text-4xl font-bold mb-10 dark:text-white-500 light:text-slate-900 text-center">Featured Projects</h2>
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