module.exports = function(sequelize, DataTypes){
	let raceInfo = sequelize.define("race_basic_info", {
			race_name: DataTypes.STRING,
			country: DataTypes.STRING,
			city: DataTypes.STRING,
			official_website: DataTypes.STRING,
			race_date: DataTypes.DATE,
		},
		{freezeTableName: true}
	)
	return raceInfo
}