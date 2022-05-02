const profile = {
    name: "Gualberto Montiel Diaz",
    profile_name: "Gualbert Monti",
    numberOfPost: 2500,
    friends: 2036,
    profilPhotos: 154,
    photos: 458,
    videos: 847,
    getTotalPhotos: function () {
        return this.profilPhotos + this.photos
    },
    getInfoProfile: function () {
        return `Profile: ${this.name} is about ${this.profile_name}`
    }
}

console.log("Profile of: " + profile.name);
console.log("Total photos:" + profile.getTotalPhotos());
console.log(profile.getInfoProfile());