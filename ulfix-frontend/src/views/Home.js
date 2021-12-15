import PageHeader from '../components/PageHeader'
import NavbarComp from '../components/Navbar'
import Footer from '../components/Footer'

function Home (props) {
  return (
    <>
      <NavbarComp lenguage={props.lenguage} changeLenguage={props.changeLenguage} isAuthenticated={props.isAuthenticated} />
      <div className='wrapper index-page'>
        <PageHeader lenguage={props.lenguage} />
      </div>
      <Footer lenguage={props.lenguage} />
    </>
  )
}

export default Home
