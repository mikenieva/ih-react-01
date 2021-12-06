// ./src/Footer.js
// 1. IMPORTACIONES
import React from 'react'


// 2. FUNCIÓN
function Footer(props){

	console.log(props)

	return (
		<p>Hola soy el footer. El nombre que pasamos fue: {props.nombre}</p>
	)
}


// 3. EXPORTACIÓN
export default Footer