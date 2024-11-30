import React from 'react'
import Dashboard from '@/components/Dashboard/Dashboard'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

function DasboardAdmin() {
  
  return (
    <div>
    <DefaultLayout>
         <Dashboard />
    </DefaultLayout>
    </div>
  )
}

export default DasboardAdmin