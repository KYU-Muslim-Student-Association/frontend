import React from 'react';
//import team images
import team1 from '../assets/images/team-1.png';
import team2 from '../assets/images/team-2.png';
import team3 from '../assets/images/team-3.png';


const Scholars = () => {
  return (
    <section class='team' id='team'>
      <h1 class='heading'>
        our <span>Scholars</span>
      </h1>

      <div class='box-container'>
        <div class='box'>
          <div class='image'>
            <img src={team1} alt='' />
          </div>
          <div class='content'>
            <h3>Sheikh Ali</h3>
            <p>Dawa'ah Chairman</p>
            <div class='share'>
              <i class='fab fa-facebook-f'></i>
              <i class='fab fa-twitter'></i>
              <i class='fab fa-instagram'></i>
            </div>
          </div>
        </div>

        <div class='box'>
          <div class='image'>
            <img src={team2} alt='' />
          </div>
          <div class='content'>
            <h3>Sheikh Ibrahim</h3>
            <p>Dawa'ah Coordinator</p>
            <div class='share'>
              <i class='fab fa-facebook-f'></i>
              <i class='fab fa-twitter'></i>
              <i class='fab fa-instagram'></i>
            </div>
          </div>
        </div>

        <div class='box'>
          <div class='image'>
            <img src={team3} alt='' />
          </div>
          <div class='content'>
            <h3>Sh Hamisi</h3>
            <p>Chairman</p>
            <div class='share'>
              <i class='fab fa-facebook-f'></i>
              <i class='fab fa-twitter'></i>
              <i class='fab fa-instagram'></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholars;
