import { SiDjango, SiDotnet, SiNodedotjs, SiReact, SiTailwindcss, SiPython, SiJavascript, SiGit, SiDocker, SiPostgresql, SiFigma, SiKotlin, SiFirebase, SiMongodb, SiQt } from 'react-icons/si'
import { TbBrandCpp } from "react-icons/tb";
import { FaC, FaJava, FaBootstrap } from "react-icons/fa6";



export const AboutSection = () => {
    const StrongFoundation = [
        { name: 'Python', icon: SiPython, accent: 'text-yellow-300', ring: 'ring-yellow-500/20' },
        { name: 'C#', icon: FaC, accent: 'text-blue-500', ring: 'ring-blue-500/20' },  
        { name: 'JavaScript', icon: SiJavascript, accent: 'text-yellow-500', ring: 'ring-yellow-500/20' },
        { name: 'Node.js', icon: SiNodedotjs, accent: 'text-green-500', ring: 'ring-green-500/20' },
        { name: 'Django', icon: SiDjango, accent: 'text-emerald-600', ring: 'ring-emerald-600/20' },
        { name: '.NET Core', icon: SiDotnet, accent: 'text-violet-500', ring: 'ring-violet-500/20' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, accent: 'text-sky-400', ring: 'ring-sky-400/20' },
        { name: 'React', icon: SiReact, accent: 'text-cyan-400', ring: 'ring-cyan-400/20' },
    ]
    const Background = [
        { name: 'C++', icon: TbBrandCpp, accent: 'text-blue-500', ring: 'ring-blue-500/20' },
        { name: 'C', icon: FaC, accent: 'text-blue-500', ring: 'ring-blue-500/20' },
        { name: 'Java', icon: FaJava, accent: 'text-red-500', ring: 'ring-red-500/20' },
        { name: 'Bootstrap', icon: FaBootstrap, accent: 'text-purple-600', ring: 'ring-purple-600/20' },
        { name: 'MongoDB', icon: SiMongodb, accent: 'text-green-600', ring: 'ring-green-600/20' },
        { name: 'QT', icon: SiQt, accent: 'text-green-600', ring: 'ring-green-600/20' },

        
    ]
    const Tools = [
        { name: 'Git', icon: SiGit, accent: 'text-orange-500', ring: 'ring-orange-500/20' },
        { name: 'PostgreSQL', icon: SiPostgresql, accent: 'text-blue-700', ring: 'ring-blue-700/20' },
        { name: 'Figma', icon: SiFigma, accent: 'text-cyan-400', ring: 'ring-cyan-400/20' },
    ]
    
    const currentlyLearning =[
        { name: 'Kotlin', icon: SiKotlin, accent: 'text-red-500', ring: 'ring-red-500/20' },
        { name: 'Docker', icon: SiDocker, accent: 'text-blue-600', ring: 'ring-blue-600/20' },
        { name: 'Firebase', icon: SiFirebase, accent: 'text-yellow-500', ring: 'ring-yellow-500/20' },
    ]

    const TechItem = ({ name, icon: Icon, accent, ring }) => (
        <div
            className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-3 text-center shadow-sm ring-1 ${ring} transition-transform duration-200 hover:-translate-y-1`}
        >
            <Icon className={`h-6 w-6 ${accent}`} aria-hidden="true" />
            <span className="text-xs font-semibold text-[var(--text)]">{name}</span>
        </div>
    )


    return (
        <section className="mt-30 py-16 px-4 max-w-6xl mx-auto" id="about">
            <h2 className="mb-6 text-center text-3xl font-semibold text-[var(--text)]">
                About Me
            </h2>
            <div className="flex flex-col gap-8 items-center">
                <div className="text-left max-w-3xl mx-auto text-lg text-[var(--muted)]">
                    <p className="mt-4 mb-6 text-xl font-semibold leading-relaxed text-[var(--text)]">
                        I'm Roosc Zaño, a full-stack web and mobile developer with a passion for creating intuitive and efficient applications.    
                    </p>
                    <p className="mt-8 mb-4 text-xl font-semibold leading-relaxed text-[var(--text)]">
                        With a background in Information Technology that specializes in web and mobile development, I have experience in various programming languages and frameworks, including Node.js, ASP.NET Core, React, and Django. I am now learning mobile development using Kotlin and will use Swift in the next following months.  
                    </p>
                </div>

                <div className="w-full max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.06)]">
                    <div className="mb-5 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                                Tech Stack
                            </p>
                            <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">
                                Tools I use to build
                            </h3>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <span className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                                Experienced With
                            </span>
                            <div className="grid gap-2 sm:grid-cols-6">
                                {StrongFoundation.map(item => (
                                    <TechItem key={item.name} {...item} />
                                ))}
                            </div>
                        </div>

                        
                        <div>
                            <span className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                                Tools
                            </span>
                            <div className="grid gap-2 sm:grid-cols-6">
                                {Tools.map(item => (
                                    <TechItem key={item.name} {...item} />
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <span className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                                Currently Learning
                            </span>
                            <div className="grid gap-2 sm:grid-cols-6">
                                {currentlyLearning.map(item => (
                                    <TechItem key={item.name} {...item} />
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <span className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                                Have Slight Knowledge/Experience With
                            </span>
                            <div className="grid gap-2 sm:grid-cols-6">
                                {Background.map(item => (
                                    <TechItem key={item.name} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}