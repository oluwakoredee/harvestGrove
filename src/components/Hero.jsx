/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./hero.css";


const Hero = () => {
  return (
    <div className="mt-16">
      <div className="relative ">
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1720184797/HarvestGrove/Subtract_4_no4rh9.png"
          alt=""
          className="hidden xl:flex px-3"
        />
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1720184145/HarvestGrove/Subtract_dbhomq.png"
          alt=""
          className=" xl:hidden"
        />
        <h1 className="absolute text-[36px]  left-4 roboto-regular top-[-9px] w-[90%] md:text-[74px] md:w-[95%]  xl:top-[-20px] xl:left-[400px] xl:w-[60%]">
          Nurturing Nature, Harvesting Excellence
        </h1>
        <p className="absolute w-[82%] left-8 text-[14px] top-[120px] text-[#000000B2]  md:text-[16px] md:w-[50%] md:top-[270px] md:left-[80px] xl:w-[40%] xl:left-[640px] xl:top-[230px]">
          At HarvestGrove, we are passionate about agriculture and committed to
          providing the highest quality produce and services to our customers.
          With a legacy of farming excellence spanning 10 years,{" "}
        </p>
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1720185262/HarvestGrove/Frame_18535_vu2qtd.png"
          className="w-[48%] absolute top-[220px] left-[170px] md:left-[300px] md:top-[420px]  xl:w-[30%] xl:left-[890px] xl:top-[330px] "
          alt=""
        />
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1720185123/HarvestGrove/Frame_3_f3kvrm.png"
          alt=""
          className=" w-[40%] z-10 top-[400px] left-5 absolute md:w-[40%] md:top-[700px] md:left-8 xl:w-[20%] xl:top-[330px] xl:left-14 "
        />
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1720185207/HarvestGrove/Group_6089_ikvsjs.png"
          alt=""
          className="w-[20%] absolute top-[650px] md:top-[1190px] md:w-[25%] md:left-40 xl:w-[9%] xl:top-[630px] xl:left-[500px] left-6"
        />
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1720185206/HarvestGrove/Group_6090_lyvvmv.png"
          alt=""
          className="w-[24%] absolute top-[680px] md:top-[1050px] md:w-[25%] md:left-[500px] xl:w-[9%] xl:top-[600px] xl:left-[1000px] left-[300px]"
        />
      </div>
      <div className="relative my-10 px-2  md:px-5 xl:p-20">
        {/* <p className="text-[24px] uppercase px-6 flex flex-col">
          Our journey began 2013,
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1720650981/HarvestGrove/happy-cheerful-african-american-farm-worker-holding-crate-full-local-eco-friendly-ripe-leafy-greens-from-sustainable-crop-harvest-entrepreneurial-bio-permaculture-greenhouse-farm_ohzpep.png"
            className="w-[25%]  "
            alt=""
          />
          when a group of dedicated farmers set out to create a farm{" "}
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1720650981/HarvestGrove/front-view-woman-carrying-harvest_1_gov9sy.png"
            alt=""
            className="w-[25%]" 
          />
          . that would not only yield bountiful harvests but also nourish the
          community.
        </p> */}
        <img src="https://res.cloudinary.com/demmasgzp/image/upload/v1720652674/HarvestGrove/Our_journey_began_2013_when_a_group_of_dedicated_farmers_set_out_to_create_a_farm_._that_would_not_only_yield_bountiful_harvests_but_also_nourish_the_community._1_vkcnus.png" className=" hidden md:flex px-4" alt="" />
        <img src="https://res.cloudinary.com/demmasgzp/image/upload/v1720652923/HarvestGrove/Group_6111_srirnp.png" className="flex md:hidden" alt="" />
        <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1720650981/HarvestGrove/happy-cheerful-african-american-farm-worker-holding-crate-full-local-eco-friendly-ripe-leafy-greens-from-sustainable-crop-harvest-entrepreneurial-bio-permaculture-greenhouse-farm_ohzpep.png"
            className="w-[18%] xl:w-[15%] hidden md:flex absolute top-[-5px] right-[255px] rounded-3xl xl:rounded-full xl:right-[480px] xl:top-[75px]"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1720650981/HarvestGrove/front-view-woman-carrying-harvest_1_gov9sy.png"
            alt=""
            className="w-[15%] xl:w-[11%] top-[75px] left-8 rounded-3xl absolute  xl:rounded-full xl:top-[220px] xl:left-[135px]  hidden md:flex" 
          />
      </div>
      <div>

      </div>
    </div>
  );
};

export default Hero;
