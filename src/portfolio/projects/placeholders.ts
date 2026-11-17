// Example cards that fill the grid until the real projects are written.
// Delete an entry here when a real project takes its place.

import project2 from "../../assets/project-2.jpg";
import project3 from "../../assets/project-3.jpg";
import type {Project, ProjectSection} from "../types";

// Placeholder detail text. Give each project its own sections.
const SAMPLE_SECTIONS: ProjectSection[] = [
  {
    title: "프로젝트 개요",
    blocks: [
      {
        type: "text",
        text: "어떤 문제를 풀기 위한 프로젝트였는지, 누구를 위한 서비스인지 두세 문장으로 소개하는 자리입니다.",
      },
      {type: "text", text: "문단은 여러 개를 넣을 수 있습니다."},
    ],
  },
  {
    title: "핵심 기능",
    blocks: [{type: "list", items: ["핵심 기능 첫 번째", "핵심 기능 두 번째", "핵심 기능 세 번째"]}],
  },
  {
    title: "기여 항목",
    blocks: [{type: "list", items: ["내가 맡아서 만든 부분", "해결한 문제와 그 방법"]}],
  },
  {
    title: "배운 점",
    blocks: [{type: "text", text: "이 프로젝트를 하며 배운 점을 적는 자리입니다."}],
  },
];

export const placeholders: Project[] = [
  {
    title: "Project title",
    category: "work",
    description: "Short description of the project",
    image: project2,
    mirrored: true,
    sections: SAMPLE_SECTIONS,
  },
  {
    title: "Project title",
    category: "project",
    description: "Short description of the project",
    image: project3,
    mirrored: true,
    sections: SAMPLE_SECTIONS,
  },
];
