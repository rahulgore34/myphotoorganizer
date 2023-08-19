import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rgtable',
  templateUrl: './rgtable.component.html',
  styleUrls: ['./rgtable.component.scss']
})
export class RgtableComponent {
@Input() tablearr: any;
@Input() cols: any;
@Output() emitAction = new EventEmitter();
onActionEmit(actionname: string, row: any, index: number) {
 this.emitAction.emit({actionname, row, index});
}
}
