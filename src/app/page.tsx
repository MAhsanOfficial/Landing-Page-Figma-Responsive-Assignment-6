'use client'
import Achivement from "@/components/Achivement";
import Courses from "@/components/Courses";
import Exploring from "@/components/Exploring";
import Hero from "@/components/Hero";
import MainNavbar from "@/components/MainNavbar";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <MainNavbar/>
    <Hero/>
    <Exploring/>
    <Achivement/>
    <Courses/>
    <Team/>
    <Testimonials/>
    </>
  );
}
