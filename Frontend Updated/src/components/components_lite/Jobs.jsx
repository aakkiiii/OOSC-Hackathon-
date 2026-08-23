import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FilterCard from "./Filtercard";
import Job1 from "./Job1";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  SearchX,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    // If no search query is provided, reset to all jobs
    if (
      !searchedQuery ||
      (Array.isArray(searchedQuery) && searchedQuery.length === 0) ||
      (typeof searchedQuery === "string" && searchedQuery.trim() === "")
    ) {
      setFilterJobs(allJobs);
      return;
    }

    const queryArray = Array.isArray(searchedQuery)
      ? searchedQuery
      : [searchedQuery];

    // Filter based on the searched query across various fields
    const filteredJobs = allJobs.filter((job) => {
      return queryArray.some((query) => {
        const q = query.toLowerCase();
        return (
          job.title?.toLowerCase().includes(q) ||
          job.description?.toLowerCase().includes(q) ||
          job.location?.toLowerCase().includes(q) ||
          job.salary?.toLowerCase().includes(q)
        );
      });
    });

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery]);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pb-20">
      <Navbar />

      {/* Expanded Container Width: max-w-[1600px] */}
      <main className="max-w-[1600px] w-full mx-auto mt-6 px-4 sm:px-6 lg:px-10">
        {/* Results Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
              <span>Explore Scholarships</span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40 shadow-sm">
                {filterJobs.length} Available Programs
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Filter by eligibility, funding type, location, and grant amount.
            </p>
          </div>

          {/* Active Query Filter Tag */}
          {searchedQuery && (
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
              <span className="text-slate-400">Active filter:</span>
              <span className="px-3 py-1 rounded-xl bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 font-bold flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                {Array.isArray(searchedQuery)
                  ? searchedQuery.join(", ")
                  : searchedQuery}
              </span>
            </div>
          )}
        </div>

        {/* Main Content Layout with Wide Right Panel */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Sidebar: Filter Card */}
          <aside className="w-full lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
            <FilterCard />
          </aside>

          {/* Right Wide Area: Scholarship List Container */}
          <section className="flex-1 w-full min-h-[500px] p-4 sm:p-6 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            {filterJobs.length <= 0 ? (
              /* Empty State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full py-20 px-6 text-center rounded-2xl flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 shadow-inner">
                  <SearchX className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  No Matching Scholarships Found
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed mb-6">
                  We couldn't find any opportunities matching your criteria. Try
                  adjusting your filters or clearing search terms.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" />
                  <span>
                    Total available scholarships in database:{" "}
                    {allJobs?.length || 0}
                  </span>
                </div>
              </motion.div>
            ) : (
              /* Wide Multi-Column Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
                <AnimatePresence mode="popLayout">
                  {filterJobs.map((job, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.25,
                        delay: Math.min(index * 0.04, 0.24),
                      }}
                      key={job._id}
                      className="h-full"
                    >
                      <Job1 job={job} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Jobs;
