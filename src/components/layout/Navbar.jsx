import { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import '../../styles/navbar.css'
import logo from '../../assets/react.svg'
import themeIcon from '../../assets/nav/theme.png'

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

    const toggleTheme = () => setThemeMode((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))

    return (
        <nav className="flex items-center justify-between px-5 py-3 bg-gray-200 dark:bg-slate-900 text-gray-900 dark:text-white">
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-6 h-6" />
                <h1 className="text-lg font-semibold p-2    ">Roosc Zaño</h1>
            </div>

            <div className="flex items-center gap-3">
                <button
                    className="inline-flex items-center justify-center p-2 rounded-md border border-gray-200 dark:border-white/10 bg-gray-200 dark:bg-slate-700 focus:outline-white"
                    aria-label="Toggle theme"
                    aria-pressed={themeMode === 'dark'}
                    onClick={toggleTheme}
                    title={themeMode === 'dark' ? 'Switch to light' : 'Switch to dark'}
                >
                    <img src={themeIcon} alt="" className={`${themeMode === 'dark' ? 'rotate-180' : ''} w-5 h-5 transition-transform`} />
                </button>

                <Menu as="div" className="relative inline-block">
                    <MenuButton className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold bg-white text-slate-900 hover:bg-slate-50 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-700">
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400 dark:text-gray-300" />
                    </MenuButton>

                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black/5 bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                        <div className="py-1">
                            <MenuItem>
                                <a href="#projects" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-slate-900 dark:hover:bg-slate-700">
                                    Projects
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#about" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-slate-900 dark:hover:bg-slate-700">
                                    About
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#achievements" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-slate-900 dark:hover:bg-slate-700">
                                    Achievements
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#certifications" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-slate-900 dark:hover:bg-slate-700">
                                    Certifications
                                </a>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>
            </div>
        </nav>
    )
}