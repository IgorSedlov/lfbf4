                                          
window.onload = function(){

    let obj1 = {    
        countries: countries,
        outCountries: () => {

            console.log(about.length);
    
            let div = document.createElement('div');
    
            for(let i = 0; i < countries.length; i++){
                
                let table = document.createElement('table');
                for(let j = 0; j < about.length; j++){
                    
                    let row = document.createElement('tr');
                    let cell = document.createElement('td');
                    cell.innerText = about[j];
                    row.appendChild(cell);
                    cell = document.createElement('td');
                    
    
                    if(j >= 6){
    
                       for(let item in countries[i][j]){
                            if(j === 8){
                                cell.innerHTML += item + '-' + countries[i][j][item] +'<br>';
                            }
                            else{
                                cell.innerHTML += countries[i][j][item] +'<br>';
                            }  
                       }
                        
                    }
                    else{
                        cell.innerText = countries[i][j];
                    }
                    row.appendChild(cell);
    
                    table.appendChild(row);
    
                    div = document.createElement('div');
                    div.id = 'd' + i;
                    div.className = 'bg ';
                    div.appendChild(table);
                }
                document.getElementById('root').appendChild(div);
            }
        }
    }

    function Changes(){
        this.countries = countries;
        this.changeCountries = (data) =>{

            console.log(about.length);
            
            let br = document.createElement('br');

            let div = document.createElement('div');
    
            for(let i = 0; i < countries.length; i++){
                
                let table = document.createElement('table');

                if(data === 0 && countries[i][2]==="Евразия"){
                    for(let j = 0; j < about.length; j++){
                    
                        let row = document.createElement('tr');
                        let cell = document.createElement('td');
                        
                        cell.innerText = about[j].toUpperCase();
                    
                        row.appendChild(cell);
                        cell = document.createElement('td');
                        
        
                        if(j >= 6){
        
                            for(let item in countries[i][j]){
                                 if(j === 8){
                                     cell.innerHTML += String(item).toUpperCase() + '-' + String(countries[i][j][item]).toUpperCase() +'<br>';
                                 }
                                 else{
                                     cell.innerHTML += String(countries[i][j][item]).toUpperCase() +'<br>';
                                 }  
                            }
                             
                         }
                        else{
                            cell.innerHTML = String(countries[i][j]).toUpperCase();
                        }
                        row.appendChild(cell);
        
                        table.appendChild(row);
                        
                        div = document.createElement('div');
                        div.id = 'd' + i;
                        div.className = 'bg ';
                        div.appendChild(table);
                    }
                }
                else if(data === 1 && countries[i][2]==="Евразия"){
                    for(let j = 0; j < about.length; j++){
                    
                        let row = document.createElement('tr');
                        let cell = document.createElement('td');
                        
                        cell.innerText = about[j];
                    
                        row.appendChild(cell);
                        cell = document.createElement('td');
                        
        
                        if(j >= 6){
        
                            for(let item in countries[i][j]){
                                 if(j === 8){
                                     cell.innerHTML += String(item) + '-' + String(countries[i][j][item]) +'<br>';
                                 }
                                 else{
                                     cell.innerHTML += String(countries[i][j][item]) +'<br>';
                                 }  
                            }
                             
                         }
                        else{
                            cell.innerHTML = String(countries[i][j]);
                        }
                        row.appendChild(cell);
        
                        table.appendChild(row);
                        
                        table.style = "font-style:italic";

                        div = document.createElement('div');
                        div.id = 'd' + i;
                        div.className = 'bg ';
                        div.appendChild(table);
                    }
                }
                else{
                    for(let j = 0; j < about.length; j++){
                    
                        let row = document.createElement('tr');
                        let cell = document.createElement('td');
                        
                        cell.innerText = about[j];
                    
                        row.appendChild(cell);
                        cell = document.createElement('td');
                        
        
                        if(j >= 6){
        
                            for(let item in countries[i][j]){
                                 if(j === 8){
                                     cell.innerHTML += String(item) + '-' + String(countries[i][j][item]) +'<br>';
                                 }
                                 else{
                                     cell.innerHTML += String(countries[i][j][item]) +'<br>';
                                 }  
                            }
                             
                         }
                        else{
                            cell.innerHTML = String(countries[i][j]);
                        }
                        row.appendChild(cell);
        
                        table.appendChild(row);
                        
                        div = document.createElement('div');
                        div.id = 'd' + i;
                        div.className = 'bg ';
                        div.appendChild(table);
                    }
                }
                
                document.getElementById('root').appendChild(div);
            }
        }

    }

    let obj2 = new Changes();

    //obj1.outCountries();
    let data = "";

    butt.onclick = function(){
        data = document.getElementById('elem1').value;
        document.getElementById('elem1').value = "";
        var myNode = document.getElementById("root");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        obj2.changeCountries(parseInt(data));
    }

    obj2.changeCountries(data);

    var timer__data = document.getElementById("timer__data");
    var date_start = new Date("September 1 2020 00:00:00");

    setInterval(function(){
        var today = Date.now();
        var remaining = date_start - today;
        

        var d = Math.trunc(remaining/1000/60/60/24);
        remaining = remaining - d*1000*60*60*24;

        var h = Math.trunc(remaining/1000/60/60);
        remaining = remaining - h*1000*60*60;

        var m = Math.trunc(remaining/1000/60);
        remaining = remaining - m*1000*60;

        var s = Math.trunc(remaining/1000);
        remaining = remaining - s*1000;

        var date_string = d + " д. ";
        date_string += h + "ч.:";
        date_string += m + "м.:";
        if (s < 10)
            date_string += "0";
        date_string += s + "с.";

        timer__data.innerText = date_string;
    }, 1000);

}
