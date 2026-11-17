import thumbnail from "../../assets/project-form-platform.png";
import type {Project} from "../types";

export const formProcessingPlatform: Project = {
  title: "Form Processing Platform",
  category: "work",
  description: "금융 신청서 PDF를 LLM으로 매핑하고, LLM 없이 자동으로 채우는 시스템",
  image: thumbnail,
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
            {value: "131", label: "분석한 human-review 이벤트"},
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
          text: "매핑을 검수하며 발견된 오류를 기록했습니다. 전체 138행 중 **AI 생성 단계에서 발생한 131건**을 분석해 유형별로 분류했습니다.",
        },
        {
          type: "bars",
          title: "검수에서 기록한 오류 유형 (전체 138건)",
          items: [
            {label: "Wrong Source", value: 87},
            {label: "Wrong Transform", value: 23},
            {label: "Unmapped", value: 6},
            {label: "Wrong Mapping", value: 5},
            {label: "Wrong Target", value: 4},
            {label: "Wrong Source + Wrong Transform", value: 4},
            {label: "Missing Mapping", value: 2},
            {label: "기타", value: 7, muted: true},
          ],
          caption: "기타는 AI 생성 단계만의 오류로 분류되지 않은 나머지 7행입니다.",
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
