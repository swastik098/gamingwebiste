import React from "react";

const GameArt = () => {
  const CardImages = [
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956973/Vault%20Games/unicorn_valley_2_kmwtsn.png",
      heading: "Image 1",
      description: "This is the description for Image 1",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956951/Vault%20Games/saw_map_z9vadc.png",
      heading: "Image 2",
      description: "This is the description for Image 2",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956947/Vault%20Games/loading3_1_1_hcshy2.png",
      heading: "Image 3",
      description: "This is the description for Image 3",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956927/Vault%20Games/platformer_concept_1_r7dyhs.png",
      heading: "Image 4",
      description: "This is the description for Image 4",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956921/Vault%20Games/concept_5_oiysyj.png",
      heading: "Image 5",
      description: "This is the description for Image 5",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956906/Vault%20Games/water_source_linlcs.png",
      heading: "Image 6",
      description: "This is the description for Image 6",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956914/Vault%20Games/bg_fight2_3_atx0ee.png",
      heading: "Image 7",
      description: "This is the description for Image 7",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956903/Vault%20Games/the_green_frog_sri8bb.png",
      heading: "Image 8",
      description: "This is the description for Image 8",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956903/Vault%20Games/yellow_qaliph.jpg",
      heading: "Image 9",
      description: "This is the description for Image 9",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956900/Vault%20Games/platformer_concept_2_afnbip.png",
      heading: "Image 10",
      description: "This is the description for Image 10",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956886/Vault%20Games/field_nuts_1_hssmha.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956885/Vault%20Games/parrot_dft3mb.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956886/Vault%20Games/piranha_wuxiz6.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956884/Vault%20Games/game_conceprt_szxz5s.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956882/Vault%20Games/game_conceprt4_v6ni60.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956884/Vault%20Games/ochen_novye_poni_s9ytdi.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956882/Vault%20Games/game_conceprt2_fcuruo.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956878/Vault%20Games/Dragon_items3_qzi0ft.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956872/Vault%20Games/Dragon_items_xgpx0f.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956872/Vault%20Games/Dragon_items2_fglu8p.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956872/Vault%20Games/dodo_bird_gorv7d.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956860/Vault%20Games/concept_games_enemies_2_1_wfr657.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956855/Vault%20Games/buff_2_rqpwej.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956847/Vault%20Games/Boy2_bnbxsn.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684579755/Vault%20Games/gameart/Untitled_011R_teyznv.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683960336/Vault%20Games/gameart/HighresScreenshot00091_o2qrac.jpg",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683960365/Vault%20Games/gameart/HighresScreenshot00002_a5amjc.jpg",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956962/Vault%20Games/%D1%81_4_aezfx2.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956932/Vault%20Games/bg_tank_6_5_qniqu9.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956958/Vault%20Games/%D1%81_2_oeibrr.png",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center gameArt">
      {CardImages.map((item, i) => (
        <div
          key={i}
          className="m-4 w-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform-Y hover:scale-110"
        >
          <img
            src={item.url}
            alt={item.heading}
            className="w-full h-48 object-cover"
          />
          {/* <div className="p-4">
            <h3 className="text-lg font-semibold">{item.heading}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default GameArt;
