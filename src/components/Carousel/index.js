import React, {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useIsDesktop from '../../hooks/useIsDesktop';
import './index.scss';
import PropTypes from 'prop-types';

function Carousel({ data, renderItem, numItemsDesktop, numItemsMobile }) {
  const gap = 8;

  const slidesContainerRef = createRef();
  const [elRefs, setElRefs] = React.useState([]);

  React.useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) =>
      Array(data.length)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [data.length]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slidesContainer = slidesContainerRef.current;
    const el = elRefs[currentSlide]?.current;
    if (slidesContainer && el) {
      const posX = el.offsetLeft - slidesContainer.offsetLeft;
      slidesContainer.scrollTo(posX, 0);
    }
  }, [currentSlide]);

  const isDesktop = useIsDesktop();

  useEffect(() => {
    setCurrentSlide(
      Math.min(Math.max(currentSlide, 0), data.length - numItems)
    );
  }, [isDesktop]);

  const numItems = useMemo(
    () => (isDesktop ? numItemsDesktop : numItemsMobile),
    [isDesktop, numItemsMobile, numItemsDesktop]
  );

  const itemWidth = useMemo(() => {
    return `calc( (100% - ${gap * (numItems - 1)}px) / ${numItems})`;
  }, [numItemsDesktop, numItemsMobile, isDesktop]);

  const prev = useCallback(() => {
    setCurrentSlide(Math.max(currentSlide - 1, 0));
  }, [currentSlide]);

  const next = useCallback(() => {
    setCurrentSlide(Math.min(currentSlide + 1, data.length - numItems));
  }, [currentSlide, numItems]);

  return (
    <div>
      <div className='slider'>
        {currentSlide > 0 && (
          <a className='left-btn' onClick={prev}>
            <i className='mdi mdi-24px mdi-chevron-left'></i>
          </a>
        )}
        {currentSlide < data.length - numItems && (
          <a className='right-btn' onClick={next}>
            <i className='mdi mdi-24px mdi-chevron-right'></i>
          </a>
        )}
        <div ref={slidesContainerRef} className='slides'>
          {data.map((item, index) => (
            <div
              ref={elRefs[index]}
              key={index}
              style={{ marginRight: gap, width: itemWidth }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  numItemsDesktop: PropTypes.number.isRequired,
  numItemsMobile: PropTypes.number.isRequired,
};

export default Carousel;
