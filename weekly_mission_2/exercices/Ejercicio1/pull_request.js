const pull_request = {
    title: "one",
    branchName: "Master",
    dateCreated: "14 Abril",
    status: "open",
    repositoNameAssociated: " backendJs",
    getStatus: function (){
        return `The status is ${this.status}`
    },
    getTitleAndAuthor: function () {
        return `The titulo is: ${this.title} and the author is: `
    }
}

console.log(pull_request.getStatus());
console.log(pull_request.getTitleAndAuthor());