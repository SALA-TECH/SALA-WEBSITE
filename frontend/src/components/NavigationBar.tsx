import React, { useState } from "react";
import { FaArrowRight, FaChevronDown, FaTimes, FaBars, FaChevronRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../public/images/logo.png';

interface NavItem {
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
  { label: "Online Library", href: "/library" },
  { label: "News", href: "/news" }
];

const NavigationBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
    setActiveMobileMenu(null);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setActiveMobileMenu(null);
  };

  const handleMobileItemClick = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      // Has sub-menus — drill in
      setActiveMobileMenu(item.label);
    } else {
      // No sub-menus — navigate and close
      if (item.href) navigate(item.href);
      closeSidebar();
    }
  };

  const handleSubItemClick = (href: string) => {
    navigate(href);
    closeSidebar();
  };

  const currentSubItems = navItems.find(i => i.label === activeMobileMenu)?.subItems ?? [];

  return (
    <div>
      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="container nav-container">

          {/* Logo */}
          <Link className="logo" to="/">
            <img src={Logo} alt="SALA" className="navbar-logo" />
            SA<span>LA</span>
          </Link>

          {/* Desktop links — hidden on mobile */}
          <ul className="nav-links nav-links-desktop">
            {navItems.map((item) =>
              item.subItems ? (
                <li key={item.label} className="dropdown-wrapper">
                  <a href="#pages" onClick={toggleDropdown} className={isDropdownOpen ? "active" : ""}>
                    {item.label} <FaChevronDown className="dropdown-indicator" />
                  </a>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu">
                      {item.subItems.map((sub) => (
                        <li key={sub.label}>
                          <Link to={sub.href}>{sub.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link to={item.href || '/'}>{item.label}</Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop Login button — hidden on mobile 
          <Link to="/login" className="btn-donate nav-links-desktop">
            Login <FaArrowRight />
          </Link>*/}

          {/* Hamburger — mobile only */}
          <button className="mobile-hamburger" onClick={openSidebar} aria-label="Open menu">
            <FaBars />
          </button>

        </div>
      </nav>

      {/* ── Dark overlay behind sidebar ── */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}

      {/* ── Sidebar panel ── */}
      <div className={`mobile-sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>

        {/* Sidebar top: logo + X */}
        <div className="sidebar-header">
          <Link className="logo sidebar-logo" to="/" onClick={closeSidebar}>
            <img src={Logo} alt="SALA" className="navbar-logo" />
            SA<span>LA</span>
          </Link>
          <button className="sidebar-close" onClick={closeSidebar} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="sidebar-body">

          {activeMobileMenu === null ? (
            // ── Main menu ──
            <ul className="sidebar-nav">
              {navItems.map((item) => (
                <li key={item.label} className="sidebar-nav-item">
                  <button className="sidebar-nav-btn" onClick={() => handleMobileItemClick(item)}>
                    <span>{item.label}</span>
                    {item.subItems && <FaChevronRight className="sidebar-arrow" />}
                  </button>
                </li>
              ))}
              {/* Login button inside sidebar */}
              <li className="sidebar-nav-item">
                <Link to="/login" className="btn-donate sidebar-login-btn" onClick={closeSidebar}>
                  Login <FaArrowRight />
                </Link>
              </li>
            </ul>

          ) : (
            // ── Sub-menu ──
            <ul className="sidebar-nav">
              <li className="sidebar-nav-item sidebar-back-item">
                <button className="sidebar-back-btn" onClick={() => setActiveMobileMenu(null)}>
                  ← Back
                </button>
                <span className="sidebar-submenu-title">{activeMobileMenu}</span>
              </li>
              {currentSubItems.map((sub) => (
                <li key={sub.label} className="sidebar-nav-item">
                  <button className="sidebar-nav-btn" onClick={() => handleSubItemClick(sub.href)}>
                    <span>{sub.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  );
};

export default NavigationBar;