# Career Profile - Design QA

Date: 2026-09-08

final result: passed

## Reference and evidence

- Selected visual: third displayed concept, Career Profile.
- Source: `resources/qa/reference.png` (1536 x 1024 concept board).
- Desktop implementation: `resources/qa/desktop-final.jpg` (1425 x 1013 captured pixels; requested CSS viewport 1440 x 1024).
- Mobile implementation: `resources/qa/mobile-final.jpg` (375 x 811 captured pixels; requested CSS viewport 390 x 844).
- Small mobile: `resources/qa/mobile-320-final.jpg` (305 x 705 captured pixels; requested CSS viewport 320 x 740).
- Additional responsive captures: `resources/qa/viewport-768.jpg` and `resources/qa/desktop-1920-final.jpg`.
- Full comparison: `resources/qa/comparison-final.png`, source above implementation.
- Focused profile/typography comparison: `resources/qa/profile-comparison.png`, source left and implementation right.
- Shareable local preview image: `resources/qa/portfolio-preview.png`.

Browser: Chrome, controlled through the browser extension. The in-app browser was unavailable for automation. The extension captures content with scrollbar exclusion and capture scaling, so captured pixel dimensions differ from requested CSS dimensions. Comparisons preserve aspect ratio; the concept board is not treated as a pixel-exact screenshot of its labeled viewports. The implemented page has been checked at the actual CSS dimensions listed above.

The final comparison state is the page top, light theme, experience navigation active, with all disclosures closed. Supporting interaction checks include expanded details, the mobile menu and Contact.

## Findings and fixes

1. Mobile anchor targets were hidden under the sticky navigation. Base styles loaded after component styles and overrode mobile scroll padding. Loading base styles first restored 128px mobile scroll padding. After the fix, Projects starts at approximately 144px while the navigation ends at approximately 127px.
2. At 320px with a non-overlay browser scrollbar, the original 320px body minimum exceeded the 305px content area. Removed the minimum width and verified document scroll width equals client width (305px). The updated screenshot shows controls and text wrapping within the viewport.
3. The original desktop sidebar was narrower than the selected visual and wrapped the primary stack. Increased it from 340px to 380px, and adjusted the name from 34px to 36px. The final desktop and focused profile comparisons show the corrected proportions.
4. The Trip Planner screenshot was cropped by the shared thumbnail aspect ratio. Changed that screenshot to `object-fit: contain` so the actual application remains inspectable.

No actionable P0, P1 or P2 issues remain within the tested scope.

## Required visual surfaces

- Typography: self-hosted Inter with explicit fallbacks, zero negative tracking, readable heading hierarchy, and responsive wrapping. Mobile name sizes are 30px/32px and desktop is 36px. Supporting dates and technology lines remain deliberately compact.
- Layout: sticky desktop profile, open timeline, divider-separated projects and unframed sections. Mobile uses a single column, sticky section links and 44px-or-larger action targets. No horizontal overflow at tested widths of 320, 390, 768, 1440 and 1920px.
- Colors: white surface, near-black type, emerald active states and primary action, coral recognition. Flat fills replace generated-image texture; focus outlines and hover states are explicit.
- Assets: actual AI Trip Planner screenshot, optimized WebP files, and a generated System Monitor illustration explicitly captioned as an illustration. All referenced images and local font load successfully.
- Content: identity, contact details, dates, experience, education, skills and project technologies come from the supplied CV. Unsupported mockup claims such as OpenAI API, project WebSocket/Angular stacks and invented dashboard features were not carried into the implementation.

Intentional adaptations: the mockup's synthetic project screenshots are replaced with truthful imagery; disclosures expose the full CV content without crowding the first screen; Overview, Education and Contact are implemented below the previewed sections. Added disclosure controls and corrected CV wording affect vertical density. This is a responsive implementation of the selected concept, not a claim of exact pixel equivalence to an image-generated presentation board.

## Verification

- `npm run build`: passed (TypeScript and Vite production bundle).
- `npm run lint`: passed.
- `git diff --check`: passed; only local Git line-ending notices.
- Browser console: no captured errors or warnings on the final local page.
- All fragment links resolve to existing sections; desktop/mobile Projects navigation activates the matching navigation state.
- Mobile menu opens and closes; Escape closes it. Expanded OPSWAT details reveal the correct project content and collapse again.
- System Monitor project disclosure reveals the deployment details.
- Contact navigation works. Copy email displays `Email address copied.` after the clipboard operation completes.
- Download CV points to the bundled PDF with the download attribute. The served PDF and original source have identical SHA-256: `22EABBA4D7F120CFB9B9993CE20894D1824EE8D2FB002D1F2FF95141372FD85D`.
- Public AI Trip Planner demo was opened successfully and used for the real project screenshot.
- The production output includes the PDF, font/license, favicon and both project images.

## Limits and follow-up

No automated unit-test suite was present. Browser checks used Chrome responsive emulation, not physical iOS/Android devices or Safari. Mail and phone links have the correct destinations; sending email or making calls was not attempted. Clipboard failure handling and assistive-technology behavior have not been tested with a screen reader. Reduced-motion and focus styles are included; this is not a formal accessibility audit.

Vite reports informational plugin timing and outdated Browserslist data warnings; neither blocks the successful build. No dependency upgrade was introduced for those notices. No deployment or Git push was performed.
