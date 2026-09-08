import { Activity, ChevronDown, GitBranch, ShieldCheck, ZoomIn } from 'lucide-react';

const capabilities = [
  { icon: GitBranch, title: 'Role-aware orchestration', description: 'Structured plans and dependency-aware queues for Designer, Developer and QA agents.' },
  { icon: ShieldCheck, title: 'Human approval', description: 'Review plans before delivery, with rejection reasons feeding the next revision.' },
  { icon: Activity, title: 'Execution visibility', description: 'Inspect AI sessions, runtime status and token usage when reported by the provider.' },
];

export function ProductCrew() {
  return (
    <article className="featured-project" aria-labelledby="productcrew-title">
      <div className="featured-meta"><span>Featured project</span><span>In active development</span></div>
      <h3 id="productcrew-title">ProductCrew</h3>
      <p className="featured-lead">A local-first workspace for coordinating an AI product team.</p>
      <p className="featured-description">Turn a product request into a reviewable plan, then follow the work across design, development and QA. Keep approvals, dependencies and execution history in one place.</p>
      <p className="tech-line">Angular / TypeScript / Go / Rust / Tauri / REST / SSE</p>
      <figure className="featured-image">
        <a href="/images/productcrew-work-board.webp" target="_blank" rel="noreferrer" aria-label="Open ProductCrew work board screenshot at full size in a new tab">
          <img src="/images/productcrew-work-board.webp" alt="ProductCrew development build with role-based work queues, task status and planning activity" width="1280" height="720" loading="lazy" />
          <span className="image-zoom" title="Open full-size screenshot"><ZoomIn size={19} /></span>
        </a>
        <figcaption>Agent work board · Development build snapshot</figcaption>
      </figure>
      <div className="featured-capabilities">
        {capabilities.map(({ icon: Icon, title, description }) => (
          <div key={title}><Icon size={20} aria-hidden="true" /><h4>{title}</h4><p>{description}</p></div>
        ))}
      </div>
      <details className="featured-case-study">
        <summary>Engineering case study<ChevronDown size={16} /></summary>
        <dl>
          <div><dt>The problem</dt><dd>Multiple AI coding sessions need more than a prompt: they need shared work state, explicit handoffs and a clear point for human review.</dd></div>
          <div><dt>The approach</dt><dd>A local orchestration service manages structured plans and role-specific work queues. An Angular interface exposes progress and review decisions, while REST endpoints and the pc CLI support automation.</dd></div>
          <div><dt>Provider flexibility</dt><dd>Runtime adapters support Codex, Claude Code and GitHub Copilot. Session analytics distinguish reported usage from unavailable data instead of presenting missing values as measured results.</dd></div>
          <div><dt>Architecture in progress</dt><dd>The Rust/Tauri desktop shell hosts an embedded gateway. Backend routes are being migrated incrementally, with remaining routes forwarded to the Go runtime. Local-first refers to orchestration and storage; AI providers can still require network access.</dd></div>
        </dl>
      </details>
    </article>
  );
}
