import 'react';
import { getCurrentYear } from '../utils/date';
import PrivacyModal from './privacyModal';

function Footer(){
    const openPrivacyModal = (e) => {
        e.preventDefault();
        const modal = document.getElementById('privacy-modal');
        if (modal) {
            modal.style.opacity = '1';
            modal.style.pointerEvents = 'auto';
            document.body.style.overflow = 'hidden';
        }
    };

    return (
        <>
            <footer className="w-full py-section-gap mt-14 flex flex-col items-center gap-4 text-center">

                <p className="font-body-sm text-body-sm text-on-surface-variant">© {getCurrentYear()} Portfolio</p>

                <div className="flex gap-6">

                    <a className={"font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline " +
                        "cursor-pointer"} onClick={openPrivacyModal} href="#privacy">

                        Privacy &amp; Terms
                    </a>
                </div>
            </footer>

            <PrivacyModal />
        </>
    );
}

export default Footer;