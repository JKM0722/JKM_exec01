class Table{

    // page show S

    createPrev(){
        let first = '';
        let prev = '';

        let firstNum = Math.floor((this.nowPage-1)/this.maxPageSize) + 1;
        let prevNum = '';

        let firstLink = 'javascript:void(0)';
        let prevLink = 'javascript:void(0)';

        if(this.nowPage>1){
            first = 'active';
            prev = 'active';
        }

        return `
            <div class="paging__prev-wrap">
                <a data-page-id="${firstNum}" class="${first}" href="${firstLink}">
                    <span class="first"></span>
                </a>
                <a data-page-id="${this.nowPage - 1}" class="${prev}" href="${prevLink}">
                    <span class="prev"></span>
                </a>
            </div>
        `;
    }

    createNext(){
        let next = '';
        let last = '';

        let nextNum = this.nowPage + 1;
        let lastNum = Math.floor(this.nowPage/this.maxPageSize) + this.maxPageSize;
        if(lastNum>this.array.length) lastNum = this.array.length;

        let nextLink = 'javascript:void(0)';
        let lastLink = 'javascript:void(0)';

        if(this.nowPage < this.array.length){
            next = 'active';
            last = 'active';
        }

        return `
            <div class="paging__next-wrap">
                <a data-page-id="${nextNum}" onclick="" class="${next}" href="${nextLink}">
                    <span class="next"></span>
                </a>
                <a data-page-id="${lastNum}" class="${last}" href="${lastLink}">
                    <span class="last"></span>
                </a>
            </div>
        `;
    }

    createNumber(number){
        if(Number(this.nowPage)  === number){
            return `<a data-page-id="${number}" class="active" href="#none">${number}</a>` ;
        }else {
            return  `<a data-page-id="${number}" href="#none">${number}</a>`;
        }
    }

    createNumberList(){
        let items = '';

        let startPage = (Math.floor((this.nowPage-1)/this.maxPageSize) * this.maxPageSize) + 1;

        let end = startPage+this.maxPageSize;
        if(end > this.array.length){
            end = this.array.length +1;
        }

        if(end === 1) end = 2;

        for (let i = startPage; i < end; i++) {
            items += this.createNumber(i);
        }

        return `<div class="paging__numbers">${items}</div>`;

    }



    createPaging(data){
        if(this.paging) this.paging.remove(); 

        this.paging = document.createElement('div');
        this.paging.className = 'paging';
        this.paging.innerHTML = `
            <div class="paging__inner">
                ${this.createPrev()}
                ${this.createNumberList(data)}
                ${this.createNext()}
            </div>
        `;
        this.paging.querySelectorAll('a').forEach(item=>{
            // item.style = 'pointer-events: auto';
            item.addEventListener('click',this.movePage.bind(this));
        })
        this.table.insertAdjacentElement('afterend',this.paging);

    }

    movePage(e){
        if(e.target.dataset.pageId){
            this.nowPage = Number(e.target.dataset.pageId);
        }else{
            this.nowPage = Number(e.target.parentNode.dataset.pageId);
        }
        this.table.innerHTML = `
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    ${this.table.innerHTML = this.createList(this.array[Number(this.nowPage)-1],this.nowPage)}
        `;
        this.createPaging(this.array[this.array[Number(this.nowPage)-1],this.nowPage]);

    }

    // page show S

    // data show S
    createList(array){

        let html = '';

        if(!array || array.length < 1){
            html += this.dataNone();
        }else{
            for (let i = 0; i < array.length; i++) {
                html += this.createItem(array[i],((i+1) + ((this.nowPage-1) * Number(this.maxListSize) ) )) ;
            }
        }

        return html;
    }

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
            <tbody>
                <tr>
                    <td colspan="4">
                        등록된 내용이 없습니다.
                    </td>
                </tr>
            </tbody>
        `;
    }
    // data show S

    showData(){
        // this.content.innerHTML = this.createList(this.data);
    }
    
    createTable(data){
        this.content.innerHTML = '';
        this.table = document.createElement('table');
        this.table.setAttribute('lang','ko');
        this.table.className = 'table-board';
        this.table.innerHTML = `
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    ${this.createList(this.array[0])}
        `;
        this.content.appendChild(this.table);
    }

    initData(data){
        this.data = data.reverse();
        this.array = [];
        let end = Math.ceil(this.data.length/this.maxListSize);

        for (let i = 0; i < end; i++) {
            let sliceStart = i*this.maxListSize;
            let sliceEnd = sliceStart + 10;
            this.array[i] = this.data.slice(sliceStart,sliceEnd);
        }

    }


    constructor(obj){
        this.nowPage = 1;
        this.content = document.getElementById(obj.table);
        this.maxListSize = obj.maxListSize;
        this.maxPageSize = obj.maxPageSize;
        this.link = obj.link;

        fetch(obj.link, obj.option)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.data = data;
            this.initData(data);
            this.createTable(data);
            this.createPaging(data);
        })
        .catch(error=>{
            console.error('Err : ',error);
        })
    }
}

// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

class MobileTable{

    // page show S

    createPrev(){
        let prev = '';

        let prevNum = this.nowPage - 1;

        let prevLink = 'javascript:void(0)';

        if(this.nowPage>1){
            prev = 'active';
        }

        return `
            <div class="paging__prev-wrap">
                <a data-page-id="${prevNum}" class="${prev}" href="${prevLink}">
                    <span class="prev"></span>
                </a>
            </div>
        `;
    }

    createNext(){
        let next = '';

        let nextNum = this.nowPage + 1;

        let nextLink = 'javascript:void(0)';

        if(this.nowPage < this.array.length){
            next = 'active';
        }

        return `
            <div class="paging__next-wrap">
                <a data-page-id="${nextNum}" onclick="" class="${next}" href="${nextLink}">
                    <span class="next"></span>
                </a>
            </div>
        `;
    }

    createNumber(number){
        if(Number(this.nowPage)  === number){
            return `<a data-page-id="${number}" class="active" href="#none">${number}</a>` ;
        }else {
            return  `<a data-page-id="${number}" href="#none">${number}</a>`;
        }
    }

    createNumberList(){
        let items = '';

        let startPage = (Math.floor((this.nowPage-1)/this.maxPageSize) * this.maxPageSize) + 1;


        let end = startPage+this.maxPageSize;
        if(end > this.array.length){
            end = this.array.length +1;
        }

        if(end === 1) end = 2;

        for (let i = startPage; i < end; i++) {
            items += this.createNumber(i);
        }

        return `<div class="paging__numbers">${items}</div>`;

    }



    createPaging(data){
        if(this.paging) this.paging.remove(); 

        this.paging = document.createElement('div');
        this.paging.className = 'paging';
        this.paging.innerHTML = `
            <div class="paging__inner">
                ${this.createPrev()}
                ${this.createNumberList(data)}
                ${this.createNext()}
            </div>
        `;
        this.paging.querySelectorAll('a').forEach(item=>{
            // item.style = 'pointer-events: auto';
            item.addEventListener('click',this.movePage.bind(this));
        })
        this.table.insertAdjacentElement('afterend',this.paging);

    }

    movePage(e){
        if(e.target.dataset.pageId){
            this.nowPage = Number(e.target.dataset.pageId);
        }else{
            this.nowPage = Number(e.target.parentNode.dataset.pageId);
        }
        this.table.innerHTML = ` 
            <ul class="content-body">
                ${this.table.innerHTML = this.createList(this.array[Number(this.nowPage)-1],this.nowPage)} 
            </ul>
        `;
        this.createPaging(this.array[this.array[Number(this.nowPage)-1],this.nowPage]);

    }

    // page show S

    // data show S
    createList(array){

        let html = '';

        if(!array || array.length < 1){
            html += this.dataNone();
        }else{
            for (let i = 0; i < array.length; i++) {
                html += this.createItem(array[i],((i+1) + ((this.nowPage-1) * Number(this.maxListSize) ) )) ;
            }
        }

        return html;
    }

    createItem(data, num){
        return `
            <li>
                <a href="${data.link}"></a>
                <p class="table-board__td-title">
                    ${data.title}
                </p>
                <div class="table-board__td-write">${data.writer} | ${data.date}</div>
            </li>
        `
    }

    dataNone(){
        return `
            <li>
                <p colspan="4">
                    등록된 내용이 없습니다.
                </p>
            </li>
        `;
    }
    // data show S

    showData(){

    }
    
    createTable(data){
        this.content.innerHTML = '';
        this.table = document.createElement('div');
        this.table.setAttribute('lang','ko');
        this.table.className = 'table-board';
        this.table.innerHTML = `
        <ul class="content-body">
            ${this.createList(this.array[0])}
        </ul>
        `;
        this.content.appendChild(this.table);
    }

    initData(data){
        this.data = data.reverse();
        this.array = [];
        let end = Math.ceil(this.data.length/this.maxListSize);

        for (let i = 0; i < end; i++) {
            let sliceStart = i*this.maxListSize;
            let sliceEnd = sliceStart + 10;
            this.array[i] = this.data.slice(sliceStart,sliceEnd);
        }

    }


    constructor(obj){
        this.nowPage = 1;
        this.content = document.getElementById(obj.table);
        this.maxListSize = obj.maxListSize;
        this.maxPageSize = obj.maxPageSize;
        this.link = obj.link;

        fetch(obj.link, obj.option)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.data = data;
            this.initData(data);
            this.createTable(data);
            this.createPaging(data);
        })
        .catch(error=>{
            let data = [];
            this.data = data;
            this.initData(data);
            this.createTable(data);
            this.createPaging(data);
            console.error('Err : ',error);
        })
    }
}
