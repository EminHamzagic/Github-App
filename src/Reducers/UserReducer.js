const UserReducerFunction = (state, { type, value }) => {
  switch (type) {
    case "setUsers":
      return value;
  }
};

export default UserReducerFunction;
