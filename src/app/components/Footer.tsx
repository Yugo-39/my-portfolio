'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 px-4">
      <div className="max-w-6xl mx-auto flex justify-center">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Yugo Iwaya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
