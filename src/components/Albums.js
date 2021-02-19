import React from "react";
import { useSelector } from "react-redux";

function Albums() {
  const albums = useSelector((state) => state.albums.albums);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="text-center">Albums</h1>
          <div className="row">
            <div className="col-6 offset-3">
              {albums.map((album) => (
                <img
                  src={album.thumbnailUrl}
                  alt={album.id}
                  key={album.id}
                ></img>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Albums;
