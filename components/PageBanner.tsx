/** Grey banner used by inner pages, with the same heading and colour strip as "Core Services". */
export function PageBanner({ title }: { title: string }) {
  return (
    <section className="page-banner">
      <div className="row">
        <h1 className="core-heading">{title}</h1>
      </div>
    </section>
  );
}
