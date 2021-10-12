"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://NewUriToReplace";

const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    namePrefix: "Monkey",
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Female Hair", trait: "Hair" },
    ],
  },
  {
    growEditionSizeTo: 10,
    namePrefix: "Lion",
    resetNameIndex: true, // this will start the Lion count at #1 instead of #6
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Male Hair", trait: "Hair" },
    ],
  },
];

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {
  Red: ["Dark Long"],
  // directory incompatible with directory example
  White: ["rare-Pink-Pompadour"],
};

const shuffleLayerConfigurations = false;

const debugLogs = true;

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  incompatible,
};
