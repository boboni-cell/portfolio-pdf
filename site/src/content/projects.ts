/**
 * Project detail content — bilingual, 5 projects.
 * Content sourced from root index.html, i18n.js, and project instructions.
 * All image fields retained but NOT rendered in current templates.
 */

export type ProjectSlug = 'xiaonuan' | 'koreahospital' | 'comic-studio' | 'ai-infinite-canvas' | 'milk-ribbon' | 'commercial-video';

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
export const SLUGS: ProjectSlug[] = ['ai-infinite-canvas', 'comic-studio', 'xiaonuan', 'koreahospital', 'milk-ribbon', 'commercial-video'];

/* ================================================================
   03 — XIAONUAN
   ================================================================ */

const xiaonuanZh: ProjectDetail = {
  slug: 'xiaonuan', num: '03',
  name: '小暖', nameEn: 'AI Life Companion with Long-Term Memory',
  subtitle: '说一句今天发生了什么，小暖会帮你整理花销、日记和安排。',
  tags: ['生活记录', 'App 设计', '韩元记账', '用户测试'],
  meta: '2026.01 – 至今 · 独立产品 · 中文 Beta / 多语版本完善中',
  heroImage: '/media/xn-home-hero-760.webp', heroImageAlt: '',
  nextProject: { slug: 'koreahospital', name: '运营工作台' },
  mediaPresentation: 'phone',
  sections: [
    { id: 'overview', label: 'Overview', title: '聊天时，顺手记下生活', body: '比如说一句“今天打车花了 18,000 韩元”，小暖会记到账本里。聊到明天的安排，它也能生成日程；保存前可以自己检查和修改。', video: '/media/ui-xiaonuan.mp4', videoPoster: '/media/xn-home-hero-760.webp', items: [{ label: '想说什么就说什么', body: '花销、约会、附近有什么店，都可以直接问或说，不必先找对应的功能页。' }, { label: '聊天后生成记录草稿', body: '小暖从话里找出金额、时间和事件，做成账目、日程或日记草稿。用户可以检查和修改。' }, { label: '记得之前说过的事', body: '用户下次提到同一件事时，小暖会参考之前说过的话。' }] },
    { id: 'difference', label: 'Product Difference', title: '少填几张表', body: '记账、写日记、建日程，通常要打开不同页面。小暖先从聊天里找出需要记录的内容，再让用户确认。', cards: [{ num: '01', title: '聊天就是入口', body: '不需要说“开始记账”或“帮我写日记”。一句自然表达可以同时产生回答、账目、日程和生活记录。' }, { num: '02', title: '把信息放到对应位置', body: '花销放到账本，约会放到日历，想留下的事放进日记。' }, { num: '03', title: '语音和照片也能用', body: '可以说话，也可以发照片。拍小票时，小暖会先识别上面的消费信息。' }, { num: '04', title: '记得之前的习惯', body: '用户说过的习惯和偏好，下次聊天时可以继续参考。' }], flowLabel: '一句话怎么变成记录', flow: ['文字 / 语音 / 图片输入', '识别意图与生活信息', '结合长期记忆理解', '回答当前问题', '主动写入账目 / 日程 / 日记'], highlight: '先说发生了什么，再决定要不要存下来。', highlightLabel: '核心差异' },
    { id: 'multimodal', label: 'Multimodal Input', title: '打字、说话、拍照都可以', body: '不方便打字时可以发语音，也可以拍小票。小暖识别后先给出记录草稿，用户可以改。', items: [{ title: '语音直接聊天', body: '走路、做饭或不方便打字时，用户可以直接发送语音。小暖理解完整语义，并从中提取消费、计划、地点和情绪。' }, { title: '图片提问', body: '用户可以发送商品、菜单、环境或生活相关图片进行询问，小暖结合图片内容和对话上下文给出解释。' }, { title: '小票自动记账', body: '上传小票后识别商家、金额、币种和消费时间，自动创建支出记录，省去逐项输入。' }], image: '/media/xn-multimodal-voice.webp', imageAlt: '小暖通过语音理解韩语对话与生活安排', image2: '/media/xn-multimodal-context.webp', image2Alt: '小暖在连续语音聊天中保留上下文', image3: '/media/xn-multimodal-image.webp', image3Alt: '小暖识别生活图片和小票并自动记录' },
    { id: 'currency', label: 'Cross-border Wallet', title: '韩元支出，也能按人民币看', body: '在韩国花韩元、用人民币做预算时，不必自己换算。账本保留原金额，也显示换算后的金额。', items: [{ title: '首次设置生活地区与本位币', body: '进入产品时选择当前生活国家和希望查看的本位币，后续记录会自动使用对应币种与换算方式。', image: '/media/xn-currency-profile.webp', imageAlt: '小暖个人资料中的国家和地区设置' }, { title: '自动识别币种并换算', body: '例如用户说“今天在韩国花了 32,000 韩币”，小暖会保留韩币原始金额，并按当前汇率换算成人民币写入支出，账本中可以直接查看。', image: '/media/xn-currency-chat.webp', imageAlt: '聊天中自动识别韩币并换算成人民币' }, { title: '适合韩国留学生与旅行人群', body: '不需要每次打开汇率工具再手工录入。聊天、语音和小票都可以触发跨币种记账，让当地消费与国内预算处于同一个账本。', image: '/media/xn-currency-ledger.webp', imageAlt: '同时显示韩币原始金额和人民币换算金额的账本' }] },
    { id: 'life-search', label: 'Contextual Assistance', title: '生活问题也可以直接问', body: '用户可以问附近的生活服务。小暖整理地点、价格等信息；决定好时间后，可以继续记进日程。', items: [{ title: '附近生活服务查询', body: '例如询问皮肤管理，小暖可以查询附近评价较好的相关机构，整理可预约时间、价格和距离，帮助用户完成比较。', image: '/media/xn-life-service-search.webp', imageAlt: '小暖查询附近生活服务并给出预约建议' }, { title: '把建议转成日程', body: '当用户确定时间后，小暖可以把预约或计划写入日程，并在合适的时间提醒，不需要再次打开日历录入。', image: '/media/xn-life-schedule-suggestion.webp', imageAlt: '小暖把生活建议整理成可以执行的下一步' }, { title: '保持能力边界', body: '生活信息查询用于帮助用户收集和比较信息，不替代医生诊断，也不替用户完成医疗、消费或其他重要决定。', image: '/media/xn-life-safety-boundary.webp', imageAlt: '小暖在生活建议中明确就医边界' }] },
    { id: 'memory', label: 'Long-term Memory', title: '下次聊，不用从头解释', body: '小暖会记住用户提过的习惯和还没做完的事。下次提到同一件事时，可以接着上次的话题聊。', items: [{ title: '生活习惯', body: '从长期对话中逐步形成对作息、饮食、消费和常用地点的理解，为之后的提醒和回答提供上下文。', image: '/media/xn-home-760.webp', imageAlt: '小暖长期记忆与生活聚合首页' }, { title: '未完成的事情', body: '记住用户提过但尚未完成的计划，在适当时间继续跟进，而不是让事项沉没在聊天记录中。', image: '/media/xn-memory-unfinished.webp', imageAlt: '小暖找回用户尚未完成的日程事项' }, { title: '稳定的情感关系', body: '小暖以温和、平等、不越界的方式回应。陪伴感来自持续记得和认真回应，而不是过度亲密的称呼或夸张拟人化。', image: '/media/xn-memory-companion.webp', imageAlt: '小暖持续理解并回应用户的生活状态' }] },
    { id: 'auto-organize', label: 'Active Organization', title: '聊天后，看看它记对没有', body: '小暖把对话里的花销、事件和安排整理成草稿。用户确认后，再放进账本、日记或日历。', cards: [{ num: 'Diary', title: '主动生成日记', body: '把当天提到的事整理成日记草稿，用户可以删改。' }, { num: 'Schedule', title: '主动创建日程', body: '识别“明天下午三点”“下周之前”等自然时间表达，生成明确日程与温和提醒。' }, { num: 'Wallet', title: '账目与生活关联', body: '账目里保留当天的地点和事件，回看时更容易想起来这笔钱花在哪。' }], image: '/media/xn-auto-chat.webp', imageAlt: '小暖在聊天中识别日记和日程信息', image2: '/media/xn-auto-diary.webp', image2Alt: '小暖根据聊天自动生成的生活日记', image3: '/media/xn-auto-schedule.webp', image3Alt: '小暖根据聊天主动整理的日程规划' },
    { id: 'architecture', label: 'Information Architecture', title: '从聊天进入其他功能', body: '聊天是主要入口。账本、日记和日历负责保存记录，首页让用户快速找到它们。', cards: [{ num: 'Core Entry', title: '首页', body: '聚合今日状态、功能入口与陪伴反馈' }, { num: 'Chat', title: '聊天对话', body: '自然语言输入 · 自动识别意图 · 情绪陪伴' }, { num: 'Schedule', title: '日程规划', body: '从聊天提取待办 · 智能提醒' }, { num: 'Diary', title: '日记记事', body: '自动沉淀 · 心情小结 · 可回看' }, { num: 'Wallet', title: '记账管理', body: '自动入账 · 分类归档 · 消费洞察' }, { num: 'Profile', title: '我的设置', body: '个人信息 · 偏好配置 · 数据管理' }], flowLabel: '页面层级', flow: ['详情页', '汇总页', '编辑页'] },
    { id: 'technical-architecture', label: 'Technical Architecture', title: '怎么做出来的', body: '手机 App 用 React Native 和 Expo 开发，后端用 Cloudflare Workers。这样我可以较快修改和测试新版本。', cards: [{ num: 'Frontend', title: '前端', body: 'React Native (Expo) · 实时刷新 · 跨平台' }, { num: 'Backend', title: '后端', body: 'Cloudflare Workers · 边缘部署 · 低延迟' }, { num: 'AI Models', title: 'AI 模型', body: 'DeepSeek Chat（对话核心）· 千问（图片识别，计划中）· 语音识别（计划中）' }, { num: 'Development', title: '开发工具', body: 'Claude Code · AI 辅助开发' }] },
    { id: 'iteration', label: 'Testing & Iteration', title: '试用后改了什么', body: '我先自己连续使用，再请家人和小范围用户测试。有人不会开始第一句，有时账目分类也会出错；这些反馈让我改了引导和确认方式。', items: [{ label: '第一轮 · 自测（30 天）', body: '作为唯一用户连续记录生活节奏，重点观察每天记账、写日记和设日程时，哪些步骤会让人产生“哪里让我不想继续用”的阻力。' }, { label: '第二轮 · 家人测试', body: '邀请 50–75 岁家庭成员作为真实用户，验证用户不理解 AI 原理时，是否仍能通过一句自然表达完成记录。' }, { label: '第三轮 · Beta 外部反馈', body: '在小范围用户群中发布 Beta，收集独居与单身用户的日常使用反馈，重点观察用户会在什么时刻放弃使用。' }], cards: [{ num: 'Iteration 01', title: '记账分类不准确', body: '问题：奶茶被记成购物、打车被记成交通但混入滴滴月卡充值。决策：增加三级分类关键词映射，模糊类别先确认再入账。结果：减少错误归类与手动修改。' }, { num: 'Iteration 02', title: '对话中遗漏隐含待办', body: '问题：一句话同时出现显性任务和因果链中的隐藏任务时，只提取了前者。决策：在识别逻辑中加入因果链解析，拆分为独立待办并让用户确认。结果：减少提醒遗漏和重复补录。' }, { num: 'Iteration 03', title: '首次使用认知门槛', body: '问题：新用户知道产品能记账、写日记，却不知道第一句话该说什么。决策：首次进入时提供三条可点击的生活化示例。结果：让用户从示例直接开始对话，降低空白页的不知所措。' }] },
    { id: 'international', label: 'Current Status', title: '目前先做好中文版', body: '中文版还在测试。英文、韩文和日文界面也在完善，币种、日期和当地生活信息需要跟着语言一起调整。', items: [{ title: '英语版本', body: '完善基础界面、生活问答和多模态输入的英文表达，覆盖国际用户常见使用情境。' }, { title: '韩语版本', body: '重点优化韩国本地生活、韩币记账、机构查询和留学生高频场景。' }, { title: '日语版本', body: '补充日语 UI、自然对话语气与日本地区的币种、时间和生活服务信息表达。' }] },
    { id: 'summary', label: 'Project Summary', title: '还在继续改的小暖', body: '我想让记录生活少一点操作。现在重点是减少识别错误，让用户更容易检查和修改记录。', highlight: '下一步要提高语音和小票识别的准确度，继续做英文、韩文和日文版本。', highlightLabel: 'PRODUCT ROADMAP' },
  ],
};

