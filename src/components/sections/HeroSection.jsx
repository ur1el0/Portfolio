import github from '../../assets/hero/github.png'
import linkedin from '../../assets/hero/linkedin.png'
import email from '../../assets/hero/mail.png'

export const HeroSection = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-extrabold">Hi, I'm Roosc Zaño</h1>
            <p className="description text-lg text-gray-600 dark:text-gray-400 mt-2">
                an aspiring full-stack web & mobile developer
            </p>
            <h3 className="location text-sm text-gray-500 dark:text-gray-400 mt-2">Philippines</h3>

            <div className="socials flex items-center gap-3 mt-4 flex-wrap">
                <img src={github} alt="GitHub Icon" className="w-5 h-5" />
                <a href="https://github.com/ur1el0" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                    github.com/ur1el0
                </a>
                <img src={linkedin} alt="LinkedIn Icon" className="w-5 h-5" />
                <a href="https://www.linkedin.com/in/roosc-za%C3%B1o-08568a357/?skipRedirect=true" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                    linkedin.com/in/roosc-zaño
                </a>
                <img src={email} alt="Email Icon" className="w-5 h-5" />
                <a href="mailto:zanoroosc@gmail.com" className="text-blue-500 hover:underline">
                    zanoroosc@gmail.com
                </a>
            </div>
        </section>
    )
}