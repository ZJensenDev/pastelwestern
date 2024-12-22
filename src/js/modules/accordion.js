/*

	Accordion Function

*/


export default function() {

	document.addEventListener('alpine:init', () => {
		Alpine.data('accordion', (id = 1) => ({
			id: id,
			get expanded() {
				return this.active === this.id
			},
			set expanded(value) {
				this.active = value ? this.id : null
			},
		}))
		Alpine.data('accordionContainer', () => ({
			active: 1,
		}))
	})

}