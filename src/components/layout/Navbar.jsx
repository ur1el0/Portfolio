import { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'
import { FaCodeFork } from "react-icons/fa6";

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
    const isDarkTheme = themeMode === 'dark'

    const navbarSurfaceClass = isDarkTheme
        ? 'border-slate-200 bg-slate-50 text-slate-900 shadow-sm shadow-slate-900/5'
        : 'border-slate-800 bg-slate-950 text-slate-50 shadow-lg shadow-slate-950/10'

    const controlSurfaceClass = isDarkTheme
        ? 'border-slate-200 bg-white text-slate-900 hover:bg-slate-100 focus:ring-offset-slate-50'
        : 'border-slate-700 bg-slate-900 text-slate-50 hover:bg-slate-800 focus:ring-offset-slate-950'

    const menuSurfaceClass = isDarkTheme
        ? 'border-slate-200 bg-slate-50 text-slate-900'
        : 'border-slate-800 bg-slate-950 text-slate-50'

    const menuItemHoverClass = isDarkTheme ? 'hover:bg-slate-100 hover:text-slate-900' : 'hover:bg-slate-900/80 hover:text-slate-50'

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
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b px-4 py-1 transition-colors ${navbarSurfaceClass} py-5 px-10 `}>
            <div className="flex items-center gap-5">   
                <FaCodeFork className="pl-4 w-10 h-10" />
                <h1 className="text-2xl font-semibold p-2">ROOSC ZAÑO</h1>
            </div>

            <div className="flex items-center gap-5 pr-4">

                <div className="hidden md:flex items-center font-semibold gap-6">
                    <a href="#about" className="anchor-click text-sm text-current hover:text-[var(--accent)]">About</a>
                    <a href="#projects" className="anchor-click text-sm text-current hover:text-[var(--accent)]">Projects</a>
                    <a href="#participations" className="anchor-click text-sm text-current hover:text-[var(--accent)]">Participations</a>
                    <a href="#certifications" className="anchor-click text-sm text-current hover:text-[var(--accent)]">Certifications</a>
                </div>
                <button
                    className={`inline-flex items-center justify-center rounded-md border p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${controlSurfaceClass}`}
                    aria-label="Toggle theme"
                    aria-pressed={themeMode === 'dark'}
                    onClick={toggleTheme}
                    title={themeMode === 'dark' ? 'Switch to light' : 'Switch to dark'}
                >
                    {themeMode === 'dark' ? (
                        <SunIcon className="w-5 h-5 text-[var(--yellow)] transition-transform" />
                    ) : (
                        <MoonIcon className="w-5 h-5 text-[var(--accent)] transition-transform" />
                    )}
                </button>

                <Menu as="div" className="relative inline-block md:hidden">
                    <MenuButton className={`inline-flex items-center rounded-md border px-3 py-2 text-sm font-semibold transition-colors ${controlSurfaceClass}`}>
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-current" />
                    </MenuButton>

                    <MenuItems className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border shadow-lg ring-1 ring-black/5 transition-colors ${menuSurfaceClass}`}>
                        <div className="py-1">
                            <MenuItem>
                                <a href="#about" className={`anchor-click block px-4 py-2 text-sm ${menuItemHoverClass}`}>
                                    About
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#projects" className={`anchor-click block px-4 py-2 text-sm ${menuItemHoverClass}`}>
                                    Projects
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#participations" className={`anchor-click block px-4 py-2 text-sm ${menuItemHoverClass}`}>
                                    Participations
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#certifications" className={`anchor-click block px-4 py-2 text-sm ${menuItemHoverClass}`}>
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