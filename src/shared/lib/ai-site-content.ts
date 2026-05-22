import { JOB_PROFILES } from './ai-job-risk';

export interface ResourcePageContent {
  eyebrow: string;
  title: string;
  intro: string;
  shortAnswer: string;
  bullets: string[];
  tableTitle?: string;
  tableHeaders?: string[];
  rows?: string[][];
  faq: { question: string; answer: string }[];
  citations?: { label: string; url: string }[];
}

export const exposedJobs = [
  ['Data entry clerk', 'Very high', 'Structured entry, cleanup, reconciliation', 'Move toward QA, workflow ops, or data stewardship'],
  ['Customer service representative', 'High', 'FAQ answers, ticket summaries, routing', 'Build escalation, customer success, and AI support ops skills'],
  ['Bookkeeper', 'High', 'Categorization, routine reporting, reconciliation', 'Move toward advisory, compliance, and automation oversight'],
  ['Copywriter', 'High', 'Drafts, variants, SEO briefs, ad copy', 'Build brand strategy, research, and conversion judgment'],
  ['Translator', 'High', 'General translation and subtitle drafts', 'Specialize in legal, medical, cultural, or live interpretation'],
  ['Junior software developer', 'High', 'Boilerplate, tests, common bugs, docs', 'Strengthen product context, architecture, and debugging'],
  ['Paralegal', 'High', 'Document review, summaries, research drafts', 'Build client context, procedure, and compliance judgment'],
  ['Financial analyst', 'Moderate to high', 'Market summaries, spreadsheet drafts, reports', 'Own assumptions, scenarios, and stakeholder decisions'],
  ['Graphic designer', 'Moderate to high', 'Variants, image generation, templates', 'Move toward creative direction, brand systems, and UX'],
  ['Administrative assistant', 'High', 'Scheduling, drafting, coordination, data cleanup', 'Build operations ownership and relationship management'],
];

export const saferJobs = [
  ['Nurse', 'In-person care, trust, and clinical accountability', 'AI assists documentation and triage, not bedside care', 'Clinical informatics and care coordination'],
  ['Electrician', 'Hands-on physical work and safety judgment', 'AI can help with lookup and estimates', 'Smart building and renewable systems'],
  ['Plumber', 'Site-specific diagnosis and emergency repair', 'AI can support scheduling and quoting', 'Commercial systems and business operations'],
  ['Physical therapist', 'Hands-on treatment and patient motivation', 'AI can support plans and notes', 'Specialized care and patient coaching'],
  ['Emergency responder', 'Physical presence and high-stakes action', 'AI can assist dispatch and documentation', 'Advanced response coordination'],
  ['Teacher', 'Motivation, classroom judgment, and care', 'AI assists planning and grading', 'Instructional design and AI-assisted teaching'],
  ['Manager / people leader', 'Trust, conflict resolution, and accountability', 'AI assists reporting and planning', 'Coaching and change leadership'],
  ['Healthcare worker', 'Human care and regulated responsibility', 'AI supports admin and summaries', 'Care coordination and clinical technology'],
];

