import React from 'react';
//import team images
import team1 from '../assets/images/team-1.png';
import team2 from '../assets/images/team-2.png';
import team3 from '../assets/images/team-3.png';

const Scholars = () => {
  return (
    <section className='team' id='team'>
      <h1 className='heading'>
        our <span>Scholars</span>
      </h1>

      <div className='box-container'>
        <div className='box'>
          <div className='image'>
            <img src={team1} alt='' />
          </div>
          <div className='content'>
            <h3>Sheikh Ali</h3>
            <p>Dawa'ah Chairman</p>
            <div className='share'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </div>
          </div>
        </div>

        <div className='box'>
          <div className='image'>
            <img src={team2} alt='' />
          </div>
          <div className='content'>
            <h3>Sheikh Ibrahim</h3>
            <p>Dawa'ah Coordinator</p>
            <div className='share'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </div>
          </div>
        </div>

        <div className='box'>
          <div className='image'>
            <img src={team3} alt='' />
          </div>
          <div className='content'>
            <h3>Sh Hamisi</h3>
            <p>Chairman</p>
            <div className='share'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholars;
