import { Component } from '@angular/core';

@Component({
  selector: 'dict-parent',
  templateUrl: './dictparent.component.html',
  styles: ['div{width:60%;float:left;}'],
})
export class DictParentComp {
  word: string = '';
  lst: string[] = [];
  imagepath: string = '';
  title!:string;

  arr: any[] = [
    {
      topic: 'Angular',
      desc: 'Angular is used to develop a SPA',
      syllabus: ['topic1', 'topic2', 'topic3'],
    },
    {
      topic: 'Python',
      desc: 'Python is a most popular language',
      syllabus: ['PY-topic1', 'PY-topic2', 'PY-topic3'],
    },
    {
      topic: 'Java',
      desc: 'Java is a simple language',
      syllabus: ['Java-topic1', 'Java-topic2', 'Java-topic3'],
    },
    {
      topic: 'Spring',
      desc: 'Spring is used to develop a enterprise application',
      syllabus: ['spring-topic1', 'spring-topic2', 'spring-topic3'],
    },
  ];

  OnwordChange(str: string): void {
    for (let a of this.arr) {
      if (a.topic == str) {
        this.word = a.desc;
        this.lst = a.syllabus;
        this.imagepath = "assets/Images/" + str + ".png";
        break;
      }
    }
    this.title =str;
  }
}