/* ================================================================
   02 — AI COMIC STUDIO
   ================================================================ */

const comicStudioZh: ProjectDetail = {
  slug: 'comic-studio', num: '02',
  name: 'AI 漫剧制作系统', nameEn: 'AI Comic Production Workflow System',
  subtitle: '把剧本、镜头、角色图和生成结果放在一起，方便接着做下一幕。',
  tags: ['拆分镜头', '角色和场景', '生成视频', '版本记录'],
  meta: '2026.05 – 至今 · 个人项目',
  heroImage: '/media/cw-flow-03-900.webp', heroImageAlt: '',
  nextProject: { slug: 'xiaonuan', name: '小暖' },
  liveDemo: { url: 'https://studio.hanyue-room.design', labelZh: '线上访问产品', labelKo: '제품 방문하기', productLabelZh: '前往 Studio', productLabelKo: 'Studio 열기', inviteCodes: ['50F2858A', '3B492D37', '89795156', '20F0D359'], inviteNoteZh: '目前仅提供中文版本，使用邀请码注册', inviteNoteKo: '현재 중국어 버전만 제공, 초대 코드로 가입' },
  sections: [
    { id: 'problems', label: 'Problem Space', title: '下一镜头，人物别变样', body: '做漫剧时，单张图很快就能生成；换一个镜头，人物的脸和衣服却可能不一样。我做了角色库和场景库，让后面的镜头继续用同一套参考图。', items: [{ title: '流程被工具切碎', body: '剧本、分镜、角色设计、场景生成和视频制作散落在不同工具中，复制内容和来回导入不断制造信息丢失与版本混乱。' }, { title: '角色与画面难以保持一致', body: '模型每次生成都可能改变角色脸型、服装和场景风格。没有统一资产基准，就无法让观众相信连续镜头发生在同一个故事里。' }, { title: '生成成本无法复盘', body: '不同模型的参数、速度和计费方式各不相同。缺少调用记录时，很难知道哪次生成有效、哪个环节最浪费额度。' }] },
    { id: 'flow', label: 'Production Pipeline', title: '先拆剧本，再做镜头', body: '先把剧本分成镜头，给每个镜头选角色和场景，再生成画面与视频。哪个镜头需要重做，可以直接回到那一步。', cards: [{ num: '01', title: '拆解剧本', body: '输入完整剧本后，AI 提取场景、角色、对白、动作和情绪，生成可编辑的镜头清单。' }, { num: '02', title: '匹配资产', body: '镜头自动关联角色库和场景库；已有资产直接复用，新资产只生成一次。' }, { num: '03', title: '批量生成镜头', body: '按镜头选择适合的图像或视频模型，统一提交任务、查看状态并比较结果。' }, { num: '04', title: '确认并输出成片', body: '从候选关键帧中确认版本，再生成动态片段并进入最终成片检查。' }], image: '/media/studio1.PNG', imageAlt: '从剧本进入镜头生产的移动端工作流', image2: '/media/studio2.PNG', image2Alt: '角色和场景资产匹配界面', image3: '/media/studio3.PNG', image3Alt: '镜头批量生成与状态管理界面', image4: '/media/studio4.PNG', image4Alt: '生成结果确认与成片输出界面' },
    { id: 'assets', label: 'Asset System', title: '角色图和场景图只整理一次', body: '同一个角色会出现在很多镜头里。我把确认过的角色图和场景图存起来，后面可以反复引用。', items: [{ title: '角色库', body: '为角色保存标准形象、服装和参考图。角色只需确认一次，之后所有相关镜头都从同一资产调用；更新资产后，关联镜头也能重新生成。' }, { title: '场景库', body: '固定空间、时间和风格信息，镜头在匹配场景后自动取得对应背景参考，减少同一地点在不同镜头中反复变形。' }], image: '/media/cw-char-lib-640.webp', imageAlt: '可复用的角色资产库界面' },
    { id: 'studio', label: 'Studio UI', title: '一集的进度放在同一页', body: '每个镜头用过的素材、提示词和结果都放在项目里，不用靠文件名猜哪一版是最新的。', items: [{ title: '项目管理', body: '每个项目独立保存剧本、资产、镜头和生成进度；切换项目时不会混入其他故事的数据。' }, { title: '镜头工作流', body: '镜头按叙事顺序呈现，并显示待处理、生成中、已确认和需修改状态，让创作者直接定位下一步。' }, { title: '参数与批处理', body: '单个镜头可选择模型和参数，也可以把成熟设置批量应用到多个镜头，减少重复操作。' }], image: '/media/studio8.png', imageAlt: 'AI 漫剧工作室的项目与素材总览', image2: '/media/studio9.png', image2Alt: 'AI 漫剧工作室的镜头生产界面' },
    { id: 'canvas-workspace', label: 'Canvas Workspace', title: '在画布上接着做下一步', body: '角色图、参考图、文字和视频任务可以在画布上连接起来。点开一个结果，就能看它从哪些素材做出来。', image: '/media/comic-canvas-workspace.webp', imageAlt: 'AI 漫剧制作系统的节点式画布工作台' },
    { id: 'director-stage', label: 'Director Stage', title: '先摆好人和镜头', body: '导演台可以调整人物站位、镜头角度和灯光。构图确认后再生成，减少人物位置突然变化的问题。', image: '/media/comic-director-stage.webp', imageAlt: 'AI 漫剧制作系统的三维导演台与时间轴' },
    { id: 'panorama', label: 'Panorama', title: '同一场景，换个角度拍', body: '先做一张全景背景，再到导演台里选择机位。这样几个镜头可以继续使用同一个场景。', image: '/media/comic-panorama.webp', imageAlt: 'AI 漫剧制作系统的全景图生成面板' },
    { id: 'generation', label: 'Generation & API', title: '每次生成都留个记录', body: '工具保存使用的模型、提示词、参数和结果。要改画面时，能找到上一版是怎么做的。', items: [{ title: '多模型接入', body: '按任务选择不同模型，并在一个界面维护调用配置。镜头与模型解耦，后续替换供应商不需要重做整个项目。' }, { title: '完整生成历史', body: '每次尝试都保存 Prompt、参数和输出结果。创作者可以横向比较候选版本，保留有效方案并淘汰失败结果。' }, { title: '调用与成本记录', body: '按项目和模型汇总调用情况，识别高消耗步骤，把经验从“感觉哪个模型更好”变成可复用的生产判断。' }], image: '/media/studio6.PNG', imageAlt: '多模型生成设置界面', image2: '/media/studio5.PNG', image2Alt: '生成历史和候选结果比较界面', image3: '/media/studio7.PNG', image3Alt: 'API 配置与调用管理界面' },
    { id: 'keyframes', label: 'Keyframes & Final Output', title: '先挑画面，再生成视频', body: '先用静态画面确认人物和构图，再做动态镜头。页面下方放了两段实际生成的视频。', items: [{ title: '先确认关键帧', body: '为每个镜头生成多个候选版本，对构图、色调和角色状态进行评审；确认后锁定视觉基准，避免直接生成视频造成高成本返工。' }, { title: '再生成动态片段', body: '系统调用 Seedance 等视频模型，根据镜头需要设置运动幅度、时长和分辨率，并保留输出版本用于比较。' }], video: 'https://pub-b4207c4837a7427cba5f6e5be59729c5.r2.dev/comic1.mp4', videoPoster: '/media/cw-keyframe-1-900.webp', videoLabel: 'FINAL OUTPUT 01', video2: 'https://pub-b4207c4837a7427cba5f6e5be59729c5.r2.dev/comic2.mp4', video2Poster: '/media/cw-keyframe-2-900.webp', video2Label: 'FINAL OUTPUT 02' },
    { id: 'lessons', label: 'Lessons Learned', title: '试过之后，我改了做法', items: [{ title: '一致性首先是资产问题', body: '只加长提示词，角色还是会变。我后来把确认过的角色和场景存成素材，再让每个镜头引用。' }, { title: '先预览，再支付高成本生成', body: '正式调用视频模型前，先以低分辨率和简化参数验证构图与动作。确认方向后再生成正式版本，单镜头 API 消耗约降低 40%。' }, { title: '镜头不同，选的模型也不同', body: '有的模型擅长画面，有的更适合动作。我按镜头需要选择。' }] },
    { id: 'summary', label: 'Project Summary', title: '让整集接得起来', body: '剧本、镜头和素材放在同一个项目里。改其中一个镜头时，可以接着用原来的角色图和场景图。', highlight: '下一步：完善多角色同框镜头、声音合成与自动配音，并继续优化长项目中的批量任务调度。', highlightLabel: 'NEXT STEPS' },
    { id: 'program-structure', label: 'Program Structure', title: '代码怎么分工', body: '接口、提示词、预设资料和前端页面分开存放。改模型或界面时，不必把整个项目重做。', cards: [{ num: 'app.py', title: 'Web 服务入口', body: '主应用、页面路由与 API 端点' }, { num: 'prompts/', title: '提示词模板', body: '剧本分析、分镜拆解与图像生成模板' }, { num: 'data/', title: '预设数据', body: '角色、场景与风格等结构化数据' }, { num: 'static/', title: '前端资源', body: 'HTML、CSS、JavaScript 与图片资源' }, { num: 'requirements.txt', title: 'Python 依赖', body: '运行与部署所需的 pip 包' }, { num: 'Procfile', title: '启动进程', body: 'Railway 服务启动命令' }, { num: 'railway.toml', title: '部署配置', body: 'Railway 环境与服务设置' }, { num: 'nixpacks.toml / runtime.txt', title: '构建与运行时', body: 'Nixpacks 构建规则与 Python 版本' }] },
    { id: 'technical-architecture', label: 'Technical Architecture', title: '用什么搭建', body: '后端用 Python，前端提供制作页面，项目部署在 Railway。不同任务可以选择不同模型。', cards: [{ num: 'Language', title: '开发语言', body: 'Python' }, { num: 'Framework', title: '框架', body: 'Flask / FastAPI · 基于 app.py 的 Web 服务' }, { num: 'Frontend', title: '前端', body: 'HTML · CSS · JavaScript · static/ 目录' }, { num: 'Deployment', title: '部署环境', body: 'Railway · railway.toml · Procfile · nixpacks.toml' }, { num: 'AI Models', title: 'AI 模型接入', body: '豆包（Doubao）· GLM 4.6 · Claude 4.6 · GPT Image 2 · Seedance' }, { num: 'Packages', title: '包管理', body: 'pip · requirements.txt' }] },
  ],
};

/* ================================================================
   01 — AI INFINITE CANVAS (placeholder — real content TBD)
   ================================================================ */

