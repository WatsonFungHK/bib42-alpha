module.exports = function(sequelize, DataTypes){
	const event_type_and_start_time = sequelize.define(
		"event_type_and_start_time",
		{
			race_name: DataTypes.STRING,
			event: DataTypes.STRING,
			distance_in_km: DataTypes.FLOAT,
            start_time: DataTypes.TIME
		},
		{
			freezeTableName: true
		}
	)
	return event_type_and_start_time
}