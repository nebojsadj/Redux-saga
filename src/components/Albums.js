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
              <ul className="list-group-flush">
                {albums.map((album) => (
                  <li
                    className="list-group-item"
                    key={album.id}
                  >{`${album.id}. ${album.title}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Albums;
