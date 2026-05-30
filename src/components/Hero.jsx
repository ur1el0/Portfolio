// import profile from '../assets/profile.png'
import github from '../assets/hero/github.png'
import linkedin from '../assets/hero/linkedin.png'
import email from '../assets/hero/email.png'

export const Hero = () => {
    return (
        <section className="hero">
            {/* <img src={profile} alt="profile" className="profile" /> */}
                <h1><strong>Hi, I'm Roosc Zaño</strong></h1>
                <p className="description">
                    an aspiring full-stack web & mobile developer
                </p>
                <h3 className="location">Philippines</h3>

                <div className="socials">
                    <img src={github} alt="GitHub Icon" />
                    <a href="https://github.com/ur1el0" target="_blank">
                        github.com/ur1el0
                    </a>
                    <img src={linkedin} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/roosc-za%C3%B1o-08568a357/?skipRedirect=true" target="_blank">
                        linkedin.com/in/roosc-zaño
                    </a>
                    <img src={email} alt="Email Icon" />
                    <a href="mailto:zanoroosc@gmail.com">
                        zanoroosc@gmail.com
                    </a>
                </div>
        </section>
    )
}

