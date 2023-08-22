let xhr = new XMLHttpRequest();
xhr.open("GET", "students.json");
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && xhr.status ==200){
        let student = JSON.parse(xhr.responseText);
        const row_num = countingArr(student);
        renderHTML(student);
    }
}

function renderHTML(contents){
    
    let t1= $('<div>').attr('class', 'container');
    $('body').append(t1);

    for (let content of contents){
        let output = "";
        output += `
            <h2>${content.name}<h2>
            <ul>
                <li>major : ${content.major}</li>
                <li>grade : ${content.grade}</li>
            </ul>
            <hr>
        `;
        placeItems(output);
    }
    
}

function countingArr(obj){
    return obj.length;
}

function placeItems(output){
    
    let tmp= $('<div>').attr('class', 'items').html(output);
    $('.container').append(tmp);
}