const infiniteCanvasZh: ProjectDetail = {
  slug: 'ai-infinite-canvas', num: '01',
  name: 'AI 无限画布', nameEn: 'AI Infinite Canvas Workflow Platform',
  subtitle: '把素材、文案和尺寸放在一张画布上，批量做图并比较结果。',
  tags: ['批量做图', '商品图', '画布设计', '中韩英版本'],
  meta: '2026 · 个人项目 · 已上线，持续更新',
  heroImage: '/media/xn-home-hero-760.webp', heroImageAlt: '',
  nextProject: { slug: 'comic-studio', name: 'AI 漫剧制作系统' },
  liveDemo: { url: 'https://image.hanyue-room.design/', labelZh: '体验交互演示', labelKo: '인터랙티브 데모', productLabelZh: '访问线上产品', productLabelKo: '라이브 제품 보기' },
  sections: [
    { id: 'overview', label: 'Overview', title: '一张画布，做出多版图片', body: '做商品图时，同一件商品常要换背景、尺寸和文案。我把这些选项放到画布上，选好后一次生成多版，再并排挑图。', image: '/media/ai-canvas-1200.webp', imageAlt: 'AI 无限画布 — 主界面全景', mediaMode: 'feature', imageCaption: '素材、文案、尺寸和结果都放在这张画布上。', items: [] },
    { id: 'challenge', label: 'Challenge', title: '反复复制和整理，太容易弄混', body: '以前每做一版都要复制提示词、改尺寸、重新找结果。商品一多，很容易对不上。我想让每张图都能找到它用过的素材和设置。', image: '/media/canvas4-1478.webp', imageAlt: 'AI 无限画布 — 完整画布架构', mediaMode: 'panorama', imageCaption: '从输入到结果，都能在画布上找到。', annotations: [{ label: '输入与配置', x: 18, y: 25 }, { label: '批量生成', x: 52, y: 55 }, { label: '结果对比', x: 82, y: 30 }], items: [] },
    { id: 'saas', label: 'SaaS Model', title: '让别人也能登录使用', body: '我加了注册、邀请码、使用额度和图片保存。用户可以登录网站、接入自己的模型 API，做完图也能找回记录。', items: [
      { title: '用邀请码管理注册', body: '注册时使用邀请码。我可以给不同邀请码设置不同的使用资格和额度。' },
      { title: '接入自己的模型 API', body: '用户可以填写自己的 API，选择模型，并自己承担生成费用。' },
      { title: '查看额度和生成记录', body: '平台额度和用户自己的 API 分开计算；每次生成的图片和设置都会保存。' },
      { title: '中 / 韩 / 英三语产品', body: '工作区、登录页、历史记录和设置都有中文、韩文、英文版本，语言选择会保存。' },
    ] },
    { id: 'system', label: 'System Design', title: '我在开源画布上做了什么', body: '拖拽和连线用了开源方案。我做了商品、参考图、文案、尺寸等节点，也做了批量提交和结果整理。', flowLabel: '一张图怎么做出来', flow: ['选素材和参考图', '选文案、尺寸和模型', '确认要做的版本', '一次生成多张', '挑选结果', '下载或下次再找'], items: [
      { title: '把常用选项做成节点', body: '商品图、参考图、文案、尺寸和模型各占一个节点。连线后就能看到哪些选项会一起生成。' },
      { title: '一次提交多个版本', body: '选好商品、参考图、文案和尺寸后，系统列出所有组合，确认后一次生成。' },
      { title: '把结果放在一起挑', body: '不同批次的图片会放在同一处。上传过的商品图和参考图也可以下次再用。' },
    ] },
    { id: 'scenes', label: 'Scene Selection', title: '打开模板就能开始', body: '我做了商品图、社媒图、角色图和海报模板。常用节点已经摆好，换上自己的素材就能修改。', image: '/media/canvas6-1508.webp', imageAlt: '角色设计场景', imageCaption: '角色图模板：换参考图和文案，做不同角度的人物图。', image2: '/media/canvas7-1480.webp', image2Alt: '电商与运营素材场景', image2Caption: '电商与运营场景：围绕商品展示、Banner、社媒广告和活动海报组织生成节点', mediaMode: 'tabs', tabLabelsZh: ['角色设计', '电商与运营'] },
    { id: 'decisions', label: 'Key Decisions', title: '几个关键选择', items: [
      { title: '基础画布用了开源方案', body: '拖拽、缩放和连线用了开源代码。我主要设计节点、批量生成和账号功能。' },
      { title: '用画布看清输入和结果', body: '每组素材、文案和尺寸都留在画布上。点开结果，就能回看它是怎么做出来的。' },
      { title: '可用平台额度，也可用自己的 API', body: '用户可以使用平台额度，也可以填自己的 API。两种方式分别计费。' },
      { title: '中韩英文都能使用', body: '中文、韩文和英文版本覆盖工作区、账号、历史、素材和模型设置，语言选择会被保存。' },
    ], image: '/media/canvas2-2426.webp', imageAlt: 'AI 无限画布 — 画布全景视图', mediaMode: 'panorama', imageCaption: '不同商品和版本，可以摆在画布的不同位置。' },
    { id: 'deliverables', label: 'Deliverables', title: '现在能做什么', items: [
      { title: '注册、邀请和记录都已做好', body: '用户可以注册、输入邀请码、查看额度和找回生成记录；管理员可以管理账号。' },
      { title: '可选择模型和 API', body: '支持平台模型和用户自己的 API，可用文字或参考图生成图片，并查看报错信息。' },
      { title: '上传素材、比较结果', body: '可以上传多张素材图；生成的图片能并排比较、下载，也会留在历史记录里。' },
      { title: '网站已部署到 Cloudflare', body: '网站运行在 Cloudflare 上，账号数据和图片分别保存在 D1、R2。' },
    ] },
    { id: 'validation', label: 'Launch & Validation', title: '网站已上线', body: '用户可以注册、建画布、接入模型 API 并生成图片。这个项目也完成了韩国著作权登记，登记号列在下面。', items: [
      { title: '线上可以使用', body: '在 image.hanyue-room.design 注册并输入邀请码后，就能建画布、接入 API 做图。' },
      { title: '韩国著作权登记完成', body: '韩国著作权委员会（한국저작권위원회）登记号：제C-2026-037309호；登记名称：AI 무한 캔버스 워크플로우 플랫폼（AI Infinite Canvas Workflow Platform）。' },
      { title: '从设计到上线由我完成', body: '我负责界面、节点、前后端、中韩英三语和上线。' },
    ] },
    { id: 'reflection', label: 'Roadmap', title: '下一步：在画布里修图', body: '目前主要解决批量出图。以后想加入扩图、局部修改和视频功能，减少在不同软件之间搬文件。', highlight: '下一步想做扩图、局部修改和视频功能，也会继续完善中、韩、英三个版本。', highlightLabel: 'PRODUCT ROADMAP' },
  ],
};

/* ================================================================
   04 — MILK & RIBBON 品牌视觉系统
   ================================================================ */

const milkRibbonZh: ProjectDetail = {
  slug: 'milk-ribbon', num: '04',
  name: 'Milk & Ribbon', nameEn: 'Brand Identity & Applications',
  subtitle: '一项品牌设计课程项目：用丝带和芭蕾元素做标志、包装与画册。',
  tags: ['标志', '包装', '画册', '社媒物料'],
  meta: '2025.09 · 品牌设计课程项目',
  heroImage: '/media/mr-hero-560.webp', heroImageAlt: '',
  nextProject: { slug: 'commercial-video', name: '商业视频与动态广告' },
  sections: [
    { id: 'market', label: 'Market Insight', title: '从丝带和芭蕾开始', body: 'Milk & Ribbon 是一项品牌设计课程项目。我选了丝带、芭蕾和粉色作线索，做出标志、包装和画册。', items: [
      // Content from root index.html P31
    ] },
    { id: 'positioning', label: 'Brand Core', title: '想做给谁看', body: '', items: [{ title: '品牌核心：「柔软，自有秩序」', body: 'Softness with Structure：用柔软的形状与有秩序的版式建立品牌基调。' }, { title: '目标人群', body: '课程项目设定的受众是偏爱丝带、芭蕾与柔和配色的年轻消费者。' }, { title: '价值主张', body: '视觉表达以柔和、轻盈为主，同时用清晰的版式保持信息可读。' }], image: '/media/mr-strategy.png', imageAlt: '品牌定位策略图' },
    { id: 'visual-system', label: 'Visual System', title: '颜色和图形怎么选', body: '我用了柔粉、奶油白、玫瑰红和粉蓝。丝带、天鹅和手写线条也反复出现在包装和画册里。', image: '/media/mr-research.png', imageAlt: '市场调研视觉板', image2: '/media/mr-colors.png', image2Alt: '色彩系统', image3: '/media/mr-logo.png', image3Alt: 'Logo 系统' },
    { id: 'lookbook', label: 'Lookbook & Catalog', title: '画册怎么排', body: '我用图片大小、留白和文字疏密控制翻页节奏，让每一页看起来像同一个品牌。', image: '/media/mr-catalog.png', imageAlt: '品牌画册', image2: '/media/mr-37.2.png', image2Alt: '触点延展', image3: '/media/mr-all-materials.png', image3Alt: '物料全家福' },
    { id: 'packaging', label: 'Packaging Extension', title: '把图形放到包装上', body: '包装和标签沿用同一组颜色、字体和丝带图形。我也检查了缩小到实际尺寸后还能不能看清。', image: '/media/mr-36.1.png', imageAlt: '包装应用', image2: '/media/mr-36.2.png', image2Alt: '图形延展', image3: '/media/mr-goods.png', image3Alt: '产品展示' },
    { id: 'materials', label: 'Materials', title: '再试几种使用场景', body: '名片、信封、手提袋和社媒模板放在一起展示，看看这套设计换了尺寸和材质还能不能成立。', image: '/media/mr-35.1.png', imageAlt: '视觉应用示例' },
    { id: 'reflection', label: 'Reflection', title: '做完之后', body: '这次练习让我把同一组元素用在不同物料上。包装、画册和社媒页面不必长得一样，但要让人认出它们来自同一个品牌。' },
  ],
};

/* ================================================================
   05 — COMMERCIAL VIDEO & MOTION
   ================================================================ */

const commercialVideoZh: ProjectDetail = {
  slug: 'commercial-video', num: '05',
  name: '商业视频与动态广告', nameEn: 'Commercial Video & Motion Ads',
  subtitle: '为不同发布位置剪视频：横版讲清产品，竖版更快进入主题。',
  tags: ['品牌短片', '电商视频', '社媒视频', '动效'],
  meta: '商业项目 · 剪辑 / 动效 / 视觉节奏 / 投放素材',
  heroImage: '/media/mr-hero-900.webp', heroImageAlt: '',
  nextProject: { slug: 'ai-infinite-canvas', name: 'AI 无限画布' },
  sections: [
    { id: 'overview', label: 'Overview', title: '按发布位置剪视频', body: '这组作品包括品牌短片、电商主图视频和社媒广告。我会按发布位置做横版或竖版，再调整字幕和产品镜头。', items: [{ title: '工作方法', body: '先定视频给谁看、发在哪里，再调整镜头、字幕和转场。横版和竖版分别剪。' }] },
    { id: 'landscape', label: 'Landscape · 16:9', title: '横版：把产品讲清楚', body: '官网和电商页面有更多横向空间。我会留出时间展示产品，再安排文字和转场。', video: '/media/brand-ad-1.mp4', video2: '/media/brand-ad-2.mp4', items: [{ title: '品牌形象短片', body: '面向官网与展示场景，强调品牌调性与视觉氛围。节奏较慢，注重画面质感和色彩统一。' }, { title: '电商营销短片', body: '面向主图与投放素材场景，强调产品卖点与转化信息。前 3 秒快速进入主题，字幕清晰可读。' }] },
    { id: 'portrait', label: 'Portrait · 9:16', title: '竖版：尽快进入主题', body: '手机上刷到视频时，开头要更快进入重点；字幕也要够大，才能在竖屏上看清。', video: '/media/brand-ad-3.mp4', video2: '/media/brand-ad-4.mp4', items: [{ title: '社媒种草短片', body: '面向移动端投放，以真实体验和产品展示为核心。节奏快速，3 秒内建立视觉锚点。' }, { title: 'MG 动态说明', body: '信息可视化类动画，用于产品功能说明、数据展示和品牌故事。以清晰的视觉层级引导信息获取。' }] },
    { id: 'reflection', label: 'Reflection', title: '同一条视频，换个平台就要再剪', body: '横版和竖版的画面比例、观看方式不同。我保留了不同版本，展示镜头、字幕和节奏是怎么调整的。' },
  ],
};

/* ================================================================
   KOREAN TRANSLATIONS
   ================================================================ */

