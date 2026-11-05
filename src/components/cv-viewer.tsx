"use client";

import React from "react";
import Image from "next/image";
import { NiloyCv } from "@/lib/cvs";
import { Download, ExternalLink } from "lucide-react";

interface CvViewerProps {
  cv: NiloyCv;
}

export function CvViewer({ cv }: CvViewerProps) {
  const isDesignAi = cv.id === "niloy-design-product-ai";
  const [activePart, setActivePart] = React.useState<string | null>(null);

  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.NODE_ENV === "production" ? "/cv" : "");
  const pdfUrl = `${basePath}/Niloy_Pal_Design_Product_AI_CV.pdf`;

  const togglePart = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePart((prev) => (prev === id ? null : id));
  };

  const getPartClasses = (id: string, extraClasses = "") => {
    const isSelected = activePart === id;
    return `cursor-pointer transition-all duration-150 rounded px-2.5 py-1.5 -mx-2.5 ${
      isSelected
        ? "bg-slate-100 ring-1 ring-slate-300 shadow-2xs"
        : "hover:bg-slate-50/70"
    } ${extraClasses}`;
  };

  return (
    <div
      className="mx-auto w-full max-w-4xl py-6 sm:py-10 px-3 sm:px-6"
      onClick={() => setActivePart(null)}
    >
      {/* Paper document container simulating physical sheet */}
      <div className="relative mx-auto rounded-lg border border-neutral-200 bg-white p-7 sm:p-12 shadow-sm dark:border-neutral-800 dark:bg-white text-slate-800 print:border-none print:shadow-none print:p-0 print:m-0">
        {isDesignAi ? (
          /* SINGLE-COLOR UNCLUTTERED ANARKOLI-STYLE BRAND & PRODUCT DESIGNER CV (CLICKABLE & NON-SELECTABLE) */
          <div className="space-y-4 text-[13.5px] leading-relaxed select-none font-sans text-slate-800">
            {/* Header */}
            <div
              onClick={(e) => togglePart("header", e)}
              className={getPartClasses(
                "header",
                "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300 pb-3.5"
              )}
            >
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  NILOY PAL
                </h1>
                <div className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-800 mt-1">
                  Brand &amp; Visual Designer
                </div>
                <div className="mt-2.5 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-xs text-slate-600">
                  <span>Naogaon, Rajshahi, Bangladesh</span>
                  <span className="text-slate-300">•</span>
                  <a
                    href="tel:+8801765647572"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:underline"
                  >
                    +8801765647572
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href="mailto:niloypal09@gmail.com"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:underline"
                  >
                    niloypal09@gmail.com
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href="https://linkedin.com/in/np-niloy-pal"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:underline"
                  >
                    linkedin.com/in/np-niloy-pal
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href="https://github.com/NiL4gh"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:underline"
                  >
                    github.com/NiL4gh
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href="https://fiverr.com/niloyb2b"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:underline"
                  >
                    fiverr.com/niloyb2b
                  </a>
                </div>
              </div>

              {/* Avatar Photo */}
              <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded border border-slate-300 shadow-2xs">
                <Image
                  src="/avatar.jpg"
                  alt="Niloy Pal"
                  fill
                  sizes="80px"
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Professional Summary */}
            <section className="space-y-1 pt-1">
              <div className="text-center text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-slate-900">
                Professional Summary
              </div>
              <div
                onClick={(e) => togglePart("summary", e)}
                className={getPartClasses("summary")}
              >
                <p className="text-slate-700 text-justify text-xs sm:text-[13px] leading-normal">
                  Creative Brand &amp; Visual Designer with 4+ years of experience crafting brand identities, vector graphics, social media campaigns, and digital assets. Proven track record completing 400+ client projects on Fiverr alongside e-commerce design and promotional video editing for brand pages. Combines Adobe Illustrator, Photoshop, Premiere Pro, and custom agentic AI workflows to deliver clean marketing creatives on fast turnarounds.
                </p>
              </div>
            </section>

            <hr className="border-t border-slate-200" />

            {/* Professional Experience */}
            <section className="space-y-2">
              <div className="text-center text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-slate-900">
                Professional Experience
              </div>

              <div
                onClick={(e) => togglePart("exp-1", e)}
                className={getPartClasses("exp-1", "space-y-1")}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="text-xs sm:text-[12.5px] font-bold text-slate-800">
                    Freelance Brand &amp; Graphic Designer
                  </div>
                  <div className="text-xs font-semibold text-slate-500">2021 – Present</div>
                </div>
                <div className="text-xs font-medium text-slate-500 mb-1">
                  Fiverr &amp; Remote | Global (US, UK, Europe)
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                  <li>
                    <strong className="text-slate-800 font-semibold">Brand Identity:</strong> Designed custom logos, brand identity packages, emblems, and merchandise graphics for 400+ international clients, sustaining a verified 95%+ 5-star rating.
                  </li>
                  <li>
                    <strong className="text-slate-800 font-semibold">Vector Deliverables:</strong> Prepared press-ready print files (CMYK, vector PDF/EPS) and digital web assets (RGB, SVG, PNG) with accurate color profiles and print bleed.
                  </li>
                  <li>
                    <strong className="text-slate-800 font-semibold">Workflow Automation:</strong> Built custom agentic AI workflows and batch automation routines to accelerate asset production, streamline client revisions, and eliminate repetitive chores.
                  </li>
                  <li>
                    <strong className="text-slate-800 font-semibold">Client Communication:</strong> Managed end-to-end creative requirements, scoping, and revisions in fluent professional English for clients across US and European time zones.
                  </li>
                </ul>
              </div>

              <div
                onClick={(e) => togglePart("exp-2", e)}
                className={getPartClasses("exp-2", "space-y-1 pt-1")}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="text-xs sm:text-[12.5px] font-bold text-slate-800">
                    Graphic &amp; Social Media Designer
                  </div>
                  <div className="text-xs font-semibold text-slate-500">2024 – 2026</div>
                </div>
                <div className="text-xs font-medium text-slate-500 mb-1">
                  E-Commerce &amp; Brand Pages (Contract) | Remote
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                  <li>
                    <strong className="text-slate-800 font-semibold">Social Campaigns:</strong> Designed promotional social media banners, marketing campaigns, and seasonal sales graphics for apparel and lifestyle e-commerce brand pages.
                  </li>
                  <li>
                    <strong className="text-slate-800 font-semibold">Product &amp; Video:</strong> Retouched commercial product photography and edited promotional short-form video reels in Adobe Premiere Pro for Facebook and Instagram marketing.
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-t border-slate-200" />

            {/* Core Skills */}
            <section className="space-y-2">
              <div className="text-center text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-slate-900">
                Core Skills
              </div>
              <div className="space-y-1 text-xs text-slate-700">
                <div
                  onClick={(e) => togglePart("skill-1", e)}
                  className={getPartClasses("skill-1")}
                >
                  <strong className="text-slate-900 font-bold">Graphic &amp; Brand Design:</strong> Adobe Illustrator, Adobe Photoshop, Brand Identity Design, Vector Marks &amp; Emblems, Typography Pairing, Social Media Ad Creatives, Print &amp; Packaging (CMYK).
                </div>
                <div
                  onClick={(e) => togglePart("skill-2", e)}
                  className={getPartClasses("skill-2")}
                >
                  <strong className="text-slate-900 font-bold">Video Editing &amp; Media:</strong> Adobe Premiere Pro, Short-Form Video Editing (Reels / TikToks / Shorts), Dynamic Subtitles &amp; Captions, Audio Sync &amp; Cleanup.
                </div>
                <div
                  onClick={(e) => togglePart("skill-3", e)}
                  className={getPartClasses("skill-3")}
                >
                  <strong className="text-slate-900 font-bold">Web &amp; Interface Design:</strong> Responsive Web Layouts, Landing Page Design, Component Styling &amp; Design Tokens, HTML5, CSS3, Tailwind CSS, Basic JavaScript/React.
                </div>
                <div
                  onClick={(e) => togglePart("skill-4", e)}
                  className={getPartClasses("skill-4")}
                >
                  <strong className="text-slate-900 font-bold">Workflow &amp; Agentic AI:</strong> Agentic AI Workflows (Claude, AGY), Production Automation Scripts, Prompt Engineering, Media Processing (ffmpeg, Whisper).
                </div>
                <div
                  onClick={(e) => togglePart("skill-5", e)}
                  className={getPartClasses("skill-5")}
                >
                  <strong className="text-slate-900 font-bold">E-Commerce &amp; Social Media:</strong> Shopify Store Listings &amp; Publishing, Mockup Creation, Commercial Product Retouching, Social Media Content Scheduling, Fluent English Communication.
                </div>
              </div>
            </section>

            <hr className="border-t border-slate-200" />

            {/* Featured Projects & Products */}
            <section className="space-y-2">
              <div className="text-center text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-slate-900">
                Featured Projects &amp; Products
              </div>
              <div className="space-y-1.5">
                <div
                  onClick={(e) => togglePart("proj-1", e)}
                  className={getPartClasses("proj-1")}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-slate-800 text-xs sm:text-[12.5px]">
                      Hunt Fish Freedom Apparel
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Apparel Branding
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-normal">
                    Designed 100+ vector apparel graphics, produced realistic product mockups, authored descriptions, and published live listings on Shopify.
                  </div>
                </div>

                <div
                  onClick={(e) => togglePart("proj-2", e)}
                  className={getPartClasses("proj-2")}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-slate-800 text-xs sm:text-[12.5px]">
                      Chronos Time Tracker
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Web Application
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-normal">
                    Designed and built a responsive time-tracking web app featuring custom design tokens, clean component styling, and project views (React, Tailwind CSS).
                  </div>
                </div>

                <div
                  onClick={(e) => togglePart("proj-3", e)}
                  className={getPartClasses("proj-3")}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-slate-800 text-xs sm:text-[12.5px]">
                      ReadyTag
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Chrome Extension
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-normal">
                    Developed a browser utility used by 100+ contributors across stock platforms (Adobe Stock, Freepik) to auto-generate SEO titles and tags on upload.
                  </div>
                </div>

                <div
                  onClick={(e) => togglePart("proj-4", e)}
                  className={getPartClasses("proj-4")}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-slate-800 text-xs sm:text-[12.5px]">
                      ClipFactory.ai
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Video Automation
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-normal">
                    Engineered an automated video processing pipeline that takes long-form recordings and extracts captioned 9:16 vertical short clips for Reels and TikTok.
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-t border-slate-200" />

            {/* Education & Credentials */}
            <section
              onClick={(e) => togglePart("edu", e)}
              className={getPartClasses("edu", "space-y-1.5")}
            >
              <div className="text-center text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-slate-900">
                Education &amp; Credentials
              </div>
              <table className="w-full text-left text-xs sm:text-[13px] text-slate-700">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-1 font-bold text-slate-900 w-1/3">Degree / Certificate</th>
                    <th className="py-1 font-bold text-slate-900 w-1/2">Institution</th>
                    <th className="py-1 font-bold text-slate-900 text-right w-1/6">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-1 font-semibold text-slate-900">Bachelor of Arts (B.A.)</td>
                    <td className="py-1 text-slate-600">Bangladesh Open University</td>
                    <td className="py-1 text-right text-slate-500 font-medium">2021 – 2025</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-semibold text-slate-900">Higher Secondary Certificate (HSC)</td>
                    <td className="py-1 text-slate-600">Naogaon Degree College</td>
                    <td className="py-1 text-right text-slate-500 font-medium">2015</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-semibold text-slate-900">Secondary School Certificate (SSC)</td>
                    <td className="py-1 text-slate-600">Hat Naogaon High School</td>
                    <td className="py-1 text-right text-slate-500 font-medium">2013</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-xs text-slate-600 pt-1">
                <strong className="text-slate-900">Additional Coursework:</strong> Software Engineering Fundamentals, Social Media Marketing (Coursera). Fluent in professional English (written/verbal).
              </div>
            </section>
          </div>
        ) : (
          /* Embedded PDF viewer for any other Niloy variant */
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <div>
                <h2 className="text-xl font-bold text-slate-900">{cv.title}</h2>
                <p className="text-xs text-slate-500">{cv.role} • Updated {cv.updatedAt}</p>
              </div>
              <a
                href={pdfUrl}
                download="Niloy_Pal_Design_Product_AI_CV.pdf"
                className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white shadow-2xs hover:bg-neutral-800"
              >
                <Download className="h-3.5 w-3.5" />
                Download PDF
              </a>
            </div>

            <div className="w-full h-[850px] rounded border border-neutral-200 bg-neutral-100 overflow-hidden">
              <iframe
                src={pdfUrl}
                className="w-full h-full border-none"
                title={cv.title}
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer Meta */}
      <footer className="mt-8 text-center text-xs text-neutral-400 dark:text-neutral-600 print:hidden">
        <p>Curriculum Vitae • Niloy Pal • Updated {cv.updatedAt}</p>
        <p className="mt-1 flex items-center justify-center gap-1">
          <a
            href="https://github.com/NiL4gh"
            target="_blank"
            rel="noreferrer"
            className="hover:underline flex items-center gap-0.5"
          >
            <span>github.com/NiL4gh</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </p>
      </footer>
    </div>
  );
}
