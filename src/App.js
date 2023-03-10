import logo from './logo.svg';
import './App.css';
import Cards from './Component/Cards';
import Navbar from './Component/Navbar';

function App() {
  // *****************************Navbar Section*******************************
  var navbar = [

    {
      logo:'Najam',
      home: 'Home',
      blog: 'Blog',
      others: 'Others',
      about: 'About',
      contact: 'Contact'
    }
  ]
  var newnav = navbar.map((item) => {
    return (
      <Navbar data={item} />
    )
  })


  // ********************************Cards section****************************************
  var mycard = [
    // ********************************Row no 1*******************************************
    {
      img: 'https://images.pexels.com/photos/9493793/pexels-photo-9493793.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      name: 'A house Window',
      button: 'More?'
    },
    {
      img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'MacBook Pro',
      button: 'More?'
    },
    {
      img: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Ancient Painting',
      button: 'More?'
    },
    {
      img: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Designeted Skull',
      button: 'More?'
    },
    {
      img: 'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Microphone',
      button: 'More?'
    },
    {
      img: 'https://images.pexels.com/photos/3819818/pexels-photo-3819818.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Statue',
      button: 'More?'
    },

    // ********************************************Row no 2****************************************
    {
      img: 'https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Ancient Painting',
      button: 'More?'
    },
    {
      img: 'https://images.pexels.com/photos/236171/pexels-photo-236171.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Chinese',
      button: 'More?'
    },
    {
      img: 'https://images.pexels.com/photos/672642/pexels-photo-672642.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Ancient Place',
      button: 'More?'
    },
    {
      img: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Wall Of China',
      button: 'More?'
    },
    {
      img: 'https://images.pexels.com/photos/2115695/pexels-photo-2115695.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Red Place',
      button: 'More?'
    },
    {
      img: 'https://images.pexels.com/photos/631339/pexels-photo-631339.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Egypt',
      button: 'More?'
    }

  ]
  var newcard = mycard.map((item) => {
    return (
      <Cards data={item} />
    )
  })
  return (
    <>
      {newnav}
      {newcard}
    </>
  );
}

export default App;
