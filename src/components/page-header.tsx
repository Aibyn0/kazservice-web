import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button";

type PageHeaderProps = {
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
};

export function PageHeader({ title, description, actionHref, actionLabel }: PageHeaderProps) {
  let action: ReactNode = null;
  if (actionHref && actionLabel) {
    action = (
      <ButtonLink href={actionHref} variant="primary" className="mt-5">
        {actionLabel}
      </ButtonLink>
    );
  }

  return (
    <header className="page-header section-panel">
      <h1 className="section-title">{title}</h1>
      {description && <p className="section-desc mt-3 max-w-3xl">{description}</p>}
      {action}
    </header>
  );
}
