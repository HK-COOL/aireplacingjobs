export type RiskLevel = 'Low' | 'Moderate' | 'High' | 'Very High';

export type ExperienceLevel =
  | 'Entry level'
  | 'Mid level'
  | 'Senior'
  | 'Manager / Lead';

export type WorkType =
  | 'Mostly digital'
  | 'Mixed digital and in-person'
  | 'Mostly physical / in-person';

export type AiUsageLevel =
  | 'Never use AI'
  | 'Use AI sometimes'
  | 'Use AI daily'
  | 'Use AI as part of my workflow';

export type TaskId =
  | 'writing-editing'
  | 'customer-questions'
  | 'data-entry'
  | 'spreadsheet-analysis'
  | 'coding-debugging'
  | 'research-summarization'
  | 'design-image'
  | 'sales-outreach'
  | 'scheduling-admin'
  | 'managing-people'
  | 'negotiation'
  | 'physical-hands-on'
  | 'in-person-care'
  | 'strategic-decisions'
  | 'compliance-accountability'
  | 'teaching-coaching'
  | 'creative-direction'
  | 'emergency-response';

export interface AiJobRiskInput {
  jobTitle: string;
  industry: string;
  experienceLevel: ExperienceLevel;
  workType: WorkType;
  taskIds: TaskId[];
  customTasks?: string;
  aiUsageLevel: AiUsageLevel;
  region?: string;
}

export interface TaskOption {
  id: TaskId;
  label: string;
  exposure: number;
  protectedReason?: string;
  exposedReason?: string;
}

export interface JobProfile {
  slug: string;
  title: string;
  aliases: string[];
  category: string;
  baseRisk: number;
  shortAnswer: string;
  whyAtRisk: string[];
  saferTasks: string[];
  skillsToLearn: string[];
  saferMoves: string[];
  relatedSlugs?: string[];
}

export interface AiJobRiskResult {
  score: number;
  riskLevel: RiskLevel;
  summary: string;
  matchedProfile?: JobProfile;
  usedFallback: boolean;
  tasksMostExposed: string[];
  tasksMoreProtected: string[];
  skillsToLearn: string[];
  careerSurvivalPlan: string[];
  saferCareerMoves: string[];
  disclaimer: string;
  validationErrors: string[];
  copyReadySummary: string;
}

export const INDUSTRIES = [
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'Legal',
  'Marketing',
  'Customer Support',
  'Manufacturing',
  'Retail',
  'Creative',
  'Government',
  'Other',
] as const;

export const EXPERIENCE_LEVELS: ExperienceLevel[] = [
  'Entry level',
  'Mid level',
  'Senior',
  'Manager / Lead',
];

export const WORK_TYPES: WorkType[] = [
  'Mostly digital',
  'Mixed digital and in-person',
  'Mostly physical / in-person',
];

export const AI_USAGE_LEVELS: AiUsageLevel[] = [
  'Never use AI',
  'Use AI sometimes',
  'Use AI daily',
  'Use AI as part of my workflow',
];

