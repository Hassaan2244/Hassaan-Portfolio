import { Reveal } from "@/components/Reveal";
import {
  education,
  experience,
  skillGroups,
} from "@/content/experience";

/**
 * Experience timeline + skills — open lists, no cards or pill clouds.
 */
export function ExperienceSkills() {
  return (
    <div>
      <Reveal as="header" className="max-w-3xl">
        <p className="text-meta text-paper/45">Path</p>
        <h2 className="font-display text-headline mt-3">Experience</h2>
        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-paper/70">
          Roles and the stack I work with day to day.
        </p>
      </Reveal>

      <div className="mt-16 space-y-14 md:mt-20 md:space-y-20">
        {experience.map((job, index) => (
          <Reveal
            key={`${job.company}-${job.period}`}
            as="article"
            delay={index * 80}
            className="grid gap-5 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-16"
          >
            <div>
              <p className="text-meta text-paper/55">{job.period}</p>
              <p className="mt-3 text-[0.95rem] text-paper/60">{job.location}</p>
            </div>

            <div>
              <h3 className="font-display text-title leading-none">
                {job.role}
              </h3>
              <p className="mt-3 text-[1.05rem] text-paper/90">{job.company}</p>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-paper/70">
                {job.summary}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 md:mt-32">
        <p className="text-meta text-paper/55">Education</p>
        <p className="font-display text-title mt-4 leading-none">
          {education.degree}
        </p>
        <p className="mt-3 text-[1.05rem] text-paper/90">{education.school}</p>
        <p className="mt-2 text-[0.95rem] text-paper/60">{education.period}</p>
      </Reveal>

      <Reveal id="skills" className="mt-24 md:mt-32">
        <h3 className="font-display text-headline">Skills</h3>
        <div className="mt-10 grid gap-10 sm:mt-12 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-meta text-paper/55">{group.label}</p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-paper/75">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
