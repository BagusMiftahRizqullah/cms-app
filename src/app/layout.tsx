"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Loader from "@/components/common/Loader";
const theme = createTheme();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    console.log("children12321", children);
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div  className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : null}
          {children}
        </div>
      </body>
    </html>
    </ThemeProvider>
  );
}
