const Footer = () => {
    return (
        <footer className={"w-screen bg-violet-300 py-4 text-black"}>
            <div className={"container mx-auto flex-flex-col items-center justify-between gap-4 px-4 md:flex-row"}>
                <p className={"text-center text-sm md:text-left"}>
                    &copy; Nova 2024. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
