
import CertificateCard from '../components/ui/CertificateCard'
import courseraFrontend from '../assets/certifications/Coursera-frontenddev-cert.pdf'
import courseraMern from '../assets/certifications/Coursera-mern-cert.pdf'
import javaCert1 from '../assets/certifications/java1-cert.pdf'
import javaCert2 from '../assets/certifications/Java-cert-2.pdf'
import courseraCybersec from '../assets/certifications/Coursera-cybersec-cert.pdf'
import courseraJavaOOP from '../assets/certifications/Coursera-javaoop-cert.pdf'
import courseraOS from '../assets/certifications/Coursera-os-cert.pdf'
import courseraPostgres from '../assets/certifications/Coursera-postgres-cert.pdf'
import webDevCert from '../assets/certifications/WebDevelopment-cert-.pdf'
import courseraFlutterDart from '../assets/certifications/Coursera-flutter&dart-cert.pdf'

export const CertificationSection = () => 
{
    const certificates = [
        { title: 'Basic Web Development', issuer: 'CodeChum', date: '2025', fileHref: webDevCert },
        { title: 'Java Programming I', issuer: 'CodeChum', date: '2025', fileHref: javaCert1 },
        { title: 'Java Programming II', issuer: 'CodeChum', date: '2025', fileHref: javaCert2 },
        { title: 'Introduction to Front-End Development', issuer: 'Coursera (Meta)', date: '2025', fileHref: courseraFrontend },
        { title: 'Backend Development and API Creation', issuer: 'Coursera (Packt)', date: '2025', fileHref: courseraMern },
        { title: 'Foundations of Cybersecurity', issuer: 'Coursera (Google)', date: '2025', fileHref: courseraCybersec },
        { title: 'Introduction to Object-Oriented Programming with Java', issuer: 'Coursera (LearnQuest)', date: '2025', fileHref: courseraJavaOOP },
        { title: 'Operating System Virtualization ', issuer: 'Coursera (Illinois Institute of Technology)', date: '2025', fileHref: courseraOS },
        { title: 'Database Design and Basic SQL in PostgreSQL', issuer: 'Coursera (University of Michigan)', date: '2025', fileHref: courseraPostgres },
        { title: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps', issuer: 'Coursera (Coursera)', date: '2025', fileHref: courseraFlutterDart },
    ]

    return (
        <section className="py-16 px-4 max-w-6xl mx-auto border-t border-[var(--border)] text-center" id="certifications">
            <div className="space-y-6">
                <div>
                    <p className="text-lg font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
                        Certifications
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">
                        Some of the certificates and courses I've completed
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map(cert => (
                        <CertificateCard
                            key={cert.title}
                            title={cert.title}
                            issuer={cert.issuer}
                            date={cert.date}
                            fileHref={cert.fileHref}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
