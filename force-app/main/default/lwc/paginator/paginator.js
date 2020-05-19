import { LightningElement ,api} from 'lwc';

export default class Paginator extends LightningElement {

 @api pageNumber;
 @api pageSize;
 @api totalItemCount;
 @api totalPages;


    handlePrevious()
    {
    this.dispatchEvent(new CustomEvent('previous'));
    }

    handleNext()
    {
        this.dispatchEvent(new CustomEvent('next'));
    }

    get currentPageNumber()
    {
        var totalItemCount;
        if(this.totalItemCount ===0)
        {
            totalItemCount = 0;
        }
        else
        {
            totalItemCount = this.totalItemCount;
        }
        return this.totalItemCount = totalItemCount;
    }

    get isFirstPage()
    {
        return this.pageNumber ===1;
    }

    get isLastPage()
    {
        return this.pageNumber>=this.totalPages;
    }

    get totalPages()
    {
        return Math.ceil(this.totalItemCount/this.pageSize);
    }
}