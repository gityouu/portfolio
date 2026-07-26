import 'react';

function PrivacyModal() {
    const closeModal = (e) => {
        e.preventDefault();
        const modal = document.getElementById('privacy-modal');
        if (modal) {
            modal.style.opacity = '0';
            modal.style.pointerEvents = 'none';
            document.body.style.overflow = '';
        }
    };

    return (
        <div className={"fixed inset-0 z-100 flex items-center justify-center p-edge-margin transition-opacity " +
            "duration-300 opacity-0 pointer-events-none"} id="privacy-modal">

            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={closeModal}></div>

            <div className={"relative w-full max-w-container-max bg-surface-container-lowest border " +
                "border-white/20 rounded-xl p-6 md:p-8 shadow-2xl flex flex-col max-h-[80vh]"}>

                <div className="flex justify-between items-center mb-6">

                    <h2 className="font-display text-headline-md text-primary uppercase tracking-tighter">

                        Privacy Policy & Legal Terms
                    </h2>

                    <button className={"material-symbols-outlined text-on-surface-variant hover:text-primary " +
                        "transition-colors"} title={'close'} onClick={closeModal}>

                        close
                    </button>
                </div>

                <div className="overflow-y-auto pr-2 flex flex-col gap-6 text-on-surface-variant">

                    <p className="text-xs text-on-surface-variant/70">

                        Last updated: July 23, 2026
                    </p>

                    <section>
                        <h3 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">

                            1. Information We Collect
                        </h3>

                        <p className="font-body-sm text-body-sm">

                            We respect your privacy and strive to keep data collection to an absolute minimum.
                            Automatically collected data includes standard server logs or hosting provider technical
                            data such as IP address, browser type, operating system, referring URLs, and access
                            timestamps. This portfolio does not utilize invasive tracking cookies or third-party
                            advertising analytics.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">

                            2. How We Use Information
                        </h3>

                        <p className="font-body-sm text-body-sm">

                            Any minimal technical data automatically captured by hosting infrastructure is used strictly
                            for ensuring reliable website performance, security, uptime, and diagnosing technical
                            glitches or malicious traffic patterns.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">

                            3. Third-Party Links
                        </h3>

                        <p className="font-body-sm text-body-sm">

                            The portfolio contains links to external platforms and archives (such as LinkedIn, GitHub,
                            X, and certification credential repositories). Once you click these links and leave this
                            site, you are subject to the respective privacy policies of those external third-party
                            platforms.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">

                            4. Data Security
                        </h3>

                        <p className="font-body-sm text-body-sm">

                            We implement standard industry measures via secure hosting providers (HTTPS/SSL encryption)
                            to protect data integrity during transmission. However, no internet transmission is 100%
                            secure.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">

                            5. Intellectual Property & Prohibited Use
                        </h3>

                        <p className="font-body-sm text-body-sm">

                            All content, design elements, code snippets, text, and certification archives presented on
                            this portfolio are protected by intellectual property laws. No material, text, code, or
                            linked asset from this site may be scraped, reproduced, reverse-engineered, or
                            misappropriated for personal financial gain, commercial exploitation, or unauthorized
                            representation.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">

                            6. Legal Action
                        </h3>

                        <p className="font-body-sm text-body-sm">

                            Any unauthorized theft, scraping, replication, or misuse of the information, assets, or code
                            provided on this site for personal gain or fraudulent representation will result in
                            immediate legal action. We reserve the right to pursue all available civil and criminal
                            remedies under applicable laws for copyright infringement, breach of terms, and unauthorized
                            data extraction.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">

                            7. Policy Updates
                        </h3>

                        <p className="font-body-sm text-body-sm">

                            This Privacy Statement and Legal Terms may be updated periodically to reflect technical or
                            legal changes. The "Last updated" date indicates when modifications take effect.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">

                            8. Contact
                        </h3>

                        <p className="font-body-sm text-body-sm">

                            If you have any questions regarding this policy or require authorization for legitimate use,
                            you can reach out via the professional links provided on the main page.
                        </p>
                    </section>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">

                    <button className={"px-6 py-2 bg-white/10 hover:bg-white/20 text-primary font-label-caps " +
                        "text-label-caps rounded-full transition-all uppercase tracking-widest"} onClick={closeModal}>

                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PrivacyModal;