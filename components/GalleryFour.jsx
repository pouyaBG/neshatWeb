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
        <a data-fancybox="gallery" href="/img/j1.png">
          <img
            alt=""
            src="/img/r2.png"
            width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
        <a data-fancybox="gallery" href="/img/j2.png">
          <img
            alt=""
            src="/img/j2.png"
            width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
      </Fancybox>
    </div>
  );
}
