export default function Footer() {
    return (
        <footer className="m-4 text-center text-[.6rem] md:m-2 md:text-xs">
            Challenge by{' '}
            <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                rel="noreferrer"
                className="font-bold uppercase text-primary underline transition-all duration-300 hover:text-tertiary"
            >
                Frontend Mentor
            </a>
            . Coded by{' '}
            <a
                href="https://github.com/kens-visuals"
                target="_blank"
                rel="noreferrer"
                className="font-bold uppercase text-primary underline transition-all duration-300 hover:text-tertiary"
            >
                Kens-Visuals
            </a>
        </footer>
    );
}