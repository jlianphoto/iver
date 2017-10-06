<template>
    <div :class="prefixCls">
        <ul :class="prefixCls+'-nav'" ref="titleList">
            <li v-for="(title , index) in titleText" @click="changeTab(index , $event)">{{title}}</li>
        </ul>
        <div :class="[{show:show}, prefixCls+'-wrapper']" ref="dropDownWrapper">
            <div :class="prefixCls+'-list'" v-for="(list , index) in dropDownList">
                <ul>
                    <li v-for="(item , index) in list[0]" @click="selectFirstItem(index , $event)">{{item}}</li>
                </ul>

                <template v-if="list[1].length>0 && isInit[index]">
                    <ul>
                        <li v-for="(item , index) in list[1]" @click="selectSecondItem(index , $event)">{{item}}</li>
                    </ul>
                </template>
                <template v-if="list[2].length>0">
                    <ul>
                        <li v-for="(item , index) in list[2]" @click="thirdSecondItem(index , $event)">{{item}}</li>
                    </ul>
                </template>
            </div>
            <div :class="prefixCls+'-cover'" @click="hideWrapper"></div>

        </div>
    </div>
</template>



<script type="text/javascript">
    import './dropDown.scss';

    Array.prototype.arrClear = function () {
        this.splice(0, this.length);
    };

    var firstIndex = [],
        secondIndex = 0,
        thirdIndex = 0;

    var selectedData = [];


    export default {
        name: 'dropDown',
        data() {
            return {
                prefixCls: 'iv-dropDown',
                show: false,
                titleText: [],
                isInit: [],
                dropDownList: [

                ]
            };
        },
        listEl: null,
        tabIndex: 0,
        props: {
            dropDownData: {
                type: Array,
                default() {
                    return [];
                }
            },
            selectCallback: {
                type: Function,
                default() { }
            }
        },
        watch: {
            dropDownData() {
                this.init();
            }
        },
        created() {
            if (this.dropDownData.length>0) this.init();
        },
        mounted() {
            this.$options.titleList = this.$refs.titleList;
            this.$options.listEl = this.$refs.dropDownWrapper.querySelectorAll('.iv-dropDown-list'); //
            this.$options.listEl[0].classList.add('active');
        },
        methods: {
            init(){
                this.dropDownData.forEach((item, i) => {
                    var arr = [[], [], []];
                    this.isInit.push(false);
                    this.dropDownList.push(arr);
                    firstIndex.push(0);

                    this.titleText.push(item.name);

                    item.children.forEach((firstItem, j) => {
                        this.dropDownList[i][0].push(firstItem.name);

                        if (firstItem.children && j === 0) {
                            firstItem.children.forEach((secondItem, k) => {
                                this.dropDownList[i][1].push(secondItem.name);

                                if (secondItem.children && k === 0) {
                                    secondItem.children.forEach(thirdItem => {
                                        this.dropDownList[i][2].push(thirdItem.name);
                                    });
                                }
                            });
                        }
                    });
                });
            },
            changeTab(index, e) {

                this.$options.listEl.forEach(item => {
                    item.classList.remove('active');
                });
                this.$options.listEl[index].classList.add('active');
                this.$options.tabIndex = index;

                if (e.target.classList.contains('cur')) {
                    this.show = false;
                    e.target.classList.remove('cur');
                } else {
                    this.classHandler(e);
                    this.show = true;
                }


            },
            selectFirstItem(index, e) {
                let i = this.$options.tabIndex; //第几个tab
                firstIndex[i] = index;

                let child = this.dropDownData[i].children[firstIndex[i]];

                this.isInit[i] = true;
                this.classHandler(e);

                selectedData.splice(1, selectedData.length);
                selectedData[0] = child;
                //change secondArr
                if (!child.children) {
                    this.dropDownList[i][1].arrClear();
                    this.dropDownList[i][2].arrClear();
                    this.hideWrapper();
                } else {

                    // set init state
                    this.classInit(e, 'first');

                    this.dropDownList[i][1].arrClear();

                    child.children.forEach(item => {
                        this.dropDownList[i][1].push(item.name);
                    });
                    this.dropDownList[i][2].arrClear();

                }

                this.titleText[i] = selectedData[0].name;
                this.selectCallback(selectedData);
            },
            selectSecondItem(index, e) {
                let i = this.$options.tabIndex;

                this.classHandler(e); //第几个tab
                secondIndex = index;

                let child = this.dropDownData[i].children[firstIndex[i]];


                selectedData.splice(2, selectedData.length);
                selectedData[0] = selectedData[0] ? selectedData[0] : child;
                selectedData[1] = child.children[secondIndex];
                if (!child.children[secondIndex].children) {
                    this.dropDownList[i][2].arrClear();
                    this.hideWrapper();
                } else {

                    // set init state
                    this.classInit(e, 'second');

                    this.dropDownList[i][2].arrClear();
                    child.children[secondIndex].children.forEach(item => {
                        this.dropDownList[i][2].push(item.name);
                    });

                }

                this.titleText[i] = selectedData[1].name;
                this.selectCallback(selectedData);
            },
            thirdSecondItem(index, e) {
                let i = this.$options.tabIndex; //第几个tab
                thirdIndex = index;

                let child = this.dropDownData[i].children[firstIndex[i]];

                this.classHandler(e);

                selectedData[0] = selectedData[0] ? selectedData[0] : child;
                selectedData[1] = selectedData[1] ? selectedData[1] : child.children[0];
                selectedData[2] = child.children[secondIndex].children[thirdIndex];

                this.titleText.splice(i, 1, selectedData[2].name);
                this.selectCallback(selectedData);

                this.hideWrapper();

            },
            hideWrapper() {
                this.show = false;
                this.$options.titleList.querySelectorAll('li').forEach(item => {
                    item.classList.remove('cur');
                });
            },
            classHandler(e) {
                e.target.parentNode.childNodes.forEach(item => {
                    item.classList.remove('cur');
                });
                e.target.classList.add('cur');
            },
            // init other ul's class when user click
            classInit(e, sequence) {
                var parent = e.target.parentNode.parentNode;
                var childs = parent.querySelectorAll('ul');

                var index = sequence === 'first' ? 1 : 2;

                if (childs[index]) {
                    var lis = childs[index].querySelectorAll('li');
                    lis.forEach(item => {
                        item.classList.remove('cur');
                    });
                }


            }
        }
    };

</script>