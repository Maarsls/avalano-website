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
    <div className="p-5 pt-16 pb-20 bg-secondary-background-color">
      <Heading title="Unser Team" />

      <div className="flex flex-col gap-7 md:flex-row md:justify-center md:gap-16">
        {data?.map((member) => (
          <div className="flex flex-col justify-center align-middle" key={member.name}>
            <img
              src={member.pictureUrl}
              alt="Sepp"
              className="w-auto mx-auto mb-2 rounded-full h-80"
            />
            <p className="text-2xl font-bold text-center ">{member.name}</p>

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
