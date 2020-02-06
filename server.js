//sample server just in case. local only
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3333;


const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

// Data from https://www.uncommongoods.com/fun/by-interest/geek-gifts



server.get("/items", (req, res) => {
  res.json(items);
});
let itemId = 12;

server.get("/itemById/:id", (req, res) => {
  const { name } = req.params;
  const findItemById = item => {
    return item.name == name;
  };
  const foundItem = items.find(findItemById);
  if (!foundItem) {
    return sendUserError("No Item found by that ID", res);
  } else {
    res.json(foundItem);
  }
});

// server.post("/items", (req, res) => {
//   const { name, artist, mood, tempo, acoustic } = req.body;
//   const newItem = { name, artist, mood, tempo, acoustic, id: itemId };
//   if (!name || !artist) {
//     return sendUserError(
//       "Ya gone did goofed! Name/Price/Description are all required to create an item in the item DB.",
//       res
//     );
//   }
//   const findItemByName = item => {
//     return item.name === name;
//   };
//   if (items.find(findItemByName)) {
//     res.json()
//   }

//   // items.push(newItem);
//   itemId++;
//   // res.json(items);
// });

// server.put("/items/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, price, imageUrl, description, shipping } = req.body;
//   const findItemById = item => {
//     return item.id == id;
//   };
//   const foundItem = items.find(findItemById);
//   if (!foundItem) {
//     return sendUserError("No Item found by that ID", res);
//   } else {
//     if (name) foundItem.name = name;
//     if (price) foundItem.price = price;
//     if (imageUrl) foundItem.imageUrl = imageUrl;
//     if (description) foundItem.description = description;
//     if (shipping) foundItem.shipping = shipping;
//     res.json(items);
//   }
// });

// server.delete("/items/:id", (req, res) => {
//   const { id } = req.params;
//   const foundItem = items.find(item => item.id == id);

//   if (foundItem) {
//     const ItemRemoved = { ...foundItem };
//     items = items.filter(item => item.id != id);
//     res.status(200).json(items);
//   } else {
//     sendUserError("No item by that ID exists in the item DB", res);
//   }
// });

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});

