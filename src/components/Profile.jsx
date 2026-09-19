import profile from "../data/profile";
import software from "../data/software";

function Profile() {
  return (
    <section id="profile" className="relative bg-black px-6 py-24 lg:px-20 lg:py-32">

      <div className="mx-auto w-full max-w-[1600px]">

        {/* Titre de section */}
        <div className="relative mb-[38px] w-fit">

          <h2 className="font-archivo text-[48px] font-black italic leading-none tracking-[-0.05em] text-white lg:text-[60px]">
            PROFIL
          </h2>

          <span className="absolute left-1/2 top-1/2 whitespace-nowrap font-burgues text-[70px] leading-none text-[#6A00FF] lg:text-[60px]" style={{ transform: "translate(-50%, -50%)" }}>
            Mon
          </span>

        </div>


        {/* Contenu principal */}
        <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Informations */}
          <div className="max-w-[720px]">

            <p className="mb-10 text-xs font-bold italic text-[#6A00FF] lg:text-base">
              &lt;creator&gt;
            </p>

            <div className="space-y-8">
              {profile.map((item) => (
                <div key={item.tag}>

                  <p className="text-xs font-bold italic text-[#6A00FF] lg:text-base">
                    &lt;{item.tag}&gt;
                  </p>

                  <p className="ml-4 max-w-[700px] text-xs leading-[1.45] text-white lg:text-base">
                    {item.content}
                  </p>

                  <p className="text-xs font-bold italic text-[#6A00FF] lg:text-base">
                    &lt;/{item.tag}&gt;
                  </p>

                </div>
              ))}
            </div>

            <p className="mt-10 text-xs font-bold italic text-[#6A00FF] lg:text-base">
              &lt;/creator&gt;
            </p>

          </div>


          {/* Visuel + logiciels */}
          <div className="flex flex-col items-center">

            {/* Spider-Man */}
            <img src="/images/logo_spiderman.png" alt="Logo Spider-Man" className="w-[220px] sm:w-[280px] lg:w-[430px]" />


            {/* Logiciels */}
            <div className="mt-20 grid w-full max-w-[550px] grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">

              {software.map((item) => (
                <div key={item.name} className="flex h-8 items-center justify-center gap-3 rounded-full border border-white px-4">

                  <span className="whitespace-nowrap text-xs tracking-wide text-white lg:text-sm">
                    {item.name}
                  </span>

                  <img src={item.icon} alt="" className="h-4 w-4 object-contain" />

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Profile;