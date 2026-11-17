import thumbnail from "../../assets/project-gmail-smart-pilot.png";
import type {Project} from "../types";

export const gmailSmartPilot: Project = {
  title: "Gmail Smart Pilot",
  category: "work",
  description: "고객 이메일을 분류하고 답장 초안을 써 주는 Gmail Add-on",
  image: thumbnail,
  role: "Parsonex · 1인 개발",
  period: "May 2026 –",
  stack: [
    "Google Apps Script (CardService)",
    "clasp",
    "Python 3.11",
    "AWS Lambda",
    "API Gateway",
    "Amazon Bedrock",
    "Aurora PostgreSQL (RDS Data API)",
    "OpenTofu",
    "GitHub Actions",
  ],
  sections: [
    {
      title: "프로젝트 개요",
      blocks: [
        {
          type: "text",
          text: "재무 상담사가 Gmail에서 고객 이메일을 열면 AI가 중요도를 분류하고, 답장 초안을 작성해 주는 Gmail Add-on입니다.",
        },
        {
          type: "text",
          text: "재무 상담사의 이메일 업무를 자동화하기 위해 Gmail Add-on 기반 AI 어시스턴트를 개발했습니다. 이메일의 중요도와 업무 유형에 따라 모델 실행 경로를 분리하고, 상황에 맞는 답장 초안을 생성합니다. 또한 사용자 피드백을 활용한 문체 개인화와 분류 개선 기능, 그리고 민감정보 유출 탐지와 규정 기반 검토 등 금융 업무 환경을 고려한 안전장치를 구현했습니다.",
        },
        {
          type: "text",
          text: "혼자 진행했고, 5월 말 데모 이후 받은 피드백을 반영해 배포했습니다.",
        },
        {type: "heading", text: "동작 흐름"},
        {
          type: "list",
          ordered: true,
          items: [
            "rep이 이메일을 열면 사이드바가 자동으로 이메일을 분류합니다 (Focus / Delegate / Low).",
            "버튼 한 번으로 답장 초안을 생성합니다.",
            "“더 짧게”, “더 격식 있게” 같은 지시로 수정하거나, 동료에게 위임(forward)할 수 있습니다.",
            "rep이 초안으로 한 행동(그대로 발송 / 수정 후 발송 / 폐기 / 위임)이 피드백으로 기록되어 이후 품질 개선에 쓰입니다.",
          ],
        },
        {type: "heading", text: "아키텍처"},
        {
          type: "flow",
          stages: [
            {steps: [{name: "Gmail Add-on", detail: "Google Apps Script (CardService) · clasp"}]},
            {
              label: "AWS 백엔드",
              via: "HTTPS + API Key",
              steps: [
                {name: "API Gateway"},
                {
                  name: "Lambda",
                  detail: "Python 3.11",
                  items: [
                    "POST /gmail/classify",
                    "POST /gmail/draft",
                    "POST /gmail/revise",
                    "POST /gmail/feedback",
                  ],
                },
              ],
            },
            {
              parallel: true,
              steps: [
                {name: "Bedrock Claude Haiku 4.5", detail: "Scenario A · 일반 응대"},
                {name: "AI-Assistant Lambda", detail: "Scenario B · 전문 의견 필요"},
                {name: "Aurora PostgreSQL", detail: "RDS Data API"},
              ],
            },
          ],
        },
      ],
    },
    {
      title: "핵심 기능",
      blocks: [
        {type: "heading", text: "1. 시나리오 기반 모델 라우팅 + 초안 생성"},
        {
          type: "list",
          items: [
            {
              text: "분류기가 이메일을 두 시나리오로 나눕니다.",
              items: [
                "**A (일반 응대)**: 문서 안내, 정보 제공 → Claude Haiku 4.5를 Bedrock으로 직접 호출합니다 (빠르고 저렴).",
                "**B (전문 의견 필요)**: 투자 전략, 은퇴 설계 → AI-Assistant Lambda를 호출합니다. 이 Lambda가 사내 시스템 프롬프트와 페르소나를 DB에서 불러오고, rep 역할에 맞게 지시문을 필터링합니다. 고객의 재무 프로필(순자산, 소득, 세율)을 톤 보정용 컨텍스트로 함께 줍니다.",
              ],
            },
            "초안에는 서명을 넣지 않습니다. rep이 “Use Draft”를 누르면 Gmail이 본인 서명을 자동으로 붙입니다.",
          ],
        },

        {type: "heading", text: "2. 이메일 자동 분류 (Focus / Delegate / Low)"},
        {
          type: "list",
          items: [
            "**문제**: 하루에 쏟아지는 이메일 중 rep이 직접 봐야 할 것과 위임·무시할 것을 구분하는 데 시간이 듭니다.",
            "**해결**: 이메일 제목, 발신자, 본문 일부와 고객 DB 조회 결과(고객 여부, 가입 시점, RIA 고객 여부)를 Claude Haiku에 넘겨 JSON(`label`, `scenario`, `confidence`)으로 분류합니다. 사이드바에서 색상 라벨(Focus 빨강 / Delegate 노랑 / Low 회색)로 보여 줍니다.",
            "**포인트**: 위임 기준은 rep마다 다르게 설정할 수 있습니다(`delegate_instructions`). 같은 “위임 가능한 업무”라도 rep마다 범위가 다르기 때문입니다.",
          ],
        },

        {type: "heading", text: "3. 초안 수정 · 위임 · 피드백 UI (Gmail Add-on)"},
        {
          type: "list",
          items: [
            "Apps Script `CardService`로 설정 / 분류 결과 / 초안 / 위임 선택 / 홈 카드를 구현했습니다.",
            "초안 카드에서 한 번에 처리할 수 있습니다: 단어 수 표시, 더 짧게 / 더 격식 있게(revise), Edit & Send, 동료에게 위임(forward), 피드백 버튼.",
            "시스템 자격증명(API URL/Key)은 Script Properties로 공용 관리하고, rep별 설정(이름, 이메일, 위임 대상)은 User Properties로 분리했습니다.",
          ],
        },

        {type: "heading", text: "4. 피드백 루프를 통한 개인화와 분류 정확도 개선"},
        {
          type: "list",
          items: [
            "rep의 행동 4가지(`sent_as_is` / `sent_edited` / `discarded` / `delegated`)를 기록합니다.",
            "**문체 학습**: rep이 승인한 최근 답장 최대 3개를 few-shot 예시로 초안 프롬프트에 주입해 rep의 톤을 따라가게 합니다. 폐기된 초안은 지양할 예시로 1개 넣습니다. 다른 고객의 사실이나 수치가 섞이지 않도록 “STYLE ONLY”로 명시했습니다.",
            "**분류 학습**: 예측과 rep의 실제 행동을 비교해, 최근 오분류 사례를 분류 프롬프트에 few-shot 교정으로 다시 넣습니다.",
          ],
        },

        {type: "heading", text: "5. 발송 전 안전·컴플라이언스 가드레일"},
        {
          type: "list",
          items: [
            "**프롬프트 주입 방어**: 외부 이메일을 신뢰할 수 없는 데이터로 취급하고, 생성된 초안에서 송금·계좌번호·자격증명 요청·수익자 변경·의심 URL을 정규식으로 탐지해 rep에게 경고합니다.",
            "**PII 유출 방지**: 고객의 순자산·소득·세율이 초안에 새는지 정규식으로 판단합니다. `$1.2M`, `1,200,000`, `1.2 million` 같은 표기 변형까지 탐지합니다. 민감한 정보가 포함되면 프롬프트로 1회 재생성하고, 그래도 새면 `[redacted]`로 치환해 표기합니다.",
            "**FINRA/SEC 컴플라이언스 검토**: FINRA 2210, SEC Marketing Rule, 회사 WSP를 코드로 정의한 규칙 10개로 초안을 검토합니다. 위반 소견이 있으면 rep이 명시적으로 확인해야 발송을 기록할 수 있고, 확인 내역은 감사 테이블에 남깁니다.",
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
            "Google Apps Script 기반 Gmail Add-on 전체 설계 및 개발 (UI, OAuth, 설정, 초안 수정·위임·피드백 기능)",
            "이메일 분류·초안 생성·시나리오별 모델 라우팅 및 Bedrock 호출 백엔드 구현",
            "rep별 위임 규칙 및 사용자 피드백 기반 문체 개인화·분류 개선 시스템 개발",
            "프롬프트 인젝션 방어, 민감정보 유출 탐지·마스킹, FINRA/SEC 규정 기반 컴플라이언스 검증 구현",
            "데모 피드백 기반 UI·프롬프트 개선, 테스트 및 배포 환경 정비",
          ],
        },
      ],
    },
  ],
};
