import { gql, useQuery } from '@apollo/client';
import React from 'react';
import './styles.css';

const GET_ORGANIZATION = gql`
query GetOrganizations{
  organization(id: 300562393) {
    id
    name
    pipes {
      id
      name
      color
      cards_count
      icon
    }
  }
}
`

const Home: React.FC = () => {
  const { data } = useQuery<{ organization: Organization }>(GET_ORGANIZATION)

  return (
    <main className="Home">
      <header className="Home-header">
        <img
          src="https://files.readme.io/9e810f9-small-developers3x.png"
          className="Home-logo"
          alt="logo"
        />
      </header>
      <section>
        {data?.organization.pipes.map(pipe => <div key={pipe.id}>{pipe.name}</div>)}
      </section>
    </main>
  );
}

export default Home;
