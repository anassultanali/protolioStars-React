import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ProjectsSection = () => {
  const { t } = useTranslation();
  const lang = document.documentElement.lang;

  const projects = [
    {
      id: 1,
      title: t("projects.project1.title"),
      description: t("projects.project1.sub"),
      image: "/projects/project1.png",
      tags: ["Bootstrab"],
      demoUrl: "https://anassultanali.github.io/Mohamed-Ali-Club/",
      githubUrl: "https://github.com/anassultanali/Mohamed-Ali-Club",
    },
    {
      id: 2,
      title: t("projects.project2.title"),
      description: t("projects.project2.sub"),
      image: "/projects/project2.png",
      tags: ['NextJS' ,'MongoDB',  'React Native' ],
      demoUrl: "https://zizo-store-nextjs.vercel.app/",
      githubUrl: "",
    },
    {
      id: 3,
      title: t("projects.project3.title"),
      description:t("projects.project3.sub"),
      image: "/projects/project3.png",
      tags: ["Tailwind"],
      demoUrl: "https://tranquil-otter-9bd78e.netlify.app/",
      githubUrl: "",
    },
    
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          {t("projects.title1")} <span className="text-primary"> {t("projects.title2")} </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.sub")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="ltr">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs relative card-hover"
              
            >
              <div className="h-48 overflow-hidden">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-[0.7rem] lg:text-xs font-medium border bg-primary/20 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  {project.description}
                </p>
                <div className="flex justify-between mt-3 absolute bottom-4  lift-6">
                  <div className="flex text-left space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.githubUrl != "" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                      <Github size={20} />
                    </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/anassultanali"
          >
            {t("projects.btn")} {lang === "en" ? <ArrowRight size={16} /> : <ArrowLeft size={16}/>}
          </a>
        </div>
      </div>
    </section>
  );
};
