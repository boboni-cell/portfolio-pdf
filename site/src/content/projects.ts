/**
 * Project detail content — bilingual, 5 projects.
 * Content sourced from root index.html, i18n.js, and project instructions.
 * All image fields retained but NOT rendered in current templates.
 */

export type ProjectSlug = 'xiaonuan' | 'comic-studio' | 'ai-infinite-canvas' | 'milk-ribbon' | 'commercial-video';

export interface CaseSection {
  id: string;
  label: string;
  title: string;
  body?: string;
  items?: { label?: string; title?: string; body: string; image?: string; imageAlt?: string }[];
  highlight?: string;
  highlightLabel?: string;
  flow?: string[];
  flowLabel?: string;
  cards?: { num: string; title: string; body: string }[];
  image?: string;
  imageAlt?: string;
  video?: string;
  videoPoster?: string;
  videoLabel?: string;
  video2?: string;
  video2Poster?: string;
  video2Label?: string;
  image2?: string;
  image2Alt?: string;
  image3?: string;
  image3Alt?: string;
  image4?: string;
  image4Alt?: string;
  imageWide?: boolean;
  /** AI project media mode */
  mediaMode?: 'feature' | 'panorama' | 'tabs';
  imageCaption?: string;
  image2Caption?: string;
  image3Caption?: string;
  annotations?: { label: string; x: number; y: number }[];
  tabLabelsZh?: string[];
  tabLabelsKo?: string[];
}

export interface ProjectDetail {
  slug: ProjectSlug;
  num: string;
  name: string;
  nameEn: string;
  subtitle: string;
  tags: string[];
  meta: string;
  heroImage: string;
  heroImageAlt: string;
  nextProject: { slug: string; name: string };
  sections: CaseSection[];
  mediaPresentation?: 'phone';
  liveDemo?: {
    url: string;
    labelZh: string;
    labelKo: string;
    productLabelZh?: string;
    productLabelKo?: string;
    inviteCodes?: string[];
    inviteNoteZh?: string;
    inviteNoteKo?: string;
  };
}

/** All 5 slug → name map for cross-referencing */
export const SLUGS: ProjectSlug[] = ['ai-infinite-canvas', 'comic-studio', 'xiaonuan', 'milk-ribbon', 'commercial-video'];

/* ================================================================
   03 — XIAONUAN
   ================================================================ */

const xiaonuanZh: ProjectDetail = {
  slug: 'xiaonuan', num: '03',
  name: '小暖', nameEn: 'AI Life Companion with Long-Term Memory',
  subtitle: '在自然聊天中理解、记录并陪伴用户生活的多模态 AI 伙伴',
  tags: ['情感陪伴', '长期记忆', '主动记录', '语音与图片', '跨币种记账', '生活信息查询'],
  meta: '2026.01 – 至今 · 独立产品 · 中文 Beta / 多语版本完善中',
  heroImage: '/media/xn-home-hero-760.webp', heroImageAlt: '',
  nextProject: { slug: 'milk-ribbon', name: 'Milk & Ribbon 品牌设计' },
  mediaPresentation: 'phone',
  sections: [
    { id: 'overview', label: 'Overview', title: '记住生活的 AI 陪伴者', body: '小暖的目标不是替用户掌控一切，而是成为一个可以随时询问、愿意认真倾听，并会替用户记住生活细节的 AI 伙伴。用户可以和它聊今天发生的事、花了多少钱、接下来要做什么，也可以直接询问日常生活中的问题。小暖在回答的同时理解语境，把支出、收入、日程、日记和生活习惯主动整理到对应模块，让记录成为聊天自然产生的结果。', video: '/media/ui-xiaonuan.mp4', videoPoster: '/media/xn-home-hero-760.webp', items: [{ label: '什么都可以问', body: '从日常安排、消费换算到附近生活服务，用户不必先判断问题属于哪个功能，只需要像和熟悉的人聊天一样开口。' }, { label: '聊天之后自动完成记录', body: '小暖识别金额、币种、时间、事件和情绪，在不打断对话的情况下生成账目、日程或日记，用户随后可以查看和修正。' }, { label: '陪伴比“万能”更重要', body: '产品不追求炫技式的超级 Agent，而是用长期记忆、稳定语气和持续理解建立“有人记得我”的情感体验。' }] },
    { id: 'difference', label: 'Product Difference', title: '它和普通记事、记账软件有什么不同？', body: '普通工具等待用户进入正确页面、选择分类并填写表格；小暖先理解用户正在经历什么，再主动决定哪些信息值得被记住。交互重点从“用户操作功能”变成“AI 理解生活”。', cards: [{ num: '01', title: '聊天就是入口', body: '不需要说“开始记账”或“帮我写日记”。一句自然表达可以同时产生回答、账目、日程和生活记录。' }, { num: '02', title: '主动整理，而非被动保存', body: 'AI 自动判断对话中出现的金额、日期、计划、事件和情绪，并归档到相应模块，而不是只保存一段聊天文本。' }, { num: '03', title: '多模态理解', body: '除了文字，用户还可以发语音和图片。语音被理解为自然对话；图片可用于提问，小票图片会自动识别为支出。' }, { num: '04', title: '长期记忆与连续关系', body: '小暖记住用户的生活习惯、偏好和长期背景，让之后的回答与提醒延续此前的关系，而不是每次重新认识用户。' }], flowLabel: '一次自然表达如何进入生活系统', flow: ['文字 / 语音 / 图片输入', '识别意图与生活信息', '结合长期记忆理解', '回答当前问题', '主动写入账目 / 日程 / 日记'], highlight: '区别不在于“小暖也有记账和日程”，而在于用户不再负责录入和整理：生活先自然发生，小暖在背后把它变成可以随时回看的结构化记录。', highlightLabel: '核心差异' },
    { id: 'multimodal', label: 'Multimodal Input', title: '说一句、发一段语音或一张照片，记录就完成了', body: '生活中的信息很少以标准表格出现。小暖允许用户用最自然的方式输入，再把非结构化内容转化为明确的生活数据。', items: [{ title: '语音直接聊天', body: '走路、做饭或不方便打字时，用户可以直接发送语音。小暖理解完整语义，并从中提取消费、计划、地点和情绪。' }, { title: '图片提问', body: '用户可以发送商品、菜单、环境或生活相关图片进行询问，小暖结合图片内容和对话上下文给出解释。' }, { title: '小票自动记账', body: '上传小票后识别商家、金额、币种和消费时间，自动创建支出记录，省去逐项输入。' }], image: '/media/xn-multimodal-voice.webp', imageAlt: '小暖通过语音理解韩语对话与生活安排', image2: '/media/xn-multimodal-context.webp', image2Alt: '小暖在连续语音聊天中保留上下文', image3: '/media/xn-multimodal-image.webp', image3Alt: '小暖识别生活图片和小票并自动记录' },
    { id: 'currency', label: 'Cross-border Wallet', title: '为留学生和旅行者设计的跨币种生活账本', body: '跨境生活中最麻烦的不是“记住花了多少钱”，而是不断换算自己真正支出了多少。小暖把国家、币种和账本放进同一次对话中处理。', items: [{ title: '首次设置生活地区与本位币', body: '进入产品时选择当前生活国家和希望查看的本位币，后续记录会自动使用对应币种与换算方式。', image: '/media/xn-currency-profile.webp', imageAlt: '小暖个人资料中的国家和地区设置' }, { title: '自动识别币种并换算', body: '例如用户说“今天在韩国花了 32,000 韩币”，小暖会保留韩币原始金额，并按当前汇率换算成人民币写入支出，账本中可以直接查看。', image: '/media/xn-currency-chat.webp', imageAlt: '聊天中自动识别韩币并换算成人民币' }, { title: '适合韩国留学生与旅行人群', body: '不需要每次打开汇率工具再手工录入。聊天、语音和小票都可以触发跨币种记账，让当地消费与国内预算处于同一个账本。', image: '/media/xn-currency-ledger.webp', imageAlt: '同时显示韩币原始金额和人民币换算金额的账本' }] },
    { id: 'life-search', label: 'Contextual Assistance', title: '让回答真正进入生活', body: '用户可以询问生活中的具体问题。小暖不仅生成一段泛泛的回答，还会在需要时查询与用户所在地区相关的信息，并结合已经了解的生活背景给出可执行的下一步。', items: [{ title: '附近生活服务查询', body: '例如询问皮肤管理，小暖可以查询附近评价较好的相关机构，整理可预约时间、价格和距离，帮助用户完成比较。', image: '/media/xn-life-service-search.webp', imageAlt: '小暖查询附近生活服务并给出预约建议' }, { title: '把建议转成日程', body: '当用户确定时间后，小暖可以把预约或计划写入日程，并在合适的时间提醒，不需要再次打开日历录入。', image: '/media/xn-life-schedule-suggestion.webp', imageAlt: '小暖把生活建议整理成可以执行的下一步' }, { title: '保持能力边界', body: '生活信息查询用于帮助用户收集和比较信息，不替代医生诊断，也不替用户完成医疗、消费或其他重要决定。', image: '/media/xn-life-safety-boundary.webp', imageAlt: '小暖在生活建议中明确就医边界' }] },
    { id: 'memory', label: 'Long-term Memory', title: '记住一个人的生活脉络', body: '长期记忆让小暖能够理解跨越多次对话的生活背景：用户习惯什么时间起床、经常在哪些场景消费、正在准备什么计划、最近情绪如何。它不需要用户每次重新解释，回答、提醒和生活小结也因此更连贯。', items: [{ title: '生活习惯', body: '从长期对话中逐步形成对作息、饮食、消费和常用地点的理解，为之后的提醒和回答提供上下文。', image: '/media/xn-home-760.webp', imageAlt: '小暖长期记忆与生活聚合首页' }, { title: '未完成的事情', body: '记住用户提过但尚未完成的计划，在适当时间继续跟进，而不是让事项沉没在聊天记录中。', image: '/media/xn-memory-unfinished.webp', imageAlt: '小暖找回用户尚未完成的日程事项' }, { title: '稳定的情感关系', body: '小暖以温和、平等、不越界的方式回应。陪伴感来自持续记得和认真回应，而不是过度亲密的称呼或夸张拟人化。', image: '/media/xn-memory-companion.webp', imageAlt: '小暖持续理解并回应用户的生活状态' }] },
    { id: 'auto-organize', label: 'Active Organization', title: '聊天之后，日记和日程已经整理好了', body: '记录不是额外任务，而是对生活的自然回看。小暖把同一段对话中的事件、时间、消费和情绪关联起来，分别形成可检查的日记与日程。', cards: [{ num: 'Diary', title: '主动生成日记', body: '从当天聊天中提取发生的事件、情绪与时间线，生成可编辑日记草稿，让“写日记”变成“确认今天被怎样记住”。' }, { num: 'Schedule', title: '主动创建日程', body: '识别“明天下午三点”“下周之前”等自然时间表达，生成明确日程与温和提醒。' }, { num: 'Wallet', title: '账目与生活关联', body: '消费不再是孤立数字，而是与当天去过的地方、做过的事情和情绪放在同一段生活记录中。' }], image: '/media/xn-auto-chat.webp', imageAlt: '小暖在聊天中识别日记和日程信息', image2: '/media/xn-auto-diary.webp', image2Alt: '小暖根据聊天自动生成的生活日记', image3: '/media/xn-auto-schedule.webp', image3Alt: '小暖根据聊天主动整理的日程规划' },
    { id: 'architecture', label: 'Information Architecture', title: '功能架构', body: '以聊天为核心入口、以首页为聚合中枢：用户只需要自然表达，信息便在聊天、日程、日记、记账和个人设置之间自动流转，并在详情、汇总和编辑三个页面层级中保持一致。', cards: [{ num: 'Core Entry', title: '首页', body: '聚合今日状态、功能入口与陪伴反馈' }, { num: 'Chat', title: '聊天对话', body: '自然语言输入 · 自动识别意图 · 情绪陪伴' }, { num: 'Schedule', title: '日程规划', body: '从聊天提取待办 · 智能提醒' }, { num: 'Diary', title: '日记记事', body: '自动沉淀 · 心情小结 · 可回看' }, { num: 'Wallet', title: '记账管理', body: '自动入账 · 分类归档 · 消费洞察' }, { num: 'Profile', title: '我的设置', body: '个人信息 · 偏好配置 · 数据管理' }], flowLabel: '页面层级', flow: ['详情页', '汇总页', '编辑页'] },
    { id: 'technical-architecture', label: 'Technical Architecture', title: '技术架构', body: '选择跨平台客户端与边缘后端，优先保证移动端快速迭代、低延迟对话和后续多模态能力的扩展。', cards: [{ num: 'Frontend', title: '前端', body: 'React Native (Expo) · 实时刷新 · 跨平台' }, { num: 'Backend', title: '后端', body: 'Cloudflare Workers · 边缘部署 · 低延迟' }, { num: 'AI Models', title: 'AI 模型', body: 'DeepSeek Chat（对话核心）· 千问（图片识别，计划中）· 语音识别（计划中）' }, { num: 'Development', title: '开发工具', body: 'Claude Code · AI 辅助开发' }] },
    { id: 'iteration', label: 'Testing & Iteration', title: '测试发现与迭代决策', body: '通过自测、家庭成员测试与 Beta 外部反馈，持续找到真实使用中的认知摩擦和记录错误；每一轮都对应一个明确问题、一次设计决策和可验证的结果。', items: [{ label: '第一轮 · 自测（30 天）', body: '作为唯一用户连续记录生活节奏，重点观察每天记账、写日记和设日程时，哪些步骤会让人产生“哪里让我不想继续用”的阻力。' }, { label: '第二轮 · 家人测试', body: '邀请 50–75 岁家庭成员作为真实用户，验证用户不理解 AI 原理时，是否仍能通过一句自然表达完成记录。' }, { label: '第三轮 · Beta 外部反馈', body: '在小范围用户群中发布 Beta，收集独居与单身用户的日常使用反馈，重点观察用户会在什么时刻放弃使用。' }], cards: [{ num: 'Iteration 01', title: '记账分类不准确', body: '问题：奶茶被记成购物、打车被记成交通但混入滴滴月卡充值。决策：增加三级分类关键词映射，模糊类别先确认再入账。结果：减少错误归类与手动修改。' }, { num: 'Iteration 02', title: '对话中遗漏隐含待办', body: '问题：一句话同时出现显性任务和因果链中的隐藏任务时，只提取了前者。决策：在识别逻辑中加入因果链解析，拆分为独立待办并让用户确认。结果：减少提醒遗漏和重复补录。' }, { num: 'Iteration 03', title: '首次使用认知门槛', body: '问题：新用户知道产品能记账、写日记，却不知道第一句话该说什么。决策：首次进入时提供三条可点击的生活化示例。结果：让用户从示例直接开始对话，降低空白页的不知所措。' }] },
    { id: 'international', label: 'Current Status', title: '当前版本与国际化方向', body: '小暖目前处于持续迭代阶段，中文版本作为主要体验版本，正在完善英文、韩文和日文界面与对话体验。国际化不仅是翻译按钮，还包括地区、币种、日期时间、生活服务信息和表达习惯的本地化。', items: [{ title: '英语版本', body: '完善基础界面、生活问答和多模态输入的英文表达，覆盖国际用户常见使用情境。' }, { title: '韩语版本', body: '重点优化韩国本地生活、韩币记账、机构查询和留学生高频场景。' }, { title: '日语版本', body: '补充日语 UI、自然对话语气与日本地区的币种、时间和生活服务信息表达。' }] },
    { id: 'summary', label: 'Project Summary', title: '让 AI 适应人的生活，而不是让人适应工具', body: '小暖不是“聊天机器人 + 记账功能”的组合，也不追求成为替用户做一切决定的超级 Agent。它真正想解决的是：人在自然生活时产生了大量值得记住的信息，却很少有人愿意每天整理。小暖通过多模态理解、主动记录、跨币种处理与长期记忆，把这些信息变成连续的个人生活脉络，并用温和的方式陪用户一起生活。', highlight: '即将上线 Apple App Store。下一步：继续提高语音、图片和小票识别准确度；完善长期记忆的调用质量；完成英语、韩语和日语版本；扩展更多适合跨境生活、留学与旅行人群的本地信息能力。', highlightLabel: 'PRODUCT ROADMAP' },
  ],
};

