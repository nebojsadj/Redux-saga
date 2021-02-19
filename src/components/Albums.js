import React from "react";
import { useSelector } from "react-redux";
import Photo from "./Photo";

function Albums() {
  const albums = useSelector((state) => state.albums.albums);
  const albumId1 = albums.filter((el) => el.albumId === 1);
  console.log(albumId1);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="text-center">Albums</h1>
        </div>
      </div>
      <div className="row">
        {albumId1.map((album) => (
          <Photo album={album} key={album.id} />
        ))}
      </div>
    </div>
  );
}

export default Albums;
