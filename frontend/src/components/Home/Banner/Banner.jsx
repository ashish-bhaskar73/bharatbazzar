import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import gadgetSale from '../../../assets/images/Banners/gadget-sale.jpg';
// import kitchenSale from '../../../assets/images/Banners/kitchen-sale.jpg';
import banner1 from '../../../assets/images/Banners/banner1.jpeg';
import banner2 from '../../../assets/images/Banners/banner2.jpeg';
// import fashionSale from '../../../assets/images/Banners/fashionsale.jpg';
// import oppo from '../../../assets/images/Banners/oppo-reno7.webp';

export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  )
}

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  )
}

const Banner = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  const banners = [ banner1, banner2];

  return (
    <>
      <section className="h-full sm:h-42 w-full rounded-sm shadow relative overflow-hidden">
        <Slider {...settings}>
          {banners.map((el, i) => (
            <img draggable="false" className="h-44 sm:h-full w-full object-cover" src={el} alt="banner" key={i} />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
