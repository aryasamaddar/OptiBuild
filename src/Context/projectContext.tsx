import React, { createContext, useContext, useState } from "react";
import { projects } from "../lib/mock-data";

interface ProjectContextType {
    projectData: any;
    setProjectData: any;
}

export const ProjectContext = createContext<ProjectContextType>({
  projectData: projects[0],
  setProjectData: () => {},
});

export const ProjectContextProvider = ({children}:any)=>{
    const [projectData, setProjectData] = useState(projects[0]);
    return (
        <ProjectContext.Provider value={{projectData, setProjectData}}>
            {children}
        </ProjectContext.Provider>
    );
};
