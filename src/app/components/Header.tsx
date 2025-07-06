'use client';

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black text-white px-4 py-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* ロゴまたはタイトル */}
        <div className="text-xl font-bold"></div>

        {/* デスクトップメニュー */}
    <nav className="hidden md:flex gap-6 text-base md:text-lg">
  <Link href="/" className="hover:underline">Home</Link>
  <Link href="/about" className="hover:underline">About</Link>
  <Link href="/works" className="hover:underline">Works</Link>
  <Link href="/pet" className="hover:underline"> Pets</Link>
  <Link href="/contact" className="hover:underline">Contact</Link>
</nav>

        {/* スマホ用ハンバーガーメニュー */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="top" className="bg-black text-white">
              <nav className="flex flex-col items-center gap-6 mt-10 text-lg">
                <Link href="/" className="hover:underline hover:text-yellow-400">Home</Link>
                <Link href="/about" className="hover:underline hover:text-yellow-400">About</Link>
                <Link href="/works" className="hover:underline hover:text-yellow-400">Works</Link>
                 <Link href="/pet" className="hover:underline"> Pets</Link>
                <Link href="/contact" className="hover:underline hover:text-yellow-400">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
