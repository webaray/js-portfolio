
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

function ProjectCard({ id, title, problem, solution, technologies, result, image }) {
  return (
    <Link to={`/project/${id}`} className="block h-full group">
      <Card className="bg-card border-border overflow-hidden hover-lift h-full flex flex-col transition-all duration-300 cursor-pointer">
        {image && (
          <div className="relative h-56 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80"></div>
          </div>
        )}
        <CardHeader className="relative z-10 -mt-6 pb-2">
          <CardTitle className="text-xl font-bold text-card-foreground flex items-center justify-between group-hover:text-primary transition-colors duration-300">
            {title}
            <ExternalLink className="h-5 w-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 flex-1 flex flex-col pt-2">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">The Challenge</p>
            <p className="text-card-foreground/80 text-sm leading-relaxed line-clamp-2">{problem}</p>
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">The Solution</p>
            <p className="text-card-foreground/80 text-sm leading-relaxed line-clamp-2">{solution}</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.slice(0, 4).map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs font-medium bg-secondary/50 hover:bg-secondary">
                {tech}
              </Badge>
            ))}
            {technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs font-medium bg-secondary/50">
                +{technologies.length - 4}
              </Badge>
            )}
          </div>
          <div className="mt-auto pt-4 border-t border-border/50">
            <p className="text-sm font-bold text-primary">{result}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProjectCard;
