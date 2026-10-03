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
  metaTitle: '张瀚月｜设计、内容与产品作品集',
  nav: {
    work: '精选作品',
    capability: '能力范围',
    about: '个人简介',
    contact: '联系方式',
  },
  hero: {
    name: '张瀚月',
    nameEn: 'ZHANG HANYUE',
    tagline: '视觉设计、内容制作、产品开发',
    taglineAccent: '下面是我做过的六个项目',
    role: 'Designer · Content Maker · Product Builder',
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
        subtitle: '聊天时顺手记下花销、日记和安排的 App。',
        tags: ['生活记录', 'App 设计', '韩元记账', '用户测试'],
        meta: '2026.01 – 至今 · 个人项目 · 实际用户 Beta 测试中',
        image: '/media/xn-home-hero-760.webp',
        imageAlt: '小暖 App 首页截图',
      },
      {
        num: '02',
        name: 'AI 漫剧制作系统',
        nameEn: 'AI Comic Production Workflow System',
        subtitle: '把剧本拆成镜头，集中管理角色、场景和生成结果。',
        tags: ['拆分镜头', '角色和场景', '生成视频', '版本记录'],
        meta: '2026.05 – 至今 · 个人项目',
        image: '/media/cw-flow-03-900.webp',
        imageAlt: 'AI 漫剧工作室界面截图',
      },
      {
        num: '03',
        name: '运营工作台',
        nameEn: 'Social Media Operations Workbench',
        subtitle: '给不同公司管理社媒账号和内容的工作台，目前用于医院。',
        tags: ['多公司项目', '小红书 / 抖音', '内容审核', '发布记录'],
        meta: '2026.04 – 至今 · 自研项目 · 已在医院运营中使用',
        image: '/media/ai-canvas-1200.webp',
        imageAlt: 'Koreahospital 运营工作台界面',
      },
      {
        num: '04',
        name: 'AI 无限画布',
        nameEn: 'AI Infinite Canvas — Batch Image Generation Tool',
        subtitle: '在画布上组合素材、文案和尺寸，一次生成多个图片版本。',
        tags: ['批量做图', '商品图', '画布设计', '中韩英版本'],
        meta: '2026 · 个人项目 · 已上线，持续迭代',
        image: '/media/xn-home-hero-760.webp',
        imageAlt: '',
      },
      {
        num: '05',
        name: 'Milk & Ribbon',
        nameEn: 'Brand Identity & Applications',
        subtitle: '用丝带和芭蕾元素设计标志、包装和画册的课程项目。',
        tags: ['标志', '包装', '画册', '社媒物料'],
        meta: '2025.09 · 品牌设计课程项目',
        image: '/media/mr-hero-560.webp',
        imageAlt: '',
      },
      {
        num: '06',
        name: '商业视频与动态广告',
        nameEn: 'Commercial Video & Motion Ads',
        subtitle: '为品牌和电商做的横版、竖版短片与动态广告。',
        tags: ['品牌短片', '电商视频', '社媒视频', '动效'],
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
        desc: '梳理需求和使用路径，再把想法画成原型、界面或品牌视觉。',
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
        title: '内容制作 & 运营',
        desc: '做选题、脚本和视觉素材；多账号运营时，也整理审核与复盘流程。',
        skills: ['选题策划', '短视频制作', '小红书 / 抖音', 'Prompt 设计', 'Midjourney', 'Seedance'],
      },
      {
        labelEn: 'Prototype & Delivery',
        title: '原型 & 产品实现',
        desc: '自己动手开发和上线原型，再根据使用中的问题继续修改。',
        skills: ['React Native', 'Expo', 'Claude Code', 'Cloudflare', '交互网站'],
      },
    ],
  },
  about: {
    label: 'About Me',
    title: '个人简介',
    statement: '',
    intro: '我是张瀚月，汉阳大学视觉设计硕士，本科读影像媒体艺术。我做过品牌设计、MG 动画和社媒内容，也自己做了 App、图片工具和运营工作台。我正在找中国或韩国的设计、运营、内容制作岗位。下面写了每个项目里我具体做的事。',
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
        role: '独立设计师 / 产品开发者 · 2026.01 – 至今',
        desc: '独立设计并开发小暖 App，完成交互、React Native 开发和用户测试；搭建漫剧制作系统，管理剧本、镜头与生成素材；开发图片生成画布和社媒运营工作台。',
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
    headline: '有合适的项目，聊聊看。',
    desc: '设计、内容制作和运营岗位，欢迎联系我。',
  },
  footer: {
    copyright: '张瀚月 · 设计 / 内容 / 产品 · 2026',
    website: 'hanyue-room.design',
  },
};

