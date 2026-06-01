
import { useState } from 'react'

import hackercupAttachment from '../assets/participation/hackercup.pdf'
import inventiImage from '../assets/participation/inventi.jpg'
import ParticipationPreviewModal from '../components/ui/ParticipationPreviewModal'

export const ParticipationSection = () => 
{
    const [preview, setPreview] = useState(null)

    const closePreview = () => setPreview(null)

    return (
        <section id="participation" className="p-16 bg-[var(--bg)] text-[var(--text)] border-t border-[var(--border)] text-center">
            <div className="container">
                <div className="space-y-10">
                    <div>
                        <p className="text-lg font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
                            Participations/Achievements
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-[var(--text)] ">
                            Hackathons, Competitions, and Other Notable Participations
                        </h3>
                    </div>
                </div>      

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <button
                        type="button"
                        onClick={() => setPreview({
                            title: 'Participant - DLSU Hackercup (2025)',
                            source: hackercupAttachment,
                            previewType: 'pdf',
                        })}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-left shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
                        aria-label="Open DLSU Hackercup attachment"
                    >
                        <h4 className="text-xl font-semibold text-[var(--text)]">
                            Participant - DLSU Hackercup (2025)
                        </h4>
                        <p className="mt-2 text-[var(--muted)]">
                            Team Leader for a project focused on SDG 11 (Sustainable Cities and Communities). We developed a mobile application for safety walking routes targeting walking commuters.
                        </p>
                        <span className="mt-4 inline-flex text-sm font-semibold text-[var(--accent)]">
                            View Attachment
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setPreview({
                            title: 'Participant - Inventi Hackathon Challenge (2025)',
                            source: inventiImage,
                            previewType: 'image',
                        })}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-left shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
                        aria-label="Open Inventi Hackathon Challenge image"
                    >
                        <h4 className="text-xl font-semibold text-[var(--text)]">
                            Participant - Inventi Hackathon Challenge (2025)
                        </h4>
                        <p className="mt-2 text-[var(--muted)]">
                            Team Participant for an ai-powered village management system project.
                        </p>
                        <span className="mt-4 inline-flex text-sm font-semibold text-[var(--accent)]">
                            View Attachment
                        </span>
                    </button>
                </div>
            </div>

            <ParticipationPreviewModal
                open={Boolean(preview)}
                onClose={closePreview}
                title={preview?.title ?? ''}
                source={preview?.source ?? ''}
                previewType={preview?.previewType ?? 'image'}
            />
        </section>

    )
}
