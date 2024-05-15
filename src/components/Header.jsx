import {FaRegMoon, FaSun} from "react-icons/fa6";
import {useTheme} from "../context/ThemeContext.jsx";

const Header = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<header className={`sticky top-0 flex justify-between items-center py-4 px-[5%] sm:px-[7%] shadow-md h-[70px] elem-${theme}`}>
			<h1 className={`font-extrabold sm:text-2xl`}>Where in the world?</h1>
			<button className={`flex gap-1 items-center font-[600] capitalize`} onClick={toggleTheme}>
				{theme === 'light' ? <FaRegMoon/> : <FaSun/>}
				{theme === 'light' ? 'dark mode' : 'light mode'}
			</button>
		</header>
	);
}

export default Header;