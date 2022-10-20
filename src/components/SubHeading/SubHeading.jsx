import React from 'react';
import { images } from '../../constants'; 

const SubHeading = ({title}) => (
  <div sytle={{marginBottom: '1rem'}}>
    <p classname="p__comorant">{title}</p>
    <img src={images.spoon} alt="spoon_image" classname="spoon__img" />
    
  </div>
);

export default SubHeading;
