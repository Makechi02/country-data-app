import {Link, useParams} from "react-router-dom";
import countries from "../data/data.json";
import {FaArrowLeftLong} from "react-icons/fa6";
import {useTheme} from "../context/ThemeContext.jsx";

const CountryDetails = () => {

	const {code} = useParams();

	const country = countries.filter(country => country.alpha3Code === code)[0];
	const languages = country?.languages?.map(language => language.name).join(", ");
	const currencies = country?.currencies?.map(currency => currency.name).join(", ");
	const borderCountries = country?.borders?.map(border => countries.filter(country => country.alpha3Code === border)[0]);

	const {theme} = useTheme();

	return (
		<div className={`py-8 px-8 sm:px-[7%] bg-${theme}`}>
			<Link to={`/`} className={`flex items-center gap-2 w-fit shadow-md py-2 px-6 rounded-md elem-${theme}`}>
				<FaArrowLeftLong/>
				Back
			</Link>

			<div className={`flex flex-wrap items-center gap-8 mt-8`}>
				<div className={`flex-1 min-w-[200px]`}>
					<img src={country.flags.svg} alt={`${country.name}'s flag`} className={`sm:w-[80%] object-cover`}/>
				</div>

				<div className={`flex-1`}>
					<h1 className={`font-[800] text-2xl`}>{country.name}</h1>
					<div className={`flex flex-wrap gap-4 py-6`}>
						<div>
							<p>
								<span className={`country-property`}>Native Name: </span>
								<span className={`country-value`}>{country.nativeName}</span>
							</p>
							<p>
								<span className={`country-property`}>Population: </span>
								<span className={`country-value`}>{country.population}</span>
							</p>
							<p>
								<span className={`country-property`}>Region: </span>
								<span className={`country-value`}>{country.region}</span>
							</p>
							<p>
								<span className={`country-property`}>Sub region: </span>
								<span className={`country-value`}>{country.subregion}</span>
							</p>
							<p>
								<span className={`country-property`}>Capital: </span>
								<span className={`country-value`}>{country.capital}</span>
							</p>
						</div>

						<div>
							<p>
								<span className={`country-property`}>Top&nbsp;Level&nbsp;Domain: </span>
								<span className={`country-value`}>{country.topLevelDomain}</span>
							</p>
							<p>
								<span className={`country-property`}>Currencies: </span>
								<span className={`country-value`}>{currencies}</span>
							</p>
							<p>
								<span className={`country-property`}>Languages: </span>
								<span className={`country-value`}>{languages}</span>
							</p>
						</div>
					</div>
					<div className={`flex flex-wrap md:flex-nowrap items-center gap-2 pt-4`}>
						<p className={`font-[600]`}>Border&nbsp;Countries: </p>
						<div className={`grid grid-cols-border_cols w-full gap-2`}>
							{borderCountries?.map((border, index) => (
								<Link
									key={index}
									to={`/country/${border.alpha3Code}`}
									className={`${theme === 'light' && 'border-2'} rounded-md text-center flex items-center justify-center p-1 text-dark_gray text-[14px] elem-${theme}`}
								>
									{border.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CountryDetails;