import React, { useEffect, useState } from 'react';
import { fetchTeamMembers } from '../utils/api';

const AboutPage = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const loadTeam = async () => {
      const data = await fetchTeamMembers();
      setTeam(data);
    };
    loadTeam();
  }, []);

  return (
    <div>
      <section className="centered">
        <h1>About Us</h1>
        <p>
          We are dedicated to creating quality blog content for our clients.
        </p>
      </section>
      <section className="centered">
        <h2>Our Team</h2>
        <div className="centered">
          {team.map(member => (
            <div key={member.id} className="team-card centered">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
