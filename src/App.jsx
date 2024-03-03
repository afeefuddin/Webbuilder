import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import {
  CheckCircledIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import HorizontalCard from "./Components/HorizontalCard";
import VerticalCard from "./Components/VerticalCard";
import Button from "./Components/Button";
import Footer from "./Components/Footer";

function App() {
  const [path,setPath] = useState(["Home","Hosting for all", "Hosting","Hosting6","Hosting5"])
  const [data,setData] = useState([{
    heading : "WixPro 72-Inch Responsive Website Builder ",
    description : "Comprehensive Digital Platform Creation Tool, Streamlined design Interface for proffessional Websites and Online stores(Black/Blue)",
    highlights : {
      whatYouGet : 'Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
      review : [{
        rating : 9.1,
        message : "Great Builder "
      },
      {
        rating : 8.2,
        message : "Good "
      },
      {
        rating : 9.8,
        message : "Good"
      }]
    },
    bestChoice : true,
    rating : 9.8,
    name : "Builder"
  },{
    heading : "SiteCraft 68-Inch Ultimate Web Design Studio",
    description : "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    highlights : {
      whatYouGet : "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      review : [{
        rating : 9.1,
        message : "Good Description"
      },
      {
        rating : 8.2,
        message : "Good Description"
      },
      {
        rating : 9.8,
        message : "Good"
      }]
    },
    bestValue : true,
    rating : 9.5,
    name : "Builder"
  },{
    heading : "WixPro 72-Inch Responsive Website Builder ",
    description : "Comprehensive Digital Platform Creation Tool, Streamlined design Interface for proffessional Websites and Online stores(Black/Blue)",
    highlights : {
      whatYouGet : ' Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
      review : [{
        rating : 9.1,
        message : "Good Description"
      },
      {
        rating : 8.2,
        message : "Good Description"
      },
      {
        rating : 9.8,
        message : "Good"
      }]
    },
    rating : 9.3,
    name : "Builder"
  },{
    heading : "CDK Resposive Builder: ",
    description : "An extensive library of widgets and apps, and detailed step-by-step guides",
    highlights : {
      whatYouGet : "We are the leaders of the market we provide excellent quality webiste and our responsive builders helps you build production level code",
      review : [{
        rating : 9.9,
        message : "Building Responsive"
      },
      {
        rating : 8.9,
        message : "Cool"
      },
      {
        rating : 8.9,
        message : "Docs"
      }]
    },
    rating : 9.1,
    whyWeLoveIt : ["Documentation","Easy Use","Out of Box"],
    discount : "20% Off",
    name : "Builder"

  }])
  const [relatedDeals,setRelatedDeals] = useState([
    {
      heading : "Webbuilder 1",
      description : "Computer  Modern clasic with wix support",
      price : 49.96,
      discount : 20,
      limitedTime : true
    },
    {
      heading : "Webbuilder 1",
      description : "Computer  Modern clasic with wix support",
      price : 49.96,
      discount : 20,
      limitedTime : true,
    },
    {
      heading : "Webbuilder 1",
      description : "Computer  Modern clasic with wix support",
      price : 49.96,
      discount : 20,
      limitedTime : true
    }
  ])
  const [lastUpdated,setLastUpdated] = useState('February 22, 2020')
  return (
    <>
      <Navbar />
      <div className=" bg-[#fbfcfd] flex flex-col items-center px-4">
        <div className=" max-w-5xl w-full">
          <div className="text-4xl sm:text-5xl mt-6 text-[#2C384A] py-8 ">
            Best Website Builders in the US
          </div>
          <div className="h-px w-full block bg-[#E1E4E6]" />
          <div className="py-4 pl-2 text-[#4B5665] flex flex-row flex-wrap gap-4 grow">
            <div className="flex flex-row items-center gap-2 ">
              <CheckCircledIcon color="#626E79" />
              <span>Last Updated - {lastUpdated}</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <InfoCircledIcon color="#626E79" />
              <span>Advertising Disclosure</span>
            </div>
            <div className="flex flex-row items-center gap-2 ml-auto">
              <span>Top Relevant</span>
              <ChevronDownIcon color="#626E79" />
            </div>
          </div>
          <div className="h-px w-full block bg-[#E1E4E6]" />
          <div className="flex flex-row flex-wrap gap-4 mt-6 text-[#4B5665]">
            <div className="bg-white py-2 px-4 rounded-lg">Tools</div>
            <div className="bg-white py-2 px-4 rounded-lg">AWS Builder</div>
            <div className="bg-white py-2 px-4 rounded-lg">Start Build</div>
            <div className="bg-white py-2 px-4 rounded-lg">Build Supplies</div>
            <div className="bg-white py-2 px-4 rounded-lg">Tooling</div>
            <div className="bg-white py-2 px-4 rounded-lg">BlueHosting</div>
          </div>
          <div className="flex flex-row gap-2 items-center mt-8 flex-wrap">
            {path && path.map((e,index)=>{
                return (
                  <React.Fragment key={index}>
                    <div className="hover:underline hover:cursor-pointer">{e}</div>
                    {index+1 !== path.length && <ChevronRightIcon />}
                  </React.Fragment>
                )
            })}
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {data && data.map((e,index)=>{
              return (
                <HorizontalCard data={e} index={index+1} />
              )
            })}
          </div>
          <section className="mt-12">
                <div className="text-4xl text-[#2C384A]">Related Deals you might like for</div>
              <div className="flex flex-row flex-wrap md:flex-nowrap justify-around lg:gap-8 mt-8">
                {relatedDeals && relatedDeals.map((e)=>(
                  <>
                    <VerticalCard data={e} />
                  </>
                ))}
              </div>
          </section>
          <section className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-12 m-8">
            <div className="text-3xl text-[#5C6874] "> Signup and get special exclusive deals</div>
            <div className="flex flex-row h-12 items-center">
              <input type="text" className="w-3/4 lg:w-5/6 focus:outline focus:outline-1 h-8 md:h-12  p-4 " />
              <Button color= "bg-blue-400" text="text-white" style="rounded-l-none w-1/4 lg:w-1/6 p-1 md:p-2" >Signup</Button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
