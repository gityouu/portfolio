import 'react';

function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-xl border-b border-white/20">

            <div className="flex justify-between items-center px-edge-margin py-2 max-w-container-max mx-auto">

                <span className="font-display text-display tracking-tighter text-primary">

                    RF
                </span>

                <div className="flex gap-4">

                    <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity"
                            data-icon="photo">

                        photo
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;