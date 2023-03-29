import React from "react";
import { useQuery } from "react-query";

import { getAllMedia } from "@/utils/API";
import Heading from "./Heading";

function MediaSection() {
  const { data, isLoading, isError } = useQuery("media", getAllMedia);

  return (
    <section className="p-5 pt-16 pb-20 bg-primary-background-color">
      <Heading title="Neuigkeiten" />

      {/* TODO: Fix carousel to show first element too */}
      <div className="p-4 space-x-4 carousel carousel-center rounded-box ">
        {data?.map((media) => (
          <div className="carousel-item" key={media.headline}>
            <div className="flex flex-wrap justify-center">
              <div className="items-center shadow-md bg-secondary-background-color rounded-3xl w-80">
                <img
                  src={media.pictureUrl}
                  alt="Sepp"
                  //  dont stretch the image

                  className="w-full rounded-t-3xl"
                />
                <div className="p-12">
                  <p className="text-2xl font-bold text-center">
                    {media.headline}
                  </p>
                  <p
                    className="mt-5 text-center"
                    dangerouslySetInnerHTML={{ __html: media.shorttext }}
                  >
                    {/* {media.shorttext} */}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MediaSection;
