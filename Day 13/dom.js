// console.log(document);
        // console.log("hello world!");
        // console.log(document);

        // let header = document.getElementById("header");
        //error handling
    // if (header) {
    //     console.log(header);
    // } else {
    //     console.log("header not found");
    // }

    // let header = document.createElement("h1");

    // let username = "Arthunandhu";
    // header.textContent = (`Hi ${username}`);

    // console.log(header.textContent);

    let heading = document.createElement('h1');

    heading.textContent = 'Demo Class DOM';

    let paragarph = document.createElement('p');

    paragarph.textContent = 'Paragarph class is a class';

   let header = document.getElementById('header');
   header.appendChild(heading);
   header.appendChild(paragarph);