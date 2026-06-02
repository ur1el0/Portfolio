import ActionButton from './ActionButton'

export const CertificateCard = ({ title, issuer, date, imageSrc, fileHref, onView }) => {
    return (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-left shadow-lg">
            {imageSrc && (
                <img src={imageSrc} alt={title} className="w-full h-44 rounded-md object-cover border border-[var(--border)] mb-4" />
            )}

            <h4 className="text-lg font-semibold text-[var(--text)]">{title}</h4>
            {issuer || date ? (
                <p className="mt-1 text-sm text-[var(--muted)]">{issuer}{issuer && date ? ' · ' : ''}{date}</p>
            ) : null}

            <div className="mt-4 flex items-center gap-3">
                {onView ? (
                    <ActionButton onClick={onView}>View</ActionButton>
                ) : null}

                {fileHref ? (
                    <a
                        href={fileHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[var(--card)]"
                    >
                        View File
                    </a>
                ) : null}
            </div>
        </div>
    )
}

export default CertificateCard
