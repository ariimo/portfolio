// All text, links and images shown on the page live here.
// Replace the placeholder values with your own to personalise the site.

import type {StaticImageData} from "next/image";

import heroPhoto from "./assets/hero-photo.jpg";
import mailIcon from "./assets/hero-social-1.svg";
import githubIcon from "./assets/hero-social-2.svg";
import linkedinIcon from "./assets/hero-social-3.svg";

import java from "./assets/skills/java.svg";
import kotlin from "./assets/skills/kotlin.svg";
import python from "./assets/skills/python.svg";
import typescript from "./assets/skills/typescript.svg";
import javascript from "./assets/skills/javascript.svg";
import c from "./assets/skills/c.svg";
import cpp from "./assets/skills/cpp.svg";
import springBoot from "./assets/skills/spring-boot.svg";
import spring from "./assets/skills/spring.svg";
import nestjs from "./assets/skills/nestjs.svg";
import flask from "./assets/skills/flask.svg";
import restApi from "./assets/skills/rest-api.svg";
import postgresql from "./assets/skills/postgresql.svg";
import mysql from "./assets/skills/mysql.svg";
import sqlite from "./assets/skills/sqlite.svg";
import redis from "./assets/skills/redis.svg";
import elasticsearch from "./assets/skills/elasticsearch.svg";
import rabbitmq from "./assets/skills/rabbitmq.svg";
import aws from "./assets/skills/aws.svg";
import naver from "./assets/skills/naver.svg";
import docker from "./assets/skills/docker.svg";
import githubActions from "./assets/skills/github-actions.svg";
import linux from "./assets/skills/linux.svg";
import claude from "./assets/skills/claude.svg";
import toolCalling from "./assets/skills/tool-calling.svg";
import tensorflow from "./assets/skills/tensorflow.svg";
import moe from "./assets/skills/moe.svg";

import project1 from "./assets/project-1.jpg";
import project2 from "./assets/project-2.jpg";
import project3 from "./assets/project-3.jpg";
import portfolioBanner from "./assets/portfolio-header.png";

import footerEmail from "./assets/footer-email.svg";
import footerGithub from "./assets/footer-github.svg";
import footerLinkedin from "./assets/footer-linkedin.svg";

// Contact links, used by the hero, the navbar button and the footer.
const EMAIL = "memoarim01@gmail.com";
const links = {
  email: `mailto:${EMAIL}`,
  github: "https://github.com/ariimo",
  linkedin: "https://www.linkedin.com/in/ariimo",
};

