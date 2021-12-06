// ./src/components/Header.js

// 1. IMPORTACIONES
import React from "react"


// 2. FUNCIÓN
function Header (props) {

	console.log(props)


	return (
		<p>Hola. Soy el Header. Te doy la bienvenida {props.nombre} de {props.ciudad}</p>
	)

}


// 3. EXPORTACIÓN
// module.exports = Header
export default Header