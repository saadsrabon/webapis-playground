import React from 'react';

import { NotSupported } from 'components';

import run, { hasSupport } from '../../apis/intersection-observer';

function IntersectionObserver() {
  React.useEffect(() => {
    run.init();
  }, []);

  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div
      className="
        tw-flex
        tw-flex-col
        tw-items-center
      "
    >
      <h2> Scroll To See the image Animations</h2>
      <div
        id="space"
        className="
          tw-h-[50px]
          tw-mb-[50px]
        "
      />

      <h1
        className="
          tw-text-2xl
          tw-font-bold
          tw-mb-8
        "
      >
        Lazy Loading Images Demo
      </h1>

      <div
        className="
          tw-flex
          tw-flex-col
          tw-space-y-[50px]
          tw-items-center
        "
      >
        <div
          className="
            tw-flex
            tw-flex-col
            tw-items-center
          "
        >
          <img
            data-src="https://vondy-images.com/image-proxy?url=https://protoinfrastack.ivondy.com/media/2IH5BW6uYsXcPcTSRBeuYTv1WfD2MgimxWKc.png&water=true"
            alt="Image 1"
            className="
              tw-w-[100px]
              tw-h-[200px]
              tw-block
              tw-mx-auto
              tw-bg-gray-100
              tw-transition-all
              tw-duration-1000
              tw-ease-in-out
              tw-delay-200
            "
          />
        </div>

        <div
          className="
            tw-flex
            tw-flex-col
            tw-items-center
          "
        >
          <img
            data-src="https://vondy-images.com/image-proxy?url=https://protoinfrastack.ivondy.com/media/yLmXod1IIg15ELpgNQ23XunuK3nbnEyaXxcz.png&water=true"
            alt="Image 2"
            className="
              tw-w-[100px]
              tw-h-[200px]
              tw-block
              tw-mx-auto
              tw-bg-gray-100
              tw-transition-all
              tw-duration-1000
              tw-ease-in-out
              tw-delay-200
            "
          />
        </div>

        <div
          className="
            tw-flex
            tw-flex-col
            tw-items-center
          "
        >
          <img
            data-src="https://vondy-images.com/image-proxy?url=https://protoinfrastack.ivondy.com/media/OG3bgF9GOS4RKOjd52sGvdIPve0KzunDTnQQ.png&water=true"
            alt="Image 3"
            className="
              tw-w-[100px]
              tw-h-[200px]
              tw-block
              tw-mx-auto
              tw-bg-gray-100
              tw-transition-all
              tw-duration-1000
              tw-ease-in-out
              tw-delay-200
            "
          />
        </div>

        <div
          className="
            tw-flex
            tw-flex-col
            tw-items-center
          "
        >
          <img
            data-src="https://vondy-images.com/image-proxy?url=https://protoinfrastack.ivondy.com/media/2IH5BW6uYsXcPcTSRBeuYTv1WfD2MgimxWKc.png&water=true"
            alt="Image 4"
            className="
              tw-w-[100px]
              tw-h-[200px]
              tw-block
              tw-mx-auto
              tw-bg-gray-100
              tw-transition-all
              tw-duration-1000
              tw-ease-in-out
              tw-delay-200
            "
          />
        </div>
      </div>
    </div>
  );
}

export default IntersectionObserver;
