const Rooms = 
{
  Entry: "Field",
  Field: { 
    exits: {
      E: "Forest",
      W: "Home"
    },
    items: ["basket"] 
  },
  Forest: {
    exits: {
      W: "Home"
    }
  },
  Home: {
    exits: {
      E: "Field"
    }
  }
}

export default Rooms;