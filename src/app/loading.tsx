import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    // 'fixed inset-0' force le plein écran
    // 'z-[9999]' assure qu'il passe au-dessus de la Navbar (qui est z-50)
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FDFBF7]">
      
      <div className="flex flex-col items-center gap-10">
        {/* Logo Scarlett Gallery */}
        <div className="relative w-64 h-24 animate-pulse">
          <Image
            src="/images/logos/img.png"
            alt="Scarlett Gallery"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 192px, 256px"
          />
        </div>

        {/* Spinner Pro */}
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-2 border-terra border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
