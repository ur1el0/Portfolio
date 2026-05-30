import { EnvelopeIcon, ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import hero from '../assets/hero/hero.png'
import SocialButton from '../components/ui/SocialButton'
import ActionButton from '../components/ui/ActionButton'

export const HeroSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 pt-16 pb-8 min-h-[72vh] flex flex-col justify-center">
            <div className="flex items-center justify-center gap-8 flex-wrap mb-6">

                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl sm:text-4xl font-semibold sm:text-left dark:text-white-500 ">
                        Hi there! 
                    </h1>
                        
                    <h2 className="text-6xl sm:text-7xl font-semibold dark:text-white-500 leading-tight">
                        I'm Roosc Zaño
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-500">
                        a full-stack web & mobile developer
                    </p>

                    <h3 className="text-base text-gray-600 dark:text-gray-400 mt-1">
                        <FaMapMarkerAlt className="w-5 h-5 inline-block mr-1 mb-1" />
                        Lucena, Philippines
                    </h3>
                </div>
                <img src={hero} alt="Hero Image" className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-gray-200 dark:border-gray-700 no-flip shrink-0 shadow-2xl ml-15" />
            </div>

            <div className="flex items-center justify-center gap-5 mt-6 flex-wrap">
                <SocialButton href="https://github.com/ur1el0" label="GitHub">
                    <FaGithub className="w-6 h-6" aria-hidden="true" />
                </SocialButton>

                <SocialButton href="https://www.linkedin.com/in/roosc-za%C3%B1o-08568a357/?skipRedirect=true" label="LinkedIn">
                    <FaLinkedin className="w-6 h-6" aria-hidden="true" />
                </SocialButton>

                <SocialButton href="mailto:zanoroosc@gmail.com" label="Email">
                    <EnvelopeIcon className="w-6 h-6" aria-hidden="true" />
                </SocialButton>

                <SocialButton href="https://www.instagram.com/fuschiapenk/" label="Instagram">
                    <FaInstagram className="w-6 h-6" aria-hidden="true" />
                </SocialButton>

            </div>

            <div className="flex items-center justify-center mt-8 flex-row flex-center">
                <ActionButton onClick={() => window.open('/Roosc_Zaño_CV.pdf', '_blank')} >
                    <ArrowDownTrayIcon className="w-6 h-6" />
                    Download CV
                </ActionButton>

                <ActionButton onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}>
                    View Projects
                </ActionButton>
            </div>
        </section>
    )
}