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

import projectFormPlatform from "./assets/project-form-platform.png";
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

// The detail view that opens when a project is clicked is a list of sections,
// and each section is a list of blocks. In any text, `backticks` mark code and
// **double asterisks** mark bold.

// A list item, optionally with a nested list under it.
export type ProjectListItem = string | {text: string; items: string[]};

// One row of a flow diagram: its steps run left to right, rows run top to bottom.
export type FlowStage = {
  // With a label the row is drawn as a framed group; without one, as loose boxes.
  label?: string;
  // Short tag on the right of the group label.
  note?: string;
  // Draw the group white on black.
  dark?: boolean;
  steps: {name: string; detail?: string}[];
};

// One row of a mapping example: a payload value, the transform applied to it,
// and the form field it ends up in.
export type MappingRow = {
  source: string;
  value: string;
  transform?: string;
  field: {
    // Label printed on the form.
    label: string;
    // Field names inside the PDF.
    names: string;
    // Text written on a line, with an optional prefix such as "$".
    text?: string;
    prefix?: string;
    // Or one character per box, in groups separated by dashes.
    boxes?: string[];
  };
};

export type ProjectBlock =
  | {type: "text"; text: string}
  | {type: "heading"; text: string}
  | {type: "list"; items: ProjectListItem[]; ordered?: boolean}
  // A highlighted statement.
  | {type: "callout"; label?: string; text: string}
  // A row of big numbers.
  | {type: "stats"; items: {value: string; label: string}[]}
  | {type: "flow"; stages: FlowStage[]; caption?: string}
  // Horizontal bar chart. Muted bars are drawn in grey.
  | {
      type: "bars";
      title: string;
      items: {label: string; value: number; muted?: boolean}[];
      caption?: string;
    }
  | {
      type: "mapping";
      title: string;
      columns: [string, string, string];
      // Shown in place of a transform when a row has none.
      passthrough: string;
      rows: MappingRow[];
      caption?: string;
    };

export type ProjectSection = {
  title: string;
  blocks: ProjectBlock[];
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
  // Where the work was done and in what capacity.
  role?: string;
  period?: string;
  stack?: string[];
  links?: {label: string; href: string}[];
  sections: ProjectSection[];
};

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

