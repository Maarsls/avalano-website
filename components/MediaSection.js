import React from "react";
import { useQuery } from "react-query";

import { getAllMedia } from "@/utils/API";
import Heading from "./Heading";

function MediaSection() {
  const { data, isLoading, isError } = useQuery("media", getAllMedia);

  return (
    <div className="pb-20 p-5 pt-16 bg-primary-background-color">
      <Heading title="Neuigkeiten" />

      {/* TODO: Fix carousel to show first element too */}
      <div className="carousel carousel-center p-4 space-x-4  rounded-box ">
        {data?.map((media) => (
          <div className="carousel-item" key={media.headline}>
            <div className="flex flex-wrap justify-center">
              <div className="bg-secondary-background-color shadow-md rounded-3xl w-80 ">
                <img
                  src={media.pictureUrl}
                  alt="Sepp"
                  //  dont stretch the image

                  className="w-full rounded-t-3xl"
                />
                <div className="p-12">
                  <h1 className="text-2xl font-bold text-center">
                    {media.headline}
                  </h1>
                  <p className="text-center">{media.shorttext}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default MediaSection;
