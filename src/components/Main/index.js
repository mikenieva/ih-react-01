// ./src/components/Main/index.js

// 1. IMPORTACIONES
import React from 'react'
import Food from './Food'
import Movies from './Movies'

// 2. FUNCIONES
function Main (){


	const foodList = [
		"tamales",
		"tortas",
		"tacos"
	]

	const restaurantsList = [
		{
			nombre: "McDonalds",
			platilloPrincipal: "Hamburguesas"
		},
		{
			nombre: "Pizza Hut",
			platilloPrincipal: "Pizza"
		},
		{
			nombre: "La casa de Toño",
			platilloPrincipal: "Taquitos de cochinita"
		}
	]

	const moviesList = [
		{
			nombre: "Terminator",
			genero: "Acción"
		},
		{
			nombre: "Terminator II",
			genero: "Acción"
		},
		{
			nombre: "Terminator III",
			genero: "Acción"
		}
	]

	return (
		<>
			<Movies list={moviesList} />
			<hr />
			<Food list={foodList} restaurants={restaurantsList} />
		</>
	)

}


// 3. EXPORTACIÓN
export default Main