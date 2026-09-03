/* ========================================
   Unified bilingual content source
   zh: from root index.html
   ko: from root i18n.js
   ======================================== */

export type Locale = 'zh' | 'ko';

export interface ProjectData {
  num: string;
  name: string;
  nameEn: string;
  subtitle: string;
  tags: string[];
  meta: string;
  image: string;
  imageAlt: string;
}

export interface CapabilityGroup {
  labelEn: string;
  title: string;
  desc: string;
  skills: string[];
}

export interface SiteContent {
  langAttr: string;
  metaTitle: string;
  nav: {
    work: string;
    capability: string;
    about: string;
    contact: string;
  };
  hero: {
    name: string;
    nameEn: string;
    tagline: string;
    taglineAccent: string;
    role: string;
    explore: string;
  };
  work: {
    label: string;
    title: string;
    viewCase: string;
    projects: ProjectData[];
  };
  capability: {
    label: string;
    title: string;
    groups: CapabilityGroup[];
  };
  about: {
    label: string;
    title: string;
    statement: string;
    intro: string;
    focusLabel: string;
    focus: string[];
    educationTitle: string;
    education: { school: string; major: string; date: string }[];
    languageTitle: string;
    languages: string[];
    workTitle: string;
    work: { company: string; role: string; desc: string }[];
  };
  contact: {
    label: string;
    title: string;
    headline: string;
    desc: string;
  };
  footer: {
    copyright: string;
    website: string;
  };
}

