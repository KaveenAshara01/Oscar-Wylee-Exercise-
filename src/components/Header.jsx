import { Menu, Search, ShoppingBag, UserRound } from 'lucide-react';
import logo from '../assets/logos/ow-logo.svg';

const navItems = ['Glasses', 'Sunglasses', 'Locations', 'Eye Test Info', 'Offers'];
const preventNavigation = (event) => event.preventDefault();

function Header() {
  return (
    <header className="site-header">
      <div className="mobile-booking">Book an eye test</div>
      <div className="header-bar">
        <button className="icon-button menu-button" type="button" aria-label="Open menu">
          <Menu size={22} strokeWidth={1.7} />
        </button>
        <a className="brand" href="/" onClick={preventNavigation} aria-label="Oscar Wylee home">
          <img src={logo} alt="Oscar Wylee" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className={item === 'Locations' ? 'active' : undefined} href="/" onClick={preventNavigation} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="book-button" type="button">Book an eye test</button>
          <button className="icon-button desktop-only" type="button" aria-label="Search">
            <Search size={24} strokeWidth={1.8} />
          </button>
          <button className="icon-button desktop-only" type="button" aria-label="Account">
            <UserRound size={24} strokeWidth={1.8} />
          </button>
          <button className="bag-button" type="button" aria-label="Shopping bag with 2 items">
            <ShoppingBag size={25} strokeWidth={1.7} />
            <span>2</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
