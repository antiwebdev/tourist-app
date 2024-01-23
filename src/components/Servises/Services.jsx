import React from 'react';
import './Services.css';
import helsinkiImage from '../../images/helsinki.jpg'; // Убедитесь, что пути верны
import porvooImage from '../../images/helsinki-porvoo.jpg';
import nuuksioImage from '../../images/nuuksio.jpg'

const services = [
  { name: "Helsinki", imageUrl: helsinkiImage },
  { name: "Porvoo", imageUrl: porvooImage },
  { name: "Nuuksio", imageUrl: nuuksioImage },
];

const Services = () => (
  <div className="services-container">
    {services.map(service => (
      <div 
        className="service-item" 
        key={service.name}
        style={{ backgroundImage: `url(${service.imageUrl})` }}
      >
        <span className="service-name">{service.name}</span>
      </div>
    ))}
  </div>
);

export default Services;