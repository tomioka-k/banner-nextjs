import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Card({ image }) {
  return (
    <section className="px-2 py-2">
      <figure className="bg-gray-50 rounded-3xl">
        <Zoom zoomMargin={50}>
          <Image
            className="rounded-2xl justify-items-center"
            src={image}
            width={350}
            height={350}
            objectFit="contain"
          />
        </Zoom>
      </figure>
    </section>
  );
}
