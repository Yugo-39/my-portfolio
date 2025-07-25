"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full text-white px-4 py-3 z-50 shadow">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* ロゴまたはタイトル */}
        <div className="text-xl font-bold"></div>

        {/* デスクトップメニュー */}
        <nav className=" hidden md:flex gap-10 py-5 text-base md:text-lg">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur text-white shadow-lg hover:bg-white/20 transition hover:text-yellow-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="px-4 py-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur text-white shadow-lg hover:bg-white/20 transition hover:text-yellow-400"
          >
            About
          </Link>
          {/* <Link href="/skills" className="hover:underline hover:text-yellow-400">
            Skills
          </Link> */}
          <Link
            href="/works"
            className="px-4 py-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur text-white shadow-lg hover:bg-white/20 transition hover:text-yellow-400"
          >
            Works
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur text-white shadow-lg hover:bg-white/20 transition hover:text-yellow-400"
          >
            Contact
          </Link>
        </nav>

        {/* スマホ用ハンバーガーメニュー */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTitle className="sr-only">メニュー</SheetTitle>
            <SheetTrigger>
              <MenuIcon className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="top" className="bg-black text-white">
              <nav className="flex flex-col items-center gap-6 mt-10 text-lg">
                <Link
                  href="/"
                  onClick={handleClose}
                  className="hover:underline hover:text-yellow-400"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={handleClose}
                  className="hover:underline hover:text-yellow-400"
                >
                  About
                </Link>
                <Link
                  href="/works"
                  onClick={handleClose}
                  className="hover:underline hover:text-yellow-400"
                >
                  Works
                </Link>

                <Link
                  href="/contact"
                  onClick={handleClose}
                  className="hover:underline hover:text-yellow-400"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
