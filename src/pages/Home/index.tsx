import { gql, useQuery } from '@apollo/client';
import React from 'react';
import './styles.css';

const GET_ORGANIZATION = gql`
query GetOrganizations{
  organizations {
    id
    name
  }
}
`

const Home: React.FC = () => {
  const { data } = useQuery(GET_ORGANIZATION)

  console.log(data)
  return (
    <div className="Home">
      <header className="Home-header">
        <img
          src="https://files.readme.io/9e810f9-small-developers3x.png"
          className="Home-logo"
          alt="logo"
        />
      </header>
    </div>
  );
}

export default Home;
