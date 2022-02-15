const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}


const generateMacbookHTML = (obj) => {
    //Declare hmtl represenation variable 
    let rep = ``;

    //Get id
    rep += `<section id="computer--${obj.id}">`
    //console.log(rep);

    //Get other properties
    rep += `\n  <h1>${obj.manufacturer} ${obj.make}</h1>`
    //console.log(rep);

    rep += `\n  <div>Memory: ${obj.specs.memory}</div>`
    //console.log(rep);

    rep += `\n  <div>hardDrive: "${obj.specs.hardDrive}"</div>`;
    //console.log(rep);

    rep += `\n  <div>processor: ${obj.specs.processor}</div>`;
    //console.log(rep);

    rep += `\n</section>`;
    //console.log(rep);

    //return html representation
    return rep;
}

let htmlRep = generateMacbookHTML(computer);
console.log(htmlRep);