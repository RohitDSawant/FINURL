import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import styles from "./../../CSS/homepage.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { instantLoan_carousel } from "../../Assets/Images/Partners_data/partners";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const InstantLoansCarousel = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const prefrEligible = useSelector(
    (state) => state.appReducer.NBC.prefr.eligible
  );
  const stashfinEligible = useSelector(
    (state) => state.appReducer.NBC.stashfin.eligible
  );

  const theme = useTheme();

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
      <Box
        sx={{ color: theme.palette.primary.dark }}
        id={styles.slick_prev}
        onClick={onClick}
      >
        <KeyboardArrowLeftIcon />
      </Box>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <Box
        sx={{ color: theme.palette.primary.dark }}
        id={styles.slick_next}
        onClick={onClick}
      >
        <KeyboardArrowRightIcon />
      </Box>
    );
  };

  const navigate = useNavigate();
  const Redirection = (path) => {
    if (isAuth) {
      const actual_path = path.split("/")[1];
      if (actual_path === "stashfin" || actual_path === "prefr") {
        if (stashfinEligible || prefrEligible) {
          navigate(`/${actual_path}/application`);
        } else navigate(`/${actual_path}/dedupe`);
      } else {
        const newTab = window.open(path, "_blank");
        newTab.focus();
      }
    } else {
      navigate("/authentication");
    }
  };

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
                <Box>
                  <img
                    src={partner.imageurl}
                    className={styles.carousel_img}
                    alt="partners"
                  />
                </Box>
                <Typography
                  textAlign={"center"}
                  mb={2}
                  fontWeight={600}
                  fontSize={"large"}
                  textTransform={"capitalize"}
                  variant="body2"
                >
                  {partner.name}
                </Typography>
                <Box display={"flex"} justifyContent={"space-evenly"}>
                  <Box>
                    <Typography
                      color={"gray"}
                      fontSize={"x-small"}
                      variant="body2"
                    >
                      Loan upto
                    </Typography>
                    <Typography variant="subtitle2" textAlign={"center"}>
                      {partner.loans}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      color={"gray"}
                      fontSize={"x-small"}
                      variant="subtitle2"
                      textAlign={"center"}
                    >
                      Min ROi
                    </Typography>
                    <Typography variant="subtitle2" textAlign={"center"}>
                      {partner.roi}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      color={"gray"}
                      fontSize={"x-small"}
                      variant="subtitle2"
                      textAlign={"center"}
                    >
                      Max Tenure
                    </Typography>
                    <Typography variant="subtitle2" textAlign={"center"}>
                      {partner.description}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  mb={2}
                  display={"flex"}
                  justifyContent={"space-evenly"}
                ></Box>
                <Button
                  sx={{ display: "block", margin: "auto" }}
                  onClick={() => {
                    Redirection(partner.path);
                  }}
                  id={styles.carousel_apply_btn}
                >
                  Apply Now
                </Button>
              </Box>
            );
          })}
      </Slider>
    </>
  );
};

export default InstantLoansCarousel;
