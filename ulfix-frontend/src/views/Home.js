import PageHeader from '../components/PageHeader'
import NavbarComp from '../components/Navbar'

function Home (props) {
  return (
    <>
      <NavbarComp lenguage={props.lenguage} changeLenguage={props.changeLenguage} />
      <div className='wrapper index-page'>
        <PageHeader lenguage={props.lenguage} />
        home
      </div>
    </>
  )
}

export default Home
