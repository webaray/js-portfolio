
import React from 'react';
import { Briefcase } from 'lucide-react';

function TimelineItem({ date, title, company, description, isLast }) {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 h-full w-px bg-border">
        {!isLast && <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-primary to-transparent"></div>}
      </div>
      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>
      <div className="flex items-start gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Briefcase className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{date}</p>
          <h3 className="text-lg font-semibold text-foreground mt-1">{title}</h3>
          <p className="text-sm text-primary font-medium">{company}</p>
        </div>
      </div>
      <p className="text-foreground/80 leading-relaxed ml-11">{description}</p>
    </div>
  );
}

export default TimelineItem;
