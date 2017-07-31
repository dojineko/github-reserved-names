"use strict";
const reservedNames = require("./reserved-names.json");

exports.all = reservedNames;
exports.check = function (name) {
	name = (name || "").toString().toLowerCase();
	return reservedNames.includes(name);
};
