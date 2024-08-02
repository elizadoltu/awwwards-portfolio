import React, { useEffect, useState } from 'react';
import jsonData from '../json/data.json';
import { Data, ProjectData } from '../utils/types';
import { importAll } from '../utils/importAllImages';

const imageModules = import.meta.glob('../assets/images/*.{png,jpg,jpeg}');

const Projects: React.FC = () => {
    const data: Data = jsonData;
    const [images, setImages] = useState<Record<string, string>>({});

    useEffect(() => {
        const loadImages = async () => {
            try {
                const importImages = await importAll(imageModules as any);
                setImages(importImages);
                console.log('Loaded images:', importImages);
            } catch (error) {
                console.error('Error loading images:', error);
            }
        };

        loadImages();
    }, []);

    return (
        <div className="h-screen w-full">
            {data.data.map((project: ProjectData, index) => (
                <div
                    key={index}
                    className="project-item h-screen w-full flex flex-col justify-center items-center"
                    style={{
                        backgroundImage: project.image ? `url(${images[project.image]})` : undefined,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="text-overlay">
                        <h2>{project.name}</h2>
                        <p>{project.number}</p>
                        <h3>Details</h3>
                        {project.details.map((detail, idx) => (
                            <div key={idx}>
                                <p>Domain: {detail.domain}</p>
                                <p>Keywords: {detail.keywords.join(', ')}</p>
                            </div>
                        ))}
                        <h3>Skills</h3>
                        <ul>
                            {project.skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                        <h3>Description</h3>
                        {project.description.map((desc, idx) => (
                            <div key={idx}>
                                <p>General: {desc.general}</p>
                                <p>Depth: {desc.depth}</p>
                            </div>
                        ))}
                        <h3>Date</h3>
                        {project.date.map((date, idx) => (
                            <div key={idx}>
                                <p>Month: {date.month}</p>
                                <p>Year: {date.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
