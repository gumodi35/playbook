const issue = {
    title: "open repository",
    repositoNameAssociated: "backendJs",
    status: "open",
    numberOfComments: 125,
    labels: 23,
    author: "Gualberto Montiel",
    dateCreated: "24 de Marzo",
    lastUpdate: "29 de Marzo",
    getTitleAndAuthor: function () {
        return `The title is: ${this.title} and the author is ${this.author}`
    },
    getGeneralInfo: function () {
        return `The title is: ${this.title} and the author is ${this.author}\nthe numbers of comments is: ${this.numberOfComments}`
    }
}

console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
console.log(issue.repositoNameAssociated);