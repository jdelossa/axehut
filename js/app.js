var app = angular.module('feed', []);

app.controller("PostController", function($scope, $filter) {
  $scope.posts = [
    {
        "id": 0,
        "user": "firedguy7708",
        "rating": 57,
        "comments": 236,
        "title": "My Boss Had Anger Issues And I Was Sick Of It",
        "timestamp": "10 hours",
        "thumbnail" : "images/crown.jpg"
    },
    {
        "id": 1,
        "user": "Annonymous",
        "rating": 36,
        "comments": 6,
        "title": "People Thought I Was Weird, So I Lost My Job",
        "timestamp": "23 minutes",
        "thumbnail" : "images/crown.jpg",
        "regrets" : "regrets",
        "company" : "Google"
    },
    {
        "id": 2,
        "user": "maybachmusician28",
        "rating": 7,
        "comments": 17,
        "title": "This Is Some Bonafide Bullshit",
        "timestamp": "1 hour",
        "thumbnail" : "images/crown.jpg",
        "regrets" : "regrets"
    },
    {
        "id": 3,
        "user": "Annonymous",
        "rating": 0,
        "comments": 1486,
        "title": "Fuck BoA. They Don't Value Shit. Stay AWAY!!",
        "timestamp": "51 minutes",
        "thumbnail" : "images/crown.jpg",
        "company" : "Bank of America"
    },
    {
        "id": 4,
        "user": "chubchubb",
        "rating": 100,
        "comments": 0,
        "title": "MY BOSS DIDN'T HAVE THE ANSWERS!!!!",
        "timestamp": "1 minute",
        "thumbnail" : "images/crown.jpg",
        "regrets" : "regrets",
        "company" : "McDonalds"
    },
    {
        "id": 5,
        "user": "Annonymous",
        "rating": 43,
        "comments": 9,
        "title": "My Swag Was Too Much For My Manager",
        "timestamp": "22 minutes",
        "thumbnail" : "images/crown.jpg"
    },
    {
        "id": 6,
        "user": "teddydaniels",
        "rating": 66,
        "comments": 18,
        "title": "I Stole. I Get It. But they stole my paycheck",
        "timestamp": "3 hours",
        "thumbnail" : "images/crown.jpg",
        "regrets" : "regrets",
        "company" : "Macys",
        "content" : "Bacon ipsum dolor amet ham pancetta brisket meatloaf porchetta strip steak pork chop. Jerky brisket hamburger short loin, meatball tenderloin leberkas ball tip cupim venison t-bone rump pancetta. Rump shankle spare ribs sirloin tail brisket. Filet mignon meatloaf pig tri-tip alcatra capicola strip steak. Kielbasa sirloin chuck boudin, biltong salami tongue. Salami meatloaf sausage, bacon cupim capicola tongue fatback beef beef ribs drumstick doner andouille. Jowl porchetta ground round cow brisket turkey hamburger leberkas. Salami sausage corned beef tongue picanha, chicken tail pancetta doner porchetta jowl meatloaf short ribs frankfurter. Ground round fatback shoulder, tri-tip hamburger boudin doner short loin t-bone pancetta kevin shank. Cow meatball tongue shank pork. Landjaeger drumstick hamburger, shankle biltong chuck t-bone venison rump corned beef sausage ground round kevin. Hamburger frankfurter biltong, tri-tip cupim ball tip venison fatback prosciutto kielbasa shankle boudin. Short ribs ham cow, fatback meatball beef ribs shank doner turducken."
    },
    {
        "id": 7,
        "user": "milehater40OH",
        "rating": 98,
        "comments": 29,
        "title": "You seriously fired me for taking off on xmas",
        "timestamp": "17 hours",
        "thumbnail" : "images/crown.jpg"
    }, 
    {
        "id": 8,
        "user": "hovit096",
        "rating": 83,
        "comments": 27,
        "title": "If You Succeed, Prepare to be crucified ... ",
        "timestamp": "2 hours",
        "thumbnail" : "images/crown.jpg",
        "regrets" : "regrets",
        "company" : " Bloomingdales"
    }
    
  ]
});

(function() {
  var searchAll = element(by.model('search.$'));
  searchAll.clear();
  searchAll.sendKeys('i');
});