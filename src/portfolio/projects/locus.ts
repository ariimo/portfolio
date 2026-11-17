import thumbnail from "../../assets/project-locus.png";
import desktopSearch from "../../assets/locus/desktop-search.jpg";
import duckComment1 from "../../assets/locus/duck-comment-1.jpg";
import duckComment2 from "../../assets/locus/duck-comment-2.jpg";
import duckWalk from "../../assets/locus/duck-walk.jpg";
import homeMap from "../../assets/locus/home-map.jpg";
import infraArchitecture from "../../assets/locus/infra-architecture.jpg";
import linkManage from "../../assets/locus/link-manage.jpg";
import linkPick from "../../assets/locus/link-pick.jpg";
import linkResult from "../../assets/locus/link-result.jpg";
import recordDetail from "../../assets/locus/record-detail.jpg";
import writeForm from "../../assets/locus/write-form.jpg";
import type {Project} from "../types";

export const locus: Project = {
  title: "Locus",
  category: "project",
  description: "생각이 태어난 장소를 기억하고, 그 생각으로 다시 돌아가게 돕는 공간 기반 기록 서비스",
  image: thumbnail,
  role: "Naver Boost Camp 10 · 해핑팀 5인 · Backend · Infrastructure",
  period: "Dec. 2025 – Feb. 2026",
  stack: [
    "TypeScript",
    "NestJS",
    "Prisma",
    "PostgreSQL",
    "Elasticsearch",
    "RabbitMQ",
    "Redis",
    "React",
    "Vite",
    "Docker",
    "Nginx",
    "GitHub Actions",
    "Naver Cloud Platform",
  ],
  links: [{label: "GitHub", href: "https://github.com/ariimo/web06-locus"}],
  sections: [
    {
      title: "프로젝트 개요",
      blocks: [
        {
          type: "text",
          text: "메모 앱의 한 줄은 쉽게 휘발됩니다. 그때 왜 그런 생각을 했는지 기억나지 않는 이유는 생각이 태어난 **맥락(장소)** 이 사라졌기 때문입니다. Locus는 텍스트·사진·태그를 위치와 하나의 단위로 저장하고, 지도 위에서 기록을 다시 만나게 하는 서비스입니다.",
        },
        {
          type: "text",
          text: "Naver Boost Camp 10기에서 5명이 한 팀으로 만들었고, 저는 백엔드와 인프라를 맡아 운영 환경 구축, CI/CD, 키워드 검색 API, AI 오리 코멘트 API를 담당했습니다.",
        },
      ],
    },
    {
      title: "핵심 기능",
      blocks: [
        {type: "heading", text: "1. 지도 홈과 기록 작성"},
        {
          type: "text",
          text: "현재 위치와 영역 내 기록을 핀으로 보여주고, 밀집하면 자동으로 클러스터링합니다. 지도 빈 곳을 눌러 바로 기록하거나 장소 검색으로 핀을 옮겨 작성할 수 있습니다. 기록에는 제목·본문·태그·사진이 담기고, 위치는 좌표·현재 위치·검색 결과 중 하나로 고정됩니다.",
        },
        {
          type: "images",
          items: [
            {src: homeMap, alt: "지도 홈 화면", caption: "지도 홈"},
            {src: writeForm, alt: "기록 작성 화면", caption: "기록 작성"},
            {src: recordDetail, alt: "기록 상세 화면", caption: "기록 상세"},
          ],
        },

        {type: "heading", text: "2. 기록 연결"},
        {
          type: "text",
          text: "두 기록을 연결하면 지도 위에 관계가 선으로 그려집니다. “같은 자리, 다른 날의 두 생각”을 이어 사유의 흐름을 시각화합니다.",
        },
        {
          type: "images",
          items: [
            {src: linkPick, alt: "연결할 기록 선택 화면", caption: "출발·도착 기록 선택"},
            {src: linkResult, alt: "지도 위에 연결선이 그려진 화면", caption: "지도 위 연결선"},
            {src: linkManage, alt: "연결 관리 화면", caption: "연결 관리"},
          ],
        },

        {type: "heading", text: "3. 키워드 기반 기록 검색"},
        {
          type: "text",
          text: "제목·본문·태그·장소명에서 키워드를 찾고, 태그·사진 유무·즐겨찾기로 필터링합니다.",
        },
        {
          type: "bars",
          title: "필드별 가중치 (multi_match boost)",
          items: [
            {label: "title", value: 10},
            {label: "tags", value: 5},
            {label: "locationName", value: 3},
            {label: "content", value: 2},
          ],
          caption: "제목에 걸린 기록이 본문에만 걸린 기록보다 위에 오도록 필드마다 가중치를 다르게 두었습니다.",
        },
        {
          type: "list",
          items: [
            "**정렬**: 즐겨찾기 → 관련도 → `recordId` 순입니다. `recordId`를 마지막 키로 두어 동점에서도 정렬이 안정적입니다.",
            "**커서 페이지네이션**: `search_after` 값을 Base64로 인코딩한 커서를 사용하고, `size+1`건을 조회해 다음 페이지 유무를 판단합니다.",
            "**사용자 격리**: 모든 쿼리에 `userId` 필터를 강제해 타인의 기록이 검색되지 않습니다.",
          ],
        },
        {
          type: "images",
          items: [{src: desktopSearch, alt: "데스크톱에서 기록을 검색한 화면"}],
          caption: "데스크톱 검색 화면. 검색 결과 목록과 지도 핀이 한 화면에 나란히 보입니다.",
        },

        {type: "heading", text: "4. AI 오리 코멘트"},
        {
          type: "text",
          text: "지도 위를 지나가는 마스코트 오리가 사용자의 **최근 기록 맥락에 맞는 츤데레 말풍선**을 건넵니다.",
        },
        {
          type: "images",
          items: [
            {src: duckWalk, alt: "지도 위를 돌아다니는 오리", caption: "지도 위를 걷는 오리"},
            {src: duckComment1, alt: "오리가 건넨 말풍선: 이렇게 가만히 있다가, 기록 다 놓친다.", caption: "오리를 누르면 말풍선"},
            {src: duckComment2, alt: "오리가 건넨 말풍선: 오늘도 기록은 네가 해야지, 내가 할 순 없다.", caption: "기록 맥락에 맞춘 멘트"},
          ],
        },
        {
          type: "flow",
          stages: [
            {
              label: "멘트 생성 (비동기)",
              steps: [
                {name: "기록 생성"},
                {name: "Outbox"},
                {name: "RabbitMQ"},
                {name: "DuckConsumer", detail: "RECORD_CREATED만 처리"},
              ],
            },
            {
              via: "카운터 증가",
              steps: [{name: "Redis 카운터 +1", detail: "5건 누적 또는 멘트 풀 없음 → 생성"}],
            },
            {
              via: "컨텍스트 구성",
              steps: [
                {name: "최근 기록 5건 + 닉네임"},
                {
                  name: "NCP CLOVA Studio",
                  detail: "페르소나 프롬프트 + few-shot · JSON 배열 10개",
                },
              ],
            },
            {
              via: "저장",
              steps: [{name: "Redis", detail: "24h TTL"}],
            },
            {
              label: "멘트 조회",
              dark: true,
              via: "조회",
              steps: [{name: "조회 API", detail: "Redis만 읽음"}],
            },
          ],
          caption: "생성은 기록 이벤트를 받아 비동기로 처리하고, 조회 API는 Redis에 저장된 멘트만 읽습니다.",
        },
        {
          type: "list",
          items: [
            "**요청 경로에서 LLM을 분리**했습니다. 조회 API는 Redis만 읽어서 AI 지연이나 장애가 사용자 응답에 영향을 주지 않습니다.",
            "AI 호출 실패, 설정 누락, 응답 파싱 실패 시에는 **기본 멘트 10개로 폴백**합니다.",
            "오리 처리의 실패는 로그만 남기고 삼켜서, 기록 동기화 consumer의 ACK/NACK에 영향을 주지 않습니다.",
          ],
        },

        {type: "heading", text: "5. 알림 · 온보딩"},
        {
          type: "text",
          text: "PWA 설치 환경에서 알림 시간대를 설정하고, 첫 방문 시 온보딩을 안내합니다.",
        },
      ],
    },
    {
      title: "기여 항목",
      blocks: [
        {type: "heading", text: "① 운영 인프라 설계·구축 (NCP)"},
        {
          type: "list",
          items: [
            {
              text: "운영 환경을 **3대 서버**로 분리했습니다. 서버 간 통신은 사설 IP 기반입니다.",
              items: [
                "server-01: Nginx + API (80/443)",
                "server-02: Elasticsearch(단일 노드, heap 4GB) + Kibana",
                "server-03: Redis + RabbitMQ (볼륨 영속화)",
              ],
            },
            "API, Nginx, ES용 Dockerfile과 환경별 `docker-compose`를 작성했습니다. 이미지는 NCR(Naver Container Registry)에 push하고 서버에서 pull하는 방식입니다.",
            "개발과 운영 환경을 분리하고, FE 환경변수는 빌드 타임에 Docker build-args로 주입하도록 정리했습니다.",
            "**정식 배포와 도메인 연결**을 담당했습니다.",
          ],
        },
        {
          type: "images",
          items: [{src: infraArchitecture, alt: "운영 환경 인프라 아키텍처 다이어그램"}],
          caption: "운영 환경 인프라 아키텍처 (Naver Cloud Platform)",
        },

        {type: "heading", text: "② CI/CD 파이프라인"},
        {
          type: "list",
          items: [
            "**CI** (PR → develop): Turbo로 build·test·lint를 실행하고 Turbo 캐시를 적용했습니다.",
            "**CD** (push → main): Docker Buildx + GitHub Actions 레이어 캐시로 빌드하고, `latest`와 커밋 SHA 태그를 함께 push합니다.",
            "1GB 메모리 서버 제약을 고려해 배포 후 경량 `prisma db push`를 실행합니다.",
          ],
        },
        {
          type: "flow",
          stages: [
            {
              label: "ACG(방화벽) 동적 제어",
              note: "배포 때만 SSH 허용",
              steps: [
                {name: "러너 공인 IP 조회"},
                {name: "SSH(22) 인바운드 추가", detail: "NCP CLI"},
                {name: "SSH 배포"},
                {name: "규칙 회수", detail: "if: always()"},
              ],
            },
          ],
          caption: "배포가 실패해도 규칙이 남지 않도록 회수 단계는 always()로 실행합니다. 상시 SSH 노출을 없앴고, CLI 설치는 캐싱해 실행 시간을 줄였습니다.",
        },

        {type: "heading", text: "③ 키워드 검색 API"},
        {
          type: "list",
          items: [
            "ES 색인·RabbitMQ 동기화 파이프라인 구조 위에 검색 API를 구현했습니다.",
            "Query DSL 구성(`bool` + `multi_match` + 필터), 커서 페이지네이션, 요청/응답 DTO, 에러 코드, Swagger 문서화를 진행했습니다.",
            "검색 서비스와 records 서비스의 검색 로직을 **단위 테스트(Jest)** 로 검증했습니다.",
          ],
        },

        {type: "heading", text: "④ AI 오리 코멘트 API"},
        {
          type: "text",
          text: "`duck` 모듈 전체(consumer, service, NCP AI 클라이언트, 정책·프롬프트 상수, 예외, Swagger)를 설계·구현했습니다.",
        },

        {type: "heading", text: "⑤ 장애 대응"},
        {
          type: "list",
          items: [
            "이메일 인증 메일이 오지 않으면 로그인·재전송이 막히던 문제 해결",
            "FE 빌드 시 env를 인식하지 못하던 문제 해결",
            "RabbitMQ 볼륨 설정으로 재시작 시 메시지 유실 방지",
            "Prisma 스키마 네임스페이스 명시 및 DB 동기화 옵션 정리",
          ],
        },
      ],
    },
  ],
};
