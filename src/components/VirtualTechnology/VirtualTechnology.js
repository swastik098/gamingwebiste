import React from "react";
import Grid from "@mui/material/Grid";
import { virtualImage } from "../../utils/helper";
const VirtualTechnologyComponent = () => {
  return (
    <>
      <div>
        <Grid
          container
          spacing={2}
          // direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item sm={6} className="gamedev">
            {/* {virtualImage?.map((ele, index) => ( */}
              <div className="card-container">
                <Grid
                  item
                  lg={12}
                  xs={12}
                  direction="row"
                  className="innerClass"
                >
                  <div className="virtual">
                    {/* <img src={ele?.image} alt="img" /> */}
                    <img src="https://images.unsplash.com/photo-1490971774356-7fac993cc438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="img" />

                  </div>
                </Grid>
              </div>
            {/* ))} */}
          </Grid>
          <Grid item sm={6} className="mobGrid">
            <div className="virtual_content">
              <h2 className="heading">Virtual Technology</h2>
              <p className=" ml-5 mr-5" style={{ textAlign: "center" }}>
                We at Vault Games studio explore the world of virtual production
                and its impact on the entertainment industry.
                <br />
                <br />
                We visualize, capture, and create digital assets within a
                virtual environment, such as 3D models, textures, and
                animations. This technology enables us to make creative
                decisions on the spot, saving time and resources compared to
                traditional post-production methods.
                <br />
                <br />
                We specialize in real-time rendering, which generates
                high-quality visuals instantly. It allows filmmakers and game
                developers to see the virtual world in real-time, enabling
                immediate adjustments and experimentation. We work with
                real-time rendering engines like Unreal Engine and Unity, which
                have become industry standards, providing photorealistic
                graphics and advanced lighting effects.
                <br />
                <br />
                Motion capture technology also plays a vital role in our virtual
                production workflow. It captures the movements of actors and
                translates them into digital characters. Through specialized
                suits equipped with markers or facial recognition systems,
                performers' actions and expressions can be recorded and applied
                to digital avatars in real-time. This seamless integration of
                live-action and digital performances allows for more natural and
                dynamic character animations.
                <br />
                <br />
                At Vault Games studio, we accelerate the production process by
                enabling real-time visualization, reducing the need for lengthy
                post-production work. This results in shorter production
                schedules and faster turnaround times.
              </p>
            </div>
            {/* </div> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default VirtualTechnologyComponent;
