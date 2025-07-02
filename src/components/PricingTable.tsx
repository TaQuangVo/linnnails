export default function PricingTable() {
  return (
    <div className="bg-[#fdf7f0] text-[#3a2e1e] px-6 py-10 max-w-4xl mx-auto">
      <div className="text-sm uppercase tracking-widest font-semibold mb-1">By Linn Be</div>
      <h1 className="text-5xl font-light italic mb-8">
        Prislista
      </h1>

      {/* Manikyr & Pedikyr */}
      <section className="mb-10">
        <h2 className="uppercase text-2xl font-semibold border-b border-[#d8cbb9] pb-2 mb-4 tracking-wide">
          Manikyr & Pedikyr
        </h2>
        <div className="space-y-2 text-xl font-medium">
          <div className="flex justify-between">
            <span>Manikyr vanlig lack</span><span>399:-</span>
          </div>
          <div className="flex justify-between">
            <span>Pedikyr vanlig lack</span><span>499:-</span>
          </div>
          <div className="flex justify-between">
            <span>Paket manikyr + pedikyr med vanlig lack</span><span>799:-</span>
          </div>
          <div className="flex justify-between mt-4">
            <span>Manikyr gellack</span><span>449:-</span>
          </div>
          <div className="flex justify-between">
            <span>Pedikyr gellack</span><span>549:-</span>
          </div>
          <div className="flex justify-between">
            <span>Paket manikyr + pedikyr med gellack</span><span>899:-</span>
          </div>
          <div className="flex justify-between mt-4">
            <span>Gellack för händer</span><span>399:-</span>
          </div>
          <div className="flex justify-between">
            <span>Gellack för fötter</span><span>399:-</span>
          </div>
          <div className="flex justify-between">
            <span>Gellack för händer + fötter</span><span>699:-</span>
          </div>
          <div className="text-xs text-[#7c6f60]">
            (Fransk +50:- | Chrome, Cateye +100:-)
          </div>
        </div>
      </section>

      {/* Nagelförlängning */}
      <section>
        <h2 className="uppercase text-2xl font-semibold border-b border-[#d8cbb9] pb-2 mb-4 tracking-wide">
          Nagelförlängning akryl / gele
        </h2>
        <div className="grid grid-cols-3 text-xl font-medium gap-y-2">
          <div></div>
          <div className="text-right font-semibold">Nytt set</div>
          <div className="text-right font-semibold">Påfyllning</div>

          <div>NATURLIGA</div>
          <div className="text-right">599:-</div>
          <div className="text-right">499:-</div>

          <div>GELLACK</div>
          <div className="text-right">699:-</div>
          <div className="text-right">599:-</div>

          <div>FRANSK / OMBRE</div>
          <div className="text-right">749:-</div>
          <div className="text-right">649:-</div>

          <div className="col-span-3 mt-4 border-t border-[#d8cbb9] pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Borttagning gellack</span><span>199:-</span>
            </div>
            <div className="flex justify-between">
              <span>Borttagning akryl/gele</span><span>299:-</span>
            </div>
            <div className="flex justify-between">
              <span>Dekoration / design</span><span>från 29:-</span>
            </div>
            <div className="flex justify-between">
              <span>Extra långa</span><span>från 99:-</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
