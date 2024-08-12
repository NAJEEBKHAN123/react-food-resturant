import { createContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import './App.css'
import ExploreFood from './Component/ExploreFood'
import FoodMenu from './Component/FoodMenu'
import Footer from './Component/Footer'
import Home from './Component/Home'
import About from './Component/About'


export const userContext = createContext();

function App() {

  const cardData = [
    {
      id: 1,
      imgUrl: "https://media.istockphoto.com/id/617364554/photo/hamburger-with-fries.webp?b=1&s=170667a&w=0&k=20&c=RQUSRPv4YfK2x8Pkkd1bam_QsDhKEQVb5BNlOL8yrWA=",
      name: "Burger"
    },
    {
      id: 2,
      imgUrl: "https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.webp?b=1&s=170667a&w=0&k=20&c=3U-ZTi5CZPTu-CxDiWUlkkGxvK3L1dflPb4nyDVnkZM=",
      name: "Pizza"
    },
    {
      id: 3,
      imgUrl: "https://media.istockphoto.com/id/2163862689/photo/pink-noodle-soup-thai-street-food.webp?b=1&s=170667a&w=0&k=20&c=F3MGutqSTQG-9C_rClRea6MVG-A52gC1IR9VmspECLA=",
      name: "Momo"
    },
  ];
  const foodData = [
    {
      id: 1,
      Name: "Chapli Kebab",
      imgUrl:"https://media.istockphoto.com/id/1872009656/photo/meat-roasting-on-grill.webp?b=1&s=170667a&w=0&k=20&c=A4WjJRl9BzQpwDP7pSBtpCPr_Z5xhsljD-6i8ner6n4=",
      Price: 2.61 ,
      desc:"The Chapli Kebab comes from central Asia",
    },
    {
      id: 2,
      Name: "Buddha Bowl",
      imgUrl:"https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.webp?b=1&s=170667a&w=0&k=20&c=28UZDQVkSbPg3-SX4s0jWARo0F7j2EC8zrvQHuh8WnU=",
      Price: 6.09 ,
      desc:"Grilled chicken meat and fresh vegetable salad of tomato",
    },
    {
      id: 3,
      Name: "Delicious meal",
      imgUrl:"https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.webp?b=1&s=170667a&w=0&k=20&c=VNOdVyszWf-PbZa-IxolcYq752TRkCkeUdpzJ2Ghf7M=",
      Price: 2.49 ,
      desc:"Delicious meal on a black plate, top view,",
    },
    {
      id: 4,
      Name: "Rice With bread",
      imgUrl:"https://media.istockphoto.com/id/614313140/photo/soft-beef-tacos-with-fries.webp?b=1&s=170667a&w=0&k=20&c=cLe3RgvsdwBnzxsp6QOsZfC9w-rTlgiW1l5QArV_NrY=",
      Price: 4.48 ,
      desc:"usually rice and bread come from central asia",
    },
    {
      id: 5,
      Name: "Vegetable",
      imgUrl:"https://media.istockphoto.com/id/1477430966/photo/woman-preparing-quinoa-vegetable-mix-cooked-in-a-frying-pan.webp?b=1&s=170667a&w=0&k=20&c=7aQUWGChdcGumHvlxkJZ2H_U_qeZ8XJIAIBYwsMebps=",
      Price: 7.31 ,
      desc:"chef cooking",
    },
    {
      id: 6,
      Name: "Pizza",
      imgUrl:"https://media.istockphoto.com/id/943449226/photo/concept-promotional-flyer-and-poster-for-restaurants-or-pizzerias-template-with-delicious.webp?b=1&s=170667a&w=0&k=20&c=-bFnLcL3QsAtomAVINVOHZDSaWLNoO_WUROXVuQa4GU=",
      Price: 4.01 ,
      desc:"Slice of pizza cheese crust seafood topping sauce",
    },

  ];
  const socialIcons = [
    {
      id: 1,
      iconsUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlua2VkaW4lMjBpbWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      name: "linkedin",
      ProfileUrl:"https://www.linkedin.com/in/najeeb-khan90?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 2,
      iconsUrl: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2Vib29rJTIwaWNvbnN8ZW58MHx8MHx8fDA%3D",
      name: "faceBook",
      ProfileUrl:"https://www.facebook.com/profile.php?id=100053768207242&mibextid=ZbWKwL"
    },
    {
      id: 3,
      iconsUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eW91dHViZSUyMGljb25zfGVufDB8fDB8fHww",
      name: "Youtube",
      ProfileUrl:"https://www.youtube.com/@NajeebUllah_1"
    },
    {
      id: 4,
      iconsUrl: "https://images.unsplash.com/photo-1654277041218-84424c78f0ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2l0aHViJTIwaWNvbnN8ZW58MHx8MHx8fDA%3D",
      name: "Github",
      ProfileUrl: "https://github.com/NAJEEBKHAN123"
    },

  ];
  
  

  return (
      <>
      <Router>
      <userContext.Provider value={{cardData, foodData, socialIcons}}>
      <Navbar/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes> */}
      <Header/>
      <ExploreFood/>
      <FoodMenu />
      <Footer/>
      </userContext.Provider>
     
      </Router>
      
    </>
  )
}

export default App
