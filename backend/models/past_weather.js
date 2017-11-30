module.exports = function(sequelize, DataTypes){
	const PAST_WEATHER = sequelize.define(
		"weather_of_past_race_day",
		{
			race_name: DataTypes.STRING,
			year: DataTypes.INTEGER,
			date: DataTypes.DATE,
			description: DataTypes.STRING,
			wind_speed_mph: DataTypes.FLOAT,
			lowest_temperature: DataTypes.FLOAT,
			highest_temperature: DataTypes.FLOAT,
		},
		{
			freezeTableName: true
		}
	)
	return PAST_WEATHER
}