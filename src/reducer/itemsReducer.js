const initialData = {
  items: [
    {
      phone_name: "Chromebook Tab 10",
      slug: "acer_chromebook_tab_10-9139",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-chromebook-tab-10.jpg",
    },
    {
      phone_name: "Iconia Talk S",
      slug: "acer_iconia_talk_s-8306",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-iconia-talk-s.jpg",
    },
    {
      phone_name: "Liquid Z6 Plus",
      slug: "acer_liquid_z6_plus-8305",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z6-plus.jpg",
    },
    {
      phone_name: "Liquid Z6",
      slug: "acer_liquid_z6-8304",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z6.jpg",
    },
    {
      phone_name: "Iconia Tab 10 A3-A40",
      slug: "acer_iconia_tab_10_a3_a40-8080",
      image:
        "https://fdn2.gsmarena.com/vv/bigpic/acer-iconia-tab-10-a3-a40.jpg",
    },
    {
      phone_name: "Liquid X2",
      slug: "acer_liquid_x2-8034",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-x2-1.jpg",
    },
    {
      phone_name: "Liquid Jade 2",
      slug: "acer_liquid_jade_2-7956",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-jade-2.jpg",
    },
    {
      phone_name: "Liquid Zest Plus",
      slug: "acer_liquid_zest_plus-8059",
      image:
        "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-zest-plus-z628.jpg",
    },
    {
      phone_name: "Liquid Zest",
      slug: "acer_liquid_zest-7955",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-zest.jpg",
    },
    {
      phone_name: "Predator 8",
      slug: "acer_predator_8-7750",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-predator-8.jpg",
    },
    {
      phone_name: "Liquid Jade Primo",
      slug: "acer_liquid_jade_primo-7650",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-jade-primo-.jpg",
    },
    {
      phone_name: "Liquid Z330",
      slug: "acer_liquid_z330-7530",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z320-z330.jpg",
    },
    {
      phone_name: "Liquid Z320",
      slug: "acer_liquid_z320-7531",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z320-z330.jpg",
    },
    {
      phone_name: "Liquid Z630S",
      slug: "acer_liquid_z630s-7529",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z630.jpg",
    },
    {
      phone_name: "Liquid Z630",
      slug: "acer_liquid_z630-7528",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z630.jpg",
    },
    {
      phone_name: "Liquid Z530S",
      slug: "acer_liquid_z530s-7527",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z530.jpg",
    },
    {
      phone_name: "Liquid Z530",
      slug: "acer_liquid_z530-7526",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z530.jpg",
    },
    {
      phone_name: "Liquid M330",
      slug: "acer_liquid_m330-7524",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-m320-m330.jpg",
    },
    {
      phone_name: "Liquid M320",
      slug: "acer_liquid_m320-7525",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-m320-m330.jpg",
    },
    {
      phone_name: "Iconia Tab 10 A3-A30",
      slug: "acer_iconia_tab_10_a3_a30-7218",
      image:
        "https://fdn2.gsmarena.com/vv/bigpic/acer-iconia-tab-10-a3-a30-new.png",
    },
    {
      phone_name: "Iconia One 8 B1-820",
      slug: "acer_iconia_one_8_b1_820-7217",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-iconia-one-8-b1-820.jpg",
    },
    {
      phone_name: "Iconia Tab A3-A20",
      slug: "acer_iconia_tab_a3_a20-7136",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-a3-20.jpg",
    },
    {
      phone_name: "Iconia Tab A3-A20FHD",
      slug: "acer_iconia_tab_a3_a20fhd-7135",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-a3-20.jpg",
    },
    {
      phone_name: "Liquid Jade Z",
      slug: "acer_liquid_jade_z-7072",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-jade-z.jpg",
    },
    {
      phone_name: "Liquid Z520",
      slug: "acer_liquid_z520-7073",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z520.jpg",
    },
    {
      phone_name: "Liquid Z220",
      slug: "acer_liquid_z220-7074",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z220.jpg",
    },
    {
      phone_name: "Liquid M220",
      slug: "acer_liquid_m220-7071",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-m220.jpg",
    },
    {
      phone_name: "Liquid Z410",
      slug: "acer_liquid_z410-6912",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z410.jpg",
    },
    {
      phone_name: "Liquid Jade S",
      slug: "acer_liquid_jade_s-6864",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-jade-s-s56.jpg",
    },
    {
      phone_name: "Liquid Z500",
      slug: "acer_liquid_z500-6635",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z5.jpg",
    },
    {
      phone_name: "Liquid X1",
      slug: "acer_liquid_x1-6419",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-x1.jpg",
    },
    {
      phone_name: "Liquid Jade",
      slug: "acer_liquid_jade-6423",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-jade.jpg",
    },
    {
      phone_name: "Liquid E700",
      slug: "acer_liquid_e700-6420",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-e700.jpg",
    },
    {
      phone_name: "Liquid E600",
      slug: "acer_liquid_e600-6421",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-e600-1.jpg",
    },
    {
      phone_name: "Liquid Z200",
      slug: "acer_liquid_z200-6422",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-z200.jpg",
    },
    {
      phone_name: "Iconia Tab 8 A1-840FHD",
      slug: "acer_iconia_tab_8_a1_840fhd-6424",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-iconia-tab-8-2014-1.jpg",
    },
    {
      phone_name: "Iconia Tab 7 A1-713",
      slug: "acer_iconia_tab_7_a1_713-6343",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-iconia-tab-7.jpg",
    },
    {
      phone_name: "Iconia Tab 7 A1-713HD",
      slug: "acer_iconia_tab_7_a1_713hd-6342",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-iconia-tab-7.jpg",
    },
    {
      phone_name: "Iconia One 7 B1-730",
      slug: "acer_iconia_one_7_b1_730-6341",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-iconia-one-7.jpg",
    },
    {
      phone_name: "Liquid E3 Duo Plus",
      slug: "acer_liquid_e3_duo_plus-6680",
      image: "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-e3-plus.jpg",
    },
  ],
};

function itemsReducer(state = initialData, action) {

  switch (action.type) {
    case 'ADD_ITEM': return {
      ...state,
      items: [...state.items, action.payload]
    }
    default :{

    }

  }
  return state;
}
export default itemsReducer;
