import {
  CheckCircledIcon,
  CheckIcon,
  SketchLogoIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import React, { useState } from "react";
import cardImage from "../assets/cardImage.png";
import Button from "./Button";
import Rating from "./Rating";
import Tag from "./Tag";

function HorizontalCard({ data, index }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col md:flex-row w-full p-4 relative bg-white">
      {data.bestChoice && (
        <div className="absolute flex flex-row gap-1 items-center bg-[#FF7724] top-0 left-0 text-white p-2 rounded-r">
          <span className="pt-px">
            <SketchLogoIcon />
          </span>
          <span>Best choice</span>
        </div>
      )}
      {data.bestValue && (
        <div className="absolute flex flex-row gap-1 items-center bg-[#FF7724] top-0 left-0 text-white p-2 rounded-r">
          <span className="pt-px">
            <SketchLogoIcon />
          </span>
          <span>Best Value</span>
        </div>
      )}
      <div className=" absolute bg-white rounded-full p-1 h-10 w-10 -left-4 text-center border border-[#E1E4E6] text-xl top-16 text-tcolor">
        {index}
      </div>
      <div className="p-4 flex flex-col justify-center text-tcolor gap-4 items-center min-w-48 w-full md:w-48 max-h-72">
        <img src={cardImage} alt="" className="object-scale-down h-full md:w-full" />
        <div>{data.name}</div>
      </div>
      <div className="py-8 text-[#4B5665]">
        <div className="">
          <span className="font-bold">{data.heading} - </span>
          <span>{data.description}</span>
        </div>
        {data.discount && 
        <div className="inline-block"><Tag>{data.discount}</Tag></div>
        }
        <div>
          <div className="font-bold mt-2">Main HighLights</div>
          <div className="ml-6 mr-6">
            <div>
              <span>[what you get]: </span>
              {data.highlights?.whatYouGet}
            </div>
            {showMore && (
              <div className="bg-[#FFF4ED] mt-4 rounded p-4 flex flex-col gap-2">
                {data.highlights?.review &&
                  data.highlights.review.map((e) => {
                    return (
                      <div className="">
                        <span className="mr-2 bg-white p-px px-1 rounded text-[#1B88F4]">
                          {e.rating}
                        </span>
                        <span>{e.message}</span>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
          {showMore && data.whyWeLoveIt &&
          <div className="mt-2">
            <div className="text-[#2C384A]">Why We Love It</div>
            <div>
              {data.whyWeLoveIt &&
                data.whyWeLoveIt.map((e) => (
                  <div className="flex flex-row gap-2 items-center mt-1">
                    <div className="bg-[#EBF5FF] rounded-full p-1">
                      <CheckIcon color="#0855A1" />
                    </div>
                    {e}
                  </div>
                ))}
            </div>
          </div>
              }
        </div>
        <button className="mt-4 text-blue-700" onClick={()=>{
          setShowMore((prev)=>!prev)
        }}>Show {!showMore ? <>More</> : <>Less</>}</button>
      </div>
      <div className="flex flex-col justify-between items-center min-w-48">
        <Rating rating={data.rating} />
        <Button color="bg-blue-500" text="text-white" style="rounded-xl w-full  p-4 ">
          View
        </Button>
      </div>
    </div>
  );
}

export default HorizontalCard;
