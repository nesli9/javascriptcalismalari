const container =document.querySelector('.container');
const count = document.getElementById('count');
const amount =document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        calculateTotal();

    }
});

select.addEventListener('change',function(e){
    calculateTotal();

});

function calculateTotal(){
    const selectedSeats = container.querySelectorAll('.seat.selected');
    const selectedSeatsArray =[];
    const seatsArray =[];

    selectedSeats.forEach(function(seat){
        selectedSeatsArray.push(seat);
    });

    
    seats.forEach(function(seat){
        seatsArray.push(seat);
    });
    
    //[1,2,5]
    let selectedSeatIndexs = selectedSeatsArray.map(function(seat){
        return seatsArray.indexOf(seat);
    });
    

    let selectedSeatCount = selectedSeats.length;
    
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount*select.value;


    saveToLocalStorage(selectedSeatIndexs);
}
function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex',select.selectedIndex);
}


