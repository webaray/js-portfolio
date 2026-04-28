
import React from 'react';
import { Badge } from '@/components/ui/badge';

function SkillBadge({ name, icon: Icon }) {
  return (
    <Badge 
      variant="outline" 
      className="px-4 py-2 text-sm font-medium border-border bg-card/50 hover:bg-card hover:border-primary transition-all duration-200 cursor-default"
    >
      {Icon && <Icon className="h-4 w-4 mr-2" />}
      {name}
    </Badge>
  );
}

export default SkillBadge;
