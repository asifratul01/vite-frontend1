import React, { useState, useEffect } from 'react';
import {
  fetchTeamMembers,
  createTeamMember,
  deleteTeamMember,
} from '../utils/api';

const ManageTeam = () => {
  const [team, setTeam] = useState([]);
  const [newMember, setNewMember] = useState({ name: '', role: '' });

  useEffect(() => {
    const loadTeam = async () => {
      const data = await fetchTeamMembers();
      setTeam(data);
    };
    loadTeam();
  }, []);

  const handleCreate = async () => {
    const created = await createTeamMember(newMember);
    setTeam(prev => [...prev, created]);
    setNewMember({ name: '', role: '' });
  };

  const handleDelete = async id => {
    await deleteTeamMember(id);
    setTeam(prev => prev.filter(member => member.id !== id));
  };

  return (
    <div>
      <h2>Manage Team</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newMember.name}
          onChange={e =>
            setNewMember(prev => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Role"
          value={newMember.role}
          onChange={e =>
            setNewMember(prev => ({ ...prev, role: e.target.value }))
          }
        />
        <button onClick={handleCreate}>Add Member</button>
      </div>
      <ul>
        {team.map(member => (
          <li key={member.id}>
            {member.name} - {member.role}
            <button onClick={() => handleDelete(member.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageTeam;
