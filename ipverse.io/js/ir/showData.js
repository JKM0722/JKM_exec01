
class ViewDatas{

    createItem(data, num){
        return `
            <tr>
                <td class="table-board__td-num">${num}</td>
                <td class="table-board__td-title">
                    <a href="${data.link}">${data.title}</a>
                </td>
                <td class="table-board__td-write">${data.writer}</td>
                <td class="table-board__td-date">${data.date}</td>
            </tr>
        `
    }

    dataNone(){
        return `
            <tr>
                <td colspan="4">
                    등록된 내용이 없습니다.
                </td>
            </tr>
        `;
    }

    createList(array){
        let html = '';
        if(!array.length){
            html = dataNone;
        }else{
            for (let i = 0; i < array.length; i++) {
                html += this.createItem(array[i],(i+1)) ;
            }
        }
        return html;
    }

    showData(data){
        this.annContent.innerHTML = this.createList(data);
    }

    constructor(init) {
        this.annContent = document.getElementById(init.id);
    }
}

class Paging{

    set link(link){
        this._link = link;
    }
    set data(data){
        this._data = data;
    }

    showData(e){
        conso.log(e);
    }

    createPrev(){
        let first = '';
        let prev = '';
        let firstLink = 'javascript:void(0)';
        let prevLink = 'javascript:void(0)';

        if(this.nowPage>1){
            first = 'active';
            prev = 'active';
        }

        return `
            <div class="paging__prev-wrap">
                <a class="${first}" href="${firstLink}">
                    <span class="first"></span>
                </a>
                <a class="${prev}" href="${prevLink}">
                    <span class="prev"></span>
                </a>
            </div>
        `;
    }

    createNext(){
        let next = '';
        let last = '';
        let nextLink = 'javascript:void(0)';
        let lastLink = 'javascript:void(0)';

        if(this._data.length > this.nowPage){
            next = 'active';
            last = 'active';
        }

        return `
            <div class="paging__next-wrap">
                <a onclick="" class="${next}" href="${nextLink}">
                    <span class="next"></span>
                </a>
                <a class="${last}" href="${lastLink}">
                    <span class="last"></span>
                </a>
            </div>
        `;
    }

    createNumber(number){
        if(this.nowPage === number){
            return `<a class="active" href="#none">${number}</a>` ;
        }else {
            return  `<a onclick="" href="#none">${number}</a>`;
        }
    }

    createNumberList(){
        let items = '';

        let totalSize = this._data.length;
        let totalPageSize = totalSize/this.maxListSize;
        let startPage = (Math.floor((this.nowPage-1)/this.maxPagesSize)*this.maxPagesSize)+1;
        let end = startPage + this.maxPagesSize - 1;
        end = end > this.maxPagesSize?this.maxPagesSize:end;
        end = 1;

        for (let i = startPage; i <= end; i++) {
            items += this.createNumber(i);
        }

        return `<div class="paging__numbers">${items}</div>`;

    }

    createPaging(){

        let html = '';
        const inner = document.createElement('div');
        inner.className = 'paging__inner';
        html += this.createPrev();
        html += this.createNumberList(this._data.length);
        html += this.createNext();
        inner.innerHTML = html;

        this.page.appendChild(inner);
    }
    
    constructor(){
        this.page = document.querySelector('#paging');
        this.nowPage = 1;
        this.maxListSize = 10;
        this.maxPagesSize = 5;

    }
}

const announceTable = new ViewDatas({id:'announceBoardContent'});
// const activityTabel = new ViewDatas({id:'activityContent'});
const paging = new Paging();

paging.data = [];
paging.createPaging();

// fetch('/data/announce.json')
// .then(res =>{
//     return res.json();
// })
// .then(data =>{
//     announceTable.showData(data.reverse());
//     paging.data = data;
//     paging.link = ''
//     paging.createPaging();
//     console.log(paging.data);
// })
// .catch(err=>{
//     console.error('Error : ',err);
// });

// fetch('/data/activity.json')
// .then(res =>{
//     return res.json();
// })
// .then(data =>{
//     // announceTable.showData(data.reverse());
//     // paging.data = data;
//     // paging.link = ''
//     // paging.createPaging();
//     // console.log(paging.data);
// })
// .catch(err=>{
//     console.error('Error : ',err);
// });