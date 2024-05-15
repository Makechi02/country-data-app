import {BrowserRouter, Route, Routes} from "react-router-dom";

import {CountryDetails, Header, Home} from "./components";

function App() {
	return (
		<>
			<Header/>
			<main>
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
