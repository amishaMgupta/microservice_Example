let config = {
    WWW_PORT : (process.env.PORT || 8080),
    notes_URL : (process.env.notes_URL || "http://localhost:8010"),
    users_URL : (process.env.users_URL || "http://localhost:8020") 
}

module.exports = config;