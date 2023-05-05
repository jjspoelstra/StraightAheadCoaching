import Header from './components/Header'
import Signup from './components/Signup';
import Footer from './components/Footer';
import Description from './components/Description';


function App() {
  return (
    <div className="container" >
      <Header src = 'https://straightaheadcoaching.com/wp-content/uploads/2021/11/logo-word-resized.jpg.webp'/>
      <div className='flex place-content-evenly'>
        <Description />
        <Signup />
      </div>
      <Footer />
    </div>
  );
}


export default App;
