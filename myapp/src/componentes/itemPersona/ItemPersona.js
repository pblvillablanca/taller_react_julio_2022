import React from 'react'
import { Link } from 'react-router-dom'

const ItemPersona = ({persona})=>{

	return <>
	  <ul className="collection">
    		<li className="collection-item avatar">
				<div className='row'>
					<div className='col s10'>
						<i className="material-icons circle">person</i>
      					<span className="title">{persona.nombre}</span>

					</div>

					<div className='col s1'>
						<Link to={'/editarPersona/'+persona._id}><i className="material-icons">edit</i></Link>
					</div>
					<div className='col s1'>
						<a href="#!"><i className="material-icons">delete</i></a>
					</div>
      			
      			
				  </div>
			</li>

  		</ul>
	 </>
}

export default ItemPersona
