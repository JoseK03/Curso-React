import React from 'react'

const Micomponente = ({rey}) => {
  return (
    <div>
        <h1>Hola {rey.nombre} come {rey.reses} al dia </h1>
    </div>
  )
}

Micomponente.defaultProps ={
    reses:"pocas",
    rey:"Rey Godo"
}

export default Micomponente