const xiaonuanKo: ProjectDetail = {
  slug: 'xiaonuan', num: '03',
  name: '샤오누안', nameEn: 'AI Life Companion with Long-Term Memory',
  subtitle: '오늘 있었던 일을 말하면 지출, 일기, 일정을 정리해 주는 앱입니다.',
  tags: ['생활 기록', '앱 디자인', '원화 가계부', '사용자 테스트'],
  meta: '2026.01 – 현재 · 독립 제품 · 중국어 베타 / 다국어 버전 개선 중',
  heroImage: '/media/xn-home-hero-760.webp', heroImageAlt: '',
  nextProject: { slug: 'milk-ribbon', name: 'Milk & Ribbon 브랜드 디자인' },
  mediaPresentation: 'phone',
  sections: [
    { id: 'overview', label: 'Product Vision', title: '대화하면서 생활 기록 남기기', body: '“오늘 택시비로 18,000원을 썼어”라고 말하면 가계부에 기록합니다. 내일 약속을 이야기하면 일정 초안도 만듭니다. 저장 전에는 직접 확인하고 수정할 수 있습니다.', video: '/media/ui-xiaonuan.mp4', videoPoster: '/media/xn-home-hero-760.webp', items: [{ label: '그냥 말하거나 물어보기', body: '지출, 약속, 주변 가게를 말하거나 물을 때 기능 화면부터 찾지 않아도 됩니다.' }, { label: '대화 후 기록 초안 만들기', body: '대화에서 금액, 시간, 있었던 일을 찾아 가계부·일정·일기 초안을 만듭니다.' }, { label: '전에 말한 내용 기억하기', body: '다음에 같은 이야기가 나오면 앞서 말한 내용을 참고합니다.' }] },
    { id: 'difference', label: 'Product Difference', title: '입력 화면을 덜 찾아도 됩니다', body: '지출, 일기, 일정은 보통 다른 화면에서 따로 적어야 합니다. 샤오누안은 대화에서 기록할 내용을 찾고 저장 전에 확인받습니다.', cards: [{ num: '01', title: '대화로 시작하기', body: '메모, 달력, 가계부 중 어디에 적을지 먼저 고르지 않아도 됩니다.' }, { num: '02', title: '알맞은 곳에 정리하기', body: '지출은 가계부에, 약속은 달력에, 남기고 싶은 일은 일기에 정리합니다.' }, { num: '03', title: '음성과 사진도 사용', body: '말로 입력하거나 사진을 보낼 수 있습니다. 영수증 사진에서는 지출 내역을 먼저 찾습니다.' }, { num: '04', title: '전에 말한 습관 기억하기', body: '앞서 말한 습관과 선호를 다음 대화에서 참고합니다.' }], flowLabel: '한 번의 대화가 생활 기록이 되는 과정', flow: ['텍스트·음성·이미지 입력', '의도·금액·시간·감정 이해', '개인 기억과 함께 답변', '가계부·일정·일기에 능동 기록'] },
    { id: 'multimodal', label: 'Multimodal Interaction', title: '글, 음성, 사진으로 입력', body: '타이핑하기 어려우면 음성으로 말하거나 영수증을 찍을 수 있습니다. 인식한 내용은 먼저 초안으로 보여 줍니다.', items: [{ label: '음성으로 바로 말하기', body: '이동 중에도 오늘 쓴 돈, 해야 할 일, 기분을 말하면 대화 내용에서 핵심 정보를 추출합니다.' }, { label: '이미지로 생활 질문하기', body: '상품, 안내문, 장소 등 텍스트로 설명하기 어려운 내용을 사진으로 보내고 맥락에 맞는 답을 받을 수 있습니다.' }, { label: '영수증 자동 기록', body: '영수증 사진을 보내면 가게, 금액, 통화와 시간을 읽어 지출 내역으로 정리해 반복 입력을 줄입니다.' }], image: '/media/xn-multimodal-voice.webp', imageAlt: '샤오누안이 음성으로 한국어 대화와 생활 일정을 이해하는 화면', image2: '/media/xn-multimodal-context.webp', image2Alt: '연속 음성 대화에서 맥락을 유지하는 화면', image3: '/media/xn-multimodal-image.webp', image3Alt: '생활 이미지와 영수증을 인식해 자동 기록하는 화면' },
    { id: 'currency', label: 'Cross-border Wallet', title: '원화로 쓰고 위안화로도 확인', body: '한국에서 원화로 결제하고 위안화로 예산을 볼 때 직접 계산할 필요가 없습니다. 원래 금액과 환산 금액을 함께 기록합니다.', items: [{ label: '국가와 기준 통화 설정', body: '현재 생활하는 국가와 익숙한 기준 통화를 설정해 개인 상황에 맞는 환산 기준을 만듭니다.', image: '/media/xn-currency-profile.webp', imageAlt: '샤오누안 프로필의 국가와 지역 설정 화면' }, { label: '대화 중 자동 환산', body: '외화 금액을 인식해 거래 당시 통화와 기준 통화 환산액을 함께 보존합니다.', image: '/media/xn-currency-chat.webp', imageAlt: '대화에서 원화를 위안화로 자동 환산하는 화면' }, { label: '한국 유학생·여행자 시나리오', body: '원화로 결제하면서 중국 위안화 기준으로 예산을 관리해야 하는 사용자에게 특히 유용합니다.', image: '/media/xn-currency-ledger.webp', imageAlt: '원화와 위안화 환산 금액을 함께 보여 주는 가계부' }] },
    { id: 'life-search', label: 'Life Information', title: '동네 생활 정보도 물어보기', body: '주변 생활 서비스를 물으면 위치와 가격 등의 정보를 모아 보여 줍니다. 시간을 정하면 일정에도 넣을 수 있습니다.', items: [{ label: '주변 선택지 탐색', body: '거리, 평판, 서비스 종류 등 실제 결정에 필요한 기준으로 주변 기관을 정리합니다.', image: '/media/xn-life-service-search.webp', imageAlt: '샤오누안이 주변 생활 서비스를 탐색하고 예약 정보를 안내하는 화면' }, { label: '가격과 예약 정보', body: '확인 가능한 공개 정보를 바탕으로 가격 범위와 가능한 시간을 비교해 다음 행동을 쉽게 만듭니다.', image: '/media/xn-life-schedule-suggestion.webp', imageAlt: '생활 조언을 실행 가능한 다음 단계로 정리한 화면' }, { label: '정보와 의료 판단의 경계', body: '생활 정보의 수집과 비교를 돕되, 의료적 진단이나 치료 결정을 대신하지 않도록 역할을 명확히 제한합니다.', image: '/media/xn-life-safety-boundary.webp', imageAlt: '생활 조언과 진료 판단의 경계를 안내하는 화면' }] },
    { id: 'memory', label: 'Long-term Memory', title: '다음 대화에서 다시 설명하지 않도록', body: '앞서 말한 생활 습관과 아직 끝나지 않은 일을 기억합니다. 같은 이야기가 나오면 이전 내용을 참고해 답합니다.', items: [{ label: '생활 습관을 이해', body: '자주 쓰는 통화, 생활 리듬, 선호하는 표현 방식처럼 반복되는 패턴을 기억합니다.', image: '/media/xn-home-760.webp', imageAlt: '개인 생활 맥락을 보여 주는 샤오누안 홈 화면' }, { label: '끝나지 않은 일을 이어가기', body: '예전에 말한 약속이나 고민을 이후 대화에서 자연스럽게 이어, 매번 배경을 다시 설명하지 않게 합니다.', image: '/media/xn-memory-unfinished.webp', imageAlt: '아직 끝나지 않은 일정과 일을 다시 찾는 화면' }, { label: '안정적인 정서적 관계', body: '과도하게 친밀한 척하지 않으면서도 사용자가 존중받고 기억되고 있다는 감각을 제공합니다.', image: '/media/xn-memory-companion.webp', imageAlt: '사용자의 생활 상태를 지속적으로 이해하고 응답하는 화면' }] },
    { id: 'auto-organize', label: 'Proactive Organization', title: '대화 뒤에 기록을 확인하기', body: '대화에서 지출, 사건, 약속을 찾아 초안을 만듭니다. 사용자가 확인하면 가계부, 일기, 달력에 저장합니다.', cards: [{ num: 'Diary', title: '일기', body: '하루의 사건과 감정 흐름을 정리해 다시 읽을 수 있는 기록으로 만듭니다.' }, { num: 'Schedule', title: '일정', body: '자연어 속 날짜, 시간과 할 일을 추출해 예정된 행동으로 연결합니다.' }, { num: 'Wallet', title: '수입·지출', body: '금액, 통화, 카테고리를 구조화하고 환산 금액까지 함께 보존합니다.' }], image: '/media/xn-auto-chat.webp', imageAlt: '대화에서 일기와 일정 정보를 인식하는 화면', image2: '/media/xn-auto-diary.webp', image2Alt: '대화를 바탕으로 자동 생성된 생활 일기 화면', image3: '/media/xn-auto-schedule.webp', image3Alt: '대화를 바탕으로 능동적으로 정리된 일정 계획 화면' },
    { id: 'architecture', label: 'Information Architecture', title: '대화에서 다른 기능으로', body: '대화를 시작점으로 삼았습니다. 가계부, 일기, 달력에 기록을 저장하고 홈에서 다시 찾아볼 수 있습니다.', cards: [{ num: 'Core Entry', title: '홈', body: '오늘의 상태, 기능 입구와 동반자 피드백을 한곳에 집약' }, { num: 'Chat', title: '채팅 대화', body: '자연어 입력 · 의도 자동 인식 · 정서적 동행' }, { num: 'Schedule', title: '일정 계획', body: '대화에서 할 일 추출 · 스마트 알림' }, { num: 'Diary', title: '일기 기록', body: '자동 축적 · 감정 요약 · 다시 보기' }, { num: 'Wallet', title: '가계부 관리', body: '자동 기록 · 분류 저장 · 소비 인사이트' }, { num: 'Profile', title: '내 설정', body: '개인 정보 · 선호 설정 · 데이터 관리' }], flowLabel: '페이지 계층', flow: ['상세 페이지', '요약 페이지', '편집 페이지'] },
    { id: 'technical-architecture', label: 'Technical Architecture', title: '어떻게 만들었나', body: '모바일 앱은 React Native와 Expo로, 서버는 Cloudflare Workers로 만들었습니다. 새 버전을 빠르게 고치고 테스트할 수 있습니다.', cards: [{ num: 'Frontend', title: '프런트엔드', body: 'React Native (Expo) · 실시간 새로고침 · 크로스플랫폼' }, { num: 'Backend', title: '백엔드', body: 'Cloudflare Workers · 엣지 배포 · 낮은 지연' }, { num: 'AI Models', title: 'AI 모델', body: 'DeepSeek Chat（대화 코어）· Qwen（이미지 인식, 예정）· 음성 인식（예정）' }, { num: 'Development', title: '개발 도구', body: 'Claude Code · AI 보조 개발' }] },
    { id: 'iteration', label: 'Testing & Iteration', title: '써 보고 고친 점', body: '제가 먼저 매일 써 보고 가족과 소규모 사용자에게도 테스트를 부탁했습니다. 첫 문장을 어려워하거나 지출 분류가 틀리는 문제를 보고 안내와 확인 방식을 바꿨습니다.', items: [{ label: '1차 · 자가 테스트（30일）', body: '유일한 사용자로서 매일 가계부, 일기와 일정을 기록하며 어떤 단계에서 “계속 쓰고 싶지 않다”는 저항이 생기는지 관찰했습니다.' }, { label: '2차 · 가족 테스트', body: '50–75세 가족 구성원을 실제 사용자로 초대해 AI 원리를 몰라도 한마디로 기록을 완료할 수 있는지 검증했습니다.' }, { label: '3차 · Beta 외부 피드백', body: '소규모 사용자 그룹에 Beta를 배포해 독거·싱글 사용자의 일상 피드백을 수집하고, 어느 순간 사용을 중단하는지 집중 관찰했습니다.' }], cards: [{ num: 'Iteration 01', title: '가계부 분류 오류', body: '문제: 밀크티가 쇼핑으로, 택시가 교통으로 기록되지만 월 충전과 섞였습니다. 결정: 3단계 분류 키워드 매핑을 추가하고 모호한 항목은 확인 후 저장합니다. 결과: 잘못된 분류와 수동 수정을 줄였습니다.' }, { num: 'Iteration 02', title: '대화 속 숨은 할 일 누락', body: '문제: 한 문장에 명시적 작업과 인과관계 속 숨은 작업이 함께 있을 때 앞의 작업만 추출됐습니다. 결정: 인과관계 분석을 추가해 독립 할 일로 분리하고 확인받습니다. 결과: 알림 누락과 중복 입력을 줄였습니다.' }, { num: 'Iteration 03', title: '첫 사용 인지 장벽', body: '문제: 새 사용자는 기능을 알아도 첫 문장을 어떻게 시작할지 몰랐습니다. 결정: 첫 진입 시 클릭 가능한 생활형 예시 세 개를 제공합니다. 결과: 빈 화면에서 멈추지 않고 예시로 바로 대화를 시작하게 했습니다.' }] },
    { id: 'international', label: 'Localization', title: '우선 중국어 버전부터', body: '중국어 버전을 테스트하고 있습니다. 영어, 한국어, 일본어 화면도 다듬는 중이며 통화, 날짜와 지역 정보도 함께 맞춰야 합니다.', items: [{ label: '중국어', body: '현재 핵심 경험을 검증하고 기능 흐름을 다듬는 주요 버전입니다.' }, { label: '영어', body: '여행과 국제 사용 환경에서 자연스러운 생활 대화와 기록 표현을 개선하고 있습니다.' }, { label: '한국어', body: '한국 생활, 원화 지출과 지역 정보 검색에 맞는 표현과 시나리오를 보완하고 있습니다.' }, { label: '일본어', body: '일본어의 말투와 날짜·통화 표현에 맞춰 대화 품질과 생활 기록 방식을 개선하고 있습니다.' }] },
    { id: 'summary', label: 'Project Summary', title: '계속 고치고 있는 샤오누안', body: '생활 기록에 드는 손을 줄이고 싶었습니다. 지금은 인식 오류를 줄이고 사용자가 기록을 쉽게 확인·수정하도록 다듬고 있습니다.', highlight: '다음에는 음성과 영수증 인식을 더 정확하게 만들고 영어·한국어·일본어 버전을 다듬겠습니다.', highlightLabel: 'PRODUCT ROADMAP' },
  ],
};
/* ================================================================
   03.5 — KOREAHOSPITAL 运营工作台
   ================================================================ */

