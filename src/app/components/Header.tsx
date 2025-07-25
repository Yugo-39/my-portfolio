"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { MenuIcon, Rocket } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClose = () => setOpen(false);

  // スクロールでヘッダー非表示
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10 || currentY < lastScrollY) {
        setShowHeader(true); // 上に戻る or ほぼ上 → 表示
      } else {
        setShowHeader(false); // 下スクロール → 非表示
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full text-white px-4 py-3 z-50 shadow transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } bg-black/70 backdrop-blur`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* ロゴまたはタイトル */}

        <div className="flex items-center gap-1 text-xl font-bold">
            <Rocket className="text-yellow-400" />
          My-Portfolio</div>

        {/* デスクトップメニュー */}
        <nav className="hidden md:flex gap-10 py-2 text-base md:text-lg">
          {["/", "/about", "/skills", "/works", "/contact"].map((path, i) => {
            const label = ["Home", "About", "Skills", "Works", "Contact"][i];
            return (
              <Link
                key={label}
                href={path}
                className="px-4 py-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur text-white shadow-lg hover:bg-white/20 transition hover:text-yellow-400"
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* モバイル用メニュー */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTitle className="sr-only">メニュー</SheetTitle>
            <SheetTrigger>
              <MenuIcon className="w-7 h-7" />
            </SheetTrigger>
            <SheetContent side="top" className="bg-black text-white">
              <nav className="flex flex-col items-center gap-6 mt-10 text-lg">
                {["Home", "About", "Skills", "Works", "Contact"].map(
                  (label, i) => (
                    <Link
                      key={label}
                      href={
                        ["/", "/about", "/skills", "/works", "/contact"][i]
                      }
                      onClick={handleClose}
                      className="hover:underline hover:text-yellow-400"
                    >
                      {label}
                    </Link>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
