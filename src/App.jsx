import 'react';
import Header from "./contents/header.jsx";
import Main from "./contents/main.jsx";
import Footer from "./contents/footer.jsx";

function App() {
    return (
        <div className={"font-body-lg text-body-lg min-h-screen flex flex-col overflow-x-hidden bg-background " +
            "text-on-background"}>
            {/*<!-- Top Navigation Bar */}
            <Header />

            {/*Main Contents*/}
            <Main />

            {/*<!-- Footer */}
            <Footer />

            {/*<!-- Background Ambient Effects - Kept subtle but visible against pure black */}
            <div className={"fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px] " +
                "pointer-events-none -z-10"}></div>

            <div className={"fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px] " +
                "pointer-events-none -z-10"}></div>
        </div>
    )
}

export default App;