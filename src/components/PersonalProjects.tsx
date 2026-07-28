import { Reveal } from "@/components/Reveal";
import { personalProjects } from "@/content/personal";

/**
 * Personal AI projects — wide editorial + compact pair grid.
 */
export function PersonalProjects() {
  const wide = personalProjects.filter((p) => p.density === "wide");
  const compact = personalProjects.filter((p) => p.density === "compact");

  return (
    <div>
      <Reveal as="header" className="max-w-3xl">
        <p className="text-meta text-muted">Experiments</p>
        <h2 className="font-display text-headline mt-3">Personal AI</h2>
        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
          Side projects exploring interviews, hybrid RAG, agents, and
          transcript-grounded chat.
        </p>
      </Reveal>

      <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
        {wide.map((project, index) => (
          <Reveal
            key={project.slug}
            as="article"
            id={project.slug}
            delay={index * 50}
            className={
              index % 2 === 1
                ? "md:ml-[8%] lg:ml-[12%]"
                : "md:mr-[8%] lg:mr-[12%]"
            }
          >
            <p className="text-meta text-muted">
              {project.role}
              <span className="mx-2 text-muted/40">·</span>
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="project-title font-display text-display mt-3 max-w-[14ch] leading-[0.88]">
              {project.title}
            </h3>
            <p className="mt-4 max-w-xl text-[0.85rem] italic text-muted">
              {project.stack}
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:gap-14">
              <p className="text-[1.05rem] leading-relaxed text-ink">
                {project.outcome}
              </p>
              <ul className="flex flex-col gap-3 text-[0.92rem] leading-relaxed text-muted">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-px w-4 shrink-0 bg-ink/30"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-14 border-t border-ink/10 pt-16 md:mt-28 md:grid-cols-2 md:gap-16 md:pt-20">
        {compact.map((project, index) => (
          <Reveal
            key={project.slug}
            as="article"
            id={project.slug}
            delay={index * 70}
          >
            <p className="text-meta text-muted">{project.role}</p>
            <h3 className="project-title font-display text-title mt-3 leading-[0.92]">
              {project.title}
            </h3>
            <p className="mt-3 text-[0.8rem] italic text-muted">
              {project.stack}
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink">
              {project.outcome}
            </p>
            <ul className="mt-6 flex flex-col gap-2.5 text-[0.88rem] leading-relaxed text-muted">
              {project.highlights.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