export const resourcePages: Record<string, ResourcePageContent> = {
  jobsAiWillReplace: {
    eyebrow: 'AI exposure list',
    title: 'Jobs AI Will Replace or Change the Most',
    intro:
      'The highest-risk jobs are usually not entire careers disappearing overnight. They are roles with many tasks that are digital, repetitive, text-heavy, data-heavy, or rules-based.',
    shortAnswer:
      'AI is most likely to replace or compress tasks first: data entry, routine customer support, basic content drafts, simple analysis, and repeatable admin workflows.',
    bullets: [
      'Look for repeatable tasks with clear inputs and outputs.',
      'Separate task exposure from total job loss risk.',
      'Use the checker to compare your own daily work against the generic job list.',
    ],
    tableTitle: 'Jobs most exposed to AI task automation',
    tableHeaders: ['Job', 'Risk', 'Exposed tasks', 'Safer move'],
    rows: exposedJobs,
    faq: [
      {
        question: 'What jobs will AI replace first?',
        answer:
          'AI is likely to affect roles with repetitive digital tasks first, including data entry, routine support, basic drafting, and structured analysis. That does not mean every worker in those roles will lose a job.',
      },
      {
        question: 'Does high exposure mean the job is doomed?',
        answer:
          'No. High exposure means many tasks can be assisted or automated. Workers can still move toward judgment, ownership, client trust, and AI-enabled workflow design.',
      },
    ],
  },
  jobsSafeFromAi: {
    eyebrow: 'Resilient careers',
    title: 'Jobs Safe From AI: Careers Less Likely to Be Replaced',
    intro:
      'No job is completely AI-proof, but some roles are more resilient because they depend on physical presence, human trust, care, emergency response, leadership, or accountability.',
    shortAnswer:
      'Jobs are safer from AI when the value comes from being physically present, making accountable decisions, earning trust, or handling unpredictable human situations.',
    bullets: [
      'Physical and care work tends to be more resilient than pure screen work.',
      'Human trust and regulated accountability protect many roles.',
      'Even safer jobs can use AI for documentation, planning, and training.',
    ],
    tableTitle: 'Jobs less likely to be fully replaced by AI',
    tableHeaders: ['Job', 'Why safer', 'AI impact', 'Skills to build'],
    rows: saferJobs,
    faq: [
      {
        question: 'What jobs are safest from AI?',
        answer:
          'Roles involving hands-on work, in-person care, emergency response, trust, leadership, or regulated accountability are generally less exposed to full replacement.',
      },
      {
        question: 'Can safe jobs still be affected by AI?',
        answer:
          'Yes. AI can still change documentation, planning, training, and admin work inside safer jobs.',
      },
    ],
  },
  willAiTakeMyJob: {
    eyebrow: 'Personal risk guide',
    title: 'Will AI Take My Job? How to Estimate Your Risk',
    intro:
      'The better question is not only whether AI can do your job title. It is which parts of your weekly work can be done faster by AI, and which parts still depend on you.',
    shortAnswer:
      'AI usually changes tasks before it replaces entire jobs. Your risk is higher when most of your work is digital, repeatable, rules-based, and easy to check.',
    bullets: [
      'Higher exposure signs: routine writing, data entry, summaries, basic coding, and scripted customer answers.',
      'More protected signs: in-person trust, physical work, people leadership, negotiation, and legal or safety accountability.',
      'The most useful next step is to identify your exposed tasks and build skills around judgment, context, and AI operation.',
    ],
    tableTitle: 'Fast self-check',
    tableHeaders: ['Signal', 'Higher exposure', 'More protected'],
    rows: [
      ['Work setting', 'Mostly digital', 'In-person or physical'],
      ['Task shape', 'Repeatable and rules-based', 'Ambiguous and accountable'],
      ['Human role', 'Low trust requirement', 'High trust or care requirement'],
      ['AI fit', 'Easy to draft or summarize', 'Hard to verify without expertise'],
    ],
    faq: [
      {
        question: 'Will AI take my job?',
        answer:
          'This depends on your tasks, industry, experience, and how quickly your role adapts. Use the checker for a task-level exposure estimate, not a guaranteed job loss prediction.',
      },
      {
        question: 'What should I do if my score is high?',
        answer:
          'Learn to use AI in the exposed parts of your work, then move toward business context, quality control, customer trust, and accountable decision-making.',
      },
    ],
  },
  statistics: {
    eyebrow: 'Labor market evidence',
    title: 'AI Replacing Jobs Statistics 2026',
    intro:
      'AI job statistics can be confusing because different reports measure different things: jobs created, jobs displaced, work hours automated, and task-level exposure are not the same metric.',
    shortAnswer:
      'The most credible view is that AI will change many tasks and occupations, while labor-market outcomes depend on adoption, regulation, training, and new work created around AI.',
    bullets: [
      'WEF reports both job displacement and new job creation by 2030.',
      'Goldman Sachs has estimated large-scale exposure to AI automation, especially in office work.',
      'McKinsey frames the shift as work activities and hours changing, not only job titles disappearing.',
      'Anthropic focuses on measuring labor-market exposure and notes that observed employment effects are still developing.',
    ],
    tableTitle: 'How major sources frame AI labor impact',
    tableHeaders: ['Source', 'What it measures', 'How to interpret it'],
    rows: [
      ['World Economic Forum', 'Jobs created and displaced by 2030', 'A labor-market transition, not a simple job-loss count'],
      ['Goldman Sachs Research', 'Jobs exposed to AI automation', 'Exposure means affected tasks, not guaranteed layoffs'],
      ['McKinsey Global Institute', 'Work hours and activities automated', 'Some work is automated, other work is augmented'],
      ['Anthropic research', 'Task-level AI exposure', 'Useful for measuring where AI is used and where risk may emerge'],
    ],
    citations: [
      {
        label: 'WEF Future of Jobs Report 2025',
        url: 'https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/',
      },
      {
        label: 'Goldman Sachs AI labor market research',
        url: 'https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-us-labor-market',
      },
      {
        label: 'McKinsey Global Institute future of work research',
        url: 'https://www.mckinsey.com/mgi/our-research/generative-ai-and-the-future-of-work-in-america',
      },
      {
        label: 'Anthropic labor market impacts research',
        url: 'https://www.anthropic.com/research/labor-market-impacts',
      },
    ],
    faq: [
      {
        question: 'Are AI job loss statistics reliable?',
        answer:
          'They are useful but easy to misread. A statistic about exposed jobs is not the same as a prediction that those jobs will disappear.',
      },
      {
        question: 'Why do reports disagree?',
        answer:
          'They measure different units: occupations, tasks, work hours, new jobs, displaced jobs, or observed AI usage.',
      },
    ],
  },
  anthropicForecast: {
    eyebrow: 'News explainer',
    title: 'Anthropic AI Job Loss Forecast: What It Means for Your Career',
    intro:
      'Search interest around Anthropic and AI job loss often mixes research, forecasts, and commentary. The useful career question is how AI exposure shows up in your own tasks.',
    shortAnswer:
      'Anthropic research is especially useful because it looks at task-level AI exposure. That is different from saying a specific person will lose a job.',
    bullets: [
      'Exposure is about what AI can help with or automate, not a guaranteed layoff.',
      'Entry-level white-collar work can feel vulnerable because many tasks are digital and draft-heavy.',
      'A practical response is to learn AI workflows while building judgment, context, and human accountability.',
    ],
    tableTitle: 'Exposure vs job loss',
    tableHeaders: ['Term', 'Meaning', 'Career response'],
    rows: [
      ['AI exposure', 'Tasks can be assisted, accelerated, or partly automated', 'Learn to operate and review AI output'],
      ['Job displacement', 'A role or opening is reduced or removed', 'Move toward resilient tasks and adjacent roles'],
      ['Augmentation', 'AI makes a worker faster or more capable', 'Build workflows that combine AI speed with human judgment'],
    ],
    citations: [
      {
        label: 'Anthropic labor market impacts research',
        url: 'https://www.anthropic.com/research/labor-market-impacts',
      },
      {
        label: 'Anthropic Economic Index',
        url: 'https://www.anthropic.com/news/the-anthropic-economic-index',
      },
    ],
    faq: [
      {
        question: 'Does Anthropic say AI will replace my job?',
        answer:
          'No public research page can predict your individual job outcome. Treat it as evidence about task exposure and labor-market pressure.',
      },
      {
        question: 'Why are entry-level jobs discussed so often?',
        answer:
          'Entry-level roles often include drafting, research, support, and routine production tasks that AI can accelerate. That raises pressure to build judgment and domain context faster.',
      },
    ],
  },
};

export function getOccupationBySlug(slug: string) {
  return JOB_PROFILES.find((profile) => profile.slug === slug);
}

export function getV1OccupationProfiles() {
  const slugs = [
    'software-engineer',
    'accountant',
    'customer-service-representative',
    'data-analyst',
    'copywriter',
    'graphic-designer',
    'teacher',
    'lawyer',
    'financial-analyst',
    'translator',
  ];

  return slugs
    .map((slug) => getOccupationBySlug(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getOccupationBySlug>>[];
}
