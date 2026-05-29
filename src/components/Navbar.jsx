import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import '../styles/navbar.css'

export const Navbar = () => {
    return (
        <>
            <nav className="nav-bar">
                <div className="left-side">
                    <h1>Roosc Zaño</h1>
                </div>

                <div className="right-side">
                    <Menu as="div" className="relative inline-block">
                        <MenuButton className="inline-flex w-auto justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-50">
                            Options
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                        </MenuButton>   

                            <MenuItems transition
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <div className="py-1">
                                    <MenuItem>
                                        <a href="#projects" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                            Projects 
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a href="#about" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                            About
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a href="#achievements" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"                                    >
                                            Achievements
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a href="#certifications" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        Certifications
                                        </a>
                                    </MenuItem>
                                </div>  
                        </MenuItems>
                    </Menu>
                </div>
            </nav>
        </>
    );
}
