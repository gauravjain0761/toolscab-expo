import { icons } from "../theme/Icons";

export const productDetails=[
    {id:1,name:"Pesurid",iconName:icons.image1},
    {id:2,name:"Tolmuimejad",iconName:icons.image2},
    {id:3,name:"Saed",iconName:icons.image3},
    {id:4,name:"Puhurid",iconName:icons.image4},
    {id:5,name:"Pesurid",iconName:icons.image2},
]

export const filterData = [
    {
      id: 1,
      name: "Pesurid",
      icon: icons.image1,
      productList: [
        { id: 1, icon: icons.image6, title: "Pesurid", label: "Loe lisaks" },
        {
          id: 2,
          icon: icons.image1,
          title: "KARCHER Puzzi 10/1",
          label: "Tekstiilipesur",
          aircon: 3240,
          volumeflow: 1,
          hoselength: 1,
        },
        {
          id: 3,
          icon: icons.image8,
          title: "KARCHER SC 1",
          label: "Aurupesur",
          aircon: 3240,
          volumeflow: 1,
          hoselength: 1,
        },
        {
          id: 4,
          icon: icons.image9,
          title: "KARCHER SC 2",
          label: "Aurupesur",
          aircon: 3240,
          volumeflow: 1,
          hoselength: 1,
        },
        {
          id: 5,
          icon: icons.image8,
          title: "KARCHER Puzzi 10/1",
          label: "Tekstiilipesur",
          aircon: 3240,
          volumeflow: 1,
          hoselength: 1,
        },
        {
          id: 6,
          icon: icons.image1,
          title: "KARCHER Puzzi 10/1",
          label: "Aurupesur",
          aircon: 3240,
          volumeflow: 1,
          hoselength: 1,
        },
        {
          id: 7,
          icon: icons.image9,
          title: "KARCHER SC 2",
          label: "Aurupesur",
          aircon: 3240,
          volumeflow: 1,
          hoselength: 1,
        },
      ],
    },
    { id: 2, name: "Tolmuimejad", icon: icons.image2 },
    { id: 3, name: "Saed", icon: icons.image4 },
    { id: 4, name: "Puhurid", icon: icons.image3 },
    { id: 5, name: "Trellid", icon: icons.image5 },
    { id: 6, name: "Lõikurid", icon: icons.image7 },
  ];
  
export  const checkList = [
    {
      id: 1,
      title: "Saadavus:",
      list: [
        { id: 1, name: "Kõik" },
        { id: 2, name: "Praegu saadaval" },
      ],
    },
    {
      id: 2,
      title: "Tootja",
      list: [
        { id: 1, name: "Karcher" },
        { id: 2, name: "Makita" },
      ],
    },
    {
      id: 3,
      title: "Tüüp",
      list: [
        { id: 1, name: "Akutoitel" },
        { id: 2, name: "Juhtmega" },
      ],
    },
  ];


