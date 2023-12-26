"use client";
import * as React from "react";

import Fancybox from "./Fancybox";

export default function App() {
  return (
    <div>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
          <img
            alt=""
            src="https://lipsum.app/id/60/200x150"
            width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
        <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
          <img
            alt=""
            src="https://lipsum.app/id/61/200x150"
             width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
        <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
          <img
            alt=""
            src="https://lipsum.app/id/62/200x150"
             width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
        <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
          <img
            alt=""
            src="https://lipsum.app/id/63/200x150"
             width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
        <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
          <img
            alt=""
            src="https://lipsum.app/id/64/200x150"
             width="400"
            height="250"
            className="rounded-xl"
          />
        </a>
      </Fancybox>
    </div>
  );
}
