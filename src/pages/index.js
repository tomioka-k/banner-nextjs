import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import useSWR from "swr";
import axios from "axios";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import {
  loadImages,
  loadCategory,
  loadTags,
  loadCategories,
  loadColors,
} from "../lib/fetch-images";

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
const fetchApiUrl = process.env.NEXT_PUBLIC_RESTAPI_URL;

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Token ${apiToken}`,
      },
    })
    .then((res) => res.data);

export default function Home({ images, categories, tags, colors }) {
  const [imageType, setImageType] = useState("");
  const [categoryType, setCategoryType] = useState({
    id: "",
    name: "",
  });
  const [tagType, setTagType] = useState({
    id: "",
    name: "",
  });

  const fetchUrl =
    `${fetchApiUrl}image?` +
    new URLSearchParams({
      image_type: imageType,
      category: categoryType.id,
    });

  const { data: banner_list, error } = useSWR(fetchUrl, fetcher, {
    fallbackData: "",
  });

  return (
    <Layout title="bannaer-reference">
      <div className="container flex justify-around py-10 mx-auto">
        <div className="w-full lg:w-1/4 py-3">
          <Sidebar
            categories={categories}
            tags={tags}
            colors={colors}
            fetcher={fetcher}
            imageType={imageType}
            setImageType={setImageType}
            categoryType={categoryType}
            setCategoryType={setCategoryType}
            tagType={tagType}
            setTagType={setTagType}
          />
        </div>
        <div className="w-full lg:w-3/4 pl-5">
          <div className="flex flex-wrap">
            {banner_list
              ? banner_list.results.map((banner) => (
                  <div key={banner.id} className="xl:w-1/4 lg:w-1/3 w-1/2">
                    <Card image={banner.image} />
                  </div>
                ))
              : "a"}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const images = await loadImages();
  const categories = await loadCategories();
  const tags = await loadTags();
  const colors = await loadColors();

  return {
    props: {
      images,
      categories,
      tags,
      colors,
    },
  };
}