/* ================================================================
   02 — AI COMIC STUDIO
   ================================================================ */

const comicStudioZh: ProjectDetail = {
  slug: 'comic-studio', num: '02',
  name: 'AI 漫剧制作系统', nameEn: 'AI Comic Production Workflow System',
  subtitle: '把剧本拆解、资产匹配、批量生成与结果复盘整合进同一个 AI 漫剧工作室',
  tags: ['剧本输入', '镜头拆解', '角色库', '场景库', '多模型生成', 'API 日志'],
  meta: '2026.05 – 至今 · 个人项目',
  heroImage: '/media/cw-flow-03-900.webp', heroImageAlt: '',
  nextProject: { slug: 'xiaonuan', name: '小暖' },
  liveDemo: { url: 'https://studio.hanyue-room.design', labelZh: '线上访问产品', labelKo: '제품 방문하기', productLabelZh: '前往 Studio', productLabelKo: 'Studio 열기', inviteCodes: ['50F2858A', '3B492D37', '89795156', '20F0D359'], inviteNoteZh: '目前仅提供中文版本，使用邀请码注册', inviteNoteKo: '현재 중국어 버전만 제공, 초대 코드로 가입' },
  sections: [
    { id: 'problems', label: 'Problem Space', title: '生成一张图不难，难的是稳定交付一集漫剧', body: '单个模型可以快速产出图片或视频，但真实制作需要把剧本、角色、场景、镜头、模型调用和成片版本持续连接起来。这个项目解决的不是“能不能生成”，而是“能不能重复、可控地完成整条生产链”。', items: [{ title: '流程被工具切碎', body: '剧本、分镜、角色设计、场景生成和视频制作散落在不同工具中，复制内容和来回导入不断制造信息丢失与版本混乱。' }, { title: '角色与画面难以保持一致', body: '模型每次生成都可能改变角色脸型、服装和场景风格。没有统一资产基准，就无法让观众相信连续镜头发生在同一个故事里。' }, { title: '生成成本无法复盘', body: '不同模型的参数、速度和计费方式各不相同。缺少调用记录时，很难知道哪次生成有效、哪个环节最浪费额度。' }] },
    { id: 'flow', label: 'Production Pipeline', title: '从剧本到成片的一条生产链', body: '系统把内容生产拆成四个可以检查和回退的阶段。每一步都保留上游上下文，创作者无需在多个工具间重新解释角色、场景和镜头要求。', cards: [{ num: '01', title: '拆解剧本', body: '输入完整剧本后，AI 提取场景、角色、对白、动作和情绪，生成可编辑的镜头清单。' }, { num: '02', title: '匹配资产', body: '镜头自动关联角色库和场景库；已有资产直接复用，新资产只生成一次。' }, { num: '03', title: '批量生成镜头', body: '按镜头选择适合的图像或视频模型，统一提交任务、查看状态并比较结果。' }, { num: '04', title: '确认并输出成片', body: '从候选关键帧中确认版本，再生成动态片段并进入最终成片检查。' }], image: '/media/studio1.PNG', imageAlt: '从剧本进入镜头生产的移动端工作流', image2: '/media/studio2.PNG', image2Alt: '角色和场景资产匹配界面', image3: '/media/studio3.PNG', image3Alt: '镜头批量生成与状态管理界面', image4: '/media/studio4.PNG', image4Alt: '生成结果确认与成片输出界面' },
    { id: 'assets', label: 'Asset System', title: '用资产复用保证角色与场景一致', body: '一致性不能只依赖更长的 Prompt。系统先把角色和场景变成可维护资产，再让每个镜头引用同一组视觉基准，把“模型偶然画对”变成“系统持续约束”。', items: [{ title: '角色库', body: '为角色保存标准形象、服装和参考图。角色只需确认一次，之后所有相关镜头都从同一资产调用；更新资产后，关联镜头也能重新生成。' }, { title: '场景库', body: '固定空间、时间和风格信息，镜头在匹配场景后自动取得对应背景参考，减少同一地点在不同镜头中反复变形。' }], image: '/media/cw-char-lib-640.webp', imageAlt: '可复用的角色资产库界面' },
    { id: 'studio', label: 'Studio UI', title: '把所有生产状态收进同一个工作台', body: '界面不按模型划分，而是按创作者完成一集漫剧的顺序组织。项目、镜头、生成参数和结果在同一个上下文中展开，减少工具切换和重复配置。', items: [{ title: '项目管理', body: '每个项目独立保存剧本、资产、镜头和生成进度；切换项目时不会混入其他故事的数据。' }, { title: '镜头工作流', body: '镜头按叙事顺序呈现，并显示待处理、生成中、已确认和需修改状态，让创作者直接定位下一步。' }, { title: '参数与批处理', body: '单个镜头可选择模型和参数，也可以把成熟设置批量应用到多个镜头，减少重复操作。' }], image: '/media/studio8.png', imageAlt: 'AI 漫剧工作室的项目与素材总览', image2: '/media/studio9.png', image2Alt: 'AI 漫剧工作室的镜头生产界面' },
    { id: 'generation', label: 'Generation & API', title: '每一次生成都可追踪、可比较、可复盘', body: '生成不是一次性的按钮操作。系统保留模型、Prompt、参数、耗时和结果，让创作者知道一个画面如何得到，也能在质量与成本之间做出判断。', items: [{ title: '多模型接入', body: '按任务选择不同模型，并在一个界面维护调用配置。镜头与模型解耦，后续替换供应商不需要重做整个项目。' }, { title: '完整生成历史', body: '每次尝试都保存 Prompt、参数和输出结果。创作者可以横向比较候选版本，保留有效方案并淘汰失败结果。' }, { title: '调用与成本记录', body: '按项目和模型汇总调用情况，识别高消耗步骤，把经验从“感觉哪个模型更好”变成可复用的生产判断。' }], image: '/media/studio6.PNG', imageAlt: '多模型生成设置界面', image2: '/media/studio5.PNG', image2Alt: '生成历史和候选结果比较界面', image3: '/media/studio7.PNG', image3Alt: 'API 配置与调用管理界面' },
    { id: 'keyframes', label: 'Keyframes & Final Output', title: '从候选关键帧到可播放成片', body: '镜头先通过静态关键帧确认构图、人物和情绪，再进入动态生成。下方直接展示两段真实输出成片，让最终效果成为可播放、可验证的项目证据。', items: [{ title: '先确认关键帧', body: '为每个镜头生成多个候选版本，对构图、色调和角色状态进行评审；确认后锁定视觉基准，避免直接生成视频造成高成本返工。' }, { title: '再生成动态片段', body: '系统调用 Seedance 等视频模型，根据镜头需要设置运动幅度、时长和分辨率，并保留输出版本用于比较。' }], video: 'https://pub-b4207c4837a7427cba5f6e5be59729c5.r2.dev/comic1.mp4', videoPoster: '/media/cw-keyframe-1-900.webp', videoLabel: 'FINAL OUTPUT 01', video2: 'https://pub-b4207c4837a7427cba5f6e5be59729c5.r2.dev/comic2.mp4', video2Poster: '/media/cw-keyframe-2-900.webp', video2Label: 'FINAL OUTPUT 02' },
    { id: 'lessons', label: 'Lessons Learned', title: '从试错中形成的三条产品判断', items: [{ title: '一致性首先是资产问题', body: '单靠不断加长 Prompt 仍会让角色漂移。建立角色库和场景库后，一致性由可复用资产和引用关系保证，而不是依赖模型偶然重复。' }, { title: '先预览，再支付高成本生成', body: '正式调用视频模型前，先以低分辨率和简化参数验证构图与动作。确认方向后再生成正式版本，单镜头 API 消耗约降低 40%。' }, { title: '让模型服务镜头，而不是绑定单一模型', body: '不同模型在构图理解、细节表现和运动流畅度上各有优势。系统按镜头选择模型，避免把整个生产流程锁死在一个供应商上。' }] },
    { id: 'summary', label: 'Project Summary', title: '把一次次生成，组织成可持续生产', body: '这个项目证明，AI 内容生产的瓶颈不只是模型效果，更是上下文、资产、版本和调用记录能否被系统化管理。角色一致性由资产复用保证，镜头状态在同一工作台推进，生成历史可以比较和复盘，创作者才可能把一集漫剧稳定做完。', highlight: '下一步：完善多角色同框镜头、声音合成与自动配音，并继续优化长项目中的批量任务调度。', highlightLabel: 'NEXT STEPS' },
    { id: 'program-structure', label: 'Program Structure', title: '程序结构：每个目录对应一段生产职责', body: '后端接口、提示词、预设数据与前端静态资源分开维护，使模型能力、业务流程和界面迭代可以独立推进。', cards: [{ num: 'app.py', title: 'Web 服务入口', body: '主应用、页面路由与 API 端点' }, { num: 'prompts/', title: '提示词模板', body: '剧本分析、分镜拆解与图像生成模板' }, { num: 'data/', title: '预设数据', body: '角色、场景与风格等结构化数据' }, { num: 'static/', title: '前端资源', body: 'HTML、CSS、JavaScript 与图片资源' }, { num: 'requirements.txt', title: 'Python 依赖', body: '运行与部署所需的 pip 包' }, { num: 'Procfile', title: '启动进程', body: 'Railway 服务启动命令' }, { num: 'railway.toml', title: '部署配置', body: 'Railway 环境与服务设置' }, { num: 'nixpacks.toml / runtime.txt', title: '构建与运行时', body: 'Nixpacks 构建规则与 Python 版本' }] },
    { id: 'technical-architecture', label: 'Technical Architecture', title: '技术架构', body: '以 Python Web 服务为核心，通过轻量前端承载生产工作台，并部署到 Railway；模型接入保持可替换，使不同生成任务可以选择适合的供应商。', cards: [{ num: 'Language', title: '开发语言', body: 'Python' }, { num: 'Framework', title: '框架', body: 'Flask / FastAPI · 基于 app.py 的 Web 服务' }, { num: 'Frontend', title: '前端', body: 'HTML · CSS · JavaScript · static/ 目录' }, { num: 'Deployment', title: '部署环境', body: 'Railway · railway.toml · Procfile · nixpacks.toml' }, { num: 'AI Models', title: 'AI 模型接入', body: '豆包（Doubao）· GLM 4.6 · Claude 4.6 · GPT Image 2 · Seedance' }, { num: 'Packages', title: '包管理', body: 'pip · requirements.txt' }] },
  ],
};

