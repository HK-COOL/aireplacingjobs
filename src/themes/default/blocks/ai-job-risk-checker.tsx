'use client';

import { useMemo, useState } from 'react';
import { track } from '@vercel/analytics';
import { CheckCircle2, Copy, RotateCcw, ShieldCheck } from 'lucide-react';

import {
  AI_USAGE_LEVELS,
  EXPERIENCE_LEVELS,
  INDUSTRIES,
  TASK_OPTIONS,
  WORK_TYPES,
  calculateAiJobRisk,
  type AiJobRiskInput,
  type TaskId,
} from '@/shared/lib/ai-job-risk';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui/button';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import type { Section } from '@/shared/types/blocks/landing';

const exampleTasks: TaskId[] = [
  'coding-debugging',
  'writing-editing',
  'research-summarization',
  'spreadsheet-analysis',
];

const initialInput: AiJobRiskInput = {
  jobTitle: '',
  industry: 'Technology',
  experienceLevel: 'Mid level',
  workType: 'Mostly digital',
  taskIds: [],
  customTasks: '',
  aiUsageLevel: 'Use AI sometimes',
  region: '',
};

export function AiJobRiskChecker({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  const [input, setInput] = useState<AiJobRiskInput>(initialInput);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => calculateAiJobRisk(input), [input]);

  function updateInput<Key extends keyof AiJobRiskInput>(
    key: Key,
    value: AiJobRiskInput[Key]
  ) {
    setInput((current) => ({ ...current, [key]: value }));
    setCopied(false);
  }

  function getEventContext() {
    return {
      industry: input.industry,
      work_type: input.workType,
      experience_level: input.experienceLevel,
      ai_usage_level: input.aiUsageLevel,
      selected_task_count: input.taskIds.length,
      risk_level: result.riskLevel,
      score_band: `${Math.floor(result.score / 10) * 10}-${Math.min(
        Math.floor(result.score / 10) * 10 + 9,
        100
      )}`,
    };
  }

  function toggleTask(taskId: TaskId) {
    setInput((current) => {
      const exists = current.taskIds.includes(taskId);
      return {
        ...current,
        taskIds: exists
          ? current.taskIds.filter((id) => id !== taskId)
          : [...current.taskIds, taskId],
      };
    });
    setCopied(false);
  }

  async function copyResult() {
    if (!result.copyReadySummary) return;
    try {
      await navigator.clipboard.writeText(result.copyReadySummary);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = result.copyReadySummary;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    track('tool_copy_result', getEventContext());
  }

  function useExample() {
    setInput({
      jobTitle: 'Junior Software Developer',
      industry: 'Technology',
      experienceLevel: 'Entry level',
      workType: 'Mostly digital',
      taskIds: exampleTasks,
      customTasks: 'Writing documentation and searching API examples.',
      aiUsageLevel: 'Use AI sometimes',
      region: '',
    });
    setSubmitted(true);
    setCopied(false);
    track('tool_apply_preset', {
      preset: 'junior_software_developer',
      source: 'checker',
    });
  }

  function reset() {
    setInput(initialInput);
    setSubmitted(false);
    setCopied(false);
  }

  const showResult = submitted && result.validationErrors.length === 0;
  const scoreColor =
    result.score >= 78
      ? 'text-red-600'
      : result.score >= 60
        ? 'text-orange-600'
        : result.score >= 35
          ? 'text-amber-600'
          : 'text-emerald-600';

  return (
    <section
      id={section.id || 'checker'}
      className={cn('overflow-x-hidden py-16 md:py-24', section.className, className)}
    >
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          {section.label ? (
            <p className="text-primary mb-3 text-sm font-medium uppercase tracking-normal">
              {section.label}
            </p>
          ) : null}
          <h2 className="text-foreground mx-auto max-w-[17rem] text-2xl leading-tight font-semibold break-words sm:max-w-2xl sm:text-3xl sm:text-balance md:text-4xl">
            {section.title || 'AI Job Risk Checker'}
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[17rem] text-sm leading-6 break-words sm:max-w-2xl sm:text-base sm:text-balance">
            {section.description ||
              'Enter your role and daily tasks to estimate task-level AI exposure. This is not a layoff prediction.'}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]">
          <div className="rounded-lg border bg-card p-4 shadow-sm md:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-medium">Job title</span>
                <Input
                  value={input.jobTitle}
                  onChange={(event) => updateInput('jobTitle', event.target.value)}
                  placeholder="Software Engineer, Accountant, Teacher..."
                />
              </label>

              <SelectField
                label="Industry"
                value={input.industry}
                options={[...INDUSTRIES]}
                onChange={(value) => updateInput('industry', value)}
              />
              <SelectField
                label="Experience level"
                value={input.experienceLevel}
                options={EXPERIENCE_LEVELS}
                onChange={(value) =>
                  updateInput('experienceLevel', value as AiJobRiskInput['experienceLevel'])
                }
              />
              <SelectField
                label="Work type"
                value={input.workType}
                options={WORK_TYPES}
                onChange={(value) =>
                  updateInput('workType', value as AiJobRiskInput['workType'])
                }
              />
              <SelectField
                label="AI usage level"
                value={input.aiUsageLevel}
                options={AI_USAGE_LEVELS}
                onChange={(value) =>
                  updateInput('aiUsageLevel', value as AiJobRiskInput['aiUsageLevel'])
                }
              />
            </div>

            <div className="mt-6">
              <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h3 className="font-medium">Daily tasks</h3>
                  <p className="text-muted-foreground text-sm">
                    Pick at least 3 tasks for a more useful estimate.
                  </p>
                </div>
                <Button type="button" variant="outline" size="sm" onClick={useExample}>
                  Use example
                </Button>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {TASK_OPTIONS.map((task) => (
                  <label
                    key={task.id}
                    className="hover:bg-muted/60 flex min-w-0 cursor-pointer items-start gap-3 rounded-md border p-3 transition-colors"
                  >
                    <Checkbox
                      checked={input.taskIds.includes(task.id)}
                      onCheckedChange={() => toggleTask(task.id)}
                      className="mt-0.5"
                    />
                    <span className="min-w-0 text-sm leading-5 break-words">
                      {task.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <label className="mt-6 block space-y-2">
              <span className="text-sm font-medium">Optional custom tasks</span>
              <Textarea
                value={input.customTasks}
                onChange={(event) => updateInput('customTasks', event.target.value)}
                placeholder="Add anything specific you do every week."
                rows={3}
              />
            </label>

            {submitted && result.validationErrors.length > 0 ? (
              <div className="mt-5 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-200">
                {result.validationErrors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                type="button"
                onClick={() => {
                  setSubmitted(true);
                  track('tool_check_risk', getEventContext());
                }}
              >
                Check My Job Risk
              </Button>
              <Button type="button" variant="outline" onClick={reset}>
                <RotateCcw className="size-4" />
                Reset
              </Button>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4 shadow-sm md:p-6">
            {!showResult ? (
              <div className="flex min-h-[440px] flex-col justify-center rounded-md border border-dashed p-6 text-center">
                <ShieldCheck className="text-primary mx-auto mb-4 size-10" />
                <h3 className="text-xl font-semibold">Your exposure report appears here</h3>
                <p className="text-muted-foreground mt-3 text-sm">
                  Enter your job title and select your daily tasks to see an AI
                  exposure score, task breakdown, and career survival plan.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="rounded-md bg-muted p-4">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-muted-foreground text-sm">AI Exposure Score</p>
                      <p className={cn('text-4xl font-semibold', scoreColor)}>
                        {result.score}/100
                      </p>
                    </div>
                    <div className="rounded-full bg-background px-3 py-1 text-sm font-medium shadow-sm">
                      {result.riskLevel} risk
                    </div>
                  </div>
                  <div className="bg-background mt-4 h-2 overflow-hidden rounded-full">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${result.score}%` }}
                    />
                  </div>
                </div>

                <ResultGroup title="Summary" items={[result.summary]} />
                <ResultGroup title="Tasks most exposed to AI" items={result.tasksMostExposed} />
                <ResultGroup title="Tasks more protected from AI" items={result.tasksMoreProtected} />
                <ResultGroup title="Skills to learn next" items={result.skillsToLearn} />
                <ResultGroup title="Career survival plan" items={result.careerSurvivalPlan} ordered />

                <p className="text-muted-foreground rounded-md border p-3 text-xs leading-5">
                  {result.disclaimer}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button type="button" onClick={copyResult}>
                    {copied ? <CheckCircle2 className="size-4" /> : <Copy className="size-4" />}
                    {copied ? 'Copied' : 'Copy result'}
                  </Button>
                  <Button type="button" variant="outline" onClick={reset}>
                    Try another job
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="space-y-2">
      <span className="text-sm font-medium">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ResultGroup({
  title,
  items,
  ordered,
}: {
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  const Tag = ordered ? 'ol' : 'ul';

  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <Tag className={cn('text-muted-foreground space-y-2 text-sm', ordered ? 'list-decimal pl-5' : '')}>
        {items.length > 0 ? (
          items.map((item) => (
            <li
              key={item}
              className={cn(
                'leading-5 break-words',
                ordered ? '' : 'flex gap-2 before:mt-2 before:size-1.5 before:flex-none before:rounded-full before:bg-primary'
              )}
            >
              {item}
            </li>
          ))
        ) : (
          <li className="leading-5">No matching items yet.</li>
        )}
      </Tag>
    </div>
  );
}
