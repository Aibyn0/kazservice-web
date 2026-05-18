type ProcessFlowProps = {
  steps: string[];
};

function parseProcessStep(step: string): { title: string; body: string } {
  const sepIndex = step.search(/[：:]/);
  if (sepIndex === -1) {
    return { title: step, body: "" };
  }
  return {
    title: step.slice(0, sepIndex).trim(),
    body: step.slice(sepIndex + 1).trim(),
  };
}

export function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <ol className="process-flow">
      {steps.map((step, index) => {
        const { title, body } = parseProcessStep(step);
        return (
          <li key={step} className="process-flow__item">
            <span className="process-flow__num" aria-hidden>
              {index + 1}
            </span>
            <div className="process-flow__card">
              <h3 className="process-flow__title">{title}</h3>
              {body ? <p className="process-flow__desc">{body}</p> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
