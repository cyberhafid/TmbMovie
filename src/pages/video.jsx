import React from 'react';
import { Row, Col, Container, Media } from 'reactstrap';
import './video.css';
import axios from 'axios';







const YT_API = 'AIzaSyDqL_re6cE8YhtNr_O7GvX1SX3aQo1clyg';




export default class Video extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []

        };

        // this.searchYoutube('');
    }

    // videoSearch = _.debounce((term) => { this.searchYoutube(term) }, 300);




    render() {
        return (





            <div className="container">


      
         
            <Row>

            <div className="search-bar">
                        <input
                            value="term"
                            placeholder='Search Video' />
                    </div>
            </Row>
            <Row>
                      <Col md="8">

             
                    <div className="video-detail">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/watch?v=uqICUH7sZ6s"></iframe>
                        </div>
                        <div className="details">
                            <div>titkle</div>
                            <div>description</div>
                        </div>
                    </div>

            </Col>
                      <Col md="4">

                    <div className="video-detail ">
                    <ul className="list-group">


                        <li className="list-group-item" >
                            <div className="video-list media">
                                <div className="media-left">
                                    <img className="media-object" src="https://www.youtube.com/watch?v=u1Yv5JbwGmg" />
                                </div>
                                <div className="media-body">
                                    <div className="media-heading">title</div>
                                </div>
                            </div>
                        </li>

                        <li className="list-group-item" >
                            <div className="video-list media">
                                <div className="media-left">
                                    <img className="media-object" src="https://www.youtube.com/watch?v=u1Yv5JbwGmg" />
                                </div>
                                <div className="media-body">
                                    <div className="media-heading">title</div>
                                </div>
                            </div>
                        </li>
                        <Media>
      <Media left href="https://www.youtube.com/watch?v=u1Yv5JbwGmg">
        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>


                    </ul>
                    </div>

                    </Col>
            </Row>
            </div>

        );
    }




}

