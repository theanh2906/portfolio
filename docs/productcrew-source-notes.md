# ProductCrew Content Evidence

Inspected 2026-09-08 in the local `F:/Projects/AI-Product-Team` checkout. This checkout includes substantial uncommitted work; these findings do not establish what is published on GitHub or released.

- `frontend/src/app/app.routes.ts` and `frontend/package.json`: Angular operator UI and work-item, feature-library, observability and settings routes.
- `internal/web/ai_runtime.go`: role-specific adapters for Codex, Claude Code and GitHub Copilot.
- `internal/web/ai_sessions.go`: session aggregation and provider-reported usage, including partial/unavailable confidence.
- `internal/web/server.go`: REST automation endpoints and `GET /api/observability/ai-sessions`.
- `internal/web/remote_control.go`: planning/awaiting-approval states in remote orchestration.
- `src-tauri/src/backend.rs`: embedded gateway at 8081 with legacy Go fallback at 18081.
- `README.md`: structured planning, dependency-aware role queues, approval/revision flow and incremental Go-to-Rust migration.

The work-board image is a WebP conversion of the existing `design-qa-activity-collapsed.png` development screenshot. It is not a new runtime acceptance test. Counters in the image are snapshot data, not portfolio impact metrics. No performance gains, production maturity or single-author ownership are claimed. No ProductCrew service was started or modified for this portfolio update.

## Portfolio Verification

- `npm run build`: passed (TypeScript and Vite production bundle). Non-blocking Browserslist freshness and build-plugin timing warnings remain.
- `npm run lint`: passed.
- `git diff --check`: passed.
- Local screenshot asset: HTTP 200, `image/webp`, 1280 x 720, 85,856 bytes.
- Responsive CSS uses three capability columns on wide screens and a single column at 1000px and below; screenshot preserves its aspect ratio and opens full-size in a new tab.
- Visual and interaction verification remains pending: Chrome was unavailable and the in-app browser failed to attach, including reconnection to its existing tab. No new desktop/mobile screenshot checks are claimed.
- Preview: `http://127.0.0.1:5174/#projects`. The user reviewed and approved the preview before requesting a push. Automated desktop/mobile visual verification remains pending as noted above.
