// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: 'Cooper Proctor',
  description: 'Personal website of Cooper Proctor',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <nav className="nav-top">
                    <ul className="nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </nav>

                <header className="header">
                    <div className="container">
                        <Image
                            src="/Cooper_picture.jpeg"
                            alt="Picture of Cooper Proctor"
                            className="profile-pic"
                        />
                        <h1 className="title">Cooper Proctor</h1>
                        <nav className="nav">
                            <ul className="nav-list">
                                <a href="mailto:cooperproctor23@gmail.com">Email</a>
                                <a href="https://github.com/chp36" target="_blank">GitHub</a>
                                <a href="https://www.linkedin.com/in/cooper-proctor/" target="_blank">LinkedIn</a>
                                <a
                                    href="/Cooper_Proctor_Resume.pdf"
                                    target="_blank"
                                    className="button"
                                >
                                    Resume
                                </a>
                            </ul>
                        </nav>
                    </div>
                </header>

                <main className="main">{children}</main>

                <footer className="footer">
                    <div className="container">
                        <p>&copy; 2025 Cooper Proctor. All rights reserved.</p>
                        <p>Website design inspired by <a href="https://www.shihaocao.com/" target="_blank">Shihao Cao</a>.</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
