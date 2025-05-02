import Joi from 'joi'

const schema = Joi.object({
	name: Joi.string()
		.min(5)
		.required(),

	ingredients: Joi.string()
		.min(10)
		.required()
})

function validateForm(form) {
	const results = schema.validate(form)

	let message = {
		name: '',
		ingredients: ''
	}

	if( results.error ) {
		results.error.details.forEach(e => {
			if( e.context.key === 'name' ) {
				message.name = 'Skriv minst 5 tecken.'
			} else if( e.context.key === 'ingredients' ) {
				message.ingredients = 'Skriv minst 10 tecken.'
			}
		})
	}
	const formIsValid = !results.error
	return { message, formIsValid }
}

export { validateForm }
