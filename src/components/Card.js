import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Card({ image }) {
  return (
    <section className="px-2 py-2">
      <figure className="bg-white shadow rounded-md px-2.5 pt-2.5 pb-1">
        <Zoom zoomMargin={50} overlayBgColorEnd={" #EFF6FF"}>
          <Image src={image} width={1000} height={1000} objectFit="contain" />
        </Zoom>
      </figure>
    </section>
  );
}
