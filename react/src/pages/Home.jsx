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
  "https://eventusstorage.blob.core.windows.net/evs/Image/sopt/67959/ProjectInfo/Cover/a8020c3b8bd044f9a88e6c1b7d97c4a0.png",
  "https://eventusstorage.blob.core.windows.net/evs/Image/schimedia/51477/ProjectInfo/Cover/4ac2d607aef6453ea6424d53c68fd835.png",
  "https://eventusstorage.blob.core.windows.net/evs/Image/gscampus/65041/ProjectInfo/Cover/cfd8f174e7c240b387e6a1bbf0128fea.png",
];

const events = [
  {
    id: 0,
    title: "AI 학교 아이펠 : AI 첫 시작부터 논문 작성까지",
    date: "01월 12일 (토)",
    time: "10:00 ~ 12:00",
    place: "모두의연구소",
    image:
      "https://external-lax3-2.xx.fbcdn.net/emg1/v/t13/1965547586246230895?url=https%3A%2F%2Fstatic.aiffel.io%2Fassets%2Fimg%2Flanding-2023%2Flanding-og-thumbnail-6th.jpg&fb_obo=1&utld=aiffel.io&stp=c0.5000x0.5000f_dst-jpg_flffffff_p787x411_q75&ccb=13-1&oh=06_AbHWg9s3mPoQ1OJ7tcKShRqwW5CGUyWe7_0TCYkK6ArccQ&oe=64DCE577&_nc_sid=dbad39",
  },
  {
    id: 1,
    title: "Ubucon Korea 2023",
    date: "09월 09일 (토)",
    time: "10:00 ~ 17:30",
    place: "서울 종로구 종로1길 50 한국마이크로소프트 (13층)",
    image:
      "https://eventusstorage.blob.core.windows.net/evs/Image/ubuntukr/65995/ProjectInfo/Cover/7fe204e41d664c8fb9a806ee6faf806e.png",
  },
  {
    id: 2,
    title: "MIND23 : 오늘도 멈추지 않는 IT인들",
    date: "08월 27일 (일)",
    time: "10:00 ~ 18:00",
    place: "서울 성북구 안암로 145 고려대학교 서울캠퍼스 인촌기념관",
    image:
      "https://eventusstorage.blob.core.windows.net/evs/Image/sopt/67959/ProjectInfo/Cover/159454b04761466ba7f02f08138232b4.png",
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
          background-color: #00000080;
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
    <div className="h-fit p-6 mb-40 md:p-8 lg:p-0 container mx-auto max-w-6xl relative">
      <div className="flex items-center justify-between gap-6 py-6">
        <div className="group text-slate-700 flex items-center gap-2 cursor-pointer select-none">
          <Bars3Icon className="h-5 w-5" />
          <span className="h-full">카테고리</span>

          <div className="absolute top-[3rem] py-6 z-20 left-0 hidden group-hover:block transition-all">
            <Category />
          </div>
        </div>

        <div className="hidden sm:flex text-gray-600 gap-6">
          <menu className="p-2">
            <Link className="flex">이번주 행사</Link>
          </menu>
          <menu className="p-2">
            <Link className="flex">온라인</Link>
          </menu>
          <menu className="p-2 pr-0">
            <Link className="flex">오프라인</Link>
          </menu>
        </div>
      </div>

      {/* 캐러셀 */}
      <div className="relative">
        <div className="nav z-10 flex w-48 gap-2 items-center justify-center text-gray-500 absolute p-3 bg-white/90 rounded-full m-6 select-none shadow-md bottom-0 right-0">
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
              {/* <img alt="sample_file" src={URL} className="select-none bg-cover" /> */}
              <div
                className="bg-cover bg-center bg-no-repeat w-full h-80"
                style={{ backgroundImage: `url(${URL})` }}
              ></div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>

      <div className="flex mt-20 mb-4 items-center">
        <h2 className="flex-grow text-lg font-bold text-slate-600">
          이번주 행사
        </h2>
        <Link className="flex items-center text-slate-500">
          전체보기
          <ChevronRightIcon className="w-4 h-4 ml-1 text-slate-600" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="">
            <Link to="event/:id" className="flex flex-col gap-3 break-keep">
              <div
                className="bg-cover bg-center bg-no-repeat w-full h-52 rounded-md border"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
              <h1 className="text-lg font-bold text-slate-700">
                {event.title}
              </h1>
              <span className="flex flex-col gap-1.5">
                <p className="flex text-slate-500 gap-2 items-center">
                  <CalendarIcon className="w-4 h-4 text-slate-400" />{" "}
                  {event.date}
                </p>
                <p className="flex text-slate-500 gap-2 items-center">
                  <ClockIcon className="w-4 h-4 text-slate-400" /> {event.time}
                </p>

                <span className="flex items-start gap-2">
                  <MapIcon className="flex w-4 h-4 mt-1 text-slate-400" />{" "}
                  <p className="text-slate-500 w-full">
                    {event.place}
                  </p>
                </span>
              </span>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex mt-20 mb-4 items-center">
        <h2 className="flex-grow text-lg font-bold text-slate-600">
          온라인 행사
        </h2>
        <Link className="flex items-center text-slate-500">
          전체보기
          <ChevronRightIcon className="w-4 h-4 ml-1 text-slate-600" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="">
            <Link to="event/:id" className="flex flex-col gap-3 break-keep">
              <div
                className="bg-cover bg-center bg-no-repeat w-full h-52 rounded-md border"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
              <h1 className="text-lg font-bold text-slate-700">
                {event.title}
              </h1>
              <span className="flex flex-col gap-1.5">
                <p className="flex text-slate-500 gap-2 items-center">
                  <CalendarIcon className="w-4 h-4 text-slate-400" />{" "}
                  {event.date}
                </p>
                <p className="flex text-slate-500 gap-2 items-center">
                  <ClockIcon className="w-4 h-4 text-slate-400" /> {event.time}
                </p>

                <span className="flex items-start gap-2">
                  <MapIcon className="flex w-4 h-4 mt-1 text-slate-400" />{" "}
                  <p className="text-slate-500 w-full">
                    {event.place}
                  </p>
                </span>
              </span>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex mt-20 mb-4 items-center">
        <h2 className="flex-grow text-lg font-bold text-slate-600">
          오프라인 행사
        </h2>
        <Link className="flex items-center text-slate-500">
          전체보기
          <ChevronRightIcon className="w-4 h-4 ml-1 text-slate-600" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="">
            <Link to="event/:id" className="flex flex-col gap-3 break-keep">
              <div
                className="bg-cover bg-center bg-no-repeat w-full h-52 rounded-md border"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
              <h1 className="text-lg font-bold text-slate-700">
                {event.title}
              </h1>
              <span className="flex flex-col gap-1.5">
                <p className="flex text-slate-500 gap-2 items-center">
                  <CalendarIcon className="w-4 h-4 text-slate-400" />{" "}
                  {event.date}
                </p>
                <p className="flex text-slate-500 gap-2 items-center">
                  <ClockIcon className="w-4 h-4 text-slate-400" /> {event.time}
                </p>

                <span className="flex items-start gap-2">
                  <MapIcon className="flex w-4 h-4 mt-1 text-slate-400" />{" "}
                  <p className="text-slate-500 w-full">
                    {event.place}
                  </p>
                </span>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
