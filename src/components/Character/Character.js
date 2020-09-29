import React from "react";
import './Character.scss';
import { useQuery, gql } from '@apollo/client';

const QUERY_CHARACTER= gql `
query getCharacter{
  characters{
    info{
      count
    }
    results{
    id,
    name,
    status,
    species,
    gender,
    image,
  	}
	}
}`;

const Characters = () =>{
    const {data, error, loading} = useQuery(QUERY_CHARACTER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    //return <p>{data.characters.info.count}</p>
    return (
      data.characters.results.map(post=>{
        return (
          <div key={post.id} className="character-content">
            <img src={post.image} className="character-img" alt="personaje faltante"/>
            <footer className="character-footer">
              <h2>{post.name}</h2>
              <p>{post.species}</p>
              <p>{post.gender}</p>
              <p>{post.status}</p>
            </footer>
            
          </div>
        )
      }) 
    )
};

export default Characters;
