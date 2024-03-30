"use client"

import Link from "next/link";
import {useState} from "react";

import PageHeader from "@/app/(components)/PageHeader";
import useDebounce from "@/hooks/useDebounce";

import countries from '@/data/data.json';

const Home = () => {
	const regions = [...new Set(countries.map(country => country.region))];

	const [searchTerm, setSearchTerm] = useState('');
	const [filteredCountries, setFilteredCountries] = useState(countries);

	const handleSearch = () => {
		const newCountries = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
		setFilteredCountries(newCountries);
	}

	const handleFilter = (region) => {
		const newCountries = countries.filter(country => country.region === region);
		setFilteredCountries(newCountries);
	}

	useDebounce(handleSearch, 1000, [searchTerm]);

	return (
		<div className={`py-6 px-[5%] bg-light_gray text-dark_blue text-[14px]`}>
			<PageHeader regions={regions} setSearchTerm={setSearchTerm} handleFilter={handleFilter}/>
			<CountriesGrid countries={filteredCountries}/>
		</div>
	)
}

const CountriesGrid = ({countries}) => {
	return (
		<div className={`mt-8 grid grid-cols-countries_cols gap-12 px-8`}>
			{countries.length ? countries.map((country, index) => (
				<Country key={index} country={country}/>
			)) : (<p className={`font-[600]`}>No Country found</p>)}
		</div>
	)
}

const Country = ({country}) => {
	return (
		<div className={`bg-white rounded-md overflow-hidden shadow-md`}>
			<div className={`h-[150px]`}>
				<img src={country.flags.svg} alt={`${country.name}'s flag`} className={`h-full w-full object-cover`}/>
			</div>
			<div className={`px-4 pt-6 pb-8`}>
				<Link href={`/country/${country.alpha3Code}`} className={`font-[800] text-lg`}>{country.name}</Link>
				<div className={`mt-4`}>
					<p>
						<span className={`country-property`}>Population: </span>
						<span className={`country-value`}>{country.population}</span>
					</p>
					<p>
						<span className={`country-property`}>Region: </span>
						<span className={`country-value`}>{country.region}</span>
					</p>
					<p>
						<span className={`country-property`}>Capital: </span>
						<span className={`country-value`}>{country.capital}</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home;