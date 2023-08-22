let xhr = new XMLHttpRequest();
xhr.open("GET", "students.json");
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && xhr.status ==200){
        let student = JSON.parse(xhr.responseText);

        const t1= $('<div>').attr('id', 'result');
        $('body').append(t1);
        $('#result').html(`
            <h1>${student.name}</h1>
            <ul><li>major : ${student.major}</li><li>grade : ${student.grade}</li></ul>
        `);
    }
}
