import MiniSearch from "minisearch";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import AsyncSelect from "react-select/async";
import { emitChangeEvent, htmlDecode } from "../utils/html";

const getFlatProjects = async () => {
  const { projects }: { projects: any[] } = await fetch("https://track.timeneye.com/json/project/getProjects").then((res) => res.json());

  const transformedProjects = projects
    .map((project) =>
      project.tasks
        .map((task: any) => ({
          id: Math.floor(Math.random() * 5000),
          label: htmlDecode(`${project.name} / ${task.name}`),
          value: {
            task: task,
            project: project,
          },
        }))
        .filter((data: any) => {
          return data.value.project.isActive && data.value.task.isOpen;
        })
    )
    .reduce((projects, item) => projects.concat(item), []);
  return transformedProjects;
};

const getProjectTask = async (projectId: number, taskId: number) => {
  const projects = await getFlatProjects();
  return projects.find((project: any) => project.value.task.taskId === taskId && project.value.project.projectId === projectId);
};

const searchProject = async (inputValue: string) => {
  const projects = await getFlatProjects();

  const projectsMiniSearch = new MiniSearch({
    fields: ["label"],
    storeFields: ["label", "value"],
  });

  projectsMiniSearch.addAll(projects);

  return projectsMiniSearch.search(inputValue, { fuzzy: 0.2 });
};

interface ProjectPickerProps {
  projectInputContainer: Element;
  taskInputContainer: Element;
}

export const ProjectPicker = (props: ProjectPickerProps) => {
  const { projectInputContainer, taskInputContainer } = props;
  const [value, setValue] = useState(null);

  const projectInput = useMemo(() => projectInputContainer.querySelector("select"), [projectInputContainer]);
  const taskInput = useMemo(() => taskInputContainer.querySelector("select"), [taskInputContainer]);

  useEffect(() => {
    if (!projectInput || !taskInput) {
      return;
    }

    const currentProject = projectInput.value;
    const currentTask = taskInput.value;

    getProjectTask(+currentProject, +currentTask).then((project) => {
      setValue(project);
    });
  }, [projectInput, taskInput]);

  const onChange = useCallback(
    (value) => {
      if (!projectInput || !taskInput) {
        return;
      }

      projectInput.value = value.value.project.projectId;
      emitChangeEvent(projectInput);

      setTimeout(() => {
        taskInput.value = value.value.task.taskId;
        emitChangeEvent(taskInput);
      });

      setValue(value);
    },
    [projectInput, taskInput]
  );

  return (
    <>
      <AsyncSelect
        styles={{ menu: (styles) => ({ ...styles, zIndex: 999 }) }}
        placeholder="Search for a project or a phase"
        cacheOptions
        defaultOptions
        value={value}
        loadOptions={searchProject}
        onChange={onChange}
      />
    </>
  );
};
