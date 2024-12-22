/*

	Accordion Function

*/

// Dependencies
import Glide from '@glidejs/glide'

export default function () {

  document.addEventListener('alpine:init', () => {
	Alpine.data('carousel', () => ({
	  init() {

		var glide = this.$refs.glide
		window.onload = function() {
		  new Glide(glide, {
			  perView: 1,
			  type: 'carousel',
			  gap: 0,
		  }).mount()
		}

	  }, // init()
	})) // Alpine.data
  }) // document.addEventListener

}