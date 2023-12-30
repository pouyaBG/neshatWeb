"use client";
import * as React from "react";

import Fancybox from "./Fancybox";

export default function App() {
  return (
    <div className="">
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <a data-fancybox="gallery" href="/img/r1.png">
          <img
            alt=""
            src="/img/r1.png"
            width="400"
            height="250"
            className="rounded-xl max-h-[260px] object-cover"
          />
        </a>
        <a data-fancybox="gallery" href="/img/r2.png">
          <img
            alt=""
            src="/img/r2.png"
            width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
        <a data-fancybox="gallery" href="/img/r3.png">
          <img
            alt=""
            src="/img/r3.png"
            width="400"
            height="250"
            className="rounded-xl max-h-[260px]"
          />
        </a>
        <a data-fancybox="gallery" href="/img/r4.png">
          <img
            alt=""
            src="/img/r4.png"
            width="400"
            height="250"
            className="rounded-xl max-h-[260px] object-cover"
          />
        </a>
        <a data-fancybox="gallery" href="/img/r5.png">
          <img
            alt=""
            src="/img/r5.png"
            width="400"
            height="250"
            className="rounded-xl max-h-[260px] object-cover"
          />
        </a>
      </Fancybox>
    </div>
  );
}
