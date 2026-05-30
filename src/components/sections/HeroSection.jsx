import { EnvelopeIcon, ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import hero from '../../assets/hero/hero.png'

export const HeroSection = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex items-center justify-center gap-6 flex-wrap mb-4">

                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold sm:text-left dark:text-white-500 ">
                        Hi there! 
                    </h1>
                        
                    <h2 className="text-5xl font-semibold dark:text-white-500 leading-tight">
                        I'm Roosc Zaño
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-500">
                        an aspiring full-stack web & mobile developer
                    </p>

                    <h3 className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Philippines
                    </h3>
                </div>
                <img src={hero} alt="Hero Image" className="w-40 h-40 rounded-full border-2 border-gray-200 dark:border-gray-700 no-flip shrink-0" />
            </div>

            <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
                <a href="https://github.com/ur1el0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:underline">
                    <FaGithub className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">GitHub</span>
                    github.com/ur1el0
                </a>

                <a href="https://www.linkedin.com/in/roosc-za%C3%B1o-08568a357/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:underline">
                    <FaLinkedin className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>
                    linkedin.com/in/roosc-zaño
                </a>

                <a href="mailto:zanoroosc@gmail.com" className="flex items-center gap-2 text-blue-500 hover:underline">
                    <EnvelopeIcon className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Email</span>
                    zanoroosc@gmail.com
                </a>
            </div>

            <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 mx-auto w-max flex items-center gap-2 clickable" 
                onClick={() => window.open('/Roosc_Zaño_CV.pdf', '_blank')}>
                <ArrowDownTrayIcon className="w-5 h-5" />
                Download CV
            </button>
            <button className="mt-4 px-3 py-1.5 bg-gray-800 text-white rounded-md hover:bg-gray-700 mx-auto w-max flex items-center gap-2"
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}>
                View Projects
            </button>
        </section>
    )
}