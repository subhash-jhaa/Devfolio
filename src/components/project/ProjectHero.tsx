import ProjectImage from './ProjectImage';

interface ProjectHeroProps {
  heroImage: string;
  title: string;
}

export function ProjectHero({ heroImage, title }: ProjectHeroProps) {
  return (
    <ProjectImage 
      src={heroImage} 
      alt={title} 
      aspectRatio="16/9" 
      priority={true} 
      quality={100} 
    />
  );
}
