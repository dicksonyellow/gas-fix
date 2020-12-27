

class Tesimonials {
    constructor() {
        this.testimonial = document.querySelectorAll('.testimonial')
        this.event()
    }

    event() {
        this.testimonial.forEach(t => {
            t.addEventListener('click', () => {
                this.removeActiveClass()
                t.classList.add('testimonial--active')
            })
        })
    }

    removeActiveClass() {
        this.testimonial.forEach(t => {
            t.classList.remove('testimonial--active')
        })
    }

}

export default Tesimonials