function Domains() {
  return (
    <section id="domains" className="relative bg-black px-6 pt-32 pb-48 lg:px-20 lg:pt-40 lg:pb-64">

      <div className="mx-auto w-full max-w-[1600px]">

        {/* Séparateur supérieur */}
        <div className="mb-24 flex items-center justify-between lg:mb-32">
          <span className="rounded-full border border-white px-4 py-1 text-[10px]">
            DOM-A1N3S
          </span>

          <span className="text-[10px] font-instrument">
            DCCLXXVII
          </span>

          <span className="rounded-full border border-white px-4 py-1 text-[10px]">
            DOM-A1N3S
          </span>
        </div>


        {/* Contenu */}
        <div className="grid gap-14 lg:grid-cols-[0.8fr_0.8fr_1fr] lg:items-center lg:gap-20">

          {/* Titre + description */}
          <div>

            {/* Titre */}
            <div className="relative mb-[38px] w-fit">
              <h2 className="font-archivo text-[48px] font-black italic leading-none tracking-[-0.05em] text-white lg:text-[60px]">
                DOMAINES
              </h2>

              <span className="absolute left-1/2 top-1/2 whitespace-nowrap font-burgues text-[70px] leading-none text-[#6A00FF] lg:text-[60px]" style={{ transform: "translate(-50%, -50%)" }}>
                Mes
              </span>
            </div>

            {/* Description */}
            <p className="max-w-[380px] text-xs leading-[1.45] text-white lg:text-base">
              J'explore différents domaines du design, de l'identité visuelle au webdesign, en passant par le motion design, la 3D et le print, avec une approche alliant créativité, cohérence et sens du détail.
            </p>

          </div>


          {/* Liste des domaines */}
          <ul className="flex flex-col gap-3 text-xl italic text-white lg:text-2xl">
            <li className="flex items-center gap-4">
              <span className="text-[#6A00FF]">-</span>
              <span>Web design</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="text-[#6A00FF]">-</span>
              <span>Print</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="text-[#6A00FF]">-</span>
              <span>Branding</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="text-[#6A00FF]">-</span>
              <span>Motion design</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="text-[#6A00FF]">-</span>
              <span>3D</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="text-[#6A00FF]">-</span>
              <span>Communication</span>
            </li>
          </ul>


          {/* Diagramme */}
          <div className="flex justify-center lg:justify-end">
            <img src="/images/diagramme.png" alt="Diagramme représentant mes compétences" className="w-full max-w-[320px] lg:max-w-[430px]" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Domains;