/* ================================================================
   01 — AI INFINITE CANVAS (placeholder — real content TBD)
   ================================================================ */

const infiniteCanvasZh: ProjectDetail = {
  slug: 'ai-infinite-canvas', num: '01',
  name: 'AI 无限画布', nameEn: 'AI Infinite Canvas Workflow Platform',
  subtitle: '面向电商、运营与视觉创作者的节点式 AI 内容生产 SaaS',
  tags: ['SaaS 产品', '工作流设计', '批量生成', 'BYOK API', '三语国际化', 'Cloudflare 部署'],
  meta: '2026 · 独立 SaaS 产品 · 已部署上线 / 持续迭代',
  heroImage: '/media/xn-home-hero-760.webp', heroImageAlt: '',
  nextProject: { slug: 'comic-studio', name: 'AI 漫剧制作系统' },
  liveDemo: { url: 'https://image.hanyue-room.design/', labelZh: '体验交互演示', labelKo: '인터랙티브 데모', productLabelZh: '访问线上产品', productLabelKo: '라이브 제품 보기' },
  sections: [
    { id: 'overview', label: 'Overview', title: '从生成工具到内容生产 SaaS', body: 'AI 无限画布是由我独立完成产品规划、交互设计与工程落地的 AI 内容生产 SaaS。产品基于开源的 Infinite Canvas / React Flow 画布能力，重新设计了适合批量生成的业务节点、工作流和结果管理方式。用户可以在同一画布中组合产品素材、参考版式、Prompt、尺寸、模型与品牌文案，并将组合直接转化为批量生成任务。目前产品已经部署上线，并持续面向真实生产场景迭代。', image: '/media/ai-canvas-1200.webp', imageAlt: 'AI 无限画布 — 主界面全景', mediaMode: 'feature', imageCaption: '产品素材、参考版式、Prompt、模型设置与生成结果在同一画布中形成可复用工作流', items: [] },
    { id: 'challenge', label: 'Challenge', title: '批量内容生产不只是“多生成几张图”', body: '电商、品牌运营和视觉团队需要同时处理多个商品、尺寸、渠道和创意方向。传统聊天式生成工具一次只处理一个请求，用户必须反复复制 Prompt、切换模型、整理结果，再手工对应到具体商品和投放场景。真正的问题不是模型不够强，而是缺少一个可以组织变量、并行执行、比较结果并保留过程的生产系统。', image: '/media/canvas4-1478.webp', imageAlt: 'AI 无限画布 — 完整画布架构', mediaMode: 'panorama', imageCaption: '从输入配置到批量生成和结果比较，整个生产链路保留在同一张画布上', annotations: [{ label: '输入与配置', x: 18, y: 25 }, { label: '批量生成', x: 52, y: 55 }, { label: '结果对比', x: 82, y: 30 }], items: [] },
    { id: 'saas', label: 'SaaS Model', title: '从可用工具到可运营产品', body: '我没有把它停留在本地原型，而是补齐了账号、权限、额度、API 和云端数据等 SaaS 必需能力，让产品具备上线、邀请用户和继续商业化的基础。', items: [
      { title: '付费邀请码与用户准入', body: '设计邀请码作为注册准入和权益分发机制，可按不同版本配置使用资格与额度，为试用、付费版本和定向客户交付建立入口。' },
      { title: '自有 API 接入（BYOK）', body: '用户可以接入自己的模型 API，选择服务商、模型与调用方式，在保留工作流体验的同时自主控制模型选择和生成成本。' },
      { title: '平台额度与生成记录', body: '平台调用与用户自有 API 使用路径分开管理，并记录生成任务、结果和历史，支持后续的额度体系与运营分析。' },
      { title: '中 / 韩 / 英三语产品', body: '主工作区、登录注册、管理后台、生成历史、素材库和模型设置均支持中文、韩文与英文，并保存用户的语言偏好。' },
    ] },
    { id: 'system', label: 'System Design', title: '开源画布底座上的原创业务系统', body: '我使用开源 Infinite Canvas / React Flow 解决基础的拖拽、缩放和连线能力，把主要精力投入到业务节点设计、组合逻辑、生成协议和结果回收。产品差异不在“画布本身”，而在如何把复杂的 AI 内容生产过程转化为普通用户可以理解和复用的视觉工作流。', flowLabel: '从素材到结果的完整链路', flow: ['选择产品与参考图', '编排 Prompt / 尺寸 / 模型', '计算生成组合', '批量并行生成', '统一结果网格', '下载与历史追踪'], items: [
      { title: '可组合业务节点', body: '设计产品组、参考版式组、Prompt 组、输出尺寸、模型设置、品牌文案、批量生成和结果网格等节点，用户通过连线决定数据如何组合。' },
      { title: '批量任务编排', body: '系统根据上游节点自动计算商品 × 参考图 × Prompt × 尺寸的任务组合，将重复操作转化为一次可检查的批量提交。' },
      { title: '统一结果与素材资产', body: '不同批次和生成节点的结果可汇总到同一结果网格；产品素材与多张参考图进入云端资产库，便于复用、比较和追踪。' },
    ] },
    { id: 'scenes', label: 'Scene Selection', title: '不是通用空白画布，而是面向工作的场景模板', body: '空白画布对专业用户自由，但会提高新用户的理解成本。因此我为角色设计、电商商品图、社交媒体素材和活动海报等任务设计预设场景：自动准备所需节点、连接关系与参数结构，让用户从“我要做什么”开始，而不是先学习系统怎么连线。', image: '/media/canvas6-1508.webp', imageAlt: '角色设计场景', imageCaption: '角色设计场景：预设角色一致性工作流，快速生成多角度、多风格的人物素材', image2: '/media/canvas7-1480.webp', image2Alt: '电商与运营素材场景', image2Caption: '电商与运营场景：围绕商品展示、Banner、社媒广告和活动海报组织生成节点', mediaMode: 'tabs', tabLabelsZh: ['角色设计', '电商与运营'] },
    { id: 'decisions', label: 'Key Decisions', title: '关键决策', items: [
      { title: '承认并利用开源，而不是重复造轮子', body: '基础画布采用成熟开源方案；我的工作重点是用户任务、节点语义、组合规则、生成协议、数据与商业化系统。这样既缩短开发周期，也让原创价值更清晰。' },
      { title: '空间工作流，而不是线性表单', body: '批量生成涉及多组变量和创意分支。画布让用户看见“哪些输入产生哪些结果”，也便于复制、分支、对比和复盘。' },
      { title: '平台服务与 BYOK 并存', body: '不把用户锁定在单一模型或计费方式中：既可使用平台能力，也可接入自己的 API，让小团队更容易控制成本和供应商。' },
      { title: '国际化作为产品能力', body: '三语不是首页文字替换，而是覆盖工作区、账号、后台、历史、资产和模型配置的完整本地化，并持久化用户选择。' },
    ], image: '/media/canvas2-2426.webp', imageAlt: 'AI 无限画布 — 画布全景视图', mediaMode: 'panorama', imageCaption: '非线性排列帮助用户同时管理多个商品、创意分支与生成任务' },
    { id: 'deliverables', label: 'Deliverables', title: '已完成的产品能力', items: [
      { title: '可部署的 SaaS 全流程', body: '完成账号认证、邀请码、用户额度、管理后台、生成历史和权限保护，不再只是本地 UI 原型。' },
      { title: '多模型与自定义 API', body: '支持平台模型和用户自有 API，处理文生图、参考图生成与图片编辑等不同协议，并提供错误诊断。' },
      { title: '素材库与结果系统', body: '产品素材支持多图上传、识别、压缩和云端保存；生成结果跨批次汇总、比较、下载并进入历史记录。' },
      { title: 'Cloudflare 生产部署', body: '产品使用 Cloudflare Worker、D1 与 R2 承载应用、结构化数据和图片资产，已通过独立域名对外提供服务。' },
    ] },
    { id: 'validation', label: 'Launch & Validation', title: '上线与知识产权验证', body: '这个项目已经跨过“设计概念”和“开发练习”的阶段：产品可在线访问，核心 SaaS 链路可运行，并完成韩国著作权登记。对我而言，这也是一次从需求判断、产品设计、开源技术选型、全栈开发到部署运营的完整交付。', items: [
      { title: '产品已正式部署', body: '线上地址：image.hanyue-room.design。用户可以注册、通过邀请码进入产品、创建画布工作流并接入 API 完成真实生成任务。' },
      { title: '韩国著作权登记完成', body: '韩国著作权委员会（한국저작권위원회）登记号：제C-2026-037309호；登记名称：AI 무한 캔버스 워크플로우 플랫폼（AI Infinite Canvas Workflow Platform）。' },
      { title: '独立完成端到端交付', body: '覆盖产品定位、交互与视觉设计、节点与工作流规划、前后端实现、三语国际化、云端部署及后续运营准备。' },
    ] },
    { id: 'reflection', label: 'Roadmap', title: '下一阶段：完成从生成到交付的闭环', body: '目前产品已经解决“如何组织并批量生成图片”，下一阶段将继续解决“图片生成后如何修改”和“图文内容如何扩展为视频”。目标是让电商与运营团队不必在多个工具之间反复导入导出，而是在一张工作流画布中完成素材准备、图片生成、后期修改、视频制作和最终导出。', highlight: '近期路线：继续完善中 / 韩 / 英三语体验；加入局部重绘、扩图、抠图与画质增强等图片后期节点；新增适合电商商品展示、运营广告和社媒短视频的视频生成与处理节点。', highlightLabel: 'PRODUCT ROADMAP' },
  ],
};

