import 'react';
import { useState } from 'react';
import CertsGalleryModal from "./certsGalleryModal.jsx";
import { useImageProtection } from "../utils/security.js";

function Header() {
    useImageProtection();
    const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);

    const openCertsGalleryModal = (e) => {
        e.preventDefault();
        const modal = document.getElementById('certs-gallery-modal');
        if (modal) {
            modal.style.opacity = '1';
            modal.style.pointerEvents = 'auto';
            document.body.style.overflow = 'hidden';
        }
    };

    const toggleZoom = () => {
        setIsPhotoZoomed(!isPhotoZoomed);
        document.body.style.overflow = !isPhotoZoomed ? 'hidden' : '';
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <div className={"pointer-events-auto bg-background/90 backdrop-blur-xl border border-white/20 " +
                    "rounded-b-2xl px-8 py-3 shadow-2xl flex items-center gap-8 w-[90%] max-w-xl mx-auto justify-between"}>

                    {/* Profile Photo with Click Trigger */}
                    <div className={'w-22 h-22 rounded-full overflow-hidden border border-white/20 shrink-0'}>
                        <img
                            alt={'profile photo'}
                            className={'w-full h-full object-cover cursor-pointer'}
                            src={'/assets/pp.jpg'}
                            onClick={toggleZoom} draggable={false} onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>

                    <div className="flex gap-4">
                        <button className={"material-symbols-outlined text-primary hover:opacity-70 transition-opacity " +
                            "text-[24px]"} onClick={openCertsGalleryModal} data-icon="photo" title={'Certs Gallery'}>
                            photo
                        </button>
                    </div>

                </div>
            </header>

            {/* Full-Screen Profile Photo Lightbox Modal */}
            {isPhotoZoomed && (
                <div
                    className={'fixed inset-0 z-200 flex items-center justify-center bg-background/90 backdrop-blur-sm ' +
                    'p-4 transition-opacity duration-300'}
                    onClick={toggleZoom}
                >
                    <div className={'relative max-w-md w-full aspect-square rounded-2xl overflow-hidden border ' +
                        'border-white/20 shadow-2xl'} onClick={(e) => e.stopPropagation()}>
                        <img
                            alt={'zoomed profile photo'}
                            className={'w-full h-full object-cover'}
                            src={'/assets/pp.jpg'}
                            onContextMenu={(e) => e.preventDefault()} draggable={false}
                        />
                        <button
                            className={'absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 border ' +
                                'border-white/20 flex items-center justify-center text-primary transition-colors'}
                            onClick={toggleZoom}
                        >
                            <span className="material-symbols-outlined text-xl">close</span>
                        </button>
                    </div>
                </div>
            )}

            <CertsGalleryModal />
        </>
    )
}

export default Header;