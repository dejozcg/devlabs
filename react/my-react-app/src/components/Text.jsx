export const Text = ({name="nn", country="nn"}) => {
    return <>
     <div>
        <h1 className='first-h1' style={{backgroundColor: 'lightcoral', fontSize:24}}>Ovo je nesto</h1>
        <h2 onClick={()=> console.log('Cao')} style={{fontStyle:'italic'}}>{name} a zemlja {country}</h2>
        <p dangerouslySetInnerHTML={{__html:'<b>dangerous</b>'}}></p>  
        {/* Dangereus se koristi u situacijama kada backend vrati HTML */}
      </div>
      </>
}

