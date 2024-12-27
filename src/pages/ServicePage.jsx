import React, { useState, useEffect } from 'react';
import { fetchServices } from '../utils/api';
import ServiceCard from '../components/ServiceCard';

const ServicePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const data = await fetchServices();
      setServices(data);
    };
    loadServices();
  }, []);

  return (
    <div>
      <section className="centered-page">
        <h1>Our Services</h1>
        <div className="service-list">
          {services.length > 0 ? (
            services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))
          ) : (
            <p>No services available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