export const TASK_OPTIONS: TaskOption[] = [
  {
    id: 'writing-editing',
    label: 'Writing or editing text',
    exposure: 76,
    exposedReason: 'Text drafting and editing are already strongly supported by generative AI.',
  },
  {
    id: 'customer-questions',
    label: 'Answering customer questions',
    exposure: 78,
    exposedReason: 'Common support answers and ticket summaries are highly automatable.',
  },
  {
    id: 'data-entry',
    label: 'Data entry',
    exposure: 86,
    exposedReason: 'Structured repetitive data work is one of the most exposed task types.',
  },
  {
    id: 'spreadsheet-analysis',
    label: 'Spreadsheet analysis',
    exposure: 70,
    exposedReason: 'AI can speed up formulas, cleanup, summaries, and routine analysis.',
  },
  {
    id: 'coding-debugging',
    label: 'Coding or debugging',
    exposure: 74,
    exposedReason: 'AI coding tools can draft boilerplate, tests, fixes, and explanations.',
  },
  {
    id: 'research-summarization',
    label: 'Research and summarization',
    exposure: 72,
    exposedReason: 'Searching, summarizing, and first-draft synthesis are AI-friendly tasks.',
  },
  {
    id: 'design-image',
    label: 'Design or image creation',
    exposure: 66,
    exposedReason: 'Image and layout variants can be generated quickly, especially for routine work.',
  },
  {
    id: 'sales-outreach',
    label: 'Sales outreach',
    exposure: 64,
    exposedReason: 'Prospecting copy and follow-up drafts are increasingly automated.',
  },
  {
    id: 'scheduling-admin',
    label: 'Scheduling and admin work',
    exposure: 72,
    exposedReason: 'Calendar, coordination, and routine admin flows are rules-heavy.',
  },
  {
    id: 'managing-people',
    label: 'Managing people',
    exposure: 28,
    protectedReason: 'People leadership depends on trust, context, judgment, and accountability.',
  },
  {
    id: 'negotiation',
    label: 'Negotiation',
    exposure: 30,
    protectedReason: 'Negotiation needs live judgment, incentives, and relationship reading.',
  },
  {
    id: 'physical-hands-on',
    label: 'Physical hands-on work',
    exposure: 18,
    protectedReason: 'Hands-on physical work is less exposed to software-only AI tools.',
  },
  {
    id: 'in-person-care',
    label: 'In-person care work',
    exposure: 16,
    protectedReason: 'Care work relies on physical presence, empathy, and responsibility.',
  },
  {
    id: 'strategic-decisions',
    label: 'Strategic decision-making',
    exposure: 34,
    protectedReason: 'Strategy requires tradeoffs, ownership, and business context.',
  },
  {
    id: 'compliance-accountability',
    label: 'Compliance / legal accountability',
    exposure: 32,
    protectedReason: 'Accountability and regulated judgment remain human-heavy.',
  },
  {
    id: 'teaching-coaching',
    label: 'Teaching or coaching',
    exposure: 36,
    protectedReason: 'Coaching combines feedback, motivation, and human relationship.',
  },
  {
    id: 'creative-direction',
    label: 'Creative direction',
    exposure: 38,
    protectedReason: 'Direction is about taste, brand judgment, and choosing what matters.',
  },
  {
    id: 'emergency-response',
    label: 'Emergency response',
    exposure: 12,
    protectedReason: 'Emergency response depends on presence, coordination, and accountability.',
  },
];

