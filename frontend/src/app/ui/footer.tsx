import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-purple-600 to-blue-500 shadow-xl rounded-lg w-full p-10 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <aside className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
                    <Image
                        src="/airecruit.png"
                        width={100}
                        height={100}
                        className="hidden md:block"
                        alt="airecruit!"
                    />
                    <p className="mt-2 text-center md:text-left">© 2024 airecruit.<br />All rights reserved.</p>
                </aside>
                <nav className="flex flex-col md:flex-row gap-4">
                    <a className="link link-hover text-white">About</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Features</a>
                    <a className="link link-hover text-white">FAQ</a>
                    <a className="link link-hover text-white">Pricing</a>
                </nav>
            </div>
        </footer>
    );
}