/* ================================================================
   04 — MILK & RIBBON 品牌视觉系统
   ================================================================ */

const milkRibbonZh: ProjectDetail = {
  slug: 'milk-ribbon', num: '04',
  name: '品牌设计作品', nameEn: 'Brand Visual Design Works',
  subtitle: '以 Milk & Ribbon 为核心案例，展示品牌定位、视觉识别与物料系统设计',
  tags: ['品牌战略', 'VI 系统', '包装设计', '视觉物料'],
  meta: '2025.09 · 品牌设计课程项目',
  heroImage: '/media/mr-hero-560.webp', heroImageAlt: '',
  nextProject: { slug: 'commercial-video', name: '商业视频与动态广告' },
  sections: [
    { id: 'market', label: 'Market Insight', title: '市场洞察与需求痛点', body: '在"去性别化"和"极简冷淡风"之后，18-25 岁 Z 世代女性正发生审美反弹，"极致女性化"的 Coquette、Balletcore 在社交媒体上爆红。然而市面上的甜美品牌缺乏品牌叙事和精神内核，购买体验断层。Milk & Ribbon 要做的是将"柔软"和"秩序"融合，打造有精神内核的可穿着浪漫主义。', items: [
      // Content from root index.html P31
    ] },
    { id: 'positioning', label: 'Brand Core', title: '品牌定位与目标人群', body: '', items: [{ title: '品牌核心：「柔软，自有秩序」', body: 'Softness with Structure — 少女感不是年龄的生理特征，而是一种拒绝沉闷、保留诗意的精神状态。' }, { title: '目标人群', body: '18-25 岁 Z 世代年轻女性，追求"出片率"的造梦者与分享者。' }, { title: '价值主张', body: '少女感不是年龄的生理特征，而是一种拒绝沉闷、保留诗意的精神状态。' }], image: '/media/mr-strategy.png', imageAlt: '品牌定位策略图' },
    { id: 'visual-system', label: 'Visual System', title: '视觉识别系统', body: '用柔粉、奶油白、玫瑰红和粉蓝建立甜美但不廉价的色彩层级；辅助图形延续丝带、芭蕾、天鹅和手写体线条，让品牌在包装、社媒和实体物料上保持统一识别。', image: '/media/mr-research.png', imageAlt: '市场调研视觉板', image2: '/media/mr-colors.png', image2Alt: '色彩系统', image3: '/media/mr-logo.png', image3Alt: 'Logo 系统' },
    { id: 'lookbook', label: 'Lookbook & Catalog', title: '画册版式与品牌延展', body: '品牌画册系统完整展示视觉应用示例——从画册版式设计到各触点的品牌延展，建立统一的视觉语言和阅读节奏。', image: '/media/mr-catalog.png', imageAlt: '品牌画册', image2: '/media/mr-37.2.png', image2Alt: '触点延展', image3: '/media/mr-all-materials.png', image3Alt: '物料全家福' },
    { id: 'packaging', label: 'Packaging Extension', title: '包装与图形延展', body: '包装应用与图形延展系统——将品牌核心视觉元素扩展到产品包装、标签和辅助图形，确保品牌在实体触点上的一致性和辨识度。', image: '/media/mr-36.1.png', imageAlt: '包装应用', image2: '/media/mr-36.2.png', image2Alt: '图形延展', image3: '/media/mr-goods.png', image3Alt: '产品展示' },
    { id: 'materials', label: 'Materials', title: '物料系统全览', body: '品牌物料全家福与触点延展——从名片、信封、手提袋到店铺陈列和社媒模板，建立完整的品牌物料体系。', image: '/media/mr-35.1.png', imageAlt: '视觉应用示例' },
    { id: 'reflection', label: 'Reflection', title: '项目总结', body: 'Milk & Ribbon 品牌设计项目是一次从市场洞察到视觉执行的完整品牌建设实践。核心学习是：品牌视觉不是"好看就行"，而是从目标人群的情感需求出发，通过色彩、图形和版式建立有精神内核的识别系统。' },
  ],
};

/* ================================================================
   05 — COMMERCIAL VIDEO & MOTION
   ================================================================ */

const commercialVideoZh: ProjectDetail = {
  slug: 'commercial-video', num: '05',
  name: '商业视频与动态广告', nameEn: 'Commercial Video & Motion Ads',
  subtitle: '围绕品牌传播、电商转化与社媒投放制作的短片、主图视频和动态视觉素材',
  tags: ['品牌广告', '电商营销', '社媒短视频', 'MG 动画'],
  meta: '商业项目 · 剪辑 / 动效 / 视觉节奏 / 投放素材',
  heroImage: '/media/mr-hero-900.webp', heroImageAlt: '',
  nextProject: { slug: 'ai-infinite-canvas', name: 'AI 无限画布' },
  sections: [
    { id: 'overview', label: 'Overview', title: '项目概述', body: '围绕品牌传播、电商转化与社媒投放制作的短片、主图视频和动态视觉素材。根据不同投放场景和平台特性，输出横版 16:9 和竖版 9:16 两种规格。', items: [{ title: '工作方法', body: '根据品牌调性梳理镜头节奏、字幕信息和转场方式。为不同投放场景输出横版、竖版和社媒信息流版本。兼顾可读性、产品露出和前 3 秒停留率。' }] },
    { id: 'landscape', label: 'Landscape · 16:9', title: '横版商业视频', body: '适合官网首屏、品牌介绍、平台主图与横版投放位，重点控制信息层级、产品露出和视觉节奏。', video: '/media/brand-ad-1.mp4', video2: '/media/brand-ad-2.mp4', items: [{ title: '品牌形象短片', body: '面向官网与展示场景，强调品牌调性与视觉氛围。节奏较慢，注重画面质感和色彩统一。' }, { title: '电商营销短片', body: '面向主图与投放素材场景，强调产品卖点与转化信息。前 3 秒快速进入主题，字幕清晰可读。' }] },
    { id: 'portrait', label: 'Portrait · 9:16', title: '竖版信息流视频', body: '面向小红书、抖音、Reels 等移动端场景，强调快速进入主题、字幕可读性和连续观看节奏。', video: '/media/brand-ad-3.mp4', video2: '/media/brand-ad-4.mp4', items: [{ title: '社媒种草短片', body: '面向移动端投放，以真实体验和产品展示为核心。节奏快速，3 秒内建立视觉锚点。' }, { title: 'MG 动态说明', body: '信息可视化类动画，用于产品功能说明、数据展示和品牌故事。以清晰的视觉层级引导信息获取。' }] },
    { id: 'reflection', label: 'Reflection', title: '项目总结', body: '商业视频项目覆盖品牌广告、电商营销、社媒短视频和 MG 动画四种类型，服务不同投放场景。核心能力在于根据平台特性和受众行为调整视觉节奏、信息密度和画面构图。' },
  ],
};

/* ================================================================
   KOREAN TRANSLATIONS
   ================================================================ */

