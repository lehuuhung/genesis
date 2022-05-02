import { Story, Meta } from '@storybook/react/types-6-0';
import Carousel from '.';

export default {
  title: 'Carousel',
  component: Carousel,
} as Meta;

export const Slide: Story = args => {
  return (
    <div className="bg-black">
      <Carousel rows={1} columns={1} showIndicators={false}>
        {[
          {
            url: 'https://i.insider.com/51364fb0eab8ea573000000d?width=1136&format=jpeg',
          },
          {
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pininfarina-battista-2020-1600-0c-1574803128.jpg?crop=1.00xw:0.669xh;0,0.145xh&resize=480:*',
          },
        ].map((item, idx) => (
          <div key={idx} style={{ height: 360 }}>
            <img src={item.url} height="100%" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
