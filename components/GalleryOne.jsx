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
        <a data-fancybox="gallery" href="/img/img.png">
          <img
            alt=""
            src="/img/img.png"
            width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
        <a data-fancybox="gallery" href="/img/img2.png">
          <img
            alt=""
            src="/img/img2.png"
            width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
        <a data-fancybox="gallery" href="/img/img3.png">
          <img
            alt=""
            src="/img/img3.png"
            width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
        <a data-fancybox="gallery" href="/img/img4.png">
          <img
            alt=""
            src="/img/img4.png"
            width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
      </Fancybox>
    </div>
  );
}
