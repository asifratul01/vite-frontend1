import React, { useState, useEffect } from 'react';
import { fetchServices, createService, deleteService } from '../utils/api';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ title: '', description: '' });

  useEffect(() => {
    const loadServices = async () => {
      const data = await fetchServices();
      setServices(data);
    };
    loadServices();
  }, []);

  const handleCreate = async () => {
    const created = await createService(newService);
    setServices(prev => [...prev, created]);
    setNewService({ title: '', description: '' });
  };

  const handleDelete = async id => {
    await deleteService(id);
    setServices(prev => prev.filter(service => service.id !== id));
  };

  return (
    <div>
      <h2>Manage Services</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newService.title}
          onChange={e =>
            setNewService(prev => ({ ...prev, title: e.target.value }))
          }
        />
        <textarea
          placeholder="Description"
          value={newService.description}
          onChange={e =>
            setNewService(prev => ({ ...prev, description: e.target.value }))
          }
        ></textarea>
        <button onClick={handleCreate}>Add Service</button>
      </div>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            {service.title}
            <button onClick={() => handleDelete(service.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageServices;
