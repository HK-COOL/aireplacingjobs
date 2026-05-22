import {
  calculateAiJobRisk,
  getRiskLevel,
  type AiJobRiskInput,
} from '../src/shared/lib/ai-job-risk';

function assert(condition: unknown, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

const juniorDeveloper: AiJobRiskInput = {
  jobTitle: 'Junior Software Developer',
  industry: 'Technology',
  experienceLevel: 'Entry level',
  workType: 'Mostly digital',
  taskIds: [
    'coding-debugging',
    'writing-editing',
    'research-summarization',
    'spreadsheet-analysis',
  ],
  aiUsageLevel: 'Use AI sometimes',
};

const nurse: AiJobRiskInput = {
  jobTitle: 'Nurse',
  industry: 'Healthcare',
  experienceLevel: 'Mid level',
  workType: 'Mostly physical / in-person',
  taskIds: [
    'in-person-care',
    'physical-hands-on',
    'emergency-response',
    'compliance-accountability',
  ],
  aiUsageLevel: 'Use AI sometimes',
};

const developerResult = calculateAiJobRisk(juniorDeveloper);
assert(
  developerResult.riskLevel === 'High' ||
    developerResult.riskLevel === 'Very High',
  `Expected junior developer to be high or very high risk, got ${developerResult.riskLevel}`
);

const nurseResult = calculateAiJobRisk(nurse);
assert(
  nurseResult.riskLevel === 'Low' || nurseResult.riskLevel === 'Moderate',
  `Expected nurse to be low or moderate risk, got ${nurseResult.riskLevel}`
);

const missingTitle = calculateAiJobRisk({ ...juniorDeveloper, jobTitle: '' });
assert(
  missingTitle.validationErrors.includes('Please enter a job title.'),
  'Expected empty job title validation error'
);

const missingTasks = calculateAiJobRisk({ ...juniorDeveloper, taskIds: [] });
assert(
  missingTasks.validationErrors.includes(
    'Select at least 3 daily tasks for a more useful estimate.'
  ),
  'Expected no tasks validation error'
);

for (const score of [-20, 0, 45, 100, 140]) {
  const level = getRiskLevel(Math.max(0, Math.min(100, score)));
  assert(level, `Expected risk level for score ${score}`);
}

const customResult = calculateAiJobRisk({
  ...juniorDeveloper,
  jobTitle: 'Space workflow coordinator',
});
assert(
  customResult.score >= 0 && customResult.score <= 100,
  `Expected score to be clamped, got ${customResult.score}`
);
assert(
  developerResult.copyReadySummary.includes('AI Exposure Score') &&
    developerResult.copyReadySummary.includes(
      'not a guaranteed job loss prediction'
    ),
  'Expected copy-ready summary with score and disclaimer'
);

console.log('AI job risk verifier passed.');
console.log(
  `Junior developer: ${developerResult.score}/100 (${developerResult.riskLevel})`
);
console.log(`Nurse: ${nurseResult.score}/100 (${nurseResult.riskLevel})`);
