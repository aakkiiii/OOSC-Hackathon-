import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import {
  SlidersHorizontal,
  RotateCcw,
  Users,
  GraduationCap,
  MapPin,
  IndianRupee,
  FileText,
  Coins,
  Check,
} from "lucide-react";

const filterData = [
  {
    filterType: "Gender",
    icon: Users,
    array: ["Male", "Female", "Other"],
  },
  {
    filterType: "Courses",
    icon: GraduationCap,
    array: [
      "B.Tech",
      "B.E.",
      "B.Sc",
      "B.Com",
      "B.A.",
      "BBA",
      "BCA",
      "B.Pharm",
      "MBBS",
      "BDS",
      "LLB",
      "B.Arch",
      "B.Des",
      "B.Ed",
      "BVoc",
      "M.Tech",
      "M.E.",
      "M.Sc",
      "M.Com",
      "M.A.",
      "MBA",
      "MCA",
      "M.Pharm",
      "MD",
      "MS",
      "LLM",
      "M.Arch",
      "M.Des",
      "M.Ed",
      "Ph.D.",
      "Diploma",
      "ITI",
      "Polytechnic",
    ],
  },
  {
    filterType: "State/UTs",
    icon: MapPin,
    array: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Delhi",
      "Jammu and Kashmir",
      "Ladakh",
      "Lakshadweep",
      "Puducherry",
    ],
  },
  {
    filterType: "Family Income",
    icon: IndianRupee,
    array: [
      "Below Poverty Line",
      "0-1 LPA",
      "0-2.5 LPA",
      "0-4 LPA",
      "0-6 LPA",
      "0-10 LPA",
      "Open for All",
    ],
  },
  {
    filterType: "Document Requirement",
    icon: FileText,
    array: [
      "Income Proof",
      "Bonafide Certificate",
      "Fee Structure",
      "Category Certificate",
      "Disability Certificate",
      "Form 16A",
      "Bank Statement",
      "Admission Letter",
      "Resume",
      "PAN card",
      "Aadhaar card",
      "Passports",
      "Recommendation Letter",
    ],
  },
  {
    filterType: "Scholarship amount",
    icon: Coins,
    array: ["0-10k", "10k-30k", "30k-50k", "50k+"],
  },
];

const Filter = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setSelectedValues((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleClearAll = () => {
    setSelectedValues([]);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValues));
  }, [selectedValues, dispatch]);

  return (
    <div className="w-full p-5 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      {/* Top Filter Header & Reset Button */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-black text-lg">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <span>Filters</span>
          {selectedValues.length > 0 && (
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
              {selectedValues.length}
            </span>
          )}
        </div>

        {selectedValues.length > 0 && (
          <button
            type="button"
            onClick={handleClearAll}
            className="flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 px-2.5 py-1 rounded-lg transition-all"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Filter Categories */}
      <div className="mt-5 space-y-4">
        {filterData.map((data, index) => {
          const IconComponent = data.icon || SlidersHorizontal;
          const isScrollable = data.array.length > 6;

          return (
            <div
              key={index}
              className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/70 transition-all hover:border-emerald-300 dark:hover:border-emerald-700/50"
            >
              {/* Category Header with Icon */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <h2 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                    {data.filterType}
                  </h2>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                  {data.array.length} options
                </span>
              </div>

              {/* Options List (Scrollable if many items like Courses & State) */}
              <div
                className={`space-y-1.5 ${
                  isScrollable
                    ? "max-h-48 overflow-y-auto pr-1.5 custom-scrollbar"
                    : ""
                }`}
              >
                {data.array.map((item, indx) => {
                  const itemId = `Id${index}-${indx}`;
                  const isChecked = selectedValues.includes(item);

                  return (
                    <label
                      key={itemId}
                      htmlFor={itemId}
                      className={`flex items-center justify-between p-2 rounded-xl text-xs font-medium cursor-pointer transition-all duration-200 select-none ${
                        isChecked
                          ? "bg-emerald-100/80 text-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-300 font-bold border border-emerald-300/80 dark:border-emerald-700/60 shadow-xs"
                          : "text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          id={itemId}
                          value={item}
                          checked={isChecked}
                          onChange={() => handleChange(item)}
                          className="w-4 h-4 text-emerald-600 bg-white border-slate-300 rounded focus:ring-emerald-500 cursor-pointer accent-emerald-600"
                        />
                        <span className="leading-snug">{item}</span>
                      </div>

                      {isChecked && (
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
