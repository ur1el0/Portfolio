import { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import '../styles/navbar.css'
import logo from '../assets/react.svg'
import themeIcon from '../assets/nav/theme.png'

export const Navbar = () => {
    const getInitialTheme = () => {
        try {
            const stored = localStorage.getItem('theme')
            if (stored) return stored

            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
        } catch {
            return 'light'
        }
    }

    const [themeMode, setThemeMode] = useState(getInitialTheme)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', themeMode === 'dark')
        try {
            localStorage.setItem('theme', themeMode)
        } catch (error) {
            void error
        }
    }, [themeMode])
    
    const toggleTheme = () => setThemeMode(t => (t === 'dark' ? 'light' : 'dark'))

    return (
        <nav className="nav-bar">
            <div className="left-side">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Roosc Zaño</h1>
            </div>

            <div className="right-side">
                <button
                    className="theme-toggle"
                    aria-label="Toggle theme"
                    aria-pressed={themeMode === 'dark'}
                    onClick={toggleTheme}
                    title={themeMode === 'dark' ? 'Switch to light' : 'Switch to dark'}
                >
                    <img src={themeIcon} alt="" className="theme-icon" />
                </button>

                <Menu as="div" className="relative inline-block">
                    <MenuButton className="options inline-flex w-auto justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400 dark:text-gray-200" />
                    </MenuButton>

                    <MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:outline-white/10">
                        <div className="py-1">
                            <MenuItem>
                                <a href="#projects" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-100 dark:data-focus:bg-gray-700 dark:data-focus:text-white">
                                    Projects
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#about" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-100 dark:data-focus:bg-gray-700 dark:data-focus:text-white">
                                    About
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#achievements" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-100 dark:data-focus:bg-gray-700 dark:data-focus:text-white">
                                    Achievements
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#certifications" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-100 dark:data-focus:bg-gray-700 dark:data-focus:text-white">
                                    Certifications
                                </a>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>
            </div>
        </nav>
    );
}