export  const filterDataMobile = [
    {
        id: 1,
        name: "Pesurid",
        icon: icons.image1,
        productList: [
            { id: 1, icon: icons.image6, title: "Pesurid", label: "Loe lisaks" },
            { id: 2, icon: icons.image1, title: "KARCHER Puzzi 10/1", label: "Tekstiilipesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
            { id: 3, icon: icons.image8, title: "KARCHER SC 1", label: "Aurupesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
            { id: 4, icon: icons.image9, title: "KARCHER SC 2", label: "Aurupesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
            { id: 5, icon: icons.image8, title: "KARCHER Puzzi 10/1", label: "Tekstiilipesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
            { id: 6, icon: icons.image1, title: "KARCHER Puzzi 10/1", label: "Aurupesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
            { id: 7, icon: icons.image9, title: "KARCHER SC 2", label: "Aurupesur", aircon: 3240, volumeflow: 1, hoselength: 1, },
        ],
    },
    { id: 2, name: "Tolmuimejad", icon: icons.image2 },
    { id: 3, name: "Saed", icon: icons.image4 },
    { id: 4, name: "Puhurid", icon: icons.image3 },
    { id: 5, name: "Trellid", icon: icons.image5 },
    { id: 6, name: "Lõikurid", icon: icons.image7 },
];

 export const listData = [
  {
    id: 1,
    title: "Kuidas seadet rentida?",
    isSelect: false,
    subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique turpis eget pellentesque malesuada. Suspendisse at consectetur dolor. In\npellentesque velit eget ligula iaculis dignissim.\nCurabitur vel tempor augue.Curabitur ultricies ut nibh non ullamcorper.\nMauris iaculis viverra velit, a rutrum eros cursus non. `,
  },
  {
    id: 2,
    title: "Kuidas rentimise eest tasuda?",
    subTitle: "",
    isSelect: false,
  },
  { id: 3, title: "Kus teid leiab?", subTitle: "", isSelect: false },
  { id: 4, title: "Kuidas ma arve saan?", subTitle: "", isSelect: false },
  {
    id: 5,
    title: "Kas ma saan renditavaid seadmeid ka osta?",
    subTitle: "",
    isSelect: false,
  },
  {
    id: 6,
    title: "Seade läks katki, mida teha?",
    subTitle: "",
    isSelect: false,
  },
];

export const listDataRental = [
  {
    id: 1,
    title: "Renditingimused",
    isSelect: false,
    subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique turpis eget pellentesque malesuada. Suspendisse at consectetur dolor. In pellentesque velit eget ligula iaculis dignissim. Curabitur vel tempor augue. Curabitur ultricies ut nibh non ullamcorper. Mauris iaculis viverra velit, a rutrum eros cursus non. Sed tellus nisl, bibendum quis ullamcorper interdum, lacinia eget odio. Sed semper fermentum turpis eu efficitur. Praesent nec maximus risus. Aliquam mollis leo vel cursus congue. Phasellus tristique, tortor ac posuere consequat`,
  },
  {
    id: 2,
    title: "Pealkiri",
    subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique turpis eget pellentesque malesuada. Suspendisse at consectetur dolor. In pellentesque velit eget ligula iaculis dignissim. Curabitur vel tempor augue. Curabitur ultricies ut nibh non ullamcorper. Mauris iaculis viverra velit, a rutrum eros cursus non. Sed tellus nisl, bibendum quis ullamcorper interdum, lacinia eget odio. Sed semper fermentum turpis eu efficitur. Praesent nec maximus risus. Aliquam mollis leo vel cursus congue. Phasellus tristique, tortor ac posuere consequat`,
    isSelect: false,
  },
  {
    id: 3,
    title: "Pealkiri",
    subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique turpis eget pellentesque malesuada. Suspendisse at consectetur dolor. In pellentesque velit eget ligula iaculis dignissim. Curabitur vel tempor augue. Curabitur ultricies ut nibh non ullamcorper. Mauris iaculis viverra velit, a rutrum eros cursus non. Sed tellus nisl, bibendum quis ullamcorper interdum, lacinia eget odio. Sed semper fermentum turpis eu efficitur. Praesent nec maximus risus. Aliquam mollis leo vel cursus congue. Phasellus tristique, tortor ac posuere consequat`,
    isSelect: false,
  },
];

export const dataList = [
  { id: 1, name: "Miinimumhind ", subTitle: "3.29€" },
  { id: 1, name: "Broneering esimesed 15 min", subTitle: "Tasuta" },
  { id: 1, name: "Broneering pärast 15 min", subTitle: "0.16€/min" },
  { id: 1, name: "Minut", subTitle: "0.22€" },
  { id: 1, name: "Tund", subTitle: "5€" },
  { id: 1, name: "Päev", subTitle: "25€" },
];

export const tabData = [
  { id: 1, name: "Rendid" },
  { id: 2, name: "Minu profiil ja maksevahendid" },
  // { id: 3, name: "Maksevahendid" },
];