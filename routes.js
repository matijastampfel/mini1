var express = require('express');
var router = express.Router();

//det ska ligga en array här med alla namn
/*var list = [
    {
    vallokal: 'Vasakyrkan',
    vote: 0
    },
    {
    vallokal: 'Masthuggkyrkan',
    vote: 0
    },
    {
    vallokal: 'Gårdstenskyrkan',
    vote: 0
    },
    {
    vallokal: 'Kortedala kyrka',
    vote: 0
    }    
];
console.log(list[0].vallokal);
list.forEach(function(element) {
    console.log('forEach ' + element.vallokal);
});*/

router.get('/', (req, res) => {
    res.render('resultatrapportering', {
        title: 'Kyrkoval',
        valjlokal: 'Välj vallokal',
        vasa: 'Vasakyrkan',
        masthug: 'Masthuggkyrkan',
        gardsten: 'Gårdstenskyrkan',
        kortedala: 'Kortedala kyrka'
    });
});

router.get('/resultat', (req, res) => {
    res.render('resultat', {
        title: 'Kyrkoval',
        vasa: 'Vasakyrkan',
        masthug: 'Masthuggkyrkan',
        gardsten: 'Gårdstenskyrkan',
        kortedala: 'Kortedala kyrka'
    });
});

 router.get('*', (req, res) => {
            res.status(404).render('error', {
                title: '404- not found'
            });
        });   

module.exports = router;