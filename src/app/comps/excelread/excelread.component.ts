import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-excelread',
  templateUrl: './excelread.component.html',
  styleUrls: ['./excelread.component.scss']
})
export class ExcelreadComponent {

  @ViewChild('fileDropZone')
  fileDropZone!: ElementRef;
  downLoadTemplate() {

  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.fileDropZone.nativeElement.classList.add('drag-over');
  }
  
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.fileDropZone.nativeElement.classList.remove('drag-over');
  }
  
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.fileDropZone.nativeElement.classList.remove('drag-over');
   console.log('Event ',event);
   
  }
}
