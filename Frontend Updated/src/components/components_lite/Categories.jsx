import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
import {
  Sparkles,
  GraduationCap,
  ArrowRight,
  Globe2,
  Award,
  BookMarked,
} from "lucide-react";

const Category = [
  "Central Sector Scheme of Scholarship",
  "AICTE Pragati Scholarship",
  "INSPIRE Scholarship (SHE)",
  "Post-Matric Scholarships",
  "JN Tata Endowment",
  "Swami Vivekananda (SVMCM)",
  "HDFC Bank ECSS Scholarship",
  "DAAD Scholarships (Germany)",
  "Chevening Scholarships (UK)",
  "Australia Awards Scholarships",
  "Rhodes Scholarship",
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="relative max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-amber-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
          <span> Categories</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Explore by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
            Prestigious Programs
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
          Discover top government funds, merit fellowships, and international
          global grants with a single click.
        </p>
      </div>

      {/* Expanded Width Carousel */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {Category.map((category, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="pl-3 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  {/* Category Card Button with Hover Glow & Animation */}
                  <div
                    onClick={() => searchjobHandler(category)}
                    className="group relative h-full min-h-[110px] p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/60 dark:hover:border-emerald-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden hover:-translate-y-1"
                  >
                    {/* Unique Animated Gradient Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Top Row: Icon + Indicator */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                        {category.includes("Germany") ||
                        category.includes("UK") ||
                        category.includes("Australia") ||
                        category.includes("Rhodes") ? (
                          <Globe2 className="w-4 h-4" />
                        ) : category.includes("Scheme") ||
                          category.includes("AICTE") ? (
                          <Award className="w-4 h-4" />
                        ) : (
                          <GraduationCap className="w-4 h-4" />
                        )}
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        Grant
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {category}
                    </h3>

                    {/* Action Arrow Prompt */}
                    <div className="flex items-center justify-end gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-1 group-hover:translate-x-0">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Carousel Next & Previous Buttons */}
          <CarouselPrevious className="hidden sm:flex -left-4 md:-left-6 w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-300 shadow-md transition-all" />
          <CarouselNext className="hidden sm:flex -right-4 md:-right-6 w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-300 shadow-md transition-all" />
        </Carousel>
      </div>
    </section>
  );
};

export default Categories;
