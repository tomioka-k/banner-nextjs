import Image from "next/image";

export default function Card({ image }) {
  return (
    <section className="px-2 py-2">
      <figure className="bg-gray-50 rounded-3xl">
        <Image
          className="rounded-2xl justify-items-center"
          src={image}
          width={350}
          height={350}
          objectFit="contain"
        />
      </figure>
    </section>
  );
}
