// import React, { Component } from 'react';
// import Slider from 'react-slick';


// class Testimonial extends Component {
// 	render() {
// 		const { image, name, comment } = this.props.review;

// 		const settings = {
// 			dots: true,
// 			infinite: true,
// 			speed: 500,
// 			reviewsToShow: 1,
// 			reviewsToScroll: 1
// 		}

// 		return (
// 			<Slider {...settings}>
// 				<div>
// 					<img src={image} alt="" />
// 				</div>

// 			</Slider>
// 		);
// 	}
// };

// export default Testimonial;








import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    };
    this.click = this.click.bind(this);
  }
  click() {
    const { reviews } = this.state;
    this.setState({
      reviews:
        reviews.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      reviewsToShow: 2,
      reviewsToScroll: 1
    };
    return (
      <Box>
        <Slider {...settings}>
          {this.state.reviews.map(function (review) {
            return (
              <Container>
                <Grid sx={{ mx: 'auto' }} item xs={2} sm={4} md={4}>

                  <Card sx={{width: 600, p: 5}}>
                    <CardContent>

                      <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                        
                        <Box style={{ width: '60px' }}>
                          <img style={{ width: '100%', borderRadius: '50%', border: '3px solid #EB6D2F' }} src={review.image} alt="" />
                        </Box>

                        <Box>
                          <Typography>Rating: {review.rating}</Typography>

                          <Typography variant="h6" gutterBottom component="div">
                            {review.name}
                          </Typography>

                          <Typography variant="subtitle1" gutterBottom component="div">
                            {review.profession}
                          </Typography>
                        </Box>

                      </Box>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {review.comment}
                      </Typography>


                    </CardContent>
                  </Card>

                </Grid>
              </Container>
            );
          })}
        </Slider>
      </Box >
    );
  }
}