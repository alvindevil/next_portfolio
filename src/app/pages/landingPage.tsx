// landingpage.tsx

import React from 'react';
// In a real Next.js project, you would import global CSS and ensure tailwind.config.js is set up.

// --- Helper Components for Icons and Reusability ---

const PantomathIcon: React.FC = () => (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
        <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
    </svg>
);

const SocialIcon: React.FC<{ d: string }> = ({ d }) => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d={d}></path>
    </svg>
);

const MaterialIcon: React.FC<{ icon: string }> = ({ icon }) => (
    <span className="material-symbols-outlined text-primary text-3xl">
        {icon}
    </span>
);

// --- Main Component ---

const LandingPage: React.FC = () => {
    // The original HTML had the body and min-h-screen structure. 
    // In Next.js, this should technically be in layout.tsx, but is included here for a single-file solution.

    return (
        <div className="flex flex-col min-h-screen">
            {/* HEADER */}
            <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-white/10 dark:border-white/10">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <PantomathIcon />
                        <h2 className="text-xl font-bold text-white">Pantomath</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        {['Work', 'Experience', 'Achievements', 'Labs', 'Blog', 'Hobbies'].map((item) => (
                            <a key={item} className="text-sm font-medium text-white/80 dark:text-white/70 hover:text-primary transition-colors" href="#">{item}</a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        {/* Alternative for glowing-button: shadow and hover effect */}
                        <button className="z-10 hidden sm:flex items-center justify-center rounded-lg h-10 px-5 bg-primary/20 dark:bg-primary/20 text-white text-sm font-semibold tracking-wide transition-all hover:bg-primary/30">
                            Download Resume
                        </button>
                        <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlZ6NV5TZ9TOpv9IwZGYJuFhj3pDYMZfGF8bJABsoA9fgIlXEsK-I3mKcJobHv1zwlNTN0KyzY1uyEx_B1veQpGcu1CGVCYkbfuJlgNhcs1vuL5Ro8aCDvhP-P2jGbaHR1j8IMjRXxE5bG79iukPTgjvdX8dGm1IbmyhmZHpQHU_1-3vHrhfEKojMfQFS6QoWh_I-fB8yUv0AhAkskJwtOm9wej6WBfrG9bcp_TjOSK7HrRWnLkmEpX4KlcyW7kaV3BTcWx7pAOg")' }}></div>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="py-24 md:py-32">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-6 text-center md:text-left animate-fade-in">
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                                Hi, I’m Pantomath — <br/>
                                <span className="text-primary">Full Stack Developer | Product Designer | Innovator</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 dark:text-white/70 max-w-xl mx-auto md:mx-0">Building meaningful products with code, design, and creativity.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
                                {/* Alternative for glowing-button: shadow and hover effect */}
                                <button className="z-10 flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
                                    See My Work
                                </button>
                                <button className="z-10 flex items-center justify-center rounded-lg h-12 px-6 bg-primary/20 dark:bg-primary/20 text-white text-base font-bold tracking-wide transition-all hover:bg-primary/30">
                                    Download Resume
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-full aspect-square bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFhyTvcaIPBwMT2zFAsyMKuy5AJEuw4Y_lZHasea2CVkDdKEQ93pzcO_uKaBXrDZjtcQMIM8tXPSqI7NuH3yawTVe8WCDZKV7O_swKpwGQROsbyt7pZ0GkSN6kpf-qCyMSQRk2ve2Nb5nfQoAjcBk645NBqk8cRutRnYSsZTLqOFkNiAEzca5jjKNDSakj9tsN5098Xzuu15tpl6XxGCAh7ltJ2rElLZithR0Jcy0mVrZ_excF48XO27_GCndfYWO-UZYLMIrm0A")' }}></div>
                        </div>
                    </div>
                </section>

                {/* WORK SHOWCASE SECTION */}
                <section className="py-16 bg-background-light dark:bg-background-dark/50">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-3xl font-bold text-white">Work Showcase</h2>
                            <a className="flex items-center gap-2 text-primary font-semibold hover:underline" href="#">
                                View All Work <span className="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Alternative for card-glow: hover scale and shadow */}
                            <div className="bg-white/5 dark:bg-white/5 rounded-lg p-6 flex flex-col gap-4 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
                                <div className="w-full aspect-video bg-cover bg-center rounded" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjBov_1FzkK4B3txJeElTG38YsAhvP1-iozTGhktOIEXe8b7v0cUUOHfOtrF6h6XufNIruWucj8_nj3MYYpaghIrdC1HYV1j8vybXOw8zSy7wgZa580brqr05F5TS6g_esBnvp79nfuHNA-7e4YHGxKX6VUwQGzJvG56965fmeUPIo4LhDLtpuZ6sSJ1T-A13JkPDaYJqwLkucrodPgRhDIhownYJ6t3ClxWV5O2OVmjRqrobkt2kC7FrS-gdV1gUXuvzQCrs_8w")' }}></div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Project A</h3>
                                    <p className="text-sm text-primary">Full Stack Development</p>
                                </div>
                            </div>
                            <div className="bg-white/5 dark:bg-white/5 rounded-lg p-6 flex flex-col gap-4 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
                                <div className="w-full aspect-video bg-cover bg-center rounded" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0F-4BfAjWKZo51VTP4hUL-6uoPNEuZvfmzSqmv7Xi6eL129Y-UyPchekoZA74kczDkyghRSFu9eWEWjm4IyA1DgNU_eG4NvXfUROoudeKAi862cHNAcx2kqA7djahhh2h5QWCxUvENxElDdK9KMABNpO8rCiq6pDrK7b9dQ0efZ259juVVN5z4YHPyq9OZ3sS8iWjnMSrVDirRP4HpNW-0T9hwXwTRCaKDo1hK2s40yxNrAEjgo-gf4jbk4Hj2WKuC9sOExxyGA")' }}></div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Project B</h3>
                                    <p className="text-sm text-primary">Product Design</p>
                                </div>
                            </div>
                            <div className="bg-white/5 dark:bg-white/5 rounded-lg p-6 flex flex-col gap-4 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
                                <div className="w-full aspect-video bg-cover bg-center rounded" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxSVOGaSRIafcEoGN3NtSKEB9v_FRIJJYNP2XrWb7e7mcek_CalQMl5MjySCcYI0BaXyHyyuD6WAbVqay_C7Amur03LdGAWNtYdAr4i60KXTQez9qEY87mk0-pR7THHOtMGEemP1BDirqxtz-SpTofNEHurg6aiHKA_be3sbwTAcLBTaQGCYFQi4yhzxfiv3CeC378XFl9E_Qs4ZquwAtQj0l1S79_WfjN1njJcOQd6WSzuCqFpe0A1sJBgOlcy8QTetOVTop4hQ")' }}></div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Project C</h3>
                                    <p className="text-sm text-primary">Innovation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERIENCE OVERVIEW SECTION (Timeline) */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience Overview</h2>
                        <div className="relative max-w-2xl mx-auto">
                            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
                            <div className="space-y-16">
                                {/* Timeline Item 1 */}
                                <div className="relative flex items-center justify-between">
                                    <div className="w-5/12">
                                        <div className="bg-white/5 dark:bg-white/5 p-6 rounded-lg text-right">
                                            <h3 className="text-lg font-bold text-white">Full Stack Developer</h3>
                                            <p className="text-sm text-white/80 dark:text-white/70">Tech Innovators Inc.</p>
                                            <p className="text-xs text-primary mt-1">2021 - Present</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background-dark"></div>
                                    <div className="w-5/12"></div>
                                </div>
                                {/* Timeline Item 2 */}
                                <div className="relative flex items-center justify-between">
                                    <div className="w-5/12"></div>
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background-dark"></div>
                                    <div className="w-5/12">
                                        <div className="bg-white/5 dark:bg-white/5 p-6 rounded-lg">
                                            <h3 className="text-lg font-bold text-white">Freelance Product Designer</h3>
                                            <p className="text-sm text-white/80 dark:text-white/70">Remote</p>
                                            <p className="text-xs text-primary mt-1">2019 - 2021</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Timeline Item 3 */}
                                <div className="relative flex items-center justify-between">
                                    <div className="w-5/12">
                                        <div className="bg-white/5 dark:bg-white/5 p-6 rounded-lg text-right">
                                            <h3 className="text-lg font-bold text-white">Founder</h3>
                                            <p className="text-sm text-white/80 dark:text-white/70">Startup X</p>
                                            <p className="text-xs text-primary mt-1">2017 - 2019</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background-dark"></div>
                                    <div className="w-5/12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACHIEVEMENTS SECTION */}
                <section className="py-16 bg-background-light dark:bg-background-dark/50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Achievements</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white/5 dark:bg-white/5 p-6 rounded-lg flex items-center gap-4">
                                <MaterialIcon icon="emoji_events" />
                                <h3 className="font-semibold text-white">Innovation Award 2022</h3>
                            </div>
                            <div className="bg-white/5 dark:bg-white/5 p-6 rounded-lg flex items-center gap-4">
                                <MaterialIcon icon="military_tech" />
                                <h3 className="font-semibold text-white">Design Excellence Award 2020</h3>
                            </div>
                            <div className="bg-white/5 dark:bg-white/5 p-6 rounded-lg flex items-center gap-4">
                                <MaterialIcon icon="star" />
                                <h3 className="font-semibold text-white">Startup Competition Winner 2018</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LABS SECTION */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-3xl font-bold text-white">Labs</h2>
                            <a className="flex items-center gap-2 text-primary font-semibold hover:underline" href="#">
                                Explore Labs <span className="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Alternative for card-glow: hover scale and shadow */}
                            <div className="bg-white/5 dark:bg-white/5 rounded-lg p-6 flex flex-col gap-4 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
                                <div className="w-full aspect-video bg-gray-700 rounded"></div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Game Dev Experiments</h3>
                                    <p className="text-sm text-white/80 dark:text-white/70">Exploring game development concepts</p>
                                </div>
                            </div>
                            <div className="bg-white/5 dark:bg-white/5 rounded-lg p-6 flex flex-col gap-4 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
                                <div className="w-full aspect-video bg-gray-700 rounded"></div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Blender 3D Art</h3>
                                    <p className="text-sm text-white/80 dark:text-white/70">Creating 3D models and animations</p>
                                </div>
                            </div>
                            <div className="bg-white/5 dark:bg-white/5 rounded-lg p-6 flex flex-col gap-4 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
                                <div className="w-full aspect-video bg-gray-700 rounded"></div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Music Compositions</h3>
                                    <p className="text-sm text-white/80 dark:text-white/70">Composing electronic music tracks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BLOG SECTION */}
                <section className="py-16 bg-background-light dark:bg-background-dark/50">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-3xl font-bold text-white">Blog</h2>
                            <a className="flex items-center gap-2 text-primary font-semibold hover:underline" href="#">
                                Read Blogs <span className="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                        <div className="space-y-8">
                            <div className="grid md:grid-cols-3 gap-8 items-center bg-white/5 dark:bg-white/5 p-6 rounded-lg">
                                <div className="md:col-span-2">
                                    <p className="text-primary text-sm font-semibold">Tech Insights</p>
                                    <h3 className="text-xl font-bold text-white mt-1">The Future of Full Stack Development</h3>
                                    <p className="text-white/80 dark:text-white/70 mt-2">A comprehensive look at emerging trends and technologies shaping the future of full stack development.</p>
                                </div>
                                <div className="w-full aspect-video bg-gray-700 rounded-lg"></div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8 items-center bg-white/5 dark:bg-white/5 p-6 rounded-lg">
                                <div className="md:col-span-2">
                                    <p className="text-primary text-sm font-semibold">Design Thinking</p>
                                    <h3 className="text-xl font-bold text-white mt-1">User-Centric Design Principles</h3>
                                    <p className="text-white/80 dark:text-white/70 mt-2">Exploring the core principles of user-centric design and how to apply them effectively in product development.</p>
                                </div>
                                <div className="w-full aspect-video bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOBBIES SECTION */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Hobbies & Multi-Skills</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white/5 dark:bg-white/5 p-6 rounded-lg flex items-center gap-4">
                                <MaterialIcon icon="chess" />
                                <h3 className="font-semibold text-white">Chess Strategy</h3>
                            </div>
                            <div className="bg-white/5 dark:bg-white/5 p-6 rounded-lg flex items-center gap-4">
                                <MaterialIcon icon="sports_esports" />
                                <h3 className="font-semibold text-white">Gaming Concepts</h3>
                            </div>
                            <div className="bg-white/5 dark:bg-white/5 p-6 rounded-lg flex items-center gap-4">
                                <MaterialIcon icon="music_note" />
                                <h3 className="font-semibold text-white">Music Production</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section className="py-16 bg-background-light dark:bg-background-dark/50">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-white/80 dark:text-white/70 mb-2" htmlFor="name">Name</label>
                                    <input className="form-input w-full rounded-lg bg-white/5 dark:bg-white/5 border-white/10 dark:border-white/20 text-white placeholder:text-white/50 focus:ring-primary focus:border-primary transition" id="name" placeholder="Your Name" type="text"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/80 dark:text-white/70 mb-2" htmlFor="email">Email</label>
                                    <input className="form-input w-full rounded-lg bg-white/5 dark:bg-white/5 border-white/10 dark:border-white/20 text-white placeholder:text-white/50 focus:ring-primary focus:border-primary transition" id="email" placeholder="Your Email" type="email"/>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/80 dark:text-white/70 mb-2" htmlFor="message">Message</label>
                                <textarea className="form-textarea w-full rounded-lg bg-white/5 dark:bg-white/5 border-white/10 dark:border-white/20 text-white placeholder:text-white/50 focus:ring-primary focus:border-primary transition" id="message" placeholder="Your Message" rows={5}></textarea>
                            </div>
                            <div className="text-center">
                                {/* Alternative for glowing-button: shadow and hover effect */}
                                <button className="z-10 flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold tracking-wide transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 mx-auto" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                        <div className="flex justify-center gap-6 mt-12">
                            <a className="text-white/60 hover:text-primary transition-colors" href="#">
                                <SocialIcon d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </a>
                            <a className="text-white/60 hover:text-primary transition-colors" href="#">
                                <SocialIcon d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </a>
                            <a className="text-white/60 hover:text-primary transition-colors" href="#">
                                <SocialIcon d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.616 4.21 3.765 4.649-.69.188-1.42.23-2.124.085.618 1.953 2.423 3.374 4.564 3.414-2.09 1.64-4.743 2.45-7.568 2.025 2.224 1.423 4.881 2.248 7.713 2.248 9.257 0 14.322-7.683 14.322-14.322 0-.217-.005-.432-.013-.646.984-.704 1.835-1.582 2.522-2.612z"/>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="bg-background-light dark:bg-background-dark/50 border-t border-white/10 dark:border-white/10">
                <div className="container mx-auto px-6 py-8 text-center">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6">
                        {['Work', 'Experience', 'Achievements', 'Labs', 'Blog', 'Hobbies', 'Contact'].map((item) => (
                            <a key={item} className="text-sm font-medium text-white/80 dark:text-white/70 hover:text-primary transition-colors" href="#">{item}</a>
                        ))}
                    </div>
                    <p className="text-sm text-white/60 dark:text-white/50">© 2024 Pantomath. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;