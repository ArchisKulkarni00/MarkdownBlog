import './Navbar.css'; // Navbar-specific styles
import { useTheme } from '../Theme-Context';

const Navbar = ({ blogName }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="navbar-brand">{blogName}</div>
            <div className="navbar-links">
                <a href="/blogs">Blogs</a>
            </div>
            <button className={`mode-toggle ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
                {isDarkMode ? '🌞Light' : '🌙Dark'}
            </button>
        </nav>
    );
};

export default Navbar;
