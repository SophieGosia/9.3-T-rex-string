// 9.3 Strings
    // Exercise 9.3 - velociraptor or triceratops

    var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
    var dinosaur = 'triceratops';
        
    var dinosaur = dinosaur.toUpperCase();
    console.log(dinosaur);
        
    var textTruth = text.replace('Velociraptor', dinosaur);
    var halfText = textTruth.length/2;
    console.log(textTruth.slice(0, halfText));