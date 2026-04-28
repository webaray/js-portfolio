
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

function ServiceCard({ title, problem, outcome, icon: Icon }) {
  return (
    <Card className="bg-card border border-border/50 hover-lift group h-full flex flex-col overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300" />
      
      <CardHeader className="pb-4">
        {Icon && (
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <Icon className="h-6 w-6" />
          </div>
        )}
        <CardTitle className="text-xl font-bold text-foreground leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-5 flex-1 flex flex-col">
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">The Challenge</h4>
          <p className="text-foreground/80 text-sm leading-relaxed">{problem}</p>
        </div>
        
        <div className="flex-1">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">The Outcome</h4>
          <p className="text-foreground/90 text-sm font-medium leading-relaxed">{outcome}</p>
        </div>
        
        <div className="pt-4 border-t border-border/50 flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300">
          Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
