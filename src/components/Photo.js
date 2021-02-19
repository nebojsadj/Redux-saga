import React from "react";

function Photo({ album }) {
  return (
    <div className="col-4 d-flex justify-content-around mt-5">
      <div className="card" style={{ width: "540px" }}>
        <div className="card-header">{`${album.id}. ${album.title}`}</div>
        <div className="card-body">
          <img
            src={album.url}
            alt={album.id}
            key={album.id}
            className="w-100"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Photo;
