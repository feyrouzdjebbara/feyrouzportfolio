'use client';

import * as React from 'react';
import Image from 'next/image';

function ProjectCard({ project }) {
  return (
    <a href={project.demo} target="_blank" rel="noopener noreferrer">
      <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

        <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
          <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
          </div>
          <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
            {project.name}
          </p>
        </div>

        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 font-mono text-xs md:text-sm lg:text-base text-white space-y-1">
          <p>
            <span className="text-pink-500">const</span>{' '}
            <span className="text-white">project</span>{' '}
            <span className="text-pink-500">=</span>{' '}
            <span className="text-gray-400">{'{'}</span>
          </p>

          <p className="ml-4">
            <span className="text-white">name:</span>{' '}
            <span className="text-gray-400">&apos;</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">&apos;,</span>
          </p>

          <p className="ml-4">
            <span className="text-white">tools:</span>{' '}
            <span className="text-gray-400">[</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">&apos;{tag}&apos;</span>
                {i < project.tools.length - 1 && <span className="text-gray-400">, </span>}
              </React.Fragment>
            ))}
            <span className="text-gray-400">],</span>
          </p>

          <p className="ml-4">
            <span className="text-white">myRole:</span>{' '}
            <span className="text-orange-400">&apos;{project.role}&apos;</span>
            <span className="text-gray-400">,</span>
          </p>

          <p className="ml-4">
            <span className="text-white">description:</span>{' '}
            <span className="text-cyan-400">&apos;{project.description}&apos;</span>
            <span className="text-gray-400">,</span>
          </p>

          <p><span className="text-gray-400">{'};'}</span></p>

          {project.image && (
            <div className="mt-5 flex justify-center">
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={300}
                className="rounded"
              />
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
