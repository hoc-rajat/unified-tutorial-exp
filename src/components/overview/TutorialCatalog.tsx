import { tutorialCatalog } from '../../data/branchRegistrationOverview';

export function TutorialCatalog() {
  return (
    <section aria-labelledby="tutorial-catalog" className="mt-20 border-t border-line pt-14">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="tutorial-catalog" className="text-2xl font-semibold tracking-tight text-white">
            More guides with both learning paths
          </h2>
          <p className="mt-2 max-w-2xl text-[15px] text-fg-muted">
            Each guide uses the same structure and offers a self-service and an HOC-assisted path.
          </p>
        </div>
      </div>
      <ul className="mt-8 grid divide-y divide-line rounded-2xl border border-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {tutorialCatalog.map((item) =>
        <li key={item.id} className="flex flex-col p-6">
            <p className="text-[13px] text-fg-subtle">{item.country}</p>
            <p className="mt-1 text-lg font-semibold text-white">{item.title}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="flex items-center gap-1.5" aria-label="Self-service and HOC-assisted paths">
                <span className="h-2 w-2 rounded-full bg-lavender" aria-hidden="true" />
                <span className="h-2 w-2 rounded-full bg-pink" aria-hidden="true" />
                <span className="ml-1 text-[13px] text-fg-muted">2 paths</span>
              </span>
              <span className="rounded-full border border-line-strong px-2.5 py-0.5 text-xs text-fg-subtle">{item.status}</span>
            </div>
          </li>
        )}
      </ul>
    </section>);

}