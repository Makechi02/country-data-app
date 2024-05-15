import {BrowserRouter, Route, Routes} from "react-router-dom";

import {CountryDetails, Header, Home} from "./components";
import {useTheme} from "./context/ThemeContext.jsx";

function App() {

	const {theme} = useTheme();

	return (
		<>
			<Header/>
			<main className={`bg-${theme} min-h-[calc(100svh-70px)]`}>
				<BrowserRouter>
					<Routes>
						<Route path={`/`} element={<Home/>} />
						<Route path={`/country/:code`} element={<CountryDetails/>} />
					</Routes>
				</BrowserRouter>
			</main>
		</>
	)
}

export default App
