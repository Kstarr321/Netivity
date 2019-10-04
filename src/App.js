import React from "react";
import sitting from "./images/sitting.svg";
import team from "./images/team.svg";
import code from "./images/code.svg";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import styled from "styled-components";

const Main = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  .title {
    font-size: 28px;
    text-align: center;
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  height: 100vh;
  .imaggio {
    max-height: 218px;
    max-width: 100%;
    /* border-top: 1px solid white; */
    /* margin-top: 0.2px; */
    /* background-color: rgb(0, 38, 90); */
    background-color: rgb(222, 222, 222);
    color: white;
  }

  .splash_page {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-63-dsc37345479-paint_2.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1200&s=90be6e2a65584ff3499a425e2ee10117");
    .backdrop {
      max-width: 100%;
      height: 93vh;
    }
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <Main>
        {/* <NavBar></NavBar> */}
        <div></div>
        <Body>
          <div>
            <Card>
              <CardImg
                top
                width="100%"
                src={`${code}`}
                alt="Card image cap"
                className="imaggio"
              />
              <CardBody className="imaggio">
                <CardTitle className="title">IT Staffing Solutions</CardTitle>
                <Button color="info">More</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src={`${team}`}
                alt="Card image cap"
                className="imaggio"
              />
              <CardBody className="imaggio">
                <CardTitle className="title">People First Mindset</CardTitle>

                <Button color="info">More</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                height="50%"
                src={`${sitting}`}
                alt="Card image cap"
                className="imaggio"
              />
              <CardBody className="imaggio">
                <CardTitle className="title">Meet the Owner</CardTitle>
                <Button color="info">More</Button>
              </CardBody>
            </Card>
          </div>
          <div className="splash_page"></div>
        </Body>
      </Main>
    );
  }
}

//https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-9-jumping_sunset-b_0.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1200&s=7ec2811582b1364580ab3cbcfa1a027d
//https://d3ertfc829vzop.cloudfront.net/-/media/Tauck/Collection/Hero-Images/Collection_SmallGroups_banner.jpg?h=817&la=en&w=1400&rev=7cb6be3b04eb499d98c416f9e7c6d8fe&hash=5EAF0C9351E4DDA8E9787CB8734138635F37F315
//https://www.incimages.com/uploaded_files/image/1940x900/GettyImages-475158519-1_381354.jpg
//https://static.vecteezy.com/system/resources/previews/000/125/547/original/people-drinking-silhouette-vector.jpg
//https://static.vecteezy.com/system/resources/previews/000/207/756/original/people-drinking-in-a-busy-bar-vector.jpg
//https://library.kissclipart.com/20190223/cyw/kissclipart-business-meeting-illustration-clipart-meeting-busi-f343dc9041848485.png
