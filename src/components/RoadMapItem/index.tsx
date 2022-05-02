import React from 'react';
// import useDeviceDetect from '../hooks/useDeviceDetect'

export interface RoadMap {
  title: string;
  subtitle: string;
  number: number;
}

export type RoadMapDatas = RoadMap[];

const RoadMapItem = (props: { total: number; data?: RoadMapDatas }) => {
  return (
    <>
      {props.data?.map((roadmap: RoadMap, idx: number) => (
        <div
          className="roadmap mb-20"
          key={idx}
          // style={{
          //   width: `${(1 / props.total) * 100}%`,
          // }}
        >
          <div className="w-full h-14 mb-6 flex flex-col justify-center	items-center	">
            <div className="text-center">{roadmap.title}</div>
            <div className=" text-center">{roadmap.subtitle}</div>
          </div>
          <div className="relative">
            <div style={{ height: 2, background: '#fff' }}></div>
            <div
              className="absolute"
              style={{
                color: '#000',
                borderRadius: '50%',
                background: '#fff',
                width: 24,
                height: 24,
                top: '50%',
                left: '50%',
                transform: ' translate(-50%,-50%)',
                textAlign: 'center',
              }}
            >
              {roadmap.number}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RoadMapItem;
