import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useNavigate, Link } from "react-router-dom";
import {
  Sparkles,
  GraduationCap,
  Rocket,
  ShieldCheck,
  Zap,
  Award,
  ArrowRight,
  Clock,
  Compass,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const Home = () => {
  const { loading, error } = useGetAllJobs(); // Trigger data fetch
  const jobs = useSelector((state) => state.jobs.allJobs); // Access Redux state

  console.log("Scholarships in Component:", { loading, error, jobs }); // Log to check state
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  // Mouse position tracker for interactive cursor glow
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fafbfc] text-slate-900 overflow-x-hidden selection:bg-emerald-500/20 selection:text-emerald-800">
      {/* 🌟 Interactive Cursor Spotlight & Ambient Lighting Layer */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Dynamic Cursor Spotlight (Follows mouse movement in Light Mode) */}
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.09), rgba(20, 184, 166, 0.05) 40%, transparent 75%)`,
          }}
        />

        {/* Soft Ambient Light Orbs */}
        <div className="absolute -top-32 left-1/4 w-[750px] h-[500px] rounded-full bg-emerald-400/10 blur-[130px]" />
        <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-amber-400/10 blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 w-[650px] h-[550px] rounded-full bg-teal-400/10 blur-[140px]" />

        {/* Subtle Geometric Dot Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      </div>

      {/* Floating Island Navigation */}
      <Navbar />

      {/* Main Landing Page Stream */}
      <main className="space-y-16 sm:space-y-24 pb-20">
        {/* 1. Hero Search Section */}
        <Header />

        {/* 2. Student 3-Step Journey */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Rocket className="w-3.5 h-3.5 text-emerald-600" />
              <span>Simple 3-Step Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Students Win Scholarships
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From finding the right funding to receiving your grant award in
              your bank account.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="group relative p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Discover & Match
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Filter by your course, GPA, family income, and state to find
                100% verified grants with high acceptance odds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1.5">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Prepare Documents
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Access step-by-step document checklists, income certificate
                formats, and verified application portals.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Get Funded
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Submit directly to official portals with zero middlemen and
                receive direct fee waivers or bank deposits.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Categories Carousel */}
        <Categories />

        {/* 4. Student Perks Bento Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/90 border border-slate-200/90 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Student Advantage</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                  Built by Students, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
                    For Future Scholars.
                  </span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                  We eliminate scam portals, expired links, and complicated
                  guidelines so you can focus on getting your education funded.
                </p>

                {/* Checklist */}
                <div className="mt-6 space-y-3">
                  {[
                    "100% Free Forever for all College & School Students",
                    "Direct Government & Corporate Verified Application Links",
                    "Deadline Reminders so you never miss funding cutoffs",
                    "Special Categories: Women in STEM, Low Income, Merit & Sports",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bento Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-300 transition-all shadow-xs">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Zero Scams
                  </h3>
                  <p className="text-xs text-slate-600">
                    Every scholarship is manually verified by our audit team
                    before listing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-teal-300 transition-all shadow-xs">
                  <Clock className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Deadline Radar
                  </h3>
                  <p className="text-xs text-slate-600">
                    Urgent scholarships sorted by countdown so you apply on
                    time.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-amber-300 transition-all shadow-xs">
                  <Award className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    ₹50,000+ Avg Grant
                  </h3>
                  <p className="text-xs text-slate-600">
                    Programs ranging from full tuition fee waivers to monthly
                    stipends.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-cyan-300 transition-all shadow-xs">
                  <HeartHandshake className="w-8 h-8 text-cyan-600 mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Free Mentorship
                  </h3>
                  <p className="text-xs text-slate-600">
                    Community tips and document guides from past scholarship
                    winners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Live Latest Scholarships Grid */}
        <LatestJobs jobs={jobs} loading={loading} />

        {/* 6. Student Call-To-Action Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-center shadow-2xl text-white">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center mx-auto mb-5 shadow-lg">
                <GraduationCap className="w-7 h-7" />
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                Ready to fund your education?
              </h2>
              <p className="text-emerald-50 text-sm sm:text-base mt-3 max-w-xl mx-auto">
                Join over 50,000+ students across India who found life-changing
                grants on ScholarHunt.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/Browse"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-sm sm:text-base shadow-lg shadow-black/10 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Browse All Scholarships</span>
                  <ArrowRight className="w-4 h-4 text-emerald-700" />
                </Link>
                <Link
                  to="/register"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-700/60 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base border border-emerald-400/40 transition-all"
                >
                  Create Student Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