const xiaonuanKo: ProjectDetail = {
  slug: 'xiaonuan', num: '03',
  name: '샤오누안', nameEn: 'AI Life Companion with Long-Term Memory',
  subtitle: '자연스러운 대화 속에서 사용자의 삶을 이해하고 기록하며 함께하는 멀티모달 AI 동반자',
  tags: ['정서적 동행', '장기 기억', '능동적 기록', '음성·이미지', '다중 통화 가계부', '생활 정보 검색'],
  meta: '2026.01 – 현재 · 독립 제품 · 중국어 베타 / 다국어 버전 개선 중',
  heroImage: '/media/xn-home-hero-760.webp', heroImageAlt: '',
  nextProject: { slug: 'milk-ribbon', name: 'Milk & Ribbon 브랜드 디자인' },
  mediaPresentation: 'phone',
  sections: [
    { id: 'overview', label: 'Product Vision', title: '삶을 기억하는 AI 동반자', body: '샤오누안은 모든 일을 대신 처리하는 만능 에이전트를 목표로 하지 않습니다. 사용자는 오늘의 지출, 기분, 약속부터 낯선 생활 문제까지 무엇이든 자연스럽게 물어볼 수 있습니다. 샤오누안은 대화 속에서 생활 습관을 이해하고 수입·지출, 일정, 일기를 필요한 곳에 능동적으로 기록하면서, 사용자가 필요할 때 다시 꺼내 볼 수 있는 지속적인 생활 맥락을 만듭니다.', video: '/media/ui-xiaonuan.mp4', videoPoster: '/media/xn-home-hero-760.webp', items: [{ label: '무엇이든 물어보는 생활 입구', body: '기록을 위해 정해진 명령을 입력할 필요 없이, 친구에게 말하듯 생활 속 질문과 경험을 공유합니다.' }, { label: '대화 뒤에 남는 자동 기록', body: '금액, 통화, 시간, 사건과 감정을 이해해 가계부·일정·일기 모듈에 능동적으로 정리합니다.' }, { label: '기능보다 관계를 우선', body: '목표는 더 많은 기능을 가진 슈퍼 에이전트가 아니라, 사용자의 삶을 오래 기억하고 섬세하게 반응하는 정서적 동반자입니다.' }] },
    { id: 'difference', label: 'Product Difference', title: '일반 메모·가계부 앱과 무엇이 다른가?', body: '기존 도구는 사용자가 올바른 앱과 입력 화면을 찾아가기를 기다립니다. 샤오누안은 사용자의 자연스러운 표현을 먼저 이해하고, 대화가 끝난 뒤 필요한 생활 기록까지 정리합니다.', cards: [{ num: '01', title: '대화가 곧 입구', body: '메모, 달력, 가계부 중 어디를 열지 고민하지 않습니다. 한 번의 대화가 여러 기능을 동시에 시작합니다.' }, { num: '02', title: '능동적 정리', body: '사용자가 다시 입력하지 않아도 대화 속 지출, 수입, 일정과 하루의 사건을 알맞은 모듈에 기록합니다.' }, { num: '03', title: '멀티모달 이해', body: '텍스트뿐 아니라 음성과 이미지도 이해합니다. 영수증 사진은 지출 기록으로, 일반 이미지는 질문의 맥락으로 활용합니다.' }, { num: '04', title: '장기 기억과 지속적 관계', body: '단발성 답변에서 끝나지 않고 사용자의 습관, 선호와 이전 대화를 기억해 시간이 지날수록 더 개인적인 동행 경험을 만듭니다.' }], flowLabel: '한 번의 대화가 생활 기록이 되는 과정', flow: ['텍스트·음성·이미지 입력', '의도·금액·시간·감정 이해', '개인 기억과 함께 답변', '가계부·일정·일기에 능동 기록'] },
    { id: 'multimodal', label: 'Multimodal Interaction', title: '한마디, 음성 한 번, 사진 한 장이면 기록이 끝납니다', body: '말하기가 편한 상황에서는 음성으로 바로 알려주고, 설명하기 어려운 것은 사진으로 물어볼 수 있습니다. 샤오누안은 입력 형식을 바꾸어도 같은 생활 맥락 안에서 이해합니다.', items: [{ label: '음성으로 바로 말하기', body: '이동 중에도 오늘 쓴 돈, 해야 할 일, 기분을 말하면 대화 내용에서 핵심 정보를 추출합니다.' }, { label: '이미지로 생활 질문하기', body: '상품, 안내문, 장소 등 텍스트로 설명하기 어려운 내용을 사진으로 보내고 맥락에 맞는 답을 받을 수 있습니다.' }, { label: '영수증 자동 기록', body: '영수증 사진을 보내면 가게, 금액, 통화와 시간을 읽어 지출 내역으로 정리해 반복 입력을 줄입니다.' }], image: '/media/xn-multimodal-voice.webp', imageAlt: '샤오누안이 음성으로 한국어 대화와 생활 일정을 이해하는 화면', image2: '/media/xn-multimodal-context.webp', image2Alt: '연속 음성 대화에서 맥락을 유지하는 화면', image3: '/media/xn-multimodal-image.webp', image3Alt: '생활 이미지와 영수증을 인식해 자동 기록하는 화면' },
    { id: 'currency', label: 'Cross-border Wallet', title: '유학생과 여행자를 위한 다중 통화 생활 가계부', body: '처음 사용할 때 현재 거주 국가와 기준 통화를 선택합니다. 이후 “오늘 18,000원을 썼어”라고 말하면 원화 원액과 환산된 위안화 금액을 함께 기록해, 서로 다른 통화로 생활해도 실제 지출 규모를 바로 이해할 수 있습니다.', items: [{ label: '국가와 기준 통화 설정', body: '현재 생활하는 국가와 익숙한 기준 통화를 설정해 개인 상황에 맞는 환산 기준을 만듭니다.', image: '/media/xn-currency-profile.webp', imageAlt: '샤오누안 프로필의 국가와 지역 설정 화면' }, { label: '대화 중 자동 환산', body: '외화 금액을 인식해 거래 당시 통화와 기준 통화 환산액을 함께 보존합니다.', image: '/media/xn-currency-chat.webp', imageAlt: '대화에서 원화를 위안화로 자동 환산하는 화면' }, { label: '한국 유학생·여행자 시나리오', body: '원화로 결제하면서 중국 위안화 기준으로 예산을 관리해야 하는 사용자에게 특히 유용합니다.', image: '/media/xn-currency-ledger.webp', imageAlt: '원화와 위안화 환산 금액을 함께 보여 주는 가계부' }] },
    { id: 'life-search', label: 'Life Information', title: '답변에서 실제 생활의 다음 단계까지', body: '예를 들어 피부 관리나 현지 생활 서비스를 물으면, 샤오누안은 사용자의 위치와 요구를 바탕으로 주변 선택지를 찾아 비교하고, 확인 가능한 가격과 예약 가능 시간 정보를 정리해 줍니다. 사용자가 선택하면 그 시간을 일정으로 이어 기록할 수 있습니다.', items: [{ label: '주변 선택지 탐색', body: '거리, 평판, 서비스 종류 등 실제 결정에 필요한 기준으로 주변 기관을 정리합니다.', image: '/media/xn-life-service-search.webp', imageAlt: '샤오누안이 주변 생활 서비스를 탐색하고 예약 정보를 안내하는 화면' }, { label: '가격과 예약 정보', body: '확인 가능한 공개 정보를 바탕으로 가격 범위와 가능한 시간을 비교해 다음 행동을 쉽게 만듭니다.', image: '/media/xn-life-schedule-suggestion.webp', imageAlt: '생활 조언을 실행 가능한 다음 단계로 정리한 화면' }, { label: '정보와 의료 판단의 경계', body: '생활 정보의 수집과 비교를 돕되, 의료적 진단이나 치료 결정을 대신하지 않도록 역할을 명확히 제한합니다.', image: '/media/xn-life-safety-boundary.webp', imageAlt: '생활 조언과 진료 판단의 경계를 안내하는 화면' }] },
    { id: 'memory', label: 'Long-term Memory', title: '한 사람의 삶의 맥락을 기억', body: '장기 기억은 과거 대화를 많이 저장하는 기능이 아니라, 다음 대화에서 실제로 필요한 생활 맥락을 다시 활용하는 능력입니다. 샤오누안은 사용자의 생활 패턴, 선호, 반복되는 고민과 아직 끝나지 않은 일을 기억해 더 연속적인 답변과 알림을 제공합니다.', items: [{ label: '생활 습관을 이해', body: '자주 쓰는 통화, 생활 리듬, 선호하는 표현 방식처럼 반복되는 패턴을 기억합니다.', image: '/media/xn-home-760.webp', imageAlt: '개인 생활 맥락을 보여 주는 샤오누안 홈 화면' }, { label: '끝나지 않은 일을 이어가기', body: '예전에 말한 약속이나 고민을 이후 대화에서 자연스럽게 이어, 매번 배경을 다시 설명하지 않게 합니다.', image: '/media/xn-memory-unfinished.webp', imageAlt: '아직 끝나지 않은 일정과 일을 다시 찾는 화면' }, { label: '안정적인 정서적 관계', body: '과도하게 친밀한 척하지 않으면서도 사용자가 존중받고 기억되고 있다는 감각을 제공합니다.', image: '/media/xn-memory-companion.webp', imageAlt: '사용자의 생활 상태를 지속적으로 이해하고 응답하는 화면' }] },
    { id: 'auto-organize', label: 'Proactive Organization', title: '대화가 끝나면 일기와 일정이 이미 정리되어 있습니다', body: '사용자가 기록을 위해 별도의 양식을 작성하지 않아도, 샤오누안은 대화에서 구조화할 가치가 있는 내용을 판단해 각 생활 모듈에 초안을 만듭니다. 사용자는 필요할 때 확인하고 수정하면 됩니다.', cards: [{ num: 'Diary', title: '일기', body: '하루의 사건과 감정 흐름을 정리해 다시 읽을 수 있는 기록으로 만듭니다.' }, { num: 'Schedule', title: '일정', body: '자연어 속 날짜, 시간과 할 일을 추출해 예정된 행동으로 연결합니다.' }, { num: 'Wallet', title: '수입·지출', body: '금액, 통화, 카테고리를 구조화하고 환산 금액까지 함께 보존합니다.' }], image: '/media/xn-auto-chat.webp', imageAlt: '대화에서 일기와 일정 정보를 인식하는 화면', image2: '/media/xn-auto-diary.webp', image2Alt: '대화를 바탕으로 자동 생성된 생활 일기 화면', image3: '/media/xn-auto-schedule.webp', image3Alt: '대화를 바탕으로 능동적으로 정리된 일정 계획 화면' },
    { id: 'architecture', label: 'Information Architecture', title: '기능 구조', body: '채팅을 핵심 입구로, 홈을 생활 정보의 집약 허브로 설계했습니다. 사용자는 자연스럽게 말하기만 하면 정보가 채팅·일정·일기·가계부·설정 사이를 이동하고, 상세·요약·편집의 세 페이지 계층에서 일관되게 유지됩니다.', cards: [{ num: 'Core Entry', title: '홈', body: '오늘의 상태, 기능 입구와 동반자 피드백을 한곳에 집약' }, { num: 'Chat', title: '채팅 대화', body: '자연어 입력 · 의도 자동 인식 · 정서적 동행' }, { num: 'Schedule', title: '일정 계획', body: '대화에서 할 일 추출 · 스마트 알림' }, { num: 'Diary', title: '일기 기록', body: '자동 축적 · 감정 요약 · 다시 보기' }, { num: 'Wallet', title: '가계부 관리', body: '자동 기록 · 분류 저장 · 소비 인사이트' }, { num: 'Profile', title: '내 설정', body: '개인 정보 · 선호 설정 · 데이터 관리' }], flowLabel: '페이지 계층', flow: ['상세 페이지', '요약 페이지', '편집 페이지'] },
    { id: 'technical-architecture', label: 'Technical Architecture', title: '기술 아키텍처', body: '크로스플랫폼 클라이언트와 엣지 백엔드를 선택해 모바일의 빠른 반복 개발, 낮은 대화 지연과 향후 멀티모달 기능 확장을 우선했습니다.', cards: [{ num: 'Frontend', title: '프런트엔드', body: 'React Native (Expo) · 실시간 새로고침 · 크로스플랫폼' }, { num: 'Backend', title: '백엔드', body: 'Cloudflare Workers · 엣지 배포 · 낮은 지연' }, { num: 'AI Models', title: 'AI 모델', body: 'DeepSeek Chat（대화 코어）· Qwen（이미지 인식, 예정）· 음성 인식（예정）' }, { num: 'Development', title: '개발 도구', body: 'Claude Code · AI 보조 개발' }] },
    { id: 'iteration', label: 'Testing & Iteration', title: '테스트에서 발견한 문제와 반복 개선', body: '자가 테스트, 가족 테스트와 Beta 외부 피드백을 통해 실제 사용 중 생기는 인지 마찰과 기록 오류를 찾았습니다. 각 라운드는 하나의 명확한 문제, 하나의 설계 결정과 검증 가능한 결과로 연결했습니다.', items: [{ label: '1차 · 자가 테스트（30일）', body: '유일한 사용자로서 매일 가계부, 일기와 일정을 기록하며 어떤 단계에서 “계속 쓰고 싶지 않다”는 저항이 생기는지 관찰했습니다.' }, { label: '2차 · 가족 테스트', body: '50–75세 가족 구성원을 실제 사용자로 초대해 AI 원리를 몰라도 한마디로 기록을 완료할 수 있는지 검증했습니다.' }, { label: '3차 · Beta 외부 피드백', body: '소규모 사용자 그룹에 Beta를 배포해 독거·싱글 사용자의 일상 피드백을 수집하고, 어느 순간 사용을 중단하는지 집중 관찰했습니다.' }], cards: [{ num: 'Iteration 01', title: '가계부 분류 오류', body: '문제: 밀크티가 쇼핑으로, 택시가 교통으로 기록되지만 월 충전과 섞였습니다. 결정: 3단계 분류 키워드 매핑을 추가하고 모호한 항목은 확인 후 저장합니다. 결과: 잘못된 분류와 수동 수정을 줄였습니다.' }, { num: 'Iteration 02', title: '대화 속 숨은 할 일 누락', body: '문제: 한 문장에 명시적 작업과 인과관계 속 숨은 작업이 함께 있을 때 앞의 작업만 추출됐습니다. 결정: 인과관계 분석을 추가해 독립 할 일로 분리하고 확인받습니다. 결과: 알림 누락과 중복 입력을 줄였습니다.' }, { num: 'Iteration 03', title: '첫 사용 인지 장벽', body: '문제: 새 사용자는 기능을 알아도 첫 문장을 어떻게 시작할지 몰랐습니다. 결정: 첫 진입 시 클릭 가능한 생활형 예시 세 개를 제공합니다. 결과: 빈 화면에서 멈추지 않고 예시로 바로 대화를 시작하게 했습니다.' }] },
    { id: 'international', label: 'Localization', title: '현재 버전과 다국어 확장 방향', body: '현재 중국어 버전을 중심으로 제품을 다듬고 있으며 영어, 한국어, 일본어 버전을 개선하고 있습니다. 번역만 바꾸는 것이 아니라 지역별 통화, 날짜·시간 표현, 생활 서비스 탐색 방식까지 함께 현지화하는 것이 목표입니다.', items: [{ label: '중국어', body: '현재 핵심 경험을 검증하고 기능 흐름을 다듬는 주요 버전입니다.' }, { label: '영어', body: '여행과 국제 사용 환경에서 자연스러운 생활 대화와 기록 표현을 개선하고 있습니다.' }, { label: '한국어', body: '한국 생활, 원화 지출과 지역 정보 검색에 맞는 표현과 시나리오를 보완하고 있습니다.' }, { label: '일본어', body: '일본어의 말투와 날짜·통화 표현에 맞춰 대화 품질과 생활 기록 방식을 개선하고 있습니다.' }] },
    { id: 'summary', label: 'Project Summary', title: 'AI가 사람의 삶에 맞추도록', body: '샤오누안은 “챗봇 + 가계부”의 조합도, 사용자를 대신해 모든 결정을 내리는 슈퍼 에이전트도 아닙니다. 자연스러운 생활 속에서 흘려보내기 쉬운 정보들을 멀티모달 이해, 능동적 기록, 다중 통화 처리와 장기 기억으로 연결해 한 사람의 지속적인 생활 맥락으로 만드는 제품입니다.', highlight: 'Apple App Store 출시 예정. 다음 단계: 음성·이미지·영수증 인식 정확도 향상, 장기 기억 호출 품질 개선, 영어·한국어·일본어 버전 완성, 유학·여행 등 국경을 넘는 생활에 필요한 지역 정보 기능 확장.', highlightLabel: 'PRODUCT ROADMAP' },
  ],
};

