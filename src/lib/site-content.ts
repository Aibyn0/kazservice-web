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
  nav: {
    home: string;
    services: string;
    industries: string;
    faq: string;
    contact: string;
  };
  proofStats?: Array<{ label: string; value: string }>;
  /** Hero 右侧 3 张数据卡（设计稿）；未设置时取 proofStats 前 3 条 */
  heroStats?: Array<{ label: string; value: string }>;
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
    wechatFab: string;
    wechatTitle: string;
    wechatClose: string;
    wechatScan: string;
    wechatMobileHint: string;
    wechatCopy: string;
    wechatCopied: string;
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
    siteName: "SINOMAR INVESTMENT LTD",
    slogan: "深耕哈萨克斯坦市场 · 助力企业稳健增长",
    nav: {
      home: "首页",
      services: "服务详情",
      industries: "行业视角",
      faq: "常见问题",
      contact: "预约咨询",
    },
    heroStats: [
      { label: "本地服务经验", value: "15+ 年" },
      { label: "成功落地项目", value: "50+ 个" },
      { label: "典型项目案例", value: "USD 15M+" },
    ],
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
      primaryAction: "预约咨询",
      secondaryAction: "了解服务详情",
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
      wechatFab: "微信咨询",
      wechatTitle: "微信咨询",
      wechatClose: "收起",
      wechatScan: "使用微信扫一扫",
      wechatMobileHint: "复制微信号后，打开微信 → 添加朋友 → 搜索账号",
      wechatCopy: "复制微信号",
      wechatCopied: "已复制",
    },
    hero: {
      title: "哈萨克斯坦投资全周期咨询",
      description:
        "从市场准入到运营落地，我们是中国投资者在哈萨克斯坦的长期合作伙伴。",
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
      contact: ["微信：NeverGiveUpp23", "咨询响应：1个工作日内", "可预约30分钟免费初评"],
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
    wechatId: "NeverGiveUpp23",
  },
  "en-US": {
    siteName: "SINOMAR INVESTMENT LTD",
    slogan: "Deep expertise in Kazakhstan, bridge to Central Asia",
    nav: {
      home: "Home",
      services: "Services",
      industries: "Industries",
      faq: "FAQ",
      contact: "Contact",
    },
    heroStats: [
      { label: "Local market experience", value: "15+ yrs" },
      { label: "Projects delivered", value: "50+" },
      { label: "Flagship case size", value: "USD 15M+" },
    ],
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
      wechatFab: "WeChat",
      wechatTitle: "Contact on WeChat",
      wechatClose: "Close",
      wechatScan: "Scan with WeChat on your phone",
      wechatMobileHint: "Copy the ID, then open WeChat → Add Contacts → Search",
      wechatCopy: "Copy WeChat ID",
      wechatCopied: "Copied",
    },
    hero: {
      title: "Execution Partner for Market Entry",
      description:
        "From pre-investment planning to legal-tax compliance and financing, we support end-to-end execution in Kazakhstan.",
    },
    positioning:
      "We don’t deliver “one-off reports.” We build investor-ready strategy, numbers and execution—so your project becomes finance-ready and bankable in the real world.",
    about: [
      "International investment advisory team focused on Kazakhstan and Central Asia.",
      "We walk with you across the full cycle—from an investment idea to capital structuring and transaction closing.",
      "We turn uncertainty into a decision: clear scenarios, measurable KPIs, and a plan your stakeholders can execute.",
    ],
    workMethod: [
      "Strategic partnership: we act as your external CFO/finance lead when needed.",
      "Confidentiality by default: sensitive data is handled under strict ethics and protection principles.",
      "Cross-discipline analysis: finance, market, legal, tax and investment angles in one narrative.",
      "Transparent process: clear milestones, deliverables and feedback loops—no black-box consulting.",
    ],
    processSteps: [
      "Discovery: align on goals, constraints and stakeholder expectations.",
      "Modeling: build a driver-based financial model with scenarios and stress tests.",
      "Packaging: craft an investor/bank-ready story (BP, teaser, key exhibits).",
      "Execution: lender/investor outreach, negotiation support and term optimization.",
      "Post-close: connect the model to management accounting for KPI tracking and iteration.",
    ],
    marketResearchSteps: [
      "Define decision questions (what must be true for the project to work).",
      "Map demand, pricing and competitors—then identify the real drivers of profitability.",
      "Turn findings into a market-entry plan: channels, partners, risk controls and KPIs.",
    ],
    financingSources: [
      "Kazakhstan second-tier banks (STB): working capital & capex loans",
      "National development institutions: Damu Fund, Development Bank of Kazakhstan (DBK)",
      "International financial institutions: EBRD, ADB, etc.",
      "Private investors and funds",
      "Mezzanine, bridge financing, refinancing and restructuring options",
    ],
    caseStudy: {
      title: "Logistics Holding—Investor-Ready Financial Model",
      challenge:
        "A large logistics group needed a transparent, international-standard model that investors could trust—and update live during negotiations.",
      solution: [
        "Built a driver-based Excel model with automated NPV, IRR and payback calculations.",
        "Stress-tested the business under FX shocks and logistics cost swings.",
        "Prepared three negotiation-ready scenarios: downside, base and upside.",
      ],
      result: [
        "Attracted USD 15M in foreign investment thanks to transparency and credible assumptions.",
        "Embedded the model into management accounting to track daily KPIs and performance.",
      ],
      method: [
        "Start with consistent drivers and traceable inputs so every number can be explained.",
        "Run scenario stress tests to reveal trigger points and mitigation levers.",
        "Operationalize the model as a living KPI tool—not a static file.",
      ],
    },
    strengths: [
      "Government-backed local insight",
      "Trilingual communication support",
      "International-standard finance and risk control",
      "Full-cycle project execution support",
    ],
    services: [
      {
        title: "Pre-Investment",
        summary:
          "Make the investment decisionable: business plan, market research, driver-based financial model and risk map—built to meet Kazakhstan lenders’ expectations.",
        details: [
          "Loan-ready business plan aligned with local bank standards and review logic.",
          "Market research across key sectors with competitor and pricing benchmarks.",
          "Financial modeling with NPV/IRR/payback, multi-scenario forecasting and stress testing.",
        ],
        forWho: [
          "Project companies preparing to raise debt or equity financing",
          "Teams expanding capacity, entering new regions or launching new business units",
          "Owners and management who need a clear risk-return decision framework",
        ],
        notForWho: [
          "Projects that only need a generic template document",
          "Teams unwilling to validate assumptions with basic data and market checks",
        ],
        deliverables: [
          "Bank/investor-ready business plan and financial model",
          "Market and investment attractiveness conclusions you can defend in meetings",
          "KPI set + risk mitigation recommendations",
        ],
      },
      {
        title: "Legal & Tax",
        summary:
          "Stay compliant while moving fast: contracts, corporate structuring, tax planning and regulator interaction—so execution doesn’t break on legal/tax risks.",
        details: [
          "Legal support: contract drafting/review, corporate changes, disputes and representation.",
          "Tax support: filings, lawful optimization, audit readiness and risk control.",
          "Special support: trademark/IP, permits, visas and delegation hosting.",
        ],
        forWho: [
          "Companies registering or restructuring entities in Kazakhstan",
          "Operations teams managing complex counterparties and contracts",
          "Projects needing tax-risk protection and audit/inspection support",
        ],
        notForWho: ["Projects attempting to bypass compliance requirements", "One-off legal texts without execution support"],
        deliverables: ["Contract risk checklist and templates", "Tax compliance calendar + optimization roadmap", "Regulator/audit support plan"],
      },
      {
        title: "Financing & M&A",
        summary:
          "From capital strategy to closing: financing structuring, investor outreach, negotiation and M&A execution—built for complex deals and real-world constraints.",
        details: [
          "Funding channels: STB, Damu, DBK, EBRD, ADB and private capital.",
          "Deal support: debt/equity, restructuring, mezzanine & bridge solutions.",
          "M&A: valuation, deal structure, negotiation and closing support.",
        ],
        forWho: [
          "Businesses optimizing capital structure and lowering financing cost",
          "Shareholders and management planning acquisitions or restructuring",
          "Sponsors needing end-to-end negotiation and closing support",
        ],
        notForWho: ["Projects not ready for diligence or disclosure", "Projects unwilling to open a negotiation window"],
        deliverables: ["Financing roadmap + lender/investor shortlist", "Teaser & negotiation points + term guidance", "Execution support through funding receipt/closing"],
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
        question: "Why not go to a bank directly?",
        answer:
          "Banks evaluate— they don’t package projects. We make your project finance-ready so you can defend assumptions and terms in real negotiations.",
      },
      {
        question: "How long does a typical engagement take?",
        answer:
          "Most projects reach a first investor/bank-ready roadmap in 2–6 weeks, depending on data readiness and complexity.",
      },
      {
        question: "Can you guarantee funding approval?",
        answer:
          "No one can guarantee approval. What we guarantee is the standard of structure, materials and negotiation readiness that materially improves approval probability.",
      },
    ],
    faqSections: [
      {
        id: "model",
        title: "Modeling & Business Planning",
        description: "Pricing, timeline, inputs—how we build a model that lenders and investors trust.",
        items: [
          {
            question: "Why build a financial model if I already have a business plan?",
            answer:
              "A plan explains the story. A model proves the story. You can change price/volume/cost assumptions live and immediately see the impact on profitability, payback and risk.",
          },
          {
            question: "What determines the cost of a financial model?",
            answer:
              "Scope and complexity: number of business lines, level of detail, scenario depth, and whether it’s built for bank approval or equity investment.",
          },
          {
            question: "How long does it take?",
            answer:
              "Simple models can be delivered quickly; complex projects require deeper data validation. We align on milestones at kickoff to balance speed and quality.",
          },
        ],
      },
      {
        id: "financing",
        title: "Financing & Deal Execution",
        description: "How we structure financing, negotiate terms and drive closing.",
        items: [
          {
            question: "Can you guarantee the financing will be approved?",
            answer:
              "Approval is always the lender/investor’s decision. What we guarantee is the standard: structure, documentation and negotiation readiness—so your approval probability increases materially.",
          },
          {
            question: "Why work with you instead of going to a bank directly?",
            answer:
              "Because banks don’t fix projects—they evaluate them. We make your project finance-ready, anticipate objections, and help you defend the numbers in negotiation.",
          },
          {
            question: "How do you charge?",
            answer:
              "Typically a combination of a fixed fee (work scope) plus a success fee (paid only after funding is received). This keeps incentives aligned.",
          },
        ],
      },
    ],
    footerInfo: {
      compliance: [
        "Confidentiality-first execution and ethics",
        "International-standard modeling and analysis",
        "Transparent milestones and deliverables",
      ],
      coverage: ["Projects across Kazakhstan", "Remote delivery and cross-region coordination", "Trilingual support (CN/RU/EN)"],
      contact: ["WeChat: NeverGiveUpp23", "Response within 1 business day", "Book a free 30-min initial review"],
    },
    wechatId: "NeverGiveUpp23",
  },
  "ru-RU": {
    siteName: "SINOMAR INVESTMENT LTD",
    slogan: "Экспертиза по Казахстану — мост к возможностям Центральной Азии",
    nav: {
      home: "Главная",
      services: "Услуги",
      industries: "Отрасли",
      faq: "FAQ",
      contact: "Контакт",
    },
    heroStats: [
      { label: "Опыт на рынке", value: "15+ лет" },
      { label: "Реализованных проектов", value: "50+" },
      { label: "Типовой кейс", value: "USD 15M+" },
    ],
    proofStats: [
      { label: "Ключевых направлений", value: "7+" },
      { label: "Отраслей", value: "4" },
      { label: "Кейс финансирования", value: "USD 15M" },
      { label: "Срок первичного плана", value: "2–6 недель" },
    ],
    projectTracks: [
      {
        title: "Проекты по привлечению финансирования",
        summary: "Долговое/долевое финансирование: материалы для инвесторов и сопровождение переговоров.",
        href: "/services",
      },
      {
        title: "Проекты расширения",
        summary: "Новые линии и регионы: оценка эффективности и финансовая модель.",
        href: "/industries",
      },
      {
        title: "Сделки M&A",
        summary: "Покупка активов и реструктуризация: due diligence и структура сделки.",
        href: "/services",
      },
    ],
    labels: {
      coreStrengths: "Ключевые преимущества",
      aboutUs: "О нас",
      viewAll: "Смотреть все",
      caseStudy: "Кейс",
      challenge: "Задача",
      solution: "Решение",
      result: "Результат",
      positioning: "Подход",
      process: "Процесс",
      financingSources: "Источники финансирования",
      serviceContent: "Что делаем",
      targetClients: "Для кого",
      deliverables: "Результаты",
      workMethod: "Метод работы",
      cooperationFlow: "Этапы",
      industryIntro:
        "Опираясь на отраслевые базы и практический опыт, оцениваем рынок, конкуренцию и инвестиционную привлекательность.",
      marketResearchMethod: "Методика исследования рынка",
      faqIntro: "Частые вопросы по финансированию и реализации проектов.",
      faqAll: "Все",
      primaryAction: "Бесплатная первичная оценка (30 мин)",
      secondaryAction: "Смотреть услуги",
      contactTitle: "Связаться",
      contactIntro: "Опишите проект — мы свяжемся с вами в течение 1 рабочего дня.",
      formName: "Имя",
      formContact: "Контакт (WeChat/телефон/email)",
      formCompany: "Компания / Проект",
      formNeed: "Запрос",
      formSubmit: "Отправить",
      formSuccess: "Заявка получена. Мы свяжемся с вами в ближайшее время.",
      formSubmitting: "Отправка...",
      formError: "Не удалось отправить. Повторите позже или напишите в WeChat.",
      fitProjects: "Подходит",
      notFitProjects: "Не подходит",
      replicableMethod: "Повторяемый метод",
      footerCompliance: "Стандарты и комплаенс",
      footerCoverage: "География",
      footerContact: "Контакты",
      quickEntryTitle: "Быстрый вход по типу проекта",
      quickEntryAction: "Открыть",
      wechatFab: "WeChat",
      wechatTitle: "Консультация в WeChat",
      wechatClose: "Свернуть",
      wechatScan: "Отсканируйте QR-код в WeChat",
      wechatMobileHint: "Скопируйте ID → WeChat → Добавить → Поиск",
      wechatCopy: "Скопировать ID",
      wechatCopied: "Скопировано",
    },
    hero: {
      title: "Партнёр по реализации и входу на рынок",
      description:
        "От предпроектной подготовки до юридико-налогового сопровождения и привлечения капитала — полный цикл поддержки в Казахстане.",
    },
    positioning:
      "Мы не продаём «разовые отчёты». Мы делаем проект finance‑ready: стратегия, цифры и исполнение, чтобы инвестор и банк видели логику, риски и управляемость.",
    about: [
      "Международная команда инвестиционного консалтинга по Казахстану и Центральной Азии.",
      "Сопровождаем полный цикл — от идеи и проверки гипотез до структуры капитала и закрытия сделки.",
      "Помогаем превратить неопределённость в решение: сценарии, KPI и план, который можно реализовать.",
    ],
    workMethod: [
      "Партнёрский подход: при необходимости работаем как внешний CFO/финансовый лидер проекта.",
      "Конфиденциальность по умолчанию: строгая этика и защита чувствительных данных.",
      "Комплексная экспертиза: финансы, рынок, право, налоги и инвестиционная логика в единой истории.",
      "Прозрачный процесс: этапы, результаты и регулярная синхронизация без «чёрного ящика».",
    ],
    processSteps: [
      "Диагностика: цели, ограничения, ожидания стейкхолдеров.",
      "Моделирование: драйверная модель + сценарии и стресс‑тесты.",
      "Упаковка: бизнес‑план, teaser и ключевые материалы для инвестора/банка.",
      "Исполнение: поиск источников, сопровождение переговоров, оптимизация условий.",
      "После закрытия: внедрение модели в управленческий учёт и KPI‑контроль.",
    ],
    marketResearchSteps: [
      "Формулируем вопросы решения (что должно быть верно, чтобы проект работал).",
      "Оцениваем спрос, цены и конкурентов — выявляем реальные драйверы маржи и окупаемости.",
      "Переводим выводы в план выхода на рынок: каналы, партнёры, риски и KPI.",
    ],
    strengths: [
      "Локальная экспертиза и понимание правил рынка",
      "Трёхъязычная коммуникация",
      "Международные стандарты финансового анализа",
      "Полный цикл сопровождения",
    ],
    services: [
      {
        title: "Прединвестиционная подготовка",
        summary:
          "Делаем инвестиционное решение «считаемым»: бизнес‑план, исследование рынка, драйверная модель и карта рисков — под логику проверки банков и инвесторов.",
        details: [
          "Бизнес‑план под требования кредиторов в Казахстане и их логику анализа.",
          "Исследование рынка по ключевым секторам с бенчмарками конкурентов и цен.",
          "Финмодель с NPV/IRR/сроком окупаемости, сценариями и стресс‑тестами.",
        ],
        forWho: [
          "Проектные компании, готовящиеся к долгу или equity",
          "Команды расширения: новые линии, регионы или бизнес‑направления",
          "Собственники и менеджмент, которым нужна понятная рамка риск‑доходность",
        ],
        notForWho: [
          "Проекты «нужен только шаблон» без проверки допущений",
          "Команды, которые не готовы подтвердить базовые данные и гипотезы",
        ],
        deliverables: [
          "Бизнес‑план и финмодель уровня bank/investor‑ready",
          "Выводы по инвестиционной привлекательности, которые можно защищать на переговорах",
          "KPI и рекомендации по снижению рисков",
        ],
      },
      {
        title: "Юридическое и налоговое сопровождение",
        summary:
          "Комплаенс без тормозов: контракты, структура, налоги и взаимодействие с органами — чтобы исполнение не «сломалось» на юридико‑налоговых рисках.",
        details: [
          "Право: договорная работа, корпоративные изменения, споры и представительство.",
          "Налоги: отчётность, законная оптимизация, готовность к проверкам и контроль рисков.",
          "Спецподдержка: товарные знаки/IP, разрешения, визы и приём делегаций.",
        ],
        forWho: [
          "Компании, регистрирующие/реструктурирующие бизнес в Казахстане",
          "Операционные команды со сложными контрагентами и контрактами",
          "Проекты, которым важно снизить налоговые риски и спокойно проходить проверки",
        ],
        notForWho: ["Проекты, пытающиеся обойти комплаенс", "Только разовый юридический текст без сопровождения"],
        deliverables: ["Чек‑лист рисков и шаблоны договоров", "Налоговый календарь + дорожная карта оптимизации", "План сопровождения проверок/регуляторов"],
      },
      {
        title: "Финансирование и M&A",
        summary:
          "От стратегии капитала до закрытия сделки: структура, поиск источников, переговоры и сопровождение M&A — для сложных проектов и реальных ограничений.",
        details: [
          "Каналы: STB, Damu, DBK, EBRD, ADB и частный капитал.",
          "Инструменты: долг/equity, реструктуризация, mezzanine и bridge‑решения.",
          "M&A: оценка, структура, переговоры и закрытие.",
        ],
        forWho: [
          "Компании, оптимизирующие структуру капитала и стоимость финансирования",
          "Акционеры и менеджмент, планирующие приобретение активов или реструктуризацию",
          "Спонсоры, которым нужно сопровождение переговоров до закрытия",
        ],
        notForWho: ["Проекты, не готовые к due diligence/раскрытию", "Проекты без окна переговоров"],
        deliverables: ["Дорожная карта финансирования + shortlist источников", "Teaser и позиция по условиям/терм‑листу", "Сопровождение до получения средств/закрытия"],
      },
    ],
    industries: [
      { title: "Химические парки", summary: "Стратегия входа и кооперация в ключевых промзонах." },
      { title: "Горнодобыча и энергетика", summary: "Анализ cash‑flow и рисков для крупных активов." },
      { title: "Агропереработка", summary: "Локализация и экспортная готовность цепочек." },
      { title: "Трансграничная логистика", summary: "Маршруты и оптимизация затрат региональной торговли." },
    ],
    faqs: [
      {
        question: "Почему не пойти в банк напрямую?",
        answer:
          "Банк оценивает проект, но не «упаковывает» его. Мы доводим проект до состояния finance‑ready, чтобы вы могли защитить допущения и условия на переговорах.",
      },
      {
        question: "Сколько длится типовой проект?",
        answer:
          "Чаще всего первичная дорожная карта и пакет материалов уровня investor/bank‑ready формируются за 2–6 недель — в зависимости от данных и сложности.",
      },
      {
        question: "Можно ли гарантировать получение финансирования?",
        answer:
          "Гарантий одобрения не даёт никто — решение за инвестором/кредитором. Мы гарантируем стандарт подготовки: структура, документы и переговорная стратегия, которые повышают вероятность результата.",
      },
    ],
    faqSections: [
      {
        id: "model",
        title: "Финмоделирование и бизнес‑план",
        description: "Стоимость, сроки, входные данные — как делаем модель, которой доверяют банки и инвесторы.",
        items: [
          {
            question: "Зачем нужна модель, если есть бизнес‑план?",
            answer:
              "План — это история. Модель — доказательство. Вы меняете цену/объём/затраты и сразу видите влияние на прибыль, окупаемость и риски.",
          },
          {
            question: "От чего зависит стоимость модели?",
            answer:
              "От масштаба и сложности: количество линий бизнеса, глубина детализации, число сценариев и то, для кого делается модель — банк или инвестор.",
          },
          {
            question: "Сколько времени занимает разработка?",
            answer:
              "Простые модели делаются быстро, сложным проектам нужна валидация данных и сценарии. На старте фиксируем этапы и сроки.",
          },
        ],
      },
      {
        id: "financing",
        title: "Финансирование и закрытие сделки",
        description: "Структура, переговоры и доведение до результата.",
        items: [
          {
            question: "Можете гарантировать получение финансирования?",
            answer:
              "Решение всегда за инвестором/кредитором. Мы гарантируем уровень подготовки: структура, документы и переговорная стратегия, которые заметно повышают вероятность одобрения.",
          },
          {
            question: "Почему вы, а не прямой поход в банк?",
            answer:
              "Банк не «улучшает» проект — он его оценивает. Мы делаем проект finance‑ready, заранее закрываем вопросы и помогаем защитить цифры на переговорах.",
          },
          {
            question: "Как вы берёте оплату?",
            answer:
              "Чаще всего это фиксированная часть за объём работ + success fee (оплачивается после фактического получения средств). Это выравнивает мотивацию на результат.",
          },
        ],
      },
    ],
    footerInfo: {
      compliance: ["Конфиденциальность и этика", "Международные стандарты моделирования и анализа", "Прозрачные этапы и результаты"],
      coverage: ["Проекты по всему Казахстану", "Удалённая работа и межрегиональная координация", "Поддержка на RU/EN/CN"],
      contact: ["WeChat: NeverGiveUpp23", "Ответ в течение 1 рабочего дня", "Бесплатная первичная оценка 30 минут"],
    },
    wechatId: "NeverGiveUpp23",
  },
};
