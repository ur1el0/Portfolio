import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export const ParticipationPreviewModal = ({
    open,
    onClose,
    title,
    source,
    previewType
}) => {
    return (
        <Transition show={open} as="div" className="relative z-50">
            <Dialog onClose={onClose} className="relative z-50">

                <TransitionChild
                    as="div"
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
                        aria-hidden="true"
                    />
                </TransitionChild>

                <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6">

                    <TransitionChild
                        as={DialogPanel}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 translate-y-4 scale-95"
                        enterTo="opacity-100 translate-y-0 scale-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100 translate-y-0 scale-100"
                        leaveTo="opacity-0 translate-y-4 scale-95"
                        className="
                            flex flex-col
                            w-full
                            max-w-5xl
                            max-h-[90vh]
                            overflow-hidden
                            rounded-3xl
                            border border-[var(--border)]
                            bg-[var(--card)]
                            text-[var(--text)]
                            shadow-2xl
                        "
                    >
                     
                        <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] px-5 py-4 sm:px-6">
                            <div>
                                <DialogTitle className="text-xl font-semibold">
                                    {title}
                                </DialogTitle>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="
                                    inline-flex
                                    h-10 w-10
                                    items-center justify-center
                                    rounded-full
                                    border border-[var(--border)]
                                    bg-[var(--bg)]
                                    text-[var(--text)]
                                    transition-colors
                                    hover:bg-[var(--card)]
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-[var(--accent)]
                                "
                                aria-label="Close preview"
                            >
                                <XMarkIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-auto bg-slate-100 p-4 sm:p-6">
                            {previewType === 'image' ? (
                                <img
                                    src={source}
                                    alt={title}
                                    className="
                                        mx-auto
                                        max-h-[72vh]
                                        w-full
                                        rounded-2xl
                                        border border-[var(--border)]
                                        object-contain
                                        bg-white
                                        shadow-lg
                                    "
                                />
                            ) : (
                                <iframe
                                    src={source}
                                    title={title}
                                    className="
                                        h-[72vh]
                                        w-full
                                        rounded-2xl
                                        border border-[var(--border)]
                                        bg-white
                                        shadow-lg
                                    "
                                />
                            )}
                        </div>
                    </TransitionChild>

                </div>
            </Dialog>
        </Transition>
    )
}

export default ParticipationPreviewModal