const koreahospitalZh: ProjectDetail = {
  slug: 'koreahospital', num: '03',
  name: '运营工作台', nameEn: 'Social Media Operations Workbench',
  subtitle: '不同公司可以各建一个项目，管理账号、内容和发布记录。目前用于医院运营。',
  tags: ['多公司项目', '小红书 / 抖音', '内容审核', '发布记录'],
  meta: '2026.04 – 至今 · 自研项目 · 已在医院运营中使用',
  heroImage: '/media/koreahospital/01-operations-dashboard.png', heroImageAlt: 'Koreahospital 运营工作台首页',
  nextProject: { slug: 'milk-ribbon', name: 'Milk & Ribbon 品牌设计' },
  sections: [
    { id: 'overview', label: 'Overview', title: '把账号和内容放到一起', body: '我做了一个给公司管理社媒内容的工作台。每家公司可以建自己的项目，把账号、选题、草稿、审核和发布记录放在一起。现在它用于医院运营。', items: [{ label: '分工做初稿', body: '研究员、策略师、写手、风险审核、复盘员等角色各自独立工作，运营人员通过输入框与队长对话驱动整个流程。' }, { label: '人工决定发布', body: 'AI 初审跑完风险、证据、格式扫描之后，仍由人做最终审核。涉及品牌、医疗、金融等敏感场景时，自动化不能取代人。' }, { label: '记录每次修改', body: '每个选题、每篇内容、每次发布、每个数据快照都保存到项目数据库，事后复盘可逐条回看。' }] },
    { id: 'background', label: 'Why This Project', title: '为什么要做', body: '以前选题在表格、草稿在文档、数据在平台后台。回头找一条内容时，得来回翻。我把它们按项目归到一起。', cards: [{ num: '01', title: '项目与账号越来越多', body: '品牌、机构或个人团队都可能同时运营多个项目和账号，每个账号定位、平台和人设不同。' }, { num: '02', title: '审核边界需要被看见', body: '效果对比、承诺性表述、未授权素材等风险分散在内容流程里，人工审核容易遗漏，全自动审核又可能误杀。' }, { num: '03', title: '数据没有回到下一轮', body: '内容发布之后，如果没有统一的数据快照，团队很难知道哪条内容为什么有效，复盘只能停留在感觉。' }, { num: '04', title: '文件在工具之间搬来搬去', body: '写稿、做图、剪视频分散在不同工具里，文件常要反复上传和下载。' }] },
    { id: 'workflow', label: 'Operations Workflow', title: '一条内容怎么完成', body: '先选题、做草稿，再由人审核和发布。发布后填入数据，看看下一次该改什么。', cards: [{ num: '01', title: '先定方向', body: '公司·人群·账号定位 / 平台分工·当前项目的审核要求。产出：项目简报' }, { num: '02', title: '找值得做的题', body: '平台信号·竞品·用户问题 / AI 提建议，人工确认再入池。产出：已确认选题' }, { num: '03', title: '做一篇内容', body: '先写母版简报 / 再做平台版本 / 小红书图文·抖音脚本分镜。产出：内容与素材' }, { num: '04', title: '两道审核', body: 'AI 初审：风险·证据·格式 / 人工终审：准确性·表达·授权。产出：审核通过' }, { num: '05', title: '人工发布', body: '系统生成发布包 / 运营人员复制到平台并手动发布。产出：发布快照' }, { num: '06', title: '回填真实数据', body: '24h·7d·30d 三个窗口 / 手动填写或粘贴 CSV / 表格。产出：数据快照' }, { num: '07', title: '复盘并改进', body: 'AI 归因，人工确认 / 更新选题·结构·CTA·节奏。产出：下一轮经验' }], highlight: '草稿、审核意见和发布数据都跟着这条内容保存。', highlightLabel: '核心设计', image: '/media/koreahospital/02-content-production.png', imageAlt: '内容生产与每日热点', image2: '/media/koreahospital/03-topic-pool.png', image2Alt: '选题池与 AI 选题建议', image3: '/media/koreahospital/04-content-management.png', image3Alt: '按平台管理待发布内容', mediaMode: 'tabs', tabLabelsZh: ['每日热点', '选题池', '内容管理'], imageCaption: '每日热点把平台趋势、热度和来源集中在同一视图，帮助团队从信号开始规划内容。', image2Caption: '选题池保留热度、状态和素材入口，AI 建议与人工确认在同一条流程里完成。', image3Caption: '内容管理按平台与发布状态组织草稿、待发布和已发布内容，减少跨工具搬运。' },
    { id: 'architecture', label: 'System Architecture', title: '每个项目有自己的规则', body: '项目里保存账号定位和审核要求；内容卡片显示负责人、进度和下一步。医院项目有自己的医疗审核规则，其他公司可以设置不同要求。', image: '/media/koreahospital/08-settings.png', imageAlt: '系统设置中的运营人员与模型技能', imageCaption: '在设置页可以查看运营人员、素材权限和平台规则。', mediaMode: 'feature' },
    { id: 'dashboard', label: 'Operations Dashboard', title: '打开就知道先做哪件事', body: '首页放着待办、账号和内容进度。运营人员可以直接打开待写、待审或待发布的内容。', cards: [{ num: 'Agent', title: '六个角色，各有任务', body: '从任务入口提出需求，再交给研究、写作、设计等角色分别处理。' }, { num: 'KPI', title: '4 张数据卡', body: '待处理、待审核、账号与可用素材集中显示，方便运营人员先决定处理顺序。' }, { num: 'Pipeline', title: '5 步流程', body: '选题 → 规划 → 制作 → 发布 → 复盘，颜色与数据卡一致，扫一眼知道现在卡在哪一步。' }, { num: 'Kanban', title: 'Kanban 内容板', body: '待制作 / 待发布 / 待复盘 三栏拖动，每张内容卡显示来源选题、当前阶段、负责人和下一步。' }], image: '/media/koreahospital/01-operations-dashboard.png', imageAlt: '运营工作台首页总览', image2: '/media/koreahospital/09-toni-assistant.png', image2Alt: 'Toni Agent 助手对话面板', mediaMode: 'tabs', tabLabelsZh: ['工作台总览', 'Toni 助手'], imageCaption: '首页用输入框、状态卡、流程和 Kanban 把今天的运营任务压缩成一张可执行的地图。', image2Caption: 'Toni 助手作为统一入口，把“看管线、标发布、刷新”等自然语言请求转成下一步动作。' },
    { id: 'execution-plan', label: 'Multi-Agent Collaboration', title: '六个角色分别做什么', body: '研究员找资料，策略师定方向，编辑写草稿，设计师做配图，发布助手整理素材，分析员看数据。每一步都由运营人员检查。', cards: [{ num: '01', title: '研究员 · researcher', body: '调用热点研究技能，按关键词拉取平台信号、竞品资料和用户问题，输出带来源的研究包。' }, { num: '02', title: '策略师 · strategist', body: '基于研究包与历史复盘确定账号定位、内容支柱、选题优先级和母版简报。' }, { num: '03', title: '总编 · writer', body: '结合母版简报、平台规则和账号语气，生成小红书文案或抖音脚本、标题与 CTA。' }, { num: '04', title: '设计师 · designer', body: '根据内容版本、素材授权和平台规格，产出封面方案、配图计划、分镜与素材清单。' }, { num: '05', title: '发布助手 · publisher', body: '把文案、图片、视频、标签和发布时间整理成平台发布包，交给运营人员确认后发布。' }, { num: '06', title: '数据分析师 · analyst', body: '汇总互动率、分享率、涨粉转化率等表现，形成复盘摘要并反馈给研究与策略。' }], image: '/media/koreahospital/06-execution-plan.png', imageAlt: '多 Agent 执行计划与研究结果', image2: '/media/koreahospital/05-asset-detail.png', image2Alt: '素材中心的授权与分类详情', mediaMode: 'tabs', tabLabelsZh: ['执行计划', '素材详情'], imageCaption: '执行计划展开六个 Agent 的协作证据，保留来源、数据和可回滚的结果。', image2Caption: '素材详情记录授权、分类、使用次数与下载权限，让素材在发布前可验证。' },
    { id: 'post-analysis', label: 'Data Center', title: '发布后看哪些数据', body: '按平台和账号查看浏览、互动、分享和涨粉情况。看完数据，再决定下一批内容怎么改。', cards: [{ num: '01', title: '互动表现', body: '互动率、分享率、评论和收藏集中展示，快速识别真正引发回应的内容。' }, { num: '02', title: '平台对照', body: '小红书阅读与抖音播放分开统计，账号与平台表现一眼可比。' }, { num: '03', title: '复盘依据', body: '每次发布都留下数据快照，让选题、结构和 CTA 的调整有据可循。' }], image: '/media/koreahospital/07-post-analysis.png', imageAlt: '帖子分析与数据中心', imageCaption: '数据中心把互动、分享、涨粉与有效浏览等关键指标集中呈现，团队无需翻表就能看懂内容表现。', mediaMode: 'feature' },
    { id: 'summary', label: 'Project Summary', title: '目前在医院使用，也能添加其他公司', body: '医院是现在的使用案例。要服务另一家公司，可以新建项目，单独设置账号和审核要求；内容与数据也会分开保存。', highlight: '每家公司一个项目；每条内容都能找到草稿、审核和发布记录。', highlightLabel: 'PRODUCT ROADMAP' },
  ],
};

