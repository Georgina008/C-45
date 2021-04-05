var animals, snow, river, mountain
var person1, person2, person1Image, person2Image
var animalImages, snowImage, riverImage, mountainImage

function preload(){
    animalImages = loadImage("sprites/Animals.png")
    snowImage = loadImage("sprites/snow.png")
    riverImage = loadImage("sprites/RiverJPEG.png")
    moutainImage = loadImage("sprites/Mountain.png")

    person1Image = loadImage("sprites/Person.png")
    person2Image = loadImage("sprites/Person.png")
}

function setup(){
    createCanvas(displayWidth-20, displayHeight-20)

}

function draw(){
    background("white")

    animals = createSprite(500,500,20,20)
    animals.addImage("animals", animalImages)

    snow = createSprite(600,500,20,20)
    snow.addImage("snow", snowImage)

    river = createSprite(700,500,20,20)
    river.addImage("river", riverImage)

    mountain = createSprite(400,500,20,20)
    mountain.addImage("mountain", mountainImage)



    drawSprites();
}
