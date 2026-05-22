import { envConfigs } from '..';

export const localeNames: any = {
  en: 'English',
};

export const locales = ['en'];

export const defaultLocale = envConfigs.locale;

export const localePrefix = 'as-needed';

export const localeDetection = false;

export const localeMessagesRootPath = '@/config/locale/messages';

export const localeMessagesPaths = [
  'common',
  'landing',
  'pages/index',
  'pages/ai-job-risk-checker',
  'pages/jobs-ai-will-replace',
  'pages/jobs-safe-from-ai',
  'pages/will-ai-take-my-job',
  'pages/ai-replacing-jobs-statistics',
  'pages/anthropic-ai-job-loss-forecast',
  'pages/jobs/software-engineer',
  'pages/jobs/accountant',
  'pages/jobs/customer-service-representative',
  'pages/jobs/data-analyst',
  'pages/jobs/copywriter',
  'pages/jobs/graphic-designer',
  'pages/jobs/teacher',
  'pages/jobs/lawyer',
  'pages/jobs/financial-analyst',
  'pages/jobs/translator',
];
