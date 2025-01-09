import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <section className="w-full bg-gradient-to-b from-[#F8F4E1] to-[#E8E1C4] text-[#3B2C35] border-t border-black">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <Link href="/about/aboutThisPage" className="text-base leading-6 text-black hover:text-gray-900">
                            About this page.
                        </Link>
                    </div>
                </nav>
                <div className="flex justify-center mt-8 space-x-8">
                    <div className="flex items-center space-x-4">
                        <span className="text-base font-medium text-black">Ignacio</span>
                        <Link href="https://www.linkedin.com/in/ignacio-niveyro-011477248/" className="text-black hover:text-black">
                            <span className="sr-only">LinkedIn</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path fillRule="evenodd" d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zM8 19h-3v-10h3v10zM6.5 7.75c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zM20 19h-3v-5.5c0-1.207-.793-1.5-1.5-1.5s-1.5.293-1.5 1.5v5.5h-3v-10h3v1.25c.447-.66 1.186-1.25 2.5-1.25 1.93 0 3.5 1.57 3.5 3.5v6.5z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                        <Link href="https://github.com/IgnacioNiveyro" className="text-black hover:text-black">
                            <span className="sr-only">GitHub</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-base font-medium text-black">Gonzalo</span>
                        <Link href="https://www.linkedin.com/in/gonzalo-razuc/" className="text-black hover:text-black">
                            <span className="sr-only">LinkedIn</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path fillRule="evenodd" d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zM8 19h-3v-10h3v10zM6.5 7.75c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zM20 19h-3v-5.5c0-1.207-.793-1.5-1.5-1.5s-1.5.293-1.5 1.5v5.5h-3v-10h3v1.25c.447-.66 1.186-1.25 2.5-1.25 1.93 0 3.5 1.57 3.5 3.5v6.5z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                        <Link href="https://github.com/grazuc" className="text-black hover:text-black">
                            <span className="sr-only">GitHub</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-black">
                    © 2024 Bookit, Inc. All rights reserved.
                </p>
            </div>
        </section>
    );
}
