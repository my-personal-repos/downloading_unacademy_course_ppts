var cards = document.querySelectorAll('.ItemCard__ItemContainer-xrh60s-9.eSddHQ')
var name_link = []
var totalClasses = cards.length
var currentClass = 0 
var count = 0
var downloadInterval = setInterval(()=>{
    var menuBtn = cards[currentClass].querySelector('.ItemCard__MenuButton-xrh60s-3.fktpGd.menuButton')
    if(menuBtn){
        var name = cards[currentClass].querySelector('.ItemCard__ItemInfo-xrh60s-2.jtVOke > h3').innerText
        menuBtn.click()
        // This is without annotation
        var menuItem1 = document.querySelectorAll('.PDFDownload__MenuItem-zz6uw8-0.laFzUN > div')[0]
        // This is with annotation
        var menuItem2 = document.querySelectorAll('.PDFDownload__MenuItem-zz6uw8-0.laFzUN > div')[1]
        var href1 = menuItem1.dataset.href
        var href2 = menuItem2.dataset.href
        console.log([count, name, href1, href2])
        name_link.push([count++, name,href1, href2])
    }
    currentClass++;
    if(currentClass>=totalClasses){
        console.log(name_link)
        clearInterval(downloadInterval)
    }
    // the end
}, 10*1000)

