import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./../../CSS/homepage.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { instantLoan_carousel } from "../../Assets/Images/Partners_data/partners";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";


const InstantLoansCarousel = () => {
  const responsiveSettings = [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Box id={styles.slick_prev} onClick={onClick}>
        <KeyboardArrowLeftIcon />
      </Box>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <Box  id={styles.slick_next} onClick={onClick}>
        <KeyboardArrowRightIcon />
      </Box>
    );
  };

  const navigate = useNavigate()
  const Redirection = (path)=>{
    const actual_path = path.split('/')[1]
    navigate(`/${actual_path}/dedupe`);
  }

  return (
    <>
      <Slider
        dots={false}
        infinite={false}
        speed={500}
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
        responsive={responsiveSettings}
        className={styles.carousel_container}
      >
        {instantLoan_carousel &&
          instantLoan_carousel.map((partner, id) => {
            return (
              <Box key={id} id={styles.partner_box}>
                <img
                  src={partner.imageurl}
                  className={styles.carousel_img}
                  alt="partners"
                />
                <Typography textAlign={"center"} mb={2} fontWeight={600} fontSize={"large"} color={"primary"} textTransform={"capitalize"}>{partner.name}</Typography>
                <Box display={"flex"} justifyContent={"space-evenly"}>
                  <Typography color={"gray"} fontSize={"small"} variant="body2">
                    Loan upto
                  </Typography>
                  <Typography color={"gray"} fontSize={"small"} variant="body2">
                    Min ROi
                  </Typography>
                  <Typography color={"gray"} fontSize={"small"} variant="body2">
                    Max Tenure
                  </Typography>
                </Box>
                <Box mb={2} display={"flex"} justifyContent={"space-evenly"}>
                  <Typography variant="body2">{partner.loans}</Typography>
                  <Typography variant="body2">{partner.roi}</Typography>
                  <Typography variant="body2">{partner.description}</Typography>
                </Box>
                <Button onClick={() => {Redirection(partner.path)}} id={styles.carousel_apply_btn} >Apply Now</Button>
              </Box>
            );
          })}
      </Slider>
    </>
  );
};

export default InstantLoansCarousel;