const ko: SiteContent = {
  langAttr: 'ko',
  metaTitle: '장한월｜디자인·콘텐츠·프로덕트 포트폴리오',
  nav: {
    work: '프로젝트',
    capability: '역량 범위',
    about: '자기소개',
    contact: '연락처',
  },
  hero: {
    name: '장한월',
    nameEn: 'ZHANG HANYUE',
    tagline: '시각 디자인, 콘텐츠 제작, 제품 개발',
    taglineAccent: '제가 만든 여섯 가지 프로젝트입니다',
    role: 'Designer · Content Maker · Product Builder',
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
        subtitle: '대화하면서 지출, 일기, 일정을 기록하는 앱입니다.',
        tags: ['생활 기록', '앱 디자인', '원화 가계부', '사용자 테스트'],
        meta: '2026.01 – 현재 · 개인 프로젝트 · 실제 사용자 베타 테스트 중',
        image: '/media/xn-home-hero-760.webp',
        imageAlt: '샤오누안 App 홈 화면 스크린샷',
      },
      {
        num: '02',
        name: 'AI 만화극 제작 시스템',
        nameEn: 'AI Comic Production Workflow System',
        subtitle: '대본을 장면으로 나누고 캐릭터, 배경, 생성 결과를 한곳에 모았습니다.',
        tags: ['장면 나누기', '캐릭터와 배경', '영상 생성', '버전 기록'],
        meta: '2026.05 – 현재 · 개인 프로젝트',
        image: '/media/cw-flow-03-900.webp',
        imageAlt: 'AI 만화극 스튜디오 인터페이스 스크린샷',
      },
      {
        num: '03',
        name: '운영 워크벤치',
        nameEn: 'Social Media Operations Workbench',
        subtitle: '회사별 SNS 계정과 콘텐츠를 관리하는 도구입니다. 현재 병원에서 사용 중입니다.',
        tags: ['회사별 프로젝트', '샤오홍슈 / 더우인', '콘텐츠 검수', '발행 기록'],
        meta: '2026.04 – 현재 · 개인 프로젝트 · 병원 운영에 사용 중',
        image: '/media/ai-canvas-1200.webp',
        imageAlt: 'Koreahospital 운영 워크벤치 인터페이스',
      },
      {
        num: '04',
        name: 'AI 무한 캔버스',
        nameEn: 'AI Infinite Canvas — Batch Image Generation Tool',
        subtitle: '소재, 문구, 크기를 캔버스에서 조합해 여러 이미지를 한 번에 만듭니다.',
        tags: ['이미지 일괄 제작', '상품 이미지', '캔버스 디자인', '중·한·영 지원'],
        meta: '2026 · 개인 프로젝트 · 서비스 중, 지속 개선',
        image: '/media/xn-home-hero-760.webp',
        imageAlt: '',
      },
      {
        num: '05',
        name: 'Milk & Ribbon',
        nameEn: 'Brand Identity & Applications',
        subtitle: '리본과 발레 이미지를 활용해 로고, 패키지, 룩북을 디자인한 수업 프로젝트입니다.',
        tags: ['로고', '패키지', '룩북', 'SNS 이미지'],
        meta: '2025.09 · 브랜드 디자인 과정 프로젝트',
        image: '/media/mr-hero-560.webp',
        imageAlt: '',
      },
      {
        num: '06',
        name: '상업 영상과 모션 광고',
        nameEn: 'Commercial Video & Motion Ads',
        subtitle: '브랜드와 이커머스를 위해 만든 가로·세로 영상과 모션 광고입니다.',
        tags: ['브랜드 영상', '이커머스 영상', 'SNS 영상', '모션그래픽'],
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
        desc: '사용자의 요구와 동선을 정리한 뒤 프로토타입, 화면 또는 브랜드 비주얼로 옮깁니다.',
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
        title: '콘텐츠 제작 & 운영',
        desc: '소재 발굴, 대본, 비주얼 제작을 맡고 여러 계정을 운영할 때 검수와 성과 분석도 정리합니다.',
        skills: ['소재 기획', '숏폼 영상 제작', '샤오홍슈 / 더우인', '프롬프트 디자인', 'Midjourney', 'Seedance'],
      },
      {
        labelEn: 'Prototype & Delivery',
        title: '프로토타입 & 제품 구현',
        desc: '직접 개발하고 배포한 뒤 실제 사용 중 발견한 문제를 고칩니다.',
        skills: ['React Native', 'Expo', 'Claude Code', 'Cloudflare', '인터랙티브 웹사이트'],
      },
    ],
  },
  about: {
    label: 'About Me',
    title: '자기소개',
    statement: '',
    intro: '저는 장한월입니다. 한양대학교에서 시각디자인 석사를 마쳤고 학부에서는 영상미디어아트를 공부했습니다. 브랜드 디자인, 모션그래픽, SNS 콘텐츠를 만들었고 앱, 이미지 제작 도구, SNS 운영 도구도 직접 만들었습니다. 중국과 한국에서 디자인, 운영, 콘텐츠 제작 직무를 찾고 있습니다. 아래에 프로젝트마다 제가 맡은 일을 적었습니다.',
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
        role: '독립 디자이너 / 제품 개발자 · 2026.01 – 현재',
        desc: '샤오누안 앱의 화면과 상호작용을 설계하고 React Native로 개발해 사용자 테스트를 진행했습니다. 만화극 제작 시스템에서는 대본, 장면, 생성 소재를 관리하고, 이미지 생성 캔버스와 SNS 운영 워크벤치도 개발했습니다.',
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
    headline: '함께할 일이 있다면 연락 주세요.',
    desc: '디자인, 콘텐츠 제작, 운영 직무에 관심이 있습니다.',
  },
  footer: {
    copyright: '장한월 · 디자인 / 콘텐츠 / 프로덕트 · 2026',
    website: 'hanyue-room.design',
  },
};

export const content: Record<Locale, SiteContent> = { zh, ko };

export const locales: Locale[] = ['zh', 'ko'];

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