const comicStudioKo: ProjectDetail = {
  slug: 'comic-studio', num: '02',
  name: 'AI 만화극 제작 시스템', nameEn: 'AI Comic Production Workflow System',
  subtitle: '대본 입력부터 스토리보드, 비주얼 에셋, API 호출, 영상 생성까지의 콘텐츠 제작 워크플로우',
  tags: ['대본 입력', '스토리보드 생성', '캐릭터 라이브러리', '배경 라이브러리', '멀티 모델 생성', 'API 로그'],
  meta: '2026.05 – 현재 · 개인 프로젝트',
  heroImage: '/media/cw-flow-03-900.webp', heroImageAlt: '',
  nextProject: { slug: 'xiaonuan', name: '샤오누안' },
  liveDemo: { url: 'https://studio.hanyue-room.design', labelZh: '线上访问产品', labelKo: '제품 방문하기', productLabelZh: '前往 Studio', productLabelKo: 'Studio 열기', inviteCodes: ['50F2858A', '3B492D37', '89795156', '20F0D359'], inviteNoteZh: '目前仅提供中文版本，使用邀请码注册', inviteNoteKo: '현재 중국어 버전만 제공, 초대 코드로 가입' },
  sections: [
    { id: 'problems', label: 'Problem Space', title: '한 장을 생성하는 것보다 한 편을 안정적으로 완성하는 것이 어렵습니다', body: '개별 모델은 이미지와 영상을 빠르게 만들 수 있지만, 실제 제작에서는 대본·캐릭터·배경·장면·모델 호출·완성본 버전을 계속 연결해야 합니다. 이 프로젝트는 “생성 가능 여부”가 아니라 “전체 제작 흐름을 반복 가능하고 통제 가능한 방식으로 완주할 수 있는가”를 해결합니다.', items: [{ title: '도구마다 끊기는 흐름', body: '대본, 스토리보드, 캐릭터 디자인, 배경 생성과 영상 제작이 여러 도구에 흩어져 정보 손실과 버전 혼란이 반복됩니다.' }, { title: '캐릭터와 화면의 불안정한 일관성', body: '모델은 생성할 때마다 얼굴, 의상과 장면 스타일을 바꿀 수 있습니다. 공통 에셋 기준이 없으면 연속 장면이 하나의 이야기처럼 보이지 않습니다.' }, { title: '복기할 수 없는 생성 비용', body: '모델마다 파라미터, 속도와 과금이 다릅니다. 호출 기록이 없으면 어떤 시도가 유효했고 어디에서 비용이 낭비됐는지 판단하기 어렵습니다.' }] },
    { id: 'flow', label: 'Production Pipeline', title: '대본에서 완성 영상까지 이어지는 하나의 생산 흐름', body: '콘텐츠 제작을 확인하고 되돌릴 수 있는 네 단계로 나눴습니다. 각 단계가 상위 맥락을 유지하므로 캐릭터, 배경과 장면 요구를 여러 도구에서 다시 설명할 필요가 없습니다.', cards: [{ num: '01', title: '대본 분해', body: '전체 대본에서 장면, 캐릭터, 대사, 행동과 감정을 추출해 편집 가능한 장면 목록을 만듭니다.' }, { num: '02', title: '에셋 매칭', body: '장면을 캐릭터·배경 라이브러리와 연결하고 기존 에셋을 우선 재사용합니다.' }, { num: '03', title: '장면 일괄 생성', body: '장면별로 적합한 이미지·영상 모델을 선택하고 작업 상태와 결과를 한곳에서 비교합니다.' }, { num: '04', title: '확인과 완성본 출력', body: '후보 키프레임을 확정한 뒤 동적 장면을 생성하고 최종 영상을 검수합니다.' }], image: '/media/studio1.PNG', imageAlt: '대본에서 장면 제작으로 이어지는 모바일 워크플로우', image2: '/media/studio2.PNG', image2Alt: '캐릭터와 배경 에셋 매칭 화면', image3: '/media/studio3.PNG', image3Alt: '장면 일괄 생성 및 상태 관리 화면', image4: '/media/studio4.PNG', image4Alt: '생성 결과 확인과 완성본 출력 화면' },
    { id: 'assets', label: 'Asset System', title: '에셋 재사용으로 캐릭터와 배경의 일관성을 보장', body: '일관성은 더 긴 Prompt만으로 해결되지 않습니다. 캐릭터와 배경을 먼저 관리 가능한 에셋으로 만들고 각 장면이 동일한 시각 기준을 참조하도록 해, 모델의 우연한 반복을 시스템의 지속적인 제약으로 바꿨습니다.', items: [{ title: '캐릭터 라이브러리', body: '표준 외형, 의상과 참조 이미지를 저장합니다. 한 번 확정된 캐릭터는 모든 관련 장면에서 재사용되고, 에셋 수정 후 연결 장면을 다시 생성할 수 있습니다.' }, { title: '배경 라이브러리', body: '공간, 시간과 스타일 정보를 고정하고 장면에 해당 배경 참조를 자동 제공해 동일 장소의 반복 변형을 줄입니다.' }], image: '/media/cw-char-lib-640.webp', imageAlt: '재사용 가능한 캐릭터 에셋 라이브러리' },
    { id: 'studio', label: 'Studio UI', title: '모든 제작 상태를 하나의 작업실에', body: '인터페이스를 모델별이 아니라 한 편을 완성하는 순서에 맞춰 구성했습니다. 프로젝트, 장면, 생성 파라미터와 결과가 하나의 맥락 안에서 이어져 도구 전환과 반복 설정을 줄입니다.', items: [{ title: '프로젝트 관리', body: '각 프로젝트가 대본, 에셋, 장면과 진행 상태를 독립적으로 보관해 다른 이야기의 데이터가 섞이지 않습니다.' }, { title: '장면 워크플로우', body: '장면을 서사 순서대로 보여 주고 대기, 생성 중, 확정, 수정 필요 상태를 표시해 다음 작업을 바로 찾게 합니다.' }, { title: '파라미터와 일괄 처리', body: '장면별로 모델과 설정을 선택하거나 검증된 설정을 여러 장면에 한 번에 적용합니다.' }], image: '/media/studio8.png', imageAlt: 'AI 만화극 스튜디오 프로젝트 및 에셋 개요', image2: '/media/studio9.png', image2Alt: 'AI 만화극 스튜디오 장면 제작 화면' },
    { id: 'generation', label: 'Generation & API', title: '모든 생성을 추적하고 비교하며 복기합니다', body: '생성은 일회성 버튼이 아닙니다. 모델, Prompt, 파라미터, 소요 시간과 결과를 보존해 화면이 어떻게 만들어졌는지 이해하고 품질과 비용 사이에서 판단할 수 있게 합니다.', items: [{ title: '멀티 모델 연결', body: '작업에 따라 다른 모델을 선택하고 호출 설정을 한곳에서 관리합니다. 장면과 모델이 분리되어 공급자를 바꿔도 프로젝트 전체를 다시 만들 필요가 없습니다.' }, { title: '완전한 생성 히스토리', body: '각 시도의 Prompt, 파라미터와 출력 결과를 보존해 후보 버전을 비교하고 유효한 설정을 다시 사용할 수 있습니다.' }, { title: '호출과 비용 기록', body: '프로젝트와 모델별 호출을 모아 고비용 단계를 찾고, 모델 선택 경험을 재사용 가능한 제작 판단으로 바꿉니다.' }], image: '/media/studio6.PNG', imageAlt: '멀티 모델 생성 설정 화면', image2: '/media/studio5.PNG', image2Alt: '생성 히스토리 및 후보 결과 비교 화면', image3: '/media/studio7.PNG', image3Alt: 'API 설정과 호출 관리 화면' },
    { id: 'keyframes', label: 'Keyframes & Final Output', title: '후보 키프레임에서 재생 가능한 완성 영상까지', body: '정적 키프레임으로 구도, 인물과 감정을 먼저 확정한 뒤 동적 생성으로 넘어갑니다. 아래에는 실제 출력 영상 두 편을 바로 재생할 수 있도록 배치해 최종 결과를 검증할 수 있게 했습니다.', items: [{ title: '키프레임을 먼저 확정', body: '장면마다 여러 후보를 만들고 구도, 색감과 캐릭터 상태를 검토합니다. 시각 기준을 잠근 뒤 영상 생성으로 넘어가 고비용 재작업을 줄입니다.' }, { title: '동적 장면 생성', body: 'Seedance 등 영상 모델을 호출해 장면에 맞는 움직임, 길이와 해상도를 설정하고 출력 버전을 비교할 수 있도록 보존합니다.' }], video: 'https://pub-b4207c4837a7427cba5f6e5be59729c5.r2.dev/comic1.mp4', videoPoster: '/media/cw-keyframe-1-900.webp', videoLabel: 'FINAL OUTPUT 01', video2: 'https://pub-b4207c4837a7427cba5f6e5be59729c5.r2.dev/comic2.mp4', video2Poster: '/media/cw-keyframe-2-900.webp', video2Label: 'FINAL OUTPUT 02' },
    { id: 'lessons', label: 'Lessons Learned', title: '시행착오에서 얻은 세 가지 제품 판단', items: [{ title: '일관성은 먼저 에셋 문제입니다', body: 'Prompt를 계속 늘려도 캐릭터는 흔들렸습니다. 캐릭터·배경 라이브러리를 만든 뒤에는 재사용 에셋과 참조 관계가 일관성을 보장합니다.' }, { title: '저비용 미리보기 후 정식 생성', body: '영상 모델을 정식 호출하기 전에 저해상도와 단순 파라미터로 구도와 움직임을 검증했습니다. 방향을 확인한 뒤 정식 생성해 장면당 API 비용을 약 40% 줄였습니다.' }, { title: '모델을 장면에 맞추고 하나에 종속되지 않습니다', body: '모델마다 구도 이해, 디테일과 움직임에서 강점이 다릅니다. 장면별로 모델을 선택해 전체 제작 흐름이 한 공급자에 묶이지 않도록 했습니다.' }] },
    { id: 'summary', label: 'Project Summary', title: '개별 생성을 지속 가능한 제작으로 조직', body: 'AI 콘텐츠 제작의 병목은 모델 출력만이 아니라 맥락, 에셋, 버전과 호출 기록을 체계적으로 관리할 수 있는가에 있습니다. 에셋 재사용이 일관성을 보장하고, 장면 상태를 한 작업실에서 진행하며, 생성 히스토리를 비교·복기할 수 있어야 한 편을 안정적으로 완성할 수 있습니다.', highlight: '다음 단계: 다중 캐릭터 동시 등장 장면, 음성 합성과 자동 더빙, 긴 프로젝트의 일괄 작업 스케줄링을 개선합니다.', highlightLabel: 'NEXT STEPS' },
    { id: 'program-structure', label: 'Program Structure', title: '프로그램 구조: 디렉토리마다 명확한 제작 책임', body: '백엔드 API, 프롬프트, 사전 데이터와 프론트엔드 정적 자원을 분리해 모델 기능, 제작 로직과 화면을 독립적으로 개선할 수 있게 했습니다.', cards: [{ num: 'app.py', title: '메인 웹 서버', body: '라우팅과 API 엔드포인트' }, { num: 'prompts/', title: 'AI 프롬프트 저장소', body: '대본 분석, 분경과 이미지 생성 템플릿' }, { num: 'data/', title: '데이터 저장소', body: '캐릭터, 장면과 스타일 사전 설정' }, { num: 'static/', title: '프론트엔드 정적 파일', body: 'HTML, CSS, JavaScript와 이미지' }, { num: 'requirements.txt', title: 'Python 의존성', body: 'pip 패키지 목록' }, { num: 'Procfile', title: '배포 프로세스', body: 'Railway 시작 명령 정의' }, { num: 'railway.toml', title: '배포 환경 설정', body: 'Railway 서비스 구성' }, { num: 'nixpacks.toml / runtime.txt', title: '빌드와 런타임', body: 'Nixpacks 규칙과 Python 버전' }] },
    { id: 'technical-architecture', label: 'Technical Architecture', title: '기술 아키텍처', body: 'Python 웹 서비스를 중심으로 가벼운 프론트엔드 작업실을 제공하고 Railway에 배포했습니다. 모델 연결은 교체 가능하게 유지해 생성 작업마다 적합한 공급자를 선택할 수 있습니다.', cards: [{ num: 'Language', title: '개발 언어', body: 'Python' }, { num: 'Framework', title: '프레임워크', body: 'Flask / FastAPI · app.py 기반 웹 서버' }, { num: 'Frontend', title: '프론트엔드', body: 'HTML · CSS · JavaScript · static/ 디렉토리' }, { num: 'Deployment', title: '배포 환경', body: 'Railway · railway.toml · Procfile · nixpacks.toml' }, { num: 'AI Models', title: 'AI 모델 연동', body: '豆包(Doubao) · GLM 4.6 · Claude 4.6 · GPT Image 2 · Seedance' }, { num: 'Packages', title: '패키지 관리', body: 'pip · requirements.txt' }] },
  ],
};

