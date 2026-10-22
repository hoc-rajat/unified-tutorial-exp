import { pathComparison } from '../../data/branchRegistrationOverview';

export function PathComparison() {
  return (
    <section aria-labelledby="path-comparison" className="mt-20 grid gap-10 border-t border-line pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-16">
      <div>
        <h2 id="path-comparison" className="text-2xl font-semibold tracking-tight text-white">
          Not sure which path to choose?
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">
          The self-service path focuses on independent instructions for the official procedure. The assisted path explains
          how the House of Companies-supported workflow guides you through the same journey.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">
          Both paths are connected: every stage links to its counterpart, so you can switch whenever you need a different
          perspective.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line">
        <table className="w-full text-left text-[15px]">
          <caption className="sr-only">Comparison of the two learning paths</caption>
          <thead className="bg-ink-800">
            <tr>
              <th scope="col" className="w-[22%] px-5 py-4 text-[13px] font-medium text-fg-subtle">
                <span className="sr-only">Aspect</span>
              </th>
              <th scope="col" className="px-5 py-4 font-semibold text-white">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-lavender" aria-hidden="true" />
                  Do It Yourself
                </span>
              </th>
              <th scope="col" className="px-5 py-4 font-semibold text-white">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-pink" aria-hidden="true" />
                  With HOC
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {pathComparison.map((row) =>
            <tr key={row.label} className="align-top">
                <th scope="row" className="px-5 py-4 text-[13px] font-medium text-fg-subtle">
                  {row.label}
                </th>
                <td className="px-5 py-4 leading-relaxed text-fg-muted">{row.selfService}</td>
                <td className="px-5 py-4 leading-relaxed text-fg-muted">{row.hocAssisted}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>);

}