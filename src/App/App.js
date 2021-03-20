import React, {useState} from 'react';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import About from '../About/About';
import crowns from './crowns.png'
import './App.css';

const App = () => {

  return(
    <>
    <Header />
    <main className='App'>
      <img className='crowns' src={crowns}/>
      <section className='opening'>
        <h2>We’re open!</h2>
        <h3>Pop in and grab a to-go beverage.  We look forward to seeing you.</h3>
        <p>We brew Corvus coffee and steep Matchaful matcha in a city that sits on top of the mountains of Colorado.  Stop by and see our ever expanding collection of books.  We bet you’ll find something you like.</p>
      </section>
      <About />
      <Contact />
      <section className='parking'>
        <h3>Parking</h3>
        <p>There is no parking on the business’ side of the street.</p>
        <p>Please find parking on the opposite side of the street.</p>
      </section>
    </main>
    </>
  )
}

export default App;
