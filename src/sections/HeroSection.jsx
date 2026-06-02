import { EnvelopeIcon, ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaRegEye } from 'react-icons/fa'
import hero from '../assets/hero/hero.png'
import SocialButton from '../components/ui/SocialButton'
import ActionButton from '../components/ui/ActionButton'

export const HeroSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 pt-26 pb-8 min-h-[72vh] flex flex-col justify-center">
            <div className="flex items-center justify-center gap-50 flex-wrap mb-4">

                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl sm:text-5xl font-bold sm:text-left text-[var(--text)]" style={{ fontFamily: '"Noto Sans Phags Pa", sans-serif' }}>
                        <span className="underline decoration-[var(--muted)] decoration-1.5 underline-offset-8 mb-2 inline-block">
                            Hi there!
                        </span>
                    </h1>
                        
                    <h2 className="text-6xl sm:text-7xl font-semibold leading-tight text-[var(--text)]" style={{ fontFamily: '"Noto Sans Phags Pa", sans-serif' }}>
                        I'm Roosc Zaño
                    </h2>

                    <p className="inline-flex w-fit px-4 py-2 text-xl font-medium shadow-lg border border-[var(--border)] rounded-2xl mb-4" style={{ fontFamily: '"Noto Sans Phags Pa", sans-serif' }}>
                        An aspiring full-stack web & mobile developer
                    </p>    

                    <h3 className="mt-1 text-base text-[var(--muted)]" style={{ fontFamily: '"Noto Sans Phags Pa", sans-serif' }}>
                    <FaMapMarkerAlt className="w-5 h-5 inline-block mr-1 mb-1" />
                        Lucena, Philippines
                    </h3>
                </div>
                <img src={hero} alt="Hero Image" className="w-70 h-70 sm:w-64 sm:h-64 rounded-xl border-4 border-[var(--border)] no-flip shrink-0 shadow-2xl ml-15" />
            </div>

            <div className="flex items-center justify-center gap-5 mt-6 flex-wrap">
                <SocialButton href="https://github.com/ur1el0" label="GitHub">
                    <FaGithub className="w-6 h-6" aria-hidden="true" />
                </SocialButton>

                <SocialButton href="https://www.linkedin.com/in/roosc-za%C3%B1o-08568a357/?skipRedirect=true" label="LinkedIn">
                    <FaLinkedin className="w-6 h-6" aria-hidden="true" />
                </SocialButton>

                <SocialButton href="https://www.instagram.com/fuschiapenk/" label="Instagram">
                    <FaInstagram className="w-6 h-6" aria-hidden="true" />
                </SocialButton>
                
                <SocialButton href="mailto:zanoroosc@gmail.com" label="Email">
                    <EnvelopeIcon className="w-6 h-6" aria-hidden="true" />
                </SocialButton>
            </div>

            <div className="flex items-center justify-center mt-8 flex-row flex-center">
                <ActionButton onClick={() => window.open('/Roosc_Zaño_CV.pdf', '_blank')} >
                    <ArrowDownTrayIcon className="w-6 h-6" />
                    Download CV
                </ActionButton>

                <ActionButton onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}>
                    <FaRegEye className="w-6 h-6" />
                    View Projects
                </ActionButton>
            </div>
        </section>
    )
}