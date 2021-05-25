import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'FirstAngularApp';
    imgUrl = 'assets/images/leaf_rake.png'
    height: string
    width: string
    aname: string = ''
    age: string = ''
    city: string = ''
    country: string = 'Egypt'
    info = {
        Name: this.aname,
        Age: this.age,
        Address: {
            Country: this.country,
            City: this.city
        }
    }
    // jsonText = JSON.stringify({ Name: this.aname, Age: this.age, Adress: { Country: this.country, City: this.city } })
    // jsonText2 = `{"Name":${this.aname},"Age": ${this.age},"Adress":{Country:${this.country},"City":${this.city}}}`;
    over() {
        this.width = '250px'
        this.height = '250px'
    }
    out() {
        this.width = '150px'
        this.height = '150px'
    }
}
