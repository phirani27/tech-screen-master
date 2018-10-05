import React from 'react';
import PropTypes from 'prop-types';

import bemHelper from '../utils/bem';

import './mainLayout.scss';

const cn = bemHelper({ block: 'layout' });

const MainLayout = ({ children }) => (
  <div className={cn(null, 'main')}>
    <nav className={cn('nav')}>
      <div className={cn('nav-header')}>
        <div className={cn('nav-content')}>
          <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 745.3 99.4" preserveAspectRatio="xMidYMid" 
              height="20px" 
              width="150px" 
            >
            <path d="M206 5.7h17.6v90H206v-90zm81 31c5.2 5.7 7.7 13.5 7.7 23.3v7H249c.3 5.4 1.6 9.5 4 12.5s6.4 4.5 11.4 4.5c7 0 11-3 12.4-8.8H294c-1.2 7.4-4 13-9 16.8-4.6 3.8-11.6 5.7-20.6 5.7-11 0-19-3-24.6-9s-8.3-14.7-8.3-25.8c0-5.6.8-10.6 2.4-15 1.5-4.2 3.7-8 6.6-11 3-3 6.4-5.2 10.4-6.8 4-1.6 8.5-2.3 13.4-2.3 10 0 17.6 2.8 22.7 8.6zm-9.3 18.8c0-4.5-1-8-3.3-10.6-2.2-2.6-5.7-4-10.4-4-2.4 0-4.4.5-6.2 1.2-1.8.8-3.3 1.8-4.5 3-1.2 1.4-2.2 3-2.8 4.6-.7 1.7-1 3.6-1 5.6h28.2zM359 43.2c1 3.2 1.5 7 1.5 11v41.5H344v-8.3c-2.7 3-5.6 5.3-9 7.2-3 1.8-7.3 2.8-12.4 2.8-3 0-5.7-.4-8.4-1-2.6-1-5-2-7-3.6s-3.5-3.6-4.6-6c-1.2-2.6-1.8-5.5-1.8-9 0-4.5 1-8.2 3-11 2-3 4.7-5.2 8-6.8 3.2-1.6 7-2.7 11-3.4 4-.7 8-1 12.3-1.3l8.5-.4v-3.4c0-4-1-6.8-3.3-8.3-2.2-1.5-5-2.3-8-2.3-7 0-11 2.6-12 8l-16-1.6c1.2-7 4.2-12 9-15 5-3 11.5-4.5 19.8-4.5 5 0 9.3.5 13 1.7 3.4 1.2 6.3 3 8.4 5.2 2 2.2 3.7 5 4.7 8.2zm-15.5 23l-7.8.5c-3.7.2-6.7.5-9 1-2.2.7-4 1.4-5 2.3-1.3 1-2 2-2.6 3-.3 1.3-.5 2.6-.5 4 0 2.2.8 4 2.3 5.2 1.5 1.3 3.6 2 6.3 2 4.6 0 8.3-1.2 11.2-3.3 1.6-1.3 3-2.8 4-4.6 1-1.8 1.4-4 1.4-6.7v-3.4zM405 28.8c-3.4 0-6.7 1-9.8 2.6-3 1.7-5.8 4.3-8 7.8v-9h-17v65.7h17.6v-38c0-2 .4-3.6 1-5.3.8-1.7 2-3.2 3.4-4.5 1.4-1.4 3-2.2 4.8-2.7 1.8-.5 3.6-.7 5.5-.7 3 0 5.4.3 7.4.8l2-16-3-.4c-1-.2-2.3-.3-4-.3zm58 13.7L450.6 40c-4.5-1-7.8-2.2-9.6-4-2-1.6-2.8-4-2.8-7.5 0-1.3.3-2.5.8-3.7.5-1.2 1.4-2.2 2.6-3 1.3-1 3-1.7 5-2.2s4.7-.8 8-.8c5.3 0 9.3 1 12 3.3 2.5 2.3 4.3 6 5.3 10.8l17.7-2.3c-.4-3.5-1.3-7-2.6-10.2-1.2-3.3-3.2-6.2-6-8.6-2.6-2.5-6-4.5-10.5-6-4.4-1.5-9.8-2.3-16.4-2.3-5 0-9.7.6-14 1.7-4.3 1.2-8 3-11 5-3 2.3-5.5 5-7.2 8.3-1.7 3.3-2.6 7-2.6 11.3 0 4.3.6 8 2 11 1.2 3.2 3 5.8 5.4 8 2.4 2 5.4 4 9 5.2 3.4 1.3 7.5 2.4 12 3.3l11.8 2.2c4.7 1 8 2.4 9.7 4.5 2 2 2.7 4.3 2.7 6.6 0 1.7-.3 3.2-.8 4.7-.6 1.4-1.5 2.7-2.8 3.7-1.3 1-3 2-5 2.5-2 .6-4.4 1-7.3 1-6.2 0-11-1.4-14-4-3.2-2.4-5-6.5-5.4-12h-19c.5 10.6 4 18.5 10.5 23.8 6.6 5.3 16 8 28.3 8 6 0 11-.8 15.4-2.2 4.4-1.4 8-3.3 11-5.8 2.8-2.5 5-5.4 6.5-8.7 1.5-3.3 2.2-7 2.2-11 0-8-2.3-14.3-6.8-18.6-4.7-4.3-12-7.4-21.6-9.3zm74.8 38c-2 2-4.7 3-8.2 3-2.7 0-5-.5-6.7-1.6-2-1-3.3-2.7-4.3-4.6-1-2-1.7-4.2-2-6.7-.5-2.5-.7-5.2-.7-8s.2-5.2.6-7.7c.4-2.5 1.2-4.7 2.2-6.6 1-2 2.5-3.5 4.2-4.6 1.8-1 4-1.7 6.7-1.7 3.7 0 6.3 1 7.8 3s2.5 4.8 3 8l17.7-2.3c-.4-3.4-1.3-6.4-2.5-9.3-1.3-2.8-3-5.2-5.3-7.2s-5-3.6-8.4-4.7c-3.3-1-7.2-1.7-11.7-1.7-5.2 0-9.8.8-14 2.5-4 1.7-7.3 4-10 7-3 3.2-5 7-6.5 11.2s-2.2 9-2.2 14.3c0 5.2.6 10 2 14.2 1.2 4.3 3 8 5.6 11 2.6 3 6 5.4 10 7 4 1.8 8.7 2.6 14.3 2.6 9.5 0 16.6-2.3 21.4-7 4.6-4.7 7.4-11 8-18.8h-18c-.2 3.8-1.3 6.7-3.2 8.7zm93.4-17.8c0 5.5-.8 10.4-2.3 14.7-1.7 4.3-4 8-6.8 11-3 3-6.4 5.3-10.5 7-4 1.5-8.7 2.3-13.7 2.3-10.6 0-18.8-3-24.6-9-5.8-6.2-8.7-14.8-8.7-26 0-5.5.8-10.3 2.3-14.7 1.6-4.4 3.8-8 6.7-11 3-3 6.4-5.4 10.5-7 4-1.6 8.7-2.4 13.7-2.4s9.6.8 13.8 2.4c4 1.6 7.6 4 10.5 7 3 3 5 6.5 6.6 11 1.5 4.4 2.2 9.3 2.2 14.6zm-18.2 0c0-6.7-1.2-11.8-3.7-15.4-2.5-3.5-6.3-5.2-11.3-5.2-5 0-8.8 1.8-11.3 5.3S583 56 583 62.7c0 6.8 1.2 12 3.7 15.6 2.4 3.6 6.2 5.4 11.3 5.4 5 0 8.8-1.8 11.3-5.4 2.4-3.8 3.7-9 3.7-15.7zm61-34c-3.5 0-6.8 1-10 2.7-3 1.7-5.7 4.3-7.8 7.8v-9H639v65.7h17.6v-38c0-2 .4-3.6 1-5.3.8-1.7 2-3.2 3.4-4.5 1.4-1.4 3-2.2 4.8-2.7 1.8-.5 3.6-.7 5.5-.7 3 0 5.4.3 7.4.8l2-16-2.8-.4c-1-.2-2.4-.3-4-.3zm71.3 38.5h-45.6c.2 5.4 1.5 9.5 4 12.5S710 84 715 84c7 0 11-3 12.4-8.8h17c-1 7.4-4 13-8.8 16.8-4.7 3.8-11.7 5.7-20.7 5.7-11 0-19.2-3-24.7-9S682 74 682 62.8c0-5.6.8-10.6 2.4-15 1.6-4.2 3.8-8 6.7-11 3-3 6.5-5.2 10.5-6.8 4-1.6 8.5-2.3 13.4-2.3 10 0 17.6 2.8 22.7 8.6 5 5.8 7.6 13.6 7.6 23.4v7zm-17-11.5c0-4.5-1.2-8-3.4-10.6-2.3-2.6-5.8-4-10.5-4-2.4 0-4.4.5-6.2 1.2-1.8.8-3.3 1.8-4.5 3-1.2 1.4-2.2 3-2.8 4.6-.7 1.7-1 3.6-1 5.6H728zM194.8 80c1-2.5 2-5.2 2.7-8L180 65.4c-.7 5.2-2.4 9-5 12-2.7 3-7 4.4-12.8 4.4-7.2 0-12.7-2.7-16.5-8-3.7-5.5-5.6-13.2-5.6-23s2-17.7 5.7-23c3.7-5.5 9.2-8.2 16.5-8.2 5.8 0 10 1.5 12.8 4.5 2.6 3 4.2 7 5 12l17.7-6.6c-.8-2.8-1.7-5.4-2.8-8-2-3.7-4.2-7-7-9.6l-2.4-2h-.2l-1.4-1c-2-1-4-2-6-2.8-4.7-1.7-10-2.5-16-2.5-6.4 0-12.2 1-17.2 3.3-5 2.2-9.5 5.3-13 9.5-3.7 4-6.5 9-8.4 15-1.4 4.2-2.3 9-2.7 14.2l-.2 5.4c0 1.7 0 3.5.2 5.2.4 5.3 1.3 10 2.7 14.4 2 5.8 4.7 10.8 8.3 15 3.6 4 8 7.2 13 9.4s11 3.3 17.3 3.3c6 0 11.3-.8 16-2.5 2-.8 4-1.8 6-3l1.4-.8h.2l2.3-2c2.8-3 5.2-6.3 7-10zM25.4 86.6c0-7-5.7-12.7-12.7-12.7C5.8 74 0 79.6 0 86.7s5.7 12.7 12.7 12.7c7 0 12.8-5.7 12.8-12.7zm0 0c0-7-5.7-12.7-12.7-12.7C5.8 74 0 79.6 0 86.7s5.7 12.7 12.7 12.7c7 0 12.8-5.7 12.8-12.7zm68.3-81h-90v51.7c2.8-1 6-1.3 9-1.3s6.2.6 9 1.5V23.7h54v54H42c1 2.8 1.4 6 1.4 9s-.5 6.2-1.4 9h51.7v-90z"></path>
          </svg>    
        </div>
      </div>
    </nav>
    <main className={cn('content')}>
      {children}
    </main>
    <footer className={cn('footer')}>
      Footer
    </footer>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
