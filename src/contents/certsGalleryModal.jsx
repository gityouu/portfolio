import 'react';
import { useEffect, useState} from 'react';
import { useImageProtection } from "../utils/security.js";

function CertsGalleryModal() {
    useImageProtection();
    const [selectedCert, setSelectedCert] = useState(null);

    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [selectedCert]);

    const closeModal = (e) => {
        e.preventDefault();
        const modal = document.getElementById('certs-gallery-modal');
        if (modal) {
            modal.style.opacity = '0';
            modal.style.pointerEvents = 'none';
            document.body.style.overflow = '';
        }
    };

    const handleZoomToggle = (cert) => {
        setSelectedCert(cert);
    };

    const certificates = [
        {
            src: '/assets/foundations-of-project-management.jpg',
            alt: 'Google Project Management Professional',
            title: 'Google Project Management Professional',
            subtitle: 'Strategic Planning & Execution'
        },
        {
            src: '/assets/project-initiation-starting-a-successful-project.jpg',
            alt: 'Information Technology Degree',
            title: 'Graduate in Information Technology',
            subtitle: 'Full Stack Developer'
        },
    ];

    return (
        <>
            <div className={"fixed inset-0 z-100 flex items-center justify-center p-edge-margin transition-opacity " +
                "duration-300 opacity-0 pointer-events-none"} id="certs-gallery-modal">

                <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={closeModal}></div>

                <div className={"relative w-full max-w-4xl bg-surface-container-lowest border border-white/20 " +
                    "rounded-xl p-4 md:p-6 shadow-2xl flex flex-col max-h-[85vh]"}>

                    <div className="flex justify-between items-center mb-4 shrink-0">

                        <h2 className="font-display text-headline-md text-primary uppercase tracking-tighter">

                            Certificates Archive Gallery
                        </h2>

                        <button className={"material-symbols-outlined text-on-surface-variant hover:text-primary " +
                            "transition-colors"} title="close" onClick={closeModal}>

                            close
                        </button>
                    </div>

                    <div className="overflow-y-auto pr-2 text-on-surface-variant grow">

                        <div className="flex flex-wrap justify-center gap-4">

                            {certificates.map((cert, index) => (

                                <div key={index} className={"relative rounded-xl overflow-hidden border " +
                                    "border-white/20 bg-white/5 w-full md:w-[calc(50%-0.5rem)] h-64 group " +
                                    "cursor-pointer"}
                                     onContextMenu={(e) => e.preventDefault()}
                                     onDragStart={(e) => e.preventDefault()}
                                     onClick={() => handleZoomToggle(cert)}
                                >

                                    <img src={cert.src} alt={cert.alt} className={"w-full h-full object-cover " +
                                        "transition-transform duration-500 group-hover:scale-105 select-none"}
                                         draggable="false"
                                    />

                                    <div className={"absolute inset-0 bg-background/80 backdrop-blur-md opacity-0 " +
                                        "group-hover:opacity-100 transition-opacity duration-300 flex flex-col " +
                                        "justify-end p-6"}>

                                        <h3 className="font-headline-md text-headline-md text-primary leading-tight mb-2">

                                            {cert.title}
                                        </h3>

                                        <p className="font-body-sm text-body-sm text-on-surface-variant">

                                            {cert.subtitle}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-end shrink-0">

                        <button className={"px-6 py-2 bg-white/10 hover:bg-white/20 text-primary font-label-caps " +
                            "text-label-caps rounded-full transition-all uppercase tracking-widest"} onClick={closeModal}>

                            Close
                        </button>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal for Zoomed Image - Dynamic Natural Sizing */}
            {selectedCert && (
                <div className={'fixed inset-0 z-200 flex items-center justify-center bg-background/90 backdrop-blur-sm ' +
                    'p-4 transition-opacity duration-300'} onClick={() => handleZoomToggle(null)}>

                    <div className={'relative max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden border ' +
                        'border-white/20 shadow-2xl flex bg-surface-container-lowest'}
                         onContextMenu={(e) => e.preventDefault()}
                         onDragStart={(e) => e.preventDefault()}
                         onClick={(e) => e.stopPropagation()}>

                        <img src={selectedCert.src} alt={selectedCert.alt}
                             className={'w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain select-none'}
                             draggable="false"
                        />

                        <button
                            className={'absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 border ' +
                                'border-white/20 flex items-center justify-center text-primary transition-colors ' +
                                 'shadow-lg'}
                            onClick={() => handleZoomToggle(null)}
                            title="close"
                        >

                            <span className="material-symbols-outlined text-xl">close</span>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default CertsGalleryModal;