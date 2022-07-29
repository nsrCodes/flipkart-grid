import { useState } from 'react';

// components
import Cart from '../Cart/Cart';

// assets
import logo from '../../images/logo.svg';
import { GiHamburgerMenu } from "react-icons/gi"
import { BsCart3 } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { RiCloseCircleLine } from "react-icons/ri"
import { Link } from 'react-router-dom';

export default function Nav({ savedCount, setSavedCount }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [{ name: "Product", link: "product" }];

    const navItemsDisplay = navItems.map((item) => (
        <li
            key={item}
            className="lg:border-b-4 lg:border-transparent lg:py-10 lg:transition-all lg:duration-300 lg:hover:cursor-pointer lg:hover:border-b-4 lg:hover:border-primary lg:hover:text-tertiary"
        >
            <Link to={item.link}>
                {item.name}
            </Link>
        </li>
    ));

    return (
        <nav className="flex w-full md:absolute md:top-0 items-center gap-4 bg-white px-6 lg:gap-0 lg:border-b-2 lg:border-secondary-dark lg:pb-0">
            {isMenuOpen ? (
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="z-30"
                    aria-label="Close"
                >
                    <RiCloseCircleLine alt="close" className="mt-1.5 w-4 lg:hidden" />
                </button>
            ) : (
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(true)}
                    className="z-30"
                    aria-label="Hamburger"
                >
                    <GiHamburgerMenu
                        alt="hamburger"
                        className="mt-1.5 w-4 lg:hidden"
                    />
                </button>
            )}

            {isMenuOpen && (
                <div className="absolute top-0 left-0 z-20 min-h-full w-full bg-black/70">
                    <ul className="absolute top-0 left-0 min-h-full w-8/12 space-y-4 bg-white p-7 pt-20 text-lg font-bold md:w-1/3">
                        {navItemsDisplay}
                    </ul>
                </div>
            )}

            <Link className="mr-auto md:mx-0" to={`/`}>
                <img src={logo} alt="sneaker" />
            </Link>

            <div className="mr-auto lg:ml-12">
                <ul className="hidden  text-tertiary-light lg:flex lg:gap-6">
                    {navItemsDisplay}
                </ul>
            </div>

            <div className="flex items-center gap-4 lg:gap-8">
                <div className="relative">
                    <button type="button" onClick={() => setIsCartOpen(!isCartOpen)}>
                        <BsCart3 alt="cart" className="w-6" />
                    </button>

                    {savedCount > 0 && (
                        <span className="absolute -top-1 -right-1.5 inline-block rounded-full bg-primary px-2 text-center text-[8px] text-white">
                            {savedCount}
                        </span>
                    )}
                </div>

                <Link to={`/user`}>
                    <FaUserCircle
                        alt="avatar"
                        className="w-6 rounded-full hover:cursor-pointer hover:outline hover:outline-1 hover:outline-primary md:w-10 lg:w-12"
                    />
                </Link>
            </div>

            {isCartOpen && (
                <Cart savedCount={savedCount} setSavedCount={setSavedCount} />
            )}
        </nav>
    );
}
