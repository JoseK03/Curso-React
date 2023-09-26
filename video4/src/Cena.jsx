import React from 'react'

function Cena({nombre,color,precio,setTotal}) {
    const ruta = 'http://www.html6.es/img/rey_'
    const imagen = `${ruta}${nombre.toLowerCase()}.png`
    const comprar = (elementos) =>{
        setTotal((e)=> e +precio);
        elementos.target.parentNode.parentNode.parentNode.style.display = 'none';
    }

  return (
    <>
      <div className='rey' style={{backgroundColor:color}}>
        <h1>{nombre}</h1>
        <img src={imagen} alt='img'/>
        <div className='titulo'>precio:</div>
        <div className="precio">
            {precio}$
            <div className="">
                <button onClick={comprar}>Comprar</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cena
