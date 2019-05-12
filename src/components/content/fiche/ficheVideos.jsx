import React from 'react'

import { Row, Col } from 'reactstrap';




export default function FicheVideos({ Idvideo }) {

  return (

    <Row>
      <Col md="8">
        {Idvideo.videos.filter((video, idx) => idx < 1).map((video, idx) =>

          <div className="video-detail" key={idx}>
            <h1>{video.title}</h1>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.key}`} ></iframe>
            </div>

          </div>

        )}
      </Col>

      <Col md="4">
        <div className="video-detail ">
          <ul className="list-group">

            {Idvideo.videos.filter((video, idx) => idx > 1 && idx <= 4).map((bande, idx) =>

              <li className="list-group-item" key={idx}>

                <li className="list-group-item" >
                  <div className="video-list media">
                    <div className="media-left">

                    </div>
                    <div className="media-body">

                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${bande.key}`} ></iframe>
                      </div>
                      <div className="media-heading">title</div>
                    </div>
                  </div>
                </li>
              </li>

            )
            }
          </ul>
        </div>

      </Col>
    </Row>

  )
}
