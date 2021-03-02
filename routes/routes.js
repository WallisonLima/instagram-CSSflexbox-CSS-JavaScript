const templates = require('../template_helper.js')

module.exports.get = async function(rota){

		let content = await templates.getpart('index.html')

		return content


}

