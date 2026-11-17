// Shapes of the portfolio data: the projects and the blocks of their detail view.

import type {StaticImageData} from "next/image";

export type ProjectCategory = "work" | "project";

// The detail view that opens when a project is clicked is a list of sections,
// and each section is a list of blocks. In any text, `backticks` mark code and
// **double asterisks** mark bold.

// A list item, optionally with a nested list under it.
export type ProjectListItem = string | {text: string; items: string[]};

// One row of a flow diagram: its steps run left to right, rows run top to bottom.
export type FlowStage = {
  // With a label the row is drawn as a framed group; without one, as loose boxes.
  label?: string;
  // Short tag on the right of the group label.
  note?: string;
  // Draw the group white on black.
  dark?: boolean;
  // Text written beside the arrow that leads into this row.
  via?: string;
  // The steps are branches reached from the row above, not a sequence.
  parallel?: boolean;
  // `items` are short lines listed inside the box, such as endpoints.
  steps: {name: string; detail?: string; items?: string[]}[];
};

// One row of a mapping example: a payload value, the transform applied to it,
// and the form field it ends up in.
export type MappingRow = {
  source: string;
  value: string;
  transform?: string;
  field: {
    // Label printed on the form.
    label: string;
    // Field names inside the PDF.
    names: string;
    // Text written on a line, with an optional prefix such as "$".
    text?: string;
    prefix?: string;
    // Or one character per box, in groups separated by dashes.
    boxes?: string[];
  };
};

export type ProjectBlock =
  | {type: "text"; text: string}
  | {type: "heading"; text: string}
  | {type: "list"; items: ProjectListItem[]; ordered?: boolean}
  // A highlighted statement.
  | {type: "callout"; label?: string; text: string}
  // A row of big numbers.
  | {type: "stats"; items: {value: string; label: string}[]}
  // A small comparison table: `columns` is the header row, `rows` the body.
  | {type: "table"; columns: string[]; rows: string[][]; caption?: string}
  // Code or a diff. In a diff, lines starting with + or - are tinted.
  | {type: "code"; text: string; diff?: boolean; caption?: string}
  // Screenshots side by side. Phone screens (taller than wide) are kept narrow.
  | {
      type: "images";
      items: {src: StaticImageData; alt: string; caption?: string}[];
      caption?: string;
    }
  | {type: "flow"; stages: FlowStage[]; caption?: string}
  // Horizontal bar chart. Muted bars are drawn in grey.
  | {
      type: "bars";
      title: string;
      items: {label: string; value: number; muted?: boolean}[];
      caption?: string;
    }
  | {
      type: "mapping";
      title: string;
      columns: [string, string, string];
      // Shown in place of a transform when a row has none.
      passthrough: string;
      rows: MappingRow[];
      caption?: string;
    };

export type ProjectSection = {
  title: string;
  blocks: ProjectBlock[];
};

export type Project = {
  title: string;
  // Which filter tab the project belongs to.
  category: ProjectCategory;
  // One line shown on hover and under the title of the detail view.
  description: string;
  image: StaticImageData;
  // Flip the thumbnail horizontally.
  mirrored?: boolean;
  // Where the work was done and in what capacity.
  role?: string;
  period?: string;
  stack?: string[];
  links?: {label: string; href: string}[];
  sections: ProjectSection[];
};
