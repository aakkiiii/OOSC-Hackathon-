
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  LogOut,
  User2,
  Menu,
  X,
  GraduationCap,
  Sparkles,
  Bookmark,
  ChevronDown,
  Building2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const { savedJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (res && res.data && res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      toast.error("Error logging out. Please try again.");
    }
  };

  return (
    <div className="sticky top-3 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Floating Island Container */}
      <header className="rounded-2xl backdrop-blur-xl bg-white/85 dark:bg-slate-900/85 border border-slate-200/90 dark:border-slate-800 shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 group-hover:shadow-emerald-500/35 transition-all duration-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white flex items-center">
                <span>Scholar</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 ml-1">
                  Hunt
                </span>
              </h1>
              <span className="text-[10px] font-semibold text-emerald-600/80 dark:text-emerald-400 tracking-wider uppercase -mt-1">
                Grant Network
              </span>
            </div>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <nav>
              <ul className="flex items-center gap-1.5 font-medium text-sm">
                {user && user.role === "Recruiter" ? (
                  <>
                    <li>
                      <Link
                        to={"/admin/companies"}
                        className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800/80 transition-all flex items-center gap-1.5"
                      >
                        <Building2 className="w-4 h-4 text-emerald-600" />
                        Companies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/admin/jobs"}
                        className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800/80 transition-all flex items-center gap-1.5"
                      >
                        <BookOpen className="w-4 h-4 text-teal-600" />
                        Scholarships
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to={"/Home"}
                        className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800/80 transition-all"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/Browse"}
                        className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800/80 transition-all"
                      >
                        Browse
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/Jobs"}
                        className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800/80 transition-all"
                      >
                        Scholarships
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/saved-jobs"}
                        className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800/80 transition-all flex items-center gap-2"
                      >
                        <Bookmark className="w-4 h-4 text-amber-500" />
                        <span>Saved</span>
                        {savedJobs && savedJobs.length > 0 && (
                          <span className="flex items-center justify-center px-1.5 py-0.5 text-[11px] font-bold rounded-full bg-amber-500 text-white shadow-sm shadow-amber-500/30">
                            {savedJobs.length}
                          </span>
                        )}
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>

            {/* Right Side: Auth Action or User Profile Popover */}
            {!user ? (
              <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200 dark:border-slate-800">
                <Link to={"/login"}>
                  <Button
                    variant="ghost"
                    className="text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60 dark:text-slate-300 dark:hover:bg-slate-800 rounded-xl px-4 text-sm font-semibold"
                  >
                    Login
                  </Button>
                </Link>
                <Link to={"/register"}>
                  <Button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white rounded-xl px-4 py-2 text-sm font-semibold shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-1.5">
                    <span>Join Free</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="pl-3 border-l border-slate-200 dark:border-slate-800">
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="flex items-center gap-2.5 p-1 pl-2 pr-3 rounded-full bg-slate-50 hover:bg-emerald-50/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer focus:outline-none">
                      <Avatar className="w-7 h-7 ring-2 ring-emerald-500/40">
                        <AvatarImage
                          src={user?.profile?.profilePhoto}
                          alt={user?.fullname}
                        />
                      </Avatar>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 max-w-[100px] truncate">
                        {user?.fullname?.split(" ")[0]}
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </PopoverTrigger>

                  <PopoverContent className="w-80 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-2xl">
                    {/* Header in Popover */}
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                      <Avatar className="w-11 h-11 ring-2 ring-emerald-500/30">
                        <AvatarImage
                          src={user?.profile?.profilePhoto}
                          alt={user?.fullname}
                        />
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white truncate">
                          {user?.fullname}
                        </h3>
                        <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/40 mt-0.5">
                          {user?.role || "Student"}
                        </span>
                        {user?.profile?.bio && (
                          <p className="text-xs text-slate-500 truncate mt-1">
                            {user?.profile?.bio}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Popover Action Links */}
                    <div className="flex flex-col gap-1 mt-2 text-sm">
                      {user && user.role === "Student" && (
                        <Link
                          to={"/Profile"}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 dark:text-slate-300 dark:hover:bg-slate-800 transition-all font-medium"
                        >
                          <User2 className="w-4 h-4 text-emerald-600" />
                          <span>My Profile</span>
                        </Link>
                      )}

                      <button
                        onClick={logoutHandler}
                        className="flex w-full items-center gap-2.5 px-3 py-2 rounded-xl text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/30 transition-all font-medium text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Log out</span>
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200/80 dark:border-slate-800 px-4 py-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-b-2xl animate-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-1.5 font-medium">
              {user && user.role === "Recruiter" ? (
                <>
                  <li>
                    <Link
                      to={"/admin/companies"}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      Companies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/admin/jobs"}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      Scholarships
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to={"/Home"}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Browse"}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      Browse
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Jobs"}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      Scholarships
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/saved-jobs"}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-3 py-2 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Bookmark className="w-4 h-4 text-amber-500" />
                        Saved Scholarships
                      </span>
                      {savedJobs && savedJobs.length > 0 && (
                        <span className="bg-amber-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                          {savedJobs.length}
                        </span>
                      )}
                    </Link>
                  </li>
                </>
              )}

              {/* Mobile Auth Actions */}
              <li className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
                {!user ? (
                  <>
                    <Link
                      to={"/login"}
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        className="w-full justify-center rounded-xl border-slate-200"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link
                      to={"/register"}
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full"
                    >
                      <Button className="w-full justify-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl shadow-md shadow-emerald-600/20">
                        Join Free
                      </Button>
                    </Link>
                  </>
                ) : (
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <Avatar className="w-9 h-9 ring-2 ring-emerald-500/30">
                        <AvatarImage
                          src={user?.profile?.profilePhoto}
                          alt={user?.fullname}
                        />
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white truncate">
                          {user?.fullname}
                        </h3>
                        <span className="text-[11px] text-emerald-600 font-semibold">
                          {user?.role}
                        </span>
                      </div>
                    </div>

                    {user && user.role === "Student" && (
                      <Link
                        to={"/Profile"}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 rounded-xl"
                      >
                        <User2 size={18} className="text-emerald-600" />
                        <span>My Profile</span>
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        logoutHandler();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-xl font-medium text-left"
                    >
                      <LogOut size={18} />
                      <span>Log out</span>
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
