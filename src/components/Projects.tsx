import React, { useEffect, useState } from "react";
import jsonData from "../json/data.json";
import { Data, ProjectData } from "../utils/types";
import { importAll } from "../utils/importAllImages";

const imageModules = import.meta.glob("../assets/images/*.{png,jpg,jpeg}");

const Projects: React.FC = () => {
  const data: Data = jsonData;
  const [images, setImages] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const importImages = await importAll(imageModules as any);
        setImages(importImages);
        console.log("Loaded images:", importImages);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="w-full font-urbanist">
      {data.data.map((project: ProjectData, index) => (
        <div
          key={index}
          className="h-screen w-full flex flex-col"
          style={{
            backgroundImage: project.image
              ? `url(${images[project.image]})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex h-screen">
            <div className="flex flex-col items-end">
              <h1 className="font-clash-grotesk-bold text-9xl">
                {project.number}
              </h1>
              {project.skills.map((skill, idx) => (
                <p key={idx}>{skill}</p>
              ))}
            </div>
            <div className="ml-96">
              <h1 className="font-clash-grotesk-bold text-9xl w-96 -leading-tight">
                {project.name}
              </h1>
              <div>
                {project.details.map((detail, idx) => (
                  <div key={idx}>
                    <p>{detail.domain}</p>
                    <p className="mr-10">{detail.keywords.join("   ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-start -mt-96 ml-128">
            {project.description.map((desc, idx) => (
              <div key={idx} className="w-128">
                <p>{desc.general}</p>
                <p className="mt-10">{desc.depth}</p>
              </div>
            ))}
          </div>
         
        {project.date.map((date, idx) => (
            <div key={idx} className="flex justify-between items-end mt-40 font-medium text-6xl">
            <p>{date.month}</p>
            <p>{date.year}</p>
            </div>
        ))}
      
        </div>
      ))}
    </div>
  );
};

export default Projects;
