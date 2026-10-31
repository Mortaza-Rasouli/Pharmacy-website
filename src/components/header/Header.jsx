import { useCallback, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { HiBars3, HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import SearchPanel from "./SearchPanel";
import useStore from "../../hooks/useStore";
import { NAV_LINKS } from "../../data/site";

function Badge({ count }) {
  if (count === 0) return null;
  return (
    <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
      {count > 99 ? "99+" : count}
    </span>
  );
}

const desktopLink = ({ isActive }) =>
  `relative py-2 text-[16px] font-semibold transition-colors duration-300 hover:text-brand ${
    isActive ? "text-brand" : "text-[#444444]"
  }`;

const mobileLink = ({ isActive }) =>
  `block rounded-lg px-4 py-3 text-[15px] font-semibold ${
    isActive ? "bg-brand/10 text-brand" : "text-[#444444] hover:bg-gray-100"
  }`;

const iconClass =
  "h-5 w-5 text-muted transition-all duration-300 ease-linear hover:scale-105 hover:text-brand min-[330px]:h-6 min-[330px]:w-6";

export default function Header() {
  const { favoriteCount, cartCount } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };
  const toggleMenu = () => {
    setMenuOpen((open) => !open);
    setSearchOpen(false);
  };
  const toggleSearch = () => {
    setSearchOpen((open) => !open);
    setMenuOpen(false);
  };

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-[#E2E7EC] bg-white">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-3 min-[330px]:px-5 sm:px-6 lg:px-14 lg:py-4">
        <Link
          to="/"
          onClick={closeAll}
          aria-label="Medico Store – home"
          className="flex shrink-0 items-center text-brand"
        >
          <img src="/images/logo.png" alt="" className="h-9 pr-2 min-[330px]:h-10 lg:h-12" />
          <span className="flex flex-col">
            <span className="mt-1 text-xl font-extrabold leading-none min-[330px]:text-2xl lg:text-3xl">
              Medico
            </span>
            <span className="text-xs font-bold leading-none min-[330px]:text-sm lg:text-lg">
              Store
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden flex-1 lg:block">
          <ul className="flex items-center justify-center gap-6 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} className={desktopLink}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 min-[330px]:gap-4 lg:gap-5">
          <button
            type="button"
            aria-label={searchOpen ? "Close search" : "Search products"}
            aria-expanded={searchOpen}
            aria-haspopup="dialog"
            onClick={toggleSearch}
            className="cursor-pointer"
          >
            <HiMagnifyingGlass className={iconClass} />
          </button>

          <Link to="/wishlist" onClick={closeAll} aria-label={`Wishlist (${favoriteCount})`} className="relative">
            <GoHeart className={iconClass} />
            <Badge count={favoriteCount} />
          </Link>

          <Link to="/cart" onClick={closeAll} aria-label={`Cart (${cartCount})`} className="relative">
            <BsCart4 className={`${iconClass} w-5`} />
            <Badge count={cartCount} />
          </Link>

          <Link to="/login" onClick={closeAll} aria-label="Account" className="flex items-center gap-1">
            <img
              className="h-8 w-8 rounded-full border border-[#6666666E] min-[330px]:h-9 min-[330px]:w-9 lg:h-10 lg:w-10"
              src="/images/userDefault.png"
              alt=""
            />
            <span aria-hidden="true" className="hidden text-muted xl:inline">
              ▼
            </span>
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={toggleMenu}
            className="cursor-pointer text-2xl text-[#444444] min-[330px]:text-3xl lg:hidden"
          >
            {menuOpen ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
      </div>

      {searchOpen && <SearchPanel onClose={closeSearch} />}

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="max-h-[60vh] overflow-y-auto border-t border-[#E2E7EC] bg-white px-3 py-2 lg:hidden"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} onClick={closeAll} className={mobileLink}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
