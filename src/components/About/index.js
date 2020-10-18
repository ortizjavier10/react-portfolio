import React from 'react';

function About() {
    return(
        <section class="page-section" id="about">
      <h2>About Me</h2>
      <div>
      <img class="profile-picture" src={require("../../assets/javier.jpg")} />
      </div>
      <div>
        <p>
        My name is Javier Ortiz, I'm 30, and I'm a Full-Stack Web Developer. 10 years of IT experience. 
        Currently work as a Sr. Systems Admin for Airborne Maintenance and Engineering Services.
        If I'm not hanging out at the beach or kayaking in the springs I enjoy hanging out at home by the pool with my wife, 😸 Pernicus, and 🐶 Riley. 
        </p>
      </div>
    </section>

    )
}

export default About;