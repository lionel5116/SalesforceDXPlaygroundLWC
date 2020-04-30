import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    handleChangeEvent(event)
    {
        console.log(event.target.value);
       this.template.querySelector('c-child-component').changeMessage(event.target.value);
    }
}