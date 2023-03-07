import React from "react";
import Heading from "./Heading";

import { useQuery } from "react-query";

import { getTeam } from "@/utils/API";

const TeamSection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: "team",
    queryFn: getTeam,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return (
    <div className="pb-20 p-5 pt-16 bg-secondary-background-color">
      <Heading title="Unser Team" />

      <div className="flex flex-col gap-7 md:flex-row md:justify-center md:gap-16">
        {data?.map((member) => (
          <div className="flex flex-col justify-center align-middle">
            <img
              src={member.pictureUrl}
              alt="Sepp"
              className="rounded-full w-auto h-80 mx-auto mb-2"
            />
            <h1 className="text-2xl font-bold text-center ">{member.name}</h1>

            <p className="text-center font-latoRegular">{member.role}</p>

            {/* description */}
            {/* <p className="text-center font-latoRegular">{member.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
