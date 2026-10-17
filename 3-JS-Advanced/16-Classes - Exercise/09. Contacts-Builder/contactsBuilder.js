class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        if (this.titleDiv) {
            if (value) {
                this.titleDiv.classList.add('online');
            } else {
                this.titleDiv.classList.remove('online');
            }
        }
    }

    render(id) {
        const article = document.createElement('article');

        this.titleDiv = document.createElement('div');
        this.titleDiv.className = 'title';
        this.titleDiv.innerHTML = `${this.firstName} ${this.lastName}<button>&#8505;</button>`;

        if (this.online) {
            this.titleDiv.classList.add('online');
        }

        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';
        infoDiv.style.display = 'none';
        infoDiv.innerHTML = `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`;

        this.titleDiv.querySelector('button').addEventListener('click', () => {
            infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
        });

        article.appendChild(this.titleDiv);
        article.appendChild(infoDiv);
        document.getElementById(id).appendChild(article);
    }
}