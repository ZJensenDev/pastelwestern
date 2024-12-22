/*

	Modal Function

*/


export default function () {

  document.addEventListener('alpine:init', () => {
	  Alpine.data('modal', () => ({
		  open: false,
		  toggle(dir) {
			  if (dir) {
				  this.open = dir
			  } else {
				  this.open = !this.open
			  }
		  }
	  }))
  })

}
