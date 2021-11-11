import React, { Component } from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";

export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    };
    // this.click = this.click.bind(this);
  }
  // click() {
  //   const { reviews } = this.state;
  //   this.setState({
  //     reviews:
  //       reviews.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
  //   });
  // }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      reviewsToShow: 1,
      reviewsToScroll: 1
    };
    return (
      <Box>
        <Slider {...settings}>
          {this.state.reviews.map(function (review) {
            return (
              <Container>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '550px' }}>

                  <div style={{ width: 600, padding: '20px', backgroundColor: 'white' }}>

                      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>

                        <div style={{ width: '60px' }}>
                          <img style={{ width: '100%', borderRadius: '50%', border: '3px solid #EB6D2F' }} src={review.image} alt="" />
                        </div>

                        <div>
                          <Typography>Rating: {review.rating}</Typography>

                          <Typography sx={{fontFamily: "'Signika', sans-serif", fontWeight: 800, color: '#5A3733'}} variant="h5" component="div">
                            {review.name}
                          </Typography>

                          <Typography sx={{fontFamily: "'Signika', sans-serif", fontWeight: 600, color: '#EB6D2F'}} variant="h6" component="div">
                            {review.profession}
                          </Typography>
                        </div>

                      </div>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {review.comment}
                      </Typography>


                  </div>

                </div>
              </Container>
            );
          })}
        </Slider>
      </Box >
    );
  }
}