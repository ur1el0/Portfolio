import { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { UserIcon, SunIcon, MoonIcon } from '@heroicons/react/20/solid'

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

    const isDark = themeMode === 'dark'

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-1 border-b transition-colors ${isDark ? 'bg-white text-slate-900 border-gray-200 shadow-sm shadow-slate-300/40' : 'bg-slate-900 text-slate-100 border-slate-700 shadow-sm shadow-black/20'}`}>
            <div className="flex items-center gap-3">   
                <UserIcon className="w-6 h-6" />
                <h1 className="text-lg font-semibold p-2">Roosc Zaño</h1>
            </div>

            <div className="flex items-center gap-3">

                <div className="hidden md:flex items-center font-semibold gap-4">
                    <a href="#about" className="anchor-click text-sm hover:text-indigo-400">About</a>
                    <a href="#projects" className="anchor-click text-sm hover:text-indigo-400">Projects</a>
                    <a href="#achievements" className="anchor-click text-sm hover:text-indigo-400">Achievements</a>
                    <a href="#certifications" className="anchor-click text-sm hover:text-indigo-400">Certifications</a>
                </div>
                <button
                    className={`inline-flex items-center justify-center p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${isDark ? 'border-gray-200 bg-gray-100 text-slate-900 hover:bg-gray-200 focus:ring-offset-white' : 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700 focus:ring-offset-slate-900'}`}
                    aria-label="Toggle theme"
                    aria-pressed={isDark}
                    onClick={toggleTheme}
                    title={isDark ? 'Switch to light' : 'Switch to dark'}
                >
                    {isDark ? (
                        <SunIcon className="w-5 h-5 text-yellow-500 transition-transform" />
                    ) : (
                        <MoonIcon className="w-5 h-5 text-slate-200 transition-transform" />
                    )}
                </button>

                <Menu as="div" className="relative inline-block md:hidden">
                    <MenuButton className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold transition-colors ${isDark ? 'bg-white text-slate-900 hover:bg-slate-50' : 'bg-slate-800 text-slate-100 hover:bg-slate-700'}`}>
                        <ChevronDownIcon aria-hidden="true" className={`-mr-1 h-5 w-5 ${isDark ? 'text-gray-400' : 'text-slate-200'}`} />
                    </MenuButton>

                    <MenuItems className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 transition-colors ${isDark ? 'bg-white text-slate-900 ring-black/5' : 'bg-slate-800 text-slate-100 ring-white/10'}`}>
                        <div className="py-1">
                            <MenuItem>
                                <a href="#about" className={`anchor-click block px-4 py-2 text-sm ${isDark ? 'hover:bg-gray-100 hover:text-slate-900' : 'hover:bg-slate-700 hover:text-slate-100'}`}>
                                    About
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#projects" className={`anchor-click block px-4 py-2 text-sm ${isDark ? 'hover:bg-gray-100 hover:text-slate-900' : 'hover:bg-slate-700 hover:text-slate-100'}`}>
                                    Projects
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#achievements" className={`anchor-click block px-4 py-2 text-sm ${isDark ? 'hover:bg-gray-100 hover:text-slate-900' : 'hover:bg-slate-700 hover:text-slate-100'}`}>
                                    Achievements
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#certifications" className={`anchor-click block px-4 py-2 text-sm ${isDark ? 'hover:bg-gray-100 hover:text-slate-900' : 'hover:bg-slate-700 hover:text-slate-100'}`}>
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