"use client"

import {FaChevronDown, FaChevronUp, FaSearch} from "react-icons/fa";
import {useState} from "react";

const PageHeader = ({regions, setSearchTerm, handleFilter}) => {
	return (
		<div className={`flex items-center justify-between flex-wrap gap-4 sm:px-8`}>
			<Searchbar setSearchTerm={setSearchTerm}/>
			<FilterBar regions={regions} handleFilter={handleFilter}/>
		</div>
	)
}

const Searchbar = ({setSearchTerm}) => {
	return (
		<div className={`flex items-center bg-white py-1 pl-8 w-[450px] rounded-md shadow-md text-dark_gray`}>
			<label htmlFor={`search`}><FaSearch/></label>
			<input
				id={`search`}
				type={`search`}
				placeholder={`Search for a country...`}
				className={`w-full h-[40px] px-4 outline-0`}
				onChange={e => setSearchTerm(e.target.value)}
			/>
		</div>
	)
}

const FilterBar = ({regions, handleFilter}) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const handleRegionClick = (region) => {
		handleFilter(region);
		setShowDropdown(prevState => !prevState);
	}

	return (
		<div className={`shadow-md`}>
			<div
				className={`flex items-center justify-between gap-2 bg-white h-[45px] w-[200px] py-1 px-4 rounded-md cursor-pointer`}
				onClick={() => setShowDropdown(prev => !prev)}>
				<p className={`font-[600]`}>Filter by region</p>
				{showDropdown ? <FaChevronDown/> : <FaChevronUp/>}
			</div>

			<div
				className={`absolute w-[200px] translate-y-2 flex flex-col gap-2 bg-white p-4 rounded-md shadow-md ${!showDropdown && 'hidden'}`}>
				{regions.map((region, index) => (
					<p key={index} className={`font-[600] cursor-pointer`}
					   onClick={() => handleRegionClick(region)}>{region}</p>
				))}
			</div>
		</div>
	)
}

export default PageHeader;