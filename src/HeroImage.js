import React, { Component } from 'react';

import { Jumbotron } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import logohamburger from './logo_and_hamburger.svg';

class HeroImage extends Component {

  render(){
    return (
      <div>
        <Jumbotron fluid>
          <Grid fluid>
              <Row>
                <Col xs={12}>
                  <Row end="xs">
                    <div className="logo-hamburger">
                      <img src={logohamburger} alt={logohamburger} />
                    </div>
                  </Row>
                </Col>
              </Row>
            </Grid>
        </Jumbotron>
      </div>
    )
  }

}

export default HeroImage;
