export default function Jumbotron() {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="flex gap-10 mx-auto w-10/12">
        <div className="py-24 w-4/12">
          <span className="text-red-500 text-sm mb-3">E-Commerce</span>
          <h1 className="font-bold text-[62px] text-slate-800">
            It is all <br /> about you
          </h1>
          <p className="text-slate-500 mt-3 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            repellat tempora odit quae quibusdam.
          </p>
        </div>
        <div className="py-8 mx-auto w-6/12">
          <img
            src="/src/assets/img/jumbotron2.png"
            alt="jumbotron"
            className="drop-shadow-lg max-w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
