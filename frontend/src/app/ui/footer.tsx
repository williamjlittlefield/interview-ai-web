import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <Image
                    src="/mic-logo.png"
                    width={100}
                    height={100}
                    className="hidden md:block"
                    alt="A small microphone logo!"
                />
                <p>© 2024 airecruit.<br />All rights reserved.</p>
            </aside>
            <nav>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Features</a>
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover">Pricing</a>
            </nav>
            {/* <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav> */}
        </footer>
    );
}