const koreahospitalKo: ProjectDetail = {
  slug: 'koreahospital', num: '03',
  name: '운영 워크벤치', nameEn: 'Social Media Operations Workbench',
  subtitle: '회사마다 프로젝트를 만들어 계정, 콘텐츠, 발행 기록을 관리합니다. 현재 병원에서 사용 중입니다.',
  tags: ['회사별 프로젝트', '샤오홍슈 / 더우인', '콘텐츠 검수', '발행 기록'],
  meta: '2026.04 – 현재 · 개인 프로젝트 · 병원 운영에 사용 중',
  heroImage: '/media/koreahospital/01-operations-dashboard.png', heroImageAlt: 'Koreahospital 운영 워크벤치 홈',
  nextProject: { slug: 'milk-ribbon', name: 'Milk & Ribbon 브랜드 디자인' },
  sections: [
    { id: 'overview', label: 'Overview', title: '계정과 콘텐츠를 한곳에', body: '회사별로 SNS를 관리하는 도구를 만들었습니다. 회사마다 프로젝트를 만들고 계정, 소재, 초안, 검수, 발행 기록을 모을 수 있습니다. 지금은 병원에서 쓰고 있습니다.', items: [{ label: '초안 작업 분담', body: '연구원·전략가·작가·리스크 검수·회고 담당 등 역할이 각자 독립적으로 작업하며, 운영자는 입력창으로 팀장과 대화하며 전체 흐름을 이끈다.' }, { label: '발행 전 운영자 확인', body: 'AI 1차 심사가 리스크·증거·포맷을 스캔한 뒤에도 최종 판단은 사람 몫이다. 브랜드·의료·금융 등 민감한 장면에서 자동화는 사람을 대체할 수 없다.' }, { label: '수정 내역 남기기', body: '모든 소재·콘텐츠·발행·데이터 스냅샷이 프로젝트 데이터베이스에 저장되어 사후 회고 시 한 줄씩 다시 볼 수 있다.' }] },
    { id: 'background', label: 'Why This Project', title: '왜 만들었나', body: '소재는 표에, 초안은 문서에, 결과는 플랫폼 관리자 화면에 흩어져 있었습니다. 지난 콘텐츠 하나를 찾으려면 여러 곳을 뒤져야 했습니다. 프로젝트별로 모아 보기로 했습니다.', cards: [{ num: '01', title: '프로젝트와 계정의 증가', body: '브랜드·기관·개인 팀 모두 여러 프로젝트와 계정을 운영할 수 있고, 계정마다 포지셔닝·플랫폼·페르소나가 다르다.' }, { num: '02', title: '검수 경계를 보여줘야 함', body: '효과 비교, 약속성 표현, 사용 허가를 받지 않은 소재 같은 위험이 콘텐츠 흐름에 흩어져 수동 검수는 놓치고 완전 자동화는 오살한다.' }, { num: '03', title: '데이터가 다음 라운드로 돌아오지 않음', body: '발행 후 데이터 스냅샷이 없으면 어떤 콘텐츠가 왜 효과적이었는지 알 수 없어 회고가 감에 머문다.' }, { num: '04', title: '도구 사이에서 파일 옮기기', body: '글, 이미지, 영상 작업이 다른 도구에 흩어져 파일을 여러 번 올리고 내려받아야 했습니다.' }] },
    { id: 'workflow', label: 'Operations Workflow', title: '콘텐츠 한 건을 만드는 순서', body: '소재를 고르고 초안을 만든 뒤 사람이 검수하고 발행합니다. 발행 후 수치를 입력해 다음 콘텐츠에서 바꿀 점을 찾습니다.', cards: [{ num: '01', title: '방향 설정', body: '회사·대상·계정 포지셔닝 / 플랫폼 역할·프로젝트별 검수 기준. 산출: 프로젝트 브리프' }, { num: '02', title: '가치 있는 소재 발굴', body: '플랫폼 신호·경쟁사·사용자 문제 / AI 제안, 사람 확인 후 풀 입고. 산출: 확인된 소재' }, { num: '03', title: '콘텐츠 제작', body: '마스터 브리퍼 작성 / 플랫폼별 버전 / 샤오홍슈 이미지·텍스트·틱톡 대본 스토리보드. 산출: 콘텐츠와 에셋' }, { num: '04', title: '2단계 검수', body: 'AI 1차: 리스크·증거·포맷 / 사람 최종: 정확성·표현·저작권. 산출: 검수 완료' }, { num: '05', title: '수동 발행', body: '시스템이 발행 패키지 생성 / 운영자가 복사해 플랫폼에 수동 발행. 산출: 발행 스냅샷' }, { num: '06', title: '실제 데이터 회귀', body: '24h·7d·30d 세 개 윈도우 / 수동 입력 또는 CSV·표 붙여넣기. 산출: 데이터 스냅샷' }, { num: '07', title: '회고와 개선', body: 'AI 귀인, 사람 확인 / 소재·구조·CTA·리듬 업데이트. 산출: 다음 라운드 경험' }], highlight: '초안, 검수 의견, 발행 결과를 콘텐츠별로 저장합니다.', highlightLabel: '핵심 설계', image: '/media/koreahospital/02-content-production.png', imageAlt: '매일 핫이슈 콘텐츠 생산', image2: '/media/koreahospital/03-topic-pool.png', image2Alt: '소재 풀과 AI 소재 제안', image3: '/media/koreahospital/04-content-management.png', image3Alt: '플랫폼별 콘텐츠 관리', mediaMode: 'tabs', tabLabelsKo: ['매일 핫이슈', '소재 풀', '콘텐츠 관리'], imageCaption: '매일 찾은 소재와 출처를 한 화면에서 볼 수 있습니다.', image2Caption: '소재마다 상태와 관련 자료를 저장하고 담당자가 채택 여부를 정합니다.', image3Caption: '콘텐츠 관리는 플랫폼과 발행 상태별로 초안·대기·발행 콘텐츠를 정리해 도구 간 이동을 줄인다.' },
    { id: 'architecture', label: 'System Architecture', title: '프로젝트마다 기준을 다르게', body: '프로젝트에 계정 방향과 검수 기준을 저장합니다. 콘텐츠 카드에는 담당자, 진행 상태, 다음 할 일이 보입니다. 병원 프로젝트에는 의료 관련 기준을 적용합니다.', image: '/media/koreahospital/08-settings.png', imageAlt: '운영자와 모델 스킬을 관리하는 시스템 설정', imageCaption: '설정 화면에서 운영자, 소재 권한과 플랫폼 규칙을 확인할 수 있습니다.', mediaMode: 'feature' },
    { id: 'dashboard', label: 'Operations Dashboard', title: '홈에서 오늘 할 일 확인', body: '홈에서 할 일, 계정, 콘텐츠 진행 상황을 볼 수 있습니다. 작성·검수·발행 대기 중인 콘텐츠도 바로 열 수 있습니다.', cards: [{ num: 'Agent', title: '여섯 역할의 작업 현황', body: '팀장 입력창이 자연어 명령을 받고, 6개 역할 에이전트가 능력에 따라 작업을 분담한다.' }, { num: 'KPI', title: '4개 데이터 카드', body: '처리·검수 대기, 계정과 사용 가능한 에셋을 모아 보여 줍니다.' }, { num: 'Pipeline', title: '5단계 파이프라인', body: '소재 → 기획 → 제작 → 발행 → 회고, 색상이 데이터 카드와 일치해 한눈에 현재 막힘 위치 파악.' }, { num: 'Kanban', title: '칸반 콘텐츠 보드', body: '제작 대기 / 발행 대기 / 회고 대기 세 칸 드래그, 각 콘텐츠 카드는 출처 소재·현재 단계·담당자·다음 단계 표시.' }], image: '/media/koreahospital/01-operations-dashboard.png', imageAlt: '운영 워크벤치 홈 전체 화면', image2: '/media/koreahospital/09-toni-assistant.png', image2Alt: 'Toni Agent 대화 패널', mediaMode: 'tabs', tabLabelsKo: ['워크벤치 전체', 'Toni 어시스턴트'], imageCaption: '홈에서 오늘 할 일과 콘텐츠 진행 상황을 볼 수 있습니다.', image2Caption: 'Toni에게 진행 상황을 묻거나 발행 표시를 요청할 수 있습니다.' },
    { id: 'execution-plan', label: 'Multi-Agent Collaboration', title: '여섯 역할이 맡은 일', body: '조사 담당이 자료를 찾고 전략 담당이 방향을 정합니다. 편집 담당은 초안을 쓰고 디자인 담당은 이미지를 만듭니다. 발행 준비와 데이터 확인도 역할을 나눴으며, 운영자가 각 단계를 확인합니다.', cards: [{ num: '01', title: '연구원 · researcher', body: '플랫폼 신호·경쟁사 자료·사용자 문제를 모아 출처가 있는 리서치 패키지를 만든다.' }, { num: '02', title: '전략가 · strategist', body: '리서치와 회고를 바탕으로 계정 포지셔닝, 콘텐츠 축, 소재 우선순위와 마스터 브리퍼를 정한다.' }, { num: '03', title: '총편집자 · writer', body: '마스터 브리퍼·플랫폼 규칙·계정 톤을 바탕으로 샤오홍슈 카피나 틱톡 대본, 제목과 CTA를 작성한다.' }, { num: '04', title: '디자이너 · designer', body: '콘텐츠 버전·에셋 권한·플랫폼 규격에 맞춰 커버, 이미지 계획, 콘티와 소재 목록을 만든다.' }, { num: '05', title: '발행 도우미 · publisher', body: '카피·이미지·영상·태그·발행 시간을 플랫폼 패키지로 정리하고 운영자의 확인 후 발행한다.' }, { num: '06', title: '데이터 분석가 · analyst', body: '인터랙션·공유·팔로워 전환 성과를 모아 회고 요약을 만들고 연구와 전략으로 돌려보낸다.' }], image: '/media/koreahospital/06-execution-plan.png', imageAlt: '멀티 Agent 실행 계획과 연구 결과', image2: '/media/koreahospital/05-asset-detail.png', image2Alt: '에셋 센터의 권한·분류 상세', mediaMode: 'tabs', tabLabelsKo: ['실행 계획', '에셋 상세'], imageCaption: '여섯 역할의 작업 순서와 결과를 확인할 수 있습니다.', image2Caption: '소재마다 사용 권한과 사용 횟수를 확인할 수 있습니다.' },
    { id: 'post-analysis', label: 'Data Center', title: '발행 후 확인할 수치', body: '플랫폼과 계정별 조회, 반응, 공유, 팔로워 증가를 봅니다. 그 결과를 보고 다음 콘텐츠를 수정합니다.', cards: [{ num: '01', title: '인터랙션 성과', body: '인터랙션율·공유·댓글·저장을 한곳에서 확인해 실제 반응을 만든 콘텐츠를 찾는다.' }, { num: '02', title: '플랫폼 비교', body: '샤오홍슈 조회와 틱톡 재생을 분리 집계해 계정과 플랫폼 성과를 한눈에 비교한다.' }, { num: '03', title: '회고 근거', body: '발행마다 데이터 스냅샷을 남겨 소재·구조·CTA 개선이 근거를 갖게 한다.' }], image: '/media/koreahospital/07-post-analysis.png', imageAlt: '게시물 분석과 데이터 센터', imageCaption: '조회, 반응, 공유, 팔로워 증가를 한곳에서 봅니다.', mediaMode: 'feature' },
    { id: 'summary', label: 'Project Summary', title: '지금은 병원에서, 다른 회사도 추가 가능', body: '현재 사용 사례는 병원입니다. 다른 회사는 새 프로젝트를 만들고 계정과 검수 기준을 따로 설정할 수 있습니다. 콘텐츠와 수치도 프로젝트별로 저장됩니다.', highlight: '회사마다 프로젝트를 나누고 콘텐츠별 초안, 검수, 발행 기록을 남깁니다.', highlightLabel: 'PRODUCT ROADMAP' },
  ],
};


