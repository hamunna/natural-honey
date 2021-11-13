import React, { Component } from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";
import CarouselItem from '../CarouselItem/CarouselItem';

export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    };
    // this.click = this.click.bind(this);
  }
  // click() {
  // const { reviews } = this.state;
  //   this.setState({
  //     reviews:
  //       reviews.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
  //   });
  // }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <Box>
        <Slider {...settings}>
          {this.state.reviews.map(review => ( <div><CarouselItem key={review._id} review={review} /></div>))}
        </Slider>
      </Box >
    );
  }
}