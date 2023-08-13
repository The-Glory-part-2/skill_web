import Category from "../components/Category";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  ClockIcon,
  MapIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

const images = [
  "https://placehold.co/1200x400",
  "https://placehold.co/1200x400",
  "https://placehold.co/1200x400",
];

const events = [
  {
    title: "AI 학교 아이펠 : AI 첫 시작부터 논문 작성까지",
    date: "2022-01-01",
    time: "10:00 ~ 12:00",
    place: "모두의연구소",
    image: "https://placehold.co/600x400",
  },
  {
    title: "AI 학교 아이펠 : AI 첫 시작부터 논문 작성까지",
    date: "2022-01-01",
    time: "10:00 ~ 12:00",
    place: "모두의연구소",
    image: "https://placehold.co/600x400",
  },
  {
    title: "AI 학교 아이펠 : AI 첫 시작부터 논문 작성까지",
    date: "2022-01-01",
    time: "10:00 ~ 12:00",
    place: "모두의연구소",
    image: "https://placehold.co/600x400",
  },
];

export default function Home() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return current + " /  " + total;
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      loop: true,
      autoplay: {
        delay: 3000,
      },

      // These are new...
      injectStyles: [
        // swiper-bundle.css 덮어쓰기
        `
        :root {
          --swiper-theme-color: #fff;
        }
        
        
        .swiper {
          border-radius: 5px;
        }
        .swiper-button-next, .swiper-button-prev {
          padding: 0.8rem;
          width: 1rem;
          height: 1rem;
          color: #ffffff;
          background-color: #00000022;
        }
        .swiper-button-prev,
        .swiper-rtl .swiper-button-next {
          left: var(--swiper-navigation-sides-offset, 0px);
          right: auto;
        }
        .swiper-button-next,
        .swiper-rtl .swiper-button-prev {
          right: var(--swiper-navigation-sides-offset, 0px);
          left: auto;
        }
        .swiper-pagination-fraction {
          color: var(--swiper-pagination-fraction-color, inherit);
          font-size: 1px;
        }
  
        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className="h-fit p-6 md:p-8 lg:p-0 container mx-auto max-w-4xl relative">
      <div className="flex items-center gap-6 py-6">
        <div className="group text-slate-700 flex items-center gap-2 cursor-pointer select-none">
          <Bars3Icon className="h-5 w-5" />
          <span className="h-full">카테고리</span>

          <div className="absolute top-[3rem] py-6 z-20 left-0 hidden group-hover:block transition-all">
            <Category />
          </div>
        </div>

        <div className="flex text-gray-600 gap-6">
          <menu className="p-2">이번주 행사</menu>
          <menu className="p-2">온라인</menu>
          <menu className="p-2">오프라인</menu>
        </div>
      </div>

      {/* 캐러셀 */}
      <div className="relative">
        <div className="nav z-10 flex w-48 gap-2 items-center justify-center text-gray-500 absolute p-3 bg-white/70 rounded-full m-6 select-none shadow-md bottom-0 right-0">
          <div className="swiper-button-prev">
            <ChevronLeftIcon className="h-5 w-5" />
          </div>
          <div className="swiper-pagination flex-grow text-center" />
          <div className="swiper-button-next">
            <ChevronRightIcon className="h-5 w-5" />
          </div>
        </div>
        <swiper-container ref={swiperRef} init="false" className="mySwiper">
          {images.map((URL, index) => (
            <swiper-slide key={index} className="slide">
              <img alt="sample_file" src={URL} className="select-none" />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>



      

      <h2 className="text-lg font-bold mt-20 mb-4 text-slate-600">이번주 행사</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="">
            <Link to="board/:id" className="flex flex-col gap-2">
              <img src={event.image} alt="" className="rounded-md w-full" />
              <h1 className="text-lg font-bold text-slate-700">
                {event.title}
              </h1>
              <span className="">
                <p className="flex text-slate-500 gap-1 items-center">
                  <CalendarIcon className="w-4 h-4 text-slate-400" />{" "}
                  {event.date}
                </p>
                <p className="flex text-slate-500 gap-1 items-center">
                  <ClockIcon className="w-4 h-4 text-slate-400" /> {event.time}
                </p>
              </span>
              <p className="flex text-slate-500 gap-1 items-center">
                <MapIcon className="w-4 h-4 text-slate-400" /> {event.place}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold mt-20 mb-4 text-slate-600">온라인 행사</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="">
            <Link to="board/:id" className="flex flex-col gap-2">
              <img src={event.image} alt="" className="rounded-md w-full" />
              <h1 className="text-lg font-bold text-slate-700">
                {event.title}
              </h1>
              <span className="">
                <p className="flex text-slate-500 gap-1 items-center">
                  <CalendarIcon className="w-4 h-4 text-slate-400" />{" "}
                  {event.date}
                </p>
                <p className="flex text-slate-500 gap-1 items-center">
                  <ClockIcon className="w-4 h-4 text-slate-400" /> {event.time}
                </p>
              </span>
              <p className="flex text-slate-500 gap-1 items-center">
                <MapIcon className="w-4 h-4 text-slate-400" /> {event.place}
              </p>
            </Link>
          </div>
        ))}
      </div>


      <h2 className="text-lg font-bold mt-20 mb-4 text-slate-600">오프라인 행사</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="">
            <Link to="board/:id" className="flex flex-col gap-2">
              <img src={event.image} alt="" className="rounded-md w-full" />
              <h1 className="text-lg font-bold text-slate-700">
                {event.title}
              </h1>
              <span className="">
                <p className="flex text-slate-500 gap-1 items-center">
                  <CalendarIcon className="w-4 h-4 text-slate-400" />{" "}
                  {event.date}
                </p>
                <p className="flex text-slate-500 gap-1 items-center">
                  <ClockIcon className="w-4 h-4 text-slate-400" /> {event.time}
                </p>
              </span>
              <p className="flex text-slate-500 gap-1 items-center">
                <MapIcon className="w-4 h-4 text-slate-400" /> {event.place}
              </p>
            </Link>
          </div>
        ))}
      </div>



    </div>
  );
}
