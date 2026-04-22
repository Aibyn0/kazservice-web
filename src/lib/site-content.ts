import type { Locale } from "@/lib/i18n";

type ServiceItem = {
  title: string;
  summary: string;
  details?: string[];
  forWho?: string[];
  notForWho?: string[];
  deliverables?: string[];
};

type IndustryItem = {
  title: string;
  summary: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSection = {
  id: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

type ProjectTrack = {
  title: string;
  summary: string;
  href: string;
};

export type SiteContent = {
  siteName: string;
  slogan: string;
  ctaPrimary: string;
  ctaSecondary: string;
  nav: {
    home: string;
    services: string;
    industries: string;
    faq: string;
    contact: string;
  };
  proofStats?: Array<{ label: string; value: string }>;
  projectTracks?: ProjectTrack[];
  labels: {
    coreStrengths: string;
    aboutUs: string;
    viewAll: string;
    caseStudy: string;
    challenge: string;
    solution: string;
    result: string;
    positioning: string;
    process: string;
    financingSources: string;
    serviceContent: string;
    targetClients: string;
    deliverables: string;
    workMethod: string;
    cooperationFlow: string;
    industryIntro: string;
    marketResearchMethod: string;
    faqIntro: string;
    faqAll: string;
    faqSearchPlaceholder: string;
    faqNoResults: string;
    primaryAction: string;
    secondaryAction: string;
    contactTitle: string;
    contactIntro: string;
    formName: string;
    formContact: string;
    formCompany: string;
    formNeed: string;
    formSubmit: string;
    formSuccess: string;
    formSubmitting: string;
    formError: string;
    fitProjects: string;
    notFitProjects: string;
    replicableMethod: string;
    footerCompliance: string;
    footerCoverage: string;
    footerContact: string;
    quickEntryTitle: string;
    quickEntryAction: string;
  };
  hero: {
    title: string;
    description: string;
  };
  positioning?: string;
  about?: string[];
  workMethod?: string[];
  processSteps?: string[];
  marketResearchSteps?: string[];
  financingSources?: string[];
  caseStudy?: {
    title: string;
    challenge: string;
    solution: string[];
    result: string[];
    method: string[];
  };
  footerInfo?: {
    compliance: string[];
    coverage: string[];
    contact: string[];
  };
  strengths: string[];
  services: ServiceItem[];
  industries: IndustryItem[];
  faqs: FaqItem[];
  faqSections?: FaqSection[];
  wechatId: string;
};

export const contentByLocale: Record<Locale, SiteContent> = {
  "zh-CN": {
    siteName: "中哈投资咨询",
    slogan: "深耕哈萨克斯坦，连接中亚机遇",
    ctaPrimary: "预约一对一咨询",
    ctaSecondary: "下载投资指南",
    nav: {
      home: "首页",
      services: "服务详情",
      industries: "行业视角",
      faq: "常见问题",
      contact: "预约咨询",
    },
    proofStats: [
      { label: "重点服务方向", value: "7+" },
      { label: "核心行业覆盖", value: "4 大领域" },
      { label: "案例融资金额", value: "1500 万美元" },
      { label: "首轮方案周期", value: "2-6 周" },
    ],
    projectTracks: [
      {
        title: "融资型项目",
        summary: "目标是拿到债务或股权资金，优先优化融资材料与谈判路径。",
        href: "/services",
      },
      {
        title: "扩张型项目",
        summary: "计划新建产线、进入新区域或新增业务单元，先做可行性与资金测算。",
        href: "/industries",
      },
      {
        title: "并购型项目",
        summary: "涉及资产收购、股权重组或交易整合，强调尽调和交易结构。",
        href: "/services",
      },
    ],
    labels: {
      coreStrengths: "核心优势",
      aboutUs: "关于我们",
      viewAll: "查看全部",
      caseStudy: "标杆案例",
      challenge: "挑战",
      solution: "解决方案",
      result: "结果",
      positioning: "我们的定位与方法",
      process: "项目推进流程",
      financingSources: "主要融资来源",
      serviceContent: "服务内容",
      targetClients: "适用对象",
      deliverables: "可交付结果",
      workMethod: "工作方法",
      cooperationFlow: "合作流程",
      industryIntro: "我们基于行业数据库与一线项目经验，评估市场容量、竞争格局和投资吸引力，帮助项目方减少试错成本。",
      marketResearchMethod: "市场调研执行方法",
      faqIntro: "围绕融资流程与落地执行的高频问题解答。",
      faqAll: "全部",
      faqSearchPlaceholder: "搜索问题关键词（如：融资、模型、周期）",
      faqNoResults: "未找到匹配结果，请更换关键词或切换专题。",
      primaryAction: "预约 30 分钟免费初评",
      secondaryAction: "查看服务方案",
      contactTitle: "预约咨询",
      contactIntro: "留下您的项目信息，我们会在 1 个工作日内安排顾问与您对接。",
      formName: "姓名",
      formContact: "联系方式（微信/电话/邮箱）",
      formCompany: "公司/项目名称",
      formNeed: "当前需求",
      formSubmit: "提交预约",
      formSuccess: "已收到，我们会尽快联系您。",
      formSubmitting: "提交中...",
      formError: "提交失败，请稍后再试或直接通过微信联系。",
      fitProjects: "适配项目",
      notFitProjects: "暂不适配",
      replicableMethod: "可复制方法",
      footerCompliance: "合规与专业",
      footerCoverage: "服务覆盖",
      footerContact: "联系信息",
      quickEntryTitle: "按项目类型快速进入",
      quickEntryAction: "进入",
    },
    hero: {
      title: "您的政商落地实战伙伴",
      description:
        "从投资前策划、财法合规到融资并购，提供面向中国投资者的哈萨克斯坦全周期咨询服务。",
    },
    positioning:
      "我们不把项目当作一次性交付，而是把每次咨询嵌入客户长期增长战略：先把路径和风险算清楚，再组织资本、法务与执行资源共同推进。",
    about: [
      "我们是一家国际投资咨询公司，提供战略与投资咨询的综合服务。",
      "我们陪伴企业发展的各个阶段，从投资理念形成到资本结构化与交易落地。",
      "我们为大型投资项目提供行业与财务研究，也服务于成长型企业和初创团队。",
      "客户包括大中型公司、投资者以及希望在哈萨克斯坦建立新业务的创业团队。",
    ],
    workMethod: [
      "战略伙伴关系：深入理解客户业务并担任外部财务顾问。",
      "保密性：严格遵守投资与财务数据的信息保护原则。",
      "综合分析：从财务、市场、法律、投资多维度评估项目。",
      "流程透明：建立清晰互动机制并持续同步执行进度。",
    ],
    processSteps: [
      "诊断阶段：明确融资或扩张目标，梳理现状数据与关键约束。",
      "建模阶段：形成财务模型与多情景推演，评估回收期与资本效率。",
      "包装阶段：准备业务计划书、投资简报与谈判材料。",
      "执行阶段：对接银行/机构/投资者，陪同谈判与条款落地。",
      "落地阶段：将模型与指标纳入日常管理，持续优化经营策略。",
    ],
    marketResearchSteps: [
      "明确调研目标并建立目标树（核心目标与次级目标）。",
      "分析产品和服务特性，识别目标客户核心需求。",
      "按行业、规模、价格带和采购偏好细分受众。",
      "评估竞争对手优势短板并进行价格监测。",
      "输出可执行的营销和投资进入策略。",
    ],
    financingSources: [
      "哈萨克斯坦二级银行 (STB) 贷款",
      "国家发展机构：Damu 基金、哈萨克斯坦发展银行等",
      "国际金融机构：EBRD、ADB 等",
      "私人投资者与投资基金",
      "夹层、桥接、再融资与债务重组方案",
    ],
    caseStudy: {
      title: "物流控股企业融资模型项目",
      challenge: "客户需要一套可实时更新参数且符合国际标准的透明财务模型以吸引外资。",
      solution: [
        "建立 Excel 动态模型并自动计算 NPV、IRR、投资回收期。",
        "针对汇率剧烈波动与物流成本变化进行压力测试。",
        "输出悲观、基准、乐观三种可执行情景。",
      ],
      result: ["成功吸引 1500 万美元外部投资。", "模型纳入管理会计流程，支持日常 KPI 管理。"],
      method: [
        "先用统一口径梳理业务驱动因子，确保数据可追溯。",
        "再做多情景压力测试，明确关键风险触发点。",
        "最后将模型接入管理会计，形成持续迭代机制。",
      ],
    },
    footerInfo: {
      compliance: [
        "遵循信息保密与职业道德原则",
        "采用国际财务分析与评估标准",
        "全流程透明协作与里程碑管理",
      ],
      coverage: ["覆盖哈萨克斯坦全境项目", "支持跨地区线上协作与远程交付", "支持中/俄/英多语沟通"],
      contact: ["微信：KAZ-INVEST-TEAM", "咨询响应：1个工作日内", "可预约30分钟免费初评"],
    },
    strengths: [
      "政府背景与实战经验",
      "中俄英多语种沟通",
      "国际标准财务与风控能力",
      "投资全流程陪伴落地",
    ],
    services: [
      {
        title: "投前策划",
        summary: "围绕“是否值得投、如何更稳投”完成业务计划书、市场调研和财务建模。",
        details: [
          "贷款业务计划书：按哈萨克斯坦信贷机构标准设计融资材料。",
          "市场研究：覆盖食品、化工、冶金、机械制造等重点行业，输出竞争格局与价格监测。",
          "财务建模：围绕 NPV、IRR、回收期进行多情景推演与压力测试。",
        ],
        forWho: [
          "需要银行贷款或机构融资的项目公司",
          "准备新建产线、扩张区域或进入新赛道的企业",
          "需要验证投资可行性并降低决策风险的管理层",
        ],
        notForWho: ["仅需模板化文档、无需深入数据验证的项目", "无法提供基础经营数据且短期内无法补齐的项目"],
        deliverables: [
          "可用于融资沟通的业务计划书与财务模型",
          "市场容量、竞争格局与投资吸引力分析结论",
          "关键经营指标与风险应对建议清单",
        ],
      },
      {
        title: "财法合规",
        summary: "覆盖法律、税务与监管互动，帮助企业在合规框架内稳定推进业务。",
        details: [
          "法律随行：合同审查、公司治理、诉讼与争议支持。",
          "税务随行：申报、税务优化、检查应对与风险控制。",
          "专项服务：商标保护、许可办理、签证与外宾陪同。",
        ],
        forWho: [
          "在哈萨克斯坦落地新实体或调整组织架构的企业",
          "有复杂合同、劳动关系或监管沟通需求的运营团队",
          "希望降低税务争议与合规风险的项目方",
        ],
        notForWho: ["希望绕开法律与税务合规流程的项目", "仅需一次性法律文本而无持续协同需求的团队"],
        deliverables: [
          "合同模板与条款风险清单",
          "税务合规时间表与优化路径建议",
          "检查、争议和政府沟通支持方案",
        ],
      },
      {
        title: "融资并购",
        summary: "从融资结构设计到交易谈判落地，协同推进债务、股权与并购项目。",
        details: [
          "融资渠道：STB、Damu、DBK、EBRD、ADB 等机构。",
          "交易支持：股权/债务融资、重组、夹层及桥接融资。",
          "M&A 陪同：估值、交易架构、谈判与交割全流程支持。",
        ],
        forWho: [
          "希望优化资本结构并降低融资成本的企业",
          "计划进行并购整合或资产重组的管理层与股东",
          "需要专业团队全程陪同谈判的项目发起方",
        ],
        notForWho: ["暂不准备开放融资或交易谈判窗口的项目", "无法配合尽调与关键材料披露的主体"],
        deliverables: [
          "融资路线图与机构匹配清单",
          "投资者简报、谈判要点与条款建议",
          "交易执行支持直至签约与资金到位",
        ],
      },
    ],
    industries: [
      { title: "化工园区", summary: "聚焦 KHP 等重点园区入驻与产业协同机会。" },
      { title: "矿产能源", summary: "评估项目现金流、政策风险与跨境交易结构。" },
      { title: "农业加工", summary: "围绕供应链、出口标准与本地化产能布局。" },
      { title: "跨境物流", summary: "打通中亚通道并优化运输与仓储成本结构。" },
    ],
    faqs: [
      {
        question: "为什么不直接去银行融资？",
        answer:
          "银行只评估授信条件，我们负责先把项目模型、合规与谈判策略准备到可融资状态。",
      },
      {
        question: "财务模型可以动态调整吗？",
        answer: "支持基于汇率、物流成本和销量变化做情景压力测试。",
      },
      {
        question: "从咨询到落地通常需要多久？",
        answer: "取决于行业与项目规模，通常 2-6 周可完成首轮方案与融资路径。",
      },
      {
        question: "已经有业务计划书，为什么还要财务模型？",
        answer:
          "业务计划书更多描述战略，财务模型是可实时调整参数并用于压力测试的动态决策工具。",
      },
      {
        question: "你们能保证一定融到资吗？",
        answer:
          "最终决策由银行或投资者做出，但我们能确保项目按高标准完成结构化展示并显著提升获批概率。",
      },
      {
        question: "启动财务模型开发需要准备哪些资料？",
        answer:
          "通常需要项目说明、销售计划、成本结构和税制信息；缺失部分可由顾问在启动阶段协助梳理。",
      },
    ],
    faqSections: [
      {
        id: "model",
        title: "财务建模与业务计划",
        description: "聚焦模型、预算、决策与数据准备。",
        items: [
          {
            question: "开发财务模型一般多少钱？",
            answer:
              "价格通常按项目规模、业务复杂度与细节深度评估。我们会先明确目标与边界，再给出透明报价。",
          },
          {
            question: "已有业务计划书，为什么还要单独建模？",
            answer:
              "业务计划书偏静态叙述，模型则用于实时调整参数并立即看到利润、回收期和风险变化，更适合经营决策与融资沟通。",
          },
          {
            question: "模型周期多久？",
            answer:
              "简单项目可较快完成，复杂项目需要更多数据校验和情景推演。我们会在启动阶段确认里程碑与交付时间。",
          },
          {
            question: "模型交付后是否可自行修改？",
            answer:
              "可以。我们交付开放式 Excel 模型和说明文档，便于团队后续按业务变化自主更新。",
          },
        ],
      },
      {
        id: "financing",
        title: "融资与机构对接",
        description: "聚焦融资路径、成功率与服务方式。",
        items: [
          {
            question: "为什么不直接去银行？",
            answer:
              "直接申请常见问题是资料结构和谈判准备不足。我们会先把项目包装为“可融资状态”，再提高沟通效率和获批概率。",
          },
          {
            question: "你们能保证拿到资金吗？",
            answer:
              "最终决定在金融机构或投资者，但我们能保证过程专业化：结构设计、文件质量和谈判策略都按高标准执行。",
          },
          {
            question: "服务费用怎么收？",
            answer:
              "通常采用“固定服务费 + 成功酬金”组合模式。成功酬金在客户实际获得资金后结算，目标一致、结果导向。",
          },
          {
            question: "仅在阿拉木图服务吗？",
            answer:
              "不是。我们支持哈萨克斯坦全境项目，并可通过线上协同推进跨地区融资与项目落地。",
          },
        ],
      },
    ],
    wechatId: "KAZ-INVEST-TEAM",
  },
  "ru-KZ": {
    siteName: "Kaz Investment Advisory",
    slogan: "Deep expertise in Kazakhstan, bridge to Central Asia",
    ctaPrimary: "Book Consultation",
    ctaSecondary: "Download Guide",
    nav: {
      home: "Home",
      services: "Services",
      industries: "Industries",
      faq: "FAQ",
      contact: "Contact",
    },
    proofStats: [
      { label: "Core service tracks", value: "7+" },
      { label: "Industries covered", value: "4 sectors" },
      { label: "Case financing", value: "USD 15M" },
      { label: "Initial roadmap cycle", value: "2-6 weeks" },
    ],
    projectTracks: [
      {
        title: "Fundraising Projects",
        summary: "Debt or equity funding goals with investor-ready materials and negotiation support.",
        href: "/services",
      },
      {
        title: "Expansion Projects",
        summary: "New lines, new regions, or new business units with feasibility and funding analysis.",
        href: "/industries",
      },
      {
        title: "M&A Projects",
        summary: "Acquisition and restructuring support with diligence and deal-structure execution.",
        href: "/services",
      },
    ],
    labels: {
      coreStrengths: "Core Strengths",
      aboutUs: "About Us",
      viewAll: "View all",
      caseStudy: "Case Study",
      challenge: "Challenge",
      solution: "Solution",
      result: "Results",
      positioning: "Positioning & Method",
      process: "Execution Process",
      financingSources: "Financing Sources",
      serviceContent: "What We Do",
      targetClients: "Who This Is For",
      deliverables: "Deliverables",
      workMethod: "Working Method",
      cooperationFlow: "Engagement Flow",
      industryIntro:
        "Using sector databases and field experience, we evaluate market size, competition and investment attractiveness.",
      marketResearchMethod: "Research Execution Method",
      faqIntro: "High-frequency questions on financing and execution.",
      faqAll: "All",
      faqSearchPlaceholder: "Search by keyword (e.g. financing, model, timeline)",
      faqNoResults: "No matches found. Try another keyword or topic.",
      primaryAction: "Book a 30-min advisory call",
      secondaryAction: "View service solutions",
      contactTitle: "Book Consultation",
      contactIntro: "Share your project context and our team will contact you within 1 business day.",
      formName: "Name",
      formContact: "Contact (WeChat/Phone/Email)",
      formCompany: "Company / Project",
      formNeed: "Current Need",
      formSubmit: "Submit",
      formSuccess: "Received. Our team will reach out shortly.",
      formSubmitting: "Submitting...",
      formError: "Submission failed. Please retry or contact us on WeChat.",
      fitProjects: "Good Fit",
      notFitProjects: "Not Ideal Fit",
      replicableMethod: "Replicable Method",
      footerCompliance: "Compliance & Standards",
      footerCoverage: "Coverage",
      footerContact: "Contact",
      quickEntryTitle: "Quick Entry by Project Type",
      quickEntryAction: "Open",
    },
    hero: {
      title: "Execution Partner for Market Entry",
      description:
        "From pre-investment planning to legal-tax compliance and financing, we support end-to-end execution in Kazakhstan.",
    },
    positioning:
      "We treat each engagement as part of a long-term growth strategy, not a one-time consulting assignment.",
    about: [
      "International advisory team for strategy and investment execution.",
      "We support projects from idea validation to financing and transaction closing.",
    ],
    workMethod: [
      "Strategic partnership and confidentiality.",
      "Integrated analysis across finance, market and legal dimensions.",
      "Transparent process and execution discipline.",
    ],
    marketResearchSteps: [
      "Define research objectives and hypotheses.",
      "Segment demand and benchmark competitors.",
      "Translate data into actionable go-to-market guidance.",
    ],
    strengths: [
      "Government-backed local insight",
      "Trilingual communication support",
      "International-standard finance and risk control",
      "Full-cycle project execution support",
    ],
    services: [
      {
        title: "Pre-Investment",
        summary: "Business plans, market research, financial modeling and risk analysis.",
        forWho: ["Companies preparing fundraising or market entry", "Management teams evaluating new investments"],
        notForWho: ["Projects seeking template-only documents"],
      },
      {
        title: "Legal & Tax",
        summary: "Contract and corporate support, tax optimization and IP protection.",
        forWho: ["Operating entities requiring legal-tax compliance support"],
        notForWho: ["Projects attempting to bypass compliance requirements"],
      },
      {
        title: "Financing & M&A",
        summary: "Bank and institutional financing, restructuring and M&A support.",
        forWho: ["Businesses optimizing capital structure and transactions"],
        notForWho: ["Projects not ready for diligence or disclosure"],
      },
    ],
    industries: [
      { title: "Chemical Parks", summary: "Entry strategy for key industrial zones and alliances." },
      { title: "Mining & Energy", summary: "Cash-flow and policy risk analysis for major assets." },
      { title: "Agri Processing", summary: "Localization and export readiness across value chains." },
      { title: "Cross-Border Logistics", summary: "Route design and cost optimization for regional trade." },
    ],
    faqs: [
      {
        question: "Why not apply to banks directly?",
        answer:
          "Banks only review credit conditions. We make the project finance-ready before negotiations.",
      },
      {
        question: "Can the financial model be adjusted dynamically?",
        answer: "Yes, with scenario stress testing for FX, logistics and demand changes.",
      },
      {
        question: "How long does a standard engagement take?",
        answer: "Usually 2-6 weeks for first-round strategy and financing roadmap.",
      },
    ],
    faqSections: [
      {
        id: "model",
        title: "Modeling & Planning",
        description: "Questions about financial modeling and planning decisions.",
        items: [
          {
            question: "Why do I need a model if I already have a business plan?",
            answer:
              "A business plan is mostly static. A financial model is dynamic and allows instant scenario analysis for risk and return.",
          },
        ],
      },
      {
        id: "financing",
        title: "Financing & Execution",
        description: "Questions about financing process and execution support.",
        items: [
          {
            question: "Can you guarantee funding approval?",
            answer:
              "Final approval is made by lenders or investors. We maximize approval probability through structure, materials and negotiation strategy.",
          },
        ],
      },
    ],
    footerInfo: {
      compliance: ["Confidentiality-first execution", "International modeling and valuation standards"],
      coverage: ["Projects across Kazakhstan", "Remote collaboration support"],
      contact: ["WeChat: KAZ-INVEST-TEAM", "Response within 1 business day"],
    },
    wechatId: "KAZ-INVEST-TEAM",
  },
};
