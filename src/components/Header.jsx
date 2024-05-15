import {FaRegMoon} from "react-icons/fa6";

const Header = () => {
	return (
		<header className={`sticky top-0 bg-white flex justify-between items-center py-4 px-[5%] sm:px-[7%] shadow-md`}>
			<h1 className={`font-extrabold sm:text-2xl`}>Where in the world?</h1>
			<button className={`flex gap-1 items-center font-[600]`}>
				<FaRegMoon/>
				Dark Mode
			</button>
		</header>
	);
}

export default Header;