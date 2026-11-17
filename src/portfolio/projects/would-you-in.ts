import thumbnail from "../../assets/project-would-you-in.png";
import bookingQuantity from "../../assets/would-you-in/booking-quantity.jpg";
import bookingReceipt from "../../assets/would-you-in/booking-receipt.jpg";
import curationDetail from "../../assets/would-you-in/curation-detail.jpg";
import curationHome from "../../assets/would-you-in/curation-home.jpg";
import curatorProfile from "../../assets/would-you-in/curator-profile.jpg";
import eventDetail from "../../assets/would-you-in/event-detail.jpg";
import nearbyCategory from "../../assets/would-you-in/nearby-category.jpg";
import nearbyList from "../../assets/would-you-in/nearby-list.jpg";
import nearbyMap from "../../assets/would-you-in/nearby-map.jpg";
import type {Project} from "../types";

export const wouldYouIn: Project = {
  title: "Would You In",
  category: "project",
  description: "위치 기반으로 주변 행사를 찾고, 큐레이터가 묶어 소개하는 대학생 문화 서비스",
  image: thumbnail,
  role: "카카오테크 캠퍼스 2기 Cokaen팀 5인 · Leader, Backend",
  period: "Sep. 2024 – Nov. 2024",
  stack: [
    "Java 21",
    "Spring Boot 3.3",
    "Spring Data JPA",
    "Spring Security (JWT)",
    "MySQL",
    "Swagger (springdoc)",
    "JUnit5",
    "MockMvc",
    "Mockito",
    "Docker",
    "GitHub Actions",
  ],
  links: [{label: "GitHub", href: "https://github.com/ariimo/Would-you-in"}],
  sections: [
    {
      title: "프로젝트 개요",
      blocks: [
        {
          type: "text",
          text: "우주인(Would you in)은 **내 주변에서 문화 생활을 즐기고 싶은 대학생들을 위한** 서비스입니다. 여러분의 지역에서 열리는 소규모 공연들을 손쉽게 찾고 예매할 수 있게 해 줍니다.",
        },
        {
          type: "text",
          text: "**문화 큐레이터들의 인사이트가 담긴 콘텐츠**도 함께 제공합니다. 요새 핫한 트렌드부터 내가 받을 수 있는 문화 혜택까지 다양한 정보를 쉽고 빠르게 파악할 수 있습니다.",
        },
        {
          type: "text",
          text: "카카오테크 캠퍼스 2기에서 Android와 Backend 총 5명이 한 팀으로 약 3개월간 만들었고, 저는 팀 리더이자 백엔드 개발자로 큐레이션·리뷰·좋아요·광고 도메인을 설계하고 구현했습니다.",
        },
      ],
    },
    {
      title: "핵심 기능",
      blocks: [
        {type: "heading", text: "1. 내 주변 행사 찾기"},
        {
          type: "text",
          text: "현재 위치와 지도에 보이는 영역을 기준으로 행사를 가까운 순으로 보여줍니다. 제목 키워드, 카테고리(밴드·연극·뮤지컬·전시회·공예·축제 등), 지역(전국 16개 시도) 필터를 함께 쓸 수 있습니다.",
        },
        {
          type: "images",
          items: [
            {src: nearbyCategory, alt: "카테고리별 행사 탐색 화면", caption: "카테고리 탐색"},
            {src: nearbyList, alt: "카테고리별 행사 목록 화면", caption: "행사 목록"},
            {src: nearbyMap, alt: "지도에서 주변 행사를 보여주는 화면", caption: "지도로 보기"},
          ],
        },

        {type: "heading", text: "2. 큐레이션"},
        {
          type: "text",
          text: "큐레이터가 지역별로 행사를 묶어 이미지 카드와 해시태그로 소개합니다. 사용자는 큐레이션에서 소개된 행사로 바로 이동하고, 마음에 드는 큐레이터는 좋아요로 모아 봅니다.",
        },
        {
          type: "images",
          items: [
            {src: curationHome, alt: "거주 지역에 맞춘 큐레이션 홈 화면", caption: "지역 큐레이션"},
            {src: curationDetail, alt: "큐레이션 상세 화면", caption: "큐레이션 상세"},
            {src: curatorProfile, alt: "큐레이터 프로필 화면", caption: "큐레이터 프로필"},
          ],
        },

        {type: "heading", text: "3. 간편 로그인과 예매"},
        {
          type: "text",
          text: "구글·카카오 소셜 로그인으로 가입하고, 행사와 수량을 선택하면 잔여 좌석을 확인한 뒤 카카오페이 결제로 이어집니다.",
        },
        {
          type: "images",
          items: [
            {src: eventDetail, alt: "행사 상세 화면", caption: "행사 상세"},
            {src: bookingQuantity, alt: "수량 선택 화면", caption: "수량 선택"},
            {src: bookingReceipt, alt: "예매 내역 화면", caption: "예매 내역"},
          ],
        },

        {type: "heading", text: "4. 후기와 신뢰"},
        {
          type: "text",
          text: "예매한 행사에만 별점과 후기를 남길 수 있어서, 실제 참여자의 후기만 쌓입니다. 후기는 행사 상세와 마이페이지에서 볼 수 있습니다.",
        },
      ],
    },
    {
      title: "기여 항목",
      blocks: [
        {
          type: "list",
          items: [
            "**큐레이션 도메인 설계·개발**: 큐레이션과 큐레이터, 행사 간 연관관계를 설계하고 지역별·큐레이터별 큐레이션 조회 및 작성자·관리자 권한 검증을 구현했습니다.",
            "**리뷰 도메인 개발**: 예매 이력 기반 리뷰 작성 제한, 작성자 권한 검증 및 커서 기반 페이지네이션을 구현했습니다.",
            "**좋아요 기능 개발**: 큐레이터·호스트 대상 좋아요 기능을 통합 API로 개선하고, 좋아요 상태 및 카운트 관리 로직을 구현했습니다.",
            "**광고 도메인 개발**: 관리자 권한 기반 광고 등록·삭제 및 노출 기간에 따른 광고 조회 기능을 구현했습니다.",
            "**API 품질 및 성능 개선**: DTO 구조와 공통 예외 처리를 정비하고, Bean Validation 적용 및 `JOIN FETCH`를 통해 N+1 문제를 개선했습니다.",
            "**테스트 코드 작성**: MockMvc와 Mockito 기반 컨트롤러·서비스 테스트 85개를 작성하고, 인증 및 테스트 데이터 공통 구조를 구성했습니다.",
          ],
        },
      ],
    },
  ],
};
