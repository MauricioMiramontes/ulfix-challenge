import PageHeader from '../components/PageHeader'
import NavbarComp from '../components/Navbar'
import Footer from '../components/Footer'

function Home (props) {
  return (
    <>
      <NavbarComp
        Language={props.Language}
        changeLanguage={props.changeLanguage}
        isAuthenticated={props.isAuthenticated}
        setIsAuthenticated={props.setIsAuthenticated}
        active='home'
      />
      <div className='wrapper index-page'>
        <PageHeader Language={props.Language} />
      </div>
      <Footer Language={props.Language} />
    </>
  )
}

export default Home
