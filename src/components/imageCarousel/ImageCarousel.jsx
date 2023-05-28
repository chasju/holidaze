import Ratio from "react-bootstrap/Ratio";
import Carousel from "react-bootstrap/Carousel";
import placeholderImage from "../../../public/house.jpg";

const ImageCarousel = ({ data }) => {
  const onImageError = (e) => {
    e.target.src = placeholderImage.src;
  };

  return (
    <Carousel>
      {data?.media?.length ? (
        data?.media?.map((image, index) => {
          return (
            <Carousel.Item key={index}>
              <Ratio aspectRatio={"4x3"}>
                <img src={image} onError={onImageError} alt={data.name} style={{ objectFit: "cover" }} />
              </Ratio>
            </Carousel.Item>
          );
        })
      ) : (
        <Carousel.Item>
          <Ratio aspectRatio={"4x3"}>
            <img src={placeholderImage.src} onError={onImageError} alt={data.name} style={{ objectFit: "cover" }} />
          </Ratio>
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default ImageCarousel;
