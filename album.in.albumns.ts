const releaseYear = (album: string): number | string => {
  const albums = {
    "2015": ["Vulnicura", "Honeymoon", "Rebel Heart"],
    "2016": ["Lemonade", "Blackstar", "A Moon Shaped Pool"],
    "2017": ["Flower Boy", "Antisocialites"],
    "2018": ["El Mal Querer", "Someone Out There", "Cranberry", "Kamikaze"],
    "2019": ["thank u next", "Magdalene", "Ode to Joy"],
    "2020": ["Rough and Rowdy Ways", "folklore", "Future Nostalgia", "Colores"],
  };

  for (const key of Object.keys(albums)) {
    if (albums[key].includes(album)) {
      return +key;
    }
  }
  return "Unknown";
};
console.log(releaseYear("thank u next"));
