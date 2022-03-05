import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";

import { useState } from "react";

export default function Sidebar({
  categories,
  tags,
  colors,
  fetcher,
  imageType,
  setImageType,
  categoryType,
  setCategoryType,
  tagType,
  setTagType,
}) {
  //   const [imageType, setImageType] = useState("");
  const [colorNum, setColorNum] = useState("");

  return (
    <div>
      <div className="w-full bg-white rounded-2xl px-5 py-2 my-5">
        <div className="flex flex-wrap  my-3">
          <div className="text-lg text-gray-800 font-bold">Image type</div>
          {imageType === "" ? (
            ""
          ) : (
            <div
              className="mx-2 px-2 p-0.5 bg-red-400 text-gray-100 rounded-xl"
              onClick={() => setImageType("")}
            >
              clear
            </div>
          )}
        </div>
        <div className="flex flex-wrap text-center my-2 text-sm">
          {imageType === "square" ? (
            <div className="w-16 h-16 bg-blue-200 mx-3 border-8 border-blue-400"></div>
          ) : (
            <div
              className="w-16 h-16 bg-gray-100 mx-3 border-8 border-gray-400"
              onClick={() => setImageType("square")}
            ></div>
          )}
          {imageType === "horizontal" ? (
            <div className="w-20 h-10 self-center bg-blue-200 mx-3 border-8 border-blue-400"></div>
          ) : (
            <div
              className="w-20 h-10 self-center bg-gray-100 mx-3 border-8 border-gray-400"
              onClick={() => setImageType("horizontal")}
            ></div>
          )}
          {imageType === "vertical" ? (
            <div className="w-12 h-16 bg-blue-200 mx-3 border-8 border-blue-400"></div>
          ) : (
            <div
              className="w-12 h-16 bg-gray-100 mx-3 border-8 border-gray-400"
              onClick={() => setImageType("vertical")}
            ></div>
          )}
        </div>
      </div>
      <div className="w-full bg-white rounded-2xl px-5 py-2 my-5">
        <div className="text-lg text-gray-800 font-bold my-3">Color</div>
        <div className="flex flex-wrap my-2 text-sm">
          {colors.results.map((color) => (
            <div
              key={color.id}
              className={classnames("w-10", "h-10", "mx-1", "bg-gray-200")}
            ></div>
          ))}
        </div>
      </div>

      <div className="w-full bg-white rounded-2xl px-5 py-2">
        <div className="flex flex-wrap  my-3">
          <div className="text-lg text-gray-800 font-bold">Category</div>
          {categoryType.id === "" ? (
            ""
          ) : (
            <div
              className="mx-2 px-2 p-0.5 bg-red-400 text-gray-100 rounded-xl"
              onClick={() => setCategoryType({ id: "", name: "" })}
            >
              clear
            </div>
          )}
        </div>
        <div
          className="flex flex-wrap my-2 text-sm
        "
        >
          {categories.results.map((category) =>
            category.id === categoryType.id ? (
              <div
                key={category.id}
                className="mx-1 px-3 my-1 py-1 rounded-xl bg-blue-400 text-white"
              >
                {category.name}
              </div>
            ) : (
              <div
                key={category.id}
                className="mx-1 px-3 my-1 py-1 rounded-xl bg-gray-200"
                onClick={() =>
                  setCategoryType({ id: category.id, name: category.name })
                }
              >
                {category.name}
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-full bg-white rounded-2xl px-5 py-2 my-5">
        <div className="flex flex-wrap my-3">
          <div className="text-lg text-gray-800 font-bold">Tag</div>
          {tagType.id === "" ? (
            ""
          ) : (
            <div
              className="mx-2 px-2 p-0.5 bg-red-400 text-gray-100 rounded-xl"
              onClick={() => setTagType({ id: "", name: "" })}
            >
              clear
            </div>
          )}
        </div>
        <div className="flex flex-wrap my-2 text-xs">
          {tags.results.map((tag) =>
            tag.id === tagType.id ? (
              <div
                className="mx-1 px-3 my-1 py-1 bg-blue-400 text-white rounded-xl"
                key={tag.id}
              >
                #{tag.name}
              </div>
            ) : (
              <div
                className="mx-1 px-3 my-1 py-1 bg-gray-200 rounded-xl"
                key={tag.id}
                onClick={() => setTagType({ id: tag.id, name: tag.name })}
              >
                #{tag.name}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
