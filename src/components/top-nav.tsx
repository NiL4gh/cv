"use client";

import React from "react";
import { Download, Printer } from "lucide-react";
import Link from "next/link";

interface TopNavProps {
  activeCvId: string;
  cvTitle: string;
}

export function TopNav({ activeCvId }: TopNavProps) {
  const handlePrint = () => {
    window.print();
  };

  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.NODE_ENV === "production" ? "/cv" : "");
  const pdfUrl = `${basePath}/Niloy_Pal_Design_Product_AI_CV.pdf`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80 print:hidden">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Left: Identity */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-900 transition hover:opacity-80 dark:text-white"
          >
            <span className="font-bold">Niloy Pal</span>
            <span className="text-neutral-400 dark:text-neutral-600">/</span>
            <span className="font-normal text-neutral-500 dark:text-neutral-400">
              Curriculum Vitae
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for hire
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            aria-label="Print CV"
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50 active:scale-95 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <Printer className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Print</span>
          </button>

          <a
            href={pdfUrl}
            download="Niloy_Pal_Design_Product_AI_CV.pdf"
            className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-neutral-800 active:scale-95 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </header>
  );
}
