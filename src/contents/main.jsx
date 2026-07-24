import 'react';

function Main(){
    return (
        <main className="max-w-container-max mx-auto px-edge-margin pt-20 pb-10 flex flex-col items-center">
            {/*<!-- Profile Header Section */}
            <section className="text-center mb-section-gap w-full">

                <h1 className="font-display text-display uppercase tracking-tighter text-primary mb-1">

                    RANSFORD FRIMPONG
                </h1>

                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">

                    Junior Software Developer &amp; Project Manager
                </p>
            </section>

            {/*<!-- Social Links Section */}
            <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-section-gap">

                <a className={'flex items-center justify-center py-5 px-glass-padding rounded-xl w-full group border ' +
                    'border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 transition-all'}
                   href="https://github.com/gityouu" target={'_blank'} rel="noopener noreferrer">

                    <span className={"font-label-caps text-label-caps uppercase tracking-widest flex items-center " +
                        "gap-3 text-primary"}>

                        <span className="material-symbols-outlined text-[18px]">code</span>

                        GitHub
                    </span>
                </a>

                <a className={"flex items-center justify-center py-5 px-glass-padding rounded-xl w-full group border " +
                    "border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 transition-all"}
                   href="#">

                    <span className={"font-label-caps text-label-caps uppercase tracking-widest flex items-center " +
                        "gap-3 text-primary"}>

                        <span className="material-symbols-outlined text-[18px]">work</span>

                        LinkedIn
                    </span>
                </a>

                <a className={"flex items-center justify-center py-5 px-glass-padding rounded-xl w-full group border " +
                    "border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 transition-all"}
                   href="#">

                    <span className={"font-label-caps text-label-caps uppercase tracking-widest flex items-center " +
                        "gap-3 text-primary"}>

                        <span className="material-symbols-outlined text-[18px]">terminal</span>

                        X / Twitter
                    </span>
                </a>

                <a className={"flex items-center justify-center py-5 px-glass-padding rounded-xl w-full group border " +
                    "border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 transition-all " +
                    "md:col-span-3"} href="#">

                    <span className={"font-label-caps text-label-caps uppercase tracking-widest flex items-center " +
                        "gap-3 text-primary"}>

                        <span className="material-symbols-outlined text-[18px]">language</span>

                        Full Portfolio
                    </span>
                </a>
            </section>

            {/*<!-- Credentials Archive Section */}
            <section className="w-full">

                <div className="flex items-center gap-4 mb-8">

                    <div className="h-px grow bg-white/30"></div>

                    <h2 className={"font-label-caps text-label-caps text-on-surface-variant uppercase " +
                        "tracking-[0.2em] whitespace-nowrap"}>

                        Credentials
                    </h2>

                    <div className="h-px grow bg-white/30"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className={"p-3 rounded-xl border border-white/20 bg-white/3 hover:bg-white/6 " +
                        "transition-colors flex flex-col h-full justify-between"}>

                        <div className="flex flex-col gap-3">

                                <span className="font-headline-md text-headline-md text-primary leading-tight">

                                    Google Project Management Professional
                                </span>

                            <span className="font-body-sm text-body-sm text-on-surface-variant">

                                Strategic Planning &amp; Execution
                            </span>
                        </div>
                    </div>

                    <div className={"p-3 rounded-xl border border-white/20 bg-white/3 hover:bg-white/6 " +
                        "transition-colors flex flex-col h-full justify-between"}>

                        <div className="flex flex-col gap-3">

                                <span className="font-headline-md text-headline-md text-primary leading-tight">

                                    Graduate in Information Technology
                                </span>

                            <span className="font-body-sm text-body-sm text-on-surface-variant">

                                    Full Stack Developer
                                </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;