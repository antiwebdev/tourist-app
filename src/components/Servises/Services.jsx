import React from 'react';
import './Services.css';
import helsinkiImage from '../../images/helsinki.jpg';
import porvooImage from '../../images/helsinki-porvoo.jpg';
import nuuksioImage from '../../images/nuuksio.jpg';

const services = [
  { 
    name: "Helsinki", 
    imageUrl: helsinkiImage,
    duration: "3 часа",
    description: "Краткое описание экскурсии по Хельсинки."
  },
  { 
    name: "Porvoo", 
    imageUrl: porvooImage,
    duration: "2 часа",
    description: "Краткое описание экскурсии по Порвоо."
  },
  { 
    name: "Nuuksio", 
    imageUrl: nuuksioImage,
    duration: "4 часа",
    description: "Краткое описание экскурсии по Нууксио."
  },
  {
    name: "Service 1",
    imageUrl: "path/to/image1.jpg",
    duration: "2 часа",
    description: "Описание сервиса 1."
  }, {
    name: "Service 2",
    imageUrl: "path/to/image2.jpg",
    duration: "3 часа",
    description: "Описание сервиса 2."
  }, {
    name: "Service 3",
    imageUrl: "path/to/image3.jpg",
    duration: "1 час",
    description: "Описание сервиса 3."
  }, {
    name: "Service 4",
    imageUrl: "path/to/image4.jpg",
    duration: "4 часа",
    description: "Описание сервиса 4."
  }, {
    name: "Service 5",
    imageUrl: "path/to/image5.jpg",
    duration: "5 часов",
    description: "Описание сервиса 5."
  }
];

const Services = () => (
  <div className="services-container">
    {services.map(service => (
      <div className="service-item" key={service.name}>
        <img src={service.imageUrl} alt={service.name} className="service-image" />
        <div className="service-info">
          <span className="service-name">{service.name}</span>
          <br></br>
          <span className="service-duration">{service.duration}</span>
          <br></br>
          <span className="service-description">{service.description}</span>
        </div>
      </div>
    ))}
  </div>
);

export default Services;