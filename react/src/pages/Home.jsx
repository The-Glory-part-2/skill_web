import { useState } from "react";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  ClockIcon,
  MapIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

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
  const [category, setCategory] = useState(false);

  const handleCategory = () => {
    setCategory(!category);
  };

  return (
    <div className="h-[1000px] container mx-auto max-w-4xl">
      <div className="flex items-center gap-4 p-6 static">
        <button
          onClick={handleCategory}
          className="text-slate-700 flex items-center gap-2"
        >
          <Bars3Icon className="h-5 w-5" />
          <span>카테고리</span>
        </button>
        {category && <Category className="top-0 left-0 z-10" />}

        <menu className="p-2">이번주 행사</menu>
        <menu className="p-2">온라인</menu>
        <menu className="p-2">오프라인</menu>
      </div>

      <h2 className="text-lg ml-4 text-slate-600">이번주 행사</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {events.map((event, index) => (
          <div key={index} className="">
            <Link to='board/:id' className="flex flex-col gap-2 p-4">
              <img src={event.image} alt="" className="rounded-md w-full" />
              <h1 className="text-lg font-bold text-slate-700">{event.title}</h1>
              <span className="">
                <p className="flex text-slate-500 gap-1 items-center">
                  <CalendarIcon className="w-4 h-4 text-slate-400" /> {event.date}
                </p>
                <p className="flex text-slate-500 gap-1 items-center"><ClockIcon className="w-4 h-4 text-slate-400"/> {event.time}</p>
              </span>
              <p className="flex text-slate-500 gap-1 items-center"><MapIcon className="w-4 h-4 text-slate-400"/> {event.place}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
