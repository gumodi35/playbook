const uber_profile= {
    profile: "gualberto",
    username: "gual",
    travel: "home",
    getProfile: function () {
        return `The profile is: ${this.profile}`
    },
    getTravelDestination: function (){
        return `The destination is ${this.travel}`
    }
}

console.log(uber_profile.getProfile());
console.log(uber_profile.getTravelDestination());