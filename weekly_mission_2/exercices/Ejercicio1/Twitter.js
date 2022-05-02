const twiterProfile= {
    user: "srGualbert",
    username: "gualbertmonti",
    age: "23",
    hashtag: "futurecoder",
    getUser:function(){
        return `The user is ${this.user}`
    },
    getuserName: function () {
        return `The username is ${this.username}`
    }
}

console.log(twiterProfile.getUser());
console.log(twiterProfile.getuserName());