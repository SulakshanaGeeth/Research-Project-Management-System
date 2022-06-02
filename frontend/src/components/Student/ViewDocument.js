import { Link } from "react-router-dom";
import VideoPlayer from "react-video-js-player";
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./../../pages/components/Navbar";
import { BACKEND_BASE_URL } from "./../constant/index";

const ViewDocument = () => {
  const [document, setdocument] = useState();

  useEffect(() => {
    const fetchDocument = async () => {
      const res = await fetch(`${BACKEND_BASE_URL}/document-upload`);
      const data = await res.json();
      setdocument(data);
    };
    fetchDocument();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="row">
        {document?.map((document) => (
          <div
            className="col-md-3 card me-3 mt-2 p-0 mb-2 d-flex"
            key={document._id}
          >
            <img src={document.avatar} alt="" width={"100%"} height={200} />

            <VideoPlayer
              src={document.video}
              width="720"
              height="420"
              playBackRates={[0.5, 1, 1.25, 1.5, 2]}
            />

            <a href={document.pdf} download>
              Click to download
            </a>
            <div className="p-2">
              <h3>{document.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ViewDocument;