const zh: SiteContent = {
  langAttr: 'zh-CN',
  metaTitle: '张瀚月 · AI创意设计师 · 作品集',
  nav: {
    work: '精选作品',
    capability: '能力范围',
    about: '个人简介',
    contact: '联系方式',
  },
  hero: {
    name: '张瀚月',
    nameEn: 'ZHANG HANYUE',
    tagline: '把 AI、设计和代码',
    taglineAccent: '组织成可运行的产品流程',
    role: 'AI Creative Product Designer',
    explore: 'EXPLORE WORK ↓',
  },
  work: {
    label: 'Selected Work',
    title: '精选作品',
    viewCase: '查看完整案例',
    projects: [
      {
        num: '01',
        name: '小暖',
        nameEn: 'Conversational Life Management App',
        subtitle: '通过 AI 聊天完成日记、记账与日程规划的生活管理产品',
        tags: ['用户需求', 'UI 设计', 'Expo 开发', 'AI 聊天', '日记', '日程', '记账'],
        meta: '2026.01 – 至今 · 个人项目 · 实际用户 Beta 测试中',
        image: '/media/xn-home-hero-760.webp',
        imageAlt: '小暖 App 首页截图',
      },
      {
        num: '02',
        name: 'AI 漫剧制作系统',
        nameEn: 'AI Comic Production Workflow System',
        subtitle: '把剧本拆解、资产匹配、批量生成与结果复盘整合进同一个 AI 漫剧工作室',
        tags: ['剧本输入', '镜头拆解', '角色库', '场景库', '多模型生成', 'API 日志'],
        meta: '2026.05 – 至今 · 个人项目',
        image: '/media/cw-flow-03-900.webp',
        imageAlt: 'AI 漫剧工作室界面截图',
      },
      {
        num: '03',
        name: '运营工作台',
        nameEn: 'AI-Driven Social Media Operations Workbench',
        subtitle: '为一家韩国植发医院打造的 10 账号小红书 / 抖音 AI 协同运营工作台——人主导判断，AI 承担执行。',
        tags: ['多 Agent 协同', '小红书 / 抖音', '医美合规', 'B 端工作台', 'Next.js 16', '信号 → 复盘'],
        meta: '2026.04 – 至今 · 自研项目 · 已上线运营 · 个人 + 医院双向交付',
        image: '/media/ai-canvas-1200.webp',
        imageAlt: 'Koreahospital 运营工作台界面',
      },
      {
        num: '04',
        name: 'AI 无限画布',
        nameEn: 'AI Infinite Canvas — Batch Image Generation Tool',
        subtitle: '用于无限画布式管理 Prompt、生成任务和结果，支持批量生成图片的 AI 工具开发项目',
        tags: ['AI 工具', '批量生成', 'Prompt 管理', '画布交互', 'API 集成'],
        meta: '2026 · 个人项目 · 开发中',
        image: '/media/xn-home-hero-760.webp',
        imageAlt: '',
      },
      {
        num: '05',
        name: '品牌设计作品',
        nameEn: 'Brand Visual Design Works',
        subtitle: '以 Milk & Ribbon 为核心案例，展示品牌定位、视觉识别与物料系统设计',
        tags: ['品牌战略', 'VI 系统', '包装设计', '视觉物料'],
        meta: '2025.09 · 品牌设计课程项目',
        image: '/media/mr-hero-560.webp',
        imageAlt: '',
      },
      {
        num: '06',
        name: '商业视频与动态广告',
        nameEn: 'Commercial Video & Motion Ads',
        subtitle: '围绕品牌传播、电商转化与社媒投放制作的短片、主图视频和动态视觉素材',
        tags: ['品牌广告', '电商营销', '社媒短视频', 'MG 动画'],
        meta: '商业项目 · 剪辑 / 动效 / 视觉节奏 / 投放素材',
        image: '/media/mr-hero-900.webp',
        imageAlt: '',
      },
    ],
  },
  capability: {
    label: 'Capability',
    title: '能力范围',
    groups: [
      {
        labelEn: 'Product & Experience',
        title: '产品 & 设计',
        desc: '从用户需求分析到信息架构、原型与界面视觉的完整链路。',
        skills: [
          'Photoshop',
          'Illustrator',
          'CapCut',
          'Premiere',
          '信息架构',
          'UI 设计',
          '用户需求分析',
          '原型设计',
        ],
      },
      {
        labelEn: 'AI Workflow & Automation',
        title: 'AI 工作流 & 内容生产',
        desc: '把 Prompt、图像与视频模型、API 调用组织成稳定的内容生产流程。',
        skills: ['Prompt 设计', 'Midjourney', 'ChatGPT Image', 'Seedance', 'API 调用', '流程拆解'],
      },
      {
        labelEn: 'Visual & Motion',
        title: '前端原型 & 部署',
        desc: '用 React Native、Expo 与 Cloudflare 把设计做成可访问的线上产品。',
        skills: ['React Native', 'Expo', 'Claude Code', 'Cloudflare', '交互网站'],
      },
    ],
  },
  about: {
    label: 'About Me',
    title: '个人简介',
    statement: '',
    intro: '我叫张瀚月，一名专注于 AI 产品设计的创作者。过去几年，我从传统视觉设计转向 AI 驱动的产品构建：通过 React Native / Expo 开发移动应用，利用 GPT 与图像模型搭建内容生产流程，并将真实用户反馈纳入持续迭代。我毕业于韩国汉阳大学视觉设计硕士，同时独立开发和运营面向留学生与跨境生活人群的 AI 产品。我关注的是如何把复杂的 AI 能力翻译成普通人能直接使用的产品形态——不只是画界面，而是从需求定义、交互设计、工程实现到上线运营的完整闭环。如果有团队正在寻找一位能独立推进产品、理解 AI 边界并动手实现的 Designer，希望可以联系我，非常感谢。',
    focusLabel: '',
    focus: [],
    educationTitle: '教育背景',
    education: [
      { school: '汉阳大学', major: '视觉设计 · 硕士', date: '2024.09 – 2026.07' },
      { school: '湖北美术学院', major: '影像媒体艺术 · 学士', date: '2017.09 – 2021.06' },
    ],
    languageTitle: '语言能力',
    languages: ['韩语：TOPIK 4级（日常与工作沟通）', '英语：CET-4（阅读文档与英文界面设计）', '中文：母语'],
    workTitle: '工作经历',
    work: [
      {
        company: '独立产品开发',
        role: 'AI 产品设计师 & 全栈开发者 · 2026.01 – 至今',
        desc: '独立完成小暖（AI 生活伴侣）的产品定义、交互设计、React Native 开发与用户测试；搭建 AI 漫剧制作系统，整合多模型 API 实现剧本到视频的生产流程；设计并开发个人 AI 工具集，服务于跨境生活与内容创作场景。',
      },
      {
        company: '华世纪文化传媒',
        role: '视觉设计师 · 2022.05 – 2023.10 · 武汉',
        desc: '负责公共与民生类 MG 动画的视觉设计与制作，涵盖政务宣传、科普教育等题材。独立完成从脚本理解到分镜、动画与后期合成的全流程，成果发布覆盖约 300 万用户。',
      },
      {
        company: '卓尔数科科技有限公司',
        role: '平面设计师 · 2021.07 – 2022.03 · 武汉',
        desc: '负责小红书、抖音等平台的品牌营销视觉设计，服务多个消费品牌客户。通过数据驱动的视觉优化，累积曝光超过 3500 万次，部分素材转化率提升约 6%。',
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: '联系方式',
    headline: "LET'S BUILD SOMETHING INTELLIGENT",
    desc: '谢谢观看',
  },
  footer: {
    copyright: '张瀚月 · AI创意设计师 · 2026',
    website: 'hanyue-room.design',
  },
};

const ko: SiteContent = {
  langAttr: 'ko',
  metaTitle: '장한월 · AI 크리에이티브 디자이너 · 포트폴리오',
  nav: {
    work: '프로젝트',
    capability: '역량 범위',
    about: '자기소개',
    contact: '연락처',
  },
  hero: {
    name: '장한월',
    nameEn: 'ZHANG HANYUE',
    tagline: 'AI, 디자인, 그리고 코드를',
    taglineAccent: '실행 가능한 제품 워크플로우로 구성합니다',
    role: 'AI Creative Product Designer',
    explore: 'EXPLORE WORK ↓',
  },
  work: {
    label: 'Selected Work',
    title: '대표 프로젝트',
    viewCase: '전체 케이스 보기',
    projects: [
      {
        num: '01',
        name: '샤오누안',
        nameEn: 'Conversational Life Management App',
        subtitle: 'AI 채팅을 통해 일기, 가계부, 일정 관리를 완성하는 생활 관리 제품',
        tags: ['사용자 니즈', 'UI 디자인', 'Expo 개발', 'AI 채팅', '일기', '일정', '가계부'],
        meta: '2026.01 – 현재 · 개인 프로젝트 · 실제 사용자 베타 테스트 중',
        image: '/media/xn-home-hero-760.webp',
        imageAlt: '샤오누안 App 홈 화면 스크린샷',
      },
      {
        num: '02',
        name: 'AI 만화극 제작 시스템',
        nameEn: 'AI Comic Production Workflow System',
        subtitle: '대본 입력부터 스토리보드, 비주얼 에셋, API 호출, 영상 생성까지의 콘텐츠 제작 워크플로우',
        tags: ['대본 입력', '스토리보드 생성', '캐릭터 라이브러리', '배경 라이브러리', '멀티 모델 생성', 'API 로그'],
        meta: '2026.05 – 현재 · 개인 프로젝트',
        image: '/media/cw-flow-03-900.webp',
        imageAlt: 'AI 만화극 스튜디오 인터페이스 스크린샷',
      },
      {
        num: '03',
        name: '운영 워크벤치',
        nameEn: 'AI-Driven Social Media Operations Workbench',
        subtitle: '한국 모발이식 병원의 10개 계정 샤오홍슈/틱톡 AI 협업 운영 워크벤치 — 사람의 판단, AI의 실행.',
        tags: ['멀티 에이전트 협업', '샤오홍슈 / 틱톡', '의료 미용 컴플라이언스', 'B2B 워크벤치', 'Next.js 16', '신호 → 회고'],
        meta: '2026.04 – 현재 · 자작 프로젝트 · 실제 운영 중 · 개인 + 병원 양방향 납품',
        image: '/media/ai-canvas-1200.webp',
        imageAlt: 'Koreahospital 운영 워크벤치 인터페이스',
      },
      {
        num: '04',
        name: 'AI 무한 캔버스',
        nameEn: 'AI Infinite Canvas — Batch Image Generation Tool',
        subtitle: '무한 캔버스에서 Prompt, 생성 작업, 결과물을 관리하고 배치 이미지 생성을 지원하는 AI 도구 개발 프로젝트',
        tags: ['AI 도구', '배치 생성', 'Prompt 관리', '캔버스 인터랙션', 'API 통합'],
        meta: '2026 · 개인 프로젝트 · 개발 중',
        image: '/media/xn-home-hero-760.webp',
        imageAlt: '',
      },
      {
        num: '04',
        name: '브랜드 디자인 워크스',
        nameEn: 'Brand Visual Design Works',
        subtitle: 'Milk & Ribbon을 핵심 사례로, 브랜드 포지셔닝, 비주얼 아이덴티티, 마케팅 자재 시스템 디자인을 소개합니다',
        tags: ['브랜드 전략', 'VI 시스템', '패키지 디자인', '비주얼 자재'],
        meta: '2025.09 · 브랜드 디자인 과정 프로젝트',
        image: '/media/mr-hero-560.webp',
        imageAlt: '',
      },
      {
        num: '06',
        name: '상업 영상과 모션 광고',
        nameEn: 'Commercial Video & Motion Ads',
        subtitle: '브랜드 커뮤니케이션, 이커머스 전환, SNS 광고를 위한 숏필름과 동적 비주얼 소재',
        tags: ['브랜드 광고', '이커머스', 'SNS 숏폼', '모션 그래픽'],
        meta: '상업 프로젝트 · 편집 / 모션 / 시각 리듬 / 광고 소재',
        image: '/media/mr-hero-900.webp',
        imageAlt: '',
      },
    ],
  },
  capability: {
    label: 'Capability',
    title: '역량 범위',
    groups: [
      {
        labelEn: 'Product & Experience',
        title: '제품 & 디자인',
        desc: '사용자 니즈 분석부터 정보 설계, 프로토타입, UI 비주얼까지 이어지는 전체 과정.',
        skills: [
          'Photoshop',
          'Illustrator',
          'CapCut',
          'Premiere',
          '정보 설계',
          'UI 디자인',
          '사용자 니즈 분석',
          '프로토타입 디자인',
        ],
      },
      {
        labelEn: 'AI Workflow & Automation',
        title: 'AI 워크플로우 & 콘텐츠 제작',
        desc: '프롬프트, 이미지·영상 모델, API 호출을 안정적인 콘텐츠 제작 워크플로우로 조직합니다.',
        skills: ['프롬프트 디자인', 'Midjourney', 'ChatGPT Image', 'Seedance', 'API 연동', '프로세스 설계'],
      },
      {
        labelEn: 'Visual & Motion',
        title: '프론트엔드 프로토타입 & 배포',
        desc: 'React Native, Expo, Cloudflare로 디자인을 실제 접속 가능한 프로덕트로 만듭니다.',
        skills: ['React Native', 'Expo', 'Claude Code', 'Cloudflare', '인터랙티브 웹사이트'],
      },
    ],
  },
  about: {
    label: 'About Me',
    title: '자기소개',
    statement: '',
    intro: '저는 장한월, AI 제품 설계에 집중하는 크리에이터입니다. 지난 몇 년간 전통적인 비주얼 디자인에서 AI 기반 제품 개발로 방향을 전환하며, React Native / Expo로 모바일 앱을 개발하고 GPT와 이미지 생성 모델을 활용한 콘텐츠 제작 파이프라인을 구축해 왔습니다. 한양대학교 비주얼 디자인 석사를 졸업하고, 유학생과 글로벌 라이프스타일 사용자를 위한 AI 제품을 독립적으로 기획, 디자인, 개발 및 운영하고 있습니다. 복잡한 AI 기술을 일반 사용자가 직관적으로 활용할 수 있는 제품 경험으로 전환하는 것 — 단순한 화면 설계를 넘어, 문제 정의부터 구현과 출시까지 전체 사이클을 다루는 디자이너입니다. 제품을 직접 만들고 사용자 피드백을 반복할 수 있는 팀을 찾고 계신다면, 연락 주시면 감사하겠습니다.',
    focusLabel: '',
    focus: [],
    educationTitle: '학력',
    education: [
      { school: '한양대학교', major: '비주얼 디자인 · 석사', date: '2024.09 – 2026.07' },
      { school: '후베이미술학원', major: '영상미디어예술 · 학사', date: '2017.09 – 2021.06' },
    ],
    languageTitle: '언어 능력',
    languages: ['한국어: TOPIK 4급 (일상 및 업무 소통 가능)', '영어: CET-4 (기술 문서 및 영문 UI 설계)', '중국어: 모국어'],
    workTitle: '경력',
    work: [
      {
        company: '독립 제품 개발',
        role: 'AI 제품 디자이너 & 풀스택 개발자 · 2026.01 – 현재',
        desc: '샤오누안(AI 생활 동반자)의 제품 정의, 인터랙션 설계, React Native 개발 및 사용자 테스트를 단독 수행; AI 만화극 제작 시스템을 기획·개발하여 여러 모델 API를 통합한 대본-영상 제작 파이프라인 구축; 크로스보더 라이프스타일과 콘텐츠 제작을 위한 개인 AI 도구를 설계·개발.',
      },
      {
        company: '화세기문화미디어',
        role: '비주얼 디자이너 · 2022.05 – 2023.10 · 우한',
        desc: '공공·생활 분야 MG 애니메이션의 비주얼 디자인 및 제작을 담당. 정무 홍보, 과학 교육 등 다양한 주제의 프로젝트에서 시나리오 해석부터 스토리보드, 애니메이션, 후반 합성까지 전체 프로세스를 독립적으로 수행. 제작 콘텐츠는 약 300만 명에게 노출.',
      },
      {
        company: '줘얼수커 테크놀로지',
        role: '그래픽 디자이너 · 2021.07 – 2022.03 · 우한',
        desc: '샤오홍슈, 틱톡 등 플랫폼의 브랜드 마케팅 비주얼 디자인을 담당하며 다수의 소비재 브랜드 클라이언트를 지원. 데이터 기반의 비주얼 최적화를 통해 누적 노출 3,500만 회 이상, 일부 소재의 전환율을 약 6% 개선.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: '연락처',
    headline: "LET'S BUILD SOMETHING INTELLIGENT",
    desc: '시청해 주셔서 감사합니다',
  },
  footer: {
    copyright: '장한월 · AI 크리에이티브 디자이너 · 2026',
    website: 'hanyue-room.design',
  },
};

export const content: Record<Locale, SiteContent> = { zh, ko };

export const locales: Locale[] = ['zh', 'ko'];

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
