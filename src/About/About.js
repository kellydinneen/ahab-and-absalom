import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [visible, setVisible] = useState(false);
  console.log(setVisible);

  return(
    <>
      <h3 className='about-header' onClick={() => setVisible(!visible)}>About</h3>
      {visible && <section className='about'>
        <h4 className='about-headline'>Ahab & Absalom is a coffee house in the highest city in America. And we love it up here.</h4>

        <p className='about-text'>We think that the coolest place in Colorado deserves delicious coffee and matcha.</p>
        <p className='about-text'>For espresso and coffee, we use Corvus Coffee Roasters, which is just down the hill from Leadville in the city of Denver.  For matcha, we use single origin tea from Matchaful.  It’s delicately sweet and balanced for those looking for a taste of Japan up in the Rockies.</p>
        <p className='about-text'>We’re proud of what we serve, and we think you’re going to love it.</p>
        <p className='about-text'>Be sure to explore our space and check out our books in the back.  Our recommendations are ever expanding, so if you need help picking something out, just ask.</p>
        <h4 className='about-headline'>Elevated Drinks and Books</h4>
        <p>“Ahab” started in 2020 after owner and operator Lenhardt Stevens moved to Leadville.  Stevens is looking to bring Leadville a spot to hangout, read a magazine, work on your work, think your thoughts, or chat to us about one of our book recommendations. </p>
        <h4 className='about-headline'>Who are Ahab and Absalom?</h4>
        <p className='about-text'>Much of the world used to be run by Kings.  Ahab was a wicked king who ruled over Israel.  Absalom was a benevolent king who also ruled over Israel.  Their names have been invoked in literature over the centuries to invoke opposing ways of existing in the world.</p>
      </section>}
    </>
  )
}

export default About;
