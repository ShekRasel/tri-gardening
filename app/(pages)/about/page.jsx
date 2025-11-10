import React from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import HeroSection from "../../../components/about.page-hero";
import AboutCard from "../../../components/cards/about.card";
import { aboutData } from "../../../data/about-data/data";
import { commitments } from "../../../data/commitment-data/data";
import GetInTouch from "../../../components/get.touch";

const AboutPage = () => {
  return (
    <div className="py-14 min-h-screen">
      <HeroSection />

      {/* team introducing */}
      <div className="mt-10 responsive py-8">
        <h1 className="text-primary font-semibold text-xl md:text-3xl text-center">
          Meet Our Gardening Experts
        </h1>
        <p className="mt-3 text-light-green text-center text-sm">
          Our passionate team of horticulturists and plant specialists brings
          years of combined experience to help your garden flourish
        </p>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 ">
          {aboutData.map((data, index) => (
            <AboutCard
              key={index}
              imageLink={data.imageLink}
              name={data.name}
              des={data.des}
              designation={data.designation}
            />
          ))}
        </div>
      </div>

      {/* commitment  */}
      <div className="bg-secondary responsive mt-10 pt-10">
        <h1 className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold text-center">
          Our Commitment to You
        </h1>
        <p className="mt-2 text-primary text-sm text-center">
          We are dedicated to providing you with the knowledge, tools, and
          support needed for gardening success
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className={` py-7 px-5 lg:px-3 xl:px-6 bg-secondary rounded-xl space-y-2 xl:space-y-4 flex flex-col items-center`}
            >
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
                <Image
                  src={commitment.logoLink}
                  alt="logo"
                  height={100}
                  width={40}
                />
              </div>
              <h1 className="text-black text-center font-semibold">
                {commitment.name}
              </h1>
              <p className="text-center text-sm mt-1">{commitment.des}</p>
            </div>
          ))}
        </div>
      </div>

      {/* joining community */}
      <div className="bg-light-green responsive py-10 text-white">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
          Join Our TriGardening Community
        </h1>
        <p className="mt-2 text-sm text-center lg:px-14">
          We are dedicated to providing you with the knowledge, tools, and
          support needed for gardening success
        </p>

        <div className="mt-10 flex justify-between flex-col md:flex-row gap-4 md:gap-3 lg:gap-8">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex gap-3">
              <Image
                src={"/logos/community-f.png"}
                height={30}
                width={40}
                alt="image"
                className="h-12"
              />
              <div>
                <h1 className="font-semibold">Facebook Community Forum</h1>
                <p className="text-xs lg:text-sm text-light-white">
                  Connect with 10,000+ gardeners across the Bangladesh. Ask
                  questions, share tips, and celebrate your growing journey.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Image
                src={"/logos/community-youtube.png"}
                height={30}
                width={40}
                alt="image"
                className="h-12"
              />
              <div>
                <h1 className="font-semibold">Trigardening Youtube Channel</h1>
                <p className=" text-xs lg:text-sm text-light-white">
                  Join us on YouTube for quick gardening tips, tricks, and
                  guides to grow smarter.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image
              src={"/images/about-hero-image.jpg"}
              height={300}
              width={300}
              alt="image"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* about data form */}
      <GetInTouch />
    </div>
  );
};

export default AboutPage;
