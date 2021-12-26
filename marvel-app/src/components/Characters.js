import React from "react";
import useData from "../hooks/useData";
import Character from "./Character";
import Loading from "./common/Loading";

const Characters = () => {
  const URL = `${process.env.REACT_APP_CHARACTERS}?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`;

  const { data, isLoading } = useData(URL);
  console.log(data)
  const {results} = data;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="d-flex justify-content-start flex-wrap animate__animated animate__fadeInLeft">
          {results.map((character)=>{
            return <Character key={character.id} character={character}/>
          })}
        </div>
      )}
    </>
  );
};

export default Characters;