const formProcessingPlatform: Project = {
  title: "Form Processing Platform",
  category: "work",
  description: "금융 신청서 PDF를 LLM으로 매핑하고, LLM 없이 자동으로 채우는 시스템",
  image: projectFormPlatform,
  role: "Parsonex · 1인 개발",
  stack: [
    "Python 3.11",
    "AWS Lambda",
    "API Gateway",
    "S3",
    "Aurora (RDS Data API)",
    "Amazon Bedrock (Claude)",
    "Amazon Textract",
    "pypdf",
    "pdfplumber",
    "OpenTofu",
    "GitHub Actions",
  ],
  sections: [
    {
      title: "프로젝트 개요",
      blocks: [
        {
          type: "text",
          text: "Carrier마다 제각각인 금융 신청서(AcroForm PDF)를 LLM으로 필드 매핑하고, 검증과 사람 검수를 거친 뒤 런타임에는 LLM 없이 DB의 사용자 데이터로 서류를 자동으로 채우는 시스템입니다.",
        },
        {
          type: "text",
          text: "설계부터 구현, 검증, 운영 스크립트까지 파이프라인 전반을 혼자 담당했습니다.",
        },
        {
          type: "stats",
          items: [
            {value: "5", label: "지원 carrier"},
            {value: "200+", label: "매핑·작성 파이프라인을 구축한 production 폼"},
            {value: "119", label: "분석한 human-review 이벤트"},
            {value: "4", label: "반복 오류를 잡는 검증 규칙"},
          ],
        },
        {type: "heading", text: "배경"},
        {
          type: "list",
          items: [
            "상품 가입에서 에이전트들의 가장 큰 병목은 서류 작성 시간이었습니다.",
            "하나의 폼에 많게는 300개가 넘는 입력 필드가 있습니다.",
            "규제 산업(RIA/Broker-Dealer)의 연금·IRA·이체 신청서는 carrier마다 레이아웃과 필드 명명 규칙이 다릅니다. Jackson은 의미 있는 필드명, American Funds는 풍부한 tooltip, Sammons는 `Text1`, `Text42` 같은 의미 없는 이름을 씁니다.",
            "폼마다 수백 개의 필드가 있어 사람이 직접 매핑하면 확장이 어렵습니다. 반면 런타임에 LLM을 호출해서 채우면 비결정적이고 감사(audit)하기 어렵습니다.",
          ],
        },
        {
          type: "callout",
          label: "핵심 설계 원칙",
          text: "LLM은 오프라인 매핑 생성 단계에서만 사용하고, 검증 및 승인된 매핑을 프로덕션의 기준 데이터로 관리한다. 실제 PDF 작성은 고정된 매핑과 변환 규칙을 기반으로 LLM 호출 없이 결정론적으로 실행한다.",
        },
        {type: "heading", text: "아키텍처"},
        {
          type: "flow",
          stages: [
            {steps: [{name: "PDF 템플릿", detail: "carrier 신청서 (AcroForm)"}]},
            {
              label: "매핑 생성",
              note: "오프라인 · LLM 사용",
              steps: [
                {name: "form-ingest", detail: "spec.json 생성 (필드 인벤토리 + label/tooltip 보강)"},
                {name: "suggest_mapping", detail: "Bedrock(Claude) 호출, 청크 분할"},
                {name: "validate_mapping", detail: "결정론적 검증 · 자동 수정"},
                {name: "사람 검수", detail: "채워진 PDF 시각 확인"},
              ],
            },
            {steps: [{name: "mapping.json", detail: "S3 · status=active"}]},
            {
              label: "서류 작성",
              note: "런타임 · LLM 호출 없음",
              dark: true,
              steps: [
                {name: "payload", detail: "DB의 사용자 데이터"},
                {name: "form-fill", detail: "매핑과 변환 규칙 적용"},
                {name: "채워진 PDF"},
              ],
            },
          ],
        },
      ],
    },
    {
      title: "핵심 기능",
      blocks: [
        {type: "heading", text: "1. Spec 추출과 필드 식별 보강"},
        {
          type: "text",
          text: "AcroForm 필드 인벤토리(`spec.json`)를 만들고, 메타데이터가 부족한 폼은 두 가지 방식으로 보강합니다.",
        },
        {
          type: "list",
          items: [
            {
              text: "**Visual label mining**: `Text1`처럼 의미 없는 필드명에 대해 위젯 좌표 주변에서 인쇄된 라벨을 찾아 `label_text`로 추가합니다.",
              items: [
                "위젯 타입별로 탐색 방향을 달리합니다(텍스트 필드는 위쪽 우선, 버튼은 오른쪽 우선).",
                "과도하게 긴 라벨은 길이 가드로 폐기합니다.",
              ],
            },
            "**Textract tooltip enrichment**: 업로드된 템플릿을 Textract로 분석해 tooltip을 보강합니다.",
            "두 보강 모두 실패하면 원본 spec을 그대로 반환하도록 해, 폼 등록 전체가 실패하는 일은 없도록 했습니다.",
          ],
        },

        {type: "heading", text: "2. LLM 기반 매핑 생성 (Canonical Taxonomy)"},
        {
          type: "text",
          text: "spec을 입력으로 Bedrock(Claude)을 호출해 `PDF 필드 → canonical source`(예: `client.first_name`, `investment.fund.0.one_time_amount`) 매핑을 제안합니다.",
        },
        {
          type: "list",
          items: [
            "서로 다른 carrier 폼이 같은 canonical 필드 체계를 공유하도록 taxonomy를 설계했습니다.",
            "출력 토큰 한계 때문에 큰 폼(340필드 등)은 청크로 나눠 호출하는데, 같은 SSN/DOB 필드 그룹이 청크 경계에서 쪼개지면 중복되거나 불완전한 매핑이 생겼습니다. 이를 확인한 뒤, 필드명 끝의 숫자와 점을 제거한 값과 페이지가 같으면 한 그룹으로 묶도록 해 문제를 해결했습니다.",
            "샘플 payload도 함께 생성해, 이후 human review 때 눈으로 보고 빠르게 판단할 수 있도록 했습니다.",
          ],
        },

        {type: "heading", text: "3. 제약된 매핑 DSL과 결정론적 필링 엔진"},
        {
          type: "text",
          text: "매핑을 `source / targets / transform / options`라는 고정 스키마로 표현하고, `transform`은 등록된 10개 변환(`split_digits`, `format_date_mmddyyyy`, `split_phone`, `radio_select`, `checkbox_bool`, `currency_format` 등) 중에서만 고를 수 있게 제약했습니다. AI가 임의 로직을 만들 수 없으므로 결과가 재현 가능합니다.",
        },
        {
          type: "mapping",
          title: "매핑 예시",
          columns: ["Payload (canonical source)", "Transform", "PDF 필드 (AcroForm)"],
          passthrough: "그대로",
          rows: [
            {
              source: "client.first_name",
              value: "Jane",
              field: {label: "First name", names: "info.first", text: "Jane"},
            },
            {
              source: "client.ssn",
              value: "123456789",
              transform: "split_digits",
              field: {label: "SSN of IRA owner", names: "ssn.0 … ssn.8", boxes: ["123", "45", "6789"]},
            },
            {
              source: "client.phone",
              value: "5550100199",
              transform: "split_phone",
              field: {label: "Daytime phone", names: "info.areac, info.ph", text: "( 555 )  010-0199"},
            },
            {
              source: "investment.fund.0.one_time_amount",
              value: "5000",
              transform: "currency_format",
              field: {label: "Amount", names: "amt.0", text: "5,000.00", prefix: "$"},
            },
          ],
          caption:
            "American Funds의 Traditional/Roth IRA Application 2쪽 일부를 다시 그린 그림입니다. 필드 이름은 실제 PDF의 것이고, 값은 예시입니다.",
        },
        {
          type: "list",
          items: [
            "`form-fill` 엔진은 매핑과 payload만으로 PDF를 채웁니다. 이 경로에는 LLM 호출이 전혀 없습니다.",
            {
              text: "실제 PDF의 지저분한 케이스를 엔진 수준에서 해결했습니다.",
              items: [
                "칸마다 숫자가 분리된 필드를 위한 `split_groups` 변환 추가",
                "`/AcroForm` 딕셔너리가 누락됐지만 위젯은 있는 PDF 복구",
                "한 매핑이 여러 target을 가리키는 radio/checkbox 전부 채우기",
              ],
            },
          ],
        },

        {type: "heading", text: "4. Failure Taxonomy 기반 Validation Layer"},
        {
          type: "text",
          text: "매핑을 검수하며 발견된 오류를 기록했습니다. 138행 중 **AI 생성 단계에서 발생한 119건**을 분석해 유형별로 분류했습니다.",
        },
        {
          type: "bars",
          title: "검수에서 기록한 오류 유형 (전체 138건)",
          items: [
            {label: "Wrong Source", value: 78},
            {label: "Wrong Transform", value: 24},
            {label: "Unmapped", value: 6},
            {label: "Wrong Source + Wrong Transform", value: 5},
            {label: "Wrong Mapping", value: 4},
            {label: "Wrong Target", value: 3},
            {label: "기타", value: 18, muted: true},
          ],
        },
        {
          type: "text",
          text: "반복되는 패턴을 겨냥한 결정론적 검증 규칙 4개를 구현해, AI 제안과 사람 검수 사이에 끼워 넣었습니다.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**날짜 transform 누락**: tooltip에 날짜 키워드가 있는데 transform이 없으면 `format_date_mmddyyyy`를 자동 주입합니다.",
            "**이름 필드 분절**: tooltip이 단일 full-name 필드인데 first/last로 쪼개 매핑했다면 full-name 소스로 교체를 제안합니다. tooltip에 “first name”이 명시된 진짜 분리 필드는 오탐 방지를 위해 건너뜁니다.",
            "**중복 target**: 서로 다른 매핑이 같은 PDF 필드를 덮어쓰면 에러로 표시합니다.",
            "**죽은 static value**: 폼에 없는 필드를 가리키는 static value를 에러로 표시합니다.",
          ],
        },
        {
          type: "text",
          text: "규칙마다 `auto_fixed` / `auto_proposed` / `error`로 심각도를 나눠, 안전한 것만 자동 수정하고 나머지는 사람에게 넘깁니다.",
        },

        {type: "heading", text: "5. 서비스화: Lambda와 API"},
        {
          type: "list",
          items: [
            "`form-ingest`(업로드 → spec 생성 → S3 + `form_templates` 등록), `form-fill`(매핑 기반 PDF 작성), `form-query`(등록된 폼 조회), `form-upload`(담당자 업로드 처리)를 Lambda로 분리했습니다.",
            "API로 `GET /forms`, `POST /forms/{id}/fill`, `POST /forms/upload`를 제공합니다. 폼은 `pending_mapping`에서 `active`로 상태가 전이됩니다.",
          ],
        },
      ],
    },
    {
      title: "기여 항목",
      blocks: [
        {
          type: "list",
          items: [
            "End-to-end PDF ingestion, mapping, validation, filling 파이프라인 설계 및 구현",
            "Canonical Taxonomy와 Mapping DSL 설계",
            "LLM 기반 mapping generation 및 chunking 로직 구현",
            "Deterministic PDF filling engine과 transformation registry 구현",
            "Human review 데이터를 분석해 validation rule 4개 설계 및 구현",
            "AWS Lambda 기반 API 및 배포 환경 구축",
          ],
        },
      ],
    },
  ],
};

const projects: Project[] = [
  formProcessingPlatform,
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
