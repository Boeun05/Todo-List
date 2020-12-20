const ENTER_KEY = 13

export default function TodoUser({user}){
    const $target = document.querySelector('#todo-users')

    this.$target = $target
    this.user = user
    

    this.render = () => {
        const htmlString = 
            `<ul>
                ${this.user.map((userName) => `<li>${userName}</li>`).join('')}
            </ul>`
        this.$target.innerHTML = htmlString
    }
    

    this.setState = (nextUser) => {
        this.user = nextUser
        this.render()
    }

    this.render()
}
