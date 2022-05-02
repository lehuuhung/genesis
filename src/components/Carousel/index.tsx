import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import _ from 'lodash';
import Image from 'next/image';

import PrevArrow from '../../images/icons/prev.svg';
import NextArrow from '../../images/icons/next.svg';
import useDeviceDetect from '../../hooks/useDeviceDetect';
const renderArrowPrevMx =
  // eslint-disable-next-line react/display-name
  (display: boolean) => (onClickHandler: () => void) =>
    (
      <div onClick={onClickHandler} style={{ width: '24px' }} className={display ? 'block z-50 top-2/4 left-0 absolute' : 'hidden'}>
        <Image src={PrevArrow} alt="prev" width={'24px'} />
      </div>
    );
const renderArrowNextMx =
  // eslint-disable-next-line react/display-name
  (display: boolean) => (onClickHandler: () => void) => {
    return (
      <div onClick={onClickHandler} style={{ width: '24px' }} className={display ? 'block z-50 top-2/4 right-0 absolute' : 'hidden'}>
        <Image src={NextArrow} alt="next" width={24} />
      </div>
    );
  };

const Slide = (props: {
  rows?: number;
  columns: number;
  itemHeight?: number;
  mx?: number;
  showIndicators?: boolean;
  type?: string;
  children: React.ReactNodeArray;
}) => {
  const { rows = 1, columns, showIndicators = true, itemHeight } = props;
  // eslint-disable-next-line react/destructuring-assignment
  const pages = _.chunk(props.children, rows * columns).filter((p, idx) => p.length === rows * columns || idx === 0);
  const [selectPage, setSelectPage] = useState(0);
  const displayNextBtn = selectPage < pages.length - 1 && pages.length > 1;
  const displayPrevBtn = selectPage > 0 && pages.length > 1;
  const renderArrowNext = renderArrowNextMx(displayNextBtn);
  const renderArrowPrev = renderArrowPrevMx(displayPrevBtn);

  const setSelectedPage = (index: number) => {
    setSelectPage(index);
  };
  return (
    <React.Fragment>
      <div className="flex w-full carousel">
        <Carousel {...{ renderArrowPrev, renderArrowNext }} onChange={setSelectedPage}>
          {pages.map((page: any, index: number) => (
            <div key={index} className="">
              {page.map((item: any, indx: number) => (
                <div key={indx}>{item}</div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
};
export default Slide;