const infiniteCanvasKo: ProjectDetail = {
  slug: 'ai-infinite-canvas', num: '01',
  name: 'AI 무한 캔버스', nameEn: 'AI Infinite Canvas Workflow Platform',
  subtitle: '이커머스·운영·비주얼 크리에이터를 위한 노드 기반 AI 콘텐츠 제작 SaaS',
  tags: ['SaaS 제품', '워크플로우 설계', '배치 생성', 'BYOK API', '3개 언어', 'Cloudflare 배포'],
  meta: '2026 · 독립 SaaS 제품 · 배포 완료 / 지속 개선 중',
  heroImage: '/media/xn-home-hero-760.webp', heroImageAlt: '',
  nextProject: { slug: 'comic-studio', name: 'AI 만화극 제작 시스템' },
  liveDemo: { url: 'https://image.hanyue-room.design/', labelZh: '体验交互演示', labelKo: '인터랙티브 데모', productLabelZh: '访问线上产品', productLabelKo: '라이브 제품 보기' },
  sections: [
    { id: 'overview', label: 'Overview', title: '생성 도구에서 콘텐츠 제작 SaaS로', body: 'AI 무한 캔버스는 제품 기획, 인터랙션 설계, 엔지니어링 구현까지 독립적으로 완성한 AI 콘텐츠 제작 SaaS입니다. 오픈소스 Infinite Canvas / React Flow의 기본 캔버스 기능 위에 배치 생성에 필요한 비즈니스 노드, 워크플로우, 결과 관리 방식을 새롭게 설계했습니다. 사용자는 하나의 캔버스에서 제품 소재, 참조 레이아웃, 프롬프트, 크기, 모델, 브랜드 카피를 조합하고 이를 바로 배치 생성 작업으로 전환할 수 있습니다. 현재 제품은 실제 서비스로 배포되어 운영 중입니다.', image: '/media/ai-canvas-1200.webp', imageAlt: 'AI 무한 캔버스 — 메인 인터페이스', mediaMode: 'feature', imageCaption: '제품 소재, 참조 레이아웃, 프롬프트, 모델 설정과 생성 결과를 하나의 재사용 가능한 워크플로우로 구성', items: [] },
    { id: 'challenge', label: 'Challenge', title: '배치 콘텐츠 제작은 단순히 이미지를 많이 생성하는 일이 아닙니다', body: '이커머스·브랜드 운영·비주얼 팀은 여러 상품, 규격, 채널, 크리에이티브 방향을 동시에 처리해야 합니다. 기존 대화형 생성 도구에서는 프롬프트 복사, 모델 전환, 결과 정리, 상품과 매체별 분류를 반복해야 합니다. 핵심 문제는 모델의 성능이 아니라 변수를 구조화하고, 병렬로 실행하며, 결과와 과정을 함께 보존할 제작 시스템이 없다는 점입니다.', image: '/media/canvas4-1478.webp', imageAlt: 'AI 무한 캔버스 — 전체 캔버스 아키텍처', mediaMode: 'panorama', imageCaption: '입력 설정부터 배치 생성, 결과 비교까지의 제작 흐름을 하나의 캔버스에 유지', annotations: [{ label: '입력 및 설정', x: 18, y: 25 }, { label: '배치 생성', x: 52, y: 55 }, { label: '결과 비교', x: 82, y: 30 }], items: [] },
    { id: 'saas', label: 'SaaS Model', title: '사용 가능한 도구에서 운영 가능한 제품으로', body: '로컬 프로토타입에 머물지 않고 계정, 권한, 크레딧, API, 클라우드 데이터 등 SaaS 운영에 필요한 기능을 구현했습니다. 이를 통해 서비스 배포, 사용자 초대, 향후 수익화가 가능한 제품 기반을 만들었습니다.', items: [
      { title: '유료 초대 코드와 사용자 접근', body: '초대 코드를 가입 권한과 혜택 배포 수단으로 설계했습니다. 버전별 사용 자격과 크레딧을 설정해 체험판, 유료 플랜, 지정 고객 제공에 활용할 수 있습니다.' },
      { title: '사용자 API 연동(BYOK)', body: '사용자가 직접 모델 API를 연결하고 제공사, 모델, 호출 방식을 선택할 수 있어 워크플로우 경험은 유지하면서 모델 선택과 생성 비용을 스스로 관리할 수 있습니다.' },
      { title: '플랫폼 크레딧과 생성 이력', body: '플랫폼 호출과 사용자 API 경로를 분리해 관리하고, 생성 작업·결과·이력을 기록하여 향후 크레딧 체계와 운영 분석으로 확장할 수 있습니다.' },
      { title: '중국어·한국어·영어 지원', body: '메인 워크스페이스뿐 아니라 로그인, 관리자, 생성 이력, 에셋, 모델 설정까지 3개 언어를 지원하며 사용자의 언어 선택을 저장합니다.' },
    ] },
    { id: 'system', label: 'System Design', title: '오픈소스 캔버스 위에 설계한 독자적 비즈니스 시스템', body: '오픈소스 Infinite Canvas / React Flow로 기본 드래그, 확대·축소, 연결 기능을 해결하고 비즈니스 노드 설계, 조합 규칙, 생성 프로토콜, 결과 회수에 집중했습니다. 차별점은 캔버스 자체가 아니라 복잡한 AI 콘텐츠 제작 과정을 누구나 이해하고 재사용할 수 있는 시각적 워크플로우로 바꾼 데 있습니다.', flowLabel: '소재에서 결과까지', flow: ['제품·참조 이미지 선택', '프롬프트·크기·모델 구성', '생성 조합 계산', '배치 병렬 생성', '통합 결과 그리드', '다운로드·이력 추적'], items: [
      { title: '조합 가능한 비즈니스 노드', body: '제품 그룹, 참조 레이아웃, 프롬프트 그룹, 출력 크기, 모델 설정, 브랜드 카피, 배치 생성, 결과 그리드 노드를 설계하고 연결 관계로 데이터 조합을 결정하도록 했습니다.' },
      { title: '배치 작업 오케스트레이션', body: '상위 노드의 상품 × 참조 이미지 × 프롬프트 × 크기 조합을 자동 계산하여 반복 작업을 한 번의 검토 가능한 배치 제출로 전환합니다.' },
      { title: '통합 결과와 에셋 관리', body: '서로 다른 배치와 생성 노드의 결과를 하나의 결과 그리드에 모으고, 제품 소재와 여러 참조 이미지는 클라우드 에셋으로 저장해 재사용·비교·추적할 수 있습니다.' },
    ] },
    { id: 'scenes', label: 'Scene Selection', title: '빈 캔버스가 아닌 실제 업무 중심의 시나리오', body: '빈 캔버스는 자유롭지만 신규 사용자의 학습 부담이 큽니다. 캐릭터 디자인, 이커머스 상품 이미지, SNS 콘텐츠, 이벤트 포스터 등의 작업을 위한 프리셋을 설계해 필요한 노드와 연결, 파라미터 구조를 자동으로 준비했습니다. 사용자는 “어떻게 연결할까”가 아니라 “무엇을 만들까”에서 시작할 수 있습니다.', image: '/media/canvas6-1508.webp', imageAlt: '캐릭터 디자인 시나리오', imageCaption: '캐릭터 디자인: 일관성 워크플로우를 미리 구성해 다양한 각도와 스타일의 캐릭터 소재를 빠르게 생성', image2: '/media/canvas7-1480.webp', image2Alt: '이커머스 및 운영 시나리오', image2Caption: '이커머스 및 운영: 상품 이미지, 배너, SNS 광고, 이벤트 포스터에 맞춰 생성 노드를 구성', mediaMode: 'tabs', tabLabelsKo: ['캐릭터 디자인', '이커머스·운영'] },
    { id: 'decisions', label: 'Key Decisions', title: '핵심 결정', items: [
      { title: '오픈소스를 인정하고 적극 활용', body: '기본 캔버스는 검증된 오픈소스를 사용했습니다. 사용자 과업, 노드 의미, 조합 규칙, 생성 프로토콜, 데이터와 수익화 시스템에 집중해 개발 기간을 줄이고 독자적 가치를 명확히 했습니다.' },
      { title: '선형 폼이 아닌 공간형 워크플로우', body: '배치 생성에는 여러 변수와 크리에이티브 분기가 존재합니다. 캔버스에서 입력과 결과의 관계를 볼 수 있어 복제, 분기, 비교, 회고가 쉬워집니다.' },
      { title: '플랫폼 서비스와 BYOK의 공존', body: '특정 모델이나 과금 방식에 사용자를 고정하지 않고 플랫폼 기능과 사용자 API를 모두 지원하여 소규모 팀도 비용과 공급사를 유연하게 관리할 수 있도록 했습니다.' },
      { title: '국제화를 제품 기능으로 설계', body: '3개 언어 지원을 홈 화면 번역에 그치지 않고 워크스페이스, 계정, 관리자, 이력, 에셋, 모델 설정 전체에 적용하고 선택 언어를 유지합니다.' },
    ], image: '/media/canvas2-2426.webp', imageAlt: 'AI 무한 캔버스 — 캔버스 파노라마 뷰', mediaMode: 'panorama', imageCaption: '여러 상품, 크리에이티브 분기와 생성 작업을 비선형적으로 동시에 관리' },
    { id: 'deliverables', label: 'Deliverables', title: '완성한 제품 기능', items: [
      { title: '배포 가능한 SaaS 전체 흐름', body: '계정 인증, 초대 코드, 사용자 크레딧, 관리자, 생성 이력, 권한 보호를 구현하여 로컬 UI 프로토타입을 실제 제품으로 확장했습니다.' },
      { title: '다중 모델과 사용자 API', body: '플랫폼 모델과 사용자 API를 모두 지원하고 텍스트 생성, 참조 이미지 생성, 이미지 편집 등 서로 다른 프로토콜과 오류 진단을 처리합니다.' },
      { title: '에셋 라이브러리와 결과 시스템', body: '제품 소재의 다중 이미지 업로드, 인식, 압축, 클라우드 저장을 지원하고 생성 결과를 배치 간 통합·비교·다운로드하여 이력으로 보관합니다.' },
      { title: 'Cloudflare 프로덕션 배포', body: 'Cloudflare Worker, D1, R2를 사용해 애플리케이션, 구조화 데이터, 이미지 에셋을 운영하며 독립 도메인으로 서비스를 제공하고 있습니다.' },
    ] },
    { id: 'validation', label: 'Launch & Validation', title: '서비스 배포와 저작권 등록', body: '이 프로젝트는 디자인 콘셉트나 개발 연습 단계를 넘어섰습니다. 실제 온라인 제품으로 운영되고 있으며 핵심 SaaS 흐름이 작동하고, 한국저작권위원회 저작권 등록까지 완료했습니다. 문제 정의부터 제품 설계, 오픈소스 기술 선택, 풀스택 개발, 배포와 운영까지 전 과정을 경험한 프로젝트입니다.', items: [
      { title: '실제 서비스 배포 완료', body: 'image.hanyue-room.design에서 가입, 초대 코드 접근, 캔버스 워크플로우 생성, 사용자 API 연결과 실제 생성 작업을 수행할 수 있습니다.' },
      { title: '한국저작권위원회 등록 완료', body: '등록번호: 제C-2026-037309호. 제호: AI 무한 캔버스 워크플로우 플랫폼(AI Infinite Canvas Workflow Platform).' },
      { title: '독립적인 엔드투엔드 수행', body: '제품 포지셔닝, 인터랙션·비주얼 디자인, 노드·워크플로우 기획, 프런트엔드·백엔드 구현, 3개 언어 현지화, 클라우드 배포와 운영 준비까지 수행했습니다.' },
    ] },
    { id: 'reflection', label: 'Roadmap', title: '다음 단계: 생성에서 최종 납품까지 하나의 흐름으로', body: '현재는 이미지를 어떻게 구조화하고 배치 생성할지에 집중했다면, 다음 단계에서는 생성 후 이미지 수정과 이미지·텍스트 콘텐츠의 영상 확장을 해결합니다. 이커머스·운영 팀이 여러 도구를 오가며 파일을 반복해서 내보내고 가져오지 않아도 하나의 캔버스에서 소재 준비, 이미지 생성, 후반 편집, 영상 제작, 최종 내보내기까지 완료하는 것이 목표입니다.', highlight: '단기 로드맵: 중국어·한국어·영어 경험 개선, 부분 재생성·확장·배경 제거·화질 개선 등 이미지 후반 작업 노드, 상품 영상·운영 광고·SNS 숏폼을 위한 영상 생성 및 편집 노드 추가.', highlightLabel: 'PRODUCT ROADMAP' },
  ],
};

