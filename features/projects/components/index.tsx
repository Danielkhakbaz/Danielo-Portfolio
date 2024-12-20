"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import ProjectCard from "@/features/projects/components/card";
import { FadeUp } from "@/shared/utils/fade-up";
import { projects, ProjectsType } from "@/features/projects/constants/projects";
import { MOTION_COMPONENT_DELAY } from "@/shared/constants";
import { Flex, Heading, Grid, useDisclosure } from "@chakra-ui/react";

const ProjectDrawer = dynamic(
  () => import("@/features/projects/components/drawer")
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(
    null
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectProject = (id: string) => {
    const selectedProject = projects.filter(
      (project) => project.title === id
    )[0];

    setSelectedProject(selectedProject);

    onOpen();
  };

  return (
    <>
      <Flex
        flexDirection="column"
        filter="auto"
        transitionProperty="all"
        transitionDuration=".2s"
        gap={6}
      >
        <FadeUp>
          <Heading>Projects</Heading>
        </FadeUp>
        <Grid
          minHeight={{ base: "1800px", md: "900px" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={{ base: 2, md: 6 }}
        >
          {projects.map((project, index) => (
            <div
              key={MOTION_COMPONENT_DELAY * index}
              onClick={() => selectProject(project.title)}
            >
              <FadeUp delay={MOTION_COMPONENT_DELAY / 2}>
                <ProjectCard
                  imageSrc={
                    project.images[1]
                      ? project.images[1].src
                      : project.images[0].src
                  }
                  blurImage={project.blurImage}
                  alt={project.images[0].alt}
                  title={project.title}
                  description={project.description}
                />
              </FadeUp>
            </div>
          ))}
        </Grid>
      </Flex>
      {selectedProject && (
        <ProjectDrawer
          project={selectedProject}
          onClose={onClose}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default Projects;
