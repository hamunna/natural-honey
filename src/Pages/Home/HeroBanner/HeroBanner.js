import { Button, Container } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import slider1 from '../../../images/slider-1.png';
import slider2 from '../../../images/slider-2.png';
import slider3 from '../../../images/slider-3.png';


class HeroBanner extends Component {
	render() {
		const settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			speed: 2000,
			autoplaySpeed: 3000,
		};

		const heroBtn = {
			backgroundColor: '#EB6D2F',
			px: 6,
			py: 2,
			fontWeight: 700,
			borderRadius: '50px',
			'&:hover': {
				backgroundColor: '#5A3733',
				boxShadow: 'none',
			}
		}
		return (
			<Container>
				<Slider {...settings}>

					{/* Slider-1 */}
					<div>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '550px' }}>


							<div style={{ fontFamily: "'Signika', sans-serif" }}>
								<h1 style={{ color: '#EB6D2F', fontSize: '72px', lineHeight: '14px' }}>Natural Honey</h1>
								<h2 style={{ color: '#5A3733', fontSize: '66px', lineHeight: '30px' }}>and beekeeping</h2>
								<p>But I must explain to you how all this mistaken idea of denouncing pleasure and
									<br />
									praising pain was born and I will give you a complete the system</p>

								<Button sx={heroBtn} variant="contained">Buy Now</Button>
							</div>

							<img src={slider1} alt="" />

						</div>
					</div>

					{/* Slider-2 */}
					<div>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '550px' }}>


							<div style={{ fontFamily: "'Signika', sans-serif" }}>
								<h1 style={{ color: '#EB6D2F', fontSize: '72px', lineHeight: '14px' }}>Natural Honey</h1>
								<h2 style={{ color: '#5A3733', fontSize: '66px', lineHeight: '30px' }}>and beekeeping</h2>
								<p>But I must explain to you how all this mistaken idea of denouncing pleasure and
									<br />
									praising pain was born and I will give you a complete the system</p>

								<Button sx={heroBtn} variant="contained">Buy Now</Button>
							</div>

							<img src={slider2} alt="" />

						</div>
					</div>

					{/* Slider-3 */}
					<div>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '500px' }}>


							<div style={{ fontFamily: "'Signika', sans-serif" }}>
								<h1 style={{ color: '#EB6D2F', fontSize: '72px', lineHeight: '14px' }}>Natural Honey</h1>
								<h2 style={{ color: '#5A3733', fontSize: '66px', lineHeight: '30px' }}>and beekeeping</h2>
								<p>But I must explain to you how all this mistaken idea of denouncing pleasure and
									<br />
									praising pain was born and I will give you a complete the system</p>

								<Button sx={heroBtn} variant="contained">Buy Now</Button>
							</div>

							<img src={slider3} alt="" />

						</div>
					</div>

				</Slider>
			</Container>
		);
	}
};

export default HeroBanner;