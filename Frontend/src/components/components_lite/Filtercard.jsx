import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Gender",
    array: ["Male", "Female", "Other"],
  },
  {
    filterType: "Courses",
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
    filterType: "State",
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

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValues));
  }, [selectedValues, dispatch]);

  return (
    <div className="w-full bg-white rounded-md">
      <h1 className="font-bold text-lg">Filter Scholarships</h1>
      <hr className="mt-3" />
      <div className="mt-5">
        {filterData.map((data, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-bold text-lg mb-2">{data.filterType}</h2>
            {data.array.map((item, indx) => {
              const itemId = `Id${index}-${indx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-2">
                  <input
                    type="checkbox"
                    id={itemId}
                    value={item}
                    checked={selectedValues.includes(item)}
                    onChange={() => handleChange(item)}
                    className="w-4 h-4 text-[#6B3AC2] border-gray-300 rounded focus:ring-[#6B3AC2] cursor-pointer"
                  />
                  <label
                    htmlFor={itemId}
                    className="cursor-pointer text-gray-700"
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
