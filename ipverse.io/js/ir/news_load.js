class News{

    constructor(totalData, dataPerPage, pageCount){
        if(!totalData) return console.log('데이터가 없습니다.');
        this.dataPerPage = dataPerPage?dataPerPage:10;
        this.pageCount = pageCount?pageCount:10;

        this.totalDataList = [];

        this.totalPage = Math.ceil(totalData.length/this.dataPerPage);

        for(let i=0;i<=this.totalPage;i++){

            let sliceStart = i*this.dataPerPage;
            let sliceEnd = sliceStart + this.dataPerPage;

            this.totalDataList.push( totalData.slice(sliceStart, sliceEnd) );

        }

        this.creatNewsList(0);

    }

    creatNewsList(currentPage){
        const target = document.querySelector('#newsList');
        const ul = document.createElement('ul');
        ul.className = 'on';
        ul.setAttribute('lang', 'ko');
        const data = this.totalDataList[currentPage];
        // console.log(data);
        const dataEndNum = this.dataPerPage < data.length ? this.dataPerPage : data.length;
        
        for(let i=0;i<dataEndNum;i++){
            ul.innerHTML += this.createNews( data[i] );
        }

        const preUl = target.querySelector('ul');
        if(preUl) target.removeChild(preUl);
        target.appendChild(ul);

        this.createPagingButtonList(currentPage);

        // console.log('this is ul html : ', ul);

    }

    createNews(data){

        return `<li class="news-hover-ani">
                    <a href="${data.link}" target="_blank">
                        <p><img src="${data.img}?2" alt=""></p>
                        <div>
                            <div>
                                <h5>${data.title}</h5>
                                <p class="news_contents">${data.txt}</p>
                                <p class="date">${data.publicationDate}</p>
                            </div>
                            <div class="direct_icon">
                                <img src="/images/common/arrow_right_black.svg" alt="바로가기 화살표">
                            </div>
                        </div>
                    </a>
                </li>
                `

    }

    createPagingButtonList(currentPage){
        const target = document.querySelector('#pageButton');
        const ul = document.createElement('ul');
        // console.log(currentPage);

        // console.log('this is calc : ',currentPage / this.pageCount);
        const pageStartNum = (Math.floor(currentPage / this.pageCount) * this.pageCount) + 1;
        const pageEndNum = (pageStartNum+this.pageCount)<this.totalDataList.length?pageStartNum+this.pageCount:this.totalDataList.length;

        // console.log('this is page start numb : ',pageStartNum);
        // console.log('this is page End numb : ',pageEndNum);
        for(let i=pageStartNum;i<pageEndNum;i++){
            if(i === currentPage+1){
                ul.innerHTML += this.createPagingButton(i, 'on', 'disabled');
            }else {
                ul.innerHTML += this.createPagingButton(i);
            }
        }

        const preUl = target.querySelector('ul');
        if(preUl) target.removeChild(preUl);
        target.appendChild(ul);
        this.createArrowButton(pageStartNum, pageEndNum);

    }

    createPagingButton(number, nowPage, disabled){

        return `<li class="page_1 page">
                    <button class="news-button ${nowPage}" onclick="hehe.pageMove(${number - 1})" data-page-id="${number - 1}" ${disabled}>${number}</button>
                </li>`;
    }

    createArrowButton(startNum, endNum){
        const preBtn = document.querySelector('#preBtn');
        const nextBtn = document.querySelector('#nextBtn');

        // console.log('this is arrow : ',startNum);
        if(startNum>1){
            // console.log('this is right?');
            preBtn.innerHTML = `<button class="prev_btn" onclick="hehe.pageMove(${startNum - 2})">
                                    <img class="on" src="/images/common/arrow_right_black.svg" alt="화살표 검은색">
                                    <img src="/images/common/arrow_right_gray.svg" alt="화살표 회색">
                                </button>`
        }else {
            preBtn.innerHTML = `<button class="prev_btn" disabled>
                                    <img src="/images/common/arrow_right_black.svg" alt="화살표 검은색">
                                    <img class="on" src="/images/common/arrow_right_gray.svg" alt="화살표 회색">
                                </button>`
        }

        if(endNum+1 < this.totalDataList.length){
            nextBtn.innerHTML = `<button class="next_btn" onclick="hehe.pageMove(${endNum - 1})">
                                    <img class="on" src="/images/common/arrow_right_black.svg" alt="화살표 검은색">
                                    <img src="/images/common/arrow_right_gray.svg" alt="화살표 회색">
                                </button>`;
        }else {
            nextBtn.innerHTML = `<button class="next_btn">
                                    <img style="padding: 10px;" src="/images/common/arrow_right_black.svg" alt="화살표 검은색">
                                    <img style="padding: 10px;" class="on" src="/images/common/arrow_right_gray.svg" alt="화살표 회색">
                                </button>`;
        }

    }

    pageMove(page){
        this.creatNewsList(page);
    }
}

let hehe;

fetch('/data/news.json', {cache:"no-store"})
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        hehe = new News(myJson.news, 10, 5);
    });

