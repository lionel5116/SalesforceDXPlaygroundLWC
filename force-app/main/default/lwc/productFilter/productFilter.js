import { LightningElement,api,track,wire} from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {getPickListValues} from 'lightning/uiObjectInfoApi';
import {CATEGORY_FIELD} from '@salesforce/schema/Product__c.Category__c';
import {LEVEL_FIELD} from '@salesforce/schema/Product__c.Level__c';
import {MATERIAL_FIELD} from '@salesforce/schema/Product__c.Material__c';
import {fireEvent} from 'c/pubsub';

export default class ProductFilter extends LightningElement {

    searchKey ='';
    maxPrice =1000;
    filters= {
        searchKey:'',
        maxPrice:1000
    }

    @wire(CurrentPageReference) pageRef;

    @wire(getPickListValues, {
        recordTypeId:'012000000000AAA',
        fieldApiName:CATEGORY_FIELD
    })categories;

    @wire(getPickListValues, {
        recordTypeId:'012000000000AAA',
        fieldApiName:MATERIAL_FIELD
    })materials;

    @wire(getPickListValues, {
        recordTypeId:'012000000000AAA',
        fieldApiName:LEVEL_FIELD
    })levels;

    handleSearchKeyChange(event)
    {
      this.filters.searchKey = event.target.value;
      this.delayedFireFilterChangeEvent();
    }

    delayedFireFilterChangeEvent()
    {
       fireEvent(this.pageRef,'filterChange',this.filters);
    }

    handleMaxPriceChange(event) {
      const maxPrice =  event.target.value;
      this.filters.maxPrice = maxPrice;
      this.delayedFireFilterChangeEvent();
    } 

    handleCheckBoxChange(event)
    {
      if(!this.filters.categories)
      {
         this.filters.categories=this.categories.data.values.map (
             item=>item.value
         ) ;
         this.filters.materials=this.materials.data.values.map (
            item=>item.value
        ) ;
        this.filters.levels=this.levels.data.values.map (
            item=>item.value
        ) ;
        const value=event.target.dataset.value;
        const filterArray = this.filters(event.target.dataset.filter);
        if(event.target.checked)
        {
            if(filterArray.includes(value)){
                filterArray.push(value);
            }
            else
            {
                //this.filters(event.target.dataset.filter)=filterArray.filter (does not compile)
                filterArray=filterArray.filter(
                    item=>item !==value
                );
            }
            fireEvent(this.pageRef,'filterChange',this.filters);

        }
      }
    }

}