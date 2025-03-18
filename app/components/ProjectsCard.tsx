"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  return (
    <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Proje Görseli */}
      <div className="w-full h-40 relative rounded-lg overflow-hidden">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>

      {/* Başlık ve Açıklama */}
      <h2 className="text-white text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-400 text-sm mt-2">{description}</p>

      {/* Etiketler */}
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-300 px-3 py-1 text-xs rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Butonlar */}
      <div className="flex mt-4 gap-3">
        <Link href={liveUrl} target="_blank">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium">
            Live preview
          </button>
        </Link>
        <Link href={githubUrl} target="_blank">
          <button className="border border-gray-500 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-700">
            Check on GitHub
          </button>
        </Link>
      </div>
    </div>
  );
}
