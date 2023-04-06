import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const SlideNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <RightOutlined
            style={{ fontSize: '48px', color: '#fff', fontWeight: '900', zIndex: '4500' }}
            onClick={onClick}
            className={className}
        />
    );
}

const SlidePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <LeftOutlined
            style={{ fontSize: '48px', color: '#fff', fontWeight: '900', zIndex: '4500' }}
            onClick={onClick}
            className={className}
        />
    );
}

export const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    adaptiveHeight: false,
    arrows: true,
    centerPadding: '10px',
    swipeToSlide: true,
    nextArrow: <SlideNextArrow />,
    prevArrow: <SlidePrevArrow />
};