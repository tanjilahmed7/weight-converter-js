let $ = function( id ) { return document.getElementById( id ); };
$('output').style.visibility = 'hidden';
$('lbs-input').addEventListener('input', function(e){
    let pounds = e.target.value;
    if(pounds > 0){
        $('output').style.visibility = 'visible';
        $('gramsOutput').innerHTML = pounds/0.0022046; 
        $('kilogramsOutput').innerHTML = pounds/2.2046; 
        $('ouncesOutput').innerHTML = pounds/16; 
    }
    e.preventDefault();
});