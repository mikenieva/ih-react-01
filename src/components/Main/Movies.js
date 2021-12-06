import React from 'react'

export default function Movies(props) {

	const list = props.list

	return (
		<>
			{
				list.map((e, index) => {
					return (
						<article key={index}>
							<h1>{e.nombre}</h1>
							<p>El género es: {e.genero}</p>
						</article>
					)
				}) 

			}	
		</>
	)
}