let items = [
    {
        "track_index_num": 0,
        "track_id": "2RM4jf1Xa9zPgMGRDiht8O",
        "track_name": "Big Bank feat. 2 Chainz, Big Sean, Nicki Minaj",
        "artist_name": "YG",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e022732f5e923a01e803df47266"
    },
    {
        "track_index_num": 1,
        "track_id": "1tHDG53xJNGsItRA3vfVgs",
        "track_name": "BAND DRUM (feat. A$AP Rocky)",
        "artist_name": "YG",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e022a90f81ab1f368878313bb1a"
    },
    {
        "track_index_num": 2,
        "track_id": "6Wosx2euFPMT14UXiWudMy",
        "track_name": "Radio Silence",
        "artist_name": "R3HAB",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e027e48906b2c6bdd93902e3ab6"
    },
    {
        "track_index_num": 3,
        "track_id": "3J2Jpw61sO7l6Hc7qdYV91",
        "track_name": "Lactose",
        "artist_name": "Chris Cooq",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02bd7b27cd82e71406f79cfc8b"
    },
    {
        "track_index_num": 4,
        "track_id": "2jbYvQCyPgX3CdmAzeVeuS",
        "track_name": "Same - Original mix",
        "artist_name": "Chris Cooq",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02ee8d584b6e230f5faf0e47e2"
    },
    {
        "track_index_num": 5,
        "track_id": "26Y1lX7ZOpw9Ql3gGAlqLK",
        "track_name": "Debauchery - Original mix",
        "artist_name": "Curbo",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02b91d48bed9ce12440f4ad4b3"
    },
    {
        "track_index_num": 6,
        "track_id": "5eIyK73BrxHLnly4F9PWqg",
        "track_name": "Grandma - Original mix",
        "artist_name": "Bingo Play",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e023e8f49afdd73bc8713489ec4"
    },
    {
        "track_index_num": 7,
        "track_id": "13Mf2ZBpfNkgWJowvM5hXh",
        "track_name": "Bon appétit",
        "artist_name": "G Herbo",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e023ce78380a5a235de54d74f35"
    },
    {
        "track_index_num": 8,
        "track_id": "7BQaRTHk44DkMhIVNcXy2D",
        "track_name": "Among - Original mix",
        "artist_name": "34 Feet",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02d7e94f8dab1a143742449a04"
    },
    {
        "track_index_num": 9,
        "track_id": "049RxG2laEl9U1PGYeIqLV",
        "track_name": "Hazard - Original mix",
        "artist_name": "Chris Cooq",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e027b3452cd5795ff6e6f8593e4"
    },
    {
        "track_index_num": 10,
        "track_id": "118GQ70Sp6pMqn6w1oKuki",
        "track_name": "Strummer - Original mix",
        "artist_name": "Jarka",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02ecff0ffdcaa2b45119422d52"
    },
    {
        "track_index_num": 11,
        "track_id": "6S7cr72a7a8RVAXzDCRj6m",
        "track_name": "Big Racks - Original mix",
        "artist_name": "Big Koola",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02f16f0611a7767332b278d5cc"
    },
    {
        "track_index_num": 12,
        "track_id": "7h2qWpMJzIVtiP30E8VDW4",
        "track_name": "Rulet - Original mix",
        "artist_name": "Scatox",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e028fa6aa6a2ccbe9abd8b9e7a5"
    },
    {
        "track_index_num": 13,
        "track_id": "3KVQFxJ5CWOcbxdpPYdi4o",
        "track_name": "Head - Original mix",
        "artist_name": "Jupitar",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e020d96cd69a21515c1a115beee"
    },
    {
        "track_index_num": 14,
        "track_id": "0JjNrI1xmsTfhaiU1R6OVc",
        "track_name": "Defeding - Original mix",
        "artist_name": "Curbo",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0233551506b3981d3f6a6db0d5"
    },
    {
        "track_index_num": 15,
        "track_id": "3HjTcZt29JUHg5m60QhlMw",
        "track_name": "Jupiter - Original mix",
        "artist_name": "Junkee",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0202d21a4a7460823b46ca2039"
    },
    {
        "track_index_num": 16,
        "track_id": "42LWRdkWxM9aWmDImWvH6C",
        "track_name": "Koonra - Original mix",
        "artist_name": "Mamuton",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e022e03bf4ec3bca667382749f7"
    },
    {
        "track_index_num": 17,
        "track_id": "32dMH9MvlTJaABrPHY52Yb",
        "track_name": "Spouse - Original mix",
        "artist_name": "Yellow Ey",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e025da7d0227829f82fc4eb48bd"
    },
    {
        "track_index_num": 18,
        "track_id": "5RCPsfzmEpTXMCTNk7wEfQ",
        "track_name": "Prop - Original mix",
        "artist_name": "Bingo Play",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e026fb9294798372d1a4bea6543"
    },
    {
        "track_index_num": 19,
        "track_id": "0y0mwXrdEzjUK5Nq8GDPnY",
        "track_name": "Particular - Original mix",
        "artist_name": "Pablo XD",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e020c3338ed2ca61652870836d1"
    },
    {
        "track_index_num": 20,
        "track_id": "3RSMqu36JZnmMkrnNmnqyd",
        "track_name": "Tremor - Original mix",
        "artist_name": "Tremora",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02f62de54ef1aef306f89e1d0a"
    },
    {
        "track_index_num": 21,
        "track_id": "1o0fkWCltFHVeFIRHqvR5b",
        "track_name": "Cent - Original mix",
        "artist_name": "Junkee",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02ace8663d0ecdb2db915a8ec6"
    },
    {
        "track_index_num": 22,
        "track_id": "2iGShSeV6WcDbez5SLJ2bJ",
        "track_name": "Pantheon - Original mix",
        "artist_name": "Mamuton",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e026d17c327f7c19694ba189bea"
    },
    {
        "track_index_num": 23,
        "track_id": "2rNTo0tGUMW6rn0uHzV5er",
        "track_name": "Samplerup - Original mix",
        "artist_name": "Chris Cooq",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02fb4cd7adb7b0bae3905a1765"
    },
    {
        "track_index_num": 24,
        "track_id": "5Egkx8edirN0pR2R58C2ME",
        "track_name": "Sinisteraz",
        "artist_name": "Bob Janga",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02b09ca7ee422bebfd196e5041"
    },
    {
        "track_index_num": 25,
        "track_id": "67r3lnzstENsRYlZWq6DYP",
        "track_name": "Tenon",
        "artist_name": "Junkee",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02cb145100dd289f703e386de7"
    },
    {
        "track_index_num": 26,
        "track_id": "4X8W9SSu9D5MujoxwIwqw6",
        "track_name": "Strap - Original mix",
        "artist_name": "34 Feet",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e026ee905b5db9737457d6e34da"
    },
    {
        "track_index_num": 27,
        "track_id": "4lncSzeN8WOH2iHEO593iZ",
        "track_name": "Roxa - Original mix",
        "artist_name": "PUBG",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02f509b0b973fecc9af10b32f2"
    },
    {
        "track_index_num": 28,
        "track_id": "1L67mcddFQ65MfA3wO3MHV",
        "track_name": "Catholic - Original mix",
        "artist_name": "Big Koola",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02b7025495e40fc1e1bcad5e10"
    },
    {
        "track_index_num": 29,
        "track_id": "21DU83QG4jB4mQKh76X32h",
        "track_name": "Noboz",
        "artist_name": "Electrofanatik",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e023dfd6b378fe57ad2f9c1d057"
    },
    {
        "track_index_num": 30,
        "track_id": "08nyEVO684j7pcTAhEY2zJ",
        "track_name": "Astou - Original mix",
        "artist_name": "Alex Delgado",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02b936b4ad030d9602a7d9ba1f"
    },
    {
        "track_index_num": 31,
        "track_id": "4LMVmlX8WXPu8OyPwzkNpR",
        "track_name": "Reee",
        "artist_name": "Cubby One",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e024acc6fc46f1336b5dc262d10"
    },
    {
        "track_index_num": 32,
        "track_id": "7JYCpIzpoidDOnnmxmHwtj",
        "track_name": "Bathroom - Original mix",
        "artist_name": "ANNA-NO",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e026ea7af57da81b576cc01628e"
    },
    {
        "track_index_num": 33,
        "track_id": "0mmFibEg5NuULMwTVN2tRU",
        "track_name": "Shuffle - Original mix",
        "artist_name": "Sasha 23",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02f64abd3e0af74e4fafc8b663"
    },
    {
        "track_index_num": 34,
        "track_id": "01qc7HHvJdcNviyizhuCSI",
        "track_name": "Bordering - Original mix",
        "artist_name": "Zytrex",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0235434f489b75f0f412e17fd7"
    },
    {
        "track_index_num": 35,
        "track_id": "3ejMaQNGpxUWpFxik74rfH",
        "track_name": "Stool - Original mix",
        "artist_name": "Zeus Whey",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02b24c9cf0e2706957eceb3043"
    },
    {
        "track_index_num": 36,
        "track_id": "1jFL774GMnBl5Esa9SN4rL",
        "track_name": "Mamut - Original mix",
        "artist_name": "Mamuton",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02ad6644e86dcd0c0b20435d3a"
    },
    {
        "track_index_num": 37,
        "track_id": "2FLJcyNuD454zGjSLf6uOk",
        "track_name": "Bulk - Original mix",
        "artist_name": "Gladiator Osman",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02179d2755af01363039359199"
    },
    {
        "track_index_num": 38,
        "track_id": "4oBCrYdTrcBPouBzRAO95u",
        "track_name": "Tuesday",
        "artist_name": "Curbo",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02368948735df36551a96e173a"
    },
    {
        "track_index_num": 39,
        "track_id": "3zudm51wD90h7X7gncfhay",
        "track_name": "Dong",
        "artist_name": "Electrofanatik",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02da556f654b0649b07b84615b"
    },
    {
        "track_index_num": 40,
        "track_id": "7G8Qj5uNs9XShNtHJpFNTj",
        "track_name": "Beb",
        "artist_name": "Dan Thomas",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02d44daf84586dbc3bd762a7ce"
    },
    {
        "track_index_num": 41,
        "track_id": "3Z78Hd9B1OndIo7XJajwYR",
        "track_name": "Forgetter",
        "artist_name": "Mr Little Jeans",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e025b4a69fc1bc625d2cf8dc4de"
    },
    {
        "track_index_num": 42,
        "track_id": "16UKw34UY9w40Vc7TOkPpA",
        "track_name": "Nothing Here But Love",
        "artist_name": "Orjan Nilsen",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02c61fd537773ed6bc6d41c0d1"
    },
    {
        "track_index_num": 43,
        "track_id": "6GYRW61K0Rd5kdrW62sb2d",
        "track_name": "Week - Original mix",
        "artist_name": "ANNA-NO",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e029cd1e01ff04a9a5414943536"
    },
    {
        "track_index_num": 44,
        "track_id": "3PmPdmHHlDylHFW8yF5f8H",
        "track_name": "Reledaus",
        "artist_name": "Mbo Mentho",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e020aa967e0b4cfc4adf26aa7c8"
    },
    {
        "track_index_num": 45,
        "track_id": "7AgDITo8BVDoh2bXj2psYA",
        "track_name": "Waiting for U",
        "artist_name": "Burbank",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02865788e16330cfe0ed05dd3e"
    },
    {
        "track_index_num": 46,
        "track_id": "1I8s0BRa9QnrlAKmSuNEM3",
        "track_name": "Martyr Luther King",
        "artist_name": "PJ Lucid",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e029c0ff922bd746e7f3bef9cb8"
    },
    {
        "track_index_num": 47,
        "track_id": "3NXnKCNwFNk6xVYEZE2Tmu",
        "track_name": "Bien De To",
        "artist_name": "Messiah",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02ba46b02af17f0ff29308ca92"
    },
    {
        "track_index_num": 48,
        "track_id": "0Hd2n9oE0n4szD6mzrvcV4",
        "track_name": "Friend Like Me",
        "artist_name": "Betty Who",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02105f6e4e29622bcf8aa5ae59"
    },
    {
        "track_index_num": 49,
        "track_id": "5Y7DSov75Ic5viePFoD0WX",
        "track_name": "The Spot",
        "artist_name": "Your Smith",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02d87bc6d33a1648bf1918dbbf"
    },
    {
        "track_index_num": 50,
        "track_id": "0aYzQjr1hq0qJwp45diy5M",
        "track_name": "Heal Me",
        "artist_name": "Snow Patrol",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0291dac9fd0aaac5710d19ad9b"
    },
    {
        "track_index_num": 51,
        "track_id": "7B1he5MaIXjreL2R4qOa6h",
        "track_name": "Blue Bird",
        "artist_name": "Dirty Projectors",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02fbfd0d52d27069b99285a92f"
    },
    {
        "track_index_num": 52,
        "track_id": "7d2RGG3rRRex2lG8LlEHYo",
        "track_name": "Bday Cake",
        "artist_name": "Money Man",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02374d5c725cbfebb9da16b2ad"
    },
    {
        "track_index_num": 53,
        "track_id": "2XhJpVPyqhDU0EPDAIBpwe",
        "track_name": "The Hunt (feat. Corey Taylor)",
        "artist_name": "Code Orange",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e023e2b1cd6ab998e2a03a39347"
    },
    {
        "track_index_num": 54,
        "track_id": "0RS401jpQlguNb7ozzpri3",
        "track_name": "Sound on the Water",
        "artist_name": "Demun Jones",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02484f02df3de8813b4065f6f3"
    },
    {
        "track_index_num": 55,
        "track_id": "4NoBWcboBPNVI9Lf7e3ihA",
        "track_name": "Faded",
        "artist_name": "Tabi Bonney",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e025cbf516ab686d1b7a5ef98b0"
    },
    {
        "track_index_num": 56,
        "track_id": "5iz6oTqd2Xu0FLdTwom6mK",
        "track_name": "Free",
        "artist_name": "Trevor Hall",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e021604c80963d6fb8662bd28a7"
    },
    {
        "track_index_num": 57,
        "track_id": "5eyPkSDWFQNnnkZhFfE6Yo",
        "track_name": "Good Kisser - Recorded at Spotify Studios NYC",
        "artist_name": "Lake Street Dive",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0267883b950c7b87f9b34ba0f0"
    },
    {
        "track_index_num": 58,
        "track_id": "4SiGRgJVUUDpMbW6LxJRCH",
        "track_name": "BLACK HEART",
        "artist_name": "UNB",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e026fa390461a2831827d472769"
    },
    {
        "track_index_num": 59,
        "track_id": "2YWgPHZSzjfkh2dPsEuaTm",
        "track_name": "Balenciaga",
        "artist_name": "Dominion",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02bf9f59145ef11c2e605d3eec"
    },
    {
        "track_index_num": 60,
        "track_id": "1FYd1szE0RHXOAM00V4MEx",
        "track_name": "Coming In Hot",
        "artist_name": "Lecrae",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e027f0b3f0456b85dea228ad486"
    },
    {
        "track_index_num": 61,
        "track_id": "3E2UVESx8PxFMbxrnIsJrZ",
        "track_name": "No Exit",
        "artist_name": "Preme",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e025816427c70f4ffa84a438993"
    },
    {
        "track_index_num": 62,
        "track_id": "2PQVLVJ1J57t7uQO4Y2Mzq",
        "track_name": "Fairplay (feat. ASAP Ferg) - Remix",
        "artist_name": "Kiana Ledé",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0210b38487688cf7cf3371ec94"
    },
    {
        "track_index_num": 63,
        "track_id": "7H4KuOHwoKEgPla1yHhq1N",
        "track_name": "Some Nights",
        "artist_name": "Southside",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0232e3caf9dc6e13a7ca09e785"
    },
    {
        "track_index_num": 64,
        "track_id": "6bVIL7Jn0hHto1WftJ2VxU",
        "track_name": "Longer Than I Thought",
        "artist_name": "Loote",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02f32012526bea7cb7f7c292b6"
    },
    {
        "track_index_num": 65,
        "track_id": "0aNAiwG9kCxFKCJVbo6B1J",
        "track_name": "July 27, 2018: Total Lunar Eclipse",
        "artist_name": "Sleeping At Last",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e022fe72c20d8abfe268dbed4f0"
    },
    {
        "track_index_num": 66,
        "track_id": "1QozDHVFxNin5IQvFG7HZ8",
        "track_name": "Homecoming (feat. Bankroll Rico)",
        "artist_name": "Xavier Wulf",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02738834cced16d78daa101d11"
    },
    {
        "track_index_num": 67,
        "track_id": "6WclEbHlipCKMaPsG8Ii1k",
        "track_name": "Eastside Sliding (feat. idontknowjeffery & Chris Travis)",
        "artist_name": "Xavier Wulf",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02738834cced16d78daa101d11"
    },
    {
        "track_index_num": 68,
        "track_id": "5DmhuZg7dwVaA0XUlxxVVu",
        "track_name": "Our Origin (ASOT 874) [Tune Of The Week]",
        "artist_name": "Armin van Buuren",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 69,
        "track_id": "3Rx1zM3nDFQzAOYg9Hd0D4",
        "track_name": "Shanti (ASOT 874)",
        "artist_name": "Beatsole",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 70,
        "track_id": "6F5J2WFkygpTK89V7ovVB1",
        "track_name": "I Love You (ASOT 874)",
        "artist_name": "Ferry Corsten",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 71,
        "track_id": "6cVeUZciqheFBEaJ4haQdJ",
        "track_name": "Higher (ASOT 874)",
        "artist_name": "Audien",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 72,
        "track_id": "74pdubLPY21sp8poN4Jxoi",
        "track_name": "Heartbeat Tonight (ASOT 874) [Progressive Pick]",
        "artist_name": "Elevven",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 73,
        "track_id": "0ehIsKEuHfqMLo4Z06ghys",
        "track_name": "Sweet Lie (ASOT 874) [Future Favorite]",
        "artist_name": "Denis Kenzo",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 74,
        "track_id": "6PqVd4RkjnOTroZI6C4WW0",
        "track_name": "Tim (ASOT 874)",
        "artist_name": "ARTY",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 75,
        "track_id": "0bh4eFCAXeWDaFBr2aHtuP",
        "track_name": "Azile (ASOT 874)",
        "artist_name": "Davey Asprey",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 76,
        "track_id": "7915iolh0QvdpvSIiAj3h4",
        "track_name": "Rain (ASOT 874)",
        "artist_name": "ARTY",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 77,
        "track_id": "1F71wFfIO5MMcD5YRIgAi8",
        "track_name": "Sunrise (ASOT 874)",
        "artist_name": "ARTY",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 78,
        "track_id": "2yB5GBaK8C2zsKLlHV4ND3",
        "track_name": "Climb",
        "artist_name": "Neffex",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02121cd7d829806af4da73b9f3"
    },
    {
        "track_index_num": 79,
        "track_id": "6clAqlVyqTibiYdZENHbg9",
        "track_name": "A State Of Trance (ASOT 874) - Track Recap, Pt. 1",
        "artist_name": "Armin van Buuren",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 80,
        "track_id": "3wEVmwMEPENPXaWgW2hAyR",
        "track_name": "A State Of Trance (ASOT 874) - Track Recap, Pt. 2",
        "artist_name": "Armin van Buuren",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 81,
        "track_id": "7ETDWSQx083kZ1oybLDGzS",
        "track_name": "A State Of Trance (ASOT 874) - Track Recap, Pt. 3",
        "artist_name": "Armin van Buuren",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 82,
        "track_id": "08RRNkA508ClDTE0QYqDYn",
        "track_name": "A State Of Trance (ASOT 874) - ASOT Live From Tommorowland 2018 Announcement",
        "artist_name": "Armin van Buuren",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 83,
        "track_id": "7frbTr9qYVdeXjUUC6HwOj",
        "track_name": "A State Of Trance (ASOT 874) - Coming Up, Pt. 3",
        "artist_name": "Armin van Buuren",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 84,
        "track_id": "6CHzMqs0evRZb9bczFWnyM",
        "track_name": "Fly Away (ASOT 874) - KhoMha Remix",
        "artist_name": "Vincent de Moor",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 85,
        "track_id": "1h8QJnnfhkpGDq1wLw6Wa9",
        "track_name": "Breathe Deep (ASOT 874)",
        "artist_name": "Rub!k",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 86,
        "track_id": "753SBYPEiJG9wTkXBSgMce",
        "track_name": "Wake Walker",
        "artist_name": "Xavier Wulf",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02738834cced16d78daa101d11"
    },
    {
        "track_index_num": 87,
        "track_id": "0gP7v27ftkscMDsg8LblW1",
        "track_name": "Saving Light (ASOT 874) [Service For Dreamers]",
        "artist_name": "Gareth Emery",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 88,
        "track_id": "69LlMR6xB0ZzWMd8JfPmed",
        "track_name": "A State Of Trance (ASOT 874) - Coming Up, Pt. 2",
        "artist_name": "Armin van Buuren",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 89,
        "track_id": "55gqdKiMHGSZ2vyyL8HMAs",
        "track_name": "Petra (ASOT 874)",
        "artist_name": "Fatum",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 90,
        "track_id": "7vbF57ErhjDbuyrNoq24K0",
        "track_name": "I'll Be Your Light (ASOT 874)",
        "artist_name": "Alex Sonata",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 91,
        "track_id": "0P2U58g8RHQ51exzBZglwu",
        "track_name": "A State Of Trance (ASOT 874) - Interview with ARTY, Pt. 1",
        "artist_name": "Armin van Buuren",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 92,
        "track_id": "15XCwvNmzx7NhUmHWwvYEV",
        "track_name": "Inception (ASOT 874)",
        "artist_name": "Specific Slice",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 93,
        "track_id": "7BOPIDwfcZxrijQsmmIJNm",
        "track_name": "There Is Light (ASOT 874) - A.R.D.I. Remix",
        "artist_name": "Andy Moor",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 94,
        "track_id": "2vHpodBjzmquS1otuCN9Ra",
        "track_name": "A Day's Routine - Interlude",
        "artist_name": "Xavier Wulf",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e02738834cced16d78daa101d11"
    },
    {
        "track_index_num": 95,
        "track_id": "4b015GCZ0TsIGAx5NpDs7I",
        "track_name": "A State Of Trance (ASOT 874) - Coming Up, Pt. 1",
        "artist_name": "Armin van Buuren",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 96,
        "track_id": "38OiUD6l3Tm1jgSLGC9GNH",
        "track_name": "A State Of Trance (ASOT 874) - Interview with ARTY, Pt. 2",
        "artist_name": "Armin van Buuren",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 97,
        "track_id": "5BCnkUBpOza5RMvAc7hhhW",
        "track_name": "Frostbite (ASOT 874)",
        "artist_name": "Hamzeh",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 98,
        "track_id": "6d4kE5Kz6ZD4XNrItzdG2m",
        "track_name": "Haunted (ASOT 874) - Avao Remix",
        "artist_name": "MaRLo",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    },
    {
        "track_index_num": 99,
        "track_id": "3VxbUOrzirMCahEIsA1d6V",
        "track_name": "A State Of Trance (ASOT 874) - Intro",
        "artist_name": "Armin van Buuren",
        "album_cover_url": "https://i.scdn.co/image/ab67616d00001e0298f2fc4d32a54591b7878d55"
    }
]