/**
 * Dummy hook as single truth of source.
 *
 * @returns {Object[]}
 */
export function useData() {
  return [
    {
      id: 0,
      title: "Buka Bersama di Cibubur",
      date: "2021-04-27",
      contact: "+62 123-523-222",
      description:
        "Ut quis fugiat reprehenderit officia esse reprehenderit enim qui non sint. Ad amet cupidatat sunt ad. Anim Lorem excepteur quis fugiat culpa nostrud do.",
      thumbnail: "mosque-1.jpg",
      featured: false,
      city: "Jakarta",
    },
    {
      id: 1,
      title: "Reuni dan Silaturahmi SMPN 9 Jakarta",
      date: "2021-04-28",
      contact: "+62 141-501-223",
      description:
        "Duis nisi do adipisicing irure. Excepteur id minim reprehenderit consectetur eiusmod nulla reprehenderit veniam nulla do qui voluptate. Eiusmod nostrud excepteur tempor incididunt veniam enim. Duis magna ipsum duis consequat enim proident consectetur incididunt excepteur sunt. Exercitation officia esse laboris eu reprehenderit labore id anim cupidatat culpa consectetur nostrud enim.",
      thumbnail: "mosque-2.jpg",
      featured: true,
      city: "Jakarta",
    },
    {
      id: 2,
      title: "Aksi Peduli dan Donasi untuk yang membutuhkan",
      date: "2021-04-29",
      contact: "+62 141-588-251",
      description:
        "Amet aliqua aliqua consectetur mollit ad anim proident officia do tempor deserunt incididunt id. Enim exercitation ea aliqua aliquip eiusmod reprehenderit duis sit labore mollit anim magna. Dolor dolor est et exercitation laborum irure laboris proident. In esse labore consequat eiusmod eu non elit do nulla velit officia laboris reprehenderit nisi. Ut do ex consequat ad in consectetur enim commodo ipsum qui irure cupidatat do.",
      thumbnail: "community-1.jpg",
      featured: true,
      city: "Bandung",
    },
    {
      id: 3,
      title: "Buka Bersama Mahasiswa CCIT FTUI 2019",
      date: "2021-04-30",
      contact: "+62 141-412-551",
      description:
        "Nostrud minim fugiat officia cupidatat adipisicing consequat anim. Deserunt dolore nostrud commodo minim fugiat enim dolore sint dolore fugiat ea. Cillum consectetur consequat elit labore sit nisi cillum pariatur dolore. Tempor dolor do minim eiusmod. Occaecat commodo reprehenderit minim ullamco reprehenderit occaecat enim do.",
      thumbnail: "mosque-3.jpg",
      featured: true,
      city: "Depok",
    },
    {
      id: 4,
      title: "Buka Bersama dengan Keluarga Besar Kennan Fattahillah",
      date: "2021-04-31",
      contact: "+62 512-128-064",
      description:
        "Qui excepteur tempor sint mollit ex reprehenderit fugiat eu duis cupidatat. Nisi dolore minim anim laborum ut sit. Ipsum officia ex id cillum esse amet reprehenderit labore mollit fugiat veniam officia.",
      thumbnail: "mosque-4.jpg",
      featured: false,
      city: "Jakarta",
    },
  ];
}

/**
 * Filtering and removing duplication for the `city` property of the data.
 *
 * @param {Object} data Data Source @see useData()
 * @returns {string[]}
 */
export function getUniqueLocations(data) {
  let uniqueLocations = [];
  data.forEach(({ city }) => {
    if (!uniqueLocations.includes(city)) {
      uniqueLocations.push(city);
    }
  });

  return uniqueLocations;
}
