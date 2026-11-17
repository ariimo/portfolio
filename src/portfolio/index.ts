// The Portfolio section: its labels and the list of projects.
// Each project has its own file in ./projects. To add one, write the file and
// list it in `projects` below, in the order it should appear in the grid.

import portfolioBanner from "../assets/portfolio-header.png";
import {formProcessingPlatform} from "./projects/form-processing-platform";
import {gmailSmartPilot} from "./projects/gmail-smart-pilot";
import {locus} from "./projects/locus";
import {wouldYouIn} from "./projects/would-you-in";
import {placeholders} from "./projects/placeholders";
import type {Project} from "./types";

export type * from "./types";

const projects: Project[] = [formProcessingPlatform, gmailSmartPilot, locus, wouldYouIn, ...placeholders];

export const portfolio = {
  title: "PORTFOLIO",
  banner: portfolioBanner,
  filters: [
    {label: "ALL", value: "all"},
    {label: "WORK", value: "work"},
    {label: "PROJECTS", value: "project"},
  ] as const,
  // Small label shown on each project.
  categoryLabels: {work: "WORK", project: "PROJECT"},
  // Hint shown on hover, under the description.
  detailsLabel: "VIEW DETAILS",
  projects,
  footnote: "And many more to come!",
};
