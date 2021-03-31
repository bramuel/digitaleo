import React from "react";
import { Typography, Row, Col, Card, Image, Carousel, Statistic } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import unable from "./unable.jpeg";
import me from "./me.JPG";
import pp from "./pp.jpg";

import "react-multi-carousel/lib/styles.css";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Navbar from "./components/Navbar";

const { Title, Text } = Typography;
const { Meta } = Card;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const items = [
  {
    src: "https://www.mtpplc.com/wp-content/uploads/apple-devices-800x702.jpg",
    title: "apple products",
    description: "mac, ipod",
  },
  {
    src:
      "data:image/jpeg;base64,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",
    title: "microsoft products",
    description: "windows,7,8.1,10",
  },
  {
    src:
      "data:image/jpeg;base64,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",
    title: "apple computers",
    description: "mac OSx",
  },
  {
    src:
      "data:image/jpeg;base64,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",
    title: "mouse",
    description: "backlit mouse",
  },
  {
    src:
      "data:image/jpeg;base64,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",
    title: "dell laptop",
    description: "dell products",
  },
  {
    src:
      "https://i.roamcdn.net/hz/pi/listing-thumb-543w/9ff5315eb1318a0e41f0d0b48473fe23/-/horizon-files-prod/pi/picture/qwpqqwm/3430d47a2a5ecbad839cf2730cc688ee245b82d4.jpeg",
    title: "desktop",
    description: "core i3,i5,i9",
  },
  {
    src:
      "https://www.vitascientific.com/image/cache/data/VitaWeb/Samin/images/FunctionTable/ComputerTable-500x500.jpg",
    title: "movable computer PC",
    description: "office desk",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/61iAmGshpsL._AC_SY355_.jpg",
    title: "webcam",
    description: "webcam for sale",
  },
];

const services = [
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6hRuknDgxV_648HG4GKqFkHZ8rpRFf15EQ&usqp=CAU",
    title: "computer repair",
    description: "laptop, PC",
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywGiUBW5zH3BC35Suym2U-QF_a4Itt2bpHg&usqp=CAU",
    title: "computer repair",
    description: "all devices",
  },
  {
    src:
      "https://images.tmcnet.com/tmc/misc/articles/image/2018-sep/5733277494-server-rack-data-center-small.jpg",
    title: "networking",
    description: "LAN WAN networking",
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPSfn4V1hOXyvbG01WTqLjQmg-HwEMPiWubDyqqhq7_kyMgYKVTRLezZAfSA6BfL6K68&usqp=CAU",
    title: "CCTV installation",
    description: "premises",
  },
];

const renderServices = services.map((service) => {
  return (
    <Col key={service.title}>
      <Image
        src={service.src}
        title={service.title}
        alt="dsjfhjskf"
        style={{ width: "200px" }}
      />
    </Col>
  );
});

const clients = [
  {
    img: me,
    msg: "joram's  utility",
    info: "Best tech solution, experience amazing",
  },
  {
    img: pp,
    msg: "Nvidia Chrome",
    info: "Revolutionary , experienced engineers",
  },
  {
    img: unable,
    msg: "Aga Khan",
    info: "Ontime software delivery,experience",
  },
];

const things = [
  {
    img: me,
  },
  {
    img: unable,
  },
  {
    img: pp,
  },
];

const renderThings = things.map((thing) => {
  return (
    <>
      <h3 style={contentStyle} key={thing.img}>
        <img
          alt="jdsklfhsdjf"
          style={{ width: "200px", borderRadius: "10px" }}
          src={thing.img}
        />
      </h3>
    </>
  );
});

const renderClients = clients.map((client) => {
  return (
    <>
      <Col key={client.img}>
        <Image
          style={{ borderRadius: "500px", width: "200px" }}
          src={client.img}
          alt="an image"
        />
        <Title level={4} style={{ textAlign: "center" }}>
          {client.msg}
        </Title>
        <Text>{client.info}</Text>
      </Col>
    </>
  );
});

const renderCarousel = items.map((item) => {
  return (
    <Col key={item.src}>
      <Card
        style={{ border: "0px" }}
        cover={<Image width={200} src={item.src} />}
      >
        <Meta title={item.title} description={item.description} />
      </Card>
    </Col>
  );
});

export default function App() {
  return (
    <>
      <Navbar />

      <About />

      <Services renderServices={renderServices} />

      <Products renderCarousel={renderCarousel} />

      <div style={{ backgroundColor: "teal", padding: "2rem" }}>
        <Title
          level={2}
          style={{
            textAlign: "center",
            color: "#E75480",
            fontFamily: "Stylish,sans-serif",
          }}
        >
          Community support
        </Title>
        <div className="curved" style={{ textAlign: "center" }}>
          <Row justify="center" align="middle">
            <Col md={16}>
              <Text
                style={{ fontFamily: "Montserrat,sans-serif", color: "white" }}
              >
                As a way of giving back to the community, we offer online free
                courses in software development. Interested people can take
                online courses for free.
                <br />
                We also mentored and encorouged students in primary, secondary
                and colledge to be part of technology, and fosterd the
                establishment of STEM in secondary schools.
              </Text>
            </Col>
          </Row>
          <Row
            justify="space-around"
            align="middle"
            style={{ marginTop: "20px" }}
          >
            <Col>
              <Carousel autoplay style={{ width: "200px" }}>
                {renderThings}
              </Carousel>
            </Col>
          </Row>
          <br />
        </div>
      </div>

      <Title
        level={2}
        style={{
          textAlign: "center",
          fontFamily: "Stylish,sans-serif",
          color: "#E75480",
        }}
      >
        Clients
      </Title>
      <Row
        align="middle"
        justify="space-around"
        style={{ marginBottom: "1rem" }}
      >
        <Col>
          <Statistic value={1128} prefix={<LikeOutlined />} />
        </Col>
      </Row>

      <Row justify="space-around" align="middle">
        {renderClients}
      </Row>
      <div style={{ backgroundColor: "teal" }}>
        <div className="curved">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,288L48,282.7C96,277,192,267,288,224C384,181,480,107,576,90.7C672,75,768,117,864,133.3C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <Row justify="space-around" align="middle">
            <Col>
              <Title level={4}>Social Media</Title>
              <Text>
                facebook <br />
                twitter
                <br />
                instagram <br />
                youtube
              </Text>
            </Col>
            <Col>
              <Title level={4}>Products</Title>
              <Text>
                PC <br />
                laptop
                <br />
                keyboard
              </Text>
            </Col>
            <Col>
              <Title level={4}>Address</Title>
              <Text>
                Egessa Villa
                <br />
                jorammanoah1@gmail.com
                <br />
                +25479980846
              </Text>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