const comicStudioKo: ProjectDetail = {
  slug: 'comic-studio', num: '02',
  name: 'AI 만화극 제작 시스템', nameEn: 'AI Comic Production Workflow System',
  subtitle: '대본, 장면, 캐릭터 이미지와 생성 결과를 모아 다음 장면을 이어 만듭니다.',
  tags: ['장면 나누기', '캐릭터와 배경', '영상 생성', '버전 기록'],
  meta: '2026.05 – 현재 · 개인 프로젝트',
  heroImage: '/media/cw-flow-03-900.webp', heroImageAlt: '',
  nextProject: { slug: 'xiaonuan', name: '샤오누안' },
  liveDemo: { url: 'https://studio.hanyue-room.design', labelZh: '线上访问产品', labelKo: '제품 방문하기', productLabelZh: '前往 Studio', productLabelKo: 'Studio 열기', inviteCodes: ['50F2858A', '3B492D37', '89795156', '20F0D359'], inviteNoteZh: '目前仅提供中文版本，使用邀请码注册', inviteNoteKo: '현재 중국어 버전만 제공, 초대 코드로 가입' },
  sections: [
    { id: 'problems', label: 'Problem Space', title: '다음 장면에서도 같은 인물로', body: '한 장의 이미지는 빨리 만들 수 있어도 다음 장면에서 얼굴이나 옷이 달라지기 쉽습니다. 캐릭터와 배경 이미지를 저장해 뒤 장면에서도 같은 자료를 참고하도록 했습니다.', items: [{ title: '도구마다 끊기는 흐름', body: '대본, 스토리보드, 캐릭터 디자인, 배경 생성과 영상 제작이 여러 도구에 흩어져 정보 손실과 버전 혼란이 반복됩니다.' }, { title: '캐릭터와 화면의 불안정한 일관성', body: '모델은 생성할 때마다 얼굴, 의상과 장면 스타일을 바꿀 수 있습니다. 공통 에셋 기준이 없으면 연속 장면이 하나의 이야기처럼 보이지 않습니다.' }, { title: '복기할 수 없는 생성 비용', body: '모델마다 파라미터, 속도와 과금이 다릅니다. 호출 기록이 없으면 어떤 시도가 유효했고 어디에서 비용이 낭비됐는지 판단하기 어렵습니다.' }] },
    { id: 'flow', label: 'Production Pipeline', title: '대본을 나누고 장면을 만들기', body: '대본을 장면으로 나눈 뒤 캐릭터와 배경을 고르고 이미지와 영상을 만듭니다. 다시 만들 장면이 있으면 그 단계로 돌아갈 수 있습니다.', cards: [{ num: '01', title: '대본 분해', body: '전체 대본에서 장면, 캐릭터, 대사, 행동과 감정을 추출해 편집 가능한 장면 목록을 만듭니다.' }, { num: '02', title: '에셋 매칭', body: '장면을 캐릭터·배경 라이브러리와 연결하고 기존 에셋을 우선 재사용합니다.' }, { num: '03', title: '장면 일괄 생성', body: '장면별로 적합한 이미지·영상 모델을 선택하고 작업 상태와 결과를 한곳에서 비교합니다.' }, { num: '04', title: '확인과 완성본 출력', body: '후보 키프레임을 확정한 뒤 동적 장면을 생성하고 최종 영상을 검수합니다.' }], image: '/media/studio1.PNG', imageAlt: '대본에서 장면 제작으로 이어지는 모바일 워크플로우', image2: '/media/studio2.PNG', image2Alt: '캐릭터와 배경 에셋 매칭 화면', image3: '/media/studio3.PNG', image3Alt: '장면 일괄 생성 및 상태 관리 화면', image4: '/media/studio4.PNG', image4Alt: '생성 결과 확인과 완성본 출력 화면' },
    { id: 'assets', label: 'Asset System', title: '캐릭터와 배경은 한 번 정리하기', body: '같은 인물이 여러 장면에 나옵니다. 확정한 캐릭터와 배경 이미지를 저장해 다시 쓸 수 있게 했습니다.', items: [{ title: '캐릭터 라이브러리', body: '표준 외형, 의상과 참조 이미지를 저장합니다. 한 번 확정된 캐릭터는 모든 관련 장면에서 재사용되고, 에셋 수정 후 연결 장면을 다시 생성할 수 있습니다.' }, { title: '배경 라이브러리', body: '공간, 시간과 스타일 정보를 고정하고 장면에 해당 배경 참조를 자동 제공해 동일 장소의 반복 변형을 줄입니다.' }], image: '/media/cw-char-lib-640.webp', imageAlt: '재사용 가능한 캐릭터 에셋 라이브러리' },
    { id: 'studio', label: 'Studio UI', title: '한 편의 진행 상황을 한 화면에', body: '각 장면에서 쓴 이미지, 프롬프트와 결과를 프로젝트에 모았습니다. 파일 이름만 보고 최신 버전을 찾을 필요가 없습니다.', items: [{ title: '프로젝트 관리', body: '각 프로젝트가 대본, 에셋, 장면과 진행 상태를 독립적으로 보관해 다른 이야기의 데이터가 섞이지 않습니다.' }, { title: '장면 워크플로우', body: '장면을 서사 순서대로 보여 주고 대기, 생성 중, 확정, 수정 필요 상태를 표시해 다음 작업을 바로 찾게 합니다.' }, { title: '파라미터와 일괄 처리', body: '장면별로 모델과 설정을 선택하거나 검증된 설정을 여러 장면에 한 번에 적용합니다.' }], image: '/media/studio8.png', imageAlt: 'AI 만화극 스튜디오 프로젝트 및 에셋 개요', image2: '/media/studio9.png', image2Alt: 'AI 만화극 스튜디오 장면 제작 화면' },
    { id: 'canvas-workspace', label: 'Canvas Workspace', title: '캔버스에서 다음 작업으로 잇기', body: '캐릭터 이미지, 참고 이미지, 글, 영상 작업을 캔버스에서 연결합니다. 결과를 클릭하면 어떤 소재를 썼는지 볼 수 있습니다.', image: '/media/comic-canvas-workspace.webp', imageAlt: 'AI 만화극 제작 시스템의 노드 기반 캔버스 작업실' },
    { id: 'director-stage', label: 'Director Stage', title: '인물과 카메라를 먼저 배치', body: '인물 위치, 카메라 각도, 조명을 조정한 뒤 장면을 생성합니다. 컷마다 인물 위치가 갑자기 바뀌는 문제를 줄이기 위해서입니다.', image: '/media/comic-director-stage.webp', imageAlt: 'AI 만화극 제작 시스템의 3D 디렉터 스테이지와 타임라인' },
    { id: 'panorama', label: 'Panorama', title: '같은 배경에서 다른 각도 찍기', body: '파노라마 배경을 만든 뒤 카메라 위치를 고릅니다. 여러 장면에서 같은 장소를 다시 쓸 수 있습니다.', image: '/media/comic-panorama.webp', imageAlt: 'AI 만화극 제작 시스템의 파노라마 생성 패널' },
    { id: 'generation', label: 'Generation & API', title: '만든 과정을 기록하기', body: '모델, 프롬프트, 설정과 결과를 저장합니다. 화면을 수정할 때 지난 버전의 설정을 다시 볼 수 있습니다.', items: [{ title: '멀티 모델 연결', body: '작업에 따라 다른 모델을 선택하고 호출 설정을 한곳에서 관리합니다. 장면과 모델이 분리되어 공급자를 바꿔도 프로젝트 전체를 다시 만들 필요가 없습니다.' }, { title: '완전한 생성 히스토리', body: '각 시도의 Prompt, 파라미터와 출력 결과를 보존해 후보 버전을 비교하고 유효한 설정을 다시 사용할 수 있습니다.' }, { title: '호출과 비용 기록', body: '프로젝트와 모델별 호출을 모아 고비용 단계를 찾고, 모델 선택 경험을 재사용 가능한 제작 판단으로 바꿉니다.' }], image: '/media/studio6.PNG', imageAlt: '멀티 모델 생성 설정 화면', image2: '/media/studio5.PNG', image2Alt: '생성 히스토리 및 후보 결과 비교 화면', image3: '/media/studio7.PNG', image3Alt: 'API 설정과 호출 관리 화면' },
    { id: 'keyframes', label: 'Keyframes & Final Output', title: '이미지를 먼저 고르고 영상 만들기', body: '정지 이미지로 인물과 구도를 확인한 뒤 영상을 만듭니다. 아래에서 실제로 만든 영상 두 편을 볼 수 있습니다.', items: [{ title: '키프레임을 먼저 확정', body: '장면마다 여러 후보를 만들고 구도, 색감과 캐릭터 상태를 검토합니다. 시각 기준을 잠근 뒤 영상 생성으로 넘어가 고비용 재작업을 줄입니다.' }, { title: '동적 장면 생성', body: 'Seedance 등 영상 모델을 호출해 장면에 맞는 움직임, 길이와 해상도를 설정하고 출력 버전을 비교할 수 있도록 보존합니다.' }], video: 'https://pub-b4207c4837a7427cba5f6e5be59729c5.r2.dev/comic1.mp4', videoPoster: '/media/cw-keyframe-1-900.webp', videoLabel: 'FINAL OUTPUT 01', video2: 'https://pub-b4207c4837a7427cba5f6e5be59729c5.r2.dev/comic2.mp4', video2Poster: '/media/cw-keyframe-2-900.webp', video2Label: 'FINAL OUTPUT 02' },
    { id: 'lessons', label: 'Lessons Learned', title: '시도해 보고 바꾼 방법', items: [{ title: '일관성은 먼저 에셋 문제입니다', body: '프롬프트를 길게 써도 캐릭터 모습은 흔들렸습니다. 확정한 캐릭터와 배경을 저장해 장면마다 다시 참조하도록 했습니다.' }, { title: '저비용 미리보기 후 정식 생성', body: '영상 모델을 정식 호출하기 전에 저해상도와 단순 파라미터로 구도와 움직임을 검증했습니다. 방향을 확인한 뒤 정식 생성해 장면당 API 비용을 약 40% 줄였습니다.' }, { title: '장면에 맞는 모델 고르기', body: '어떤 모델은 화면에, 어떤 모델은 움직임에 더 맞습니다. 장면에 따라 골라 씁니다.' }] },
    { id: 'summary', label: 'Project Summary', title: '한 편을 이어서 만들기', body: '대본, 장면, 소재를 프로젝트에 모았습니다. 한 장면을 고칠 때도 원래 캐릭터와 배경을 이어 쓸 수 있습니다.', highlight: '다음 단계: 다중 캐릭터 동시 등장 장면, 음성 합성과 자동 더빙, 긴 프로젝트의 일괄 작업 스케줄링을 개선합니다.', highlightLabel: 'NEXT STEPS' },
    { id: 'program-structure', label: 'Program Structure', title: '코드를 나눈 방식', body: 'API, 프롬프트, 기본 자료와 화면 코드를 나눠 관리합니다. 모델이나 화면을 바꿀 때 다른 부분을 덜 건드릴 수 있습니다.', cards: [{ num: 'app.py', title: '메인 웹 서버', body: '라우팅과 API 엔드포인트' }, { num: 'prompts/', title: 'AI 프롬프트 저장소', body: '대본 분석, 분경과 이미지 생성 템플릿' }, { num: 'data/', title: '데이터 저장소', body: '캐릭터, 장면과 스타일 사전 설정' }, { num: 'static/', title: '프론트엔드 정적 파일', body: 'HTML, CSS, JavaScript와 이미지' }, { num: 'requirements.txt', title: 'Python 의존성', body: 'pip 패키지 목록' }, { num: 'Procfile', title: '배포 프로세스', body: 'Railway 시작 명령 정의' }, { num: 'railway.toml', title: '배포 환경 설정', body: 'Railway 서비스 구성' }, { num: 'nixpacks.toml / runtime.txt', title: '빌드와 런타임', body: 'Nixpacks 규칙과 Python 버전' }] },
    { id: 'technical-architecture', label: 'Technical Architecture', title: '사용한 기술', body: 'Python으로 서버를 만들고 Railway에 배포했습니다. 작업에 따라 다른 생성 모델을 선택할 수 있습니다.', cards: [{ num: 'Language', title: '개발 언어', body: 'Python' }, { num: 'Framework', title: '프레임워크', body: 'Flask / FastAPI · app.py 기반 웹 서버' }, { num: 'Frontend', title: '프론트엔드', body: 'HTML · CSS · JavaScript · static/ 디렉토리' }, { num: 'Deployment', title: '배포 환경', body: 'Railway · railway.toml · Procfile · nixpacks.toml' }, { num: 'AI Models', title: 'AI 모델 연동', body: '豆包(Doubao) · GLM 4.6 · Claude 4.6 · GPT Image 2 · Seedance' }, { num: 'Packages', title: '패키지 관리', body: 'pip · requirements.txt' }] },
  ],
};

