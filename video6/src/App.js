import {useEffect , useState} from 'react'
import './App.css';

function App() {
  const [datos, setDatos] = useState([]);
  useEffect(()=>{
    const url = 'https://randomuser.me/api/?results=3';
    const peticion = fetch(url);
    peticion
    .then(datos=> datos.json())
    .then(lectura =>{
      lectura.result.map((persona)=>{
        setDatos(
        <div key={persona.email}>
          <div>{persona.name.first} {persona.name.last}</div>
          <div>
            <img src={persona.picture.large}/>
          </div>
        </div>)
        console.log(persona.name.first);
        
        })
      })
    .catch(()=>console.log('mal'))
  },[])
  
  return (
    <>
    <h1>Empleado/a del mes</h1>
    {datos}
    </>
  );
}

export default App;
