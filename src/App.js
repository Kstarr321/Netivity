import React from "react";
// import "../public/team.svg";
import sitting from "./images/sitting.svg";
// import working from "./images/working.svg";
import team from "./images/team.svg";
import code from "./images/code.svg";
// import backdrop from "./images/backdrop.jpg";

import NavBar from "./components/NavBar";

import {
  Card,
  CardImg,
  // CardText,
  CardBody,
  CardTitle,
  // CardSubtitle,
  Button
} from "reactstrap";
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

// const Header = styled.div`
//   /* border-style: solid;
//   border-color: black; */
//   height: 50%;
//   display: grid;
//   grid-template-columns: 1fr 0.8fr 1fr;

//   .bar {
//     display: flex;
//     align-items: center;
//     div {
//       width: 100%;
//       height: 27%;
//       border-top: 3px solid black;
//       border-bottom: 3px solid black;
//     }
//   }

//   div {
//     /* border-style: solid;
//     border-color: black; */
//   }

//   .profile_picture {
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-image: url("https://media.licdn.com/dms/image/C4E03AQE7PqyMLY5XSw/profile-displayphoto-shrink_800_800/0?e=1574899200&v=beta&t=CZdZEkJUNpZiQxG0hKRFiYSTRIXNUPdbOwJLABTEeZc");
//     border-radius: 40%;
//   }
// `;

const Body = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  /* height: 100% flex-direction: column; */
  /* justify-content: space-around; */ /* height: 50%; */
  /* border-style: solid;
  border-color: blue; */
  .imaggio {
    max-height: 200px;
    max-width: 100%;
    background-color: rgb(0, 38, 90);
    color: white;
    /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuelmpcqtnkV40iphVE58tl357jbL44-k-K-3RoEm3vNjvuL--Q"); */
  }

  .splash_page {
    /* background-image: url("/Users/kstarr/Development/moms_house/src/images/Background.jpg"); */
    /* border-style: solid;
    border-color: black; */
    /* max-height: 97vh; */
    background-repeat: no-repeat;
    background-size: cover;
    /* object-fit: fill; */
    /* background-color: rgb(222, 222, 222); */
    background-image: url("https://static.vecteezy.com/system/resources/previews/000/207/756/original/people-drinking-in-a-busy-bar-vector.jpg");
    .backdrop {
      max-width: 100%;
      height: 93vh;
      /* object-fit: cover; */
    }
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <Main>
        <NavBar></NavBar>
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
                {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                {/* <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText> */}
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
                {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                {/* <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText> */}
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
                {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                {/* <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText> */}
                <Button color="info">More</Button>
              </CardBody>
            </Card>
          </div>
          <div className="splash_page">
            {/* <img src={`${backdrop}`} alt="hello" className="backdrop"></img> */}
          </div>
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