const infiniteCanvasKo: ProjectDetail = {
  slug: 'ai-infinite-canvas', num: '01',
  name: 'AI 무한 캔버스', nameEn: 'AI Infinite Canvas Workflow Platform',
  subtitle: '소재, 문구, 크기를 한 캔버스에서 조합해 이미지를 만들고 비교합니다.',
  tags: ['이미지 일괄 제작', '상품 이미지', '캔버스 디자인', '중·한·영 지원'],
  meta: '2026 · 개인 프로젝트 · 서비스 중, 계속 수정',
  heroImage: '/media/xn-home-hero-760.webp', heroImageAlt: '',
  nextProject: { slug: 'comic-studio', name: 'AI 만화극 제작 시스템' },
  liveDemo: { url: 'https://image.hanyue-room.design/', labelZh: '体验交互演示', labelKo: '인터랙티브 데모', productLabelZh: '访问线上产品', productLabelKo: '라이브 제품 보기' },
  sections: [
    { id: 'overview', label: 'Overview', title: '한 캔버스에서 여러 이미지를 만들기', body: '상품 이미지를 만들 때는 같은 상품에 배경, 크기, 문구를 바꿔 적용해야 합니다. 이 선택지를 캔버스에 모아 여러 버전을 한 번에 만들고 나란히 비교하도록 했습니다.', image: '/media/ai-canvas-1200.webp', imageAlt: 'AI 무한 캔버스 — 메인 인터페이스', mediaMode: 'feature', imageCaption: '소재, 문구, 크기와 결과가 한 캔버스에 있습니다.', items: [] },
    { id: 'challenge', label: 'Challenge', title: '복사하고 정리하다 보면 결과가 뒤섞입니다', body: '버전마다 프롬프트를 복사하고 크기를 바꾼 뒤 결과를 다시 찾아야 했습니다. 상품이 늘면 어떤 이미지가 어떤 설정에서 나왔는지 헷갈립니다. 그래서 입력과 결과를 함께 보이게 했습니다.', image: '/media/canvas4-1478.webp', imageAlt: 'AI 무한 캔버스 — 전체 캔버스 아키텍처', mediaMode: 'panorama', imageCaption: '입력부터 결과까지 캔버스에서 다시 볼 수 있습니다.', annotations: [{ label: '입력 및 설정', x: 18, y: 25 }, { label: '배치 생성', x: 52, y: 55 }, { label: '결과 비교', x: 82, y: 30 }], items: [] },
    { id: 'saas', label: 'SaaS Model', title: '다른 사람도 로그인해 쓸 수 있게', body: '회원가입, 초대 코드, 사용 한도와 이미지 저장 기능을 더했습니다. 사용자는 자신의 모델 API를 연결하고 이전 작업을 다시 볼 수 있습니다.', items: [
      { title: '초대 코드로 가입 관리', body: '가입할 때 초대 코드를 입력합니다. 코드마다 사용 권한과 한도를 다르게 설정할 수 있습니다.' },
      { title: '자신의 모델 API 연결', body: '사용자가 자신의 API를 입력하고 모델을 고르면 생성 비용도 직접 관리할 수 있습니다.' },
      { title: '사용 한도와 생성 기록 확인', body: '플랫폼 사용 한도와 개인 API 사용을 따로 계산합니다. 만든 이미지와 설정은 기록으로 남습니다.' },
      { title: '중국어·한국어·영어 지원', body: '작업 화면, 로그인, 기록과 설정을 중국어·한국어·영어로 볼 수 있고 선택한 언어가 저장됩니다.' },
    ] },
    { id: 'system', label: 'System Design', title: '오픈소스 캔버스에서 제가 만든 부분', body: '드래그와 연결 기능은 오픈소스를 사용했습니다. 저는 상품, 참고 이미지, 문구, 크기 노드와 일괄 생성·결과 정리 기능을 만들었습니다.', flowLabel: '소재에서 결과까지', flow: ['소재와 참고 이미지 고르기', '문구·크기·모델 고르기', '만들 버전 확인', '한 번에 여러 장 만들기', '결과 고르기', '다운로드하거나 나중에 다시 보기'], items: [
      { title: '자주 쓰는 항목을 노드로', body: '상품 이미지, 참고 이미지, 문구, 크기, 모델을 각각 노드로 만들었습니다. 선으로 연결해 조합을 정합니다.' },
      { title: '여러 버전을 한 번에 생성', body: '상품, 참고 이미지, 문구, 크기를 고르면 가능한 조합을 보여 줍니다. 확인 후 한 번에 생성합니다.' },
      { title: '결과를 한곳에서 비교', body: '다른 작업에서 만든 이미지도 한곳에 모입니다. 올린 상품 이미지와 참고 이미지는 다시 쓸 수 있습니다.' },
    ] },
    { id: 'scenes', label: 'Scene Selection', title: '템플릿을 열고 바로 시작하기', body: '상품 이미지, SNS 이미지, 캐릭터 이미지, 포스터용 템플릿을 만들었습니다. 자주 쓰는 노드가 놓여 있어 자신의 소재로 바꾸면 됩니다.', image: '/media/canvas6-1508.webp', imageAlt: '캐릭터 디자인 시나리오', imageCaption: '캐릭터 템플릿에서 참고 이미지와 문구를 바꿔 여러 각도의 인물 이미지를 만듭니다.', image2: '/media/canvas7-1480.webp', image2Alt: '이커머스 및 운영 시나리오', image2Caption: '상품 이미지와 SNS용 이미지에 맞는 템플릿을 골라 시작합니다.', mediaMode: 'tabs', tabLabelsKo: ['캐릭터 디자인', '이커머스·운영'] },
    { id: 'decisions', label: 'Key Decisions', title: '만들면서 한 선택', items: [
      { title: '기본 캔버스는 오픈소스 사용', body: '드래그, 확대·축소, 연결에는 오픈소스를 썼습니다. 저는 노드, 일괄 생성, 계정 기능을 만들었습니다.' },
      { title: '입력과 결과를 캔버스에서 확인', body: '소재, 문구, 크기가 캔버스에 남습니다. 결과를 클릭하면 어떤 입력으로 만들었는지 볼 수 있습니다.' },
      { title: '플랫폼 한도와 개인 API 중 선택', body: '플랫폼 사용 한도를 쓰거나 자신의 API를 연결할 수 있습니다. 두 방식은 따로 계산됩니다.' },
      { title: '중국어·한국어·영어 지원', body: '3개 언어 지원을 홈 화면 번역에 그치지 않고 워크스페이스, 계정, 관리자, 이력, 에셋, 모델 설정 전체에 적용하고 선택 언어를 유지합니다.' },
    ], image: '/media/canvas2-2426.webp', imageAlt: 'AI 무한 캔버스 — 캔버스 파노라마 뷰', mediaMode: 'panorama', imageCaption: '여러 상품, 크리에이티브 분기와 생성 작업을 비선형적으로 동시에 관리' },
    { id: 'deliverables', label: 'Deliverables', title: '지금 할 수 있는 일', items: [
      { title: '가입부터 작업 기록까지', body: '가입, 초대 코드, 사용 한도, 기록, 관리자 화면을 만들었습니다.' },
      { title: '모델과 API 선택', body: '플랫폼 모델과 사용자 API를 지원합니다. 글이나 참고 이미지로 사진을 만들고 오류도 확인할 수 있습니다.' },
      { title: '소재 업로드와 결과 비교', body: '소재 이미지를 여러 장 올릴 수 있습니다. 만든 이미지는 비교·다운로드하고 기록에서도 다시 볼 수 있습니다.' },
      { title: 'Cloudflare에 서비스 배포', body: '사이트는 Cloudflare에서 운영합니다. 계정 데이터와 이미지는 D1, R2에 나눠 저장합니다.' },
    ] },
    { id: 'validation', label: 'Launch & Validation', title: '서비스 배포 완료', body: '가입하고 캔버스를 만든 뒤 모델 API로 이미지를 생성할 수 있습니다. 한국저작권위원회 등록번호는 아래에 적었습니다.', items: [
      { title: '실제 서비스 배포 완료', body: 'image.hanyue-room.design에서 가입, 초대 코드 접근, 캔버스 워크플로우 생성, 사용자 API 연결과 실제 생성 작업을 수행할 수 있습니다.' },
      { title: '한국저작권위원회 등록 완료', body: '등록번호: 제C-2026-037309호. 제호: AI 무한 캔버스 워크플로우 플랫폼(AI Infinite Canvas Workflow Platform).' },
      { title: '디자인부터 배포까지 직접 진행', body: '화면, 노드, 프런트엔드·백엔드, 3개 언어와 배포를 직접 맡았습니다.' },
    ] },
    { id: 'reflection', label: 'Roadmap', title: '다음에는 캔버스에서 이미지도 수정하기', body: '지금은 이미지를 여러 장 만드는 데 집중했습니다. 다음에는 확장, 부분 수정, 영상 기능을 더해 파일을 다른 도구로 옮기는 일을 줄이고 싶습니다.', highlight: '다음에는 이미지 확장, 부분 수정, 영상 기능을 더하고 중국어·한국어·영어 화면도 계속 다듬겠습니다.', highlightLabel: 'PRODUCT ROADMAP' },
  ],
};

const milkRibbonKo: ProjectDetail = {
  slug: 'milk-ribbon', num: '04',
  name: 'Milk & Ribbon', nameEn: 'Brand Identity & Applications',
  subtitle: '리본과 발레 이미지를 활용해 로고, 패키지, 룩북을 만든 수업 프로젝트입니다.',
  tags: ['로고', '패키지', '룩북', 'SNS 이미지'],
  meta: '2025.09 · 브랜드 디자인 과정 프로젝트',
  heroImage: '/media/mr-hero-560.webp', heroImageAlt: '',
  nextProject: { slug: 'commercial-video', name: '상업 영상과 모션 광고' },
  sections: [
    { id: 'market', label: 'Market Insight', title: '리본과 발레에서 시작', body: 'Milk & Ribbon은 브랜드 디자인 수업 프로젝트입니다. 리본, 발레, 분홍색을 바탕으로 로고, 패키지, 룩북을 만들었습니다.' },
    { id: 'positioning', label: 'Brand Core', title: '누구를 위한 브랜드인가', body: '', items: [{ title: '브랜드 코어：「부드러움, 그 자체의 질서」', body: 'Softness with Structure: 부드러운 모양과 정돈된 레이아웃을 함께 썼습니다.' }, { title: '타겟', body: '수업에서 설정한 고객은 리본, 발레, 부드러운 색을 좋아하는 젊은 소비자입니다.' }, { title: '가치 제안', body: '부드럽고 가벼운 이미지를 쓰되 글은 읽기 쉽게 배치했습니다.' }], image: '/media/mr-strategy.png', imageAlt: '브랜드 포지셔닝 전략' },
    { id: 'visual-system', label: 'Visual System', title: '색과 그래픽 고르기', body: '연분홍, 크림색, 진분홍, 연파랑을 사용했습니다. 리본, 백조, 손글씨 선은 패키지와 룩북에 반복해서 넣었습니다.', image: '/media/mr-research.png', imageAlt: '시장 조사 비주얼 보드', image2: '/media/mr-colors.png', image2Alt: '컬러 시스템', image3: '/media/mr-logo.png', image3Alt: '로고 시스템' },
    { id: 'lookbook', label: 'Lookbook & Catalog', title: '룩북 페이지 구성', body: '사진 크기, 여백, 글의 양으로 페이지를 넘기는 리듬을 만들었습니다. 어느 페이지를 봐도 같은 브랜드로 보이게 했습니다.', image: '/media/mr-catalog.png', imageAlt: '브랜드 룩북', image2: '/media/mr-37.2.png', image2Alt: '터치포인트 확장', image3: '/media/mr-all-materials.png', image3Alt: '자재 패밀리' },
    { id: 'packaging', label: 'Packaging Extension', title: '그래픽을 패키지에 적용', body: '패키지와 라벨에도 같은 색, 글꼴, 리본 그래픽을 썼습니다. 실제 크기로 줄였을 때 읽히는지도 확인했습니다.', image: '/media/mr-36.1.png', imageAlt: '패키지 적용', image2: '/media/mr-36.2.png', image2Alt: '그래픽 확장', image3: '/media/mr-goods.png', image3Alt: '제품 디스플레이' },
    { id: 'materials', label: 'Materials', title: '다른 물건에도 적용해 보기', body: '명함, 봉투, 쇼핑백, SNS 화면에 넣어 보며 크기와 재질이 달라도 같은 브랜드로 보이는지 확인했습니다.', image: '/media/mr-35.1.png', imageAlt: '비주얼 적용 예시' },
    { id: 'reflection', label: 'Reflection', title: '작업을 마치며', body: '같은 요소를 패키지, 룩북, SNS에 적용했습니다. 모양은 조금씩 달라도 한 브랜드의 작업으로 보이는지가 중요했습니다.' },
  ],
};

const commercialVideoKo: ProjectDetail = {
  slug: 'commercial-video', num: '05',
  name: '상업 영상과 모션 광고', nameEn: 'Commercial Video & Motion Ads',
  subtitle: '가로 영상에서는 제품을 충분히 보여 주고, 세로 영상에서는 빠르게 본론에 들어갑니다.',
  tags: ['브랜드 영상', '이커머스 영상', 'SNS 영상', '모션그래픽'],
  meta: '상업 프로젝트 · 편집 / 모션 / 시각 리듬 / 광고 소재',
  heroImage: '/media/mr-hero-900.webp', heroImageAlt: '',
  nextProject: { slug: 'ai-infinite-canvas', name: 'AI 무한 캔버스' },
  sections: [
    { id: 'overview', label: 'Overview', title: '게재 위치에 맞춰 영상 편집', body: '브랜드 영상, 이커머스 상품 영상, SNS 광고를 모았습니다. 게시할 곳에 따라 가로·세로 버전을 만들고 자막과 제품 장면을 조정했습니다.', items: [{ title: '작업 방식', body: '어디에 올릴 영상인지 먼저 정하고 장면, 자막, 전환을 맞췄습니다. 가로·세로 버전을 따로 편집했습니다.' }] },
    { id: 'landscape', label: 'Landscape · 16:9', title: '가로형: 제품을 충분히 보여 주기', body: '웹사이트와 상품 페이지에서는 제품을 소개할 시간을 확보합니다. 글과 화면 전환도 그 흐름에 맞춰 배치했습니다.', video: '/media/brand-ad-1.mp4', video2: '/media/brand-ad-2.mp4', items: [{ title: '브랜드 이미지 숏필름', body: '웹사이트 / 전시용. 브랜드 톤과 비주얼 분위기를 강조. 느린 리듬, 화면 질감과 색상 통일성 중시.' }, { title: '이커머스 마케팅 숏필름', body: '메인 이미지 / 광고 소재용. 제품 셀링 포인트와 전환 정보 강조. 첫 3초 내에 주제 진입, 자막 가독성 확보.' }] },
    { id: 'portrait', label: 'Portrait · 9:16', title: '세로형: 바로 본론으로', body: '휴대전화 화면에서는 초반에 요점을 보여 줍니다. 자막도 세로 화면에서 읽히는 크기로 맞췄습니다.', video: '/media/brand-ad-3.mp4', video2: '/media/brand-ad-4.mp4', items: [{ title: 'SNS 리뷰형 숏폼', body: '모바일 광고용. 실제 경험과 제품 디스플레이를 핵심으로. 빠른 리듬, 3초 내 비주얼 앵커 구축.' }, { title: 'MG 모션 설명', body: '정보 시각화용 애니메이션. 제품 기능 설명, 데이터 디스플레이, 브랜드 스토리에 사용. 명확한 시각적 위계로 정보 획득 유도.' }] },
    { id: 'reflection', label: 'Reflection', title: '같은 영상도 플랫폼에 맞게 다시 편집', body: '가로와 세로는 화면 비율도 보는 방식도 다릅니다. 사례에 여러 버전을 남겨 장면, 자막, 속도를 어떻게 바꿨는지 보여 줍니다.' },
  ],
};

/* ================================================================
   EXPORT
   ================================================================ */

export const projectDetailsZh: Record<string, ProjectDetail> = {
  'xiaonuan': xiaonuanZh,
  'koreahospital': koreahospitalZh,
  'comic-studio': comicStudioZh,
  'ai-infinite-canvas': infiniteCanvasZh,
  'milk-ribbon': milkRibbonZh,
  'commercial-video': commercialVideoZh,
};

export const projectDetailsKo: Record<string, ProjectDetail> = {
  'xiaonuan': xiaonuanKo,
  'koreahospital': koreahospitalKo,
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
