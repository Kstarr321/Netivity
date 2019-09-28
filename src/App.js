import React from "react";
// import "../public/team.svg";
import sitting from "./images/sitting.svg";
import working from "./images/working.svg";
import team from "./images/team.svg";
import backdrop from "./images/backdrop.jpg";

import NavBar from "./components/NavBar";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import styled from "styled-components";

const Main = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
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
  /* flex-direction: column; */
  /* justify-content: space-around; */
  /* height: 50%; */
  /* border-style: solid;
  border-color: blue; */
  .imaggio {
    max-height: 129px;
    max-width: 100%;
  }

  .splash_page {
    /* background-image: url("/Users/kstarr/Development/moms_house/src/images/Background.jpg"); */
    /* border-style: solid;
    border-color: black; */
    /* max-height: 97vh; */
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
                src={`${team}`}
                alt="Card image cap"
                className="imaggio"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src={`${working}`}
                alt="Card image cap"
                className="imaggio"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src={`${sitting}`}
                alt="Card image cap"
                className="imaggio"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div className="splash_page">
            <img src={`${backdrop}`} alt="hello" className="backdrop"></img>
          </div>
        </Body>
      </Main>
    );
  }
}
