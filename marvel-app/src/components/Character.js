import React from "react";

const Character = ({ character }) => {
  const Character = {
    id: character.id,
    name: character.name,
    description:character.description.substring(0,30),
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  };

  console.log(Character.image);
  return (
    <div className="card m-1 mb-2" style={{ width: "18rem" }}>
      <img src={Character.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-danger">{Character.name}</h5>
        <p className="card-text">
          {character.description || 'no description'}
        </p>
      </div>
      <div className="d-flex align-items-end">
          <a href="777" className="btn btn-outline-danger bg-transparent btn-block">
            More info
          </a>
        </div>
    </div>
  );
};

export default Character;
