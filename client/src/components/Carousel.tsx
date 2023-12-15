import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export default function CarouselImg(): JSX.Element {
  return (
    <div id="back">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          height: '100vh',
          marginTop: '50px',
        }}
      >
        <Carousel id="carouselExampleControls" style={{ width: '900px', height: '600px' }}>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100 object-fit-cover"
              src="https://hi-news.ru/wp-content/uploads/2016/12/kids-computer-2.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100 object-fit-cover"
              src="https://hi-news.ru/wp-content/uploads/2016/12/kids-computer-2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 h-100 object-fit-cover"
              src="https://cdnn1.inosmi.ru/img/21003/38/210033896_0:0:1024:702_1240x0_80_0_0_759d60cbafef6cc2ee4632e28d52eff6.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
