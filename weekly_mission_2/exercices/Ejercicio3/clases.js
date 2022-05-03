/*
 Ejercicio 3
    Tomando como referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos.
 */

// Clase GitHub

class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issuesOpen, issuesClose) {
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issuesOpen = issuesOpen
        this.issuesClose = issuesClose
    }

    getTotalIssues() {
        return `${this.issuesOpen}, ${this.issuesClose}`
    }

    getGeneralInfo() {
        return `This repository ${this.name} is edited by ${this.author}`
    }
}

// class Issue
class Issue {
    constructor(title, content, author) {
        this.Content = content
        this.title = title
        this.author = author
    }
}

// class pull request
class pull_request {
    constructor(comment) {
        this.Comment = comment
    }
}

// class Twitter
class User {
    constructor(user, username, bio, age) {
        this.User = user
        this.Username = username
        this.Bio = bio
        this.Age = age
    }
}

// class trending topic
class trending_topic {
    constructor(search, since) {
        this.Search = search
        this.Since = since
    }
}

// Class hashtag
    class Hashtag{ 
        constructor(hashTag){
            this.Hashtag = hashtag
    }
}

// class Facebook
class Facebook{
    constructor(userID, username,password){
        this.UserID = userID
        this.Username = username
        this.Password = password
    }
}

// class Post
class Post {
    constructor(PostId,PostAudience,Tags,Album,CheckIn,Feeling,Photo,BackgroundColor,Gif,HostAndQA){
        this.PostId = PostId
        this.PostAudience = PostAudience
        this.Tags = Tags
        this.Album = Album
        this.CheckIn = CheckIn
        this.Feeling = Feeling
        this.Photo = Photo
        this.BackgroundColor = BackgroundColor
        this.Gif = Gif
        this.HostAndQA = HostAndQA
    }
}

// Class Biografia
class Biography {
    constructor(Name,Work,Education,PlacesLived,ContactInfo,BasicInfo){
        this.Name = Name
        this.Work = Work
        this.Education = Education
        this.PlacesLived = PlacesLived
        this.ContactInfo = ContactInfo
        this.BasicInfo = BasicInfo 
    }
}

// class Uber
class Profile {
    constructor(nombre,rating,paymentMethod){
        this.nombre = nombre
        this.rating = rating 
        this.paymentMethod = paymentMethod
    }
}

// class Travel
class Travel {
    constructor(from,to,distance,ride,paymentMethod,driver){
        this.from = from
        this.to = to
        this.distance = distance
        this.ride = ride
        this.paymentMethod = paymentMethod
        this.driver = driver
    }
}