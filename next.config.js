const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongDB_Username: "rhernandez17gburg",
        mongoDB_Password: "CeMx1SHhBpX7Yx8k",
        mongoDB_clusterName: "cluster0",
        mongoDB_dtatbase: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongDB_Username: "rhernandez17gburg",
      mongoDB_Password: "CeMx1SHhBpX7Yx8k",
      mongoDB_clusterName: "cluster0",
      mongoDB_dtatbase: "my-site",
    },
  };
};
