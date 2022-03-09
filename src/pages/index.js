import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import useSWRInfinite from "swr/infinite";
import axios from "axios";

import ReactLoading from "react-loading";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import {
  loadImages,
  loadImageCount,
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

export default function Home({
  images,
  imageCounts,
  categories,
  tags,
  colors,
}) {
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

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher, {
    initialData: images,
  });

  const banner_items = () => {
    let items = [];
    for (var i in data) {
      data[i].results.map((banner) => {
        items.push(
          <div key={banner.id} className="xl:w-1/5 lg:w-1/4 w-1/3">
            <Card image={banner.image} />
          </div>
        );
      });
    }
    return items;
  };

  const hasMore = data && data[size - 1] && data[size - 1].next === null;
  const isCount = data && data[size - 1] && data[size - 1].count === 0;

  return (
    <Layout title="Top">
      <div className="container flex  py-10 mx-auto">
        <div className="w-full  xl:w-1/4 lg:w-2/5 py-3 hidden md:block">
          <div className="sticky top-9">
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
              imageCounts={imageCounts}
            />
          </div>
        </div>
        <div className="w-full xl:w-3/4 lg:w-3/5 md:1/4 pl-5">
          {isCount ? (
            <div className="flex justify-center py-12 text-5xl text-gray-700">
              Not Found
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-wrap">{banner_items()}</div>
          {!hasMore && data ? (
            <div className="w-full text-center">
              <button
                className="text-white bg-blue-400 rounded-3xl px-16 py-1.5 my-9 hover:bg-blue-500"
                onClick={() => setSize(size + 1)}
              >
                See More
              </button>
            </div>
          ) : (
            ""
          )}
          {!data ? (
            <div className="flex justify-center py-5">
              <ReactLoading type="cylon" width={100} />
            </div>
          ) : (
            ""
          )}
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
  const imageCounts = await loadImageCount();

  return {
    props: {
      images,
      imageCounts,
      categories,
      tags,
      colors,
    },
    revalidate: 60,
  };
}
