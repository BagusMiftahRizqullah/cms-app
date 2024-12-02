"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log("children", children);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex flex-row h-full">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
       {
         sidebarOpen ? (
          <div className="w-0 lg:w-30"/>
         ) : (
          <div className="w-0 lg:w-90"/>
         
         )
       }
       
        {/* <!-- ===== Sidebar End ===== --> */}
       
        {/* <!-- ===== Content Area Start ===== --> */}
       
        <div className={`flex flex-col w-full ${sidebarOpen ? "translate-x-0" : ""}`}>
          {/* <!-- ===== Header Start ===== --> */}
          <Header  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="flex flex-col mx-auto p-4">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
