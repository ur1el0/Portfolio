import { EnvelopeIcon, ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import hero from '../assets/hero/hero.png'
import SocialButton from '../components/ui/SocialButton'
import ActionButton from '../components/ui/ActionButton'

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
                        a full-stack web & mobile developer
                    </p>

                    <h3 className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Philippines
                    </h3>
                </div>
                <img src={hero} alt="Hero Image" className="w-40 h-40 rounded-full border-2 border-gray-200 dark:border-gray-700 no-flip shrink-0" />
            </div>

            <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
                <SocialButton href="https://github.com/ur1el0" label="GitHub">
                    <FaGithub className="w-5 h-5" aria-hidden="true" />
                    github.com/ur1el0
                </SocialButton>

                <SocialButton href="https://www.linkedin.com/in/roosc-za%C3%B1o-08568a357/?skipRedirect=true" label="LinkedIn">
                    <FaLinkedin className="w-5 h-5" aria-hidden="true" />
                    linkedin.com/in/roosc-zaño
                </SocialButton>

                <SocialButton href="mailto:zanoroosc@gmail.com" label="Email">
                    <EnvelopeIcon className="w-5 h-5" aria-hidden="true" />
                    zanoroosc@gmail.com
                </SocialButton>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                <ActionButton onClick={() => window.open('/Roosc_Zaño_CV.pdf', '_blank')}>
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    Download CV
                </ActionButton>

                <ActionButton onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}>
                    View Projects
                </ActionButton>
            </div>
        </section>
    )
}