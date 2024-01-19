let palette = ["#FF4901", "#0277C7", "#EDC83E", "#3BB475", "#4E51AA"];

// LINKS

let links = document.querySelectorAll("a:not(nav ul li a)");
let summary_links = document.querySelectorAll("summary");

console.log(summary_links)

links.forEach((link) => {

    link.onmouseover = () => {
    link.style.color = palette[Math.floor(Math.random() * palette.length)];
    }

    link.onmouseout = () => {
        link.style.color = "var(--black)";
        }
})


summary_links.forEach((summary_link) => {
    summary_link.onmouseover = () => {
        summary_link.style.color = palette[Math.floor(Math.random() * palette.length)];
    }

    summary_link.onmouseout = () => {
        summary_link.style.color = "var(--black)";
        }
})


// HIGHLIGHT
window.addEventListener("mousedown", () => {
    const color = palette.shift();
    document.documentElement.style.setProperty("--highlight-color", color);
    palette.push(color);
    console.log('hi')
  });

// GLYPHS
let c_cells = document.querySelectorAll('#glyph--c .fill');
let two_cells = document.querySelectorAll('#glyph--2 .fill');
let i_cells = document.querySelectorAll('#glyph--i .fill');





c_cells.forEach((c_cell) => {
    
    c_cell.onmouseover = () => {

        c_cell.innerHTML = "<p class='special'>I ♥ Code</p>"
        c_cell.style.color = palette[Math.floor(Math.random() * palette.length)];
        c_cell.style.backgroundColor = "transparent";
        // c_cell.style.transform = `rotate(${e.clientX * 2}deg)`
        
        // c_cell.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
        // c_cell.style.borderRadius = "100%";

        setTimeout(() => {
            c_cell.innerHTML = "";
            c_cell.style.backgroundColor = "var(--black)";
            // c_cell.style.transform = `rotate(0deg)`;
        }, 5000)
        
    }




})





two_cells.forEach((two_cell) => {
    two_cell.onmouseover = () => {
        two_cell.innerHTML = "<p class='special'>I ♥ Code</p>"
        two_cell.style.color = palette[Math.floor(Math.random() * palette.length)];
        two_cell.style.backgroundColor = "transparent";

        setTimeout(() => {
            two_cell.innerHTML = "";
            two_cell.style.backgroundColor = "var(--black)";
        }, 5000)
    }
    
})

i_cells.forEach((i_cell) => {

    i_cell.onmouseover = () => {
    i_cell.innerHTML = "<p class='special'>I ♥ Code</p>";
    i_cell.style.color = palette[Math.floor(Math.random() * palette.length)];
    i_cell.style.backgroundColor = "transparent";
    // i_cell.style.top = `${Math.random() * 10 - 5}px`;
    // i_cell.style.left = `${Math.random() * 10 - 5}px`;

    setTimeout(() => {
        i_cell.innerHTML = "";
        i_cell.style.backgroundColor = "var(--black)";
    //     i_cell.style.top = 0;
    // i_cell.style.left = 0;
    }, 5000)
    }
})

let lab = document.getElementById("glyphs--lab");
let lab_cells = document.querySelectorAll("#glyphs--lab .fill") 

lab.onmouseover = () => {
    lab_cells.forEach((lab_cell) => {
        lab_cell.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
        lab_cell.style.top = `${Math.random() * 2}px`;
        lab_cell.style.left = `${Math.random() * 2}px`;
    })
}

lab.onmouseout = () => {
    lab_cells.forEach((lab_cell) => {
        lab_cell.style.backgroundColor = "var(--black)";
        lab_cell.style.top = 0;
        lab_cell.style.left = 0;
    })
}



