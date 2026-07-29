# City of Raleigh — Housing Landscape (Public Dashboard)

A single-page map and dashboard covering City-supported affordable housing
production in Raleigh.

**Live site:** https://maryelizardbeth.github.io/HN-Housing-Landscape-Public/

## What's on it

- **Housing Landscape Map** — City housing development projects, with filters for
  fiscal year, status, funding source, council district, NCOD, unit count, loan
  amount, and AMI band. Reference layers include council districts, NCODs,
  transit routes, Bus Rapid Transit corridors, and block-group market indicators.
  Non-City subsidized housing (HUD public housing, Section 8/202/811, LIHTC, and
  HUD-insured multifamily) can be toggled on.
- **Housing Production** — completed units by fiscal year and program, an
  affordability and funding breakdown, the development pipeline, and production
  by geography.
- **2020 Housing Bond** — bond totals, committed vs. available funding, and the
  bond-funded development projects.

## Data

Figures come from the City's Housing Production Tracker, published as hosted
feature layers and an aggregate summary table in the Raleigh ArcGIS Online
organization. The aggregate summary table is the source of truth for the
production charts — mapped point counts are geometry and will not sum to it.

Home Repair, Homebuyer Assistance, and Other Housing Impact are reported in the
charts only, using **public de-identified** data: resident names and addresses
are removed and point locations are displaced, so individual locations are not
shown on the map.

Data is updated quarterly by City staff. The current release reflects production
through the end of Quarter 4 of Fiscal Year 2025–2026 (June 30, 2026).

## Development

This site is generated from a shared source folder that also produces a separate
internal version; the two differ only by configuration. Deployment is automatic —
pushing to `main` publishes via GitHub Pages.

Static files only, no build step. ES modules require a real HTTP origin, so open
it through a local server rather than the filesystem.

## Contact

City of Raleigh Housing & Neighborhoods Department.
Design review: DesignTeam@raleighnc.gov