export const JOB_PROFILES: JobProfile[] = [
  {
    slug: 'software-engineer',
    title: 'Software Engineer',
    aliases: ['software developer', 'developer', 'programmer', 'junior software developer'],
    category: 'Technology',
    baseRisk: 66,
    shortAnswer:
      'Software engineering is exposed to AI coding assistance, especially for boilerplate and routine debugging, but product judgment and system ownership remain valuable.',
    whyAtRisk: ['Boilerplate code generation', 'common bug fixes', 'test drafts', 'documentation drafts'],
    saferTasks: ['System design', 'product tradeoffs', 'complex production debugging', 'security decisions'],
    skillsToLearn: ['System design', 'AI-assisted coding workflow', 'debugging complex systems', 'security basics'],
    saferMoves: ['Staff engineer', 'technical product specialist', 'AI automation builder'],
    relatedSlugs: ['data-analyst', 'graphic-designer'],
  },
  {
    slug: 'accountant',
    title: 'Accountant',
    aliases: ['accounting specialist'],
    category: 'Finance',
    baseRisk: 58,
    shortAnswer:
      'Accounting tasks that are routine and rules-based are exposed to AI, but advisory, compliance judgment, and client trust remain important.',
    whyAtRisk: ['Bookkeeping automation', 'spreadsheet analysis', 'routine reports'],
    saferTasks: ['Client advisory', 'audit judgment', 'tax strategy', 'compliance accountability'],
    skillsToLearn: ['Data analysis', 'AI-assisted reporting', 'advisory communication', 'compliance expertise'],
    saferMoves: ['Financial controller', 'tax advisor', 'finance automation specialist'],
    relatedSlugs: ['financial-analyst'],
  },
  {
    slug: 'customer-service-representative',
    title: 'Customer Service Representative',
    aliases: ['support agent', 'customer support agent'],
    category: 'Customer Support',
    baseRisk: 78,
    shortAnswer:
      'Customer service is highly exposed because many repetitive questions can be handled by AI chatbots, but escalation and relationship work remain valuable.',
    whyAtRisk: ['FAQ automation', 'chatbot handling', 'ticket summarization'],
    saferTasks: ['Escalations', 'empathy', 'customer success strategy', 'complex problem solving'],
    skillsToLearn: ['Customer success', 'AI support tools', 'escalation handling', 'relationship management'],
    saferMoves: ['Customer success manager', 'support operations specialist', 'AI chatbot trainer'],
  },
  {
    slug: 'data-analyst',
    title: 'Data Analyst',
    aliases: ['business analyst', 'analytics analyst'],
    category: 'Data',
    baseRisk: 68,
    shortAnswer:
      'AI can automate parts of analysis, SQL generation, and reporting, but business context and decision support remain valuable.',
    whyAtRisk: ['Dashboard drafts', 'SQL generation', 'report summaries', 'spreadsheet analysis'],
    saferTasks: ['Business judgment', 'data quality', 'stakeholder communication', 'metric design'],
    skillsToLearn: ['Analytics engineering', 'data storytelling', 'business strategy', 'AI-assisted analysis'],
    saferMoves: ['Analytics engineer', 'decision scientist', 'data product analyst'],
    relatedSlugs: ['software-engineer', 'financial-analyst'],
  },
  {
    slug: 'copywriter',
    title: 'Copywriter',
    aliases: ['content writer', 'marketing writer'],
    category: 'Marketing',
    baseRisk: 72,
    shortAnswer:
      'Copywriting is exposed because AI can generate drafts quickly, but brand judgment, strategy, and original insight still matter.',
    whyAtRisk: ['Draft generation', 'headline variations', 'SEO content', 'ad copy variants'],
    saferTasks: ['Brand strategy', 'customer insight', 'creative direction', 'editing judgment'],
    skillsToLearn: ['Brand positioning', 'AI editing workflow', 'conversion strategy', 'content operations'],
    saferMoves: ['Brand strategist', 'content strategist', 'AI content editor'],
    relatedSlugs: ['graphic-designer', 'translator'],
  },
  {
    slug: 'graphic-designer',
    title: 'Graphic Designer',
    aliases: ['visual designer'],
    category: 'Creative',
    baseRisk: 65,
    shortAnswer:
      'AI image tools affect routine design production, but creative direction, brand systems, and client communication remain important.',
    whyAtRisk: ['Image generation', 'layout variants', 'template design'],
    saferTasks: ['Creative direction', 'brand systems', 'client interpretation', 'UX thinking'],
    skillsToLearn: ['Art direction', 'AI design workflow', 'brand systems', 'UX basics'],
    saferMoves: ['Creative director', 'brand designer', 'UX/UI designer'],
    relatedSlugs: ['copywriter', 'software-engineer'],
  },
  {
    slug: 'teacher',
    title: 'Teacher',
    aliases: ['educator', 'school teacher'],
    category: 'Education',
    baseRisk: 38,
    shortAnswer:
      'AI can assist lesson planning and grading, but in-person teaching, motivation, care, and classroom judgment are harder to replace.',
    whyAtRisk: ['Lesson drafts', 'quiz generation', 'grading assistance'],
    saferTasks: ['Student motivation', 'classroom management', 'care work', 'in-person feedback'],
    skillsToLearn: ['AI-assisted lesson planning', 'student coaching', 'curriculum design', 'classroom technology'],
    saferMoves: ['Instructional designer', 'education technology specialist', 'student success coach'],
  },
  {
    slug: 'lawyer',
    title: 'Lawyer',
    aliases: ['attorney', 'legal counsel'],
    category: 'Legal',
    baseRisk: 45,
    shortAnswer:
      'AI can assist legal research and drafting, but legal accountability, client trust, negotiation, and courtroom strategy remain protected.',
    whyAtRisk: ['Document review', 'research summaries', 'contract draft assistance'],
    saferTasks: ['Legal judgment', 'client trust', 'negotiation', 'courtroom advocacy'],
    skillsToLearn: ['AI-assisted legal research', 'client advisory', 'specialized legal expertise', 'risk judgment'],
    saferMoves: ['Legal technology specialist', 'compliance advisor', 'specialized counsel'],
  },
  {
    slug: 'financial-analyst',
    title: 'Financial Analyst',
    aliases: ['finance analyst'],
    category: 'Finance',
    baseRisk: 64,
    shortAnswer:
      'AI can accelerate research, modeling, and reporting, but investment judgment, domain context, and stakeholder trust remain important.',
    whyAtRisk: ['Report generation', 'spreadsheet modeling', 'market summaries'],
    saferTasks: ['Investment judgment', 'scenario planning', 'stakeholder communication', 'risk interpretation'],
    skillsToLearn: ['Financial modeling', 'AI-assisted research', 'data storytelling', 'risk analysis'],
    saferMoves: ['Strategic finance analyst', 'risk analyst', 'finance automation specialist'],
    relatedSlugs: ['accountant', 'data-analyst'],
  },
  {
    slug: 'translator',
    title: 'Translator',
    aliases: ['interpreter', 'language translator'],
    category: 'Language',
    baseRisk: 70,
    shortAnswer:
      'Translation is exposed because AI translation quality has improved, but specialized, cultural, legal, and live interpretation work remains more protected.',
    whyAtRisk: ['General translation', 'subtitle drafts', 'document translation'],
    saferTasks: ['Cultural nuance', 'legal translation', 'live interpretation', 'specialized terminology'],
    skillsToLearn: ['Localization strategy', 'AI-assisted translation editing', 'specialized domain expertise', 'terminology management'],
    saferMoves: ['Localization specialist', 'legal/medical translator', 'language quality manager'],
    relatedSlugs: ['copywriter'],
  },
  {
    slug: 'nurse',
    title: 'Nurse',
    aliases: ['registered nurse', 'rn'],
    category: 'Healthcare',
    baseRisk: 24,
    shortAnswer:
      'Nursing is less exposed to full replacement because it relies on in-person care, physical presence, trust, and clinical accountability.',
    whyAtRisk: ['Documentation assistance', 'triage summaries', 'patient education drafts'],
    saferTasks: ['Bedside care', 'clinical judgment', 'emotional support', 'emergency response'],
    skillsToLearn: ['Clinical informatics', 'AI-assisted documentation', 'patient communication', 'care coordination'],
    saferMoves: ['Nurse practitioner', 'clinical care coordinator', 'health informatics specialist'],
  },
  {
    slug: 'electrician',
    title: 'Electrician',
    aliases: ['electrical technician'],
    category: 'Skilled Trades',
    baseRisk: 20,
    shortAnswer:
      'Electricians are less exposed to AI replacement because the work requires site diagnosis, hands-on repair, safety judgment, and licensure.',
    whyAtRisk: ['Quote drafting', 'code lookup', 'scheduling support'],
    saferTasks: ['On-site troubleshooting', 'physical installation', 'safety decisions', 'customer trust'],
    skillsToLearn: ['Smart building systems', 'diagnostic software', 'renewable energy systems', 'code expertise'],
    saferMoves: ['Industrial electrician', 'solar technician', 'smart home specialist'],
  },
  {
    slug: 'plumber',
    title: 'Plumber',
    aliases: ['pipefitter'],
    category: 'Skilled Trades',
    baseRisk: 18,
    shortAnswer:
      'Plumbing is resilient because it depends on physical presence, site-specific diagnosis, emergency response, and skilled manual work.',
    whyAtRisk: ['Estimate drafting', 'parts lookup', 'basic scheduling'],
    saferTasks: ['Hands-on repair', 'site diagnosis', 'emergency service', 'customer trust'],
    skillsToLearn: ['Diagnostic tools', 'green plumbing systems', 'business operations', 'customer communication'],
    saferMoves: ['Master plumber', 'commercial plumbing specialist', 'home services owner'],
  },
];

