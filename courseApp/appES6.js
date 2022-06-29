class Course{
    constructor(title ,instructor,image){
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

class UI{
    addCourseToList(course){
        
            const list = document.getElementById('course-list');
        
            var html = `
                <tr>
                    <td> <img src ="img/${course.image}"/></td>
                    <td> ${course.title}</td>
                    <td> ${course.instructor}</td>
                    <td><a href = "#" class ="btn btn-danger btn-sm delete">Delete</a></td>
                </tr>
            `;
            list.innerHTML += html;
        
    }
    clearControls(){
        const title = document.getElementById('title').value ="";
        const instructor = document.getElementById('instructor').value="";
        const image = document.getElementById('image').value="";
    }
    deleteCourse(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
        }
    }
    showAlert(message , className){
        var alert = `
        <div class="alert alert-${className}">
            ${message}
        </div>
        `;
        const row = document.querySelector('.row');
        //beforeBegin , afterBegin , beforeEnd , afterEnd  --> alternatiflerin farkı etiket başladıktan önce yada sonra veya kapanıs etikentinden önce yada sonramı olduğunu belirtmek için kullanılır 
        row.insertAdjacentHTML('beforeBegin',alert);

        setTimeout(()=>{
        document.querySelector('.alert').remove();
        },3000);
    }
}

document.getElementById('new-course').addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //creat corse onject
    const course = new Course(title,instructor,image);

    //creat UI
    const ui = new UI();

    console.log(ui);

    if(title ==='' || instructor ==='' || image ===''){
        ui.showAlert('Please complate the form','warning');
    }else{
        //save to database

        //show on the UI
        //add course the list
        ui.addCourseToList(course);

        //clear controls
        ui.clearControls();

        ui.showAlert('the couse has been added','success');
    }
    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('the course has been deleted','danger');
});