const milkRibbonKo: ProjectDetail = {
  slug: 'milk-ribbon', num: '04',
  name: '브랜드 디자인 워크스', nameEn: 'Brand Visual Design Works',
  subtitle: 'Milk & Ribbon을 핵심 사례로, 브랜드 포지셔닝, 비주얼 아이덴티티, 마케팅 자재 시스템 디자인을 소개합니다',
  tags: ['브랜드 전략', 'VI 시스템', '패키지 디자인', '비주얼 자재'],
  meta: '2025.09 · 브랜드 디자인 과정 프로젝트',
  heroImage: '/media/mr-hero-560.webp', heroImageAlt: '',
  nextProject: { slug: 'commercial-video', name: '상업 영상과 모션 광고' },
  sections: [
    { id: 'market', label: 'Market Insight', title: '시장 인사이트와 수요 분석', body: '"탈젠더화"와 "미니멀 시크" 이후, 18-25세 Z세대 여성들 사이에서 미적 반동이 일어나고 있습니다. "극도의 여성성"을 표방하는 Coquette, Balletcore가 SNS에서 폭발적 인기를 얻고 있습니다. 그러나 시중의 스위트 브랜드들은 브랜드 내러티브와 정신적 코어의 부재로 구매 경험이 단절되어 있습니다. Milk & Ribbon은 \'부드러움\'과 \'질서\'를 융합하여 정신적 내러티브가 있는 입을 수 있는 로맨티시즘을 만들고자 합니다.' },
    { id: 'positioning', label: 'Brand Core', title: '브랜드 포지셔닝과 타겟', body: '', items: [{ title: '브랜드 코어：「부드러움, 그 자체의 질서」', body: 'Softness with Structure — 소녀 감성은 나이의 신체적 특징이 아니라, 답답함을 거부하고 시를 간직하는 정신적 상태입니다.' }, { title: '타겟', body: '18-25세 Z세대 젊은 여성, "사진발"을 추구하는 꿈을 만드는 사람들.' }, { title: '가치 제안', body: '소녀 감성은 나이의 신체적 특징이 아니라, 답답함을 거부하고 시를 간직하는 정신적 상태입니다.' }], image: '/media/mr-strategy.png', imageAlt: '브랜드 포지셔닝 전략' },
    { id: 'visual-system', label: 'Visual System', title: '비주얼 아이덴티티 시스템', body: '소프트 핑크, 크림 화이트, 로즈 레드, 파우더 블루로 달콤하지만 저렴하지 않은 컬러 계층을 구축했습니다. 보조 그래픽은 리본, 발레, 백조, 필기체 라인을 이어받아 패키지, SNS, 오프라인 자재 전반에 걸쳐 통일된 아이덴티티를 유지합니다.', image: '/media/mr-research.png', imageAlt: '시장 조사 비주얼 보드', image2: '/media/mr-colors.png', image2Alt: '컬러 시스템', image3: '/media/mr-logo.png', image3Alt: '로고 시스템' },
    { id: 'lookbook', label: 'Lookbook & Catalog', title: '룩북 레이아웃과 브랜드 확장', body: '브랜드 룩북 시스템——비주얼 적용 예시부터 각 터치포인트의 브랜드 확장까지, 통일된 비주얼 언어와 읽기 리듬을 구축합니다.', image: '/media/mr-catalog.png', imageAlt: '브랜드 룩북', image2: '/media/mr-37.2.png', image2Alt: '터치포인트 확장', image3: '/media/mr-all-materials.png', image3Alt: '자재 패밀리' },
    { id: 'packaging', label: 'Packaging Extension', title: '패키징과 그래픽 확장', body: '패키징 적용 및 그래픽 확장——브랜드 핵심 비주얼 요소를 제품 패키지, 라벨, 보조 그래픽으로 확장하여 물리적 터치포인트에서의 일관성과 식별성을 보장합니다.', image: '/media/mr-36.1.png', imageAlt: '패키지 적용', image2: '/media/mr-36.2.png', image2Alt: '그래픽 확장', image3: '/media/mr-goods.png', image3Alt: '제품 디스플레이' },
    { id: 'materials', label: 'Materials', title: '마케팅 자재 시스템 전체 보기', body: '브랜드 자재 패밀리와 터치포인트 확장——명함, 봉투, 쇼핑백부터 매장 디스플레이와 SNS 템플릿까지 완전한 브랜드 자재 시스템을 구축합니다.', image: '/media/mr-35.1.png', imageAlt: '비주얼 적용 예시' },
    { id: 'reflection', label: 'Reflection', title: '프로젝트 요약', body: 'Milk & Ribbon 브랜드 디자인 프로젝트는 시장 인사이트부터 비주얼 실행까지의 완전한 브랜드 구축 실습이었습니다. 핵심 학습: 브랜드 비주얼은 "예쁘면 된다"가 아니라, 타겟의 감정적 니즈에서 출발하여 색상, 그래픽, 레이아웃을 통해 정신적 코어가 있는 아이덴티티 시스템을 구축하는 것입니다.' },
  ],
};

const commercialVideoKo: ProjectDetail = {
  slug: 'commercial-video', num: '05',
  name: '상업 영상과 모션 광고', nameEn: 'Commercial Video & Motion Ads',
  subtitle: '브랜드 커뮤니케이션, 이커머스 전환, SNS 광고를 위한 숏필름과 동적 비주얼 소재',
  tags: ['브랜드 광고', '이커머스', 'SNS 숏폼', '모션 그래픽'],
  meta: '상업 프로젝트 · 편집 / 모션 / 시각 리듬 / 광고 소재',
  heroImage: '/media/mr-hero-900.webp', heroImageAlt: '',
  nextProject: { slug: 'ai-infinite-canvas', name: 'AI 무한 캔버스' },
  sections: [
    { id: 'overview', label: 'Overview', title: '프로젝트 개요', body: '브랜드 커뮤니케이션, 이커머스 전환, SNS 광고를 위한 숏필름과 동적 비주얼 소재. 플랫폼 특성에 따라 가로형 16:9와 세로형 9:16 두 가지 규격으로 제작.', items: [{ title: '작업 방식', body: '브랜드 톤에 맞춰 쇼트 리듬, 자막 정보, 전환 방식을 정리합니다. 다양한 광고 시나리오에 맞춰 가로형, 세로형, SNS 피드 버전을 출력합니다. 가독성, 제품 노출, 첫 3초 체류율을 균형 있게 고려합니다.' }] },
    { id: 'landscape', label: 'Landscape · 16:9', title: '가로형 상업 영상', body: '공식 웹사이트, 브랜드 소개, 플랫폼 메인 이미지와 가로형 광고 지면에 맞춰 정보 위계, 제품 노출, 시각 리듬을 정리했습니다.', video: '/media/brand-ad-1.mp4', video2: '/media/brand-ad-2.mp4', items: [{ title: '브랜드 이미지 숏필름', body: '웹사이트 / 전시용. 브랜드 톤과 비주얼 분위기를 강조. 느린 리듬, 화면 질감과 색상 통일성 중시.' }, { title: '이커머스 마케팅 숏필름', body: '메인 이미지 / 광고 소재용. 제품 셀링 포인트와 전환 정보 강조. 첫 3초 내에 주제 진입, 자막 가독성 확보.' }] },
    { id: 'portrait', label: 'Portrait · 9:16', title: '세로형 피드 영상', body: '샤오홍슈, 틱톡, 릴스 등 모바일 피드에 맞춰 초반 진입, 자막 가독성, 연속 시청 리듬을 중심으로 구성했습니다.', video: '/media/brand-ad-3.mp4', video2: '/media/brand-ad-4.mp4', items: [{ title: 'SNS 리뷰형 숏폼', body: '모바일 광고용. 실제 경험과 제품 디스플레이를 핵심으로. 빠른 리듬, 3초 내 비주얼 앵커 구축.' }, { title: 'MG 모션 설명', body: '정보 시각화용 애니메이션. 제품 기능 설명, 데이터 디스플레이, 브랜드 스토리에 사용. 명확한 시각적 위계로 정보 획득 유도.' }] },
    { id: 'reflection', label: 'Reflection', title: '프로젝트 요약', body: '상업 영상 프로젝트는 브랜드 광고, 이커머스, SNS 숏폼, 모션 그래픽 네 가지 유형을 커버하며 다양한 광고 시나리오에 대응합니다. 핵심 역량은 플랫폼 특성과 오디언스 행동에 따라 비주얼 리듬, 정보 밀도, 화면 구성을 조정하는 것입니다.' },
  ],
};

/* ================================================================
   EXPORT
   ================================================================ */

export const projectDetailsZh: Record<string, ProjectDetail> = {
  'xiaonuan': xiaonuanZh,
  'comic-studio': comicStudioZh,
  'ai-infinite-canvas': infiniteCanvasZh,
  'milk-ribbon': milkRibbonZh,
  'commercial-video': commercialVideoZh,
};

export const projectDetailsKo: Record<string, ProjectDetail> = {
  'xiaonuan': xiaonuanKo,
  'comic-studio': comicStudioKo,
  'ai-infinite-canvas': infiniteCanvasKo,
  'milk-ribbon': milkRibbonKo,
  'commercial-video': commercialVideoKo,
};

export function getProjectDetail(slug: string, locale: 'zh' | 'ko'): ProjectDetail {
  const map = locale === 'zh' ? projectDetailsZh : projectDetailsKo;
  const detail = map[slug];
  if (!detail) throw new Error(`Project not found: ${slug}`);
  return detail;
}
