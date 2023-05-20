/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Paper from "@mui/material/Paper";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { images, mobImages, iosGames } from "../../utils/helper";
const GameDevelopment = () => {
  const [value, setValue] = useState(0);
  const myref = useRef(null);
  const myref2 = useRef(null);
  const myref3 = useRef(null);

  const handleitemOne = () => {
    myref?.current.scrollIntoView();
  };

  console.log(mobImages, "mobImages");

  const handleitemTwo = () => {
    myref2?.current.scrollIntoView();
  };

  // const handleitemThree = () => {
  //   myref3?.current.scrollIntoView();
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  return (
    <React.Fragment>
      <Grid
        container
        // spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        // sx={{ padding: "20px" }}
      >
        <Grid item sm={6} xs={12} md={6}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
              backgroundColor: "#00FFFF",
              color: "black",
              textAlign: "center",
              cursor: "pointer",
              // borderRadius: "30px",
            }}
            onClick={handleitemOne}
          >
            Mobile Development
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} md={6}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
              backgroundColor: "#00FFFF",
              color: "black",
              textAlign: "center",
              cursor: "pointer",
              // borderRadius: "30px",
            }}
            onClick={handleitemTwo}
          >
            Pc Game Development
          </Typography>
        </Grid>
        {/* <Grid item sm={4}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
              backgroundColor: "#ef4444",
              color: "white",
              textAlign: "center",
              cursor: "pointer",
              borderRadius: "30px",
            }}
            onClick={handleitemThree}
          >
            Technologies/Game Engines
          </Typography>
        </Grid> */}
      </Grid>
      {/* <Grid container>
        <Grid item sm={12}>
          <div>
            {images && images?.length > 0 ? (
              <ImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                // showThumbnails={true}
              />
            ) : null}
          </div>
        </Grid>
      </Grid> */}
      
      {images && images?.length > 0 ? (
        <>
          <div elevation={3} className="developmentDetails_Carousel_Outer">
            <Box className="developmentDetails_Carousel">
              <ImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={true}
              />
            </Box>
          </div>
          {/* <div className="caption">Pc Game Development</div> */}
        </>
      ) : null}

      <Grid container spacing={2} ref={myref}>
        <Grid item sm={4}></Grid>
        <Grid item sm={4}>
          <Typography
            sx={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
            // onClick={handleitemTwo}
          >
            Mobile Game Development{" "}
          </Typography>
        </Grid>
        <Grid item sm={4}></Grid>
      </Grid>

      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Android Games" {...a11yProps(0)} />

        <Tab label="ios Games" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          // style={{ minHeight: "100vh" }}
        >
          <Grid item lg={8} className="gamedev">
            {mobImages?.map((ele, index) => (
              <div className="card-container" key={index}>
                <Grid
                  item
                  lg={12}
                  xs={12}
                  direction="row"
                  className="innerClass"
                >
                  <Card className="card">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        // height=""
                        image={ele?.images}
                        alt="green iguana"
                        sx={{ height: "300px" }}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              </div>
            ))}
            {/* <div></div> */}
          </Grid>
          <Grid item lg={4}>
            {/* <div className="right"> */}
            <Card
              sx={{
                // maxWidth: 500,
                height: "670px",
                backgroundColor: "#00FFFF",
              }}
            >
              <CardActionArea>
                <CardContent>
                  {/* <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography> */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      color: "black",
                      marginTop: "20px",
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  >
                    Tech Stack Used Project Completion Client Review
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            {/* </div> */}
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item lg={8} className="gamedev">
            {iosGames?.map((ele, index) => (
              // <Card sx={{ maxWidth: 500, height: "500px", textAlign: "center" }}>
              //   <CardActionArea>
              //     <CardMedia
              //       component="img"
              //       // height=""
              //       image="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956886/Vault%20Games/piranha_wuxiz6.png"
              //       alt="green iguana"
              //       sx={{ height: "500px" }}
              //     />
              //   </CardActionArea>
              // </Card>
              <div className="card-container" key={index}>
                <Grid
                  item
                  lg={12}
                  xs={12}
                  direction="row"
                  className="innerClass"
                >
                  <Card className="card">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        // height=""
                        image={ele?.images}
                        alt="green iguana"
                        sx={{ height: "300px" }}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              </div>
            ))}
          </Grid>
          <Grid item lg={4}>
            <Card
              sx={{
                // maxWidth: 500,
                height: "670px",
                backgroundColor: "#00FFFF",
              }}
            >
              <CardActionArea>
                <CardContent>
                  {/* <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography> */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      color: "black",
                      marginTop: "20px",
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  >
                    Tech Stack Used Project Completion Client Review
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <Grid container spacing={2} ref={myref2}>
        <Grid item sm={4}></Grid>
        <Grid item sm={4}>
          <Typography
            sx={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
          >
            PC Game Development
          </Typography>
        </Grid>
        <Grid item sm={4}></Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>
          <Typography
            sx={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}
          >
            Like What You See? Discuss Your Ideas Today !
          </Typography>{" "}
        </Grid>
        <Grid item sm={2}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={2}></Grid>
        <Grid item sm={2}></Grid>
        <Grid item sm={4} sx={{ height: "100px", marginBottom: "20px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "bold",
              backgroundColor: "#00FFFF",
              color: "black",
              padding: "25px",
              borderRadius: "40px",
            }}
          >
            Talk To Us
          </Typography>{" "}
        </Grid>
        <Grid item sm={2}></Grid>
        <Grid item sm={2}></Grid>
      </Grid>

      {/* <Grid container spacing={2} sx={{ height: "300px", marginTop: "100px" }}>
        <Grid item sm={1}></Grid>
        <Grid
          item
          sm={6}
          sx={{
            backgroundColor: "#ef4444",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "bold",
              fontSize: "30px",
              // width: "200px",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            Unreal Engine PortFolio
          </Typography>
          <Typography
            sx={{
              fontSize: "bold",
              fontSize: "20px",
              // width: "200px",
              textAlign: "center",
            }}
          >
            Talk To Our Agent
          </Typography>
          <Button
            sx={{
              fontSize: "bold",
              fontSize: "25px",
              // width: "200px",
              textAlign: "center",
            }}
            variant="contained"
          >
            Book A Slot
          </Button>
        </Grid>
        <Grid item sm={6}>
          <Typography
            sx={{
              fontSize: "bold",
              fontSize: "25px",
              // width: "200px",
              textAlign: "center",
            }}
          >
            To Be Populated With Client Assets
          </Typography>
        </Grid>
        <Grid item sm={1}></Grid>
      </Grid> */}
      {/* <Grid container spacing={2} sx={{ height: "300px", marginTop: "-2px" }}>
        <Grid item sm={6}>
          <Typography
            sx={{
              fontSize: "bold",
              fontSize: "25px",
              // width: "200px",
              textAlign: "center",
            }}
          >
            To Be Populated With Client Assets
          </Typography>
        </Grid>
        <Grid
          item
          sm={6}
          sx={{
            backgroundColor: "#ef4444",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "bold",
              fontSize: "30px",
              // width: "200px",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            Unreal Engine PortFolio
          </Typography>
          <Typography
            sx={{
              fontSize: "bold",
              fontSize: "20px",
              // width: "200px",
              textAlign: "center",
            }}
          >
            Talk To Our Agent
          </Typography>
          <Button
            sx={{
              fontSize: "bold",
              fontSize: "25px",
              // width: "200px",
              textAlign: "center",
            }}
            variant="contained"
          >
            Book A Slot
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ height: "300px", marginTop: "-2px" }}>
        <Grid item sm={1}></Grid>
        <Grid
          item
          sm={6}
          sx={{
            backgroundColor: "#ef4444",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "bold",
              fontSize: "30px",
              // width: "200px",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            Unreal Engine PortFolio
          </Typography>
          <Typography
            sx={{
              fontSize: "bold",
              fontSize: "20px",
              // width: "200px",
              textAlign: "center",
            }}
          >
            Talk To Our Agent
          </Typography>
          <Button
            sx={{
              fontSize: "bold",
              fontSize: "25px",
              // width: "200px",
              textAlign: "center",
            }}
            variant="contained"
          >
            Book A Slot
          </Button>
        </Grid>
        <Grid item sm={6}>
          <Typography
            sx={{
              fontSize: "bold",
              fontSize: "25px",
              // width: "200px",
              textAlign: "center",
            }}
          >
            To Be Populated With Client Assets
          </Typography>
        </Grid>
        <Grid item sm={1}></Grid>
      </Grid> */}

      {/* <Typography ref={myref} sx={{ marginTop: "500px" }}>
        my game
      </Typography> */}
    </React.Fragment>
  );
};

export default GameDevelopment;
