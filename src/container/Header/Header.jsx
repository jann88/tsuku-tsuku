import React from 'react';
import { images } from '../../constants/';
import SubHeading from '../../components/SubHeading/SubHeading.jsx'
 
import './Header.css';

const Header = () => (
  // <div classname="app__header app__wrapper section__padding" id="home">
  //   <div classname="app__wrapper_info">
  //     <SubHeading title="Chase the Great Dishes "/>
  //     <h1 classname="app__header-h1">Fine Chinese Foods Dining</h1>
  //     <p  className="p__opensans" style={{ margin: '2rem 0' }}></p>
  //     <button type="button" className="custom__button">Explore Menu</button>

  //   </div>
  //   <div clasname="app__wrapper_img">
  //   <img src={images.welcome} alt="header_img" />
  //   </div>
    
  // </div>
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Fine Chinese Foods Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
