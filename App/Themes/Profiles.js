
const profilesList = [
  {image: require('../Images/tree-profiles/hosler.jpg'), name: "Hosler Oak", id:"7863", location: "Arboretum"},
  {image: require('../Images/tree-profiles/banana.jpg'), name: "Banana", id:"7864", location: "Esplanade"},
  {image: require('../Images/tree-profiles/hemlock.jpg'), name: "Hemlock", id:"7865", location: "Entry Walk"},
  {image: require('../Images/tree-profiles/santa-cruiz.jpg'), name: "Santa Cruz lily", id:"7866",
    location: "Oasis Garden & Lotus Pool"},
  {image: require('../Images/tree-profiles/flapjack.jpg'), name: "Flapjack", id:"7867", location: "Arboretum"},
  {image: require('../Images/tree-profiles/japanese-tree-peony.jpg'), name: "Japanese peony", id:"7868",
    location: "Rose & Fragrance Garden"},
  {image: require('../Images/tree-profiles/crabapple.jpg'), name: "Crabapple", id:"7869", location: "Strolling Garden"},
  {image: require('../Images/tree-profiles/blackpine.jpg'), name: "Black pine", id:"7870", location: "Strolling Garden"},
  {image: require('../Images/tree-profiles/hellebore.jpg'), name: "Hellebore", id:"7871", location: "Strolling Garden"},
  {image: require('../Images/tree-profiles/spirea.jpg'), name: "False spirea", id:"7872", location: "Strolling Garden"},
]

const profiles = {
  hosler: profilesList[0],
  banana: profilesList[1],
  hemlock: profilesList[2],
  santacruiz: profilesList[3],
  flapjack: profilesList[4],
  peony: profilesList[5],
  crabapple: profilesList[6],
  blackpine: profilesList[7],
  hellebore: profilesList[8],
  spirea: profilesList[9],

  random: () => {
    return profilesList[Math.floor(Math.random() * 10)]
  }

}

export default profiles
