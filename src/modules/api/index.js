import R from "ramda"

import phones from "./mockPhones"



// Запросы к back-end

export const fetchPhones = () => {
	return new Promise(resolve => {
		resolve(phones)
	})
}


export const loadMorePhones = ({offset}) => {
	return new Promise(resolve => {
		resolve(phones)
	})
}


export const fetchPhoneById = async id => {
	return new Promise((resolve, reject) => {
		const phone = R.find(R.propEq("id", id), phones)
		resolve(phone)
	})
}