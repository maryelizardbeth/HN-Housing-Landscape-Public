/* =============================================================================
 * EXTERNAL (public-facing) build configuration
 * Implements the "External Dash" section of 7.28.26 Internal V External.docx
 *
 * Deployed as `config.js` to the PUBLIC repo. Contains no PII field names and
 * no private layer URLs — only the de-identified public layers.
 *
 * Differences from Internal:
 *   1. Home Repair / Homebuyer Assistance / Other Housing Impact are removed
 *      from the MAP (showOnMap: false). They are still instantiated so the
 *      dashboard charts below can query them — the charts are unchanged.
 *   2. Pipeline development shows funding SOURCE + total units only (no dollar
 *      amounts, no AMI breakdown). Completed projects are unaffected.
 *   3. All source / caveat boxes above the chart sections are hidden, except
 *      the quarterly-update note, whose copy is replaced.
 * ============================================================================= */

import {
  DEV_LAYER, ORG, BRAND,
  REHAB_FIELDS_BASE, HBA_FIELDS_BASE, OTHER_FIELDS_BASE,
  HUD_LAYERS_BASE,
} from "./config.base.js";

export * from "./config.base.js";

export const MODE = "external";

/* --- Housing layers --------------------------------------------------------
 * The three resident-level programs keep their DE-IDENTIFIED public layers and
 * are dropped from the map per the requirements doc. `showOnMap: false` hides
 * them from the map, the layer toggles, and the legend — but keeps the layer
 * available to the charts, which still report on all four programs.            */
export const HOUSING_LAYERS = [
  DEV_LAYER,
  {
    id: "homeowner_rehabs",
    title: "Home Repair",
    url: `${ORG}/HomeownerRehabs_Public_De_identified_/FeatureServer/0`,
    kind: "rehab",
    color: BRAND.teal,
    deidentified: true,
    visible: true,
    showOnMap: false,      // removed from the External map
  },
  {
    id: "homebuyer_assistance",
    title: "Homebuyer Assistance",
    url: `${ORG}/HomebuyerAssistance_Public_De_identified_/FeatureServer/0`,
    kind: "hba",
    color: BRAND.navy,
    deidentified: true,
    visible: true,
    showOnMap: false,      // removed from the External map
  },
  {
    id: "other_housing_impact",
    title: "Other Housing Impact",
    url: `${ORG}/OtherHousingImpact_Public_De_identified_/FeatureServer/0`,
    kind: "other",
    color: BRAND.midGreen,
    deidentified: true,
    visible: true,
    showOnMap: false,      // removed from the External map
  },
];

/* No PII keys are added — the popup code renders a name/address row only when
 * the corresponding key exists, so these stay as the public field sets.        */
export const REHAB_FIELDS = { ...REHAB_FIELDS_BASE };
export const HBA_FIELDS   = { ...HBA_FIELDS_BASE };
export const OTHER_FIELDS = { ...OTHER_FIELDS_BASE };

/* HUD popups keep the public field set. */
export const HUD_LAYERS = HUD_LAYERS_BASE;

/* --- On-screen copy + UI switches ------------------------------------------ */
export const UI = {
  /* Browser tab title + the label shown in the masthead, so the two builds are
   * never mistaken for one another. */
  docTitle: "Raleigh Housing Landscape | Public Dashboard",
  versionLabel: "Public version",
  versionKind: "public",

  /* Hide the .src-badge and banner .caveat boxes that run above the chart
   * sections. Caveats INSIDE a card are kept — they describe that card's
   * content rather than sourcing the section. #citywideCaveat is also kept,
   * re-worded below. */
  showSourceNotes: false,

  /* Pipeline development shows funding source + units only. Completed projects
   * still show the City contribution, the funding breakdown, and the AMI bar. */
  showPipelineFinancials: false,

  /* Replacement copy from the requirements doc ("These" -> "The" per Mary).
   * Updated 2026-07-30 leadership call: adds the FY2015-2016 start date, since
   * the dashboard covers that whole span, not just the current fiscal year. */
  citywideCaveatHtml:
    "The data feeding this dashboard and the below tables are updated quarterly. " +
    "The latest update reflects the Housing and Community Development Department's " +
    "production data from FY 2015-2016 through the end of Quarter 4 Fiscal Year 2025-2026 (June 30, 2026).",

  /* Map sidebar "Data notes". The de-identification language is dropped: the
   * three de-identified layers are no longer on the External map, so it would
   * describe nothing on screen. */
  dataNotesHtml:
    'AMI affordability breakdowns show only for <strong>Complete</strong> development ' +
    'projects (per HCD rules). Mapped point counts are geometry and ' +
    '<strong>do not reconcile</strong> to the Housing Production Tracker totals — ' +
    'see the charts below.',

  /* Note appended to resident-level popups. Unused on External (those layers are
   * off the map) but kept defined so the popup helpers have a value. */
  deidNote:
    'Public de-identified record — location is approximate (shifted 200–700 m); ' +
    'resident name and address removed.',
};
