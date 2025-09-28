"use client"

import React, {useState} from "react";
import HeroCTA from "@/components/HeroCTA";
import { HeroTag } from "@/components/HeroTag";
import Navbar from "@/components/NavBar";
import ProblemCard from "@/components/ProblemCard";
import SolutionCard from "@/components/SolutionCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const [userEmail, setUserEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange =(e)=> {
    const inpText = e.target.value;
    setUserEmail(inpText);
  }

  const handleSubmit =(e)=> {
    e.preventDefault();
    //console.log("clicked")
    
    let isValidEmail = false;
    const validExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    isValidEmail = validExp.test(userEmail);
    
    if(isValidEmail===true) {
      setError(false);
      setSubmitted(true);
      setUserEmail("");
      //code for storing the email in record.
    } else {
      setError(true);
    }
    setTimeout(()=> setSubmitted(false),5000);
  }

  return (
    <div className="items-start justify-items-center min-h-screen bg-gray-200">
      <main>
        <Navbar/>
        
        <section id="hero" className="flex flex-row mt-32 mx-20 items-start justify-between">
            <div className="flex flex-col items-start">
              <HeroTag/>
              <HeroCTA/>
            </div>
            <Image src="/heroImg.png" width={650} height={470} alt="hero banner" className="filter grayscale"/>
        </section>
        
        <div id="divider" className="mx-10 h-[1px] bg-[#949494] mt-16"/>
        
        <section id="problem" className="flex flex-col mt-16 mx-20 items-center">
          <div className="border-1 border-gray-500 rounded-4xl px-6 py-4">
            Often get lost while researching or browsing something?
          </div>
          <h3 className="text-4xl text-black font-bold mt-8"> Experiencing the digital chaos </h3>
          <div className="flex flex-row items-end gap-8 mt-16">
            <ProblemCard 
              tagTitle="Where was I?"
              tagIcon="/questionIcon.svg"
              cardImg="/image01.png"
              altText="first problem card image"
              cardText="You did hours of research only to be unsure where you left off and then try to remember so hard."
            />
            <ProblemCard 
              tagTitle="What was I doing?"
              tagIcon="/messageIcon.svg"
              cardImg="/image02.png"
              altText="second problem card image"
              cardText="You become overwhelmed with the info. overload of reminding every next step and how you set up the context."
            />
            <ProblemCard 
              tagTitle="Where to Start?"
              tagIcon="/puzzleIcon.svg"
              cardImg="/image03.png"
              altText="third problem card image"
              cardText="All your important notes, web pages, bookmarks scattered around tabs/windows and you being silently lost in digital clutter."
            />
          </div>
        </section>
        
        <div id="divider" className="mx-10 h-[1px] bg-[#949494] mt-16"/>
        
        <section id="solution" className="flex flex-col mt-16 mx-20 items-center">
          <span>
            <h3 className="text-4xl text-black font-bold"> Solution you just might need </h3>
            <div id="dot" className="w-1 h-1 bg-[#949494] rounded-full ml-1"/>
          </span>
          <div className="flex flex-col items-center gap-8 mt-5">
            <SolutionCard
              cardImg="/solutionImg01.png"
              altText="Module Mapper Image"
              cardTitle="Module Mapper."
              caption="Automated | Manual"
              firstPt="Break your work into not just small modules only.."
              secondPt="But create chunks of smart modules which guides you through each step of your project work."
              thirdPt="Getting quick access to referenced docs, tagged notes and memorized voice memos, you can visually see your own thinking!"
              cardSlang="Rewind."
              cardIcon="/rewindIcon.svg"
              altIconText="Rewind Icon"
            />
            <SolutionCard
              cardImg="/solutionImg02.png"
              altText="Clean Workspace Image"
              cardTitle="Clean Workspace"
              firstPt="Keep your work into a nice and tidy workspace."
              secondPt="No more “save it as bookmark” craziness! All tabs are saved & synced to last activity as you browse with web search in your workspace itself."
              thirdPt="Instantly start your analysis as left by you, even with your thoughts being restored of the moment, timeline tracker to help you keep up with project progress."
              cardSlang="Reset."
              cardIcon="/rewindIcon.svg"
              altIconText="Rewind Icon"
            />
            <SolutionCard
              cardImg="/solutionImg03.png"
              altText="One Tap Snapshot Image"
              cardTitle="One Tap Snapshot."
              firstPt="Capture your entire work in browser with just one button tap!"
              secondPt="Just save your current work with a click of a “hotkey” to instantly transfer all data into your project created in a “silent & clean” workspace."
              thirdPt="Anything can be captured, stored and saved into a project in your workspace, be it opened tabs, relevant bookmarks or documents."
              cardSlang="Replan."
              cardIcon="/rewindIcon.svg"
              altIconText="Rewind Icon"
            />
          </div>
        </section>
        
        <div id="divider" className="mx-10 h-[1px] bg-[#949494] mt-16"/>
        
        <section id="waitlist" className="flex flex-col mt-8 mx-20 items-center">
          <h3 className="text-3xl text-black font-normal mt-8"> Interested to explore? </h3>
          <form id="form" className="flex flex-col items-center gap-6 mt-8" onSubmit={(e)=> handleSubmit(e)}>
            <input
              value={userEmail}
              required
              placeholder="Enter your email address"
              className="px-16 py-5 bg-white border-1 border-[#111111] rounded-full text-gray-600 text-lg font-medium"
              onChange={(e)=> handleInputChange(e)}
            />
            <button 
              type="submit" 
              className='px-16 py-5 bg-[#111111] rounded-full cursor-pointer'
              //onClick={handleSubmit}
              //disabled={userEmail=="" ? true : false}
            >
              <p className='text-white text-lg font-medium'>Sign up for early access</p>
            </button>
            { 
              submitted===true &&
              <div className="mx-16">
                <p className="text-black text-lg font-medium"> 🎉Thanks for joining the waitlist! We appreciate your valuable interest.</p>
              </div>
            }
            {
              error && 
              <div className="mx-16 text-center">
                <p className="text-red-500 text-lg font-medium"> Oops! Email invalid. Please enter a valid email address.</p>
                <p className="text-gray-400 text-base font-normal mt-2"> Example: johndoe@gmail.com</p>
              </div>
            }
          </form>
        </section>
        <div id="divider" className="mx-10 h-[1px] bg-[#949494] mt-16"/>
        <section id="#footer" className="flex flex-col py-12 mx-20"> 
            <div className="flex flex-row items-center justify-between">
              <Image src="/logo.svg" width={175} height={92} alt="logo"/>
              <p className="text-black text-lg font-medium">Made with ❤️ by 
                <Link href="https://github.com/Glizy112" className="text-blue-500"> Glizy112 </Link>
              </p>
            </div>
        </section>
      </main>
    </div>
  );
}
