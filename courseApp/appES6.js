//Course Class
class Course{
    constructor(title ,instructor,image){
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

//UI Class
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

class Storage{
    static getCourses(){
        let courses;
        if(localStorage.getItem('courses')===null){
            courses=[];
        }else{
            courses= JSON.parse(localStorage.getItem('courses'));
        }
        return courses; 
    }
    static displayCourse(){
        const courses = Storage.getCourses();

        courses.forEach(course => {
            const ui = new UI();
            ui.addCourseToList();
        });
    }
    static addCourse(course){
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses',JSON.stringify(courses));
    }
    static deleteCourse(){

    }
}

document.addEventListener('DOMContentLoaded', Storage.displayCourses);

document.getElementById('new-course').addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //creat corse onject
    const course = new Course(title,instructor,image);

    //creat UI
    const ui = new UI();

    

    if(title ==='' || instructor ==='' || image ===''){
        ui.showAlert('Please complate the form','warning');
    }else{
        //save to database

        //show on the UI
        //add course the list
        ui.addCourseToList(course);

        //save to LS
        Storage.addCourse(course);

        //clear controls
        ui.clearControls();

        ui.showAlert('the couse has been added','success');
    }
    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click',function(e){
    const ui = new UI();
    //delete course
    ui.deleteCourse(e.target);

    //delete from LS
    Storage.deleteCourse();

    ui.showAlert('the course has been deleted','danger');
});













