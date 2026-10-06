export default function Footer() {
    return (
        <footer className="flex items-center justify-between bg-teak text-cream px-10 py-4">
            <p>&copy; {new Date().getFullYear()} Walawwa Hotel & Dining. All rights reserved.</p>
            <nav>
                {/* <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link> */}
            </nav>
        </footer>
    );
}