const DISCLAIMER =
  'This tool estimates AI exposure based on your job title and daily tasks. It is not a guaranteed job loss prediction. AI usually changes tasks before it replaces entire jobs.';

export function clampScore(score: number): number {
  return Math.min(100, Math.max(0, Math.round(score)));
}

export function getRiskLevel(score: number): RiskLevel {
  if (score >= 78) return 'Very High';
  if (score >= 60) return 'High';
  if (score >= 35) return 'Moderate';
  return 'Low';
}

export function slugifyJobTitle(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getJobProfile(jobTitleOrSlug: string): JobProfile | undefined {
  const normalized = slugifyJobTitle(jobTitleOrSlug);
  const plain = jobTitleOrSlug.trim().toLowerCase();

  return JOB_PROFILES.find((profile) => {
    if (profile.slug === normalized) return true;
    if (slugifyJobTitle(profile.title) === normalized) return true;
    return profile.aliases.some(
      (alias) => slugifyJobTitle(alias) === normalized || alias.toLowerCase() === plain
    );
  });
}

export function getTaskRiskBreakdown(input: AiJobRiskInput) {
  const selected = TASK_OPTIONS.filter((task) => input.taskIds.includes(task.id));
  const exposed = selected
    .filter((task) => task.exposure >= 60)
    .sort((a, b) => b.exposure - a.exposure);
  const protectedTasks = selected
    .filter((task) => task.exposure <= 40)
    .sort((a, b) => a.exposure - b.exposure);

  return {
    selected,
    exposed,
    protectedTasks,
    averageExposure:
      selected.length > 0
        ? selected.reduce((sum, task) => sum + task.exposure, 0) / selected.length
        : 50,
  };
}

function getWorkTypeAdjustment(workType: WorkType) {
  if (workType === 'Mostly digital') return 10;
  if (workType === 'Mostly physical / in-person') return -16;
  return -2;
}

function getExperienceAdjustment(level: ExperienceLevel) {
  if (level === 'Entry level') return 8;
  if (level === 'Senior') return -5;
  if (level === 'Manager / Lead') return -9;
  return 0;
}

function getAiUsageAdjustment(level: AiUsageLevel) {
  if (level === 'Use AI as part of my workflow') return -6;
  if (level === 'Use AI daily') return -4;
  if (level === 'Use AI sometimes') return -2;
  return 3;
}

function fallbackSkills(input: AiJobRiskInput): string[] {
  const skills = ['AI-assisted workflow', 'critical thinking', 'communication'];
  if (input.workType === 'Mostly digital') {
    skills.push('data literacy', 'workflow automation');
  }
  if (input.taskIds.includes('customer-questions') || input.taskIds.includes('managing-people')) {
    skills.push('relationship management');
  }
  if (input.taskIds.includes('coding-debugging')) {
    skills.push('system design');
  }
  if (input.taskIds.includes('compliance-accountability')) {
    skills.push('risk judgment');
  }
  return [...new Set(skills)].slice(0, 6);
}

export function generateCareerPlan(result: Pick<AiJobRiskResult, 'riskLevel'>, input?: AiJobRiskInput) {
  const plan =
    result.riskLevel === 'Very High'
      ? [
          'Use AI daily for the tasks it can already accelerate, so you become the operator instead of the displaced task owner.',
          'Move toward work that includes business context, accountability, client trust, or complex judgment.',
          'Build one portfolio project that shows AI-assisted productivity plus human review.',
        ]
      : result.riskLevel === 'High'
        ? [
            'Identify the 2-3 repeatable tasks AI can compress and redesign your workflow around them.',
            'Strengthen judgment-heavy parts of the role, such as stakeholder communication and quality control.',
            'Create a 90-day skill plan that combines AI fluency with domain expertise.',
          ]
        : result.riskLevel === 'Moderate'
          ? [
              'Adopt AI for routine drafting, summarizing, and planning while protecting human-centered parts of the role.',
              'Document the decisions and interpersonal work that AI cannot fully own.',
              'Learn one adjacent tool or process that increases your leverage.',
            ]
          : [
              'Keep using AI as an assistant for documentation, planning, and learning.',
              'Protect the hands-on, care-based, or accountability-heavy parts of your work.',
              'Look for small ways to combine human trust with better digital workflows.',
            ];

  if (input?.experienceLevel === 'Entry level') {
    return [
      ...plan,
      'As an entry-level worker, prioritize supervised practice, feedback loops, and examples of judgment beyond routine task completion.',
    ];
  }

  return plan;
}

function validateInput(input: AiJobRiskInput): string[] {
  const errors: string[] = [];
  if (!input.jobTitle.trim()) {
    errors.push('Please enter a job title.');
  }
  if (!input.taskIds || input.taskIds.length < 3) {
    errors.push('Select at least 3 daily tasks for a more useful estimate.');
  }
  return errors;
}

export function calculateAiJobRisk(input: AiJobRiskInput): AiJobRiskResult {
  const validationErrors = validateInput(input);
  const matchedProfile = getJobProfile(input.jobTitle);
  const breakdown = getTaskRiskBreakdown(input);
  const baseRisk = matchedProfile?.baseRisk ?? 50;

  const rawScore =
    baseRisk * 0.45 +
    breakdown.averageExposure * 0.35 +
    getWorkTypeAdjustment(input.workType) +
    getExperienceAdjustment(input.experienceLevel) +
    getAiUsageAdjustment(input.aiUsageLevel) +
    (input.customTasks?.trim() ? 2 : 0);

  const score = validationErrors.length > 0 ? 0 : clampScore(rawScore);
  const riskLevel = getRiskLevel(score);
  const profileText = matchedProfile
    ? matchedProfile.shortAnswer
    : 'We could not match this exact job title, so the estimate is based mostly on your selected tasks and work style.';

  const tasksMostExposed = [
    ...breakdown.exposed.map((task) => task.label),
    ...(matchedProfile?.whyAtRisk ?? []),
  ]
    .filter(Boolean)
    .slice(0, 6);

  const tasksMoreProtected = [
    ...breakdown.protectedTasks.map((task) => task.label),
    ...(matchedProfile?.saferTasks ?? []),
  ]
    .filter(Boolean)
    .slice(0, 6);

  const skillsToLearn = matchedProfile?.skillsToLearn ?? fallbackSkills(input);
  const saferCareerMoves =
    matchedProfile?.saferMoves ??
    ['AI workflow specialist', 'operations lead', 'domain expert with AI fluency'];

  const summary =
    validationErrors.length > 0
      ? 'Enter your job title and select your daily tasks to see how exposed your work is to AI.'
      : `${profileText} Your selected tasks suggest a ${riskLevel.toLowerCase()} AI exposure estimate, especially where work is digital, repeatable, text-heavy, data-heavy, or rules-based.`;

  const careerSurvivalPlan = generateCareerPlan({ riskLevel }, input);
  const copyReadySummary = validationErrors.length
    ? ''
    : [
        `AI Exposure Score: ${score}/100`,
        `Replacement Risk: ${riskLevel}`,
        '',
        `Summary: ${summary}`,
        '',
        `Tasks most exposed: ${tasksMostExposed.join('; ') || 'No high-exposure tasks selected.'}`,
        `More protected tasks: ${tasksMoreProtected.join('; ') || 'Add human-centered or hands-on tasks to compare exposure.'}`,
        `Skills to learn: ${skillsToLearn.join('; ')}`,
        `Career survival plan: ${careerSurvivalPlan.join(' ')}`,
        '',
        DISCLAIMER,
      ].join('\n');

  return {
    score,
    riskLevel,
    summary,
    matchedProfile,
    usedFallback: !matchedProfile,
    tasksMostExposed,
    tasksMoreProtected,
    skillsToLearn,
    careerSurvivalPlan,
    saferCareerMoves,
    disclaimer: DISCLAIMER,
    validationErrors,
    copyReadySummary,
  };
}
