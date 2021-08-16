document.addEventListener('DOMContentLoaded',()=>{
    const cardArray=[
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid=document.querySelector('.grid')
    var cardsChoosen=[]
    var cardsWon=[]
    var cardsChoosenId=[]
    var resultDisplay=document.querySelector('#result')
    function createBoard(){
      for(let i=0;i<cardArray.length;i++){
        var card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
      }
      cardsChoosen=[]
      cardsChoosenId=[]
      resultDisplay.textContent=cardsWon.length
      
    }
    function checkForMatch(){
        var cards=document.querySelectorAll('img')
        const optionOneId=cardsChoosenId[0]
        const optiontTwoId=cardsChoosenId[1]
        if(cardsChoosen[0]===cardsChoosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src','images/white.png')
            cards[optiontTwoId].setAttribute('src','images/white.png')
            cardsWon.push(cardsChoosen)
         
      }else{
          cards[optionOneId].setAttribute('src','images/blank.png')
          cards[optiontTwoId].setAttribute('src','images/blank.png')
          alert('Sorry, try again')
      } 
      cardsChoosen=[]
      cardsChoosenId=[]
      resultDisplay.textContent=cardsWon.length
      if(cardsWon.length===cardArray.length/2){
          resultDisplay.textContent='Congratulations ! you found them'
      }
    }
    function flipcard(){
        var cardId= this.getAttribute('data-id')
        cardsChoosen.push(cardArray[cardId].name)
        cardsChoosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChoosen.length===2){
            setTimeout(checkForMatch,500)
        }
    }
    createBoard()
}) 

