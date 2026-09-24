function Contact() {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="contact" className="relative bg-white text-black">

      {/* ========================================
          TITRE SUR FOND VIOLET
      ======================================== */}
      <div className="relative flex min-h-[120px] items-end bg-[#6A00FF] px-6 pb-10 sm:min-h-[260px] sm:px-10 lg:min-h-[300px] lg:px-20 lg:pb-12">

        <div className="mx-auto w-full max-w-[1600px]">

          <div className="relative w-fit">
            <h2 className="font-archivo text-[52px] font-black italic leading-none tracking-[-0.05em] text-black sm:text-[80px] lg:text-[120px]">
              CONTACTS
            </h2>

            <span
              className="absolute left-1/2 top-1/2 whitespace-nowrap font-burgues text-[65px] leading-none text-white sm:text-[100px] lg:text-[120px]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              Mes
            </span>
          </div>

        </div>
      </div>


      {/* ========================================
          FOOTER
      ======================================== */}
      <div className="relative flex min-h-[600px] flex-col bg-white px-6 pt-16 pb-8 sm:px-10 sm:pt-20 lg:block lg:min-h-[650px] lg:px-0 lg:pt-0 lg:pb-0">


        {/* Micrographismes */}
        <div className="mb-16 flex flex-col items-start gap-[35px] sm:mb-20 lg:absolute lg:left-[5%] lg:top-[70px] lg:mb-0 lg:gap-[60px]">

          <img
            src={`${base}images/micrographisme_01.png`}
            alt=""
            className="h-auto w-[22px] sm:w-[24px] lg:w-[28px]"
          />

          <img
            src={`${base}images/micrographisme_02.png`}
            alt=""
            className="h-auto w-[22px] sm:w-[24px] lg:w-[28px]"
          />

        </div>


        {/* Bloc contact */}
        <div className="ml-auto w-full max-w-[260px] sm:max-w-[280px] lg:absolute lg:right-[60px] lg:top-[80px] lg:w-fit lg:max-w-none">

          {/* Spider-Man */}
          <img
            src={`${base}images/logo_spiderman.png`}
            alt="Logo Spider-Man"
            className="mb-[32px] h-auto w-[115px] object-contain sm:w-[130px] lg:mb-[42px] lg:w-[155px]"
          />


          {/* Coordonnées */}
          <div>

            <h3 className="mb-[30px] text-[12px] font-normal leading-none sm:text-[13px] lg:mb-[38px]">
              Contact
            </h3>


            {/* Email */}
            <div className="mb-[18px]">
              <p className="mb-[2px] text-[11px] leading-[1.4] sm:text-[12px]">
                Email :
              </p>

              <p className="break-words text-[11px] font-bold leading-[1.4] text-purple sm:text-[12px]">
                arthurmande@icloud.com
              </p>
            </div>


            {/* Téléphone */}
            <div>
              <p className="mb-[2px] text-[11px] leading-[1.4] sm:text-[12px]">
                Téléphone:
              </p>

              <p className="text-[11px] font-bold leading-[1.4] text-purple sm:text-[12px]">
                06.38.20.69.97
              </p>
            </div>

          </div>

        </div>


        {/* Copyright */}
        <p className="mt-auto pt-20 font-archivo text-[12px] font-black sm:text-[13px] lg:absolute lg:bottom-[35px] lg:left-[5%] lg:pt-0 lg:text-[14px]">
          © 2026 ARTHUR MANDÉ
        </p>

      </div>

    </section>
  );
}

export default Contact;