export const navLinks = [
  {label: "About me", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Portfolio", href: "#portfolio"},
];
// Opens a new email to me.
export const navCta = {label: "CONTACT ME", href: links.email};

export const profile = {
  greeting: "Hi, I am",
  name: "Arim Mo",
  role: "Software Engineer",
  photo: heroPhoto,
  socials: [
    {label: "Email", href: links.email, icon: mailIcon.src},
    {label: "GitHub", href: links.github, icon: githubIcon.src},
    {label: "LinkedIn", href: links.linkedin, icon: linkedinIcon.src},
  ],
};

export const club = {
  title: "짧은 소개",
  paragraphs: [
    "안녕하세요! 사람을 위한 개발자를 꿈꾸는 모아림입니다. 정적이지만 다채로운 삶을 즐깁니다.",
    "공과대학 밴드부 보컬부터 독서 모임 회장, 미국 인턴생활까지. 다양한 환경과 사람들을 만나며, 신조로 삼게 된 요소들이 있습니다.",
  ],
  // Shown as a numbered list under the paragraphs.
  principles: [
    "미련을 남기지 말자. 결정했다면 끝까지, 후회 없이 마무리하자.",
    "어떤 환경이던 결과를 만드는 것은 나의 몫이니 모든 기회를 감사히 여기자.",
    "비교는 무의미하다. 마음이 초라해질 땐 해야하는 일에 집중하자.",
    "목표에 집중하자. 문제를 명확히 파악하고 그걸 해결하는 게 가장 빠른 길이다.",
  ],
};

export type AboutEntry = {
  name: string;
  // Shown next to the name, e.g. the city.
  location?: string;
  period: string;
  role: string;
  // Extra lines under the role, e.g. a GPA or a project name.
  notes?: string[];
  // Bulleted list of things worked on.
  highlights?: string[];
  website?: {label: string; href: string};
};

export const about: {
  title: string;
  lead: string;
  paragraphs: string[];
  groups: {title: string; entries: AboutEntry[]}[];
} = {
  title: "ABOUT ME",
  lead: "사람을 위한 기술을 만들고자 합니다.",
  paragraphs: [
    "실제 사용자의 문제를 이해하고, 복잡한 과정을 구조화하며, 안정적으로 동작하는 시스템으로 구현하는 과정에 관심이 있습니다.",
    "백엔드와 인프라를 기반으로 소프트웨어 시스템을 개발해 왔으며, 최근에는 LLM을 활용한 업무 자동화부터 제한된 하드웨어 환경에서의 AI 추론 최적화까지 관심 영역을 확장하고 있습니다.",
    "기술 자체에 머무르기보다, 기술이 실제 환경에서 어떤 문제를 해결할 수 있는지 고민하고 구현하는 개발자가 되고자 합니다.",
  ],
  groups: [
    {
      title: "EDUCATION",
      entries: [
        {
          name: "Chonnam National University",
          period: "Mar. 2021 – Feb. 2027 (Expected)",
          role: "B.S. in Computer Engineering",
          notes: ["GPA: 4.29 / 4.5"],
        },
      ],
    },
    {
      title: "ACTIVITY",
      entries: [
        {
          name: "Kakao Tech Campus",
          period: "Mar. 2024 – Nov. 2024",
          role: "Backend Track · Team Leader & Backend Developer",
          notes: ["Project: Would You In"],
        },
        {
          name: "NovaLink",
          period: "Sep. 2025 – Dec. 2025",
          role: "Backend Engineer Intern",
          highlights: ["쉽차장 서비스 개발", "사내 ERP 및 Slack Bot 개발"],
          website: {
            label: "novalink.co.kr",
            href: "https://www.novalink.co.kr/",
          },
        },
        {
          name: "Naver Boostcamp",
          period: "Jun. 2025 – Feb. 2026",
          role: "Infrastructure & Backend",
          notes: ["Project: Locus"],
        },
        {
          name: "Parsonex",
          location: "Denver, CO, USA",
          period: "Mar. 2026 – Jul. 2026",
          role: "Software Engineering Intern",
          highlights: [
            "Form Processing Platform",
            "AI Assistant for Gmail",
            "neXapp",
          ],
          website: {label: "parsonex.com", href: "https://www.parsonex.com/"},
        },
      ],
    },
  ],
};

export type Skill = {label: string; icon: string};

export const skills: {
  title: string;
  groups: {title: string; items: Skill[]}[];
} = {
  title: "SKILLS",
  groups: [
    {
      title: "Languages",
      items: [
        {label: "Java", icon: java.src},
        {label: "Kotlin", icon: kotlin.src},
        {label: "Python", icon: python.src},
        {label: "TypeScript", icon: typescript.src},
        {label: "JavaScript", icon: javascript.src},
        {label: "C", icon: c.src},
        {label: "C++", icon: cpp.src},
      ],
    },
    {
      title: "Backend & Frameworks",
      items: [
        {label: "Spring Boot", icon: springBoot.src},
        {label: "Spring Data JPA", icon: spring.src},
        {label: "NestJS", icon: nestjs.src},
        {label: "Flask", icon: flask.src},
        {label: "REST API", icon: restApi.src},
      ],
    },
    {
      title: "Database & Messaging",
      items: [
        {label: "PostgreSQL", icon: postgresql.src},
        {label: "MySQL", icon: mysql.src},
        {label: "SQLite", icon: sqlite.src},
        {label: "Redis", icon: redis.src},
        {label: "Elasticsearch", icon: elasticsearch.src},
        {label: "RabbitMQ", icon: rabbitmq.src},
      ],
    },
    {
      title: "Cloud & Infrastructure",
      items: [
        {label: "AWS", icon: aws.src},
        {label: "Naver Cloud Platform", icon: naver.src},
        {label: "Docker", icon: docker.src},
        {label: "GitHub Actions", icon: githubActions.src},
        {label: "Linux", icon: linux.src},
      ],
    },
    {
      title: "AI & Machine Learning",
      items: [
        {label: "Claude API", icon: claude.src},
        {label: "LLM Tool Calling", icon: toolCalling.src},
        {label: "TensorFlow", icon: tensorflow.src},
      ],
    },
  ],
};

export type ProjectCategory = "work" | "project";

// One block of the detail view that opens when a project is clicked.
export type ProjectSection = {
  title: string;
  // Plain paragraphs, shown first.
  paragraphs?: string[];
  // Bulleted list, shown after the paragraphs.
  items?: string[];
};

export type Project = {
  title: string;
  // Which filter tab the project belongs to.
  category: ProjectCategory;
  // One line shown on hover and under the title of the detail view.
  description: string;
  image: StaticImageData;
  // Flip the thumbnail horizontally.
  mirrored?: boolean;
  period?: string;
  stack?: string[];
  links?: {label: string; href: string}[];
  sections: ProjectSection[];
};

// Placeholder detail text. Give each project its own sections.
const SAMPLE_SECTIONS: ProjectSection[] = [
  {
    title: "프로젝트 개요",
    paragraphs: [
      "어떤 문제를 풀기 위한 프로젝트였는지, 누구를 위한 서비스인지 두세 문장으로 소개하는 자리입니다.",
      "문단은 여러 개를 넣을 수 있습니다.",
    ],
  },
  {
    title: "핵심 기능",
    items: ["핵심 기능 첫 번째", "핵심 기능 두 번째", "핵심 기능 세 번째"],
  },
  {
    title: "기여 항목",
    items: ["내가 맡아서 만든 부분", "해결한 문제와 그 방법"],
  },
  {
    title: "배운 점",
    paragraphs: ["이 프로젝트를 하며 배운 점을 적는 자리입니다."],
  },
];

const projects: Project[] = [
  {
    title: "Project title",
    category: "work",
    description: "Short description of the project",
    image: project1,
    period: "Mar. 2026 – Jul. 2026",
    stack: ["Spring Boot", "PostgreSQL", "AWS"],
    links: [{label: "GitHub", href: links.github}],
    sections: SAMPLE_SECTIONS,
  },
  {
    title: "Project title",
    category: "project",
    description: "Short description of the project",
    image: project3,
    period: "Jun. 2025 – Feb. 2026",
    stack: ["NestJS", "Redis", "Docker"],
    sections: SAMPLE_SECTIONS,
  },
  {
    title: "Project title",
    category: "work",
    description: "Short description of the project",
    image: project2,
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
    image: project1,
    mirrored: true,
    sections: SAMPLE_SECTIONS,
  },
];

export const portfolio = {
  title: "PORTFOLIO",
  banner: portfolioBanner,
  filters: [
    {label: "ALL", value: "all"},
    {label: "WORK", value: "work"},
    {label: "PROJECTS", value: "project"},
  ] as const,
  // Small label shown on each project.
  categoryLabels: {work: "WORK", project: "PROJECT"},
  // Hint shown on hover, under the description.
  detailsLabel: "VIEW DETAILS",
  projects,
  footnote: "And many more to come!",
};

export const footer = {
  backToTop: "BACK TO TOP",
  copyrightOwner: "2026 Arim Mo",
  copyrightNote: " ",
  socials: [
    {label: "Email", href: links.email, icon: footerEmail.src},
    {label: "GitHub", href: links.github, icon: footerGithub.src},
    {label: "LinkedIn", href: links.linkedin, icon: footerLinkedin.src},
  ],
};
