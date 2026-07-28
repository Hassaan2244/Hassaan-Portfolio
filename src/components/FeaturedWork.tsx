import { ArrowCta } from "@/components/ArrowCta";
import { Reveal } from "@/components/Reveal";
import { SpecLabels } from "@/components/SpecLabels";
import {
  featuredProjects,
  type FeaturedProject,
} from "@/content/featured";

function ProjectIndex({
  index,
  total,
  align = "left",
}: {
  index: number;
  total: number;
  align?: "left" | "right";
}) {
  return (
    <p
      className={`text-meta text-paper/55 ${align === "right" ? "lg:text-right" : ""}`}
    >
      <span className="tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="mx-2 text-paper/30">/</span>
      <span className="tabular-nums text-paper/35">
        {String(total).padStart(2, "0")}
      </span>
    </p>
  );
}

function HighlightList({
  items,
  mirrored = false,
}: {
  items: string[];
  mirrored?: boolean;
}) {
  return (
    <ul className="flex flex-col gap-5 text-[0.95rem] leading-relaxed text-paper/70 md:gap-6">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 ${mirrored ? "lg:flex-row-reverse lg:text-right" : ""}`}
        >
          <span
            aria-hidden="true"
            className="mt-[0.65em] h-px w-4 shrink-0 bg-paper/45"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FeaturedProjectBlock({
  project,
  index,
  total,
  mirrored = false,
}: {
  project: FeaturedProject;
  index: number;
  total: number;
  mirrored?: boolean;
}) {
  return (
    <>
      <div
        className={`flex flex-col gap-6 lg:items-end lg:justify-between lg:gap-16 ${
          mirrored ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className={`min-w-0 ${mirrored ? "lg:text-right" : ""}`}>
          <ProjectIndex
            index={index}
            total={total}
            align={mirrored ? "right" : "left"}
          />
          <h3
            className={`project-title font-display mt-4 text-[clamp(3.25rem,12vw,9rem)] leading-[0.82] ${
              mirrored ? "lg:ml-auto" : ""
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mt-4 max-w-2xl text-[0.95rem] italic leading-relaxed text-paper/60 md:text-[1.05rem] ${
              mirrored ? "lg:ml-auto" : ""
            }`}
          >
            {project.subtitle}
          </p>
          {project.liveUrl ? (
            <div
              className={`mt-6 ${mirrored ? "lg:flex lg:justify-end" : ""}`}
            >
              <ArrowCta
                href={project.liveUrl}
                external
                className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-paper"
              >
                Live
              </ArrowCta>
            </div>
          ) : null}
        </div>
        <p
          className={`max-w-sm pb-2 text-[0.95rem] leading-relaxed text-paper/60 ${
            mirrored ? "lg:text-left" : "lg:text-right"
          }`}
        >
          {project.focus}
        </p>
      </div>

      <SpecLabels
        className="mt-12 md:mt-16"
        rows={[
          { label: "Role", value: project.role },
          { label: "Stack", value: project.stack },
          { label: "Impact", value: project.impact },
        ]}
      />

      <div
        className={`mt-12 max-w-3xl md:mt-16 ${mirrored ? "lg:ml-auto lg:text-right" : ""}`}
      >
        <p className="text-[1.05rem] leading-relaxed text-paper/90 md:text-[1.15rem]">
          {project.outcome}
        </p>
      </div>

      <div
        className={`mt-10 max-w-3xl md:mt-12 ${mirrored ? "lg:ml-auto" : ""}`}
      >
        <HighlightList items={project.highlights} mirrored={mirrored} />
      </div>
    </>
  );
}

/**
 * Featured professional work — unified format; middle project mirrored right.
 */
export function FeaturedWork() {
  return (
    <div>
      <Reveal as="header" className="max-w-3xl">
        <p className="text-meta text-paper/45">Selected work</p>
        <h2 className="font-display text-headline mt-3">Featured Work</h2>
        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-paper/70">
          Production systems across AI automation, realtime platforms, and
          enterprise booking — told as type, not thumbnails.
        </p>
      </Reveal>

      <div className="mt-16 md:mt-24">
        {featuredProjects.map((project, index) => (
          <Reveal
            key={project.slug}
            as="article"
            id={project.slug}
            delay={index * 40}
            className={
              index === 0
                ? ""
                : "mt-24 border-t border-paper/10 pt-24 md:mt-32 md:pt-32"
            }
          >
            <FeaturedProjectBlock
              project={project}
              index={index}
              total={featuredProjects.length}
              mirrored={index % 2 === 1}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
