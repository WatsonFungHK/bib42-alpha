module.exports = function(sequelize, DataTypes){
	const holiday_of_asian_country = sequelize.define(
		"holiday_of_asian_country",
		{
			country: DataTypes.STRING,
			holiday: DataTypes.STRING,
			date: DataTypes.DATE,
			comment: DataTypes.STRING
		},
		{
			freezeTableName: true
		}
	)
	return holiday_of_asian_country
}