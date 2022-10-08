import './styles.css'
import falopini from '../../assets/falopini.png'

const Landing = () => {
  return (
    <div className='landing'>
      <div className='img-container'>
        <img src={falopini} alt='falopini logo' className='img'/>
      </div>        
        <button 
        className='button'
        onClick={() => window.open('mailto: samantha.valdez.toccalino@gmail.com?subject=Hola Falopini!')} 
        > 
          Para mas info escribinos a info@falopini.com
        </button>
    </div>
  )
}

export default Landing