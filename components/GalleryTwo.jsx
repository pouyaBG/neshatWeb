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
        <a data-fancybox="gallery" href="/img/it1.png">
          <img
            alt=""
            src="/img/it1.png"
            width="400"
            height="250"
            className="rounded-xl max-h-[260px] object-cover"
          />
        </a>
        <a data-fancybox="gallery" href="/img/it2.png">
          <img
            alt=""
            src="/img/it2.png"
            width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
        <a data-fancybox="gallery" href="/img/it3.png">
          <img
            alt=""
            src="/img/it3.png"
            width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
        <a data-fancybox="gallery" href="/img/it4.png">
          <img
            alt=""
            src="/img/it4.png"
            width="400"
            height="250"
            className="rounded-xl max-h-[260px] object-cover"
          />
        </a>
        <a data-fancybox="gallery" href="/img/it5.png">
          <img
            alt=""
            src="/img/it5.png"
            width="400"
            height="250"
            className="rounded-xl max-h-[260px] object-cover"
          />
        </a>
      </Fancybox>
    </div>
  );
}
