import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'git-commit-tracker';
  legendColorsGitCommit:string[] = ['#EBEDF0','#9BE9A8','#40C463','#309D4D','#216E39']

  ngOnInit(){
  }

  counter(i: number) {
    return new Array(i);
  }

  getRandomColor(){
    return this.legendColorsGitCommit[Math.floor(Math.random()*this.legendColorsGitCommit.length)]
  }

  getMonth(index:number){
    switch(index){
      case 0:
        return "Jan"
      case 4:
        return "Feb"
      case 8:
        return "Mar"
      case 12:
        return "Apr"
      case 16:
        return "May"
      case 20:
        return "Jun"
      case 24:
        return "Jul"
      case 28:
        return "Aug"
      case 32:
        return "Sep"
      case 36:
        return "Oct"
      case 40:
        return "Nov"
      case 44:
        return "Dec"
      default:
        return false
    }
  }
}
