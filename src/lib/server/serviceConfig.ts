import { ServiceConfigModel } from "./server.models";

const emptyConfig = () => {
  return {
    key: "config",
    categories: [],
  };
};

export const loadServiceConfigOrDefault = async () => {
  let config = await ServiceConfigModel.findOne({ key: "config" });
  if (!config) {
    config = new ServiceConfigModel(emptyConfig());
  }

  return config;
};
