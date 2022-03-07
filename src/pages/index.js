import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
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
  const [colorType, setColorType] = useState({
    id: "",
    name: "",
  });
  const [tagType, setTagType] = useState({
    id: "",
    name: "",
  });

  const getKey = (pageIndex, previousPageData) => {
    const fetchUrl = `${fetchApiUrl}image/?`;

    let params = {
      page: pageIndex + 1,
      image_type: imageType,
      category: categoryType.id,
      color: colorType.id,
    };
    if (tagType.id !== "") {
      params.tag = tagType.id;
    }
    return fetchUrl + new URLSearchParams(params);
  };

  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  const banner_items = () => {
    let items = [];
    for (var i in data) {
      data[i].results.map((banner) => {
        items.push(
          <div key={banner.id} className="xl:w-1/4 lg:w-1/3 w-1/2">
            <Card image={banner.image} />
          </div>
        );
      });
    }
    console.log(items);
    return items;
  };

  return (
    <Layout title="Top">
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
            colorType={colorType}
            setColorType={setColorType}
          />
        </div>
        <div className="w-full lg:w-3/4 pl-5">
          <div className="flex flex-wrap">{banner_items()}</div>

          <button onClick={() => setSize(size + 1)}>Load More</button>
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
    revalidate: 3,
  };
}
