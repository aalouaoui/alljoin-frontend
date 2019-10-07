import imgAV from "assets/img/categories/audio-visual.jpg";
import imgKD from "assets/img/categories/kids.jpg";
import imgPF from "assets/img/categories/party-flavor.jpg";
import imgDG from "assets/img/categories/design.jpg";
import imgFD from "assets/img/categories/food.jpg";
import imgLOC from "assets/img/categories/location.jpg";
import imgENT from "assets/img/categories/entertainers.jpg";
import imgCO from "assets/img/categories/fabrics.jpg";

const categories = [
  {
    label: "Audio Visuals",
    path: "audio-visuals",
    img: imgAV,
    content: [
      { label: "Photography", path: "audio-visuals/photography" },
      { label: "Videography", path: "audio-visuals/videography" },
      { label: "Lighting", path: "audio-visuals/lighting" }
    ]
  },
  {
    label: "Kids Entertainment",
    path: "kids-entertainment",
    img: imgKD,
    content: [
      { label: "Characters", path: "kids-entertainment/characters" },
      { label: "Games", path: "kids-entertainment/games" },
      { label: "Fun Stuff", path: "kids-entertainment/fun-stuff" }
    ]
  },
  {
    label: "Party Favors",
    path: "party-favors",
    img: imgPF,
    content: [
      { label: "Party Packs", path: "party-favors/party-Packs" },
      { label: "Gifts", path: "party-favors/gifts" },
      { label: "Souvenirs", path: "party-favors/souvenirs" }
    ]
  },
  {
    label: "Design & Graphics",
    path: "design-graphics",
    img: imgDG,
    content: [
      { label: "Printing", path: "design-graphics/printing" },
      { label: "Invitation Cards", path: "design-graphics/invitation-cards" },
      { label: "Stickers", path: "design-graphics/stickers" }
    ]
  },
  {
    label: "Food & Drinks",
    path: "food-drinks",
    img: imgFD,
    content: [
      { label: "Finger Foods", path: "food-drinks/finger-foods" },
      { label: "International Cuisine", path: "food-drinks/international-cuisine" },
      { label: "Local Cuisine", path: "food-drinks/local-cuisine" },
      { label: "Drinks", path: "food-drinks/drinks" }
    ]
  },
  {
    label: "Location",
    path: "location",
    img: imgLOC,
    content: [
      { label: "Venue / Halls", path: "location/venue-halls" },
      { label: "Decoration", path: "location/decoration" },
      { label: "Rentals", path: "location/rentals" }
    ]
  },
  {
    label: "Entertainers",
    path: "entertainers",
    img: imgENT,
    content: [
      { label: "Musicians", path: "entertainers/musicians" },
      { label: "MCs", path: "entertainers/mcs" },
      { label: "Comedians", path: "entertainers/comedians" },
      { label: "DJs", path: "entertainers/djs" }
    ]
  },
  {
    label: "And Co.",
    path: "others",
    img: imgCO,
    content: [{ label: "Fabrics", path: "others/fabrics" }]
  }
];

export default categories;
